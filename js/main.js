let shipsetting = {};
let showshiplist = {};
let hidelist = [];
let current_shipid = "";
let current_shiprar = "";
let newshipid = "";
let fleetpos = "";
let current_equipid = "";
let current_equiptype = "";
let ani = "animation: runtext 3s linear alternate infinite;";
ani = "";

$(document).ready(
    function() {
        createmptyship();
        $(".btn-outline-light").click(
            function() {
                $(this).button("toggle");
                shipdisplay(0);
            }
        );
    }
);

function setlang(obj) {
    let lang = obj.id;
    let allname = document.querySelectorAll(".boxtext[cn]");
    let de = 0;

    let strmax = 0;
    if (lang === "cn") {
        strmax = 11;
    }
    allname.forEach((item) => {
        setTimeout(() => {
            let newname = item.getAttribute(lang);
            if (newname.len() >= 11) {
                item.setAttribute("style", ani);
            } else {
                item.removeAttribute("style");
            }
            item.textContent = newname;
        }, de);
        de++;
    });
}

function sorting(arr, key, descen) {
    if (descen) {
        arr.sort((a, b) => {
            return a[key] < b[key] ? 1 : -1;
        });
        return arr;
    } else {
        arr.sort((a, b) => {
            return a[key] > b[key] ? 1 : -1;
        });
        return arr;
    }
}

function setshipbutton() {
    if (fleetpos === "front") {
        document.getElementById("ffs").style.display = "inline";
        document.getElementById("fbs").style.display = "none";
    } else {
        document.getElementById("ffs").style.display = "none";
        document.getElementById("fbs").style.display = "inline";
    }
}

function setcurrent(item) {
    if (item.className === "shipicon") {
        current_shipid = String(item.id);
        fleetpos = item.getAttribute("limit");
        shipdisplay(0);
        setshipbutton();
    } else {
        current_equipid = String(item.id);
        current_equiptype = item.getAttribute("eqtype");
        equipdisplay(item);
    }
}

function setnewship(id) {
    newshipid = String(id);
}

function sEquipButton(item, status) {
    let allbutton = item.querySelectorAll(".equip");
    allbutton.forEach(item => {
        item.textContent = "";
        item.style = "";
    });
    if (status) {
        allbutton.forEach(item => {
            item.disabled = false;
            let pos = "equip_" + item.getAttribute("pos");
            let ship = ship_data[newshipid];
            item.setAttribute("eqtype", ship[pos]);
            item.setAttribute("stype", ship.type);
        });
    } else {
        allbutton.forEach(item => item.disabled = true);
    }
}

function updateship(id) {
    let button = document.getElementById(current_shipid);
    let shipdiv = document.getElementById(current_shipid.slice(0, 3));
    button.textContent = "";
    setnewship(id);
    if (id === 0) {
        button.setAttribute("style", "background:gray;");
        sEquipButton(shipdiv, false);
        return;
    } else {
        button.setAttribute("style", "background:none;");
        sEquipButton(shipdiv, true);
    }
    let item = document.getElementById(newshipid).querySelectorAll(".container,.textbox");
    item.forEach(x => button.appendChild(x.cloneNode(true)));
}

function updateEquip(item) {
    let button = document.getElementById(current_equipid);
    button.textContent = "";
    if (item.id === 0) {
        button.setAttribute("style", "background-color:rgb(30.8%, 30.8%, 30.8%);");
        return;
    } else {
        button.setAttribute("style", "background:none;");
    }
    let neweq = document.getElementById(item.id).querySelectorAll(".container,.textbox");
    neweq.forEach(x => button.appendChild(x.cloneNode(true)));
}

function getcolor(rarity) {
    let color = "";
    switch (rarity) {
        case 1:
            color = "lightgray";
            break;
        case 2:
            color = "lightgray";
            break;
        case 3:
            color = "lightblue";
            break;
        case 4:
            color = "Plum";
            break;
        case 5:
            color = "Gold";
            break;
        case 6:
            color = "OrangeRed";
            break;
        default:
            break;
    }
    return color;
}

function createmptyship() {
    let shiplist = document.getElementById("shiplist");
    let newship = document.createElement("button");
    $(newship).attr({
        "type": "button",
        "class": "shipicon",
        "id": "0",
        "style": "display:inline;",
        "data-dismiss": "modal",
        "onclick": "updateship(0)"
    });
    let newicon = document.createElement("img");
    $(newicon).attr({
        "src": "shipicon/empty.jpg",
        "class": "main",
        "loading": "lazy"
    });

    let top = document.createElement("div");
    $(top).attr({
        "class": "container itembox"
    });

    top.appendChild(newicon);

    let newname = document.createElement("div");
    $(newname).attr({
        "class": "textbox"
    });

    let name = document.createElement("div");
    $(name).attr({
        "class": "boxtext text-nowrap small"
    });
    name.textContent = "remove";
    newname.appendChild(name);

    newship.appendChild(top);
    newship.appendChild(newname);
    shiplist.appendChild(newship);
    creatallships();
}

function creatallships() {
    let newlist = [];
    let de = 0;
    for (let index in ship_data) {
        newlist.push(ship_data[index]);
    }
    newlist = sorting(newlist, 'type', true);
    newlist = sorting(newlist, 'nationality', true);
    newlist = sorting(newlist, 'rarity', true);
    newlist.forEach((item) => {
        setTimeout(function() {
            let ship = item;
            let shiplist = document.getElementById("shiplist");
            let newship = document.createElement("button");
            let rarity = ship.rarity - 1;
            $(newship).attr({
                "type": "button",
                "class": "shipicon",
                "id": ship.skin_id,
                "style": "display:inline; background:none;",
                "data-dismiss": "modal",
                "onclick": "updateship(" + ship.skin_id + ")"
            });
            let newicon = document.createElement("img");
            $(newicon).attr({
                "src": "shipicon/" + ship.painting.toLowerCase() + ".png",
                "class": "main",
                "loading": "lazy"
            });
            let newbg = document.createElement("img");
            $(newbg).attr({
                "src": "ui/bg" + rarity + ".png",
                "class": "bg",
                "loading": "lazy"
            });
            let newframe = document.createElement("img");
            $(newframe).attr({
                "src": "ui/frame_" + rarity + "b.png",
                "class": "frame",
                "loading": "lazy"
            });
            let newstar = document.createElement("div");
            let star = "";
            let pos = "";
            for (let x = 0; x < ship.star + 1; x++) {
                if (x > 0 && x != ship.star) {
                    star += ",";
                    pos += ",";
                } else if (x === ship.star) {
                    star += ";";
                    pos += ";";
                    break;
                }
                star += "url(ui/star.png)";
                pos += (x * 10) + "px";
            }
            $(newstar).attr({
                "class": "star",
                "style": "background-image:" + star + "background-position:" + pos
            });

            let top = document.createElement("div");
            $(top).attr({
                "class": "container itembox"
            });

            top.appendChild(newicon);
            top.appendChild(newbg);
            top.appendChild(newframe);
            top.appendChild(newstar);

            let newname = document.createElement("div");
            $(newname).attr({
                "class": "textbox"
            });

            let name = document.createElement("div");
            $(name).attr({
                "class": "boxtext text-nowrap small",
                "cn": ship.cn_name,
                "en": ship.en_name,
                "jp": ship.jp_name
            });
            name.textContent = ship.cn_name;

            if (ship.cn_name.len() >= 11) {
                name.setAttribute("style", ani);
            }
            newname.appendChild(name);

            newship.appendChild(top);
            newship.appendChild(newname);
            shiplist.appendChild(newship);
        }, de);
        de++;
    });
    creatallequips(de);
}

String.prototype.len = function() {
    return this.replace(/[^\x00-\xff]/g, "rr").length;
};

function runasync(x, de = 0) {
    return setTimeout(x, de);
}

function creatallequips(de) {
    let newlist = [];
    for (let index in equip_data) {
        newlist.push(equip_data[index]);
    }
    newlist = sorting(newlist, 'nationality', true);
    newlist = sorting(newlist, 'type', false);
    newlist = sorting(newlist, 'rarity', true);
    newlist.forEach((item) => {
        setTimeout(function() {
            let equip = item;
            let equiplist = document.getElementById("equiplist");
            let newequip = document.createElement("button");
            let rarity = equip.rarity;
            if (rarity > 1) {
                rarity--;
            }
            $(newequip).attr({
                "type": "button",
                "class": "equip",
                "id": equip.id,
                "style": "display:inline; background-color:none;",
                "data-dismiss": "modal",
                "onclick": "updateEquip(this)"
            });
            let newicon = document.createElement("img");
            $(newicon).attr({
                "src": "equips/" + String(equip.icon) + ".png",
                "class": "img-rounded img-fluid h-100 main",
                "loading": "lazy"
            });
            let newbg = document.createElement("img");
            $(newbg).attr({
                "src": "ui/bg" + rarity + ".png",
                "class": "bg",
                "loading": "lazy"
            });
            let newframe = document.createElement("img");
            $(newframe).attr({
                "src": "ui/frame_" + rarity + "b.png",
                "class": "frame",
                "loading": "lazy"
            });
            let newstar = document.createElement("div");
            let star = "";
            let pos = "";
            for (let x = 0; x < equip.rarity + 1; x++) {
                if (x > 0 && x != equip.rarity) {
                    star += ",";
                    pos += ",";
                } else if (x === equip.rarity) {
                    star += ";";
                    pos += ";";
                    break;
                }
                star += "url(ui/star.png)";
                pos += (x * 10) + "px";
            }
            $(newstar).attr({
                "class": "star",
                "style": "background-image:" + star + "background-position:" + pos
            });

            let top = document.createElement("div");
            $(top).attr({
                "class": "container itembox"
            });
            top.appendChild(newicon);
            top.appendChild(newbg);
            top.appendChild(newframe);
            top.appendChild(newstar);

            let newname = document.createElement("div");
            $(newname).attr({
                "class": "textbox"
            });

            let name = document.createElement("div");
            $(name).attr({
                "class": "boxtext text-nowrap small",
                "cn": equip.cn_name,
                "en": equip.en_name,
                "jp": equip.jp_name
            });
            name.textContent = equip.cn_name;

            if (equip.cn_name.len() >= 11) {
                name.setAttribute("style", ani);
            }
            newname.appendChild(name);

            newequip.appendChild(top);
            newequip.appendChild(newname);
            equiplist.appendChild(newequip);
        }, de);
        de++;
    });
    shipdisplay(de);
}

function shipdisplay(de = 0) {
    shipsetting = getsetting();
    for (let index in ship_data) {
        setTimeout(() => {
            let ship = ship_data[index];
            let select = isshipselect(ship);
            if (select) {
                document.getElementById(index).style.display = "inline";
            } else {
                document.getElementById(index).style.display = "none";
            }
        }, de);
        de++;
    }
}

function equipdisplay(item) {
    shiptype = parseInt(item.getAttribute("stype"), 10);
    equiptype = item.getAttribute("eqtype").split(",");
    for (let index in equip_data) {
        setTimeout(() => {
            let equip = equip_data[index];
            let forbidden = equip_data[index].ship_type_forbidden;
            if (equiptype.includes(String(equip.type))) {
                if (forbidden.includes(shiptype)) {
                    document.getElementById(index).style.display = "none";
                } else {
                    document.getElementById(index).style.display = "inline";
                }
            } else {
                document.getElementById(index).style.display = "none";
            }
        }, 0);
    }
}

function isshipselect(ship) {
    let front = [1, 2, 3, 8, 17, 18];
    let back = [4, 5, 6, 7, 12, 13];
    if (fleetpos === "front") {
        if (!front.includes(ship.type)) {
            return false;
        }
    }
    if (fleetpos === "back") {
        if (!back.includes(ship.type)) {
            return false;
        }
    }
    let indicator_nation = false;
    let indicator_type = false;
    let indicator_rarity = false;
    let key = "nationality";
    if (testship(shipsetting[key], String(ship[key]))) {
        indicator_nation = true;
    }
    key = "type";
    if (testship(shipsetting[key], String(ship[key]))) {
        indicator_type = true;
    }
    key = "rarity";
    if (testship(shipsetting[key], String(ship[key]))) {
        indicator_rarity = true;
    }
    if (indicator_nation && indicator_type && indicator_rarity) {
        key = "retro";
        if (shipsetting[key] === "1" && (shipsetting[key] === String(ship[key]))) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}

function testship(setting, shipvalue) {
    if (setting.length > 0) {
        if (setting.includes(shipvalue)) {
            return true;
        } else {
            return false;
        }
    } else {
        return true;
    }
}

function getsetting() {
    let newsetting = {};
    let newlist = [];
    let shipnation = document.getElementById("shipnation").querySelectorAll("button[aria-pressed=true]");
    let shiptype = document.getElementById("shiptype").querySelectorAll("button[aria-pressed=true]");
    let shiprarity = document.getElementById("shiprarity").querySelectorAll("button[aria-pressed=true]");
    let other = ["98", "101", "103", "104", "105"];
    if (shipnation.length > 0) {
        newlist = [];
        shipnation.forEach(element => {
            if (element.value === "0") {
                other.forEach(x => newlist.push(x));
            } else {
                newlist.push(element.value);
            }
        });
        newsetting.nationality = newlist;
    } else {
        newsetting.nationality = [];
    }
    let front = [1, 2, 3, 8, 17, 18];
    let back = [4, 5, 6, 7, 12, 13];
    if (shiptype.length > 0) {
        newlist = [];
        shiptype.forEach(element => {
            let x = parseInt(element.value, 10);
            if (fleetpos === "front" && front.includes(x)) {
                newlist.push(element.value);
            } else if (fleetpos === "back" && back.includes(x)) {
                newlist.push(element.value);
            }
        });
        newsetting.type = newlist;
    } else {
        newsetting.type = [];
    }
    if (shiprarity.length > 0) {
        newlist = [];
        shiprarity.forEach(element => newlist.push(element.value));
        newsetting.rarity = newlist;
    } else {
        newsetting.rarity = [];
    }
    let retro = document.getElementById("shipretro").querySelector("button[aria-pressed=true]");
    if (retro) {
        newsetting.retro = retro.value;
    } else {
        newsetting.retro = "0";
    }
    return newsetting;
}