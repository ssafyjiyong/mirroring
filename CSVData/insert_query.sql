#한줄 실행: 커서 맨 앞에 위치한 후 "ctrl+shift+f9"
#파일 경로는 본인이 저장한 각 csv 파일 경로
-- select * from schedule_schedule;

-- select * from information_fishing_area;

-- SELECT * FROM information_fishing_method;

#ALTER TABLE information_fising_method convert to charset UTF8;
#ALTER TABLE information_fising_method convert to charset UTF8;
#SHOW WARNINGS;

#낚시 방법  import 
LOAD DATA LOW_PRIORITY LOCAL INFILE 'C:\\Users\\SSAFY\\Desktop\\FishingMethod.CSV' 
REPLACE INTO TABLE `fubao`.`information_fishing_method` 
CHARACTER SET euckr FIELDS TERMINATED BY ',' 
OPTIONALLY ENCLOSED BY '"' ESCAPED BY '"' 
LINES TERMINATED BY '\r\n' 
IGNORE 1 LINES (`id`, `title`, `document`);

#낚시 구역 import 
LOAD DATA LOW_PRIORITY LOCAL INFILE 'C:\\Users\\SSAFY\\Desktop\\FishingArea.CSV' 
REPLACE INTO TABLE `fubao`.`information_fishing_area` 
CHARACTER SET euckr FIELDS TERMINATED BY ',' 
OPTIONALLY ENCLOSED BY '"' ESCAPED BY '"' 
LINES TERMINATED BY '\r\n' 
IGNORE 1 LINES (`id`, `title`, `document`);

#낚시 미끼 import
LOAD DATA LOW_PRIORITY LOCAL INFILE 'C:\\Users\\SSAFY\\Desktop\\FishingBait.CSV' 
REPLACE INTO TABLE `fubao`.`information_fishing_bait` 
CHARACTER SET euckr FIELDS TERMINATED BY ',' 
OPTIONALLY ENCLOSED BY '"' ESCAPED BY '"' 
LINES TERMINATED BY '\r\n' 
IGNORE 1 LINES (`id`, `title`, `document`);

#방생기준 import 
LOAD DATA LOW_PRIORITY LOCAL INFILE 'C:\\Users\\SSAFY\\Desktop\\releaseFish.CSV' 
REPLACE INTO TABLE `fubao`.`information_release_fish` 
CHARACTER SET euckr FIELDS TERMINATED BY ',' 
OPTIONALLY ENCLOSED BY '"' ESCAPED BY '"' 
LINES TERMINATED BY '\r\n' 
IGNORE 1 LINES (`id`, `name_kor`,`name_eng`,`standard`);

#금어기  import 
LOAD DATA LOW_PRIORITY LOCAL INFILE 'C:\\Users\\SSAFY\\Desktop\\prohibitFish.CSV' 
REPLACE INTO TABLE `fubao`.`information_prohibit_fish` 
CHARACTER SET euckr FIELDS TERMINATED BY ',' 
OPTIONALLY ENCLOSED BY '"' ESCAPED BY '"' 
LINES TERMINATED BY '\r\n' 
IGNORE 1 LINES (`id`, `name_kor`,`name_eng`,@standard_start,@standard_end)
SET `standard_start`=STR_TO_DATE(@standard_start,'%m-%d'),
`standard_end`=STR_TO_DATE(@standard_end,'%m-%d');

#어종 import 
LOAD DATA LOW_PRIORITY LOCAL INFILE 'C:\\Users\\SSAFY\\Desktop\\Fish.CSV' 
REPLACE INTO TABLE `fubao`.`fish_fish` 
CHARACTER SET euckr FIELDS TERMINATED BY ',' 
OPTIONALLY ENCLOSED BY '"' ESCAPED BY '"' 
LINES TERMINATED BY '\r\n' 
IGNORE 1 LINES (`id`, `name_kor`, `name_eng`, `fish_difficulty`, `prohibit_id`, `release_standard_id`);

#어종-area import 
LOAD DATA LOW_PRIORITY LOCAL INFILE 'C:\\Users\\SSAFY\\Desktop\\fish_fish_area_id.CSV' 
REPLACE INTO TABLE `fubao`.`fish_fish_area_id` 
CHARACTER SET euckr FIELDS TERMINATED BY ',' 
OPTIONALLY ENCLOSED BY '"' ESCAPED BY '"' 
LINES TERMINATED BY '\r\n' 
IGNORE 1 LINES (`id`, `fish_id`, `fishing_area_id`);
