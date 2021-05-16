/* jshint esversion: 9 */
// everything is temporarily, unless it work...
//----------------------------------------------------------
const
    lan_target_list = [
        // for ui element that have no language.
        // do not change id, unless you know what you are doing.
        { id: "allow_dup_btn", en: "Allow Duplicate", jp: "重複を許可する", tw: "允許重複的船", },
        { id: "layout_label", en: "Layout:", jp: "スタイル:", tw: "排版方式:", },

        { id: "add_fleet", en: "Save Current", jp: "現在の艦隊をセーブ", tw: "儲存目前艦隊", },
        { id: "select_fleet", en: "Select Fleet", jp: "艦隊を選択", tw: "選擇艦隊", },
        { id: "load_fleet", en: "Load Fleet", jp: "ロード", tw: "載入艦隊", },
        { id: "remove_fleet", en: "Delete", jp: "削除", tw: "刪除", },
        { id: "fleet_name_label", en: "Fleet Name", jp: "艦隊名", tw: "艦隊名稱", },

        { id: "emptyfleet", en: "Empty Current Fleet", jp: "現在の艦隊を空に", tw: "清空目前艦隊", },

        { id: "fleetdata_text", en: "Fleet data", jp: "艦隊データ", tw: "艦隊資料", },
        { id: "dumpdata", en: "Dump", jp: "ダンプ", tw: "匯出", },
        { id: "copyData", en: "Copy", jp: "コピー", tw: "複製", },
        { id: "emptyData", en: "Clear", jp: "クリア", tw: "清空", },
        { id: "loadDataByID", en: "Load", jp: "ロード", tw: "載入", },

        { id: "rebuild_cache_btn", en: "Rebuild Cache", jp: "キャッシュをクリア&再構築", tw: "重建快取", },

        { id: "select_ship", en: "Select Ship", jp: "艦船を選択", tw: "選擇艦船", },
        { id: "filter_nation", en: "Nation", jp: "陣営", tw: "國家", },
        { id: "filter_type", en: "Type", jp: "種類", tw: "種類", },
        { id: "filter_rarity", en: "Rarity", jp: "レア度", tw: "稀有度", },

        { id: "search_input", en: "Search", jp: "検索", tw: "搜尋", },
        { id: "filter_search_result", en: "Result", jp: "結果", tw: "結果", },
        { id: "filter_retro", en: "Retrofitted Only", jp: "改造された艦船だけ", tw: "只顯示改造後的", },

        { id: "select_equip", en: "Select Equip", jp: "装備を選択", tw: "選擇裝備", },
    ],
    // equip type
    parsetype = {
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
Object.keys(parsetype).forEach(key => parsetype[key].tw = parsetype[key].cn);

//----------------------------------------------------------
// ship filter
const
    lan_ship_nation = [
        { id: 1, cn: "白鷹", en: "Eagle Union", jp: "ユニオン", code: "USS" },
        { id: 2, cn: "皇家", en: "Royal Navy", jp: "ロイヤル", code: "HMS" },
        { id: 3, cn: "重櫻", en: "Sakura Empire", jp: "重桜", code: "IJN" },
        { id: 4, cn: "鐵血", en: "Iron Blood", jp: "鉄血", code: "KMS" },
        { id: 5, cn: "東煌", en: "Dragon Empery", jp: "東煌", code: "PRAN/ROC" },
        { id: 6, cn: "撒丁帝國", en: "Sardegna Empire", jp: "サディア", code: "RN" },
        { id: 7, cn: "北方聯合", en: "Northern Parliament", jp: "北連", code: "SN" },
        { id: 8, cn: "自由鳶尾", en: "Iris Libre", jp: "アイリス", code: "FFNF" },
        { id: 9, cn: "維希教廷", en: "Vichya Dominion", jp: "ヴィシア", code: "MNF" },
        { id: 0, cn: "其他", en: "Other", jp: "その他", code: "Other" },
    ],
    lan_ship_type = [
        { id: 8, cn: "潛艇", en: "Submarine", jp: "潜水艦", code: "SS", pos: "sub" },
        { id: 17, cn: "潛母", en: "Submarine Carrier", jp: "潜水空母", code: "SSV", pos: "sub" },

        { id: 1, cn: "驅逐", en: "Destroyer", jp: "駆逐", code: "DD", pos: "front" },
        { id: 2, cn: "輕巡", en: "Light Cruiser", jp: "軽巡", code: "CL", pos: "front" },
        { id: 3, cn: "重巡", en: "Heavy Cruiser", jp: "重巡", code: "CA", pos: "front" },
        { id: 18, cn: "超巡", en: "Large Cruiser", jp: "超甲巡", code: "CB", pos: "front" },

        { id: 4, cn: "戰巡", en: "Battle Cruiser", jp: "巡洋戦艦", code: "BC", pos: "back" },
        { id: 5, cn: "戰列", en: "Battle Ship", jp: "戦艦", code: "BB", pos: "back" },
        { id: 6, cn: "輕航", en: "Light Carrier", jp: "軽空母", code: "CVL", pos: "back" },
        { id: 7, cn: "航母", en: "Carrier", jp: "空母", code: "CV", pos: "back" },
        { id: 13, cn: "重砲", en: "Monitor", jp: "砲艦", code: "BM", pos: "back" },
        { id: 12, cn: "維修", en: "Repair Ship", jp: "工作", code: "AR", pos: "back" },
        { id: 0, cn: "其他", en: "Other", jp: "その他", code: "Other" },
    ],
    lan_ship_rarity = [
        { id: 6, cn: "海上傳奇", en: "Decisive", jp: "UR", code: "★★★★★★" },
        { id: 5, cn: "超稀有", en: "SuperRare", jp: "SSR", code: "★★★★★" },
        { id: 4, cn: "精銳", en: "Elite", jp: "SR", code: "★★★★" },
        { id: 3, cn: "稀有", en: "Rare", jp: "R", code: "★★★" },
        { id: 2, cn: "普通", en: "Normal", jp: "N", code: "★★" },
    ];
buildShipSelectOption();

//----------------------------------------------------------
// equip filter
const
    lan_eq_type = Object.keys(parsetype).map(key => key = Object.assign({ id: key }, parsetype[key])),
    lan_eq_nation = lan_ship_nation.map(o => Object.assign({}, o)),
    lan_eq_tier = [{ id: 0, }, { id: 3, }, { id: 2, }, { id: 1, },],
    lan_eq_rarity = [
        { id: 6, en: "★★★★★★", },
        { id: 5, en: "★★★★★", },
        { id: 4, en: "★★★★", },
        { id: 3, en: "★★★", },
        { id: 2, en: "★★", },
    ];
buildEquipSelectOption();
//----------------------------------------------------------
Vue.component("item-container", {
    props: ["item", "lang"],
    template: `
        <button
          class="p-1 item_container" 

          v-bind:name="item.id"
          v-bind:pos="item.property.pos"
          v-bind:data-target="item.property.target"

          onclick="${setCurrent.name}(this)"
          data-toggle="modal"          
          >
            <div class="container-fluid p-0 box">
              <div class="icon_box">
                <img class="img-fluid bg" v-bind:src="item.property.bg">
                <img class="img-fluid frame" v-bind:src="item.property.frame">
                <img class="img-fluid icon" v-bind:src="item.property.icon">
                <span class="d-flex justify-content-start text-monospace itemq" v-text="item.property.quantity"></span>
                <span class="d-flex justify-content-start text-monospace ship_pos2" v-text="item.property.ship_pos"></span>
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

// <span class="row ml-1 text-monospace fleet_name" v-text="fleet.id" v-if="fleet.show_name"></span>
// no use yet & blocking

const fleet_btn_style = {
    normal: `btn btn-outline-secondary btn-sm fleet_op_btn p-0 w-50`,
    yellow: `btn btn-outline-warning btn-sm fleet_op_btn p-0 w-50`,
    text: `text-monospace text-center w-100 d-flex align-items-center justify-content-center border border-warning`,
};

x = `${insertFleet}(,fleet.id[fleet.id.length-1],)`;
Vue.component("fleet-container", {
    props: ["fleet", "lang"],
    template: `
        <div class="d-grid justify-content-center fleet_box_o">
            <div class="d-flex w-100">
                <div class="line-5-item text-monospace text-center m-auto fleet_name" v-text="fleet.id">Fleet_ID</div>
                <div class="d-flex line-5-item">
                    <div class="d-flex btn-group w-100 m-auto">
                        <button class="${fleet_btn_style.yellow}" v-bind:pos="fleet.id" data="1,0" onclick="${insertFleet.name}(this)">↑</button>    
                        <div class="${fleet_btn_style.text}">Normal</div>                    
                        <button class="${fleet_btn_style.yellow}" v-bind:pos="fleet.id" data="1,1" onclick="${insertFleet.name}(this)">↓</button>                        
                    </div>
                </div>
                <div class="d-flex line-5-item">
                    <div class="d-flex btn-group w-100 mx-1 my-auto">
                        <button class="${fleet_btn_style.normal} border-right" v-bind:pos="fleet.id" onclick="${moveFleet.name}(this)" data="-1">↑</button>
                        <button class="${fleet_btn_style.normal} border-left" v-bind:pos="fleet.id" onclick="${moveFleet.name}(this)" data="1">↓</button>
                    </div>
                </div>
                <div class="d-flex line-5-item">
                    <div class="d-flex btn-group w-100 m-auto">                        
                        <button class="${fleet_btn_style.yellow}" v-bind:pos="fleet.id" data="2,0" onclick="${insertFleet.name}(this)">↑</button>
                        <div class="${fleet_btn_style.text}">Sub</div>
                        <button class="${fleet_btn_style.yellow}" v-bind:pos="fleet.id" data="2,1" onclick="${insertFleet.name}(this)">↓</button>
                    </div>
                </div>
                <div class="d-flex line-5-item">
                    <button class="btn btn-danger btn-sm w-25 mx-auto" v-bind:pos="fleet.id" onclick="${deleteFleet.name}(this)">X</button>
                </div>
            </div>
            <div class="row m-2 border border-secondary py-2 fleet_box_i">
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

//----------------------------------------------------------
const
    filter_btn_class = "btn btn-outline-secondary line-5-item py-2 font-weight-bold text-truncate filter-btn",
    filter_btn_template = `<button type="button" onclick="${updateSetting.name}(this)" class="${filter_btn_class}"></button>`;
//----------------------------------------------------------
Vue.component("ship-nation-button", { props: ['nation', "lang"], template: filter_btn_template });
Vue.component("ship-type-button", { props: ['type', "lang"], template: filter_btn_template });
Vue.component("ship-rarity-button", { props: ['rarity', "lang"], template: filter_btn_template });

//----------------------------------------------------------
Vue.component("equip-nation-button", { props: ['nation', "lang"], template: filter_btn_template });
Vue.component("equip-type-button", { props: ['type', "lang"], template: filter_btn_template });
Vue.component("equip-rarity-button", { props: ['rarity', "lang"], template: filter_btn_template });
Vue.component("equip-tier-button", { props: ['tier', "lang"], template: filter_btn_template });

//----------------------------------------------------------
const
    formation = {
        v4: [1, 1, 1, 1, 2],
        v5: [1],
    },
    AFL_storage = window.localStorage,
    filter_setting = {
        // ship
        nation: new Set(),
        front: new Set(),
        back: new Set(),
        sub: new Set(),
        rarity: new Set(),
        // equip
        eq_nation: new Set(),
        eq_rarity: new Set(),
        eq_type: new Set(),
        eq_tier: new Set(),
    },
    fleet_info = {
        name: () => document.querySelector("#fleet_name"),
        select: () => document.querySelector("#select_fleet"),
        msg: () => document.querySelector("#error_message"),
        list: () => document.querySelector("#fleet_list"),
        load: () => document.querySelector("#load_fleet"),
        remove: () => document.querySelector("#remove_fleet"),
    },
    msg_color = {
        red: "text-danger",
        green: "text-success",
    },
    _loading_ = {
        ship: {},
        equip: {},
        cache_image: {},
        load_cache: {},
    },
    pos_table = { back_sub: { 0: 2, 1: 1, 2: 3 }, front: { 0: 3, 1: 2, 2: 1 }, },
    // ship
    type_front = new Set([1, 2, 3, 18, 19]),
    type_back = new Set([4, 5, 6, 7, 10, 12, 13]),
    type_sub = new Set([8, 17]),
    other_nation = new Set([97, 98, 101, 103, 104, 105, 106, 107, 108, 109, 110]), // 97:META, 98:Bulin, 100+:collab
    other_front = new Set([19]),
    other_back = new Set([10]),
    other_sub = new Set([0]),
    // equip
    addQuantityList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13,],
    eq_other_nation = new Set([104, 105, 106]),
    eq_nation = new Set(lan_eq_nation.map(o => parseInt(o.id, 10))),
    eq_type = new Set(lan_eq_type.map(o => parseInt(o.id, 10))),
    eq_rarity = new Set(lan_eq_rarity.map(o => parseInt(o, 10))),
    eq_tier = new Set(lan_eq_tier.map(o => parseInt(o.id, 10))),
    // db
    db_name = "image_cache",
    db_ver = 1,
    // dump data
    ALF_version = 0.05;

let
    c_fleet = "", c_side = "", c_pos = "", c_item = "",
    c_ships = [], c_formation = [],
    retrofit_only = true,
    fleet_data = buildFleet(formation.v5),
    sorted_ship_data = [],
    sorted_equip_data = [],
    fleet_in_storage = [],
    eqck = false,
    lan = "en";

//----------------------------------------------------------
// function will be enumerable if directly use Array.prototype.custom_function
// it will show up in every (for...in) and broke the code

Object.defineProperty(Array.prototype, "isAll", {
    value:
        /**
         * check is every value in Array pass Boolean(value)
         * @returns 
         */
        function () {
            return this.every(v => Boolean(v));
        }
});

Object.defineProperty(Array.prototype, "sameAs", {
    value:
        /**
         * compare is this Array the same as input
         * @param {Array} arr array to compare
         * @returns {Boolean}
         */
        function (arr) {
            if (!(arr instanceof Array)) throw Error(`[${arr}] (${typeof arr}) is not Array!!`);
            return (JSON.stringify(this) === JSON.stringify(arr));
        }
});

const sleep = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));
const indexInObj = (obj, getvalue = false) => {
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
};

//----------------------------------------------------------
initial();

//----------------------------------------------------------
const
    ALF = new Vue({
        el: "#AzurLaneFleetApp",
        data: {
            fleets: fleet_data,
            lang: lan
        },
    }),
    shipSelect = new Vue({
        el: "#shipselect",
        data: {
            nation: lan_ship_nation,
            type: lan_ship_type,
            rarity: lan_ship_rarity,
            //shiplist: sorted_ship_data,
            lang: lan
        }
    }),
    equipSelect = new Vue({
        el: "#equipselect",
        data: {
            nation: lan_eq_nation,
            type: lan_eq_type,
            rarity: lan_eq_rarity,
            tier: lan_eq_tier,
            //equips: sorted_equip_data,
            lang: lan,
        }
    });

//----------------------------------------------------------

function add_search_event() {
    let search_input = document.querySelector("#search_input");
    if (!search_input) return console.log("search_input not found");
    search_input.addEventListener("input", ship_name_search);
    let selship = $("#shipselect");
    selship.on("shown.bs.modal", function () { $(this).find("[autofocus]").focus(); }); // autofocus to input
    selship.on("hide.bs.modal", () => search_input.value = ""); // empty text when modal fade
    //console.log("add search event");
    setTimeout(() => window.add_search_event = undefined);
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
    let data = 'No4BgGk6qhdC5Y2gpLlze5nEZTQMwQEYsg';
    data = LZString.decompressFromEncodedURIComponent(data);
    updateFleetDataBox(data);
    loadDataByID();
    disableInvalidMoveButton();
}

function dumpID(raw = false, input_data = []) {
    switch (ALF_version) {
        case 0.05:
            return v005();
        default:
            throw Error("unknown version");
    }
    function v004() {
        //console.time(dumpID.name);
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
        data = `${data}!0.04!${hash}`;
        data = LZString.compressToEncodedURIComponent(data);
        let textbox = document.getElementById("fleetdata");
        textbox.value = data;
        //console.timeEnd(dumpID.name);
        return data;
    }
    function v005() {
        //console.time(dumpID.name);
        let data = [], raw_data = [];
        if (!input_data.length) {
            fleet_data.forEach(fleet => data.push(dumpFleet(fleet)));
        } else {
            input_data.forEach(fleet => data.push(dumpFleet(fleet)));
        }
        raw_data = data;
        //if(!input_data.length) c_formation = extractFormation(raw_data);
        data = JSON.stringify(data, stringifyReplacer);
        data = updateFleetDataBox(data);
        //console.timeEnd(dumpID.name);
        return raw ? raw_data : data;
    }
}

function updateFleetDataBox(input_data = "") {
    let textbox = document.getElementById("fleetdata"),
        data = `${input_data}!0.05!${CryptoJS.MD5(input_data).toString()}`;
    data = LZString.compressToEncodedURIComponent(data);
    textbox.value = data;
    return data;
}

function dumpFleet(input_fleet_data = []) {
    let fleetdata = [];
    for (let side_key in input_fleet_data) {
        if (side_key == "id") continue;
        let sidedata = [];
        input_fleet_data[side_key].forEach(ship => {
            let shipdata = [];
            ship.item.forEach(item => shipdata.push(item.property.id));
            sidedata.push(shipdata);
        });
        fleetdata.push(sidedata);
    }
    // 1:normal, 2:sub
    // attach it to the end, or it will break fleet sequence and loadID
    fleetdata.push(input_fleet_data.sub_ship ? 2 : 1);
    return fleetdata;
}

function stringifyReplacer(key, value) {
    if (typeof value === 'string') {
        if (value == "") {
            return 0;
        } else {
            let num = parseInt(value, 10);
            if (num) {
                return num;
            } else {
                return value;
            }
        }
    } else {
        return value;
    }
}

function generateURL() {
    let data = dumpID();
    let url = new URL("https://x94fujo6rpg.github.io/AzurLaneFleet/");
    let textbox = document.getElementById("url_box");
    url.searchParams.append("AFLD", data);
    url = url.href;
    if (url.length >= 2000) {
        textbox.value = "URL too long. You still can share it by use fleetdata below";
        throw Error("url too long");
    } else {
        textbox.value = url;
    }
}

async function loadDataByID() {
    let textbox = document.getElementById("fleetdata"),
        raw_data = textbox.value;
    if (raw_data[0] !== "[") raw_data = LZString.decompressFromEncodedURIComponent(raw_data);

    let [data, ver, hash] = raw_data.split("!"),
        ck = false;

    switch (parseFloat(ver)) {
        case 0.04:
            ck = CryptoJS.SHA3(data, { outputLength: 256 }).toString();
            if (ck !== hash) return loadError(ck);
            data = JSON.parse(data);
            if (!c_formation.sameAs(formation.v4)) buildFleet(formation.v4, true);
            break;

        case 0.05:
            ck = CryptoJS.MD5(data).toString();
            if (ck !== hash) return loadError(ck);
            data = JSON.parse(data);
            c_formation = extractFormation(data);
            buildFleet(c_formation, true);
            break;

        default:
            throw Error(`unknown version ${ver}`);
    }
    textbox.value = "";
    await parseID(data);
    disableInvalidMoveButton();

    function loadError(_ck_ = "") {
        message = `Error: Corrupted data!!! [${_ck_}] should be [${hash}]`;
        textbox.value = message;
        console.log(data);
        throw Error(message);
    }
}

function extractFormation(a_fleet_data = []) {
    if (!(a_fleet_data instanceof Array)) throw Error("Invalid data");
    let formation_data = [];
    a_fleet_data.forEach(fleet => { if (!isNaN(fleet[fleet.length - 1])) formation_data.push(fleet[fleet.length - 1]); });
    //console.log(`new formation: [${formation_data}]`);
    return formation_data;
}

function saveCookie(ckey, cvalue, expday = 365) {
    let time = new Date(),
        exp = new Date();
    exp.setTime(time.getTime() + (expday * 1000 * 60 * 60 * 24));
    document.cookie = `${ckey}=${cvalue};expires=${exp.toUTCString()};SameSite=Strict;`;
    //console.log(`${ckey}=${cvalue};`);
}

function getCookie() {
    let cookie = document.cookie,
        new_list = {},
        ignore = new Set(["expires", "SameSite",]);
    cookie = cookie.split(";").map(t => t.trim());
    cookie.forEach(data => {
        let [key, value] = data.split("=");
        if (!ignore.has(key)) new_list[key] = value;
    });
    return new_list;
}

async function parseID(data) {
    if (!data.length) throw Error("no data");
    //console.time(parseID.name);
    data.forEach((fleet, fleet_index) => {
        let last_item = fleet[fleet.length - 1],
            formation_data = (!isNaN(last_item)) ? last_item : false;
        fleet.forEach((side, side_index) => {
            // skip formation data
            if (side instanceof Array) {
                side.forEach((ship, ship_index) => {
                    let empty_ship = false;
                    ship.forEach((item, item_index) => {
                        // set as empty ship/equip
                        if (item === "" || item === 0) {
                            item = (item_index == 0) ? "000000" : "666666";
                        }
                        // skip empty ship
                        if (!empty_ship) {
                            let item_name = false;
                            if (!formation_data) {
                                // v4 no formation data
                                item_name = fleet_index < 4 ?
                                    `_${fleet_index}${side_index}${ship_index}${item_index}` : // normal fleet
                                    `_${fleet_index}2${ship_index}${item_index}`; // sub fleet
                            } else {
                                // v5+
                                // side { 0:front, 1:back, 2:sub }, formation { 1: normal, 2:sub }
                                item_name = formation_data == 1 ?
                                    `_${fleet_index}${side_index}${ship_index}${item_index}` : // normal fleet
                                    `_${fleet_index}2${ship_index}${item_index}`; // sub fleet
                            }
                            let ship_item = { name: item_name, id: item };
                            setCurrent(ship_item);
                            if (item_index === 0) {
                                setShipAndEquip(ship_item, false);
                            } else {
                                setEquip(ship_item, false);
                            }
                            if (item === "000000") empty_ship = true;
                        }
                    });
                });
            }
        });
    });
    saveCookie("fleet", dumpID()); // save data at end
    //console.timeEnd(parseID.name);
    return true;
}

function setRetro() {
    let btn = $("#filter_retro");
    btn.button("toggle");
    retrofit_only = btn.hasClass("active");
    shipDisplay();
}

function setCode(item) {
    $(item).button("toggle");
    let lan_list = ["tw", "cn", "en", "jp"];
    [lan_ship_nation, lan_ship_type].forEach(list => {
        list.forEach(o => {
            lan_list.forEach(language => {
                // code: USS
                // {en:"Eagle Union", en_code:"Eagle Union"} <=> {en:"USS", en_code:"Eagle Union"}
                let current = o[language];
                let code = o.code;
                o[language] = (current == code) ? o[`${language}_code`] : o.code;
            });
        });
    });
}

function setEqCode(item) {
    $(item).button("toggle");
    let lan_list = ["tw", "cn", "en", "jp"];
    [lan_eq_nation].forEach(list => {
        list.forEach(o => {
            lan_list.forEach(language => {
                let current = o[language];
                let code = o.code;
                o[language] = (current == code) ? o[`${language}_code`] : o.code;
            });
        });
    });
}

async function updateSetting(item) {
    $(item).button("toggle");
    let strlist = item.name.split("_"),
        type1 = strlist[0], // ship, equip
        type2 = strlist[1],
        value = parseInt(strlist[2], 10); //type int
    if (type1 == "ship") {
        if (type2 === "nation") {
            await updateFilter("nation", value, type2);
        } else if (type2 === "type") {
            switch (c_side) {
                case "0":
                    await updateFilter("front", value, type2);
                    break;
                case "1":
                    await updateFilter("back", value, type2);
                    break;
                case "2":
                    await updateFilter("sub", value, type2);
                    break;
                default:
                    throw Error(`unknown ship type ${type2}`);
            }
        } else if (type2 === "rarity") {
            await updateFilter("rarity", value, type2);
            item.style.color = item.style.color.length > 0 ? "" : "gold";
        }
        shipDisplay();
    } else if (type1 == "equip") {
        switch (type2) {
            case "nation":
                await updateFilter("eq_nation", value, type2);
                break;
            case "type":
                await updateFilter("eq_type", value, type2);
                break;
            case "rarity":
                await updateFilter("eq_rarity", value, type2);
                item.style.color = item.style.color.length > 0 ? "" : "gold";
                break;
            case "tier":
                await updateFilter("eq_tier", value, type2);
                break;
            default:
                throw Error(`unknown equip type ${type2}`);
        }
        equipDisplay();
    }
}

async function updateFilter(key, value, type) {
    let hasvalue = filter_setting[key].has(value),
        add_value = (_key, _value) => filter_setting[_key].add(_value),
        delete_value = (_key, _value) => filter_setting[_key].delete(_value),
        normal_value = (_key, _value) => hasvalue ? delete_value(_key, _value) : add_value(_key, _value);
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
    return true;
}

function shipDisplay() {
    let shiplist = document.querySelectorAll("#shiplist button");
    shiplist.forEach((item) => {
        if (item.id != "000000") {
            let id = parseInt(item.id, 10),
                nation = ship_data[id].nationality,
                type = ship_data[id].type,
                rarity = ship_data[id].rarity,
                retro = ship_data[id].retro,
                is_select = isShipSelect(nation, type, rarity, retro);
            item.style.display = is_select ? "" : "none";
            item.setAttribute("displayed", is_select ? true : false);
        }
    });
    if (!document.getElementById("allow_dup_btn").classList.contains("active")) hideShipInFleet();
    countShipDisplayed();
}

function countShipDisplayed() {
    document.querySelector("#ship_count").textContent =
        document.querySelectorAll("#shiplist button[displayed='true']").length;
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
    shipInFleet.forEach(id => {
        let ship = document.getElementById(id);
        ship.style.display = "none";
        ship.setAttribute("displayed", false);
    });
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
    let is_nation = false,
        is_type = false,
        is_rarity = false;
    // if ship is front/back/sub and ship type match current selected
    switch (c_side) {
        case "0": // front
            if (filter_setting.front.has(type) || filter_setting.front.size === 0) {
                is_type = true;
            } else if (filter_setting.front.has(0) && other_front.has(type)) {
                is_type = true;
            }
            break;
        case "1": // back
            if (filter_setting.back.has(type) || filter_setting.back.size === 0) {
                is_type = true;
            } else if (filter_setting.back.has(0) && other_back.has(type)) {
                is_type = true;
            }
            break;
        case "2": // sub
            if (filter_setting.sub.has(type) || filter_setting.sub.size === 0) {
                is_type = true;
            } else if (filter_setting.sub.has(0) && other_sub.has(type)) {
                is_type = true;
            }
            break;
        default:
            console.log("unknown type");
            break;
    }
    if (!is_type) return false;
    // if ship nation match current selected
    if (filter_setting.nation.has(nation) || filter_setting.nation.size === 0) {
        is_nation = true;
    } else if (filter_setting.nation.has(0) && other_nation.has(nation)) {
        is_nation = true;
    } else {
        return false;
    }
    // if ship rarity match current selected
    if (filter_setting.rarity.has(rarity) || filter_setting.rarity.size === 0) {
        is_rarity = true;
    } else {
        return false;
    }
    if ([is_nation, is_type, is_rarity].isAll()) {
        // hide/show retrofit ship
        return (retrofit_only && retro === 1) ? false : true;
    } else {
        return false;
    }
}

function isEquipSelect(nation, type, rarity, tier) {
    [nation, type, rarity, tier].forEach(num => parseInt(num));
    let is_nation = false,
        is_type = false,
        is_rarity = false,
        is_tier = false;
    if (filter_setting.eq_nation.has(nation) || filter_setting.eq_nation.size === 0) {
        is_nation = true;
    } else if (filter_setting.eq_nation.has(0) && eq_other_nation.has(nation)) {
        is_nation = true;
    } else {
        return false;
    }
    if (filter_setting.eq_type.has(type) || filter_setting.eq_type.size === 0) {
        is_type = true;
    } else {
        return false;
    }
    if (filter_setting.eq_rarity.has(rarity) || filter_setting.eq_rarity.size === 0) {
        is_rarity = true;
    } else {
        return false;
    }
    if (filter_setting.eq_tier.has(tier) || filter_setting.eq_tier.size === 0) {
        is_tier = true;
    } else {
        return false;
    }
    return true;
    /*
    if ([is_nation, is_type, is_rarity, is_tier].isAll()) {
        return true;
    } else {
        return false;
    }*/
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
                throw Error(`${setCurrent.name}: unknown type`);
        }
        // show & hide filter
        lan_ship_type.forEach((type) => type.display = use_set.has(type.id) ? true : ((type.id == 0) ? true : false));
        shipDisplay();
    } else {
        // equip
        let side = getSide(),
            // allowed equip type list
            equip_type_list = fleet_data[c_fleet][side][c_pos].item[c_item].property.type,
            // use current ship data
            use_set = new Set(equip_type_list);
        // show & hide filter
        lan_eq_type.forEach((item) => item.display = use_set.has(parseInt(item.id)) ? true : false);
        // auto set to default
        if (document.getElementById("always_reset_equip_filter").ariaPressed == "true") resetEquipFilter(true);
        equipDisplay();
    }
}

function setButtonStats(ele, turn_on = true) {
    if (turn_on) {
        if (!ele.classList.contains("active")) active();
    } else {
        if (ele.classList.contains("active")) deactiv();
    }
    function active() {
        ele.click();
        ele.classList.add("active");
        ele.ariaPressed = true;
    }
    function deactiv() {
        ele.click();
        ele.classList.remove("active");
        ele.ariaPressed = false;
    }
}

function autoUseDefault(ele) {
    $(ele).button("toggle");
    if (ele.classList.contains("active")) {
        resetEquipFilter(true);
    } else {
        resetEquipFilter(false);
    }
}

function resetEquipFilter(toDefault = false) {
    const default_rarity = new Set(toDefault ? [6, 5, 4] : []),
        default_tier = new Set(toDefault ? [0, 3] : []);
    document.querySelectorAll("#eq_tier button")
        .forEach(b => setButtonStats(b, default_tier.has(parseInt(b.value, 10)) ? true : false));
    document.querySelectorAll("#eq_rarity button")
        .forEach(b => setButtonStats(b, default_rarity.has(parseInt(b.value, 10)) ? true : false));
    document.querySelectorAll("#eq_nation button,#eq_type button")
        .forEach(b => setButtonStats(b, false));
    filter_setting.eq_type = new Set();
    filter_setting.eq_nation = new Set();
    filter_setting.eq_rarity = default_rarity;
    filter_setting.eq_tier = default_tier;
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
            att(frame, "src", "ame_3", "ame_4");
            prop(itemInList, "bg", "3.", "4.");
            prop(itemInList, "frame", "ame_3", "ame_4");
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
        att(frame, "src", "ame_4", "ame_3");
        prop(itemInList, "bg", "4.", "3.");
        prop(itemInList, "frame", "ame_4", "ame_3");
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

async function equipDisplay() {
    let side = getSide(),
        itemInApp = fleet_data[c_fleet][side][c_pos].item[c_item].property,
        typelist = itemInApp.type,
        equips = document.querySelectorAll("#equiplist button"),
        ship = fleet_data[c_fleet][side][c_pos].item[0].property,
        shiptype = ship.type,
        shipid = ship.id,
        display_list = [];
    equipCheck(shipid);
    equips.forEach((item) => {
        if (item.id != "666666") {
            let id = parseInt(item.id, 10),
                e = equip_data[id],
                type = e.type,
                forbidden = e.ship_type_forbidden;
            if (typelist.includes(type)) {
                if (forbidden.includes(shiptype)) {
                    item.style.display = "none";
                } else {
                    if (isEquipSelect(e.nationality, type, e.rarity, e.tech)) {
                        item.style.display = "";
                        display_list.push(id);
                    } else {
                        item.style.display = "none";
                    }
                }
            } else {
                item.style.display = "none";
            }
            item.setAttribute("displayed", item.style.display == "" ? true : false);
        }
    });
    await limitEquip(display_list);
    countEquipDisplayed();
}

function countEquipDisplayed() {
    document.querySelector("#equip_count").textContent =
        document.querySelectorAll("#equiplist button[displayed='true']").length;
}

async function limitEquip(display_list) {
    let side = getSide();
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
            let item = document.getElementById(id);
            item.style.display = "none";
            item.setAttribute("displayed", false);
        }
    });
    return true;
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
    document.querySelectorAll("[ui_text='true']").forEach(ui_ele => {
        if (ui_ele.tagName == "INPUT") {
            ui_ele.placeholder = ui_ele.getAttribute(`ui_${key}`);
        } else {
            ui_ele.textContent = ui_ele.getAttribute(`ui_${key}`);
        }
    });
    saveCookie("lan", key);
    adjustEle();
}

function setEquip(item, save = true) {
    let side = getSide();
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
            throw Error(`${getSide.name}: unknown side type`);
    }
}

function setShipAndEquip(item, save = true) {
    let side = getSide();
    //console.log(`${setShipAndEquip.name}: ${item.id} ${typeof item.id}`);
    let shipInApp = fleet_data[c_fleet][side][c_pos];
    let shipInList = sorted_ship_data.find((ele) => {
        if (ele.id === `${item.id}` || ele.id === item.id) return Object.assign({}, ele);
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

function copyURL() {
    let text = document.querySelector("#url_box");
    text.select();
    text.setSelectionRange(0, 99999);
    document.execCommand("copy");
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
    await createSortShipList();
    await createSortEquipList();
    // ------------------------------
    if (indexedDB || window.idb) {
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
        await loadImgCache(AFDB);
    } else {
        let pos = document.querySelector("#loading_box"),
            message = document.createElement("div");
        message.textContent = "not support indexedDB";
        message.className = "row text-center text-monospace";
        pos.appendChild(message);
        console.log("not support indexedDB");
        return;
    }
    // ------------------------------
    await createAllShip();
    await createAllEquip();
    addLanguageToEle();
    add_search_event();
    splitButtonGroup("shipnation");
    splitButtonGroup("eq_nation");
    //splitButtonGroup("eq_type", 6, filter_btn_class.replace("line-5-item", "line-6-item"));
    addWindowSizeEvent();
    await loadCookie();
    await loadStorage();
    document.querySelector("#loading_box").style.display = "none";
    document.querySelector("#app_area").style.display = "";
    disableInvalidMoveButton();
    console.timeEnd(initial.name);
    setTimeout(() => window.initial = undefined);
    //------------------------------
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
        return true;
    }

    //------------------------------
    async function createSortShipList() {
        console.time(createSortShipList.name);
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
        console.timeEnd(createSortShipList.name);
        return true;
    }

    async function createSortEquipList() {
        console.time(createSortEquipList.name);
        let newlist = [];
        let pos = 0;
        let parseData = {
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
        console.timeEnd(createSortEquipList.name);
        return true;
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

    async function createAllShip() {
        console.time(createAllShip.name);
        let promise_list = [];
        await addProgressBar("create_ship", "Generate Ships", sorted_ship_data.length, _loading_.ship);
        sorted_ship_data.forEach(ship =>
            promise_list.push(createNewItem(ship, "shiplist", setShipAndEquip, _loading_.ship))
        );
        await Promise.all(promise_list);
        console.timeEnd(createAllShip.name);
        return true;
    }

    async function createAllEquip() {
        console.time(createAllEquip.name);
        let promise_list = [];
        await addProgressBar("create_equip", "Generate Equips", sorted_equip_data.length, _loading_.equip);
        sorted_equip_data.forEach(equip =>
            promise_list.push(createNewItem(equip, "equiplist", setEquip, _loading_.equip))
        );
        await Promise.all(promise_list);
        console.timeEnd(createAllEquip.name);
        return true;
    }

    //------------------------------
    function srcToCacheID(src = "", type = "ship", reg = "") {
        return `${type == "ship" ? "shipicon" : "equips"}_${src.replace(reg, "$1")}`;
    }

    async function imgToDataURL() {
        let name = "imgToDataURL";
        console.time(name);
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
        console.timeEnd(name);
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

    async function loadImgCache(AFDB) {
        let name = "loadImgCache";
        console.time(name);
        let reg = /.*(?:equips|shipicon)\/([^\.]+).*/;
        let promise_list = [];
        let max = sorted_ship_data.length + sorted_equip_data.length - 2;
        let p = _loading_.load_cache;
        await addProgressBar("load_cache", "Loading Cache", max, p);
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
        console.log(`set ${promise_list.length} src to image cache`);
        console.timeEnd(name);
        return true;
    }

    async function saveCacheData(db, db_name, cacheData) {
        const tx = db.transaction(db_name, "readwrite");
        const promise_list = cacheData.map(obj => { return tx.store.add(obj); });
        await Promise.all([...promise_list, tx.done]);
    }

    //------------------------------
    async function loadCookie() {
        let clist = getCookie();
        if (clist.lan) {
            let button = document.getElementById(clist.lan);
            button.click();
        } else {
            setlang({ id: "en" });
            saveCookie("lan", lan);
        }

        let url = new URL(window.location.href),
            data = url.searchParams.get("AFLD"),
            textbox = document.querySelector("#fleetdata");

        if (data) {
            textbox.value = data;
            loadDataByID();
        } else {
            if (clist.fleet) {
                textbox.value = clist.fleet;
                loadDataByID();
            } else {
                saveCookie("fleet", dumpID());
            }
        }

        if (clist.allow_dup == 1) {
            allow_dup();
        }

        if (clist.thick_frame == 1) {
            let ele = document.getElementById("frame_setting");
            setTimeout(() => frameSize(ele), 0);
        }

        if (clist.layout) {
            let layout_switch = document.querySelector("#layout_setting");
            layout_switch.textContent = clist.layout;
            switchLayout(layout_switch, true);
        }

        return true;
    }

    async function loadStorage() {
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
        classManager(msg, "exchange", msg_color.red, msg_color.green);
        msg.textContent = `load ${fleet_in_storage.length} fleet`;
        console.log(msg.textContent);
        return true;
    }
}

function getPos(ele) {
    let pos = ele.getAttribute("pos");
    return parseInt(pos[pos.length - 1], 10) - 1;
}

function moveFleet(ele) {
    let pos = getPos(ele),
        direction = parseInt(ele.getAttribute("data"), 10),
        current_fleet_dump = dumpID(true),
        temp = [],
        msg = fleet_info.msg();
    //console.log("before", JSON.stringify(current_fleet_dump, stringifyReplacer));
    if (direction < 0) {
        if (pos - 1 < 0) {
            classManager(msg, "exchange", msg_color.green, msg_color.red);
            msg.textContent = "yes";
            throw Error("can't move over 0");
        }
    } else {
        if (pos + 1 > fleet_data.length - 1) {
            classManager(msg, "exchange", msg_color.green, msg_color.red);
            msg.textContent = "yes";
            throw Error("can't move under 1");
        }
    }
    direction = direction < 0 ? pos - 1 : pos + 1;
    temp = current_fleet_dump.splice(pos, 1).flat();
    current_fleet_dump.splice(direction, 0, temp);
    current_fleet_dump = JSON.stringify(current_fleet_dump, stringifyReplacer);
    //console.log("after", current_fleet_dump);
    updateFleetDataBox(current_fleet_dump);
    loadDataByID();
    disableInvalidMoveButton();
}

function disableInvalidMoveButton() {
    let all = document.querySelectorAll(`[onclick^="moveFleet"],[onclick^="deleteFleet"]`),
        f1_move_top = document.querySelector(`[pos="Fleet_1"][onclick^="moveFleet"][data="-1"]`),
        bottom_under = document.querySelector(`[pos="Fleet_${fleet_data.length}"][onclick^="moveFleet"][data="1"]`);
    if (all.length) all.forEach(b => b.removeAttribute("disabled"));
    if (f1_move_top) f1_move_top.setAttribute("disabled", true);
    if (bottom_under) bottom_under.setAttribute("disabled", true);
    //console.log(f1_move_top);
    //console.log(bottom_under);
    if (fleet_data.length === 1 && all.length) {
        all.forEach(b => b.setAttribute("disabled", true));
    }
}

function deleteFleet(ele) {
    let del_pos = getPos(ele),
        current_fleet_dump = dumpID(true),
        new_fleet = [],
        msg = fleet_info.msg();
    current_fleet_dump.forEach((fleet, index) => { if (index != del_pos) new_fleet.push(fleet); });
    if (!new_fleet.length) {
        classManager(msg, "exchange", msg_color.green, msg_color.red);
        msg.textContent = "yes";
        throw Error("you can't delete the last fleet");
    }
    new_fleet = JSON.stringify(new_fleet, stringifyReplacer);
    updateFleetDataBox(new_fleet);
    loadDataByID();
}

function insertFleet(ele) {
    let data = ele.getAttribute("data").split(",").map(t => parseInt(t, 10));
    let formation = data[0],
        insert_position = getPos(ele),
        direction = data[1];
    if (insert_position < 0) throw Error("position must be positive");
    if (![0, 1].includes(direction)) throw Error(`unknown direction`);
    let current_fleet_dump = dumpID(true),
        new_insert_fleet = {},
        new_fleet = [];
    switch (formation) {
        case 1:
            new_insert_fleet = newNormalFleet(0, creatEmptyShip());
            break;
        case 2:
            new_insert_fleet = newSubFleet(0, creatEmptyShip());
            break;
        default:
            throw Error(`unknown formation`);
    }
    //console.log(new_insert_fleet);
    new_insert_fleet = dumpFleet(new_insert_fleet);
    //console.log(`old fleet: ${JSON.stringify(current_fleet_dump, stringifyReplacer)}`);
    current_fleet_dump.forEach((fleet, index) => {
        if (direction == 0 && insert_position == index) new_fleet.push(new_insert_fleet);
        new_fleet.push(fleet);
        if (direction == 1 && insert_position == index) new_fleet.push(new_insert_fleet);
    });
    new_fleet = JSON.stringify(new_fleet, stringifyReplacer);
    //console.log(`new fleet: ${new_fleet}`);
    updateFleetDataBox(new_fleet);
    loadDataByID();
}

function buildFleet(formation_data = [], update = false) {
    //console.time(buildFleet.name);
    if (!formation_data.length) throw Error("formation data is empty!!");
    //-------------------------------
    /*  
        ship [0,1,2,3,4,5] 0 = ship, ...equip
        item id _0123 => fleet=0 side=1 pos=2 item=3
        pos
        0 => 2 (1) | 0 => 3 (2)
        1 => 1 (0) | 1 => 2 (1)
        2 => 3 (2) | 2 => 1 (0)
    */
    let empty_ship = creatEmptyShip(),
        newfleet = [];

    //console.log(`build form formation: [${formation_data}]`);
    formation_data.forEach((formation, fleet_id) => {
        switch (formation) {
            case 1:
                newfleet.push(newNormalFleet(fleet_id, empty_ship));
                break;
            case 2:
                newfleet.push(newSubFleet(fleet_id, empty_ship));
                break;
            default:
                throw Error(`unknown formation`);
        }
    });

    //console.timeEnd(buildFleet.name);
    //console.log(newfleet);
    c_formation = formation_data;
    if (!update) {
        return newfleet;
    } else {
        ALF.fleets = fleet_data = newfleet;
    }
}

function creatEmptyShip() {
    let new_empty_ship = [];
    for (let i = 0; i < 6; i++) {
        let item = [];
        if (i === 0) {
            let ship = {
                id: "", type: "", star: "", rarity: "",
                tw: "", en: "", cn: "", jp: "",
                icon: "ui/empty.png", bg: "", frame: "",
                target: "#shipselect",
                base: [],
                quantity: "",
            };
            item = ship;
        } else {
            let eq = {
                id: "", type: [], star: "", rarity: "",
                tw: "", en: "", cn: "", jp: "",
                icon: "ui/icon_back.png", bg: "", frame: "",
                target: "",
                fb: [],
                type_tw: "", type_cn: "", type_en: "", type_jp: "",
                limit: "",
                quantity: "",
            };
            item = eq;
        }
        new_empty_ship.push({ id: i, property: [], });
        new_empty_ship[i].property = Object.assign({}, item);
    }
    return new_empty_ship;
}

function newNormalFleet(fleet_id, empty_ship) {
    if (isNaN(fleet_id) || fleet_id < 0) throw Error("no fleet_id");
    let front = [], back = [];
    for (let ship_pos = 0; ship_pos < 6; ship_pos++) {
        let new_ship = [];
        if (ship_pos < 3) {
            for (let item_index in empty_ship) {
                let new_item_id = `_${fleet_id}0${ship_pos}${item_index}`,
                    new_prop = Object.assign({}, empty_ship[item_index].property);
                new_prop.pos = "front";
                if (item_index == 0) new_prop.ship_pos = pos_table.front[ship_pos];
                new_ship.push({ id: new_item_id, property: new_prop, });
            }
            front.push({ id: `fleet_${fleet_id}_front_ship${ship_pos}`, item: new_ship, });
        } else {
            for (let item_index in empty_ship) {
                let new_item_id = `_${fleet_id}1${ship_pos - 3}${item_index}`,
                    new_prop = Object.assign({}, empty_ship[item_index].property);
                new_ship.push({ id: new_item_id, property: new_prop, });
                new_prop.pos = "back";
                if (item_index == 0) new_prop.ship_pos = pos_table.back_sub[ship_pos - 3];
            }
            back.push({ id: `fleet_${fleet_id}_back_ship${ship_pos - 3}`, item: new_ship, });
        }
    }
    return { id: `Fleet_${fleet_id + 1}`, front_ship: front, back_ship: back, };
}

function newSubFleet(fleet_id, empty_ship) {
    if (isNaN(fleet_id) || fleet_id < 0) throw Error("no fleet_id");
    let sub = [];
    for (let ship_pos = 0; ship_pos < 3; ship_pos++) {
        let new_ship = [];
        for (let item_index in empty_ship) {
            let new_item_id = `_${fleet_id}2${ship_pos}${item_index}`,
                new_item_prop = Object.assign({}, empty_ship[item_index].property);
            new_item_prop.pos = "sub";
            new_ship.push({ id: new_item_id, property: new_item_prop, });
            if (item_index == 0) new_item_prop.ship_pos = pos_table.back_sub[ship_pos];
        }
        sub.push({ id: `fleet_${fleet_id}_sub_ship${ship_pos}`, item: new_ship, });
    }
    return { id: `Fleet_${fleet_id + 1}`, sub_ship: sub, };
}

function buildShipSelectOption() {
    console.time(buildShipSelectOption.name);
    let lan_list = ["tw", "cn", "en", "jp"];

    lan_ship_nation.forEach((item) => {
        item.name = `ship_nation_${item.id}`;
        item.tw = item.cn;
        lan_list.forEach(language => item[`${language}_code`] = item[language]);
    });

    lan_ship_type.forEach((item) => {
        item.name = `ship_type_${item.id}`;
        item.display = false;
        item.tw = item.cn;
        lan_list.forEach(language => item[`${language}_code`] = item[language]);
    });

    lan_ship_rarity.forEach((item) => {
        item.name = `ship_rarity_${item.id}`;
        //item.tw = item.cn;
        //lan_list.forEach(language => item[`${language}_code`] = item[language]);
        lan_list.forEach(language => item[language] = item.code);
    });
    console.timeEnd(buildShipSelectOption.name);
    setTimeout(() => window.buildShipSelectOption = undefined);
}

function buildEquipSelectOption() {
    console.time(buildEquipSelectOption.name);
    let lan_list = ["tw", "cn", "en", "jp"];

    lan_eq_nation.forEach(item => {
        item.name = `equip_nation_${item.id}`;
    });

    lan_eq_type.forEach(item => {
        item.name = `equip_type_${item.id}`;
        item.display = false;
    });

    lan_eq_rarity.forEach(item => {
        item.name = `equip_rarity_${item.id}`;
        lan_list.forEach(language => item[language] = item.en);
    });

    lan_eq_tier.forEach(item => {
        item.name = `equip_tier_${item.id}`;
        lan_list.forEach(language => item[language] = `${item.id}`);
    });

    console.timeEnd(buildEquipSelectOption.name);
    setTimeout(() => window.buildEquipSelectOption = undefined);
}

function addLanguageToEle() {
    let lan_list = ["en", "jp", "tw"];
    lan_target_list.forEach(o => {
        let eles = document.querySelectorAll(`#${o.id},[ui_id=${o.id}]`);
        if (eles.length > 0) {
            eles.forEach(e => {
                e.setAttribute("ui_text", "true");
                e.setAttribute("ui_cn", o.tw);
                lan_list.forEach(key => e.setAttribute(`ui_${key}`, o[key]));
            });
        } else {
            console.log(`id[${o.id}] not found`);
        }
    });
}

function splitButtonGroup(target_id = "", max_per_line = 5, alt_class = "") {
    if (max_per_line != 5 && alt_class.length == 0) throw Error("max != 5, but no alt_class.");
    let pos = document.getElementById(target_id);
    let buttons = pos.querySelectorAll("button");
    if (buttons.length <= 5) return;
    let new_line = false;
    let line_count = 0;
    buttons.forEach((btn, index) => {
        if (index % max_per_line == 0) {
            new_line = document.createElement("div");
            new_line.className = "btn-group d-flex flex-wrap ml-1" + (line_count > 0 ? " mt-1" : "");
            pos.appendChild(new_line);
            line_count++;
        }
        if (max_per_line != 5) btn.className = alt_class;
        if (new_line) new_line.appendChild(btn);
    });
    pos.className = "";
}

function addWindowSizeEvent() {
    window.addEventListener('resize', adjustEle);
    if ($(window).width() < 1300) adjustEle();
}

function adjustEle() {
    let width = $(window).width();
    let safe_size = 1300;
    let no_effect_class = "adjustEle_placeholder";
    let target_list = [{
        ele: document.getElementById("option_box_1"), mode: "exchange",
        normal_class: "w-25",
        small_class: "w-50",
    }, {
        ele: document.getElementById("fleet_storage"), mode: "exchange",
        normal_class: "w-50",
        small_class: "w-100",
    }, {
        ele: document.getElementById("dialog_shipselect"), mode: "batch_exchange",
        normal_class: no_effect_class.split(" "),
        small_class: "mw-100".split(" "),
    }, {
        ele: document.getElementById("dialog_select_equip"), mode: "batch_exchange",
        normal_class: no_effect_class.split(" "),
        small_class: "mw-100".split(" "),
    }, {
        ele: document.getElementById("search_box"), mode: "exchange",
        normal_class: "d-flex",
        small_class: "flex-wrap",
    }];
    // code button
    //let btn = document.getElementById("use_code");
    //let btnIsOn = btn.classList.contains("active");
    if (width < safe_size) {
        // force enable code mode
        /*
        if (lan == "en") {
            if (!btnIsOn) {
                btn.click();
                btn.classList.add("active");
                btn.setAttribute("aria-pressed", true);
            }
            if (!btn.disabled) btn.disabled = true;
        } else {
            if (btn.disabled) btn.disabled = false;
        }
        */
        target_list.forEach(t => classManager(t.ele, t.mode, t.normal_class, t.small_class));
    } else {
        // safe size
        // if (btn.disabled) btn.disabled = false;
        target_list.forEach(t => classManager(t.ele, t.mode, t.small_class, t.normal_class));
    }
}

function classManager(ele = "", mode = "", class_1 = "", class_2 = "") {
    switch (mode) {
        case "exchange":
            if (ele.classList.contains(class_1)) ele.classList.remove(class_1);
            ele.classList.add(class_2);
            break;
        case "batch_exchange":
            if ((class_1 && class_2) instanceof Array && (class_1 && class_2).length > 0) {
                class_1.forEach(c => ele.classList.remove(c));
                class_2.forEach(c => ele.classList.add(c));
            }
            break;
    }
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
            throw Error(`unknown action: ${mode}`);
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
            throw Error(`unknown action: ${mode}`);
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
    let ele = fleet_info.name();
    let name = ele.value.trim();
    let name_enc = encodeURIComponent(name);
    let msg = fleet_info.msg();
    if (!name || name.length == 0) {
        classManager(msg, "exchange", msg_color.green, msg_color.red);
        msg.textContent = "error: no fleet name";
        return;
    } else {
        let data = dumpID();
        fleet_in_storage.push({ name: name_enc, fleet: data });
        saveStorage();
        classManager(msg, "exchange", msg_color.red, msg_color.green);
        msg.textContent = `add fleet: ${name}`;
        ele.value = ""; // clear after save
    }
}

function load_fleet() {
    let msg = fleet_info.msg();
    let fleet_id = fleet_info.select().getAttribute("sotrge_id");
    if (!fleet_id || isNaN(fleet_id)) {
        classManager(msg, "exchange", msg_color.green, msg_color.red);
        msg.textContent = "error: invalid fleet id";
        return;
    }

    let data = fleet_in_storage[fleet_id];
    if (!data) {
        classManager(msg, "exchange", msg_color.green, msg_color.red);
        msg.textContent = "error: no fleet data";
        return;
    }

    let name = decodeURIComponent(data.name);
    classManager(msg, "exchange", msg_color.red, msg_color.green);
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
        classManager(msg, "exchange", msg_color.green, msg_color.red);
        msg.textContent = "error: invalid fleet id";
        return;
    }

    let data = fleet_in_storage[fleet_id];
    if (!data) {
        classManager(msg, "exchange", msg_color.green, msg_color.red);
        msg.textContent = "error: no fleet data";
        return;
    }

    let name = decodeURIComponent(data.name);
    classManager(msg, "exchange", msg_color.red, msg_color.green);
    msg.textContent = `remove fleet: ${fleet_id}_[${name}]`;
    clear_select();
    fleet_in_storage.splice(fleet_id, 1);
    saveStorage();
}

function frameSize(ele) {
    $(ele).button("toggle");
    let thicc = ele.ariaPressed ? true : false,
        location = window.location.href,
        reg = /b+\.png/, done = 0, fail = 0;
    [sorted_equip_data, sorted_ship_data].forEach(list => {
        list.forEach(item => {
            if (item.frame != "") item.frame = replaceSrc(item.frame);
        });
    });
    document.querySelectorAll("img.frame").forEach(item => {
        if (item.currentSrc != "") item.src = replaceSrc(item.currentSrc);
    });
    console.log(`[${frameSize.name}] done: ${done}, failed: ${fail}`);
    saveCookie("thick_frame", thicc ? 1 : 0);
    function replaceSrc(src = "") {
        if (src != location) {
            done++;
            if (thicc) {
                if (src.match(reg)) {
                    return src.replace(reg, ".png");
                } else {
                    return src.replace(".png", "b.png");
                }
            } else {
                return src.replace(reg, ".png");
            }
        } else {
            fail++;
        }
    }
}

function switchLayout(ele, same = false) {
    const layout_list = {
        h: "Horizontal",
        v: "Vertical 1",
        v2: "Vertical 2",
    };
    //for (let key in layout_list) layout_list[key] = `Layout: ${layout_list[key]}`;
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
        case layout_list.v:
            if (same) {
                changeClass("v");
                ele.textContent = layout_list.v;
            } else {
                changeClass("v2");
                ele.textContent = layout_list.v2;
            }
            break;
        case layout_list.v2:
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
        let class_list = [{
            target: "app_box",
            h: "container mw-100",
            v: "row justify-content-center py-1 px-5 m-0",
            v2: "d-table justify-content-center m-auto"
        }, {
            target: "fleet_box_o",
            h: "d-grid justify-content-center",
            v: "d-grid border border-secondary",
            v2: "flex-row border border-secondary"
        }, {
            target: "fleet_box_i",
            h: "row m-2 border border-secondary py-2",
            v: "col m-2",
            v2: "col m-2"
        },];
        class_list.forEach(o => {
            document.querySelectorAll(`.${o.target}`).forEach(e => {
                e.className = `${o[key]} ${o.target}`;
            });
        });
    }
}

function allow_dup() {
    let btn = $("#allow_dup_btn");
    btn.button("toggle");
    saveCookie("allow_dup", btn.hasClass("active") ? "1" : "0");
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
        async getImgCache(id = "") { return (await db).get(db_name, id); },
        async setImgCache(id = "", data_url = "") { return (await db).put(db_name, data_url, id); },
        async clear() { return (await db).clear(db_name); },
        async allKeys() { return (await db).getAllKeys(db_name); }
    };
    //console.log(AFDB);
    return [db, AFDB];
}

async function emptyCache() {
    const [db, AFDB] = await initialDB(db_name, db_ver);
    await AFDB.clear();
    window.location.reload();
}
