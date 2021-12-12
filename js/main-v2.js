/* jshint esversion: 9 */
/* 
↑ just to keep jshint happy

everything is temporarily, unless it work...

if you want to keep obj format in this way
I use the default formatter of vscode, its formatting is less aggressive than other expansion
*/
//----------------------------------------------------------
const
    lan_target_list = [
        // for ui element that have no language.
        // do not change id, unless you know what you are doing.
        { id: "show_setting", en: "⮟ Settings", jp: "⮟ 設定", tw: "⮟ 設定", },
        { id: "allow_dup_btn", en: "Allow Duplicate", jp: "重複を許可する", tw: "允許重複的船", },
        { id: "display_fleet_border", en: "Fleet Border", jp: "フレーム表示", tw: "顯示外框" },
        { id: "display_fleet_op", en: "Fleet ID / Edit Button", jp: "編集ボタン表示", tw: "顯示編輯" },
        { id: "frame_setting", en: "Thick frame", jp: "厚いフレーム", tw: "粗框" },

        { id: "add_fleet", en: "Save Current", jp: "現在の艦隊をセーブ", tw: "儲存目前艦隊", },
        { id: "select_fleet", en: "Select Fleet", jp: "艦隊を選択", tw: "選擇艦隊", },
        { id: "load_fleet", en: "Load Fleet", jp: "ロード", tw: "載入艦隊", },
        { id: "remove_fleet", en: "Delete", jp: "削除", tw: "刪除", },
        { id: "fleet_name_label", en: "Fleet Name", jp: "艦隊名", tw: "艦隊名", },

        { id: "emptyfleet", en: "Empty Current Fleet", jp: "現在の艦隊を空に", tw: "清空目前艦隊", },

        { id: "fleetdata_text", en: "Fleet data", jp: "艦隊データ", tw: "艦隊資料", },
        { id: "dumpdata", en: "Dump", jp: "ダンプ", tw: "匯出", },
        { id: "copyData", en: "Copy", jp: "コピー", tw: "複製", },
        { id: "emptyData", en: "Clear", jp: "クリア", tw: "清空", },
        { id: "loadDataByID", en: "Load", jp: "ロード", tw: "載入", },

        { id: "owned_data_title", en: "⮟ Owned Ship/Equip Data", jp: "⮟ 所持して艦船/装備データ", tw: "⮟ 已有的船/裝備資料", },
        { id: "dumpOwned", en: "Dump", jp: "ダンプ", tw: "匯出", },
        { id: "copyOwned", en: "Copy", jp: "コピー", tw: "複製", },
        { id: "emptyOwned", en: "Clear", jp: "クリア", tw: "清空", },
        { id: "loadOwned", en: "Load", jp: "ロード", tw: "載入", },
        { id: "saveOwned", en: "Save", jp: "セーブ", tw: "儲存", },
        { id: "loadOwnedSetting", en: "Reload Setting", jp: "設定再読み込み", tw: "重新讀取設定", },

        { id: "rebuild_cache_btn", en: "Rebuild Cache", jp: "キャッシュをクリア&再構築", tw: "重建快取", },

        { id: "show_ship_filter", en: "⮟ Show Filter", jp: "⮟ フィルター", tw: "⮟ 顯示過濾器", },
        { id: "show_equip_filter", en: "⮟ Show Filter", jp: "⮟ フィルター", tw: "⮟ 顯示過濾器", },
        { id: "owned_ship_set", en: "Set Owned Ship", jp: "所持している艦船を設定", tw: "設定已有的船", },
        { id: "owned_ship_only", en: "Only Show Owned", jp: "所持しているだけを表示", tw: "只顯示已有的船", },
        { id: "owned_equip_set", en: "Set Owned Equip", jp: "所持している装備を設定", tw: "設定已有的裝備", },
        { id: "owned_equip_only", en: "Only Show Owned", jp: "所持しているだけを表示", tw: "只顯示已有的裝備", },

        { id: "item_level_ship", en: "Level", jp: "レベル", tw: "等級", },
        { id: "item_level_equip", en: "Enhance Level", jp: "強化レベル", tw: "強化等級", },
        { id: "ship_level_set", en: "Set Level", jp: "レベル設定", tw: "設定等級", },
        { id: "equip_level_set", en: "Set Level", jp: "強化レベル設定", tw: "設定強化等級", },

        { id: "select_ship", en: "Select Ship", jp: "艦船を選択", tw: "選擇艦船", },
        { id: "select_equip", en: "Select Equip", jp: "装備を選択", tw: "選擇裝備", },
        { id: "filter_nation", en: "Nation", jp: "陣営", tw: "國家", },
        { id: "filter_type", en: "Type", jp: "種類", tw: "種類", },
        { id: "filter_rarity", en: "Rarity", jp: "レア度", tw: "稀有度", },

        { id: "sort", en: "Sorting", jp: "並べ替え", tw: "排序", },
        { id: "sort_nation", en: "Nation", jp: "陣営", tw: "國家", },
        { id: "sort_type", en: "Type", jp: "種類", tw: "種類", },
        { id: "sort_rarity", en: "Rarity", jp: "レア度", tw: "稀有度", },
        { id: "sort_default", en: "Default", jp: "初期設定", tw: "預設", },
        { id: "sort_retro", en: "Retrofit", jp: "改造", tw: "改造", },
        { id: "sort_jp", en: "Name(JP)", jp: "名前(JP)", tw: "名稱(JP)", },
        { id: "sort_en", en: "Name(EN)", jp: "名前(EN)", tw: "名稱(EN)", },
        { id: "sort_tw", en: "Name(TW)", jp: "名前(TW)", tw: "名稱(TW)", },
        { id: "sort_cn", en: "Name(CN)", jp: "名前(CN)", tw: "名稱(CN)", },

        { id: "search_input", en: "Search", jp: "検索", tw: "搜尋", },
        { id: "filter_search_result", en: "Result", jp: "結果", tw: "結果", },
        { id: "filter_retro", en: "Retrofitted Only", jp: "改造された艦船だけ", tw: "只顯示改造後的", },
    ],
    vue_ui_text = {
        sub_fleet: { en: "Sub", jp: "潜水", tw: "潛艇", cn: "潛艇" },
        normal_fleet: { en: "Normal", jp: "通常", tw: "一般", cn: "一般" },
        copy_fleet: { en: "FleetCopy", jp: "艦隊コピー", tw: "艦隊複製", cn: "艦隊複製", },
        copy_ship: { en: "ShipCopy", jp: "艦船コピー", tw: "艦船複製", cn: "艦船複製", },
        swap_ship: { en: "Swap", jp: "交換", tw: "交換", cn: "交換", },
    },
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
        { id: 100, cn: "連動", en: "Collab", jp: "コラボ", code: "Collab" },
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
        { id: 7, cn: "航母", en: "Aircraft Carrier", jp: "空母", code: "CV", pos: "back" },
        { id: 13, cn: "重砲", en: "Monitor", jp: "砲艦", code: "BM", pos: "back" },
        { id: 12, cn: "維修", en: "Repair Ship", jp: "工作", code: "AR", pos: "back" },
        { id: 0, cn: "其他", en: "Other", jp: "その他", code: "Other" },
    ],
    lan_ship_rarity = [
        { id: 6, cn: "海上傳奇", en: "Ultra Rare", jp: "UR", code: "★★★★★★" },
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

const
    settingKey = {
        language: "language",
        fleetData: "fleetData",
        allowDup: "allowDup",
        thickFrame: "thickFrame",
        layout: "layout",
        fleetEdit: "fleetEdit",
        fleetBorder: "fleetBorder",
        ownedItem: "ownedItem",
    },
    util = {
        sleep(ms = 0) {
            return new Promise(resolve => setTimeout(resolve, ms));
        },
        indexInObj(obj, getvalue = false) {
            let new_list = [];
            if (getvalue) {
                for (let index in obj) new_list.push(index, obj[index]);
            } else {
                for (let index in obj) new_list.push(index);
            }
            return new_list;
        },
        sorting(arr, key, descen) {
            if (descen) {
                arr.sort((a, b) => { return naturalSort(b[key], a[key]); });
            } else {
                arr.sort((a, b) => { return naturalSort(a[key], b[key]); });
            }
            function naturalSort(a, b) {
                return String(a).localeCompare(String(b), navigator.languages[0] || navigator.language, { numeric: true });
            }
            return arr;
        },
        stringifyReplacer(key, value) {
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
        },
        changeButtonStats(ele, turn_on = true) {
            if (turn_on) {
                if (!ele.classList.contains("active")) active();
            } else {
                if (ele.classList.contains("active")) deactiv();
            }
            function active() {
                ele.click();
                ele.classList.add("active");
                ele.setAttribute("aria-pressed", true);
            }
            function deactiv() {
                ele.click();
                ele.classList.remove("active");
                ele.setAttribute("aria-pressed", false);
            }
        },
    },
    //localStorage
    LS = {
        userSetting: {
            prefix: "user_setting_",
            set(key, value) {
                if (key.match(/fleet_index_/)) throw Error("Invalid Key");
                AFL_storage.setItem(`${this.prefix}${key}`, value);
                console.log(`save key:[${key}], value:[${value}]`);
            },
            get(key) {
                return AFL_storage.getItem(`${this.prefix}${key}`);
            },
            del(key) {
                return AFL_storage.removeItem(`${this.prefix}${key}`);
            }
        },
        fleetManager: {
            fleetLength() {
                let num = this.getData("num_of_fleet");
                return num ? num : 0;
            },
            storageFleetData(fleet_data = []) {
                let length = fleet_data.length;
                if (!(fleet_data instanceof Array)) throw Error("fleet data is not Array");
                if (!length) throw Error("no fleet data");
                for (let i = 1; i <= length; i++) {
                    this.setData(`fleet_index_${i}`, fleet_data[i - 1]);
                }
                this.setData("num_of_fleet", length);
                console.log(`storage ${length} fleet data`);
                return true;
            },
            clearFleetData() {
                let eof_fleet = this.fleetLength();
                for (let i = 1; i <= eof_fleet; i++) {
                    this.remove(`fleet_index_${i}`);
                }
                this.remove("num_of_fleet");
                console.log(`remove ${eof_fleet} old fleet data`);
                return true;
            },
            getData(key) {
                let data = AFL_storage.getItem(key);
                return data ? JSON.parse(data) : null;
            },
            setData(key, value) {
                let data = JSON.stringify(value);
                return AFL_storage.setItem(key, data);
            },
            remove(key) {
                return AFL_storage.removeItem(key);
            }
        },
        updateStorageList() {
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
        },
        saveStorage() {
            let num = fleet_in_storage.length;
            if (!num) return;
            LS.fleetManager.clearFleetData();
            LS.fleetManager.storageFleetData(fleet_in_storage);
        },
        add_fleet() {
            let nameBox = fleet_info.name(),
                name = nameBox.value.trim(),
                name_enc = encodeURIComponent(name);
            if (!name || name.length == 0) {
                msg.error.empty_name();
            } else {
                let data = app.util.dumpID();
                fleet_in_storage.push({ name: name_enc, fleet: data });
                LS.saveStorage();
                msg.normal.storage_add_fleet(name_enc);
                nameBox.value = ""; // clear after save
            }
        },
        load_fleet() {
            let fleet_id = fleet_info.select().getAttribute("sotrge_id");
            if (!fleet_id || isNaN(fleet_id)) msg.error.invalid_id();
            let data = fleet_in_storage[fleet_id];
            if (!data) msg.error.no_data();
            let name = decodeURIComponent(data.name);
            msg.normal.storage_load_fleet(fleet_id, data.name);
            fleet_info.name().value = name;
            LS.clear_select();
            let text_box = document.getElementById("fleetdata");
            text_box.value = data.fleet;
            app.util.loadDataByID();
        },
        clear_select() {
            let select = fleet_info.select();
            select.textContent = "Select Fleet";
            select.removeAttribute("sotrge_id");
            fleet_info.load().disabled = true;
            fleet_info.remove().disabled = true;
        },
        remove_fleet() {
            let fleet_id = fleet_info.select().getAttribute("sotrge_id");
            if (!fleet_id || isNaN(fleet_id)) msg.error.invalid_id();
            let data = fleet_in_storage[fleet_id];
            if (!data) msg.error.no_data();
            msg.normal.storage_remove_fleet(fleet_id, data.name);
            LS.clear_select();
            fleet_in_storage.splice(fleet_id, 1);
            LS.saveStorage();
        }
    },
    // indexedDB
    initialDB = async (db_name, db_ver) => {
        const db = await idb.openDB(db_name, db_ver, {
            upgrade(db, oldVersion, newVersion) {
                try {
                    if (oldVersion && db.objectStoreNames.length && (newVersion > oldVersion)) {
                        // oldVersion 0 = no db exist
                        // db.objectStoreNames.length 0 = no store exist
                        console.log("clear old version");
                        db.deleteObjectStore(db_name);
                    }
                } catch (e) {
                    console.log(db, oldVersion, newVersion, e);
                } finally {
                    db.createObjectStore(db_name, { keyPath: "id", });
                }
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
    },
    emptyCache = async () => {
        const [db, AFDB] = await initialDB(db_name, db_ver);
        await AFDB.clear();
        window.location.reload();
    },
    msg = {
        error: {
            _t(text = "") { return fleet_info.msg.red("Error: " + text); },
            delete_last() { return this._t("You can't delete the last Fleet"); },
            maximum_fleet() { return this._t("Exceed maximum Fleet limit"); },
            negative_position() { return this._t("Position must be positive"); },
            unknown_direction() { return this._t("Unknown direction"); },
            empty_name() { return this._t("Fleet name is empty"); },
            invalid_id() { return this._t("Invalid Fleet id"); },
            no_data() { return this._t("Fleet data is empty"); },
            long_url() { return this._t("URL too long. You still can share it by use fleetdata below"); },
            too_high() { return this._t("Can't yeet the Fleet higher than it is"); },
            too_low() { return this._t("Can't yeet the Fleet lower than it is"); },
            unzip_failed() { return this._t("Invalid data"); },
            corrupted_data(t) { return this._t(`Corrupted data` + (t.length ? ` (${t})` : "")); },
            unknown_version(t) { return this._t("Unknown version" + (t.length ? ` (${t})` : "")); },
            wrong_data_type(t) { return this._t(`Wrong data type` + (t.length ? ` (${t})` : "")); },
        },
        normal: {
            _t(text = "") { return fleet_info.msg.green(text); },
            storage_add_fleet(name) { return this._t(`Fleet [${decodeURIComponent(name)}] Saved`); },
            storage_load_fleet(fleet_id, name) { return this._t(`Fleet ${fleet_id} [${decodeURIComponent(name)}] loaded`); },
            storage_remove_fleet(fleet_id, name) { return this._t(`Fleet ${fleet_id} [${decodeURIComponent(name)}] removed`); },
            storage_found_fleets(num) { return this._t(`Found ${num} Fleet in storage`); },
            copied() { return this._t("Copied"); },
            fleet_dump() { return this._t(`Fleet data dumped`); },
            fleet_copied(fleet_id) { return this._t(`Fleet ${fleet_id + 1} copied`); },
            fleet_removed(fleet_id) { return this._t(`Fleet ${fleet_id + 1} removed`); },
            fleet_added(type) { return this._t(`New ${type == 1 ? "Normal" : "Submarine"} Fleet added`); },
            fleet_loaded() { return this._t("Successfully loaded Fleet data"); },
            owned_dump(s_count, e_count) { return this._t(`Owned data dumped [Ship:${s_count}, Equip:${e_count}]`); },
            owned_load(s_count, e_count) { return this._t(`Owned data loaded (text) [Ship:${s_count}, Equip:${e_count}]`); },
            owned_load_setting(s_count, e_count) { return this._t(`Owned data loaded (setting) [Ship:${s_count}, Equip:${e_count}]`); },
            owned_save(s_count, e_count) { return this._t(`Owned data saved [Ship:${s_count}, Equip:${e_count}]`); },
            ship_copied(ship) { return this._t(`[${ship[0].property[language]}] copied`); },
        },
    },
    fleet_info = {
        name: () => document.querySelector("#fleet_name"),
        select: () => document.querySelector("#select_fleet"),
        list: () => document.querySelector("#fleet_list"),
        load: () => document.querySelector("#load_fleet"),
        remove: () => document.querySelector("#remove_fleet"),
        msg: {
            red(text = "", throwError = true) {
                let ele = document.querySelector("#error_message");
                classManager.exchange(ele, msg_color.green, msg_color.red);
                ele.textContent = text;
                ele.style.opacity = 1;
                this.clear_queue();
                this.queue.push(setTimeout(() => { ele.style.opacity = 0; }, 3000));
                if (throwError) throw Error(text);
            },
            green(text = "", showLog = true) {
                let ele = document.querySelector("#error_message");
                classManager.exchange(ele, msg_color.red, msg_color.green);
                ele.textContent = text;
                ele.style.opacity = 1;
                this.clear_queue();
                this.queue.push(setTimeout(() => { ele.style.opacity = 0; }, 3000));
                if (showLog) console.log(text);
            },
            clear_queue() { this.queue.forEach(tid => clearTimeout(tid)); },
            queue: [],
        }
    },
    classManager = {
        exchange(ele, class_1, class_2) {
            if (ele.classList.contains(class_1)) ele.classList.remove(class_1);
            ele.classList.add(class_2);
        },
        batchExchange(ele, class_1, class_2) {
            if ((class_1 && class_2) instanceof Array && (class_1 && class_2).length > 0) {
                class_1.forEach(c => ele.classList.remove(c));
                class_2.forEach(c => ele.classList.add(c));
            }
        },
    },
    app = {
        option: {
            setLanguage(ele) {
                let key = ele.id;
                language = ALF.lang = shipSelect.lang = equipSelect.lang = key;
                document.querySelectorAll("[name=name]").forEach(name => name.textContent = name.getAttribute(key));
                document.querySelectorAll("[ui_text='true']").forEach(ui_ele => {
                    if (ui_ele.tagName == "INPUT") {
                        ui_ele.placeholder = ui_ele.getAttribute(`ui_${key}`);
                    } else {
                        ui_ele.textContent = ui_ele.getAttribute(`ui_${key}`);
                    }
                });
                LS.userSetting.set(settingKey.language, language);
                this.adjustEle();
            },
            switchLayout(ele, same = false) {
                switch (ele.textContent) {
                    case layout_list.h:
                        setLayout("h", "v");
                        break;
                    case layout_list.v:
                        setLayout("v", "v2");
                        break;
                    case layout_list.v2:
                        setLayout("v2", "h");
                        break;
                    default:
                        throw Error("unknown layout");
                }
                LS.userSetting.set(settingKey.layout, layout_list[ele.textContent]);

                function setLayout(current, next) {
                    changeClass(same ? current : next);
                    ele.textContent = layout_list[same ? current : next];
                }

                function changeClass(classKey = "") {
                    for (let key in appClassData) {
                        if (key == "app_box") {
                            // non vue
                            document.querySelector(".app_box").className = `${appClassData.app_box[classKey]} app_box`;
                        } else {
                            ALF.class_data[key] = appClassData[key][classKey];
                        }
                    }
                }
            },
            frameSize(ele) {
                $(ele).button("toggle");
                // firefox doesn't support ".ariaPressed" https://caniuse.com/?search=ariaPressed
                let thicc = ele.getAttribute("aria-pressed") == "true" ? true : false,
                    location = window.location.href,
                    reg = /b+\.png/, done = 0, fail = 0;

                [sortedEquip, sortedShip].forEach(list => {
                    list.forEach(item => {
                        if (item.frame != "") item.frame = replaceSrc(item.frame);
                    });
                });

                document.querySelectorAll("img.frame").forEach(item => {
                    if (item.currentSrc != "") item.src = replaceSrc(item.currentSrc);
                });

                //console.log(`[${this.frameSize.name}] done: ${done}, failed: ${fail}`);
                LS.userSetting.set(settingKey.thickFrame, thicc ? 1 : 0);

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
            },
            displayOP(ele) {
                $(ele).button("toggle");
                let display = ele.classList.contains("active") ? true : false;
                ALF.show_op = display;
                LS.userSetting.set(settingKey.fleetEdit, display ? 1 : 0);
            },
            displayBorder(ele) {
                $(ele).button("toggle");
                let layoutKey = layout_list[document.querySelector("#layout_setting").textContent],
                    display = ele.classList.contains("active");
                if (display) {
                    const border = {
                        fleet_box_o: {
                            h: "fleet_box_o d-grid justify-content-center",
                            v: "fleet_box_o d-grid border border-secondary",
                            v2: "fleet_box_o flex-row"
                        },
                        fleet_box_i: {
                            h: "fleet_box_i row m-2 border border-secondary", // p-1 py-2
                            v: "fleet_box_i col p-0", // m-2
                            v2: "fleet_box_i col p-0 border border-secondary" // m-2
                        }
                    };
                    for (let key in border) {
                        appClassData[key] = border[key];
                        ALF.class_data[key] = appClassData[key][layoutKey];
                    }
                } else {
                    const noborder = {
                        fleet_box_o: {
                            h: "fleet_box_o d-grid justify-content-center",
                            v: "fleet_box_o d-grid",
                            v2: "fleet_box_o flex-row"
                        },
                        fleet_box_i: {
                            h: "fleet_box_i row m-2",
                            v: "fleet_box_i col p-0", // m-2
                            v2: "fleet_box_i col p-0" // m-2
                        }
                    };
                    for (let key in noborder) {
                        appClassData[key] = noborder[key];
                        ALF.class_data[key] = appClassData[key][layoutKey];
                    }
                }
                LS.userSetting.set(settingKey.fleetBorder, display ? 1 : 0);
            },
            adjustEle() {
                const
                    width = $(window).width(),
                    safe_size = 1300,
                    _d = {
                        exchange: "exchange",
                        batch: "batchExchange",
                        w25: "w-25",
                        w50: "w-50",
                        w75: "w-75",
                        w100: "w-100",
                        mw75: "mw-75",
                        mw100: "mw-100",
                        no_effect: "adjustEle_placeholder",
                        df: "d-flex",
                        fw: "flex-wrap",
                    },
                    converter = (target_id, mode, normal, small) => {
                        return {
                            mode: mode,
                            n: normal,
                            s: small,
                            ele: document.getElementById(target_id),
                        };
                    },
                    target_list = [
                        //["option_box_1", _d.exchange, _d.w25, _d.w50],
                        //["option_box_2", _d.exchange, _d.w25, _d.w50],
                        ["fleet_storage", _d.exchange, _d.w50, _d.w75],
                        ["dialog_shipselect", _d.exchange, _d.no_effect, _d.mw75],
                        ["dialog_select_equip", _d.exchange, _d.no_effect, _d.mw75],
                        //["language_select_group", _d.exchange, _d.w25, _d.w50],
                        //["url_area", _d.exchange, _d.w25, _d.w50],
                        //["data_area", _d.exchange, _d.w25, _d.w50],
                        //["owned_data_area", _d.exchange, _d.w25, _d.w50],
                        //["search_box", _d.exchange, _d.df, _d.fw],
                    ];
                if (width < safe_size) {
                    target_list.forEach(t => { t = converter(...t); classManager[t.mode](t.ele, t.n, t.s); });
                } else {
                    target_list.forEach(t => { t = converter(...t); classManager[t.mode](t.ele, t.s, t.n); });
                }
            },
            ship: {
                allow_dup(ele) {
                    $(ele).button("toggle");
                    LS.userSetting.set(settingKey.allowDup, ele.classList.contains("active") ? 1 : 0);
                },
                setCode(ele) {
                    $(ele).button("toggle");
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
                },
                setRetro(ele) {
                    $(ele).button("toggle");
                    retrofit_only = ele.classList.contains("active");
                    app.shipDisplay();
                },
                sort_order(ele) {
                    ele.value = ele.value == 1 ? 0 : 1;
                    ele.textContent = ele.value == 1 ? "⮟" : "⮝";
                    // trigger sort
                    document.querySelector(`[onclick*="app.option.ship.sort"]`) //ship
                        .parentElement.querySelector(`[aria-labelledby="sort_menu"]>.active`).click();
                },
                isDescend() {
                    if (!this._sort_order) this._sort_order = document.querySelector("#ship_sort_order");
                    return this._sort_order.value == 1 ? true : false;
                },
                last_sort: {},
                sort(ele, reset = false) {
                    let
                        shiplist = document.querySelector("#shiplist"),
                        tid = "000000",
                        top = sortedShip[0],
                        list = (this.last_sort.list ? this.last_sort.list : sortedShip).filter(ship => ship.id != tid),
                        key = ele.getAttribute("value"),
                        descend = this.isDescend();
                    console.log(`sort by:${key}, descend:${descend}`);
                    if (!reset) {
                        list = util.sorting(list, key, descend);
                        list.unshift(top);
                    } else {
                        list = descend ? sortedShip : sortedShip.slice().reverse();
                        if (!descend) list.unshift(list.pop());
                    }
                    list.forEach(ship => shiplist.appendChild(shiplist.querySelector(`[id="${ship.id}"]`)));
                    this.last_sort = { key, descend, list };
                    // clear other selected
                    [...ele.parentElement.children].forEach(item => item.classList.remove("active"));
                    // set current as selected
                    ele.classList.add("active");
                }
            },
            equip: {
                resetFilter(toDefault = false) {
                    const default_rarity = new Set(toDefault ? [6, 5, 4, 3] : []),
                        default_tier = new Set(toDefault ? [0, 3] : []);
                    document.querySelectorAll("#eq_tier button").forEach(b => util.changeButtonStats(b, default_tier.has(parseInt(b.value, 10)) ? true : false));
                    document.querySelectorAll("#eq_rarity button").forEach(b => util.changeButtonStats(b, default_rarity.has(parseInt(b.value, 10)) ? true : false));
                    document.querySelectorAll("#eq_nation button,#eq_type button").forEach(b => util.changeButtonStats(b, false));
                    filter_setting.eq_type = new Set();
                    filter_setting.eq_nation = new Set();
                    filter_setting.eq_rarity = default_rarity;
                    filter_setting.eq_tier = default_tier;
                },
                setCode(ele) {
                    $(ele).button("toggle");
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
                },
                autoUseDefault(ele) {
                    $(ele).button("toggle");
                    if (ele.classList.contains("active")) {
                        this.resetFilter(true);
                    } else {
                        this.resetFilter(false);
                    }
                },
                sort_order(ele) {
                    ele.value = ele.value == 1 ? 0 : 1;
                    ele.textContent = ele.value == 1 ? "⮟" : "⮝";
                    // trigger sort
                    document.querySelector(`[onclick*="app.option.equip.sort"]`) //equip
                        .parentElement.querySelector(`[aria-labelledby="sort_menu"]>.active`).click();
                },
                isDescend() {
                    if (!this._sort_order) this._sort_order = document.querySelector("#equip_sort_order");
                    return this._sort_order.value == 1 ? true : false;
                },
                last_sort: {},
                sort(ele, reset = false) {
                    let
                        equiplist = document.querySelector("#equiplist"),
                        tid = "666666",
                        top = sortedEquip[0],
                        list = (this.last_sort.list ? this.last_sort.list : sortedEquip).filter(equip => equip.id != tid),
                        key = ele.getAttribute("value"),
                        descend = this.isDescend();
                    console.log(`sort by:${key}, descend:${descend}`);
                    if (!reset) {
                        list = util.sorting(list, key, descend);
                        list.unshift(top);
                    } else {
                        list = descend ? sortedEquip : sortedEquip.slice().reverse();
                        if (!descend) list.unshift(list.pop());
                    }
                    list.forEach(equip => equiplist.appendChild(equiplist.querySelector(`[id="${equip.id}"]`)));
                    this.last_sort = { key, descend, list };
                    // clear other selected
                    [...ele.parentElement.children].forEach(item => item.classList.remove("active"));
                    // set current as selected
                    ele.classList.add("active");
                }
            },
        },
        fleet: {
            buildFleet(formation_data = [], update = false) {
                if (!formation_data.length) throw Error("formation data is empty!!");
                /*  
                ship [0,1,2,3,4,5] 0 = ship, ...equip
                
                item id 
                old 
                _0123 => fleet=0 side=1 pos=2 item=3
                => when fleet id bigger then 10
                => _10123 => explosion
            
                new
                0_1_2_3 => can handle more digi
                0_1_2_3.split("_") => [0,1,2,3]
            
                pos
                0 => 2 (1) | 0 => 3 (2)
                1 => 1 (0) | 1 => 2 (1)
                2 => 3 (2) | 2 => 1 (0)
                */
                let newfleet = [];
                //console.log(`build form formation: [${formation_data}]`);
                const formationSel = {
                    1: (id) => this.newNormalFleet(id),
                    2: (id) => this.newSubFleet(id),
                };
                formation_data.forEach((formation, fleet_id) => newfleet.push(formationSel[formation](fleet_id)));
                //console.log(newfleet);
                c_formation = formation_data;
                if (!update) {
                    return newfleet;
                } else {
                    ALF.fleets = fleetData = newfleet;
                }
            },
            creatEmptyShip() {
                // creat empty obj faster than use JSON to deep copy
                // Object.assign only deep copy 1st layer
                let new_empty_ship = [];
                for (let i = 0; i < 6; i++) {
                    let item = [];
                    if (i === 0) {
                        let ship = {
                            id: "", type: "", star: "", rarity: "",
                            tw: "", en: "", cn: "", jp: "",
                            icon: ui_table.empty_item, bg: "", frame: "",
                            target: "#shipselect",
                            base: [], equip_p: [],
                            quantity: "",
                            ship_level: app._level_default.ship,
                            nationality: "",
                            eq_p: "",
                        };
                        item = ship;
                    } else {
                        let eq = {
                            id: "", type: [], star: "", rarity: "",
                            tw: "", en: "", cn: "", jp: "",
                            icon: ui_table.empty_disable, bg: "", frame: "",
                            target: "",
                            fb: [],
                            type_tw: "", type_cn: "", type_en: "", type_jp: "",
                            limit: "",
                            quantity: "",
                            equip_level: app._level_default.equip,
                            tech: "",
                            proficiency: "",
                            nationality: "", eq_type: "", style:"",
                        };
                        item = eq;
                    }
                    new_empty_ship.push({ id: i, property: [], });
                    new_empty_ship[i].property = Object.assign({}, item);
                }
                return new_empty_ship;
            },
            newNormalFleet(fleetID) {
                if (isNaN(fleetID) || fleetID < 0) throw Error("no fleet_id");
                let front = [],
                    back = [],
                    emptyShip = this.creatEmptyShip(),
                    max = emptyShip.length;
                for (let position = 0; position < 6; position++) {
                    if (position < 3) {
                        let ship = [];
                        for (let itemIndex = 0; itemIndex < max; itemIndex++) {
                            let property = Object.assign({}, emptyShip[itemIndex].property);
                            if (itemIndex == 0) property.ship_pos = posTable.F[position];
                            property.pos = "front";
                            ship.push({ id: `${fleetID}_0_${position}_${itemIndex}`, property: property, });
                        }
                        front.push({ id: `fleet_${fleetID}_front_${position}`, item: ship, });
                    } else {
                        let ship = [];
                        for (let itemIndex = 0; itemIndex < max; itemIndex++) {
                            let property = Object.assign({}, emptyShip[itemIndex].property);
                            if (itemIndex == 0) property.ship_pos = posTable.BS[position - 3];
                            property.pos = "back";
                            ship.push({ id: `${fleetID}_1_${position - 3}_${itemIndex}`, property: property, });
                        }
                        back.push({ id: `fleet_${fleetID}_back_${position - 3}`, item: ship, });
                    }
                }
                return { id: ` ${fleetID + 1} `, front: front, back: back, };  // this id effect disableInvalidMoveButton, change the [pos="id"] in css selector
            },
            newSubFleet(fleetID) {
                if (isNaN(fleetID) || fleetID < 0) throw Error("no fleet_id");
                let sub = [],
                    emptyShip = this.creatEmptyShip();
                for (let position = 0; position < 3; position++) {
                    let ship = [], max = emptyShip.length;
                    for (let itemIndex = 0; itemIndex < max; itemIndex++) {
                        let property = Object.assign({}, emptyShip[itemIndex].property);
                        if (itemIndex == 0) property.ship_pos = posTable.BS[position];
                        property.pos = "sub";
                        ship.push({ id: `${fleetID}_2_${position}_${itemIndex}`, property: property, });
                    }
                    sub.push({ id: `fleet_${fleetID}_sub_${position}`, item: ship, });
                }
                return { id: ` ${fleetID + 1} `, sub: sub, };  // this id effect disableInvalidMoveButton, change the [pos="id"] in css selector
            },
        },
        util: {
            _owned: {
                ship: new Set([]),
                equip: new Set([]),
                ship_on: 0,
                equip_on: 0,
            },
            saveOwned() {
                let data =
                    JSON.stringify({
                        ship: [...this._owned.ship],
                        equip: [...this._owned.equip],
                        ship_on: this._owned.ship_on,
                        equip_on: this._owned.equip_on
                    });
                data = LZString.compress(data);
                LS.userSetting.set(settingKey.ownedItem, data);
                msg.normal.owned_save(this._owned.ship.size, this._owned.equip.size);
            },
            setOwned(btn, type) {
                let isOn = btn.classList.contains("active");
                this._owned[`${type}_on`] = isOn ? 0 : 1;
                //btn.classList[isOn ? "remove" : "add"]("active");  this is very slow... https://jsbench.me/h2kwwm3v1t/1
                if (isOn) {
                    btn.classList.remove("active");
                } else {
                    btn.classList.add("active");
                }
                if (type == "ship") app.shipDisplay();
                if (type == "equip") app.equipDisplay();
                //this.saveOwned();
            },
            _editing_owned: {
                ship: false,
                equip: false,
            },
            editOwned(btn, type = "") {
                let list = this._owned[type],
                    enable_btn = document.querySelector(`#owned_${type}_only`),
                    func = {
                        ship: function () { app.setShipAndEquip(this); },
                        equip: function () { app.setEquip(this); },
                    };
                if (!(btn.classList.contains("active"))) {
                    btn.classList.add("active");
                    // disable owned filter
                    if (enable_btn.classList.contains("active")) enable_btn.click();
                    enable_btn.disabled = true;
                    editOn();
                    this._editing_owned[type] = true;
                } else {
                    btn.classList.remove("active");
                    editOff();
                    this._editing_owned[type] = false;
                }
                if (type == "ship") app.shipDisplay();
                if (type == "equip") app.equipDisplay();

                function editOn() {
                    let all_btn = [...document.querySelectorAll(`#${type}list button`)],
                        remove = all_btn.shift();
                    all_btn.forEach(btn => {
                        btn.setAttribute("data-dismiss", "");
                        btn.onclick = function () { editList(this); };
                    });
                    remove.setAttribute("data-dismiss", "");
                    remove.disabled = true;
                    remove.onclick = "";
                    updateList();

                    function editList(ele) {
                        let id = parseInt(ele.id, 10);
                        if (list.has(id)) {
                            list.delete(id);
                        } else {
                            list.add(id);
                        }
                        updateList(ele);
                        //app.util.saveOwned();
                    }

                    function updateList(target) {
                        if (!target) all_btn.forEach(btn => btn.style.opacity = list.has(parseInt(btn.id, 10)) ? 1 : 0.2);
                        if (target) target.style.opacity = list.has(parseInt(target.id, 10)) ? 1 : 0.2;
                    }
                }

                function editOff() {
                    let all_btn = [...document.querySelectorAll(`#${type}list button`)],
                        remove = all_btn.shift();
                    all_btn.forEach(btn => {
                        btn.setAttribute("data-dismiss", "modal");
                        btn.onclick = func[type];
                        btn.style.opacity = 1;
                    });
                    enable_btn.disabled = false;

                    remove.disabled = false;
                    remove.setAttribute("data-dismiss", "modal");
                    remove.onclick = func[type];
                }
            },
            removeAllCookie() {
                //------------------------------
                // stop use cookie, use localStorage now
                //------------------------------
                let cookie = document.cookie,
                    cookieList = {},
                    ignore = new Set(["expires", "SameSite",]);
                cookie = cookie.split(";").map(t => t.trim());
                cookie.forEach(data => {
                    let [key, value] = data.split("=");
                    if (!ignore.has(key)) cookieList[key] = value;
                });
                for (let key in cookieList) {
                    removeCookie(key);
                }
                function removeCookie(ckey, cvalue = "", expday = -1) {
                    let time = new Date(), exp = new Date();
                    exp.setTime(time.getTime() + (expday * 1000 * 60 * 60 * 24));
                    document.cookie = `${ckey}=${cvalue};expires=${exp.toUTCString()};SameSite=Strict;`;
                }
            },
            isCorrectShipType(type) {
                if (c_side === "0" && !type_front.has(type)) return false;
                if (c_side === "1" && !type_back.has(type)) return false;
                if (c_side === "2" && !type_sub.has(type)) return false;
                return true;
            },
            async updateFilter(key, value, type) {
                let hasvalue = filter_setting[key].has(value),
                    add_value = (_key, _value) => filter_setting[_key].add(_value),
                    delete_value = (_key, _value) => filter_setting[_key].delete(_value),
                    normal_value = (_key, _value) => (hasvalue ? delete_value : add_value)(_key, _value);
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
            },
            async updateSetting(item) {
                $(item).button("toggle");
                let strlist = item.name.split("_"),
                    type = strlist[0], // ship, equip
                    filter_type = strlist[1],
                    value = parseInt(strlist[2], 10); //type int
                if (type == "ship") {
                    if (filter_type === "nation") {
                        await this.updateFilter("nation", value, filter_type);
                    } else if (filter_type === "type") {
                        switch (c_side) {
                            case "0":
                                await this.updateFilter("front", value, filter_type);
                                break;
                            case "1":
                                await this.updateFilter("back", value, filter_type);
                                break;
                            case "2":
                                await this.updateFilter("sub", value, filter_type);
                                break;
                            default:
                                throw Error(`unknown ship type ${filter_type}`);
                        }
                    } else if (filter_type === "rarity") {
                        await this.updateFilter("rarity", value, filter_type);
                        item.style.color = item.style.color.length > 0 ? "" : "gold";
                    }
                    app.shipDisplay();
                } else if (type == "equip") {
                    switch (filter_type) {
                        case "nation":
                            await this.updateFilter("eq_nation", value, filter_type);
                            break;
                        case "type":
                            await this.updateFilter("eq_type", value, filter_type);
                            break;
                        case "rarity":
                            await this.updateFilter("eq_rarity", value, filter_type);
                            item.style.color = item.style.color.length > 0 ? "" : "gold";
                            break;
                        case "tier":
                            await this.updateFilter("eq_tier", value, filter_type);
                            break;
                        default:
                            throw Error(`unknown equip type ${filter_type}`);
                    }
                    app.equipDisplay();
                }
            },
            countShipDisplayed() {
                document.querySelector("#ship_count").textContent = document.querySelectorAll("#shiplist button[displayed='true']").length;
            },
            countEquipDisplayed() {
                document.querySelector("#equip_count").textContent = document.querySelectorAll("#equiplist button[displayed='true']").length;
            },
            equipCheck(ckid) {
                let id = parseInt(atob("MjgzNDA="), 10);
                let eq = document.getElementById(String(id));
                let bg = eq.querySelector(".bg");
                let frame = eq.querySelector(".frame");
                let icon = eq.querySelector(".icon");
                let name = eq.querySelector("[name=name]");
                let itemInList = sortedEquip.find(ele => ele.id == id);
                let isCache = itemInList.icon_cache ? true : false;
                id = id - 40;
                let match = parseInt(atob("MTA4MDIw"), 10);
                match = isCache ? sortedShip.find(ele => ele.id == match) : window[atob("c2hpcF9kYXRh")][match];
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
                        name.textContent = match[isCache ? language : `${language}_name`];
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
                    name.textContent = eq[`${language}_name`];
                }
                function att(item, key, v1, v2) {
                    item.setAttribute(key, item.getAttribute(key).replace(v1, v2));
                }
                function prop(obj, key, v1, v2) {
                    obj[key] = obj[key].replace(v1, v2);
                }
            },
            dumpID(raw = false, input_data = [], event = undefined) {
                let data = [];
                (!input_data.length ? fleetData : input_data).forEach(fleet => data.push(app.util.dumpFleet(fleet)));
                if (raw) return data; // skip
                //if(!input_data.length) c_formation = extractFormation(raw_data);
                data = JSON.stringify(data);
                data = app.util.updateFleetDataBox(data);
                if (event) msg.normal.fleet_dump();
                return data;
            },
            dumpFleet(input_fleet_data = []) {
                let fleet_data = [];
                for (let side_key in input_fleet_data) {
                    if (side_key == "id") continue;
                    let side_data = [];
                    input_fleet_data[side_key].forEach(ship => {
                        let is_empty = !(ship.item[0].property.id);
                        if (is_empty) {
                            // empty ship, set all 0
                            side_data.push([0]);
                        } else {
                            let ship_data = [], lv_data = [];
                            ship.item.forEach((item, i) => {
                                let id = parseInt(item.property.id),
                                    lv = (i == 0 ? item.property.ship_level : item.property.equip_level);
                                if (!id) {
                                    // empty equip
                                    ship_data.push(0);
                                    lv_data.push(app._level_default.equip.toString(16));
                                } else {
                                    ship_data.push(id);
                                    // level ship:125=>7d / equip:13=>d
                                    if (i == 0) {
                                        lv_data.push(app.shipLevelLimit(lv).toString(16).padStart(2, 0));
                                    } else {
                                        lv_data.push(app.equipLevelLimit(item.property.rarity, lv, item.property.tech).toString(16));
                                    }
                                }
                            });
                            ship_data.push(lv_data.join(""));
                            side_data.push(ship_data);
                        }
                    });
                    fleet_data.push(side_data);
                }
                // 1:normal, 2:sub, attach it to the end, or it will break fleet sequence and loadID
                fleet_data.push(input_fleet_data.sub ? 2 : 1);
                return fleet_data;
            },
            updateFleetDataBox(json_data = "") {
                let textbox = document.getElementById("fleetdata"), data;
                if (!json_data.length) return;
                // data = `${input_data}!0.05!${CryptoJS.MD5(input_data).toString()}`;
                data = `${json_data}!0.06!${CryptoJS.MD5(json_data).toString().slice(0, 7)}`;
                data = LZString.compressToEncodedURIComponent(data);
                textbox.value = data;
                return data;
            },
            async loadDataByID(noDump = false, event = undefined) {
                let textbox = document.getElementById("fleetdata"),
                    raw_data = textbox.value;
                if (!raw_data.length) msg.error.no_data();
                if (raw_data[0] !== "[") raw_data = LZString.decompressFromEncodedURIComponent(raw_data);
                // try decode uri
                if (!raw_data) raw_data = LZString.decompressFromEncodedURIComponent(decodeURIComponent(textbox.value));
                if (!raw_data) msg.error.unzip_failed();
                let [data, ver, hash] = raw_data.split("!"),
                    ck = false;
                switch (ver) {
                    case "0.04":
                        ck = CryptoJS.SHA3(data, { outputLength: 256 }).toString();
                        if (ck !== hash) return loadError(ck);
                        data = JSON.parse(data);
                        if (!c_formation.sameAs(formation.v4)) app.fleet.buildFleet(formation.v4, true);
                        break;
                    case "0.05":
                        ck = CryptoJS.MD5(data).toString();
                        if (ck !== hash) return loadError(ck);
                        data = JSON.parse(data);
                        c_formation = this.extractFormation(data);
                        app.fleet.buildFleet(c_formation, true);
                        break;
                    case "0.06":
                        ck = CryptoJS.MD5(data).toString().slice(0, 7);
                        if (ck !== hash) return loadError(ck);
                        data = JSON.parse(data);
                        c_formation = this.extractFormation(data);
                        app.fleet.buildFleet(c_formation, true);
                        break;
                    default:
                        msg.error.unknown_version();
                }
                textbox.value = "";
                await this.parseID(data, noDump, ver);
                dynamicFleet.disableInvalidMoveButton();
                if (event) msg.normal.fleet_loaded();

                function loadError(_ck_ = "") {
                    textbox.value = `Error: Corrupted data!!!`;
                    console.log(data);
                    msg.error.corrupted_data();
                }
            },
            async parseID(data, noDump = false, ver = "") {
                if (!data.length) throw Error("no data");
                let default_level = [app._level_default.ship].concat(Array(5).fill(app._level_default.equip));
                ver = parseFloat(ver);
                data.forEach((fleet, fleet_index) => {
                    let last_item = fleet[fleet.length - 1],
                        formation_data = (!isNaN(last_item)) ? last_item : false;
                    fleet.forEach((side, side_index) => {
                        if (!(side instanceof Array)) return;
                        side.forEach((ship, ship_index) => {
                            if (ver > 0.05) {
                                let is_empty = ship[0] ? false : true,
                                    level_data = ship.pop();
                                if (is_empty) return; // skip empty ship
                                if (level_data) level_data = level_data.match(/(.{2})(.{5})/).filter((e, i) => i > 0).map((e, i) => (i == 0 ? e : e.split(""))).flat();
                                if (!(level_data instanceof Array)) level_data = default_level;
                                ship.forEach((id, item_index) => {
                                    if (id == 0) id = "666666"; // only empty equip can be here
                                    if (is_empty) return;
                                    let name = formation_data == 1 ?
                                        `${fleet_index}_${side_index}_${ship_index}_${item_index}` : // normal fleet
                                        `${fleet_index}_2_${ship_index}_${item_index}`, // sub fleet
                                        ship_item = { name, id },
                                        level = parseInt(level_data[item_index], 16),
                                        [f, s, p, i] = this.setCurrent(ship_item, true), // get current data
                                        app_item = fleetData[f][s][p].item[i].property;
                                    if (item_index == 0) {
                                        if (!app.setShipAndEquip(ship_item, false, true)) is_empty = true; // set ship failed, skip rest
                                        app_item.ship_level = app.shipLevelLimit(level); // set level
                                    } else {
                                        app.setEquip(ship_item, false, true);  // set equip first so the rarity is set
                                        app_item.equip_level = app.equipLevelLimit(app_item.rarity, level, app_item.tech);
                                    }
                                });
                            } else {
                                let is_ship_empty = false;
                                ship.forEach((item, item_index) => {
                                    // set as empty ship/equip
                                    if (item === "" || item === 0) item = (item_index == 0) ? "000000" : "666666";
                                    // skip empty ship
                                    if (is_ship_empty) return;

                                    let item_name;
                                    if (!formation_data) {
                                        // v4 no formation data
                                        item_name = fleet_index < 4 ?
                                            `${fleet_index}_${side_index}_${ship_index}_${item_index}` : // normal fleet
                                            `${fleet_index}_2_${ship_index}_${item_index}`; // sub fleet
                                    } else {
                                        // v5+
                                        // side { 0:front, 1:back, 2:sub }, formation { 1: normal, 2:sub }
                                        item_name = formation_data == 1 ?
                                            `${fleet_index}_${side_index}_${ship_index}_${item_index}` : // normal fleet
                                            `${fleet_index}_2_${ship_index}_${item_index}`; // sub fleet
                                    }

                                    let ship_item = { name: item_name, id: item },
                                        [f, s, p, i] = this.setCurrent(ship_item, true),
                                        app_item = fleetData[f][s][p].item[i].property;
                                    if (item_index === 0) {
                                        if (!(app.setShipAndEquip(ship_item, false, true))) is_ship_empty = true; // set ship failed, skip equip
                                        app_item.ship_level = app.shipLevelLimit(app._level_default.ship);
                                    } else {
                                        app.setEquip(ship_item, false, true);
                                        app_item.equip_level = app.equipLevelLimit(app_item.rarity, app._level_default.equip, app_item.tech);
                                    }
                                    if (item === "000000") is_ship_empty = true;
                                });
                            }
                        });
                    });
                });
                if (!noDump) LS.userSetting.set(settingKey.fleetData, app.util.dumpID());
                return true;
            },
            extractFormation(a_fleet_data = []) {
                if (!(a_fleet_data instanceof Array)) throw Error("Invalid data");
                let formation_data = [];
                a_fleet_data.forEach(fleet => { if (!isNaN(fleet[fleet.length - 1])) formation_data.push(fleet[fleet.length - 1]); });
                //console.log(`new formation: [${formation_data}]`);
                return formation_data;
            },
            setCurrent(item, noDisplay = false) {
                [c_fleet, c_side, c_pos, c_item] = item.name.split("_");
                let sw = dynamicFleet._swap;
                if (sw.on) {
                    // set swap data
                    if (sw.state == 1) {
                        sw.a = [c_fleet, c_side, c_pos, c_item];
                        return;
                    }
                    if (sw.state == 2) {
                        sw.b = [c_fleet, c_side, c_pos, c_item];
                        return;
                    }
                    if (sw.state != 0) throw Error("unknown state");
                    // skip when swap
                    return;
                }
                if (c_item === "0") {
                    //ship
                    let use_set = {
                        "0": type_front,
                        "1": type_back,
                        "2": type_sub,
                    };
                    use_set = use_set[c_side];
                    if (!use_set) throw Error("unknown type");
                    // show & hide filter
                    if (!noDisplay) {
                        lan_ship_type.forEach((type) => type.display = use_set.has(type.id) ? true : ((type.id == 0) ? true : false));
                        app.shipDisplay();
                    }
                } else if (!noDisplay) {
                    // equip
                    let side = sideTable[c_side],
                        // allowed equip type list
                        equip_type_list = fleetData[c_fleet][side][c_pos].item[c_item].property.type,
                        // use current ship data
                        use_set = new Set(equip_type_list);
                    // show & hide filter
                    lan_eq_type.forEach((item) => item.display = use_set.has(parseInt(item.id)) ? true : false);
                    // auto set to default
                    if (document.getElementById("always_reset_equip_filter").getAttribute("aria-pressed") == "true") app.option.equip.resetFilter(true);
                    app.equipDisplay();
                }
                return [c_fleet, sideTable[c_side], c_pos, c_item];
            },
        },
        action: {
            emptyfleet() {
                let data = 'No4BgGk6qhdC5Y2gpLlze5nEZTQMwQEYsg';
                data = LZString.decompressFromEncodedURIComponent(data);
                app.util.updateFleetDataBox(data);
                app.util.loadDataByID();
                dynamicFleet.disableInvalidMoveButton();
            },
            ship_name_search(ele) {
                let search_input = ele.target.value.toLowerCase(); // ship name search
                if (!search_input) return app.shipDisplay();
                console.log("search:", search_input);
                let shiplist = document.querySelectorAll("#shiplist button");
                shiplist.forEach(item => {
                    if (item.id == "000000") return;
                    let ship = ship_data[item.id];
                    let ismatch = [
                        ship.tw_name.toLowerCase(),
                        ship.cn_name,
                        ship.en_name.toLowerCase(),
                        ship.jp_name,
                        ship.english_name.toLowerCase(),
                    ].some(t => t.match(search_input));
                    if (ismatch) {
                        if (ship) {
                            let is_select = app.util.isCorrectShipType(ship.type);
                            item.style.display = is_select ? "" : "none";
                            item.setAttribute("displayed", is_select ? true : false);
                        }
                    } else {
                        item.style.display = "none";
                        item.setAttribute("displayed", false);
                    }
                });
                app.util.countShipDisplayed();
            },
            generateURL() {
                let data = app.util.dumpID();
                let link = LZString.decompressFromEncodedURIComponent("BYFxAcGcC4HpYB4E4AsAzArgKwPYDYAncAcwDpiBLEYDAI1Ip1gEEAvDAgGQEMA7AUwBiAG378QsIA");
                link = new URL(link);
                let textbox = document.getElementById("url_box");
                link.searchParams.append("AFLD", data);
                link = link.href;
                if (link.length >= 2000) {
                    textbox.value = "URL too long. You still can share it by use fleetdata below";
                    msg.error.long_url();
                } else {
                    textbox.value = link;
                    this.copyURL();
                }
            },
            copyURL() {
                let text = document.getElementById("url_box");
                text.select();
                text.setSelectionRange(0, 99999);
                document.execCommand("copy");
                msg.normal.copied();
            },
            copyData(id) {
                let text = document.getElementById(id);
                text.select();
                text.setSelectionRange(0, 99999);
                document.execCommand("copy");
                msg.normal.copied();
            },
            emptyData(id) {
                document.getElementById(id).value = "";
            },
            dumpOwned() {
                let { ship, equip, } = app.util._owned,
                    data = JSON.stringify({ ship: [...ship], equip: [...equip], }),
                    version = 0.1,
                    hash = CryptoJS.MD5(data).toString();
                data = `${data}!${version}!${hash}`;
                data = LZString.compressToEncodedURIComponent(data);
                document.getElementById("owned_data_dump").value = data;
                msg.normal.owned_dump(ship.size, equip.size);
            },
            loadOwned() {
                let raw_data = LZString.decompressFromEncodedURIComponent(decodeURIComponent(document.getElementById("owned_data_dump").value));
                if (!raw_data) msg.error.unzip_failed();
                raw_data = raw_data.split("!");
                if (raw_data.length == 3) {
                    let [data, version, hash] = raw_data,
                        ck = CryptoJS.MD5(data).toString();
                    if (hash == ck) {
                        switch (version) {
                            case "0.1":
                                let { ship, equip } = JSON.parse(data);
                                if (!((ship && equip) instanceof Array)) msg.error.wrong_data_type();
                                Object.assign(app.util._owned, {
                                    ship: new Set(ship),
                                    equip: new Set(equip),
                                });
                                msg.normal.owned_load(ship.length, equip.length);
                                break;
                            default:
                                msg.error.unknown_version(version);
                                break;
                        }
                    } else {
                        msg.error.corrupted_data();
                    }
                } else {
                    msg.error.corrupted_data(`Incorrect data length:${raw_data.length}`);
                }
            },
            loadOwnedSetting(show_msg = false) {
                let data = JSON.parse(LZString.decompress(LS.userSetting.get(settingKey.ownedItem)));
                if (data) {
                    let { ship, equip, ship_on, equip_on } = data;
                    ship = new Set(ship);
                    equip = new Set(equip);
                    app.util._owned = { ship, equip, ship_on, equip_on };
                    if (ship_on) document.querySelector("#owned_ship_only").click();
                    if (equip_on) document.querySelector("#owned_equip_only").click();
                    if (show_msg) msg.normal.owned_load_setting(ship.size, equip.size);
                    console.log("load owned item data", app.util._owned);
                } else {
                    console.log(`unable to load [${settingKey.ownedItem}], removed it`);
                }
            }
        },
        shipDisplay() {
            let shiplist = document.querySelectorAll("#shiplist button");
            shiplist = [...shiplist];
            shiplist.shift(); // skip remove
            shiplist.forEach(item => {
                let id = parseInt(item.id, 10),
                    is_select = _isShipSelect(
                        ship_data[id].nationality,
                        ship_data[id].type,
                        ship_data[id].rarity,
                        ship_data[id].retro
                    );
                item.style.display = is_select ? "" : "none";
                item.setAttribute("displayed", is_select ? true : false);
            });
            if (!document.getElementById("allow_dup_btn").classList.contains("active") &&
                !app.util._editing_owned.ship) _hideShipInFleet();
            if (document.querySelector("#owned_ship_only").classList.contains("active")) _hideNotOwned();
            app.util.countShipDisplayed();
            app.getLevel("ship");

            function _isShipSelect(nation, type, rarity, retro) {
                // when current select ship is front, hide back ships
                if (!(app.util.isCorrectShipType(type))) return false;
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
                } else if (filter_setting.nation.has(100) && collab_nation.has(nation)) {
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

            function _hideShipInFleet() {
                for (let side in fleetData[c_fleet]) {
                    if (side != "id") {
                        fleetData[c_fleet][side].forEach(ship => {
                            let id = ship.item[0].property.id;
                            if (id != "") {
                                let ship = document.getElementById(id);
                                ship.style.display = "none";
                                ship.setAttribute("displayed", false);
                            }
                        });
                    }
                }
            }

            function _hideNotOwned() {
                let list = app.util._owned.ship;
                shiplist.forEach(item => {
                    if (!(list.has(parseInt(item.id, 10)))) {
                        item.style.display = "none";
                        item.setAttribute("displayed", false);
                    }
                });
            }
        },
        _level_default: {
            ship: 120,
            equip: 10,
        },
        shipLevelLimit(level = 1) {
            level = parseInt(level, 10);
            if (isNaN(level)) return app._level_default.ship;
            if (level <= 0) return 1;
            if (level > 125) return 125;
            return level;
        },
        equipLevelLimit(rarity = 5, level = 13, tech = 0) {
            let max = 13;
            [rarity, level, tech].forEach(a => a = parseInt(a, 10));
            if (isNaN(rarity) || rarity < 1 || rarity > 6) rarity = 5;  // as default, and empty equip have no rarity
            if (isNaN(tech) || tech < 0 || tech > 3) tech = 0;
            if (isNaN(level)) level = app._level_default.equip;
            if (level < 0) return 0;
            switch (rarity) {
                case 6: max = (tech == 3 || tech == 0) ? 13 : 10; break;
                case 5: max = (tech == 3 || tech == 0) ? 13 : 10; break;
                case 4: max = (tech == 3 || tech == 0) ? 11 : 10; break;
                case 3: max = (tech == 3 || tech == 0) ? 7 : 6; break;
                case 2: max = 3; break;
                case 1: max = 3; break;
                default: break;
            }
            if (level > max) return max;
            return level;
        },
        getLevel(type = "", skip = false) {
            if (!skip) {
                let side = sideTable[c_side],
                    item_in_app = fleetData[c_fleet][side][c_pos].item[c_item].property,
                    level_app = item_in_app[`${type}_level`],
                    level_input = document.getElementById(`${type}_level_input`),
                    level_slider = document.getElementById(`${type}_level_slider`);
                if (type == "ship") item_in_app[`${type}_level`] = this.shipLevelLimit(level_app);
                if (type == "equip") item_in_app[`${type}_level`] = this.equipLevelLimit(item_in_app.rarity, level_app, item_in_app.tech);
                level_slider.value = level_input.value = item_in_app[`${type}_level`];
            }
        },
        setLevel(type = "", skip = false, save = true) {
            if (!skip) {
                let side = sideTable[c_side],
                    item_in_app = fleetData[c_fleet][side][c_pos].item[c_item].property,
                    level_input = parseInt(document.getElementById(`${type}_level_input`).value, 10);
                if (type == "ship") level_input = this.shipLevelLimit(level_input);
                if (type == "equip") level_input = this.equipLevelLimit(item_in_app.rarity, level_input, item_in_app.tech);
                item_in_app[`${type}_level`] = level_input;
                if (save) LS.userSetting.set(settingKey.fleetData, app.util.dumpID());
            }
        },
        setShipAndEquip(item, save = false, skip_level = false) {
            let side = sideTable[c_side],
                //console.log(`${setShipAndEquip.name}: ${item.id} ${typeof item.id}`);
                shipInApp = fleetData[c_fleet][side][c_pos],
                shipInList = sortedShip.find(ele => {
                    if (ele.id === `${item.id}` || ele.id === item.id) return Object.assign({}, ele);
                }),
                pos = `fleet:${c_fleet}, ${side}, pos:${c_pos}, item:${c_item}`;
            // try cn wiki id
            if (!shipInList) {
                let match_id = cn_wiki_to_alf_id[item.id];
                if (match_id) {
                    [item.id, match_id] = [match_id, item.id];
                    shipInList = sortedShip.find(ele => {
                        if (ele.id === `${item.id}` || ele.id === item.id) return Object.assign({}, ele);
                    });
                    if (shipInList) console.log(`%cfound [${item.id}] match cn wiki [${match_id}]`, "color:orange");
                }
            }
            // ship not exist
            if (!shipInList) {
                console.log(`%cship id[${item.id}] at [${pos}] not found, abort`, "color:red;");
                return false;
            }
            for (let index in shipInApp.item) {
                let app_item = shipInApp.item[index].property;
                if (item.id === "000000") {
                    // empty ship/equip
                    if (index === "0") {
                        //ship
                        ui_table.copy_ship.forEach(key => app_item[key] = "");
                        app_item.icon = shipInList.icon;
                        app_item.equip_p = app_item.base = [];
                        delete app_item.slot_skill; // remove skill data
                    } else {
                        //equip
                        Object.keys(app_item).filter(key => key != "equip_level").forEach(key => app_item[key] = "");
                        app_item.icon = ui_table.empty_disable;
                        app_item.fb = app_item.type = [];
                        app_item.style = app_item.eq_type = "";
                    }
                } else {
                    //copy ship data & equip setting
                    let equip_p = shipInList.equip_p.map(n => Math.round(n * 100)); // copy & convert to int 1.25 => 125
                    if (index === "0") {
                        //ship
                        ui_table.copy_ship.forEach(key => app_item[key] = shipInList[key]);

                        // use converted data
                        app_item.equip_p = equip_p;

                        // set level
                        app.setLevel("ship", skip_level, false);

                        // if ship have slot skill, copy skill data
                        if (skill_ship_slot[item.id]) app_item.slot_skill = Object.assign({}, skill_ship_slot[item.id]);
                    } else {
                        //equip
                        let typelist = shipInList[`e${index}`],
                            itemindex = parseInt(index, 10) - 1,
                            quantity = shipInApp.item[0].property.base[itemindex];
                        Object.keys(app_item).filter(key => key != "equip_level").forEach(key => app_item[key] = "");
                        app_item.type = typelist;
                        app_item.icon = ui_table.empty_item;
                        app_item.eq_type = "";

                        // add proficiency
                        if (index <= 3) app_item.proficiency = equip_p[index - 1];

                        // add quantity if that equip type need it
                        if (quantity != undefined && typelist.some(eqtype => addQuantityList.has(eqtype))) app_item.quantity = `x${quantity}`;

                        // go through all type in ship's equip type list and add it in readable string
                        let type_str_arr = [[], [], [], []]; // for each language: tw cn en jp
                        typelist.forEach(type => {
                            ui_table.langs.forEach((lan_str, index) => {
                                type_str_arr[index].push(parsetype[type][lan_str]);
                            });
                        });
                        ui_table.langs.forEach((lan_str, index) => {
                            app_item[lan_str] = app_item[`type_${lan_str}`] = type_str_arr[index].join("/");
                        });
                        app_item.target = "#equipselect";
                    }
                }
            }
            app.checkFleetShipSkill(c_fleet);
            if (save) LS.userSetting.set(settingKey.fleetData, app.util.dumpID());
            return true;
        },
        async equipDisplay() {
            let side = sideTable[c_side],
                itemInApp = fleetData[c_fleet][side][c_pos].item[c_item].property,
                typelist = itemInApp.type,
                equips = document.querySelectorAll("#equiplist button"),
                ship = fleetData[c_fleet][side][c_pos].item[0].property,
                shiptype = ship.type,
                shipid = ship.id,
                display_list = [];
            equips = [...equips];
            equips.shift(); // skip remove
            app.util.equipCheck(shipid);
            equips.forEach(item => {
                let id = parseInt(item.id, 10),
                    e = equip_data[id],
                    is_select =
                        typelist.includes(e.type) &&
                        !(e.ship_type_forbidden.includes(shiptype)) &&
                        isEquipSelect(e.nationality, e.type, e.rarity, e.tech);
                if (is_select) { item.style.display = ""; display_list.push(id); }
                if (!is_select) item.style.display = "none";
                item.setAttribute("displayed", item.style.display == "" ? true : false);
            });
            if (!app.util._editing_owned.equip) await limitEquip(display_list);
            if (document.querySelector("#owned_equip_only").classList.contains("active")) _hideNotOwned();
            app.util.countEquipDisplayed();
            app.getLevel("equip");

            function isEquipSelect(nation, type, rarity, tier) {
                [nation, type, rarity, tier].forEach(num => parseInt(num));
                let is_nation = false,
                    is_type = false,
                    is_rarity = false,
                    is_tier = false;
                if (filter_setting.eq_nation.has(nation) || filter_setting.eq_nation.size === 0) {
                    is_nation = true;
                } else if (filter_setting.eq_nation.has(100) && eq_collab_nation.has(nation)) {
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
            }

            async function limitEquip(display_list) {
                let side = sideTable[c_side],
                    ship = fleetData[c_fleet][side][c_pos],
                    equipOnShip = [];
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

            function _hideNotOwned() {
                let list = app.util._owned.equip;
                equips.forEach(item => {
                    if (!(list.has(parseInt(item.id, 10)))) {
                        item.style.display = "none";
                        item.setAttribute("displayed", false);
                    }
                });
            }
        },
        setEquip(item, save = false, skip_level = false) {
            let side = sideTable[c_side],
                shipInApp = fleetData[c_fleet][side][c_pos],
                itemInApp = shipInApp.item[c_item].property,
                id = parseInt(item.id, 10),
                pos = `fleet:${c_fleet}, ${side}, pos:${c_pos}, item:${c_item}`;
            if (!id) {
                console.log(`%cinvalid equip id[${item.id}] at [${pos}], abort`, "color:red;");
                return false;
            }
            if (id === 666666) {
                // reset
                ui_table.copy_equip.forEach(key => itemInApp[key] = "");
                itemInApp.tw = itemInApp.type_tw;
                itemInApp.cn = itemInApp.type_cn;
                itemInApp.en = itemInApp.type_en;
                itemInApp.jp = itemInApp.type_jp;
                itemInApp.icon = ui_table.empty_item;
                itemInApp.style = itemInApp.eq_type = "";

                // if ship have slot skill
                let skill = shipInApp.item[0].property.slot_skill;
                if (skill) {
                    // if is slot 1 2 3
                    if (c_pos > 0 && c_pos < 4) app.setProficiencyBySkill({ c_data: [c_fleet, side, c_pos, c_item] });
                }
            } else {
                // copy data
                let itemInList = sortedEquip.find((ele) => { if (ele.id === id) return Object.assign({}, ele); });
                // equip not exist
                if (!itemInList) {
                    console.log(`%cequip id[${id}] at [${pos}] not found, abort`, "color:red;");
                    return false;
                }
                ui_table.copy_equip.forEach(key => itemInApp[key] = itemInList[key]);
                // set level
                app.setLevel("equip", skip_level, false);

                // set equip type for slot skill
                itemInApp.eq_type = itemInList.type;

                // if ship have slot skill
                let skill = shipInApp.item[0].property.slot_skill;
                if (skill) {
                    // if this slot is skill target
                    if (skill.slot.some(s => s == c_item)) app.setProficiencyBySkill({ c_data: [c_fleet, side, c_pos, c_item] });
                }
            }
            if (save) LS.userSetting.set(settingKey.fleetData, app.util.dumpID());
            return true;
        },
        checkFleetShipSkill(fleet_id) {
            // if any ship in current fleet have skill type 2, run it
            let target = [],
                fleet = fleetData[fleet_id];
            Object.keys(fleet).forEach(side_key => {
                if (side_key == "id") return; //skip
                fleet[side_key].forEach((ship, ship_index) => {
                    let skill = ship.item[0].property.slot_skill;
                    if (skill) {
                        if (skill.type == 2) {
                            target.push({ c_data: [fleet_id, side_key, ship_index, 0] });
                        }
                    }
                });
            });
            if (target.length > 0) target.forEach(data => app.setProficiencyBySkill(data));
        },
        setProficiencyBySkill({ c_data = [], condition = false }) {
            let
                [f, s, p, i] = c_data,
                shipInApp = fleetData[f][s][p],
                oringnal = shipInApp.item[0].property.equip_p,
                skill = condition ? condition : shipInApp.item[0].property.slot_skill, // use input condition
                slot1 = shipInApp.item[1].property,
                slot2 = shipInApp.item[2].property,
                slot3 = shipInApp.item[3].property,
                slot_list = [slot1, slot2, slot3],
                name = shipInApp.item[0].property.tw,
                altered_style = "color: orangered;";

            // reset all slot's proficiency & style
            slot_list.forEach((_s, i) => {
                _s.proficiency = oringnal[i];
                _s.style = "";
            });

            switch (skill.type) {
                case 1:
                    return type1(); // single/multi slot
                case 2:
                    return type2(); // check target pos ship
                case 3:
                    return type3(); // multi condition
                default:
                    return;
            }

            function type1() {
                let { type, slot, check, list, p_diff } = skill,
                    is_arr = (p_diff instanceof Array),
                    is_change = false;
                for (let index of slot) {
                    let target = slot_list[index - 1];
                    if (list.some(e => e == target[check])) {
                        if (!is_arr) {
                            target.proficiency += p_diff;
                            target.style = altered_style;
                            is_change = true;
                            //console.log(`pos[${[f, s, p, i]}] ${name} type1 single altered [${oringnal}][${index - 1}] + ${p_diff}`);
                        } else {
                            slot_list.forEach((_s, i) => {
                                _s.proficiency += p_diff[i];
                                if (p_diff[i] != 0) _s.style = altered_style;
                            });
                            is_change = true;
                            //console.log(`pos[${[f, s, p, i]}] ${name} type1 multi altered [${oringnal}] + [${p_diff}]`);
                            break;// apply once only
                        }
                    }
                }
                return is_change;
            }

            function type2() {
                let { type, slot, check, list, p_diff } = skill,
                    [_side, _pos] = slot[0].split("_"),
                    target, target_name;
                _pos = getShipPos(_side, _pos); // get real array pos (1,2,3) => (0,1,2)
                target = fleetData[f][_side][_pos].item[0].property;
                target_name = target.tw;
                if (list.some(e => e == target[check])) {
                    slot_list.forEach((_s, i) => {
                        _s.proficiency += p_diff[i];
                        if (p_diff[i] != 0) _s.style = altered_style;
                    });
                    //console.log(`pos[${[f, s, p, i]}]${name}, target[${[f, _side, _pos, 0]}]${target_name}, type2 altered [${oringnal}] + [${p_diff}]`);
                    return true;
                } else {
                    return false; // no change
                }
            }

            function type3() {
                let is_change = false;
                for (let con of skill.cons) {
                    is_change = app.setProficiencyBySkill({ c_data, condition: con });
                    if (is_change) break;
                }
                //console.log(`pos[${[f, s, p, i]}] ${name} type3 altered:${is_change}`);
                return is_change;
            }

            function getShipPos(side, pos) {
                if (side == "front") {
                    return posTable_r.F[pos];
                } else {
                    return posTable_r.BS[pos];
                }
            }
        },
        async initialize() {
            console.time(app.initialize.name);
            step("sort Ship", 0); await createSortShipList();
            step("sort Equip", 0); await createSortEquipList();
            // ------------------------------
            step("access indexedDB", 0);
            if (indexedDB && window.idb) {
                const [db, AFDB] = await initialDB(db_name, db_ver);
                let all_key = await AFDB.allKeys(),
                    no_cache_list;
                if (!all_key.length) {
                    let cacheData = await imgToDataURI();
                    //console.log(cacheData);
                    if (cacheData.length > 0) {
                        await saveCacheData(db, db_name, cacheData);
                        console.log(`cached ${cacheData.length} icons`);
                    }
                }
                no_cache_list = await loadImgCache(AFDB);
                if (no_cache_list.length > 0) {
                    no_cache_list = await getMissingCache(no_cache_list);
                    if (no_cache_list.length > 0) {
                        await saveCacheData(db, db_name, no_cache_list);
                        console.log(`cached ${no_cache_list.length} icons that is missing form db`);
                        console.log(no_cache_list);
                    }
                }
            } else {
                let pos = document.querySelector("#loading_box");
                pos.innerHTML = `
                    <div>Unable to access indexedDB.</div>
                    <div>This browser doesn't support it or it's in incognito mode.</div>
                `;
                pos.className = "h5 text-danger text-center text-monospace mx-auto my-5";
                return setTimeout(() => delete app.initialize, 500);
            }
            // ------------------------------
            await createAllShip();
            await createAllEquip();
            await addClickEventAndImg();
            step("add text to ele", 0); addLanguageToEle();
            step("add search", 0); add_search_event();
            //step("split button group [ship nation]"); splitButtonGroup("shipnation", 6, filter_btn_class.replace("line-5-item", "line-6-item"));
            //step("split button group [equip nation]"); splitButtonGroup("eq_nation", 6, filter_btn_class.replace("line-5-item", "line-6-item"));
            step("add resize event", 0); addWindowSizeEvent();
            step("load user setting", 0); await loadUserSetting();
            step("load fleet storage", 0); await loadStorage();
            step("set slider", 0); setSlider();
            $("#loading_box").delay(500).slideUp(750);
            $(".lds-dual-ring").fadeOut(500, () => $("#app_area").slideDown(1000));
            dynamicFleet.disableInvalidMoveButton();
            console.timeEnd(app.initialize.name);
            setTimeout(() => delete app.initialize);
            setTimeout(() => window.scrollTo({ top: 0 }));

            //------------------------------
            function step(text = "", show = 1) {
                let ele = document.createElement("div");
                ele.textContent = text;
                ele.className = "text-center text-monospace";
                document.getElementById("loading_box").appendChild(ele);
                if (show) $(ele).fadeOut("slow");
                if (!show) ele.style.display = "none";
            }

            //------------------------------
            async function addProgressBar(id = "", text = "", max = 100, appendTo = {}) {
                let pos = document.querySelector("#loading_box"),
                    ele = document.createElement("div");
                ele.className = "row justify-content-center mb-2";
                ele.innerHTML = `
                    <div class="text-center w-100">${text}</div>
                    <div class="progress w-50 mx-auto position-relative">
                        <div class="p-bar progress-bar bg-info" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="${max}">
                            <div class="p-lable justify-content-center d-flex position-absolute w-100 text-dark">[0/${max}]</div>
                        </div>
                    </div>
                `;
                pos.appendChild(ele);
                Object.assign(appendTo, {
                    bar: ele.querySelector(".p-bar"),
                    lable: ele.querySelector(".p-lable"),
                    value: 0,
                    max,
                    update() {
                        let now = ++this.value,
                            max = this.max,
                            percent = `${Math.round((now / max) * 100)}%`;
                        this.bar.style.width = percent;
                        this.bar.setAttribute("aria-valuenow", now);
                        this.lable.textContent = `[${now}/${max}] ${percent}`;
                    },
                });
                return true;
            }

            //------------------------------
            function setSlider() {
                let ship_text = document.getElementById("ship_level_input"),
                    ship_slider = document.getElementById("ship_level_slider"),
                    equip_text = document.getElementById("equip_level_input"),
                    equip_slider = document.getElementById("equip_level_slider"),
                    syncSlider2Text = (type = "") => {
                        if (type == "ship") ship_text.value = ship_slider.value;
                        if (type == "equip") equip_text.value = equip_slider.value;
                    },
                    syncText2Slider = (type = "") => {
                        if (type == "ship") ship_slider.value = ship_text.value = app.shipLevelLimit(ship_text.value);
                        if (type == "equip") equip_slider.value = equip_text.value = app.equipLevelLimit(5, equip_text.value);
                        app.setLevel(type, false, false);
                    };
                ship_text.addEventListener("change", () => syncText2Slider("ship"));
                equip_text.addEventListener("change", () => syncText2Slider("equip"));

                ship_slider.addEventListener("input", () => syncSlider2Text("ship"));
                equip_slider.addEventListener("input", () => syncSlider2Text("equip"));

                ship_slider.addEventListener("change", () => app.setLevel("ship", false, false));
                equip_slider.addEventListener("change", () => app.setLevel("equip", false, false));

                //only save when modal close
                $("#shipselect").on("hide.bs.modal", () => app.setLevel("ship"));
                $("#equipselect").on("hide.bs.modal", () => app.setLevel("equip"));
            }

            //------------------------------
            async function createSortShipList() {
                let
                    destr = ({
                        uni_id: id,
                        tw_name: tw, cn_name: cn, en_name: en, jp_name: jp,
                        type, nationality, rarity, star, retro,
                        base_list: base,
                        equip_1: e1, equip_2: e2, equip_3: e3, equip_4: e4, equip_5: e5,
                        painting: icon,
                        bg = "",
                        frame = "",
                        eq_p: equip_p,
                    }) => {
                        icon = `shipicon/${icon.toLowerCase()}.png`;
                        bg = `ui/bg${rarity - 1}.png`;
                        frame = `ui/frame_${rarity - 1}.png`;
                        return {
                            id, tw, cn, en, jp,
                            type, nationality, rarity, star, retro,
                            base, e1, e2, e3, e4, e5,
                            icon, bg, frame,
                            equip_p,
                        };
                    },
                    list = [], empty = {};
                for (let id in ship_data) list.push(destr(ship_data[id]));
                list = util.sorting(list, 'nationality', false);
                list = util.sorting(list, 'type', true);
                list = util.sorting(list, 'id', false);
                list = util.sorting(list, 'rarity', true);
                Object.assign(empty, list[0]);
                for (let key in empty) empty[key] = "";
                list.unshift(Object.assign(empty, {
                    id: "000000",
                    en: "remove",
                    tw: "移除",
                    cn: "移除",
                    jp: "除隊",
                    icon: ui_table.empty_item
                }));
                sortedShip = list;
                return true;
            }

            async function createSortEquipList() {
                let
                    destr = ({
                        id,
                        tw_name: tw, cn_name: cn, en_name: en, jp_name: jp,
                        type, nationality, rarity,
                        ship_type_forbidden: fb,
                        equip_limit: limit,
                        icon,
                        bg = "",
                        frame = "",
                        tech,
                    }) => {
                        icon = `equips/${icon}.png`;
                        if (rarity != 1) {
                            bg = `ui/bg${rarity - 1}.png`;
                            frame = `ui/frame_${rarity - 1}.png`;
                        } else {
                            bg = `ui/bg${rarity}.png`;
                            frame = `ui/frame_${rarity}.png`;
                        }
                        return {
                            id, tw, cn, en, jp,
                            type, nationality, rarity,
                            fb, limit,
                            icon, bg, frame,
                            tech,
                        };
                    },
                    list = [], empty = {};
                for (let id in equip_data) list.push(destr(equip_data[id]));
                list = util.sorting(list, "id", true);
                list = util.sorting(list, "type", true);
                list = util.sorting(list, "nationality", false);
                list = util.sorting(list, "rarity", true);
                Object.assign(empty, list[0]);
                for (let key in empty) empty[key] = "";
                list.unshift(Object.assign(empty, {
                    id: "666666",
                    en: "remove",
                    tw: "移除",
                    cn: "移除",
                    jp: "外す",
                    icon: ui_table.empty_item
                }));
                sortedEquip = list;
                return true;
            }

            //------------------------------
            async function addClickEventAndImg() {
                console.time("addClickEventAndImg");
                let
                    list = [
                        { type: "ship", list: sortedShip, onclick: app.setShipAndEquip },
                        { type: "equip", list: sortedEquip, onclick: app.setEquip },
                    ],
                    max = sortedShip.length + sortedEquip.length,
                    progress = _loading_.add_img,
                    is_iob = (() => {
                        if (!('IntersectionObserver' in window) ||
                            !('IntersectionObserverEntry' in window) ||
                            !('intersectionRatio' in window.IntersectionObserverEntry.prototype)) {
                            return false;
                        } else {
                            return true;
                        }
                    })();
                await addProgressBar("add_img", "add event & image", max, progress);
                for (let obj of list) {
                    let iob = is_iob ?
                        new IntersectionObserver(iconObserver, {
                            root: document.getElementById(`${obj.type}select`),
                            threshold: 0.5,
                        }) : false;
                    obj.list.forEach((item, index) => {
                        process(item, progress, obj.onclick, obj.type, index, iob);
                    });

                }
                console.timeEnd("addClickEventAndImg");

                function process(item, progress, onclick, type, index, iob) {
                    return setTimeout(() => {
                        let btn = document.getElementById(item.id),
                            icon = btn.querySelector(".icon"); // 1-layer: querySelector 12% slower / 3-layer: children 25% slower
                        if (!iob) {
                            icon.src = item.icon;
                        } else {
                            icon.setAttribute("img_data", `${type}_${index}`);
                            iob.observe(icon);
                        }
                        btn.onclick = function () { onclick(this); };
                        progress.update();
                    });
                }

                function iconObserver(entries, observer) {
                    entries.forEach(e => {
                        if (e.intersectionRatio > 0.25) {
                            loadIcon(e.target);
                            observer.unobserve(e.target);
                        }
                    });
                }

                function loadIcon(e) {
                    setTimeout(() => {
                        let [type, index] = e.getAttribute("img_data").split("_");
                        e.src = (type == "ship" ? sortedShip : sortedEquip)[index].icon;
                    });
                }
            }

            function createNewItem(data, progress) {
                return new Promise(resolve => {
                    setTimeout(() => {
                        let html = `
                            <button class="p-1 item_container" data-dismiss="modal" displayed="true" style="opacity: 1;" id="${data.id}">
                                <div class="container-fluid p-0 box">
                                    <div class="container-fluid icon_box">
                                        <img class="img-fluid bg" src="${data.bg}">
                                        <img class="img-fluid frame" src="${data.frame}">
                                        <img class="img-fluid icon" loading="lazy" src="">
                                    </div>
                                    <span class="item_name" name="name" tw="${data.tw}" cn="${data.cn}" en="${data.en}" jp="${data.jp}">
                                        ${data[language]}
                                    </span>
                                </div>
                            </button>
                        `;
                        progress.update();
                        resolve(html);
                    });
                });
            }

            async function createAllShip() {
                console.time("createAllShip");
                await addProgressBar("create_ship", "Generate Ships", sortedShip.length, _loading_.ship);
                let pos = document.querySelector("#shiplist"),
                    html = sortedShip.map(item => createNewItem(item, _loading_.ship));
                html = await Promise.all(html);
                pos.innerHTML = html.join("");
                console.timeEnd("createAllShip");
                return true;
            }

            async function createAllEquip() {
                console.time("createAllEquip");
                await addProgressBar("create_equip", "Generate Equips", sortedEquip.length, _loading_.equip);
                let pos = document.querySelector("#equiplist"),
                    html = sortedEquip.map(item => createNewItem(item, _loading_.equip));
                html = await Promise.all(html);
                pos.innerHTML = html.join("");
                console.timeEnd("createAllEquip");
                return true;
            }

            //------------------------------
            function srcToCacheID(src = "", type = "ship", reg = "") {
                return `${type == "ship" ? "shipicon" : "equips"}_${src.replace(reg, "$1")}`;
            }

            async function getMissingCache(no_cache_list) {
                let name = "getMissingCache",
                    promise_list = [],
                    progress = _loading_.missing_cache;
                console.time(name);
                await addProgressBar("fetch_missing", "Found some icons have no cache, fetch it...", no_cache_list.length, progress);
                no_cache_list.forEach(obj => {
                    promise_list.push(
                        fetchImageToDataURI(obj.src)
                            .then(data_url => {
                                obj.data_url = data_url;
                                progress.update();
                            })
                    );
                });
                await Promise.all(promise_list);
                console.timeEnd(name);
                return no_cache_list;
            }

            async function imgToDataURI() {
                let name = "imgToDataURI";
                console.time(name);
                let reg = /.*(?:equips|shipicon)\/([^\.]+).*/,
                    count = 0,
                    all_data = {};
                [sortedShip, sortedEquip].forEach((list, index) => {
                    list.forEach(obj => {
                        let id = srcToCacheID(obj.icon, index == 0 ? "ship" : "equip", reg);
                        if (all_data[id]) return;
                        all_data[id] = { src: obj.icon, id: id, data_url: "", };
                        count++;
                    });
                });
                let url_data = [],
                    promise_list = [],
                    progress = _loading_.cache_image;
                await addProgressBar("fetch_img", "Fetch Icons", count, progress);
                for (let key in all_data) {
                    let obj = all_data[key];
                    promise_list.push(
                        fetchImageToDataURI(obj.src).then(data_url => {
                            obj.data_url = data_url;
                            progress.update();
                        })
                    );
                    url_data.push(obj);
                }
                await Promise.all(promise_list);
                console.log(`fetch ${count} images`);
                console.timeEnd(name);
                return url_data;
            }

            async function fetchImageToDataURI(url = "", test = false) {
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
                let reg = /.*(?:equips|shipicon)\/([^\.]+).*/,
                    promise_list = [],
                    max = sortedShip.length + sortedEquip.length - 2,
                    progress = _loading_.load_cache,
                    no_cache_obj = [];
                await addProgressBar("load_cache", "Loading Cache", max, progress);
                for (let obj of sortedShip) {
                    if (obj.id == "000000") continue;
                    promise_list.push(
                        AFDB.getImgCache(srcToCacheID(obj.icon, "ship", reg))
                            .then(cache => replaceURLToDataURI(obj, cache, progress, "ship"))
                    );
                }
                for (let obj of sortedEquip) {
                    if (obj.id == "666666") continue;
                    promise_list.push(
                        AFDB.getImgCache(srcToCacheID(obj.icon, "equip", reg))
                            .then(cache => replaceURLToDataURI(obj, cache, progress, "equip"))
                    );
                }
                await Promise.all(promise_list);
                console.log(`set ${promise_list.length} src to image cache`);
                console.timeEnd(name);
                return no_cache_obj;

                function replaceURLToDataURI(obj, cache, progress, type) {
                    if (cache) {
                        obj.icon = cache.data_url;
                        obj.icon_cache = true;
                    } else {
                        obj.icon_cache = false;
                        console.log("cache not found", obj);
                        no_cache_obj.push({
                            src: obj.icon,
                            id: srcToCacheID(obj.icon, type, reg),
                            data_url: "",
                        });
                    }
                    progress.update();
                }
            }

            async function saveCacheData(db, db_name, cacheData) {
                const tx = db.transaction(db_name, "readwrite");
                const promise_list = cacheData.map(obj => { return tx.store.add(obj); });
                await Promise.all([...promise_list, tx.done]);
                return true;
            }

            //------------------------------
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

            function add_search_event() {
                let search_input = document.querySelector("#search_input");
                if (!search_input) return console.log("search_input not found");
                search_input.addEventListener("input", app.action.ship_name_search);
                let selship = $("#shipselect");
                //selship.on("shown.bs.modal", function () { $(this).find("[autofocus]").focus(); }); // autofocus to input
                selship.on("hide.bs.modal", () => search_input.value = ""); // empty text when modal fade
                console.log("add search event");
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
                window.addEventListener('resize', app.option.adjustEle);
                if ($(window).width() < 1300) app.option.adjustEle();
            }

            async function loadUserSetting() {
                //------------------------------
                // use localStorage now
                // if (document.cookie) app.util.removeAllCookie();
                //------------------------------

                let setting = {};
                for (let key in settingKey) {
                    let data = LS.userSetting.get(key);
                    setting[key] = data ? data : false;
                }

                let url = new URL(window.location.href),
                    fleetDataInURL = url.searchParams.get("AFLD"),
                    textbox = document.querySelector("#fleetdata");

                if (setting[settingKey.language]) {
                    document.getElementById(setting[settingKey.language]).click();
                } else {
                    app.option.setLanguage({ id: language });
                    LS.userSetting.set(settingKey.language, language);
                }

                if (fleetDataInURL) {
                    textbox.value = fleetDataInURL;
                    app.util.loadDataByID(true);
                } else {
                    if (setting[settingKey.fleetData]) {
                        textbox.value = setting.fleetData;
                        app.util.loadDataByID(true);
                    }
                }

                // data is string, so not Boolean(0) it's Boolean("0")
                if (setting[settingKey.allowDup] == 1) {
                    app.option.ship.allow_dup(document.getElementById("allow_dup_btn"));
                }

                if (setting[settingKey.thickFrame] == 1) {
                    let ele = document.getElementById("frame_setting");
                    setTimeout(() => app.option.frameSize(ele), 500);
                }

                if (setting[settingKey.layout]) {
                    let layoutSwitch = document.querySelector("#layout_setting");
                    layoutSwitch.textContent = layout_list[setting[settingKey.layout]];
                    app.option.switchLayout(layoutSwitch, true);
                }

                if (setting[settingKey.fleetEdit] == 1 || !setting[settingKey.fleetEdit]) {
                    document.querySelector("#display_fleet_op").click();
                }

                if (setting[settingKey.fleetBorder] == 1 || !setting[settingKey.fleetEdit]) {
                    document.querySelector("#display_fleet_border").click();
                }

                if (setting[settingKey.ownedItem]) {
                    app.action.loadOwnedSetting();
                }

                return true;
            }

            async function loadStorage() {
                let num = LS.fleetManager.fleetLength();
                if (num <= 0) return;
                fleet_in_storage = []; // empty storage
                for (let i = 1; i <= num; i++) {
                    let data = LS.fleetManager.getData(`fleet_index_${i}`);
                    if (!data) continue;
                    if (!data.name || !data.fleet) continue;
                    fleet_in_storage.push({ name: data.name, fleet: data.fleet, });
                    //console.log(data);
                }
                msg.normal.storage_found_fleets(fleet_in_storage.length);
                return true;
            }
        },
    },
    dynamicFleet = {
        getPos(ele) {
            let pos = ele.getAttribute("pos");
            return parseInt(pos.split(" ")[1], 10) - 1;
        },
        moveFleet(ele) {
            let pos = this.getPos(ele),
                direction = parseInt(ele.getAttribute("data"), 10),
                new_fleet = app.util.dumpID(true),
                temp = [];
            //console.log("before", JSON.stringify(current_fleet_dump, util.stringifyReplacer));
            if (direction < 0) {
                if (pos - 1 < 0) msg.error.too_high();
            } else {
                if (pos + 1 > fleetData.length - 1) msg.error.too_low();
            }
            direction = direction < 0 ? pos - 1 : pos + 1;
            temp = new_fleet.splice(pos, 1).flat();

            new_fleet.splice(direction, 0, temp);
            new_fleet = JSON.stringify(new_fleet);
            //console.log("after", current_fleet_dump);
            new_fleet = app.util.updateFleetDataBox(new_fleet); //with hash
            app.util.loadDataByID(true); //skip dump
            LS.userSetting.set(settingKey.fleetData, new_fleet);
            this.disableInvalidMoveButton();
        },
        copyFleet(ele) {
            if (fleetData.length >= maximumFleet) msg.error.maximum_fleet();
            let pos = this.getPos(ele),
                current_fleet_dump = app.util.dumpID(true),
                new_fleet = [];
            current_fleet_dump.forEach((fleet, index) => {
                if (index == pos) new_fleet.push(Object.assign([], fleet));
                new_fleet.push(fleet);
            });
            new_fleet = JSON.stringify(new_fleet);
            new_fleet = app.util.updateFleetDataBox(new_fleet);
            app.util.loadDataByID(true);
            LS.userSetting.set(settingKey.fleetData, new_fleet);
            msg.normal.fleet_copied(pos);
        },
        deleteFleet(ele) {
            let del_pos = this.getPos(ele),
                current_fleet_dump = app.util.dumpID(true),
                new_fleet = [];
            current_fleet_dump.forEach((fleet, index) => { if (index != del_pos) new_fleet.push(fleet); });
            if (!new_fleet.length) msg.error.delete_last();
            new_fleet = JSON.stringify(new_fleet);
            new_fleet = app.util.updateFleetDataBox(new_fleet);
            app.util.loadDataByID(true);
            LS.userSetting.set(settingKey.fleetData, new_fleet);
            msg.normal.fleet_removed(del_pos);
            this.disableInvalidMoveButton();
        },
        insertFleet(ele) {
            if (fleetData.length >= maximumFleet) msg.error.maximum_fleet();
            let data = ele.getAttribute("data").split(",").map(t => parseInt(t, 10));
            let formation = data[0],
                insert_position = this.getPos(ele),
                direction = data[1];
            if (insert_position < 0) msg.error.negative_position();
            if (![0, 1].includes(direction)) msg.error.unknown_direction();
            let current_fleet_dump = app.util.dumpID(true),
                new_insert_fleet = {},
                new_fleet = [];
            switch (formation) {
                case 1:
                    new_insert_fleet = app.fleet.newNormalFleet(0);
                    break;
                case 2:
                    new_insert_fleet = app.fleet.newSubFleet(0);
                    break;
                default:
                    throw Error(`unknown formation`);
            }
            //console.log(new_insert_fleet);
            new_insert_fleet = app.util.dumpFleet(new_insert_fleet);
            //console.log(`old fleet: ${JSON.stringify(current_fleet_dump, util.stringifyReplacer)}`);
            current_fleet_dump.forEach((fleet, index) => {
                if (direction == 0 && insert_position == index) new_fleet.push(new_insert_fleet);
                new_fleet.push(fleet);
                if (direction == 1 && insert_position == index) new_fleet.push(new_insert_fleet);
            });
            new_fleet = JSON.stringify(new_fleet);
            //console.log(`new fleet: ${new_fleet}`);
            new_fleet = app.util.updateFleetDataBox(new_fleet);
            app.util.loadDataByID(true);
            LS.userSetting.set(settingKey.fleetData, new_fleet);
            msg.normal.fleet_added(formation);
        },
        disableInvalidMoveButton() {
            let all = document.querySelectorAll(`[onclick^="dynamicFleet.moveFleet"],[onclick^="dynamicFleet.deleteFleet"]`),
                disable = document.querySelectorAll(
                    `[pos=" 1 "][onclick^="dynamicFleet.moveFleet"][data="-1"],` +
                    `[pos=" ${fleetData.length} "][onclick^="dynamicFleet.moveFleet"][data="1"]`
                );
            if (all.length) if (fleetData.length !== 1) { ena(all); } else { dis(all); }
            if (disable.length) dis(disable);
            //return;
            //limiter
            all = document.querySelectorAll(`[onclick^="dynamicFleet.copyFleet"],[onclick^="dynamicFleet.insertFleet"]`);
            if (fleetData.length < maximumFleet) {
                if (all.length) ena(all);
            } else if (fleetData.length >= maximumFleet) {
                if (all.length) dis(all);
            }
            function dis(target = []) {
                target.forEach(b => { b.setAttribute("disabled", true); b.style.opacity = 0; });
            }
            function ena(target = []) {
                target.forEach(b => { b.removeAttribute("disabled"); b.removeAttribute("style"); });
            }
        },
        _swap: {
            on: false,
            state: 0,
            a: false,
            b: false,
            is_ship: false,
        },
        async swapPos(btn, copy_ship = false) {
            let
                target_list = document.querySelectorAll(
                    [
                        "#options",
                        ".fleet_op_box",
                        "#empty_fleet",
                        "#url_area",
                        "#data_area",
                        "#reset_cache"
                    ].join(",")
                ),
                allShip = document.querySelectorAll(".ship_container"),
                disableClass = "disable_ele",
                sw = this._swap,
                set_wait = (_function, _interval = 100, _timeout = 0, _no_timeout = true) => {
                    if (_no_timeout) _timeout = 0;
                    if (_timeout > 0 && _no_timeout) _no_timeout = false;
                    document.addEventListener("click", checkClickTarget);  // detect is user click ship or not
                    return new Promise((resolve, reject) => {
                        let id = setInterval(() => {
                            if (_function()) {
                                clearInterval(id);
                                document.removeEventListener("click", checkClickTarget);
                                return resolve(true);
                            }
                            if (_timeout < 0 || !sw.is_ship) {
                                clearInterval(id);
                                document.removeEventListener("click", checkClickTarget);
                                let text = [];
                                if (_timeout < 0) text.push("swap timeout");
                                if (!sw.is_ship) text.push("target is not ship");
                                return reject(text.join(", "));
                            }
                            if (_timeout >= 0 && !_no_timeout) _timeout -= _interval;
                        }, _interval);
                    });
                },
                checkClickTarget = (event) => {
                    if (event.target == btn) {
                        sw.is_ship = true;  // trigger by start swap, bypass
                    } else {
                        sw.is_ship = searchParent({ _elem: event.target }) ? true : false;
                    }

                    function searchParent({
                        _attr = "data-target",
                        _value = "#shipselect",
                        _elem = document,
                        _max_rase = 3,
                    }) {
                        if (!_elem.ELEMENT_NODE) {
                            return false;
                        } else {
                            let __find = false,
                                __up_layer = _elem,
                                __count = 0;
                            if (!__up_layer.getAttribute) return false;
                            while (__count <= _max_rase && !__find && __up_layer) {
                                if (__up_layer.getAttribute(_attr) == _value) {
                                    __find = __up_layer;
                                } else {
                                    let children = [...__up_layer.children].find(e => e.getAttribute(_attr) == _value);
                                    if (children && __up_layer.className != "ship_container") {
                                        __find = children;
                                    }
                                }
                                if (__find || !(__up_layer.parentElement)) break;
                                __up_layer = __up_layer.parentElement;
                                __count++;
                            }
                            return __find ? __find : false;
                        }
                    }
                };

            otherButtonAction(disableElement);
            shipButtonAction(disableNonShip);

            // start swap
            sw.on = true;
            sw.state = 1;
            sw.is_ship = true;

            try {
                // select ship you want to swap
                await set_wait(() => Boolean(sw.a));
                sw.state++;
                if (!(sw.a instanceof Array)) throw Error("unknown position");

                // disable other side
                shipButtonAction(disableOtherSide);

                // select target
                await set_wait(() => Boolean(sw.b));
                if (!(sw.b instanceof Array)) throw Error("unknown position");

                // swap ship data
                if (!copy_ship) await swapShip();
                if (copy_ship) await copyShip();

                // save data
                LS.userSetting.set(settingKey.fleetData, app.util.dumpID());

                // check skill again
                app.checkFleetShipSkill(sw.a[0]);
                app.checkFleetShipSkill(sw.b[0]);
            } catch (e) {
                console.log(e);
            } finally {
                // re-enable all button & reset state
                reset();
            }

            function reset() {
                shipButtonAction(enableElement);
                otherButtonAction(enableElement);
                dynamicFleet._swap = {
                    on: false,
                    state: 0,
                    a: false,
                    b: false,
                    is_ship: false,
                };
            }

            async function copyShip() {
                let
                    a = fleetData[sw.a[0]][sideTable[sw.a[1]]][sw.a[2]].item,
                    b = fleetData[sw.b[0]][sideTable[sw.b[1]]][sw.b[2]].item,
                    skill_a = a[0].property.slot_skill;

                a.forEach((item, item_index) => {
                    Object.keys(item.property).forEach(key => {
                        if (key != "ship_pos" && key != "slot_skill") {
                            b[item_index].property[key] = a[item_index].property[key];
                        }
                    });
                });
                if (skill_a) b[0].property.slot_skill = Object.assign({}, skill_a);
                msg.normal.ship_copied(a);
                return true;
            }

            async function swapShip() {
                let temp,
                    a = fleetData[sw.a[0]][sideTable[sw.a[1]]][sw.a[2]].item,
                    b = fleetData[sw.b[0]][sideTable[sw.b[1]]][sw.b[2]].item,
                    skill_a = a[0].property.slot_skill,
                    skill_b = b[0].property.slot_skill;

                a.forEach((item, item_index) => {
                    Object.keys(item.property).forEach(key => {
                        if (key != "ship_pos" && key != "slot_skill") {
                            temp = a[item_index].property[key];
                            a[item_index].property[key] = b[item_index].property[key];
                            b[item_index].property[key] = temp;
                        }
                    });
                });

                if (skill_a && skill_b) {
                    // swap skill
                    temp = Object.assign({}, skill_a);
                    a[0].property.slot_skill = Object.assign({}, skill_b);
                    b[0].property.slot_skill = temp;
                } else {
                    // remove residual skill
                    if (skill_a) {
                        b[0].property.slot_skill = Object.assign({}, skill_a);
                        delete a[0].property.slot_skill;
                    } else if (skill_b) {
                        a[0].property.slot_skill = Object.assign({}, skill_b);
                        delete b[0].property.slot_skill;
                    }
                }
                return true;
            }

            function disableOtherSide(ele, index) {
                if (index == 0) if (ele.name.split("_")[1] != sw.a[1]) disableElement(ele);
            }

            function otherButtonAction(_function) {
                target_list.forEach(e => _function(e));
            }

            function shipButtonAction(_function) {
                allShip.forEach(ship => {
                    [...ship.children].forEach((ele, index) => _function(ele, index));
                });
            }

            function disableToggle(ele) {
                if (ele.getAttribute("data-toggle")) ele.setAttribute("data-toggle", "false");
            }

            function enableToggle(ele) {
                if (ele.getAttribute("data-toggle")) ele.setAttribute("data-toggle", "modal");
            }

            function disableNonShip(ele, index) {
                if (index > 0) disableElement(ele);
                disableToggle(ele);
            }

            function disableElement(ele) {
                ele.classList.add(disableClass);
            }

            function enableElement(ele) {
                ele.classList.remove(disableClass);
                enableToggle(ele);
            }
        },
    };

//----------------------------------------------------------
const
    maximumFleet = 30,
    appClassData = {
        app_box: {
            h: "app_box d-flex flex-column w-100 m-auto", // container mw-100 / d-flex flex-column w-100 m-auto
            v: "app_box row justify-content-center py-1 px-5 m-0",
            v2: "app_box d-table justify-content-center m-auto"
        },
        fleet_box_o: {
            h: "fleet_box_o d-grid justify-content-center",
            v: "fleet_box_o d-grid",
            v2: "fleet_box_o flex-row"
        },
        fleet_box_i: {
            h: "fleet_box_i row m-2",
            v: "fleet_box_i col p-0", // m-2
            v2: "fleet_box_i col p-0" // m-2
        }
    },
    layout_list = {
        h: "Horizontal",
        v: "Vertical 1",
        v2: "Vertical 2",
        "Horizontal": "h",
        "Vertical 1": "v",
        "Vertical 2": "v2",
    },
    formation = {
        v4: [1, 1, 1, 1, 2],
        v5: [1],
    },
    sideTable = {
        "0": "front",
        "1": "back",
        "2": "sub",
    },
    ui_table = {
        empty_item: "ui/empty.png",
        empty_disable: "ui/icon_back.png",
        langs: ["tw", "cn", "en", "jp"],
        copy_ship: ["tw", "cn", "en", "jp", "icon", "frame", "bg", "id", "type", "rarity", "star", "base", "equip_p", "nationality"],
        copy_equip: ["tw", "cn", "en", "jp", "icon", "frame", "bg", "id", "limit", "rarity", "tech", "nationality"],
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
    msg_color = {
        red: "text-danger",
        green: "text-success",
    },
    _loading_ = {
        ship: {},
        equip: {},
        cache_image: {},
        load_cache: {},
        add_img: {},
        missing_cache: {},
    },
    posTable = { BS: { 0: "2", 1: "1", 2: "3" }, F: { 0: "3", 1: "2", 2: "1" }, },
    posTable_r = { BS: { 2: "0", 1: "1", 3: "2" }, F: { 3: "0", 2: "1", 1: "2" }, },
    // ship
    type_front = new Set([1, 2, 3, 18, 19]),
    type_back = new Set([4, 5, 6, 7, 10, 12, 13]),
    type_sub = new Set([8, 17]),
    other_nation = new Set([97, 98]), // 97:META, 98:Bulin, 100+:collab
    collab_nation = new Set([101, 103, 104, 105, 106, 107, 108, 109, 110]),
    other_front = new Set([19]),
    other_back = new Set([10]),
    other_sub = new Set([0]),
    // equip
    addQuantityList = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13,]),
    eq_other_nation = other_nation,
    eq_collab_nation = collab_nation,
    eq_nation = new Set(lan_eq_nation.map(o => parseInt(o.id, 10))),
    eq_type = new Set(lan_eq_type.map(o => parseInt(o.id, 10))),
    eq_rarity = new Set(lan_eq_rarity.map(o => parseInt(o, 10))),
    eq_tier = new Set(lan_eq_tier.map(o => parseInt(o.id, 10))),
    // db
    db_name = "image_cache",
    db_ver = 14,
    // dump data
    ALF_version = 0.05;

let
    c_fleet = "", c_side = "", c_pos = "", c_item = "",
    c_ships = [], c_formation = [],
    retrofit_only = true,
    fleetData = app.fleet.buildFleet(formation.v5),
    sortedShip = [],
    sortedEquip = [],
    fleet_in_storage = [],
    eqck = false,
    language = "en";

//----------------------------------------------------------
Vue.component("item-container", {
    props: ["item", "lang"],
    template: `
        <button class="p-1 item_container" onclick="app.util.setCurrent(this)" data-toggle="modal"
          v-bind:name="item.id"
          v-bind:pos="item.property.pos"
          v-bind:data-target="item.property.target"
          >
            <div class="container-fluid p-0 box">
              <div class="icon_box">
                <img class="img-fluid bg" v-bind:src="item.property.bg">
                <img class="img-fluid frame" v-bind:src="item.property.frame">
                <img class="img-fluid icon" v-bind:src="item.property.icon">
                <span class="itemq text_shadow" v-text="item.property.quantity" v-if="item.property.quantity"></span>
                <span class="ship_pos2" v-text="item.property.ship_pos" v-if="item.property.ship_pos"></span>
                <span class="ship_level" v-text="item.property.ship_level" v-if="item.property.bg && item.property.ship_level > 0"></span>
                <span class="equip_level" v-text="'+'+item.property.equip_level" v-if="item.property.bg && item.property.equip_level > 0"></span>
                <span class="equip_proficiency text_shadow" v-text="item.property.proficiency+'%'" v-if="item.property.quantity && item.property.proficiency" v-bind:style="item.property.style"></span>
              </div>
              <span class="item_name" v-text="item.property[lang]"></span>
            </div>
        </button>
    `
});

//col
Vue.component("ship-container", {
    props: ["ship", "lang"],
    template: `
        <div class="ship_container">
            <item-container
                v-for="item in ship.item"
                v-bind:key="item.id"
                v-bind:item="item"
                v-bind:lang="lang"
            ></item-container>
        </div>
    `
});

const
    fleet_btn_style = { // fleet_op_hide
        normal: `btn btn-outline-secondary btn-sm fleet_op_btn p-0`,
        yellow: `btn btn-outline-warning btn-sm fleet_op_btn p-0 w-50`,
        text: `text-monospace text-center w-100 d-flex align-items-center justify-content-center border`,
        copy: `btn btn-outline-success btn-sm w-75 mx-1 my-auto text-truncate text-monospace p-1 text-nowrap`,
        del: `btn btn-outline-danger btn-sm mr-0 ml-auto my-auto fleet_op_btn px-2 py-0`,
    },
    path = (target = "") => { return `dynamicFleet.${target}(this)`; },
    action = {
        insert: path(dynamicFleet.insertFleet.name),
        move: path(dynamicFleet.moveFleet.name),
        copy: path(dynamicFleet.copyFleet.name),
        delete: path(dynamicFleet.deleteFleet.name),
        swap: path(dynamicFleet.swapPos.name),
        swap_copy: path(dynamicFleet.swapPos.name),
    };
Vue.component("fleet-container", {
    props: ["fleet", "lang", "show_op", "class_data", "ui_text"],
    template: `
        <div v-bind:class="class_data.fleet_box_o">
            <div class="fleet_op_box" v-if="show_op">
                <div class="d-flex line-5-item">
                    <div class="w-25 text-monospace text-center m-auto fleet_name" v-text="fleet.id">Fleet_ID</div>
                    <button class="${fleet_btn_style.copy}" v-bind:pos="fleet.id" onclick="${action.copy}" v-text="ui_text.copy_fleet[lang]">CopyFleet</button>
                </div>
                <div class="d-flex line-5-item">
                    <div class="d-flex btn-group w-100 m-auto">
                        <button class="${fleet_btn_style.yellow}" v-bind:pos="fleet.id" data="1,0" onclick="${action.insert}">⮝</button>
                        <div class="${fleet_btn_style.text} border-warning" v-text="ui_text.normal_fleet[lang]">Normal</div>
                        <button class="${fleet_btn_style.yellow}" v-bind:pos="fleet.id" data="1,1" onclick="${action.insert}">⮟</button>
                    </div>
                </div>
                <div class="d-flex line-5-item">
                    <div class="d-flex btn-group w-100 mx-1 my-auto">
                        <button class="${fleet_btn_style.normal} w-50 w-border-right" v-bind:pos="fleet.id" onclick="${action.move}" data="-1">⮝</button>
                        <div class="${fleet_btn_style.normal} w-75" onclick="${action.swap}" v-text="ui_text.swap_ship[lang]">Swap</div>
                        <button class="${fleet_btn_style.normal} w-50 border-left" v-bind:pos="fleet.id" onclick="${action.move}" data="1">⮟</button>
                    </div>
                </div>
                <div class="d-flex line-5-item">
                    <div class="d-flex btn-group w-100 m-auto">
                        <button class="${fleet_btn_style.yellow}" v-bind:pos="fleet.id" data="2,0" onclick="${action.insert}">⮝</button>
                        <div class="${fleet_btn_style.text} border-warning" v-text="ui_text.sub_fleet[lang]">Sub</div>
                        <button class="${fleet_btn_style.yellow}" v-bind:pos="fleet.id" data="2,1" onclick="${action.insert}">⮟</button>
                    </div>
                </div>
                <div class="d-flex line-5-item">
                    <button class="${fleet_btn_style.copy}" v-bind:pos="fleet.id" onclick="${action.swap_copy.replace("this", "this, true")}" v-text="ui_text.copy_ship[lang]">CopyShip</button>
                    <button class="${fleet_btn_style.del}" v-bind:pos="fleet.id" onclick="${action.delete}">✖</button>
                </div>
            </div>
            <div v-bind:class="class_data.fleet_box_i">
                <div class="flex-col fleet_side_box" v-if="fleet.back">
                    <ship-container
                        v-for="back in fleet.back"
                        v-bind:key="back.id"
                        v-bind:ship="back"
                        v-bind:name="back.id"
                        v-bind:lang="lang"
                    ></ship-container>
                </div>
                <div class="flex-col fleet_side_box" v-if="fleet.front">
                    <ship-container
                        v-for="front in fleet.front"
                        v-bind:key="front.id"
                        v-bind:ship="front"
                        v-bind:name="front.id"
                        v-bind:lang="lang"
                    ></ship-container>
                </div>
                <div class="flex-col fleet_side_box" v-if="fleet.sub">
                    <ship-container
                        v-for="sub in fleet.sub"
                        v-bind:key="sub.id"
                        v-bind:ship="sub"
                        v-bind:name="sub.id"
                        v-bind:lang="lang"
                    ></ship-container>
                </div>
            </div>
        </div>
    `,
});

//----------------------------------------------------------
const
    filter_btn_class = "btn btn-outline-secondary line-5-item py-2 ml-0 font-weight-bold text-truncate filter-btn",
    filter_btn_template = `<button type="button" onclick="app.util.updateSetting(this)" class="${filter_btn_class}"></button>`,
    filter_btn_template_4item = filter_btn_template.replace("line-5-item", "line-4-item"),
    filter_btn_template_6item = filter_btn_template.replace("line-5-item", "line-6-item");

//----------------------------------------------------------
Vue.component("ship-nation-button", { props: ['nation', "lang"], template: filter_btn_template_6item });
Vue.component("ship-type-button", { props: ['type', "lang"], template: filter_btn_template });
Vue.component("ship-rarity-button", { props: ['rarity', "lang"], template: filter_btn_template });

//----------------------------------------------------------
Vue.component("equip-nation-button", { props: ['nation', "lang"], template: filter_btn_template_6item });
Vue.component("equip-type-button", { props: ['type', "lang"], template: filter_btn_template });
Vue.component("equip-rarity-button", { props: ['rarity', "lang"], template: filter_btn_template });
Vue.component("equip-tier-button", { props: ['tier', "lang"], template: filter_btn_template_4item });

//----------------------------------------------------------
app.initialize();

//----------------------------------------------------------
const
    ALF = new Vue({
        el: "#AzurLaneFleetApp",
        data: {
            fleets: fleetData,
            lang: language,
            show_op: false,
            class_data: {
                app_box: appClassData.app_box.h,
                fleet_box_o: appClassData.fleet_box_o.h,
                fleet_box_i: appClassData.fleet_box_i.h,
            },
            ui_text: vue_ui_text
        },
    }),
    shipSelect = new Vue({
        el: "#shipselect",
        data: {
            nation: lan_ship_nation,
            type: lan_ship_type,
            rarity: lan_ship_rarity,
            //shiplist: sorted_ship_data,
            lang: language
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
            lang: language,
        }
    });

//----------------------------------------------------------
function buildEquipSelectOption() {
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
    setTimeout(() => window.buildEquipSelectOption = null);
}

function buildShipSelectOption() {
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
    setTimeout(() => window.buildShipSelectOption = null);
}



