# [Azur Lane Fleet Tool](https://x94fujo6rpg.github.io/AzurLaneFleet/)  
A tool for easily share/manage/simulate/build/make your AzurLane fleet.  
Generate shareable text codes or links.  
[![](https://x94fujo6rpg.github.io/AzurLaneFleet/ui/screenshots.jpg)](https://x94fujo6rpg.github.io/AzurLaneFleet/)  

- [Azur Lane Fleet Tool](#azur-lane-fleet-tool)
  - [Update](#update)
  - [Browser support](#browser-support)
  - [About CD calculation](#about-cd-calculation)
  - [Related userscripts](#related-userscripts)
  - [CN Wiki version](#cn-wiki-version)
  - [Data source](#data-source)
  - [CD calculator](#cd-calculator)
  - [Hull codes](#hull-codes)

## Update  
**2022-02-28**
- add new sort for ship: `release date`
  - data source: `CN wiki` [实装日期](https://wiki.biligame.com/blhx/%E5%AE%9E%E8%A3%85%E6%97%A5%E6%9C%9F)、[改造](https://wiki.biligame.com/blhx/%E6%94%B9%E9%80%A0)

**2022-02-22**
- ~~improved loading speed on first visit~~ (seems like github doesn't like big files...)

**2022-02-04**
- auto focus back to search input when it's empty
- result count shouldn't include [remove]

**2022-01-04**
- CD calculation now includes reload values from equip  
  *In order to keep the values exactly as shown in the game. I won't implement other calculations.*  

**2021-12-31**
- Prevent multiple download of same icon (causing idb error: key already exists)

**2021-12-20**
- now you can sort equips by `reload speed` (max enhanced stats)  
  ![](https://i.imgur.com/cMglcpL.jpg)
  - recommend to use the `set owned equip`>`only show owned` first to filter out unwanted equips.  
    otherwise it will be quite messy.

**2021-12-18**
- calculate and display weapon/airstrike CD
  - known issue:
    - if there is empty slot that can equip airplane, it will cause the CD to be calculated incorrectly  
      ~~(since no one knows how to calculate it, it will not be fixed)~~  
    - ↑ need additional data that won't be needed 99% of the time.  
      and no one is using empty slots to adjust the CD.  
      this is still not going to be implemented.  
  - affected by `Fleet Technology` reload bonus (default: 0)
    - edit it in `Settings` > `Fleet Tech (Reload)`
    - and then `Save` it  
      ![](https://i.imgur.com/b9RmoEH.jpg)
  - affected by ship affinity (default: love (x1.06))
    - set it in `ship select`
    - this will save to `fleet data`
    - this will display on ship icon (if > 1)
  - ~~reload value of equip has not been implemented~~ (done)
- fleet data now includes ship's affinity level
  - old data should be loaded without problems  
    (use default if no affinity data)
- ~~some data is still wrong, I will probably fix it if I have time~~(fixed)
- if no one reports it, then there is no bug 🙃

**2021-12-13**
- the efficiency of the slot is now effect by ship's skill  
  - if it is altered, set color to: `increase: green` / `decrease: red`
  - effect ships:  
    | TW                    | JP                               | EN                      |
    | --------------------- | -------------------------------- | ----------------------- |
    | 雷諾                  | リノ                             | Reno                    |
    | 獨立                  | インディペンデンス               | Independence            |
    | 獨立改                | インディペンデンス改             | Independence (Retrofit) |
    | 巴丹                  | バターン                         | Bataan                  |
    | 西雅圖                | シアトル                         | Seattle                 |
    | 鷹                    | イーグル                         | Eagle                   |
    | 可畏                  | フォーミダブル                   | Formidable              |
    | 五十鈴改              | 五十鈴改                         | Isuzu (Retrofit)        |
    | 北風                  | 北風                             | Kitakaze                |
    | 吾妻                  | 吾妻                             | Azuma                   |
    | 齊柏林伯爵            | グラーフ・ツェッペリン           | Graf Zeppelin           |
    | 埃吉爾*               | エーギル                         | Ägir                    |
    | 奧古斯特·馮·帕塞瓦爾* | アウグスト・フォン・パーセヴァル | August von Parseval     |
    | 馬可波羅*             | マルコ・ポーロ                   | Marco Polo              |
    | 塔什干                | タシュケント                     | Tashkent                |
    | 甘古特                | ガングート                       | Gangut                  |
    | 凱旋                  | ル・トリオンファン               | Le Triomphant           |
    | 貝亞恩                | ベアルン                         | Béarn                   |

  - fleet data for test:
    ```
    No4ZgTggGNoGgUxKBEB2AHAQ171AuvOFLAmAIzQAsyd8GOe2hxAbNFbSvQo8ywJEQtdJ3rVM0AEz1+zVsFHieqvlgGK2pKmtXy8hIhWEgxXXvo0Lh5mgkwBWe3vVNDwqVV2W3mocTA2jA+rgzWHsRizqGWBvi20DEOjtSyYYzoNsam4DJJEPAU0rK+4e4JxHCyjoVl8YJV+c5FJdD1EQmmVOglhRToYNwUmG16DYo9ffDSg+nSmLRxnY3AU+kDYFIZK0ZFuVQlHDMUHB0Vq4fSx8WlOxeKkDDc0pTt9-6mUnaqt+-IE080B+yAoEFOcl2wlkII+2X2gRIz3Ib3O-mI1FILWoOP+4yhGKxCFexTR8JEpGOCExLkhD2EmJgVJQknyVnphKZCE2x0gEJmizxfnhJkRYJCyGubG4dPRax0oLayw58olYWFHlMMKS9AWQ1lNmI2paxMw+vxKuNkqkxwWFBlaChOQIAEJoAA6aBsF1gABGYGwWGgQA
    ```

**2021-12-11**
- add & display ship's equip efficiency
- remove some unused data

**2021-12-09**
- now will only fetch icon that is missing from cache database
  - unless there is a force update

**2021-12-08**
- bug fix:
  - when dump data, if equip level is 0, it will be set to 10
  - in rare cases, the level of the last equipment may be incorrect
- only load icon when it is visible

**2021-12-07**
- now will limit equip level (also applies to load data)
  - t0 & t3:
    - rainbow/gold: +13
    - purple: +11
    - blue: +7
    - white: +3
  - else:
    - rainbow/gold: +10
    - purple: +10
    - blue: +6
    - white: +3
- now only save data when closing UI

**2021-12-06**
- new feature:
  - add `ship/equip level`, setup by click `set level`
  - it will save to fleet data
  - old data without levels will load with default level: `ship:120` / `equip:10`
  - bugs++
- if it feel slow, try turn on the hardware acceleration in your browser...
  - I should probably remove some css... :(
- if `owned item data` failed to load, it will skip it & remove the broken data
- add slider to set level
- now the level is set when any input is made, the `set level` button now only functions as exit.
- level limit:
  - `not number` => use default level: `ship:120` / `equip:10`
  - `input < min` =>  `equip:0` / `ship:1`
  - `input > max` => `equip:13` / `ship:125`
- bug fix: `dumpID` not use default level
  - causes all empty equip's slot set to `level 0`
- UI adjust: remove most of the text shadow. use monospace in item names.
- avoid some redundant actions that causes some performance issues

**2021-12-05**
- new feature:
  - `CopyShip`: copy the ship & it's current equipment to anywhere  
    (if it exists, this will **overwrite the ship at destination**)
  - `Swap` / `CopyShip` can be cancelled by clicking anywhere that is not ship
- adjust some UI

**2021-12-03**
- new feature: export/import owned ship/equipment data (in setting)  
  `Save` will **overwrite** data in your setting  
  if you just use other player's data to make fleet for them: use `Load`, **don't click** `Save`  
- because of the above, you now have to save the setting manually after editing `owned ship/equipment`
- `Reload Setting` use this to load `owned ship/equipment` from your setting

**2021-11-28**
- speed improvement: ships/equipment generating now 5~10x faster
- bug fix: equip slot's limit not reset properly when removed
- now, when setting owned ship/equip, some limit/filter will be skipped
- auto scroll to top after site loaded
- rewrite some code

**2021-11-26**
- improve handling when invalid data is loaded  
  it will still load the formation and show successful, error message displayed in console
  - ship: stop load and skip rest equip
  - equip: skip
- now we shoud be able to load the data generated by CN Wiki **(irreversible)**
- add `collab` to filter nation section
  - collab `ship/equip` now will not be selected by `other`
- now can load data that cut from url `.../?AFLD=dataDataData` => `dataDataData`

**2021-11-25**
- fold setting/filter
- new feature: only show owned ship/equipment

**2021-11-23**
- now the last sorting method will be marked
- now the `sort order` button will also trigger sorting
- `Fleet ID / Edit Button` & `Fleet Border` now enabled by default

**2021-11-01**
- useing TW name data. if not found, convert from CN
- unreleased ship name marked with `*` *(on that server)*
- now can use `TWnoData`/`ENnoData` to find unreleased ships *(on that server)*
- normalize some of the ship names (so that they can be searched with normal letters)
  | Original            | Normalized           |
  | ------------------- | -------------------- |
  | Algérie             | Algerie              |
  | La Galissonnière    | La Galissonniere     |
  | Béarn               | Bearn                |
  | Émile Bertin        | Emile Bertin         |
  | Maillé Brézé        | Maille Breze         |
  | L'Opiniâtre         | L'Opiniatre          |
  | Le Téméraire        | Le Temeraire         |
  | Ägir                | Agir                 |
  | Friedrich der Große | Friedrich der Grosse |
  | Nürnberg            | Nurnberg             |
  | Köln                | Koln                 |
  | Königsberg          | Konigsberg           |
  
  *both of them are supported

**2021-10-12**
- add sorting

**2021-10-07**
- due to some change, old dev tools are no longer suitable  
  and for various reasons, no dev tool for this repo will be release in the future  

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

## Browser support  
If it feel slow, try turn on the hardware acceleration in your browser.  
Recommend using `Chrome` for the best experience.  
This site was developed and tested on `Chrome`/`Firefox`.  
`IE` `Edge(Old)` is unsupported.  
Compatibility with other browsers is unknown.  

## About CD calculation
The CD calculation of this tool is designed to perfectly match the values displayed in the game.  
If you need a more detailed/real CD.
Please check [other CD calculator(Chinese only).](#cd-calculator)

## Related userscripts  
for [CN WIKI](https://wiki.biligame.com/blhx/%E9%A6%96%E9%A1%B5)
- 碧航艦隊科技工具 [github](https://github.com/x94fujo6rpg/SomeTampermonkeyScripts/blob/master/az_cn_wiki_fleet_tech_tool.user.js) / [greasyfork](https://greasyfork.org/scripts/435568)
- 還原艦船名稱 [greasyfork](https://greasyfork.org/scripts/405281)

for [AzurLaneSD](https://github.com/Pelom777/AzurLaneSD)
- 附加可讀名稱 [github](https://github.com/x94fujo6rpg/SomeTampermonkeyScripts/blob/master/azurlanesd_renamer.user.js) / [greasyfork](https://greasyfork.org/scripts/437018)

## CN Wiki version
[CN Wiki version](https://wiki.biligame.com/blhx/%E8%88%B0%E9%98%9F%E6%A8%A1%E6%8B%9F%E5%99%A8)  
***Caution! Data stored in two versions are not compatible!***  
now shoud load data from CN Wiki version **(irreversible)**  

## Data source  
- [AzurLaneTools](https://github.com/AzurLaneTools)  
- [AzurLaneSourceJson(Inactive)](https://github.com/nobbyfix/AzurLaneSourceJson)  
- [AzurLaneData(Inactive)](https://github.com/Dimbreath/AzurLaneData)  

## CD calculator
- [碧蓝航线CD计算工具(Chinese only)](https://pages.autumn21.top/#/)  
  Visualization.  
  Can use customized time axis to match any enemy.  
  Does not support some of more specific skills effect.  

- [航母调速对轴表(Chinese only)](https://wiki.biligame.com/blhx/%E8%88%AA%E6%AF%8D%E8%B0%83%E9%80%9F%E5%AF%B9%E8%BD%B4%E8%A1%A8)  
  Excel spreadsheet  

There are some values that need to be very accurate.  
It's a giant rabbit hole.  
If you can. The most accurate way is to simulate the entire game.  

## Hull codes  
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
