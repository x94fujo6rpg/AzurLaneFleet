var shipsetting = {};
var showshiplist = {};
var hidelist = [];
var current_shipid = '';
var current_shiprar = '';
var newshipid = '';
$(document).ready(
    function() {
        creatallships();
        shipsetting = getsetting();
        shipdisplay();
        $(".btn-outline-primary").click(
            function() {
                $(this).button('toggle');
                shipsetting = getsetting();
                shipdisplay();
            }
        );
    }
);

function setcurrent(id) {
    current_shipid = String(id);
};

function setnewship(id) {
    newshipid = String(id);
};

function updateship(id) {
    var button = document.getElementById(current_shipid);
    button.textContent = '';
    if (id === 0) {
        button.setAttribute('style', 'background-color:gray;');
        return;
    };
    setnewship(id);
    var copyimg = document.getElementById(newshipid).firstChild.cloneNode(true);
    button.appendChild(copyimg);
    var color = document.getElementById(newshipid).style.backgroundColor;
    button.setAttribute('style', 'background-color:' + color + ';');
};

function getcolor(rarity) {
    var color = '';
    switch (rarity) {
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
}

function creatallships() {
    for (var index in ship_data) {
        var ship = ship_data[index];
        var shiplist = document.getElementById('shiplist');
        var newship = document.createElement('button');
        newship.setAttribute('type', 'button');
        newship.setAttribute('class', 'shipicon');
        newship.setAttribute('id', index);
        newship.setAttribute('style', 'display:inline;');
        newship.setAttribute('data-dismiss', 'modal');
        newship.setAttribute('onclick', 'updateship(' + index + ')')

        var color = getcolor(ship.rarity);
        newship.setAttribute('style', 'background-color:' + color + ';');

        var shipicon = ship_data[index].painting;
        console.log(shipicon)
        var icon = 'squareicon/' + shipicon.toLowerCase() + '.png';
        var newicon = document.createElement('img');
        newicon.setAttribute('src', icon);
        newicon.setAttribute('class', 'rounded img-fluid');

        newship.appendChild(newicon);
        shiplist.appendChild(newship);
        setTimeout(50);
    };
}

function shipdisplay() {
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

function isshipselect(ship) {
    var indicator_nation = false;
    var indicator_type = false;
    var indicator_rarity = false;
    var indicator_retro = false;

    var key = 'nationality';
    if (shipsetting[key].length > 0) {
        if (shipsetting[key].some(item => {
                if (item === String(ship[key])) {
                    return true;
                };
            })) {
            indicator_nation = true;
        };
    } else {
        indicator_nation = true;
    };

    key = 'type';
    if (shipsetting[key].length > 0) {
        if (shipsetting[key].some(item => {
                if (item === String(ship[key])) {
                    return true;
                };
            })) {
            indicator_type = true;
        };
    } else {
        indicator_type = true;
    };

    key = 'rarity';
    if (shipsetting[key].length > 0) {
        if (shipsetting[key].some(item => {
                if (item === String(ship[key])) {
                    return true;
                };
            })) {
            indicator_rarity = true;
        };
    } else {
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

    if (shiptype.length > 0) {
        newlist = [];
        shiptype.forEach(element => newlist.push(element.value));
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
    }

    return newsetting;
};