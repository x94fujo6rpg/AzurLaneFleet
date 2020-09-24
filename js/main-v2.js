Vue.component("item-container", {
    props: ["item", "lang"],
    template: `
        <button
          class="p-1 item_container" 

          v-bind:name="item.id"
          v-bind:pos="item.property.pos"
          v-bind:data-target="item.property.target"

          onclick="setCurrent(this)"
          data-toggle="modal"          
          >
            <div class="container-fluid p-0 box">
              <div class="icon_box">
                <img class="img-fluid bg" v-bind:src="item.property.bg">
                <img class="img-fluid frame" v-bind:src="item.property.frame">
                <img class="img-fluid icon" v-bind:src="item.property.icon">
                <span class="d-flex justify-content-start text-monospace itemq" v-text="item.property.quantity">
              </div>
              <span class="justify-content-center item_name"
                v-text="item.property[lang]"
              ></span>
            </div>
        </button>
    `
});

Vue.component("ship-container", {
    props: ["ship", "lang"],
    template: `
        <div class="col">
            <item-container
                v-for="item in ship.item"
                v-bind:key="item.id"
                v-bind:item="item"
                v-bind:lang="lang"
            ></item-container>
        </div>
    `
});

Vue.component("fleet-container", {
    props: ["fleet", "lang"],
    template: `
        <div class="row m-auto">
            <div class="flex-col m-auto">
                <ship-container 
                    v-for="back_ship in fleet.back_ship" 
                    v-bind:key="back_ship.id" 
                    v-bind:ship="back_ship"
                    v-bind:name="back_ship.id"
                    v-bind:lang="lang"
                ></ship-container>
            </div>
            <div class="flex-col m-auto">
                <ship-container 
                    v-for="front_ship in fleet.front_ship" 
                    v-bind:key="front_ship.id" 
                    v-bind:ship="front_ship"
                    v-bind:name="front_ship.id"
                    v-bind:lang="lang"
                ></ship-container>
            </div>
        </div>
    `
});

Vue.component("ship-nation-button", {
    props: ['nation', "lang"],
    template: `
        <button
            type="button"
            class="btn btn-outline-light btn-sm"
            onclick="updateSetting(this)"
        ></button>
    `
});

Vue.component("ship-type-button", {
    props: ['type', "lang"],
    template: `
        <button
            type="button"
            class="btn btn-outline-light btn-sm"
            onclick="updateSetting(this)"
        ></button>
    `
});

Vue.component("ship-rarity-button", {
    props: ['rarity', "lang"],
    template: `
        <button
            type="button"
            class="btn btn-outline-light btn-sm"
            onclick="updateSetting(this)"
        ></button>
    `
});

let [ship_nation, ship_type, ship_rarity] = buildShipSelectOption();
let c_fleet = "";
let c_side = "";
let c_pos = "";
let c_item = "";
let nation_list = [];
let type_list = [];
let rarity_list = [];
let retrofit = true;
let fleet_data = buildFleet();
let sorted_ship_data = [];
let lan = "cn";
let sorted_equip_data = [];
let shipsetting = {
    nation: [],
    front: [],
    back: [],
    rarity: [],
};
let front = [1, 2, 3, 8, 17, 18, 19]; // put ss back & new type 19
let back = [4, 5, 6, 7, 10, 12, 13];
let c_ships = [];
let version = 0.03;

initial();
//---------------------------------------------
let ALF = new Vue({
    el: "#AzurLaneFleetApp",
    data: {
        fleets: fleet_data,
        lang: lan
    },
});

let shipSelect = new Vue({
    el: "#shipselect",
    data: {
        nation: ship_nation,
        type: ship_type,
        rarity: ship_rarity,
        shiplist: sorted_ship_data,
        lang: lan
    }
});

let equipSelect = new Vue({
    el: "#equipselect",
    data: {
        equips: sorted_equip_data,
        lang: lan,
    }
});
//---------------------------------------------
uiAdjust();

function uiAdjust() {
    // insert space between fleet
    let fleet = document.getElementsByName("fleet_0");
    let br = document.createElement("br");
    fleet[0].insertAdjacentElement("afterend", br);
}

function emptyfleet() {
    let data = '[[[["","","","","",""],["","","","","",""],["","","","","",""]],[["","","","","",""],["","","","","",""],["","","","","",""]]],[[["","","","","",""],["","","","","",""],["","","","","",""]],[["","","","","",""],["","","","","",""],["","","","","",""]]]]';
    parseIdData(data);
}

// dump id only
function dumpDataID() {
    let data = [];
    fleet_data.forEach(fleet => {
        let fleetdata = [];
        for (let side in fleet) {
            let sidedata = [];
            if (side != "id") {
                fleet[side].forEach(ship => {
                    let shipdata = [];
                    ship.item.forEach(item => {
                        shipdata.push(item.property.id);
                    });
                    sidedata.push(shipdata);
                });
                fleetdata.push(sidedata);
            }
        }
        data.push(fleetdata);
    });
    data = JSON.stringify(data);
    let hash = CryptoJS.SHA3(data, { outputLength: 256 }).toString();
    data = `${data}!${version}!${hash}`;
    let textbox = document.getElementById("fleetdata");
    textbox.value = data;
    return data;
}

function loadDataByID() {
    let data = document.getElementById("fleetdata").value;
    let textbox = document.getElementById("fleetdata");
    textbox.value = "";
    data = data.split("!");
    [main_data, ver, hash] = data;

    let ck = CryptoJS.SHA3(main_data, { outputLength: 256 }).toString();
    if (ck != hash) {
        message = "Error: Corrupted data";
        textbox.value = message;
        console.log(message);
        console.log(main_data);
        return;
    }
    parseIdData(main_data);
}

function saveCookie(ckey, cvalue, expday = 365) {
    let time = new Date();
    let exp = expday * 1000 * 60 * 60 * 24;
    time.setTime(time.getTime() + exp);
    exp = time.toUTCString();
    document.cookie = `${ckey}=${cvalue};`;
}

function getCookie() {
    let cookie = document.cookie;
    let new_list = {};
    cookie = cookie.split("; ");
    cookie.forEach(data => {
        let [key, value] = data.split("=");
        new_list[key] = value;
    });
    return new_list;
}

function loadCookie() {
    let clist = getCookie();
    if (clist.lan) {
        let button = document.getElementById(clist.lan);
        button.click();
    } else {
        saveCookie("lan", lan);
    }

    if (clist.fleet) {
        let data = document.getElementById("fleetdata");
        data.value = clist.fleet;
        loadDataByID();
    } else {
        saveCookie("fleet", dumpDataID());
    }
}

function parseIdData(data) {
    data = JSON.parse(data);
    data.forEach((fleet, fleet_index) => {
        fleet.forEach((side, side_index) => {
            side.forEach((ship, ship_index) => {
                let empty = false;
                ship.forEach((item, item_index) => {
                    if (item === "") {
                        // set as empty ship/equip
                        if (item_index === 0) {
                            item = "000000";
                        } else {
                            item = 666666;
                        }
                    }
                    if (!empty) {
                        let item_name = `_${fleet_index}${side_index}${ship_index}${item_index}`;
                        let ship_item = { name: item_name, id: item };
                        setCurrent(ship_item);
                        if (item_index === 0) {
                            setShipAndEquip(ship_item);
                        } else {
                            setEquip(ship_item);
                        }
                        if (item === "000000") {
                            empty = true;
                        }
                    }
                });
            });
        });
    });
}

function dumpData() {
    console.log("dumpdata");
    let data = [];
    fleet_data.forEach(fleet => {
        let fleetdata = [];
        for (let side in fleet) {
            let sidedata = [];
            if (side != "id") {
                fleet[side].forEach((ship) => {
                    let shipdata = [];
                    ship.item.forEach((item) => {
                        let itemdata = [];
                        for (let key in item.property) {
                            itemdata.push(item.property[key]);
                        }
                        shipdata.push(itemdata);
                    });
                    sidedata.push(shipdata);
                });
                fleetdata.push(sidedata);
            }
        }
        data.push(fleetdata);
    });
    data = JSON.stringify(data);
    let hash = CryptoJS.SHA3(data, { outputLength: 256 }).toString();
    data = `${data},${version},${hash}`;
    data = LZString.compressToUint8Array(data);
    let textbox = document.getElementById("fleetdata");
    textbox.value = data;
}

function loadData() {
    let data = document.getElementById("olddata").value;
    let textbox = document.getElementById("olddata");
    textbox.value = "";
    data = data.split(",");
    if (data.some(str => isNaN(str)) || data.some(str => str === "")) {
        textbox.value = "Error: Incorrect data";
        return;
    }
    data = data.map(item => parseInt(item, 10));
    data = LZString.decompressFromUint8Array(data);
    if (!data) {
        textbox.value = "Error: Data corrupted (Decompress failed)";
        return;
    }
    if (data.indexOf(",") === -1) {
        textbox.value = "Error: Data corrupted (Verify info not found)";
        return;
    }
    let end = data.lastIndexOf(",") + 1;
    let datahash = data.substr(end, 64);
    end = data.length - 65;
    data = data.substring(0, end);
    end = data.lastIndexOf(",") + 1;
    let dataversion = data.substr(end, 4);
    end = data.length - 5;
    data = data.substring(0, end);
    let checkhash = CryptoJS.SHA3(data, { outputLength: 256 }).toString();
    if (datahash != checkhash) {
        textbox.value = "Error: Data corrupted (Incorrect verify info)";
        return;
    }
    if (dataversion != version) {
        textbox.value = "Warning: Data is old/unknow version, may not load correctly";
        parseLoadData(data);
    } else {
        textbox.value = "All check pass, data loaded";
        parseLoadData(data);
    }
}

function parseLoadData(data) {
    let parseShipData = ["id", "icon", "type", "star", "rarity", "en", "cn", "jp", "target", "bg", "frame", "base", "quantity", "pos"];
    let parseEquipData = ["id", "icon", "type", "star", "rarity", "en", "cn", "jp", "target", "bg", "frame", "fb", "type_cn", "type_en", "type_jp", "limit", "quantity", "pos"];
    data = JSON.parse(data);
    data.forEach((fleet, fleet_index) => {
        fleet.forEach((side, side_index) => {
            let sidestr = (side_index === 0) ? "front_ship" : "back_ship";
            side.forEach((ship, ship_index) => {
                ship.forEach((item, item_index) => {
                    let appdata = fleet_data[fleet_index][sidestr][ship_index].item[item_index].property;
                    if (item_index === 0) {
                        //ship
                        item.forEach((value, index) => {
                            let key = parseShipData[index];
                            appdata[key] = value;
                        });
                    } else {
                        // equip
                        item.forEach((value, index) => {
                            let key = parseEquipData[index];
                            appdata[key] = value;
                        });
                    }
                });
            });
        });
    });
    let textbox = document.getElementById("olddata");
    textbox.value = "Load complete";
}

function setRetro(item) {
    $(item).button("toggle");
    let newvalue = (item.value === "1") ? "0" : "1";
    retrofit = (item.value === "1") ? false : true;
    item.value = newvalue;
    console.log(item.value)
    shipDisplay();
}

function indexInObj(obj, getvalue = false) {
    let new_list = [];
    if (getvalue) {
        for (let index in obj) {
            new_list.push(index, obj[index]);
        }
    } else {
        for (let index in obj) {
            new_list.push(index);
        }
    }
    return new_list;
}

function updateSetting(item) {
    $(item).button("toggle");
    let strlist = item.name.split("_");
    let type = strlist[1];
    let value = parseInt(strlist[2], 10); //type int
    if (type === "nation") {
        checksetting("nation", value);
    } else if (type === "type") {
        if (c_side === "0") {
            checksetting("front", value);
        } else if (c_side === "1") {
            checksetting("back", value);
        }
    } else if (type === "rarity") {
        checksetting("rarity", value);
    }
    shipDisplay();
}

function checksetting(key, value) {
    let index = shipsetting[key].indexOf(value);
    if (value != 0) {
        if (index === -1) {
            shipsetting[key].push(value);
        } else {
            shipsetting[key].splice(index, 1);
        }
    } else {
        if (index === -1) {
            shipsetting.back.push(0);
            shipsetting.front.push(0);
        } else {
            index = shipsetting.front.indexOf(0);
            shipsetting.front.splice(index, 1);
            index = shipsetting.back.indexOf(0);
            shipsetting.back.splice(index, 1);
        }
    }
}

function shipDisplay() {
    let shiplist = document.getElementById("shiplist");
    shiplist = shiplist.querySelectorAll("button");
    shiplist.forEach((item) => {
        if (item.id != "000000") {
            let id = parseInt(item.id, 10);
            let nation = ship_data[id].nationality;
            let type = ship_data[id].type;
            let rarity = ship_data[id].rarity;
            let retro = ship_data[id].retro;
            if (isShipSelect(nation, type, rarity, retro)) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        }
    });
    hideShipInFleet();
}

function hideShipInFleet() {
    let shipInFleet = [];
    for (let side in fleet_data[c_fleet]) {
        if (side != "id") {
            fleet_data[c_fleet][side].forEach(ship => {
                let id = ship.item[0].property.id;
                if (id != "") {
                    shipInFleet.push(id);
                }
            });
        }
    }
    shipInFleet.forEach(id => {
        let ship = document.getElementById(id);
        ship.style.display = "none";
    });
}

function isShipSelect(nation, type, rarity, retro) {
    let indicator_nation = false;
    let indicator_type = false;
    let indicator_rarity = false;
    let other_nation = [98, 101, 103, 104, 105];
    let other_front = [19];
    let other_back = [10];
    if (c_side === "0" && front.indexOf(type) === -1) {
        return false;
    }
    if (c_side === "1" && back.indexOf(type) === -1) {
        return false;
    }
    if (c_side === "0") {
        if (shipsetting.front.indexOf(type) != -1 || shipsetting.front.length === 0) {
            indicator_type = true;
        } else if (shipsetting.front.indexOf(0) != -1 && other_front.indexOf(type) != -1) {
            indicator_type = true;
        }
    }
    if (c_side === "1") {
        if (shipsetting.back.indexOf(type) != -1 || shipsetting.back.length === 0) {
            indicator_type = true;
        } else if (shipsetting.back.indexOf(0) != -1 && other_back.indexOf(type) != -1) {
            indicator_type = true;
        }
    }
    if (shipsetting.nation.indexOf(nation) != -1 || shipsetting.nation.length === 0) {
        indicator_nation = true;
    }
    if (shipsetting.nation.indexOf(0) != -1 && other_nation.indexOf(nation) != -1) {
        indicator_nation = true;
    }
    if (shipsetting.rarity.indexOf(rarity) != -1 || shipsetting.rarity.length === 0) {
        indicator_rarity = true;
    }
    if (indicator_nation && indicator_type && indicator_rarity) {
        if (retrofit && retro === 1) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}

function setCurrent(item) {
    let pos = item.name;
    [c_fleet, c_side, c_pos, c_item] = [pos[1], pos[2], pos[3], pos[4]];
    if (c_item === "0") {
        //ship
        let shiplist = document.getElementById("shiplist");
        shiplist = shiplist.querySelectorAll("button");
        if (c_side === "0") {
            // show front type
            ship_type.forEach((item) => {
                if (front.indexOf(item.id) === -1) {
                    if (item.id === 0) {
                        item.display = true;
                    } else {
                        item.display = false;
                    }
                } else {
                    item.display = true;
                }
            });
        } else if (c_side === "1") {
            // show back type
            ship_type.forEach((item) => {
                if (back.indexOf(item.id) === -1) {
                    if (item.id === 0) {
                        item.display = true;
                    } else {
                        item.display = false;
                    }
                } else {
                    item.display = true;
                }
            });
        }
        shipDisplay();
    } else {
        // equip
        equipDisplay();
    }
}

function equipDisplay() {
    let side = (c_side === "0") ? "front_ship" : "back_ship";
    let itemInApp = fleet_data[c_fleet][side][c_pos].item[c_item].property;
    let typelist = itemInApp.type;
    let equips = document.getElementById("equiplist");
    equips = equips.querySelectorAll("button");
    let shiptype = fleet_data[c_fleet][side][c_pos].item[0].property.type;
    let display_list = [];
    equips.forEach((item) => {
        if (item.id != "666666") {
            let id = parseInt(item.id, 10);
            let equip = equip_data[id];
            let type = equip.type;
            let forbidden = equip.ship_type_forbidden;
            if (typelist.indexOf(type) != -1) {
                if (forbidden.indexOf(shiptype) != -1) {
                    item.style.display = "none";
                } else {
                    item.style.display = "";
                    display_list.push(id);
                }
            } else {
                item.style.display = "none";
            }
        }
    });
    limitEquip(display_list);
}

function limitEquip(display_list) {
    let equipOnShip = [];
    let side = (c_side === "0") ? "front_ship" : "back_ship";
    let ship = fleet_data[c_fleet][side][c_pos];
    ship.item.forEach((item, index) => {
        if (index != 0) {
            let id = item.property.id;
            if (id != "") {
                equipOnShip.push(id);
            }
        }
    });
    let limit_list = [];
    equipOnShip.forEach(id => {
        let limit = parseInt(equip_data[id].equip_limit, 10);
        if (!isNaN(limit)) {
            if (limit > 0 && limit_list.indexOf(limit) === -1) {
                limit_list.push(limit);
            }
        }
    });
    let current_equip_limit = ship.item[c_item].property.limit;
    display_list.forEach(id => {
        let limit = parseInt(equip_data[id].equip_limit, 10);
        if (limit_list.indexOf(limit) != -1 && limit != current_equip_limit) {
            let item = document.getElementById(id);
            item.style.display = "none";
        }
    });
}

function sorting(arr, key, descen) {
    if (descen) {
        arr.sort((a, b) => { return a[key] < b[key] ? 1 : -1; });
    } else {
        arr.sort((a, b) => { return a[key] > b[key] ? 1 : -1; });
    }
    return arr;
}

function setlang(item) {
    let key = item.id;
    ALF.lang = shipSelect.lang = equipSelect.lang = key;
    let names = document.querySelectorAll("[name=name]");
    names.forEach((name) => {
        name.textContent = name.getAttribute(key);
    });
    saveCookie("lan", key);
}

function setEquip(item) {
    let id = parseInt(item.id, 10);
    let side = (c_side === "0") ? "front_ship" : "back_ship";
    let itemInApp = fleet_data[c_fleet][side][c_pos].item[c_item].property;
    if (id === 666666) {
        // reset
        itemInApp.cn = itemInApp.type_cn;
        itemInApp.en = itemInApp.type_en;
        itemInApp.jp = itemInApp.type_jp;
        itemInApp.frame = itemInApp.bg = "";
        itemInApp.icon = "ui/empty.png";
        itemInApp.id = "";
    } else {
        // copy data
        let copylist = ["cn", "en", "jp", "icon", "frame", "bg", "id", "limit"];
        let itemInList = sorted_equip_data.find((ele) => {
            if (ele.id === id) {
                return Object.assign({}, ele);
            }
        });
        copylist.forEach(key => itemInApp[key] = itemInList[key]);
    }
    saveCookie("fleet", dumpDataID());
}

function setShipAndEquip(item) {
    let side = (c_side === "0") ? "front_ship" : "back_ship";
    let shipInApp = fleet_data[c_fleet][side][c_pos];
    let shipInList = sorted_ship_data.find((ele) => {
        if (ele.id === item.id) {
            return Object.assign({}, ele);
        }
    });
    let app_item = shipInApp.item;
    let shipCopyList = ["cn", "en", "jp", "icon", "frame", "bg", "id", "type", "rarity", "star", "base"];
    let addquantitylist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13,]; // add bb main gun
    let parsetype = {
        1: { cn: "驅逐砲", en: "DD Gun", jp: "駆逐砲" },
        2: { cn: "輕巡砲", en: "CL Gun", jp: "軽巡砲" },
        3: { cn: "重巡砲", en: "CA Gun", jp: "重巡砲" },
        4: { cn: "戰艦砲", en: "BB Gun", jp: "戦艦砲" },
        5: { cn: "魚雷", en: "Torpedoe", jp: "魚雷" },
        6: { cn: "防空砲", en: "Anti-Air Gun", jp: "対空砲" },
        7: { cn: "戰鬥機", en: "Fighter", jp: "戦闘機" },
        8: { cn: "攻擊機", en: "Torpedo Bomber", jp: "攻撃機" },
        9: { cn: "爆擊機", en: "Dive Bomber", jp: "爆撃機" },
        10: { cn: "設備", en: "Auxiliary", jp: "設備" },
        11: { cn: "超巡砲", en: "CB Gun", jp: "超巡砲" },
        12: { cn: "水上機", en: "Seaplane", jp: "水上機" },
        13: { cn: "潛艇魚雷", en: "Submarine Torpedoe", jp: "潜水艦魚雷" },
        14: { cn: "爆雷", en: "Depth Charge", jp: "爆雷" }, //Sonar is not a unique type
        15: { cn: "反潛機", en: "ASW Bomber", jp: "対潜機" },
        17: { cn: "直升機", en: "ASW Helicopter", jp: "ヘリ" },
        18: { cn: "貨物", en: "Cargo", jp: "積載" }
    };
    for (let index in app_item) {
        app_item = shipInApp.item[index].property;
        if (item.id === "000000") {
            // empty ship/equip
            if (index === "0") {
                //ship
                shipCopyList.forEach(key => app_item[key] = "");
                app_item.icon = shipInList.icon;
                app_item.base = [];
            } else {
                //equip
                for (let key in app_item) {
                    app_item[key] = "";
                }
                app_item.icon = "ui/icon_back.png";
                app_item.fb = [];
                app_item.type = [];
                app_item.target = "";
                app_item.quantity = "";
            }
        } else {
            //copy ship data & equip setting
            if (index === "0") {
                //ship
                shipCopyList.forEach(key => app_item[key] = shipInList[key]);
            } else {
                //equip
                for (let key in app_item) {
                    app_item[key] = "";
                }
                let typelist = shipInList[`e${index}`];
                app_item.type = typelist;
                app_item.icon = "ui/empty.png";
                let typestr_cn = "";
                let typestr_en = "";
                let typestr_jp = "";
                let itemindex = parseInt(index, 10) - 1;
                let quantity = shipInApp.item[0].property.base[itemindex];

                if (typelist.some(eqtype => addquantitylist.indexOf(eqtype) != -1)) {
                    if (quantity != undefined) {
                        app_item.quantity = quantity;
                    }
                }

                // go through all type in ship's equip type list
                typelist.forEach((type, index) => {
                    typestr_cn += parsetype[type].cn;
                    typestr_en += parsetype[type].en;
                    typestr_jp += parsetype[type].jp;
                    if (typelist.length > 1 && index < typelist.length - 1) {
                        typestr_cn += "/";
                        typestr_en += "/";
                        typestr_jp += "/";
                    }
                });

                app_item.cn = app_item.type_cn = typestr_cn;
                app_item.en = app_item.type_en = typestr_en;
                app_item.jp = app_item.type_jp = typestr_jp;
                app_item.target = "#equipselect";
            }
        }
    }
    saveCookie("fleet", dumpDataID());
}

function copyData() {
    let text = document.getElementById("fleetdata");
    text.select();
    text.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

function emptyData() {
    let text = document.getElementById("fleetdata");
    text.value = "";
}

function initial() {
    console.time("initial");
    //creat sortred ship list
    console.time("sortship");
    let newlist = [];
    let pos = 0;
    let empty = {};
    let parseData = {
        id: "uni_id",
        cn: "cn_name", en: "en_name", jp: "jp_name",
        type: "type",
        nationality: "nationality",
        rarity: "rarity",
        star: "star",
        retro: "retro",
        base: "base_list",
        e1: "equip_1", e2: "equip_2", e3: "equip_3", e4: "equip_4", e5: "equip_5",
    };
    for (let index in ship_data) {
        let item = Object.assign({}, ship_data[index]);
        let newitem = {};
        // parse data
        for (let key in parseData) {
            newitem[key] = item[parseData[key]];
        }
        // set other data
        newitem.icon = `shipicon/${item.painting.toLowerCase()}.png`;
        newitem.bg = `ui/bg${item.rarity - 1}.png`;
        newitem.frame = `ui/frame_${item.rarity - 1}.png`;
        // creat empty ship
        if (pos === 0) {
            empty = Object.assign({}, newitem);
            for (let key in empty) {
                empty[key] = "";
            }
            empty.id = "000000";
            empty.en = "remove";
            empty.cn = "移除";
            empty.jp = "除隊";
            empty.icon = "ui/empty.png";
        }
        newlist.push(newitem);
        pos++;
    }
    newlist = sorting(newlist, 'type', true);
    newlist = sorting(newlist, 'nationality', true);
    newlist = sorting(newlist, 'rarity', true);
    // add emptyship to top
    newlist.unshift(empty);
    sorted_ship_data = Object.assign([], newlist);
    console.timeEnd("sortship");
    //creat sortred equip list
    console.time("sortequip");
    newlist = [];
    pos = 0;
    parseData = {
        id: "id",
        cn: "cn_name", en: "en_name", jp: "jp_name",
        type: "type",
        nationality: "nationality",
        rarity: "rarity",
        fb: "ship_type_forbidden",
        limit: "equip_limit",
    };
    for (let index in equip_data) {
        let item = Object.assign({}, equip_data[index]);
        let newitem = {};
        // parse data
        for (let key in parseData) {
            newitem[key] = item[parseData[key]];
        }
        // set other data
        newitem.icon = `equips/${item.icon}.png`;
        if (item.rarity != 1) {
            newitem.bg = `ui/bg${item.rarity - 1}.png`;
            newitem.frame = `ui/frame_${item.rarity - 1}.png`;
        } else {
            newitem.bg = `ui/bg${item.rarity}.png`;
            newitem.frame = `ui/frame_${item.rarity}.png`;
        }
        // creat empty equip
        if (pos === 0) {
            empty = Object.assign({}, newitem);
            for (let key in empty) {
                empty[key] = "";
            }
            empty.id = "666666";
            empty.en = "remove";
            empty.cn = "移除";
            empty.jp = "外す";
            empty.icon = "ui/empty.png";
        }
        newlist.push(newitem);
        pos++;
    }
    newlist = sorting(newlist, "nationality", true);
    newlist = sorting(newlist, "type", true);
    newlist = sorting(newlist, "rarity", true);
    newlist.unshift(empty);
    sorted_equip_data = Object.assign([], newlist);
    console.timeEnd("sortequip");
    creatAllShip();
}

function creatAllShip() {
    console.time("creatAllShip");
    sorted_ship_data.forEach((ship, index, arr) => {
        setTimeout(() => {
            let pos = document.getElementById("shiplist");
            let icon_box = document.createElement("div");
            $(icon_box).attr({
                class: "icon_box row",
            });

            let icon = document.createElement("img");
            $(icon).attr({
                class: "img-fluid icon",
                loading: "lazy",
                src: ship.icon,
            });

            let bg = document.createElement("img");
            $(bg).attr({
                class: "img-fluid bg",
                src: ship.bg,
            });

            let frame = document.createElement("img");
            $(frame).attr({
                class: "img-fluid frame",
                src: ship.frame,
            });

            icon_box.append(icon, bg, frame);
            //-----------------------------------------------
            let box = document.createElement("div");
            $(box).attr({
                class: "container-fluid p-0 box",
            });

            let name = document.createElement("span");
            $(name).attr({
                name: "name",
                cn: ship.cn,
                en: ship.en,
                jp: ship.jp,
                class: "justify-content-center item_name",
            });
            name.textContent = ship[lan];

            box.append(icon_box, name);
            //-----------------------------------------------
            let newship = document.createElement("button");
            $(newship).attr({
                class: "p-1 item_container",
                id: ship.id,
                onclick: "setShipAndEquip(this)",
                "data-dismiss": "modal",
            });
            newship.append(box);
            pos.append(newship);
            //-----------------------------------------------
            if (index === arr.length - 1) {
                console.timeEnd("creatAllShip");
                creatAllEquip();
            }
        });
    });
}

function creatAllEquip() {
    console.time("creatAllEquip");
    sorted_equip_data.forEach((equip, index, arr) => {
        setTimeout(() => {
            let pos = document.getElementById("equiplist");
            let icon_box = document.createElement("div");
            $(icon_box).attr({
                class: "container-fluid icon_box",
            });

            let bg = document.createElement("img");
            $(bg).attr({
                class: "img-fluid bg",
                src: equip.bg,
            });

            let frame = document.createElement("img");
            $(frame).attr({
                class: "img-fluid frame",
                src: equip.frame,
            });

            let eqicon = document.createElement("img");
            $(eqicon).attr({
                class: "img-fluid icon",
                loading: "lazy",
                src: equip.icon,
            });

            icon_box.append(bg, frame, eqicon);
            //-----------------------------------------------
            let box = document.createElement("div");
            $(box).attr({
                class: "container-fluid p-0 box",
            });

            let name = document.createElement("span");
            $(name).attr({
                name: "name",
                cn: equip.cn,
                en: equip.en,
                jp: equip.jp,
                class: "justify-content-center item_name",
            });
            name.textContent = equip[lan];

            box.append(icon_box, name);
            //-----------------------------------------------
            let newequip = document.createElement("button");
            $(newequip).attr({
                class: "p-1 item_container",
                id: equip.id,
                onclick: "setEquip(this)",
                "data-dismiss": "modal",
            });
            newequip.append(box);
            pos.append(newequip);
            //-----------------------------------------------
            if (index === arr.length - 1) {
                console.timeEnd("creatAllEquip");
                console.timeEnd("initial");
                loadCookie();
            }
        });
    });
}

function buildFleet() {
    console.time("buildFleet");
    let ship_data = [];
    for (let i = 0; i < 6; i++) {
        let item = [];
        if (i === 0) {
            let ship = {
                id: "",
                icon: "ui/empty.png",
                type: "",
                star: "",
                rarity: "",
                en: "",
                cn: "",
                jp: "",
                target: "#shipselect",
                bg: "",
                frame: "",
                base: [],
                quantity: "",
            };
            item = ship;
        } else {
            let eq = {
                id: "",
                icon: "ui/icon_back.png",
                type: [],
                star: "",
                rarity: "",
                en: "", cn: "", jp: "",
                target: "",
                bg: "",
                frame: "",
                fb: [],
                type_cn: "", type_en: "", type_jp: "",
                limit: "",
                quantity: "",
            };
            item = eq;
        }
        ship_data.push({ id: i, property: [], });
        ship_data[i].property = Object.assign({}, item);
    }

    let newfleet = [];
    for (let i = 0; i < 2; i++) {
        let new_ship_data = [];
        let front = [];
        let back = [];
        for (let x = 0; x < 6; x++) {
            let new_data = [];
            if (x < 3) {
                for (let index in ship_data) {
                    let new_value = `_${i}0${x}${index}`;
                    let new_prop = Object.assign({}, ship_data[index].property);
                    new_prop.pos = "front";
                    new_data.push({ id: new_value, property: new_prop, });
                }
                new_ship_data = { id: `fleet_${i}_front_ship${x}`, item: new_data, };
                front.push(new_ship_data);
            } else {
                for (let index in ship_data) {
                    let new_value = `_${i}1${x - 3}${index}`;
                    let new_prop = Object.assign({}, ship_data[index].property);
                    new_data.push({ id: new_value, property: new_prop, });
                    new_prop.pos = "back";
                }
                new_ship_data = { id: `fleet_${i}_back_ship${x - 3}`, item: new_data, };
                back.push(new_ship_data);
            }
        }
        newfleet.push({ id: `fleet_${i}`, front_ship: front, back_ship: back, });
    }
    console.timeEnd("buildFleet");
    return newfleet;
}

function buildShipSelectOption() {
    console.time("buildShipSelectOption");
    let nation = [
        { id: 1, cn: "白鷹", en: "EagleUnion", jp: "ユニオン", code: "USS" },
        { id: 2, cn: "皇家", en: "RoyalNavy", jp: "ロイヤル", code: "HMS" },
        { id: 3, cn: "重櫻", en: "SakuraEmpire", jp: "重桜", code: "IJN" },
        { id: 4, cn: "鐵血", en: "Ironblood", jp: "鉄血", code: "KMS" },
        { id: 5, cn: "東煌", en: "EasternRadiance", jp: "東煌", code: "PRAN/ROC" },
        { id: 6, cn: "撒丁帝國", en: "SardegnaEmpire", jp: "サディア", code: "RN" },
        { id: 7, cn: "北方聯合", en: "NorthUnion", jp: "北連", code: "SN" },
        { id: 8, cn: "自由鳶尾", en: "IrisLibre", jp: "アイリス", code: "FFNF" },
        { id: 9, cn: "維希教廷", en: "VichyaDominion", jp: "ヴィシア", code: "MNF" },
        { id: 0, cn: "其他", en: "Other", jp: "その他", code: "" },
    ];
    nation.forEach((item) => {
        let newid = `ship_nation_${item.id}`;
        item.name = newid;
    });

    let type = [
        { id: 1, cn: "驅逐", en: "Destroyer", jp: "駆逐", code: "DD", pos: "front" },
        { id: 2, cn: "輕巡", en: "LightCruiser", jp: "軽巡", code: "CL", pos: "front" },
        { id: 3, cn: "重巡", en: "HeavyCruiser", jp: "重巡", code: "CA", pos: "front" },
        { id: 18, cn: "超巡", en: "LargeCruiser", jp: "超甲巡", code: "CB", pos: "front" },

        { id: 8, cn: "潛艇", en: "Submarine", jp: "潜水艦", code: "SS", pos: "sub" },
        { id: 17, cn: "潛母", en: "SubmarineCarrier", jp: "潜水空母", code: "SSV", pos: "sub" },

        { id: 4, cn: "戰巡", en: "BattleCruiser", jp: "巡洋戦艦", code: "BC", pos: "back" },
        { id: 5, cn: "戰列", en: "BattleShip", jp: "戦艦", code: "BB", pos: "back" },
        { id: 6, cn: "輕航", en: "LightCarrier", jp: "軽空母", code: "CVL", pos: "back" },
        { id: 7, cn: "航母", en: "Carrier", jp: "空母", code: "CV", pos: "back" },
        { id: 13, cn: "重砲", en: "Monitor", jp: "砲艦", code: "BM", pos: "back" },
        { id: 12, cn: "維修", en: "RepairShip", jp: "工作", code: "AR", pos: "back" },
        { id: 0, cn: "其他", en: "Other", jp: "その他", code: "" },
    ];
    type.forEach((item) => {
        let newid = `ship_type_${item.id}`;
        item.name = newid;
        item.display = "false";
    });

    let rarity = [
        { id: 2, cn: "普通", en: "Normal", jp: "N" },
        { id: 3, cn: "稀有", en: "Rare", jp: "R" },
        { id: 4, cn: "精銳", en: "Elite", jp: "SR" },
        { id: 5, cn: "超稀有", en: "SuperRare", jp: "SSR" },
        { id: 6, cn: "海上傳奇", en: "Decisive", jp: "UR" },
    ];
    rarity.forEach((item) => {
        let newid = `ship_rarity_${item.id}`;
        item.name = newid;
    });
    console.timeEnd("buildShipSelectOption");
    return [nation, type, rarity];
}

