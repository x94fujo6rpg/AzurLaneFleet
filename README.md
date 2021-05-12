# [AzurLaneFleet](https://x94fujo6rpg.github.io/AzurLaneFleet/) #  
The goal of this project  
Is just for easily share fleet configuration in one shot  
![](https://github.com/x94fujo6rpg/AzurLaneFleet/raw/master/ui/screenshot.jpg)

# Browser support
Recommend using `Chrome` for the best experience  
This site was developed and tested on `Chrome`/`Firefox`  
`IE`/`Edge(Old)` is unsupported  
Compatibility with other browsers is unknown  

## Update  
**2021-05-12**
- auto adjust some UI to small screen  
  if window is too small and language is en, force filter enable code mode
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
