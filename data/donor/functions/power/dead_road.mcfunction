scoreboard objectives add power_plus.Donor.Beam dummy
scoreboard players add .DeadRoad power_plus.Donor.Beam 1
execute positioned ^ ^ ^0.6 run particle weave:blood_stream ~ ~-0.5 ~ 0.45 0.45 0.45 0 2
execute if score .DeadRoad power_plus.Donor.Beam matches ..180 positioned ^ ^ ^0.1 rotated ~ ~ if block ~ ~ ~ #power_plus:block_pass run function donor:powers/dead_road
execute if score .DeadRoad power_plus.Donor.Beam matches 180.. run scoreboard players reset .DeadRoad power_plus.Donor.Beam