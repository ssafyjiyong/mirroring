#낚시 방법  import 
LOAD DATA LOW_PRIORITY LOCAL INFILE 'C:\\Users\\SSAFY\\Desktop\\FUBAO\\S10P12C104\\CSVData\\method.CSV' 
REPLACE INTO TABLE `fubao`.`information_fishing_method` 
CHARACTER SET euckr FIELDS TERMINATED BY ',' 
OPTIONALLY ENCLOSED BY '"' ESCAPED BY '"' 
LINES TERMINATED BY '\r\n' 
IGNORE 1 LINES (`id`, `title`, `subtitle`,`document`);

#낚시 구역 import 
LOAD DATA LOW_PRIORITY LOCAL INFILE 'C:\\Users\\SSAFY\\Desktop\\FUBAO\\S10P12C104\\CSVData\\area.CSV' 
REPLACE INTO TABLE `fubao`.`information_fishing_area` 
CHARACTER SET euckr FIELDS TERMINATED BY ',' 
OPTIONALLY ENCLOSED BY '"' ESCAPED BY '"' 
LINES TERMINATED BY '\r\n' 
IGNORE 1 LINES (`id`, `title`, `subtitle`,`document`);

#낚시 미끼 import
LOAD DATA LOW_PRIORITY LOCAL INFILE 'C:\\Users\\SSAFY\\Desktop\\FUBAO\\S10P12C104\\CSVData\\FishingBait.CSV' 
REPLACE INTO TABLE `fubao`.`information_fishing_bait` 
CHARACTER SET euckr FIELDS TERMINATED BY ',' 
OPTIONALLY ENCLOSED BY '"' ESCAPED BY '"' 
LINES TERMINATED BY '\r\n' 
IGNORE 1 LINES (`id`, `title`, `document`);

#방생기준 import 
LOAD DATA LOW_PRIORITY LOCAL INFILE 'C:\\Users\\SSAFY\\Desktop\\FUBAO\\S10P12C104\\CSVData\\releaseFish.CSV' 
REPLACE INTO TABLE `fubao`.`information_release_fish` 
CHARACTER SET euckr FIELDS TERMINATED BY ',' 
OPTIONALLY ENCLOSED BY '"' ESCAPED BY '"' 
LINES TERMINATED BY '\r\n' 
IGNORE 1 LINES (`id`, `name_kor`,`name_eng`,`standard`);

#금어기  import 
LOAD DATA LOW_PRIORITY LOCAL INFILE 'C:\\Users\\SSAFY\\Desktop\\FUBAO\\S10P12C104\\CSVData\\prohibitFish.CSV' 
REPLACE INTO TABLE `fubao`.`information_prohibit_fish` 
CHARACTER SET euckr FIELDS TERMINATED BY ',' 
OPTIONALLY ENCLOSED BY '"' ESCAPED BY '"' 
LINES TERMINATED BY '\r\n' 
IGNORE 1 LINES (`id`, `name_kor`,`name_eng`,@standard_start,@standard_end)
SET `standard_start`=STR_TO_DATE(@standard_start,'%m-%d'),
`standard_end`=STR_TO_DATE(@standard_end,'%m-%d');

#어종 import 
LOAD DATA LOW_PRIORITY LOCAL INFILE 'C:\\Users\\SSAFY\\Desktop\\FUBAO\\S10P12C104\\CSVData\\Fish.CSV' 
REPLACE INTO TABLE `fubao`.`fish_fish` 
CHARACTER SET euckr FIELDS TERMINATED BY ',' 
OPTIONALLY ENCLOSED BY '"' ESCAPED BY '"' 
LINES TERMINATED BY '\r\n' 
IGNORE 1 LINES (`id`, `name_kor`, `name_eng`, `fish_difficulty`, `prohibit_id`, `release_standard_id`, `subtitle`, `document`);

#어종-area import 
LOAD DATA LOW_PRIORITY LOCAL INFILE 'C:\\Users\\SSAFY\\Desktop\\FUBAO\\S10P12C104\\CSVData\\fish_fish_area_id.CSV' 
REPLACE INTO TABLE `fubao`.`fish_fish_area` 
CHARACTER SET euckr FIELDS TERMINATED BY ',' 
OPTIONALLY ENCLOSED BY '"' ESCAPED BY '"' 
LINES TERMINATED BY '\r\n' 
IGNORE 1 LINES (`id`, `fish_id`, `fishing_area_id`);

#어종-bait import 
LOAD DATA LOW_PRIORITY LOCAL INFILE 'C:\\Users\\SSAFY\\Desktop\\FUBAO\\S10P12C104\\CSVData\\fish_fish_bait_id.CSV' 
REPLACE INTO TABLE `fubao`.`fish_fish_bait` 
CHARACTER SET euckr FIELDS TERMINATED BY ',' 
OPTIONALLY ENCLOSED BY '"' ESCAPED BY '"' 
LINES TERMINATED BY '\r\n' 
IGNORE 1 LINES (`id`, `fish_id`, `fishing_bait_id`);

#어종-method import 
LOAD DATA LOW_PRIORITY LOCAL INFILE 'C:\\Users\\SSAFY\\Desktop\\FUBAO\\S10P12C104\\CSVData\\fish_method.CSV' 
REPLACE INTO TABLE `fubao`.`fish_fish_method` 
CHARACTER SET euckr FIELDS TERMINATED BY ',' 
OPTIONALLY ENCLOSED BY '"' ESCAPED BY '"' 
LINES TERMINATED BY '\r\n' 
IGNORE 1 LINES (`id`, `fish_id`, `fishing_method_id`);

#location map import
LOAD DATA LOW_PRIORITY LOCAL INFILE 'C:\\Users\\SSAFY\\Desktop\\FUBAO\\S10P12C104\\CSVData\\location_map.CSV' 
REPLACE INTO TABLE `fubao`.`location_location` 
CHARACTER SET euckr FIELDS TERMINATED BY ',' 
OPTIONALLY ENCLOSED BY '"' ESCAPED BY '"' 
LINES TERMINATED BY '\r\n' 
IGNORE 1 LINES (`id`, `name`, `address`, `lattitude`,`longitude`);

#location-method import
LOAD DATA LOW_PRIORITY LOCAL INFILE 'C:\\Users\\SSAFY\\Desktop\\FUBAO\\S10P12C104\\CSVData\\location_method.CSV' 
REPLACE INTO TABLE `fubao`.`location_location_method` 
CHARACTER SET euckr FIELDS TERMINATED BY ',' 
OPTIONALLY ENCLOSED BY '"' ESCAPED BY '"' 
LINES TERMINATED BY '\r\n' 
IGNORE 1 LINES (`id`, `location_id`,`fishing_method_id`);

#location-fish import
LOAD DATA LOW_PRIORITY LOCAL INFILE 'C:\\Users\\SSAFY\\Desktop\\FUBAO\\S10P12C104\\CSVData\\location_fish.CSV' 
REPLACE INTO TABLE `fubao`.`location_location_fish` 
CHARACTER SET euckr FIELDS TERMINATED BY ',' 
OPTIONALLY ENCLOSED BY '"' ESCAPED BY '"' 
LINES TERMINATED BY '\r\n' 
IGNORE 1 LINES (`id`, `location_id`,`fish_id`);


if (mixer3.current) {
      mixer3.current.update(anispeed);
      if (model3.current) {
        if (fishInfoArray[5] === 0) {
          model3.current.visible = false;
        }
        else {
          model3.current.visible = true;
        }
        if (beforexpos3 < xrand3) {
          if (xpos3 >= xrand3) {
            beforexpos3 = xpos3;
            xpos3 -= xspeed;
            sw3 = 5;
          } else {
            if (model3.current.rotation.x > 0) {
              sw3 = 1;
            } else {
              sw3 = 3;
            }
          }
        } else if (beforexpos3 > xrand3) {
          if (xpos3 <= xrand3) {
            beforexpos3 = xpos3;
            xpos3 += xspeed;
            sw3 = 5;
          } else {
            if (model3.current.rotation.x < 3) {
              sw3 = 2;
            } else {
              sw3 = 4;
            }
          }
        } else if (model3.current.rotation.x < 0) {
          sw3 = 4;
          model3.current.rotation.x += rotationvalue;
        } else if (model3.current.rotation.x > 3) {
          sw3 = 3;
          model3.current.rotation.x -= rotationvalue;
        }

        //up
        if (sw3 === 1) {
          if (model3.current.rotation.y < 2.6) {
            model3.current.rotation.x -= rotationvalue;
            model3.current.rotation.y += 0.6;
          } else {
            model3.current.rotation.x -= rotationvalue;
          }
        }
        //down
        else if (sw3 === 2) {
          if (model3.current.rotation.y > -2.6) {
            model3.current.rotation.x += rotationvalue;
            model3.current.rotation.y -= 0.6;
          } else {
            model3.current.rotation.x += rotationvalue;
          }
        } else if (sw3 === 3) {
          xpos3 += xspeed + (((Math.random() * (0.0005 + 0.0005)) - 0.0005) * 1e2) / 1e2;
        } else if (sw3 === 4) {
          xpos3 -= xspeed + (((Math.random() * (0.0005 + 0.0005)) - 0.0005) * 1e2) / 1e2;
        } else if (sw3 === 5) {
          xrand3 = (((Math.random() * (1.15 + 1.15)) - 1.15) * 1e2) / 1e2;
        }
        // console.log("bepos:", beforexpos3);
        // console.log("xpos:", xpos3);
        // console.log("xrand:", xrand3);
        model3.current.position.set(-0.6, xpos3, 0);
      }
    }