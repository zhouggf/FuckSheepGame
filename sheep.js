
/*
 * @Author: Vincent Young
 * @Date: 2022-09-15 15:21:34
 * @LastEditors: Vincent Young
 * @LastEditTime: 2022-09-15 15:21:49
 * @FilePath: /FuckSheepGame/sheep.js
 * @Telegram: https://t.me/missuo
 * 
 * Copyright © 2022 by Vincent, All Rights Reserved. 

[rewrite_local]
# > Fuck Sheep Game
^https://*.easygame2021\.com/maps/(.*) url script-request-header https://raw.githubusercontent.com/zhouggf/FuckSheepGame/main/sheep.js   
[mitm] 
hostname = *.easygame2021.com
*/

path =  "maps/(.*)?map_id=80001"

$done({path});
