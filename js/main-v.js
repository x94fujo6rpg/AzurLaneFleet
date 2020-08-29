Vue.component("item-container", {
  props: ["item", "lang"],
  template: `
    <button
      class="container-fluid p-1 bg-transparent border-0" 
      v-bind:name="item.id"
      v-bind:pos="item.property.pos"
      onclick="setCurrent(this)"
      data-toggle="modal"
      v-bind:data-target="item.property.target"
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
  `
});

Vue.component("ship-container", {
  props: ["ship", "lang"],
  template: `
    <div class="d-flex flex-row">
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
    <div class="container-fluid row m-0 p-3"">
      <div class="col">
          <ship-container 
              v-for="back_ship in fleet.back_ship" 
              v-bind:key="back_ship.id" 
              v-bind:ship="back_ship"
              v-bind:name="back_ship.id"
              v-bind:lang="lang"
          ></ship-container>
      </div>
      <div class="col">
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
});

Vue.component("ship-type-button", {
  props: ['type', "lang"],
  template: `
    <button
      type="button"
      class="btn btn-outline-light btn-sm"
      onclick="shipDisplay(this)"
    ></button>
  `
});

Vue.component("ship-rarity-button", {
  props: ['rarity', "lang"],
  template: `
    <button
      type="button"
      class="btn btn-outline-light btn-sm"
      onclick="shipDisplay(this)"
    ></button>
  `
});

Vue.component("ship-list-button", {
  props: ["shiplist", "item", "lang"],
  template: `
  <button
    class="p-1 item_container" 
    style="width:100px"
    onclick="setShipAndEquip(this)"
    data-dismiss="modal"
    v-bind:id="item.id"
  >
    <div class="container-fluid p-0">
        <div class="icon_box">
          <img class="img-fluid icon" v-bind:src="item.icon" loading="lazy">
          <img class="img-fluid bg" v-bind:src="item.bg" loading="lazy">
          <img class="img-fluid frame" v-bind:src="item.frame" loading="lazy">
        </div>
        <span class="d-flex justify-content-center text-truncate item_name"
          v-text="item[lang]"
        ></span>
    </div>
  </button>
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
let retro = true;
let fleet_data = buildFleet();
let sorted_ship_data = [];
let lan = "";

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

function initial() {
  lan = "cn";
  let newlist = [];
  let pos = 0;
  let emptyship = {};
  for (let index in ship_data) {
    let item = Object.assign({}, ship_data[index]);
    let newitem = {};
    let parseData = {
      id: "uni_id",
      cn: "cn_name",en: "en_name",jp: "jp_name",
      type: "type",
      nationality: "nationality",
      rarity: "rarity",
      star: "star"
    };
    for (let index in parseData) {
      newitem[index] = item[parseData[index]];
    }
    newitem.icon = `shipicon/${item.painting.toLowerCase()}.png`;
    newitem.bg = `ui/bg${item.rarity - 1}.png`;
    newitem.frame = `ui/frame_${item.rarity - 1}.png`;
    if (pos === 0) {
      emptyship = Object.assign({}, newitem);
      for (let key in emptyship) {
        emptyship[key] = "";
      }
      emptyship.id = "000000";
      emptyship.en = "removeship";
      emptyship.cn = "移除";
      emptyship.jp = "除隊";
      emptyship.icon = "ui/empty.png";
    }
    newlist.push(newitem);
    pos++;
  }
  newlist = sorting(newlist, 'type', true);
  newlist = sorting(newlist, 'nationality', true);
  newlist = sorting(newlist, 'rarity', true);
  console.log(emptyship);
  newlist.unshift(emptyship);
  sorted_ship_data = Object.assign([], newlist);
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
  let app_item = shipInApp.item[0].property;
  let copyList = ["cn", "en", "jp", "icon", "frame", "bg"];
  if (item.id === "000000") {
    app_item.cn = "船";
    app_item.en = "Ship";
    app_item.jp = "キャラ";
    app_item.icon = shipInList.icon;
    app_item.frame = "";
    app_item.bg = "";
  } else {
    copyList.forEach(key => app_item[key] = shipInList[key]);
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
        en: "Ship",
        cn: "船",
        jp: "キャラ",
        target: "#shipselect",
        bg: "",
        frame: "",
      };
      item = ship;
    } else {
      let eq = {
        icon: "ui/icon_back.png",
        type: "",
        star: "",
        rarity: "",
        en: "Equip",
        cn: "裝備",
        jp: "装備",
        target: "#eqipselect",
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

