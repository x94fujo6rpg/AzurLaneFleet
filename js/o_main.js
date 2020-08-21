var shipsetting = {};
var showshiplist = {};
var hidelist = [];
var current_shipid = "";
var current_shiprar = "";
var newshipid = "";
var fleetpos = "";
var current_equipid = "";
var current_equiptype = "";

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
    var allbutton = item.querySelectorAll(".equip");
    allbutton.forEach(item => {
        item.textContent = "";
        item.style = "";
    });
    if (status) {
        allbutton.forEach(item => {
            item.disabled = false;
            var pos = "equip_" + item.getAttribute("pos");
            var ship = ship_data[newshipid];
            item.setAttribute("eqtype", ship[pos]);
            item.setAttribute("stype", ship.type);
        });
    } else {
        allbutton.forEach(item => item.disabled = true);
    }
}

function updateship(id) {
    var button = document.getElementById(current_shipid);
    var shipdiv = document.getElementById(current_shipid.slice(0, 3));
    button.textContent = "";
    setnewship(id);
    if (id === 0) {
        button.setAttribute("style", "background-color:gray;");
        sEquipButton(shipdiv, false);
        return;
    } else {
        sEquipButton(shipdiv, true);
    }
    var item = document.getElementById(newshipid).querySelectorAll("img");
    item.forEach(x => button.appendChild(x.cloneNode(true)));
}

function updateEquip(item) {
    var button = document.getElementById(current_equipid);
    button.textContent = "";
    if (item.id === 0) {
        button.setAttribute("style", "background-color:rgb(30.8%, 30.8%, 30.8%);");
        return;
    }
    var neweq = document.getElementById(item.id).querySelectorAll("img");
    neweq.forEach(x => button.appendChild(x.cloneNode(true)));
}

function getcolor(rarity) {
    var color = "";
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
    var shiplist = document.getElementById("shiplist");
    var newship = document.createElement("button");
    $(newship).attr({
        "type": "button",
        "class": "shipicon",
        "id": "0",
        "style": "display:inline;",
        "data-dismiss": "modal",
        "onclick": "updateship(0)"
    });
    var newicon = document.createElement("img");
    $(newicon).attr({
        "src": "shipicon/empty.jpg",
        "class": "main",
        "loading": "lazy"
    });
    newship.appendChild(newicon);
    shiplist.appendChild(newship);
    creatallships();
}

function creatallships() {
    var newlist = [];
    for (let index in ship_data) {
        newlist.push(ship_data[index]);
    }
    newlist = sorting(newlist, 'type', true);
    newlist = sorting(newlist, 'nationality', true);
    newlist = sorting(newlist, 'rarity', true);
    var de = 0;
    newlist.forEach((item) => {
        setTimeout(function() {
            var ship = item;
            var shiplist = document.getElementById("shiplist");
            var newship = document.createElement("button");
            var rarity = ship.rarity - 1;
            $(newship).attr({
                "type": "button",
                "class": "shipicon",
                "id": ship.skin_id,
                "style": "display:inline; background-color:" + getcolor(ship.rarity) + ";",
                "data-dismiss": "modal",
                "onclick": "updateship(" + ship.skin_id + ")"
            });
            var newicon = document.createElement("img");
            $(newicon).attr({
                "src": "shipicon/" + ship.painting.toLowerCase() + ".png",
                "class": "main",
                "loading": "lazy"
            });
            var newbg = document.createElement("img");
            $(newbg).attr({
                "src": "ui/bg" + rarity + ".png",
                "class": "bg",
                "loading": "lazy"
            });
            var newframe = document.createElement("img");
            $(newframe).attr({
                "src": "ui/frame_" + rarity + "b.png",
                "class": "frame",
                "loading": "lazy"
            });
            newship.appendChild(newicon);
            newship.appendChild(newbg);
            newship.appendChild(newframe);
            shiplist.appendChild(newship);
        }, de);
        de++;
    });
    creatallequips(de);
}

function creatallequips(de) {
    var newlist = [];
    for (let index in equip_data) {
        newlist.push(equip_data[index]);
    }
    newlist = sorting(newlist, 'type', true);
    newlist = sorting(newlist, 'nationality', true);
    newlist = sorting(newlist, 'rarity', true);
    newlist.forEach((item) => {
        setTimeout(function() {
            var equip = item;
            var equiplist = document.getElementById("equiplist");
            var newequip = document.createElement("button");
            var rarity = equip.rarity;
            if (rarity > 1) {
                rarity--;
            }
            $(newequip).attr({
                "type": "button",
                "class": "equip",
                "id": equip.id,
                "style": "display:inline; background-color:" + getcolor(equip.rarity) + ";",
                "data-dismiss": "modal",
                "onclick": "updateEquip(this)"
            });
            var newicon = document.createElement("img");
            $(newicon).attr({
                "src": "equips/" + String(equip.icon) + ".png",
                "class": "img-rounded img-fluid h-100 main",
                "loading": "lazy"
            });
            var newbg = document.createElement("img");
            $(newbg).attr({
                "src": "ui/bg" + rarity + ".png",
                "class": "bg",
                "loading": "lazy"
            });
            var newframe = document.createElement("img");
            $(newframe).attr({
                "src": "ui/frame_" + rarity + "b.png",
                "class": "frame",
                "loading": "lazy"
            });
            newequip.appendChild(newicon);
            newequip.appendChild(newbg);
            newequip.appendChild(newframe);
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
    var front = [1, 2, 3, 8, 17, 18];
    var back = [4, 5, 6, 7, 12, 13];
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
    var indicator_nation = false;
    var indicator_type = false;
    var indicator_rarity = false;
    var key = "nationality";
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
    var newsetting = {};
    var newlist = [];
    var shipnation = document.getElementById("shipnation").querySelectorAll("button[aria-pressed=true]");
    var shiptype = document.getElementById("shiptype").querySelectorAll("button[aria-pressed=true]");
    var shiprarity = document.getElementById("shiprarity").querySelectorAll("button[aria-pressed=true]");
    var other = ["98", "101", "103", "104", "105"];
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
    var front = [1, 2, 3, 8, 17, 18];
    var back = [4, 5, 6, 7, 12, 13];
    if (shiptype.length > 0) {
        newlist = [];
        shiptype.forEach(element => {
            var x = parseInt(element.value, 10);
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
    var retro = document.getElementById("shipretro").querySelector("button[aria-pressed=true]");
    if (retro) {
        newsetting.retro = retro.value;
    } else {
        newsetting.retro = "0";
    }
    return newsetting;
}