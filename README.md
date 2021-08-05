# [AzurLaneFleet](https://x94fujo6rpg.github.io/AzurLaneFleet/) #  
The goal of this project  
Is just for easily share fleet configuration in one shot  
![](https://github.com/x94fujo6rpg/AzurLaneFleet/raw/master/ui/screenshots.jpg)  

If you need DPS calculator, go check [Zoratsu's AzurLaneCalculator](https://github.com/Zoratsu/AzurLaneCalculator)  
  
[Why is it so hard to calculate DPS in this game](https://github.com/x94fujo6rpg/AzurLaneFleet#simple-explain)

# Browser support
Recommend using `Chrome` for the best experience  
This site was developed and tested on `Chrome`/`Firefox`  
`IE` `Edge(Old)` is unsupported  
Compatibility with other browsers is unknown  

## Update  
**2021-08-05**
- add new feature: swap ship position
  ![](https://github.com/x94fujo6rpg/AzurLaneFleet/raw/master/ui/swap.gif)  

**2021-05-26**
- fix indexedDB issue

**2021-05-21**
- fix `allow duplicate` `thick frame` not work on Firefox
- fix stuck when image cache not found
- update error message when indexedDB is unavailable

**2021-05-20**
- no longer use cookie, all setting now save in localStorage  
  so the settings work in local environment too  

**2021-05-18**
- display message at the bottom
- limit fleet size to `30`

**2021-05-17**
- fix & actually using vue to handle layout  
  now it will really respond to any added fleet  
- add button to turn on/off
  - `Fleet ID / Edit Button`
  - `Fleet Border`
- Now can generate shareable URL
  - `limit` URL length limit is **2000**, which is about `28~30` fleet with all equip
- no longer hide scrollbar because we can have so many fleet now
- Dynamic fleet
  - add `Copy`, now can copy fleet
  - improve speed (skip unnecessary action when load fleet)
    - `for...in` `forEach` ... this kind method is slower than the traditional `for (i++)`
      but it way more readable & easier to debug...
  - hide buttom, now only display when hover on it
  - ~~limit to 10 fleet~~
    ```
    the causes of this problem is the id system I use...

    old id:_0123 => fleet:0, side:1, pos:2, item:3

    when you have over 10 fleet...
    _10123 => fleet:1?...0? but it already exist...???
    what a classic mistake...

    new id
    999_1_2_3 => id.split("_") => [999,1,2,3]
    ```

**2021-05-16**
~~(giuhub just exploded, no one can build right now...)~~  
- Dynamic fleet
  - `Normal` add normal fleet to top/bottom
  - `Sub` add Submarine fleet to top/bottom
  - `X` delete fleet (min fleet count 1)
  - Compatible with old data (v0.04)

**2021-05-13**
- better auto adjust UI (no longer force use code)
- equip filter
  - clear: remove all filter setting
  - default: filter low rarity/tier equip
  - auto: auto use default
- auto focus to search input
- show ship position
- frame switch

**2021-05-12**
- auto adjust some UI to small screen  
  ~~if window is too small and language is en, force filter enable code mode~~
- auto clear name after save fleet
- convert redundant buttons to single button
- replace old align attr

**2021-05-11**
- adjust some UI
- more UI text will correspond to the settings
- filter now can set to [ship & nation code](https://github.com/x94fujo6rpg/AzurLaneFleet#code)
- fix result count not work when use search
- split nation to 2 line
- fix some text to match en wiki

**2021-05-10**
- reduce server traffic (use [idb(indexedDB)](https://github.com/jakearchibald/idb) to cache/load images)

**2021-05-07**
- add TW (Traditional Chinese)
  - convert from CN cause TW server missing some data
- add result count for ship
- use EN as default language
- use correct EN name instead of convert from this  
  ![](https://i.imgur.com/w0MOsdK.png)  
  now the search support this name too  

**2021-05-06**
- add layout switch
- auto save&load option

**2021-05-04**
- now can save/load/remove fleet in local
- filter now use set

**2021-05-03**
- add search for ship name, support CN/EN/JP
- 4 normal + submarine fleet
- compress data string

**2021-04-30**
- add option for duplicate ship

**2020-11-27**  
- fix filter issue  
- add ship/equip (event 2020-11-26)  

**2020-09-24**  
- improve data export/import  
- add a button to remove all ship at once  
- auto save&load setting via cookie  
  
**2020-09-20**  
- fix BBV not showing  
- for the BBV, add [other] type to back too  
- now showing BB main gun base  
- correctly limit equip  
  
**2020-09-18**  
- new ship/equip added  
(I have to wait until EN server updated to get the translation of new equip)  
- add [other] type to front filter for new ship  
- display full name when cursor on the ship/equip  
  
**2020-09-02**  
- new version  
- check duplicate ship/equip  
- add import/export setting  

## todo...
- make re-sort for ship/equip

## Code  
[Hull classification symbol](https://en.wikipedia.org/wiki/Hull_classification_symbol)  

| TW&CN 	| JP       	| EN                	| CODE  	|
|-------	|----------	|-------------------	|-------	|
| 潛艇  	| 潜水艦   	| Submarine         	| SS    	|
| 潛母  	| 潜水空母 	| Submarine Carrier 	| SSV   	|
| 驅逐  	| 駆逐     	| Destroyer         	| DD    	|
| 輕巡  	| 軽巡     	| Light Cruiser     	| CL    	|
| 重巡  	| 重巡     	| Heavy Cruiser     	| CA    	|
| 超巡  	| 超甲巡   	| Large Cruiser     	| CB    	|
| 戰巡  	| 巡洋戦艦 	| Battle Cruiser    	| BC    	|
| 戰列  	| 戦艦     	| Battle Ship       	| BB    	|
| 輕航  	| 軽空母   	| Light Carrier     	| CVL   	|
| 航母  	| 空母     	| Carrier           	| CV    	|
| 重砲  	| 砲艦     	| Monitor           	| BM    	|
| 維修  	| 工作     	| Repair Ship       	| AR    	|
| 其他  	| その他   	| Other             	| Other 	|

| TW&CN    	| JP       	| EN                  	| CODE     	|
|----------	|----------	|---------------------	|----------	|
| 白鷹     	| ユニオン 	| Eagle Union         	| USS      	|
| 皇家     	| ロイヤル 	| Royal Navy          	| HMS      	|
| 重櫻     	| 重桜     	| Sakura Empire       	| IJN      	|
| 鐵血     	| 鉄血     	| Iron Blood          	| KMS      	|
| 東煌     	| 東煌     	| Dragon Empery       	| PRAN/ROC 	|
| 撒丁帝國 	| サディア 	| Sardegna Empire     	| RN       	|
| 北方聯合 	| 北連     	| Northern Parliament 	| SN       	|
| 自由鳶尾 	| アイリス 	| Iris Libre          	| FFNF     	|
| 維希教廷 	| ヴィシア 	| Vichya Dominion     	| MNF      	|
| 其他     	| その他   	| Other               	| Other    	|

## Data source  
- [AzurLaneSourceJson](https://github.com/nobbyfix/AzurLaneSourceJson)  
- [AzurLaneData](https://github.com/Dimbreath/AzurLaneData)  

## Simple explain

If you want to calculate the DPS correctly  
You basically need to simulate the entire game  
It's crazy to try to calculate the interaction between skills  
Even if you manage to do it  
The game itself will still have bugs that cause the reality doesn't match  

Some game design/bug, can only be found by directly checking the code  
And it is very common for skills to have bugs  
If you have followed some players on `bilibili` `NGA` `CN Wiki` you will know  
~~`certain anonymous inorganic compound`, `#\d{4}`, `those who make the Tier List`...etc~~  
  
If you really want to peek at how crazy it is  
Try [航母調速對軸表](https://wiki.biligame.com/blhx/%E8%88%AA%E6%AF%8D%E8%B0%83%E9%80%9F%E5%AF%B9%E8%BD%B4%E8%A1%A8)  
It's CN EXCEL calculate table, just and only for the carrier takeoff time-axis in META battles  
  
It is normal if you experience the following symptoms during the process of understanding how the table works  
Dizziness, Headache, Hysterical, Screaming,  
Nausea, Stroke, Brain Cancer, Hair Fall, Seizure,  
Brain fluid coming out of nose,  
Banging your head against the wall...etc  