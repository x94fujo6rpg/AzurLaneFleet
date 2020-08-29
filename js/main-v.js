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
            <div class="container-fluid p-0">
              <div class="icon_box">
                <img class="img-fluid icon" v-bind:src="item.property.icon">
                <img class="img-fluid bg" v-bind:src="item.property.bg">
                <img class="img-fluid frame" v-bind:src="item.property.frame">
              </div>
              <span class="d-flex justify-content-center text-truncate item_name"
                v-text="item.property[lang]"
              ></span>
            </div>
        </button>
    `,
});


//class="container-fluid p-1 bg-transparent border-0" 

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
      onclick="shipDisplay(this)"
      ></button>
  `
})

Vue.component("ship-type-button", {
  props: ['type', "lang"],
  template: `
    <button
      type="button"
      class="btn btn-outline-light btn-sm"
      onclick="shipDisplay(this)"
      ></button>
  `
})

Vue.component("ship-rarity-button", {
  props: ['rarity', "lang"],
  template: `
    <button
      type="button"
      class="btn btn-outline-light btn-sm"
      onclick="shipDisplay(this)"
      ></button>
  `
})

Vue.component("ship-list-button", {
  props: ["shiplist", "item", "lang"],
  template: `
  <button
    class="p-1 item_container"

    onclick="setShipAndEquip(this)"
    data-dismiss="modal"

    v-bind:id="item.id"
    >
    <div class="container-fluid p-0">
        <div class="icon_box row">
          <img class="img-fluid icon" v-bind:src="item.icon">
          <img class="img-fluid bg" v-bind:src="item.bg">
          <img class="img-fluid frame" v-bind:src="item.frame">
        </div>
        <span class="row d-flex justify-content-center text-truncate item_name"
          v-text="item[lang]"
        ></span>
    </div>
  </button>
  `
})

Vue.component("equip-list-button", {
  props: ["equips", "item", "lang"],
  template: `
  <button
    class="p-1 item_container"
    onclick="setShipAndEquip(this)"
    data-dismiss="modal"
    v-bind:id="item.id"
    >
    <div class="container-fluid p-0">
        <div class="container-fluid icon_box">
          <img class="img-fluid bg" v-bind:src="item.bg">
          <img class="img-fluid frame" v-bind:src="item.frame">
          <img class="img-fluid eqicon" v-bind:src="item.icon">
        </div>
        <span class="d-flex justify-content-center text-truncate item_name"
          v-text="item[lang]"
        ></span>
    </div>
  </button>
  `
})

let [ship_nation, ship_type, ship_rarity] = buildShipSelectOption();
let c_fleet = "";
let c_side = "";
let c_pos = "";
let c_item = "";
let nation_list = [];
let type_list = [];
let rarity_list = [];
let retro = true;
let fleet_data = buildFleet();
let sorted_ship_data = [];
let lan = "";

let sorted_equip_data = [];

initial();

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

function initial() {
  lan = "cn";

  /*-------------------------------------------------------
  creat sortred ship list
  -------------------------------------------------------*/
  console.time("sortship");
  let newlist = [];
  let pos = 0;
  let empty = {};
  let parseData = {
    id: "uni_id",
    cn: "cn_name",
    en: "en_name",
    jp: "jp_name",
    type: "type",
    nationality: "nationality",
    rarity: "rarity",
    star: "star",
    retro: "retro",
    base: "base_list",
    e1: "equip_1",
    e2: "equip_2",
    e3: "equip_3",
    e4: "equip_4",
    e5: "equip_5",
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
  /*-------------------------------------------------------
  creat sortred equip list
  -------------------------------------------------------*/
  console.time("sortequip");
  newlist = [];
  pos = 0;
  parseData = {
    id: "id",
    cn: "cn_name",
    en: "en_name",
    jp: "jp_name",
    type: "type",
    nationality: "nationality",
    rarity: "rarity",
    bf: "ship_type_forbidden",
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
    if (pos === 0){
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
  sorted_equip_data = Object.assign([],newlist);
  console.timeEnd("sortequip");
}

function setlang(item) {
  ALF.lang = item.id;
  shipSelect.lang = item.id;
}

function setShipAndEquip(item) {
  let side = (c_side === "0") ? "front_ship" : "back_ship";
  let shipInApp = fleet_data[c_fleet][side][c_pos];
  //console.log(`fleet_data[${c_fleet}].${side}[${c_pos}]`);
  let shipInList = sorted_ship_data.find((ele) => {
    if (ele.id === item.id) {
      return Object.assign({}, ele);
    }
  });
  let app_item = shipInApp.item;
  let shipCopyList = ["cn", "en", "jp", "icon", "frame", "bg"];

  for (let index in app_item) {
    app_item = shipInApp.item[index].property;
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
    };

    if (item.id === "000000") {
      if (index === "0") {
        //app_item.cn = "船"; app_item.en = "Ship"; app_item.jp = "キャラ";
        shipCopyList.forEach(key => app_item[key] = "");
        app_item.icon = shipInList.icon;
      } else {
        shipCopyList.forEach(key => app_item[key] = "");
        app_item.icon = "ui/icon_back.png";
        app_item.fb = [];
        app_item.type = [];
      }
    } else {
      if (index === "0") {
        shipCopyList.forEach(key => app_item[key] = shipInList[key]);
      } else {
        let typelist = shipInList[`e${index}`];
        app_item.type = typelist;
        app_item.icon = "ui/empty.png";
        let typestr_cn = "";
        let typestr_en = "";
        let typestr_jp = "";
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
        app_item.cn = typestr_cn;
        app_item.en = typestr_en;
        app_item.jp = typestr_jp;
        app_item.target = "#equipselect";
      }
    }
  }
}

function indexInObj(obj) {
  let new_list = [];
  for (let index in obj) {
    new_list.push(index);
  }
  return new_list;
}

function setCurrent(item) {
  let pos = item.name;
  [c_fleet, c_side, c_pos, c_item] = [pos[1], pos[2], pos[3], pos[4]];
  //console.log(pos);
  if (c_side === "0") {
    ship_nation.forEach(item => {
      item.display = true;
    });
  } else {
    ship_nation.forEach(item => item.display = false);
  }
}

function sorting(arr, key, descen) {
  if (descen) {
    arr.sort((a, b) => { return a[key] < b[key] ? 1 : -1; });
  } else {
    arr.sort((a, b) => { return a[key] > b[key] ? 1 : -1; });
  }
  return arr;
}

function buildFleet() {
  let ship_data = [];
  for (let i = 0; i < 6; i++) {
    let item = [];
    if (i === 0) {
      let ship = {
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
      };
      item = ship;
    } else {
      let eq = {
        icon: "ui/icon_back.png",
        type: [],
        star: "",
        rarity: "",
        en: "",
        cn: "",
        jp: "",
        target: "",
        bg: "",
        frame: "",
        fb: []
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
  return newfleet;
}

function buildShipSelectOption() {
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
    item.display = "false";
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
  ];
  type.forEach((item) => {
    let newid = `ship_type_${item.id}`;
    item.name = newid;
    item.display = "display:none";
  });

  let rarity = [
    { id: 2, cn: "普通", en: "Normal", jp: "N" },
    { id: 3, cn: "稀有", en: "Rare", jp: "R" },
    { id: 4, cn: "精銳", en: "Elite", jp: "SR" },
    { id: 5, cn: "超稀有", en: "SuperRare", jp: "SSR" },
    { id: 6, cn: "海上傳奇", en: "Decisive", jp: "UR" },
  ];
  rarity.forEach((item) => {
    let newid = `ship_nation_${item.id}`;
    item.name = newid;
  });
  return [nation, type, rarity];
}