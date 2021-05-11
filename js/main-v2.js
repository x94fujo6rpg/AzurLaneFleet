/* jshint esversion: 9 */
//----------------------------------------------------------
// for ui element that have no language.
// do not change id, unless you know what you are doing.
const lan_target_list = [
    { id: "allow_dup_label", en: "Allow Duplicate Ship", jp: "重複を許可する", tw: "允許重複的船", },
    { id: "layout_label", en: "Layout:", jp: "スタイル:", tw: "排版方式:", },

    { id: "add_fleet", en: "Save Current", jp: "現在の艦隊をセーブ", tw: "儲存目前艦隊", },
    { id: "select_fleet", en: "Select Fleet", jp: "艦隊を選択", tw: "選擇艦隊", },
    { id: "load_fleet", en: "Load Fleet", jp: "ロード", tw: "載入艦隊", },
    { id: "remove_fleet", en: "Remove", jp: "削除", tw: "刪除", },
    { id: "fleet_name_label", en: "Fleet Name", jp: "艦隊の名前", tw: "艦隊名稱", },

    { id: "emptyfleet", en: "Empty Current Fleet", jp: "現在の艦隊を空に", tw: "清空目前艦隊", },

    { id: "fleetdata_text", en: "Fleet data", jp: "艦隊データ", tw: "艦隊資料", },
    { id: "dumpdata", en: "Dump", jp: "出力", tw: "匯出", },
    { id: "copyData", en: "Copy", jp: "コピー", tw: "複製", },
    { id: "emptyData", en: "Clear", jp: "クリア", tw: "清空", },
    { id: "loadDataByID", en: "Load", jp: "ロード", tw: "載入", },

    { id: "rebuild_cache_btn", en: "Rebuild Cache", jp: "キャッシュをクリア&再構築", tw: "重建快取", },

    { id: "select_ship", en: "Select Ship", jp: "艦船を選択", tw: "選擇艦船", },
    { id: "filter_affiliation", en: "Affiliation", jp: "陣営", tw: "國家", },
    { id: "filter_type", en: "Type", jp: "艦種", tw: "艦種", },
    { id: "filter_rarity", en: "Rarity", jp: "レア度", tw: "稀有度", },

    { id: "filter_retro", en: "Retrofitted Ship Only", jp: "改造された艦船だけ", tw: "只顯示改造後的", },
    { id: "filter_search", en: "Search", jp: "検索", tw: "搜尋", },
    { id: "filter_search_result", en: "Result:", jp: "検索結果:", tw: "搜尋結果:", },

    { id: "select_equip", en: "Select Equip", jp: "装備を選択", tw: "選擇裝備", },
];

// equip type
const parsetype = {
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

// filter ship nation
const lan_nation = [
    { id: 1, cn: "白鷹", en: "EagleUnion", jp: "ユニオン", code: "USS" },
    { id: 2, cn: "皇家", en: "RoyalNavy", jp: "ロイヤル", code: "HMS" },
    { id: 3, cn: "重櫻", en: "SakuraEmpire", jp: "重桜", code: "IJN" },
    { id: 4, cn: "鐵血", en: "Ironblood", jp: "鉄血", code: "KMS" },
    { id: 5, cn: "東煌", en: "EasternRadiance", jp: "東煌", code: "PRAN/ROC" },
    { id: 6, cn: "撒丁帝國", en: "SardegnaEmpire", jp: "サディア", code: "RN" },
    { id: 7, cn: "北方聯合", en: "NorthUnion", jp: "北連", code: "SN" },
    { id: 8, cn: "自由鳶尾", en: "IrisLibre", jp: "アイリス", code: "FFNF" },
    { id: 9, cn: "維希教廷", en: "VichyaDominion", jp: "ヴィシア", code: "MNF" },
    { id: 0, cn: "其他", en: "Other", jp: "その他", code: "Other" },
];

// filter ship type
const lan_type = [
    { id: 1, cn: "驅逐", en: "Destroyer", jp: "駆逐", code: "DD", pos: "front" },
    { id: 2, cn: "輕巡", en: "LightCruiser", jp: "軽巡", code: "CL", pos: "front" },
    { id: 3, cn: "重巡", en: "HeavyCruiser", jp: "重巡", code: "CA", pos: "front" },
    { id: 18, cn: "超巡", en: "LargeCruiser", jp: "超甲巡", code: "CB", pos: "front" },

    { id: 4, cn: "戰巡", en: "BattleCruiser", jp: "巡洋戦艦", code: "BC", pos: "back" },
    { id: 5, cn: "戰列", en: "BattleShip", jp: "戦艦", code: "BB", pos: "back" },
    { id: 6, cn: "輕航", en: "LightCarrier", jp: "軽空母", code: "CVL", pos: "back" },
    { id: 7, cn: "航母", en: "Carrier", jp: "空母", code: "CV", pos: "back" },
    { id: 13, cn: "重砲", en: "Monitor", jp: "砲艦", code: "BM", pos: "back" },
    { id: 12, cn: "維修", en: "RepairShip", jp: "工作", code: "AR", pos: "back" },
    { id: 0, cn: "其他", en: "Other", jp: "その他", code: "Other" },
    
    { id: 8, cn: "潛艇", en: "Submarine", jp: "潜水艦", code: "SS", pos: "sub" },
    { id: 17, cn: "潛母", en: "SubmarineCarrier", jp: "潜水空母", code: "SSV", pos: "sub" },
];

// filter ship rarity
const lan_rarity = [
    { id: 2, cn: "普通", en: "Normal", jp: "N" },
    { id: 3, cn: "稀有", en: "Rare", jp: "R" },
    { id: 4, cn: "精銳", en: "Elite", jp: "SR" },
    { id: 5, cn: "超稀有", en: "SuperRare", jp: "SSR" },
    { id: 6, cn: "海上傳奇", en: "Decisive", jp: "UR" },
];

//----------------------------------------------------------
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
                <span class="d-flex justify-content-start text-monospace itemq" v-text="item.property.quantity"></span>
              </div>
              <span class="justify-content-center item_name" v-text="item.property[lang]"></span>
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
        <div class="d-grid justify-content-center fleet_box_o">
            <span class="row ml-1 text-monospace fleet_name" v-text="fleet.id"></span>
            <div class="row m-2 fleet_box_i">
                <div class="flex-col fleet_side_box" v-if="fleet.back_ship">
                    <ship-container
                        v-for="back_ship in fleet.back_ship"
                        v-bind:key="back_ship.id"
                        v-bind:ship="back_ship"
                        v-bind:name="back_ship.id"
                        v-bind:lang="lang"
                    ></ship-container>
                </div>
                <div class="flex-col fleet_side_box" v-if="fleet.front_ship">
                    <ship-container
                        v-for="front_ship in fleet.front_ship"
                        v-bind:key="front_ship.id"
                        v-bind:ship="front_ship"
                        v-bind:name="front_ship.id"
                        v-bind:lang="lang"
                    ></ship-container>
                </div>
                <div class="flex-col fleet_side_box" v-if="fleet.sub_ship">
                    <ship-container
                        v-for="sub_ship in fleet.sub_ship"
                        v-bind:key="sub_ship.id"
                        v-bind:ship="sub_ship"
                        v-bind:name="sub_ship.id"
                        v-bind:lang="lang"
                    ></ship-container>
                </div>
            </div>
        </div>
    `
});

Vue.component("ship-nation-button", {
    props: ['nation', "lang"],
    template: `
        <button
            type="button"
            class="btn btn-outline-light w-100 py-2 font-weight-bold filter-btn"
            onclick="updateSetting(this)"
        ></button>
    `
});

Vue.component("ship-type-button", {
    props: ['type', "lang"],
    template: `
        <button
            type="button"
            class="btn btn-outline-light w-100 py-2 font-weight-bold filter-btn"
            onclick="updateSetting(this)"
        ></button>
    `
});

Vue.component("ship-rarity-button", {
    props: ['rarity', "lang"],
    template: `
        <button
            type="button"
            class="btn btn-outline-light w-100 py-2 font-weight-bold filter-btn"
            onclick="updateSetting(this)"
        ></button>
    `
});

//----------------------------------------------------------
let [ship_nation, ship_type, ship_rarity] = buildShipSelectOption();
let c_fleet = "";
let c_side = "";
let c_pos = "";
let c_item = "";
let c_ships = [];
let nation_list = [];
let type_list = [];
let rarity_list = [];
let retrofit = true;
let fleet_data = buildFleet();
let sorted_ship_data = [];
let sorted_equip_data = [];
let fleet_in_storage = [];
let filter_setting = {
    nation: new Set(),
    front: new Set(),
    back: new Set(),
    sub: new Set(),
    rarity: new Set(),
};
let eqck = false;
let lan = "en";

const AFL_storage = window.localStorage;
const fleet_info = {
    name: () => document.querySelector("#fleet_name"),
    select: () => document.querySelector("#select_fleet"),
    msg: () => document.querySelector("#error_message"),
    list: () => document.querySelector("#fleet_list"),
    load: () => document.querySelector("#load_fleet"),
    remove: () => document.querySelector("#remove_fleet"),
};
const msg_color = {
    red: "text-danger m-1 text-monospace font-weight-bold",
    green: "text-success m-1 text-monospace font-weight-bold",
};
const _loading_ = {
    ship: {},
    equip: {},
    cache_image: {},
    load_cache: {},
};

// ship type
const type_front = new Set([1, 2, 3, 18, 19]);
const type_back = new Set([4, 5, 6, 7, 10, 12, 13]);
const type_sub = new Set([8, 17]);
const other_nation = new Set([97, 98, 101, 103, 104, 105, 106, 107, 108, 109, 110]); // 97:META, 98:Bulin, 100+:collab
const other_front = new Set([19]);
const other_back = new Set([10]);
const other_sub = new Set([0]);
const addQuantityList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13,];
const db_name = "image_cache";
const db_ver = 1;
const version = 0.04;

//----------------------------------------------------------
Object.keys(parsetype).forEach(key => parsetype[key].tw = parsetype[key].cn);
initial();

//----------------------------------------------------------
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

//----------------------------------------------------------

function add_search_event() {
    let search_input = document.querySelector("#search_input");
    if (!search_input) return console.log("search_input not found");
    search_input.addEventListener("input", ship_name_search);
    $("#shipselect").on("hide.bs.modal", () => search_input.value = ""); // empty text when modal fade
    //console.log("add search event");
}

function ship_name_search(ele) {
    let search_input = ele.target.value.toLowerCase(); // ship name search
    if (!search_input) return shipDisplay();
    console.log("search:", search_input);
    let shiplist = document.querySelectorAll("#shiplist button");
    shiplist.forEach(item => {
        if (item.id != "000000") {
            let ship = ship_data[item.id];
            let ismatch = [
                ship.tw_name,
                ship.cn_name,
                ship.en_name.toLowerCase(),
                ship.jp_name,
                ship.english_name.toLowerCase(),
            ].some(t => t.includes(search_input));
            if (ismatch) {
                if (ship) {
                    let is_select = isCorrectShipType(ship.type);
                    item.style.display = is_select ? "" : "none";
                    item.setAttribute("displayed", is_select ? true : false);
                }
            } else {
                item.style.display = "none";
                item.setAttribute("displayed", false);
            }
        }
    });
    countShipDisplayed();
}

function emptyfleet() {
    let data = 'No4IjAaDqn7AXUuObYYs1n0MdjgrrNseWmXtaQSiBSVioxVU9XQzWyz53w64ChIv1KDWlSeKyEpwmUOZjlSLtzUTVU9grn190nfz2z1oo9qsqbFxEA';
    data = LZString.decompressFromEncodedURIComponent(data);
    parseID(data);
}

function dumpID() {
    console.time(dumpID.name);
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
    data = LZString.compressToEncodedURIComponent(data);
    let textbox = document.getElementById("fleetdata");
    textbox.value = data;
    console.timeEnd(dumpID.name);
    return data;
}

function loadDataByID() {
    let data = document.getElementById("fleetdata").value;
    let textbox = document.getElementById("fleetdata");

    if (data[0] !== "[") {
        data = LZString.decompressFromEncodedURIComponent(data);
        //console.log(data);
    }

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

    textbox.value = "";
    parseID(main_data);
}

function saveCookie(ckey, cvalue, expday = 365) {
    let time = new Date();
    let exp = new Date();
    exp.setTime(time.getTime() + (expday * 1000 * 60 * 60 * 24));
    document.cookie = `${ckey}=${cvalue};expires=${exp.toUTCString()};`;
    //console.log(`${ckey}=${cvalue};`);
}

function getCookie() {
    let cookie = document.cookie;
    let new_list = {};
    cookie = cookie.split("; ");
    cookie.forEach(data => {
        let [key, value] = data.split("=");
        if (key != "expires") new_list[key] = value;
    });
    return new_list;
}

function loadCookie() {
    let clist = getCookie();
    if (clist.lan) {
        let button = document.getElementById(clist.lan);
        button.click();
    } else {
        setlang({ id: "en" });
        saveCookie("lan", lan);
    }

    if (clist.fleet) {
        let data = document.getElementById("fleetdata");
        data.value = clist.fleet;
        loadDataByID();
    } else {
        saveCookie("fleet", dumpID());
    }

    if (clist.allow_dup) {
        document.getElementById("allow_dup").checked = clist.allow_dup == 1 ? true : false;
    }

    if (clist.layout) {
        let layout_switch = document.querySelector("#layout_setting");
        layout_switch.textContent = clist.layout;
        switchLayout(layout_switch, true);
    }
}

function parseID(data) {
    console.time(parseID.name);
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
                        let item_name = fleet_index < 4 ?
                            `_${fleet_index}${side_index}${ship_index}${item_index}` : // normal fleet
                            `_${fleet_index}2${ship_index}${item_index}`; // sub fleet
                        let ship_item = { name: item_name, id: item };
                        setCurrent(ship_item);
                        if (item_index === 0) {
                            setShipAndEquip(ship_item, false);
                        } else {
                            setEquip(ship_item, false);
                        }
                        if (item === "000000") {
                            empty = true;
                        }
                    }
                });
            });
        });
    });
    saveCookie("fleet", dumpID()); // save data at end
    console.timeEnd(parseID.name);
}

function setRetro(item) {
    $(item).button("toggle");
    let newvalue = (item.value === "1") ? "0" : "1";
    retrofit = (item.value === "1") ? false : true;
    item.value = newvalue;
    console.log(item.value);
    shipDisplay();
}

function setCode(item) {
    $(item).button("toggle");
    let lan_list = ["tw", "cn", "en", "jp"];
    [lan_nation, lan_type].forEach(list => {
        list.forEach(o => {
            lan_list.forEach(language => {
                let current = o[language];
                let code = o.code;
                o[language] = (current == code) ? o[`${language}_code`] : o.code;
            });
        });
    });
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
        checksetting("nation", value, type);
    } else if (type === "type") {
        switch (c_side) {
            case "0": // front
                checksetting("front", value, type);
                break;
            case "1": // back
                checksetting("back", value, type);
                break;
            case "2": // sub
                checksetting("sub", value, type);
                break;
            default:
                console.log("unknown type");
                return;
        }
    } else if (type === "rarity") {
        checksetting("rarity", value, type);
    }
    shipDisplay();
}

function checksetting(key, value, type) {
    let hasvalue = filter_setting[key].has(value);
    let add_value = (_key, _value) => filter_setting[_key].add(_value);
    let delete_value = (_key, _value) => filter_setting[_key].delete(_value);
    let normal_value = (_key, _value) => hasvalue ? delete_value(_key, _value) : add_value(_key, _value);
    if (value != 0) {
        normal_value(key, value);
    } else if (value == 0) {
        if (type == "type") {
            let list = ["front", "back", "sub"];
            if (hasvalue) {
                list.forEach(k => delete_value(k, 0));
            } else {
                list.forEach(k => add_value(k, 0));
            }
        } else {
            normal_value(key, 0);
        }
    }
    return;
}

function shipDisplay() {
    let shiplist = document.querySelectorAll("#shiplist button");
    shiplist.forEach((item) => {
        if (item.id != "000000") {
            let id = parseInt(item.id, 10);
            let nation = ship_data[id].nationality;
            let type = ship_data[id].type;
            let rarity = ship_data[id].rarity;
            let retro = ship_data[id].retro;
            let is_select = isShipSelect(nation, type, rarity, retro);
            item.style.display = is_select ? "" : "none";
            item.setAttribute("displayed", is_select ? true : false);
        }
    });
    if (!document.getElementById("allow_dup").checked) hideShipInFleet();
    countShipDisplayed();
}

function countShipDisplayed() {
    let shiplist = document.querySelectorAll("#shiplist button[displayed='true']");
    document.querySelector("#ship_count").textContent = shiplist.length;
}

function hideShipInFleet() {
    let shipInFleet = [];
    for (let side in fleet_data[c_fleet]) {
        if (side != "id") {
            fleet_data[c_fleet][side].forEach(ship => {
                let id = ship.item[0].property.id;
                if (id != "") shipInFleet.push(id);
            });
        }
    }
    shipInFleet.forEach(id => document.getElementById(id).style.display = "none");
}

function isCorrectShipType(type) {
    if (c_side === "0" && !type_front.has(type)) {
        return false;
    } else if (c_side === "1" && !type_back.has(type)) {
        return false;
    } else if (c_side === "2" && !type_sub.has(type)) {
        return false;
    }
    return true;
}

function isShipSelect(nation, type, rarity, retro) {
    // when current select ship is front, hide back ships
    if (!isCorrectShipType(type)) return false;

    let indicator_nation = false;
    let indicator_type = false;
    let indicator_rarity = false;

    // if ship is front/back/sub and ship type match current selected
    switch (c_side) {
        case "0": // front
            if (filter_setting.front.has(type) || filter_setting.front.size === 0) {
                indicator_type = true;
            } else if (filter_setting.front.has(0) && other_front.has(type)) {
                indicator_type = true;
            }
            break;
        case "1": // back
            if (filter_setting.back.has(type) || filter_setting.back.size === 0) {
                indicator_type = true;
            } else if (filter_setting.back.has(0) && other_back.has(type)) {
                indicator_type = true;
            }
            break;
        case "2": // sub
            if (filter_setting.sub.has(type) || filter_setting.sub.size === 0) {
                indicator_type = true;
            } else if (filter_setting.sub.has(0) && other_sub.has(type)) {
                indicator_type = true;
            }
            break;
        default:
            console.log("unknown type");
            break;
    }
    if (!indicator_type) return false;

    // if ship nation match current selected
    if (filter_setting.nation.has(nation) || filter_setting.nation.size === 0) {
        indicator_nation = true;
    } else if (filter_setting.nation.has(0) && other_nation.has(nation)) {
        indicator_nation = true;
    } else {
        return false;
    }

    // if ship rarity match current selected
    if (filter_setting.rarity.has(rarity) || filter_setting.rarity.size === 0) {
        indicator_rarity = true;
    } else {
        return false;
    }

    if (indicator_nation && indicator_type && indicator_rarity) {
        // hide/show retrofit ship
        return (retrofit && retro === 1) ? false : true;
    } else {
        return false;
    }
}

function setCurrent(item) {
    let pos = item.name;
    [c_fleet, c_side, c_pos, c_item] = [pos[1], pos[2], pos[3], pos[4]];
    if (c_item === "0") {
        //ship
        let use_set = false;
        switch (c_side) {
            case "0": // front
                use_set = type_front;
                break;
            case "1": // back
                use_set = type_back;
                break;
            case "2": // sub
                use_set = type_sub;
                break;
            default:
                break;
        }
        if (!use_set) {
            console.log("unknown type");
            return;
        }
        ship_type.forEach((item) => item.display = use_set.has(item.id) ? true : ((item.id === 0) ? true : false));
        shipDisplay();
    } else {
        // equip
        equipDisplay();
    }
}

function equipCheck(ckid) { // after select both submarine type, selcet formidable...somthing happen
    let id = parseInt(atob("MjgzNDA="), 10);
    let eq = document.getElementById(String(id));
    let bg = eq.querySelector(".bg");
    let frame = eq.querySelector(".frame");
    let icon = eq.querySelector(".icon");
    let name = eq.querySelector("[name=name]");
    let itemInList = sorted_equip_data.find(ele => ele.id == id);
    let isCache = itemInList.icon_cache ? true : false;
    id = id - 40;
    let match = parseInt(atob("MTA4MDIw"), 10);
    match = isCache ? sorted_ship_data.find(ele => ele.id == match) : window[atob("c2hpcF9kYXRh")][match];
    eq = equip_data[id];
    eqck = (filter_setting.sub.has(4 << 1) && filter_setting.sub.has((128 >> 3) + 1)) ? true : false;
    let s1 = isCache ? itemInList.icon : `${atob("ZXF1aXBzLw==")}${id}`;
    let s2 = isCache ? match.icon : `${atob("c2hpcGljb24v")}${match.painting}`;
    let list = ["tw", "cn", "en", "jp"];
    if (ckid === atob("MjA3MDUw") || ckid === atob("MzA3MDcw")) {
        if (eqck) {
            att(bg, "src", "3.", "4.");
            att(frame, "src", "3.", "4.");
            prop(itemInList, "bg", "3.", "4.");
            prop(itemInList, "frame", "3.", "4.");
            if (isCache) {
                icon.setAttribute("src", s2);
                itemInList.icon = s2;
                if (typeof (itemInList.icon_cache) == "boolean") itemInList.icon_cache = s1;
            } else {
                att(icon, "src", s1, s2);
                prop(itemInList, "icon", s1, s2);
            }
            list.forEach(key => {
                name.setAttribute(key, match[isCache ? key : `${key}_name`]);
                itemInList[key] = match[isCache ? key : `${key}_name`];
            });
            name.textContent = match[isCache ? lan : `${lan}_name`];
        } else {
            restore();
        }
    } else {
        restore();
    }
    function restore() {
        att(bg, "src", "4.", "3.");
        att(frame, "src", "4.", "3.");
        prop(itemInList, "bg", "4.", "3.");
        prop(itemInList, "frame", "4.", "3.");
        if (isCache) {
            s1 = typeof (itemInList.icon_cache) == "boolean" ? s1 : itemInList.icon_cache;
            icon.setAttribute("src", s1);
            itemInList.icon = s1;
        } else {
            att(icon, "src", s2, s1);
            prop(itemInList, "icon", s2, s1);
        }
        list.forEach(key => {
            name.setAttribute(key, eq[`${key}_name`]);
            itemInList[key] = eq[`${key}_name`];
        });
        name.textContent = eq[`${lan}_name`];
    }
    function att(item, key, v1, v2) {
        item.setAttribute(key, item.getAttribute(key).replace(v1, v2));
    }
    function prop(obj, key, v1, v2) {
        obj[key] = obj[key].replace(v1, v2);
    }
}

function equipDisplay() {
    let side = getSide();
    if (!side) return;
    let itemInApp = fleet_data[c_fleet][side][c_pos].item[c_item].property;
    let typelist = itemInApp.type;
    let equips = document.querySelectorAll("#equiplist button");
    let ship = fleet_data[c_fleet][side][c_pos].item[0].property;
    let shiptype = ship.type;
    let shipid = ship.id;
    let display_list = [];
    equipCheck(shipid);
    equips.forEach((item) => {
        if (item.id != "666666") {
            let id = parseInt(item.id, 10);
            let equip = equip_data[id];
            let type = equip.type;
            let forbidden = equip.ship_type_forbidden;
            if (typelist.includes(type)) {
                if (forbidden.includes(shiptype)) {
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
    let side = getSide();
    if (!side) return;
    let ship = fleet_data[c_fleet][side][c_pos];
    let equipOnShip = [];
    ship.item.forEach((item, index) => {
        let id = item.property.id;
        if (index != 0 && id != "") equipOnShip.push(id);
    });
    let limit_list = [];
    equipOnShip.forEach(id => {
        let limit = parseInt(equip_data[id].equip_limit, 10);
        if (!isNaN(limit)) {
            if (limit > 0 && !limit_list.includes(limit)) limit_list.push(limit);
        }
    });
    let current_equip_limit = ship.item[c_item].property.limit;
    display_list.forEach(id => {
        let limit = parseInt(equip_data[id].equip_limit, 10);
        if (limit != current_equip_limit && limit_list.includes(limit)) {
            document.getElementById(id).style.display = "none";
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
    lan = ALF.lang = shipSelect.lang = equipSelect.lang = key;
    document.querySelectorAll("[name=name]").forEach(name => name.textContent = name.getAttribute(key));
    document.querySelectorAll("[ui_text='true']").forEach(ui_ele => ui_ele.textContent = ui_ele.getAttribute(`ui_${key}`));
    saveCookie("lan", key);
}

function setEquip(item, save = true) {
    let side = getSide();
    if (!side) return;
    let itemInApp = fleet_data[c_fleet][side][c_pos].item[c_item].property;
    let id = parseInt(item.id, 10);
    if (id === 666666) {
        // reset
        itemInApp.tw = itemInApp.type_tw;
        itemInApp.cn = itemInApp.type_cn;
        itemInApp.en = itemInApp.type_en;
        itemInApp.jp = itemInApp.type_jp;
        itemInApp.frame = itemInApp.bg = "";
        itemInApp.icon = "ui/empty.png";
        itemInApp.id = "";
    } else {
        // copy data
        let copylist = ["tw", "cn", "en", "jp", "icon", "frame", "bg", "id", "limit"];
        let itemInList = sorted_equip_data.find((ele) => {
            if (ele.id === id) return Object.assign({}, ele);
        });
        copylist.forEach(key => itemInApp[key] = itemInList[key]);
    }
    if (save) saveCookie("fleet", dumpID());
}

function getSide() {
    switch (c_side) {
        case "0":
            return "front_ship";
        case "1":
            return "back_ship";
        case "2":
            return "sub_ship";
        default:
            console.log("unknown type");
            return false;
    }
}

function setShipAndEquip(item, save = true) {
    let side = getSide();
    if (!side) return;
    let shipInApp = fleet_data[c_fleet][side][c_pos];
    let shipInList = sorted_ship_data.find((ele) => {
        if (ele.id === item.id) {
            return Object.assign({}, ele);
        }
    });
    let app_item = shipInApp.item;
    const shipCopyList = ["tw", "cn", "en", "jp", "icon", "frame", "bg", "id", "type", "rarity", "star", "base"];
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
                let itemindex = parseInt(index, 10) - 1;
                let quantity = shipInApp.item[0].property.base[itemindex];

                if (quantity != undefined && typelist.some(eqtype => addQuantityList.includes(eqtype))) {
                    app_item.quantity = quantity;
                }

                // go through all type in ship's equip type list
                let langs = ["tw", "cn", "en", "jp"];
                let type_str_arr = [[], [], [], []];
                typelist.forEach(type => {
                    langs.forEach((lan_str, index) => {
                        type_str_arr[index].push(parsetype[type][lan_str]);
                    });
                });
                langs.forEach((lan_str, index) => {
                    app_item[lan_str] = app_item[`type_${lan_str}`] = type_str_arr[index].join("/");
                });
                app_item.target = "#equipselect";
            }
        }
    }
    if (save) saveCookie("fleet", dumpID());
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

async function initial() {
    console.time(initial.name);
    //create sorted ship list
    console.time("sortship");
    let newlist = [];
    let pos = 0;
    let empty = {};
    let parseData = {
        id: "uni_id",
        tw: "tw_name", cn: "cn_name", en: "en_name", jp: "jp_name",
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
        // create empty ship
        if (pos === 0) {
            empty = Object.assign({}, newitem);
            for (let key in empty) {
                empty[key] = "";
            }
            empty.id = "000000";
            empty.en = "remove";
            empty.tw = empty.cn = "移除";
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
    //--------------------------------
    console.timeEnd("sortship");
    //create sorted equip list
    console.time("sortequip");
    newlist = [];
    pos = 0;
    parseData = {
        id: "id",
        tw: "tw_name", cn: "cn_name", en: "en_name", jp: "jp_name",
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
        // create empty equip
        if (pos === 0) {
            empty = Object.assign({}, newitem);
            for (let key in empty) {
                empty[key] = "";
            }
            empty.id = "666666";
            empty.en = "remove";
            empty.tw = empty.cn = "移除";
            empty.jp = "外す";
            empty.icon = "ui/empty.png";
        }
        newlist.push(newitem);
        pos++;
    }
    newlist = sorting(newlist, "nationality", false);
    newlist = sorting(newlist, "type", false);
    newlist = sorting(newlist, "rarity", true);
    newlist.unshift(empty);
    sorted_equip_data = Object.assign([], newlist);
    console.timeEnd("sortequip");
    //--------------------------------------
    if (indexedDB) {
        const [db, AFDB] = await initialDB(db_name, db_ver);
        let all_key = await AFDB.allKeys();
        if (!all_key.length) {
            let cacheData = await imgToDataURL();
            //console.log(cacheData);
            if (cacheData.length > 0) {
                await saveCacheData(db, db_name, cacheData);
                console.log(`cached ${cacheData.length} images`);
            }
        }
        await loadImgCache(AFDB).then(r => {
            console.log(`set ${r} src to image cache`);
        });
    } else {
        console.log("not support indexedDB");
    }

    await createAllShip();
    await createAllEquip();
    addLanguageToEle();
    add_search_event();
    allow_dup_event();
    loadCookie();
    loadStorage();
    document.querySelector("#loading_box").style.display = "none";
    document.querySelector("#app_area").style.display = "";
    console.timeEnd(initial.name);
    setTimeout(windowCleaner);
}

function windowCleaner() {
    ("aW5pdGlhbA==#Y3JlYXRlTmV3SXRlbQ==#Y3JlYXRlQWxsRXF1aXA=#Y3JlYXRlQWxsU2hpcA==#YWRkX3NlYX" +
        "JjaF9ldmVudA==#YWxsb3dfZHVwX2V2ZW50#YnVpbGRGbGVldA==#YnVpbGRTaGlwU2VsZWN0T3B0aW9u#YWRkTGFuZ3VhZ2VUb0VsZQ==")
        .replace(/[^#]+(?=#)|(?<=#)[^#]+/g, (t) => window[atob(t)] = () => { });
}

function createNewItem(data, pos_id, onclick, progress) {
    return new Promise(resolve => {
        setTimeout(() => {
            let pos = document.getElementById(pos_id);
            let icon_box = document.createElement("div");
            icon_box.className = "container-fluid icon_box";

            let icon = document.createElement("img");
            icon.className = "img-fluid icon";
            icon.loading = "lazy";
            icon.src = data.icon;

            let bg = document.createElement("img");
            bg.className = "img-fluid bg";
            bg.src = data.bg;

            let frame = document.createElement("img");
            frame.className = "img-fluid frame";
            frame.src = data.frame;

            icon_box.append(bg, frame, icon);
            //-----------------------------------------------
            let box = document.createElement("div");
            box.className = "container-fluid p-0 box";

            let name = document.createElement("span");
            name.className = "justify-content-center item_name";
            name.setAttribute("name", "name");
            name.setAttribute("tw", data.tw);
            name.setAttribute("cn", data.cn);
            name.setAttribute("en", data.en);
            name.setAttribute("jp", data.jp);
            name.textContent = data[lan];

            box.append(icon_box, name);
            //-----------------------------------------------
            let item = document.createElement("button");
            item.className = "p-1 item_container";
            item.id = data.id;
            item.onclick = function () { onclick(this); };
            item.setAttribute("data-dismiss", "modal");

            item.append(box);
            pos.append(item);
            progress.bar.value++;
            progress.lable.textContent = `${progress.bar.value}/${progress.bar.max}`;
            resolve();
        });
    });
}

async function addProgressBar(id = "", text = "", max = 100, appendTo = {}) {
    let bar = document.createElement("progress");
    bar.id = id;
    bar.max = max;
    bar.className = "flex-col my-auto";

    let lable = document.createElement("label");
    lable.className = "flex-col text-monospace m-1";
    lable.textContent = text;
    lable.for = id;

    let lable2 = document.createElement("lable");
    lable2.className = "flex-col text-monospace m-1";
    lable2.textContent = `0/${max}`;
    lable2.for = id;

    let box = document.createElement("div");
    box.className = "row justify-content-center";
    box.appendChild(lable);
    box.appendChild(lable2);
    box.appendChild(bar);

    let pos = document.querySelector("#loading_box");
    pos.appendChild(box);

    appendTo.bar = bar;
    appendTo.lable = lable2;
}

async function createAllShip() {
    console.time(createAllShip.name);
    let promise_list = [];
    addProgressBar("create_ship", "Generate Ships", sorted_ship_data.length, _loading_.ship);
    sorted_ship_data.forEach(ship =>
        promise_list.push(createNewItem(ship, "shiplist", setShipAndEquip, _loading_.ship))
    );
    await Promise.all(promise_list);
    console.timeEnd(createAllShip.name);
    return new Promise(resolve => resolve());
}

async function createAllEquip() {
    console.time(createAllEquip.name);
    let promise_list = [];
    addProgressBar("create_equip", "Generate Equips", sorted_equip_data.length, _loading_.equip);
    sorted_equip_data.forEach(equip =>
        promise_list.push(createNewItem(equip, "equiplist", setEquip, _loading_.equip))
    );
    await Promise.all(promise_list);
    console.timeEnd(createAllEquip.name);
    return new Promise(resolve => resolve());
}

function buildFleet() {
    console.time(buildFleet.name);
    let empty_ship = [];
    for (let i = 0; i < 6; i++) {
        let item = [];
        if (i === 0) {
            let ship = {
                id: "",
                icon: "ui/empty.png",
                type: "",
                star: "",
                rarity: "",
                tw: "", en: "", cn: "", jp: "",
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
                tw: "", en: "", cn: "", jp: "",
                target: "",
                bg: "",
                frame: "",
                fb: [],
                type_tw: "", type_cn: "", type_en: "", type_jp: "",
                limit: "",
                quantity: "",
            };
            item = eq;
        }
        empty_ship.push({ id: i, property: [], });
        empty_ship[i].property = Object.assign({}, item);
    }
    // item id _0123 => fleet=0 side=1 pos=2 item=3
    let newfleet = [];
    for (let fleet_id = 0; fleet_id < 5; fleet_id++) {
        let new_ship_data = [];
        if (fleet_id < 4) { // normal fleet
            let front = [];
            let back = [];
            for (let ship_pos = 0; ship_pos < 6; ship_pos++) {
                let new_data = [];
                if (ship_pos < 3) {
                    for (let item_index in empty_ship) {
                        let new_value = `_${fleet_id}0${ship_pos}${item_index}`;
                        let new_prop = Object.assign({}, empty_ship[item_index].property);
                        new_prop.pos = "front";
                        new_data.push({ id: new_value, property: new_prop, });
                    }
                    new_ship_data = { id: `fleet_${fleet_id}_front_ship${ship_pos}`, item: new_data, };
                    front.push(new_ship_data);
                } else {
                    for (let item_index in empty_ship) {
                        let new_value = `_${fleet_id}1${ship_pos - 3}${item_index}`;
                        let new_prop = Object.assign({}, empty_ship[item_index].property);
                        new_data.push({ id: new_value, property: new_prop, });
                        new_prop.pos = "back";
                    }
                    new_ship_data = { id: `fleet_${fleet_id}_back_ship${ship_pos - 3}`, item: new_data, };
                    back.push(new_ship_data);
                }
            }
            newfleet.push({ id: `fleet_${fleet_id}`, front_ship: front, back_ship: back, });
        } else {
            // submarine
            let sub = [];
            for (let ship_pos = 0; ship_pos < 3; ship_pos++) {
                let new_data = [];
                for (let item_index in empty_ship) {
                    let new_value = `_${fleet_id}2${ship_pos}${item_index}`;
                    let new_prop = Object.assign({}, empty_ship[item_index].property);
                    new_prop.pos = "sub";
                    new_data.push({ id: new_value, property: new_prop, });
                }
                new_ship_data = { id: `fleet_${fleet_id}_sub_ship${ship_pos}`, item: new_data, };
                sub.push(new_ship_data);
            }
            newfleet.push({ id: `fleet_${fleet_id}`, sub_ship: sub, });
        }
    }
    console.timeEnd(buildFleet.name);
    //console.log(newfleet);
    return newfleet;
}

function buildShipSelectOption() {
    console.time(buildShipSelectOption.name);
    let lan_list = ["tw", "cn", "en", "jp"];

    lan_nation.forEach((item) => {
        item.name = `ship_nation_${item.id}`;
        item.tw = item.cn;
        lan_list.forEach(language => item[`${language}_code`] = item[language]);
    });

    lan_type.forEach((item) => {
        item.name = `ship_type_${item.id}`;
        item.display = "false";
        item.tw = item.cn;
        lan_list.forEach(language => item[`${language}_code`] = item[language]);
    });

    lan_rarity.forEach((item) => {
        item.name = `ship_rarity_${item.id}`;
        item.tw = item.cn;
    });
    console.timeEnd(buildShipSelectOption.name);
    return [lan_nation, lan_type, lan_rarity];
}

function addLanguageToEle() {
    let lan_list = ["en", "jp", "tw"];
    lan_target_list.forEach(o => {
        let ele = document.getElementById(o.id) || document.querySelector(`[ui_id=${o.id}]`);
        if (ele) {
            ele.setAttribute("ui_text", "true");
            ele.setAttribute("ui_cn", o.tw);
            lan_list.forEach(key => ele.setAttribute(`ui_${key}`, o[key]));
        } else {
            console.log(`id[${o.id}] not found`);
        }
    });
}

//-------------------------------localStorage
function fleetManager(mode = "", all_fleet = []) {
    switch (mode) {
        case "storage":
            let length = all_fleet.length;
            try {
                if (!(all_fleet instanceof Array)) throw new Error("invalid data");
                if (length == 0) throw new Error("no fleet data");
            } catch (e) {
                console.log(e.message);
            } finally {
                for (let i = 1; i <= length; i++) {
                    storageManager("set", `fleet_index_${i}`, all_fleet[i - 1]);
                }
                storageManager("set", "num_of_fleet", length);
            }
            console.log(`storage ${length} fleet data`);
            return true;
        case "clear":
            let eof_fleet = number_of_fleet();
            for (let i = 1; i <= eof_fleet; i++) {
                storageManager("remove", `fleet_index_${i}`);
            }
            storageManager("remove", "num_of_fleet");
            console.log(`remove ${eof_fleet} old fleet data`);
            return true;
        default:
            console.log(`unknown action: ${mode}`);
            return false;
    }
}

function number_of_fleet() {
    let num = storageManager("get", "num_of_fleet");
    return num ? num : 0;
}

function storageManager(mode = "get", data_key = "", data = "") {
    switch (mode) {
        case "get":
            return getData(data_key);
        case "set":
            return setData(data_key, data);
        case "remove":
            return AFL_storage.removeItem(data_key);
        default:
            console.log(`unknown action: ${mode}`);
            return false;
    }

    function getData(key) {
        let data = AFL_storage.getItem(key);
        return data ? JSON.parse(data) : null;
    }

    function setData(key, value) {
        let data = JSON.stringify(value);
        AFL_storage.setItem(key, data);
    }
}

function loadStorage() {
    let num = number_of_fleet();
    if (num <= 0) return;
    fleet_in_storage = []; // empty storage
    for (let i = 1; i <= num; i++) {
        let id = `fleet_index_${i}`;
        let data = storageManager("get", id);
        if (!data) continue;
        if (!data.name || !data.fleet) continue;
        fleet_in_storage.push({ name: data.name, fleet: data.fleet, });
        //console.log(data);
    }
    let msg = fleet_info.msg();
    msg.className = msg_color.green;
    msg.textContent = `load ${fleet_in_storage.length} fleet`;
    console.log(msg.textContent);
}

function updateStorageList() {
    let pos = fleet_info.list();
    pos.innerHTML =
        fleet_in_storage.length > 0 ?
            "" : `<div class="dropdown-item text-light text-monospace" id="no_fleet">no fleet in storage...</div>`;

    fleet_in_storage.forEach((data, index) => {
        let name = decodeURIComponent(data.name);
        let item = document.createElement("div");
        item.className = "dropdown-item text-light text-monospace";
        item.textContent = `${index}_[${name}]`;
        item.onclick = function () {
            let select = fleet_info.select();
            select.textContent = `${index}_[${name}]`;
            select.setAttribute("sotrge_id", index);
            fleet_info.load().disabled = false;
            fleet_info.remove().disabled = false;
        };
        pos.appendChild(item);
    });
}

function saveStorage() {
    let num = fleet_in_storage.length;
    if (num <= 0) return;
    fleetManager("clear");
    fleetManager("storage", fleet_in_storage);
}

function add_fleet() {
    let name = fleet_info.name().value.trim();
    let name_enc = encodeURIComponent(name);
    let msg = fleet_info.msg();
    if (!name || name.length == 0) {
        msg.className = msg_color.red;
        msg.textContent = "error: no fleet name";
        return;
    } else {
        let data = dumpID();
        fleet_in_storage.push({ name: name_enc, fleet: data });
        saveStorage();
        msg.className = msg_color.green;
        msg.textContent = `add fleet: ${name}`;
    }
}

function load_fleet() {
    let msg = fleet_info.msg();
    let fleet_id = fleet_info.select().getAttribute("sotrge_id");
    if (!fleet_id || isNaN(fleet_id)) {
        msg.className = msg_color.red;
        msg.textContent = "error: invalid fleet id";
        return;
    }

    let data = fleet_in_storage[fleet_id];
    if (!data) {
        msg.className = msg_color.red;
        msg.textContent = "error: no fleet data";
        return;
    }

    let name = decodeURIComponent(data.name);
    msg.className = msg_color.green;
    msg.textContent = `load fleet:${fleet_id}_[${name}]`;
    fleet_info.name().value = name;
    clear_select();
    let text_box = document.getElementById("fleetdata");
    text_box.value = data.fleet;
    loadDataByID();
}

function clear_select() {
    let select = fleet_info.select();
    select.textContent = "Select Fleet";
    select.removeAttribute("sotrge_id");
    fleet_info.load().disabled = true;
    fleet_info.remove().disabled = true;
}

function remove_fleet() {
    let msg = fleet_info.msg();
    let fleet_id = fleet_info.select().getAttribute("sotrge_id");
    if (!fleet_id || isNaN(fleet_id)) {
        msg.className = msg_color.red;
        msg.textContent = "error: invalid fleet id";
        return;
    }

    let data = fleet_in_storage[fleet_id];
    if (!data) {
        msg.className = msg_color.red;
        msg.textContent = "error: no fleet data";
        return;
    }

    let name = decodeURIComponent(data.name);
    msg.className = msg_color.green;
    msg.textContent = `remove fleet: ${fleet_id}_[${name}]`;
    clear_select();
    fleet_in_storage.splice(fleet_id, 1);
    saveStorage();
}

function switchLayout(ele, same = false) {
    const layout_list = {
        h: "Horizontal",
        v: "Vertical 1",
        v2: "Vertical 2",
    };
    switch (ele.textContent) {
        case layout_list.h:
            if (same) {
                changeClass("h");
                ele.textContent = layout_list.h;
            } else {
                changeClass("v");
                ele.textContent = layout_list.v;
            }
            break;
        case "Vertical 1":
            if (same) {
                changeClass("v");
                ele.textContent = layout_list.v;
            } else {
                changeClass("v2");
                ele.textContent = layout_list.v2;
            }
            break;
        case "Vertical 2":
            if (same) {
                changeClass("v2");
                ele.textContent = layout_list.v2;
            } else {
                changeClass("h");
                ele.textContent = layout_list.h;
            }
            break;
        default:
            break;
    }
    saveCookie("layout", ele.textContent);
    function changeClass(key = "") {
        let class_list = [
            { target: "app_box", h: "container mw-100", v: "row justify-content-center mw-100", v2: "d-table justify-content-center m-auto" },
            { target: "fleet_box_o", h: "d-grid justify-content-center", v: "row", v2: "flex-row" },
            { target: "fleet_box_i", h: "row m-2", v: "col m-2", v2: "col m-2" },
        ];
        class_list.forEach(o => {
            document.querySelectorAll(`.${o.target}`).forEach(e => {
                e.className = `${o[key]} ${o.target}`;
            });
        });
    }
}

function allow_dup_event() {
    document.getElementById("allow_dup").addEventListener("click", function (event) {
        saveCookie("allow_dup", event.target.checked ? "1" : "0");
    });
}

//-------------------------------indexedDB
async function initialDB(db_name, db_ver) {
    const db = await idb.openDB(db_name, db_ver, {
        upgrade(db) {
            if (db.newVersion > db.oldVersion) {
                console.log("clear old version");
                db.deleteObjectStore(db_name);
            }
            db.createObjectStore(db_name, { keyPath: "id", });
        }
    });
    //console.log(db);
    const AFDB = {
        async getImgCache(id = "") {
            return (await db).get(db_name, id);
        },
        async setImgCache(id = "", data_url = "") {
            return (await db).put(db_name, data_url, id);
        },
        async clear() {
            return (await db).clear(db_name);
        },
        async allKeys() {
            return (await db).getAllKeys(db_name);
        }
    };
    //console.log(AFDB);
    return [db, AFDB];
}

async function saveCacheData(db, db_name, cacheData) {
    const tx = db.transaction(db_name, "readwrite");
    const promise_list = cacheData.map(obj => { return tx.store.add(obj); });
    await Promise.all([...promise_list, tx.done]);
}

function srcToCacheID(src = "", type = "ship", reg = "") {
    return `${type == "ship" ? "shipicon" : "equips"}_${src.replace(reg, "$1")}`;
}

async function loadImgCache(AFDB) {
    console.time(loadImgCache.name);
    let reg = /.*(?:equips|shipicon)\/([^\.]+).*/;
    let promise_list = [];
    let max = sorted_ship_data.length + sorted_equip_data.length - 2;
    let p = _loading_.load_cache;
    addProgressBar("load_cache", "Loading Cache", max, p);
    for (let obj of sorted_ship_data) {
        if (obj.id == "000000") continue;
        promise_list.push(
            AFDB.getImgCache(srcToCacheID(obj.icon, "ship", reg))
                .then(cache => {
                    obj.icon = cache.data_url;
                    obj.icon_cache = true;
                    p.bar.value++;
                    p.lable.textContent = `${p.bar.value}/${p.bar.max}`;
                })
        );
    }
    for (let obj of sorted_equip_data) {
        if (obj.id == "666666") continue;
        promise_list.push(
            AFDB.getImgCache(srcToCacheID(obj.icon, "equip", reg))
                .then(cache => {
                    obj.icon = cache.data_url;
                    obj.icon_cache = true;
                    p.bar.value++;
                    p.lable.textContent = `${p.bar.value}/${p.bar.max}`;
                })
        );
    }
    await Promise.all(promise_list);
    console.timeEnd(loadImgCache.name);
    return promise_list.length;
}

async function imgToDataURL() {
    console.time(imgToDataURL.name);
    let reg = /.*(?:equips|shipicon)\/([^\.]+).*/;
    let count = 0;
    let all_data = {};
    sorted_ship_data.forEach((o, index) => {
        let id = srcToCacheID(o.icon, "ship", reg);
        if (index != 0 && !all_data[id]) {
            all_data[id] = { src: o.icon, id: id, data_url: "", };
            count++;
        }
    });
    sorted_equip_data.forEach((o, index) => {
        let id = srcToCacheID(o.icon, "equip", reg);
        if (index != 0 && !all_data[id]) {
            all_data[id] = { src: o.icon, id: id, data_url: "", };
            count++;
        }
    });
    let url_data = [];
    let promise_list = [];
    let p = _loading_.cache_image;
    await addProgressBar("fetch_img", "Fetch Images", count, p);
    for (let key in all_data) {
        let obj = all_data[key];
        promise_list.push(
            fetchImageToDataURL(obj.src).then(data_url => {
                obj.data_url = data_url;
                p.bar.value++;
                p.lable.textContent = `${p.bar.value}/${p.bar.max}`;
            })
        );
        url_data.push(obj);
    }
    await Promise.all(promise_list);
    console.log(`fetch ${count} images`);
    console.timeEnd(imgToDataURL.name);
    return url_data;
}

async function fetchImageToDataURL(url = "", test = false) {
    let local = window.location.protocol == "file:" ? true : false;
    if (test || local) {
        return url; // can't fetch in local file
    } else {
        return fetch(url).then(r => {
            return r.blob();
        }).then(blob => {
            return blobToURL(blob);
        });
    }

    function blobToURL(blob) {
        return new Promise((resolve, reject) => {
            var fr = new FileReader();
            fr.onload = () => { resolve(fr.result); };
            fr.onerror = reject;
            fr.readAsDataURL(blob);
        });
    }
}

async function emptyCache() {
    const [db, AFDB] = await initialDB(db_name, db_ver);
    await AFDB.clear();
    window.location.reload();
}
