var shipsetting = {};
var showshiplist = {};
var hidelist = [];

var current_shipid = '';
var current_shiprar = '';
var newshipid = '';
var fleetpos = '';

var current_equipid = '';
var current_equiptype = '';

$(document).ready(
    function() {
        creatallships();
        creatallequips();
        shipdisplay();
        $(".btn-outline-primary").click(
            function() {
                $(this).button('toggle');
                shipdisplay();
            }
        );
    }
);

function setshipbutton() {
    if (fleetpos === "front") {
        document.getElementById('ffs').style.display = 'inline';
        document.getElementById('fbs').style.display = 'none';
    } else {
        document.getElementById('ffs').style.display = 'none';
        document.getElementById('fbs').style.display = 'inline';
    };
};

function setcurrent(item) {
    if (item.className === "shipicon") {
        current_shipid = String(item.id);
        fleetpos = item.getAttribute("limit");
        shipdisplay();
        setshipbutton();
    } else {
        current_equipid = String(item.id);
        current_equiptype = item.getAttribute('eqtype');
        equipdisplay(item);
    };
};

function setnewship(id) {
    newshipid = String(id);
};

function sEquipButton(item, status) {
    var allbutton = item.querySelectorAll('.equip');
    allbutton.forEach(item => {
        item.textContent = '';
        item.style = '';
    });

    if (status) {
        allbutton.forEach(item => {
            item.disabled = false;
            var pos = 'equip_' + item.getAttribute('pos');
            var ship = ship_data[newshipid];
            item.setAttribute('eqtype', ship[pos]);
            item.setAttribute('stype', ship.type);
        });
    } else {
        allbutton.forEach(item => item.disabled = true);
    };
};

function updateship(id) {
    var button = document.getElementById(current_shipid);
    var shipdiv = document.getElementById(current_shipid.slice(0, 3));
    button.textContent = '';
    setnewship(id);
    if (id === 0) {
        button.setAttribute('style', 'background-color:gray;');
        sEquipButton(shipdiv, false);
        return;
    } else {
        sEquipButton(shipdiv, true);
    };
    var copyimg = document.getElementById(newshipid).firstChild.cloneNode(true);
    button.appendChild(copyimg);
    var color = document.getElementById(newshipid).style.backgroundColor;
    button.setAttribute('style', 'background-color:' + color + ';');
};

function updateEquip(item) {
    var button = document.getElementById(current_equipid);
    button.textContent = '';
    if (item.id === 0) {
        button.setAttribute('style', 'background-color:rgb(30.8%, 30.8%, 30.8%);');
        return;
    };
    var copyeq = item.firstChild.cloneNode(true);
    button.appendChild(copyeq);
    var color = item.style.backgroundColor;
    button.setAttribute('style', 'background-color:' + color + ';');
};

function getcolor(rarity) {
    var color = '';
    switch (rarity) {
        case 1:
            color = 'lightgray';
            break;
        case 2:
            color = 'lightgray';
            break;
        case 3:
            color = 'lightblue';
            break;
        case 4:
            color = 'Plum';
            break;
        case 5:
            color = 'Gold';
            break;
        case 6:
            color = 'OrangeRed';
            break;
        default:
            break;
    };
    return color;
};

function createmptyship() {
    var shiplist = document.getElementById('shiplist');
    var newship = document.createElement('button');
    newship.setAttribute('type', 'button');
    newship.setAttribute('class', 'shipicon');
    newship.setAttribute('id', '0');
    newship.setAttribute('style', 'display:inline;');
    newship.setAttribute('data-dismiss', 'modal');
    newship.setAttribute('onclick', 'updateship(0)')

    var newicon = document.createElement('img');
    var icon = 'shipicon/empty.jpg';
    newicon.setAttribute('src', icon);
    newicon.setAttribute('class', 'rounded img-fluid');
    newship.appendChild(newicon);
    shiplist.appendChild(newship);
};

function creatallships() {
    createmptyship();
    for (var index in ship_data) {
        var ship = ship_data[index];
        var shiplist = document.getElementById('shiplist');
        var newship = document.createElement('button');
        newship.setAttribute('type', 'button');
        newship.setAttribute('class', 'shipicon');
        newship.setAttribute('id', index);
        newship.setAttribute('style', 'display:inline;');
        newship.setAttribute('data-dismiss', 'modal');
        newship.setAttribute('onclick', 'updateship(' + index + ')');

        var color = getcolor(ship.rarity);
        newship.setAttribute('style', 'background-color:' + color + ';');

        var icon = 'shipicon/' + ship.painting.toLowerCase() + '.png';
        var newicon = document.createElement('img');
        newicon.setAttribute('src', icon);
        newicon.setAttribute('class', 'img-rounded img-fluid');

        newship.appendChild(newicon);
        shiplist.appendChild(newship);
    };
};


function creatallequips() {
    for (var index in equip_data) {
        var equip = equip_data[index];
        var equiplist = document.getElementById('equiplist');
        var newequip = document.createElement('button');
        newequip.setAttribute('type', 'button');
        newequip.setAttribute('class', 'equip');
        newequip.setAttribute('id', index);
        newequip.setAttribute('style', 'display:inline;');
        newequip.setAttribute('data-dismiss', 'modal');
        newequip.setAttribute('onclick', 'updateEquip(this)');

        var color = getcolor(equip.rarity);
        newequip.setAttribute('style', 'background-color:' + color + ';');

        var icon = 'equips/' + String(equip.icon) + '.png';
        var newicon = document.createElement('img');
        newicon.setAttribute('src', icon);
        newicon.setAttribute('class', 'img-rounded img-fluid h-100');

        newequip.appendChild(newicon);
        equiplist.appendChild(newequip);
    };
};

function shipdisplay() {
    shipsetting = getsetting();
    for (var index in ship_data) {
        var ship = ship_data[index];
        var select = isshipselect(ship);
        if (select) {
            document.getElementById(index).style.display = 'inline';
        } else {
            document.getElementById(index).style.display = 'none';
        };
    };
};

function equipdisplay(item) {
    shiptype = parseInt(item.getAttribute('stype'), 10);
    equiptype = item.getAttribute('eqtype').split(',');
    for (var index in equip_data) {
        var equip = equip_data[index];
        var forbidden = equip_data[index].ship_type_forbidden;
        if (equiptype.includes(String(equip.type))) {
            if (forbidden.includes(shiptype)) {
                document.getElementById(index).style.display = 'none';
            } else {
                document.getElementById(index).style.display = 'inline';
            };
        } else {
            document.getElementById(index).style.display = 'none';
        };
    };
};

function isshipselect(ship) {
    var front = [1, 2, 3, 8, 17, 18];
    var back = [4, 5, 6, 7, 12, 13];
    if (fleetpos === "front") {
        if (!front.includes(ship.type)) {
            return false;
        };
    };

    if (fleetpos === "back") {
        if (!back.includes(ship.type)) {
            return false;
        };
    };

    var indicator_nation = false;
    var indicator_type = false;
    var indicator_rarity = false;
    var indicator_retro = false;

    var key = 'nationality';
    if (testship(shipsetting[key], String(ship[key]))) {
        indicator_nation = true;
    };

    key = 'type';
    if (testship(shipsetting[key], String(ship[key]))) {
        indicator_type = true;
    };

    key = 'rarity';
    if (testship(shipsetting[key], String(ship[key]))) {
        indicator_rarity = true;
    };

    if (indicator_nation && indicator_type && indicator_rarity) {
        key = 'retro';
        if (shipsetting[key] === '1' && (shipsetting[key] === String(ship[key]))) {
            return false;
        } else {
            return true;
        };
    } else {
        return false;
    };
};

function testship(setting, shipvalue) {
    if (setting.length > 0) {
        if (setting.includes(shipvalue)) {
            return true;
        } else {
            return false;
        };
    } else {
        return true;
    };
};

function getsetting() {
    var newsetting = {};
    var newlist = [];
    var shipnation = document.getElementById('shipnation').querySelectorAll('button[aria-pressed=true]');
    var shiptype = document.getElementById('shiptype').querySelectorAll('button[aria-pressed=true]');
    var shiprarity = document.getElementById('shiprarity').querySelectorAll('button[aria-pressed=true]');
    var other = ['98', '101', '103', '104', '105'];
    if (shipnation.length > 0) {
        newlist = [];
        shipnation.forEach(element => {
            if (element.value === '0') {
                other.forEach(x => newlist.push(x));
            } else {
                newlist.push(element.value);
            };
        });
        newsetting.nationality = newlist;
    } else {
        newsetting.nationality = [];
    };

    var front = [1, 2, 3, 8, 17, 18];
    var back = [4, 5, 6, 7, 12, 13];

    if (shiptype.length > 0) {
        newlist = [];
        shiptype.forEach(element => {
            var x = parseInt(element.value, 10);
            if (fleetpos === "front" && front.includes(x)) {
                newlist.push(element.value);
            };
            if (fleetpos === "back" && back.includes(x)) {
                newlist.push(element.value);
            };
        });
        newsetting.type = newlist;
    } else {
        newsetting.type = [];
    };

    if (shiprarity.length > 0) {
        newlist = [];
        shiprarity.forEach(element => newlist.push(element.value));
        newsetting.rarity = newlist;
    } else {
        newsetting.rarity = [];
    };

    var retro = document.getElementById('shipretro').querySelector('button[aria-pressed=true]');

    if (retro) {
        newsetting.retro = retro.value;
    } else {
        newsetting.retro = '0';
    };

    return newsetting;
};