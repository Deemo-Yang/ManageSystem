-- --------------------------------------------------------
-- 主机:                           localhost
-- 服务器版本:                        5.5.61 - MySQL Community Server (GPL)
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- 导出 dianchi 的数据库结构
CREATE DATABASE IF NOT EXISTS `dianchi` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `dianchi`;

-- 导出  表 dianchi.adminuser 结构
CREATE TABLE IF NOT EXISTS `adminuser` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(32) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  dianchi.adminuser 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `adminuser` DISABLE KEYS */;
/*!40000 ALTER TABLE `adminuser` ENABLE KEYS */;

-- 导出  表 dianchi.companys 结构
CREATE TABLE IF NOT EXISTS `companys` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `companyname` varchar(200) NOT NULL,
  `companytype` varchar(100) NOT NULL,
  `contactperson` varchar(20) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `legalperson` varchar(200) NOT NULL,
  `organizationcode` varchar(50) NOT NULL,
  `registeraddr` varchar(200) NOT NULL,
  `workaddr` varchar(200) NOT NULL,
  `licenseurl` varchar(200) NOT NULL,
  `usersid` int(11) unsigned NOT NULL,
  `status` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `companyname` (`companyname`),
  KEY `usersid` (`usersid`),
  CONSTRAINT `FK_companys_myuser` FOREIGN KEY (`usersid`) REFERENCES `myuser` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- 正在导出表  dianchi.companys 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `companys` DISABLE KEYS */;
/*!40000 ALTER TABLE `companys` ENABLE KEYS */;

-- 导出  表 dianchi.intellectualdemonstration 结构
CREATE TABLE IF NOT EXISTS `intellectualdemonstration` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `companyid` int(11) unsigned NOT NULL,
  `projectnumber` varchar(50) DEFAULT '0',
  `authenticationtype` varchar(50) DEFAULT '0',
  `startdate` varchar(50) DEFAULT '2019-01-01',
  `enddate` varchar(50) DEFAULT '2019-01-01',
  `funds` float DEFAULT NULL,
  `contactperson` varchar(50) DEFAULT NULL,
  `contactphone` bigint(20) DEFAULT NULL,
  `implementationplan` varchar(500) DEFAULT NULL,
  `fundspurpose` varchar(500) DEFAULT NULL,
  `responseperson` varchar(50) DEFAULT NULL,
  `fillformperson` varchar(50) DEFAULT NULL,
  `phone` bigint(20) DEFAULT NULL,
  `firstyear` varchar(50) DEFAULT NULL,
  `secondyear` varchar(50) DEFAULT NULL,
  `thirdyear` varchar(50) DEFAULT NULL,
  `status` tinyint(4) DEFAULT NULL,
  `reportdate` varchar(50) DEFAULT NULL,
  `ts` int(2) DEFAULT NULL COMMENT '暂存标识',
  `opinion` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_intellectualdemonstration_companys` (`companyid`),
  CONSTRAINT `FK_intellectualdemonstration_companys` FOREIGN KEY (`companyid`) REFERENCES `companys` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- 正在导出表  dianchi.intellectualdemonstration 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `intellectualdemonstration` DISABLE KEYS */;
/*!40000 ALTER TABLE `intellectualdemonstration` ENABLE KEYS */;

-- 导出  表 dianchi.intellectualdemonstrationexpect 结构
CREATE TABLE IF NOT EXISTS `intellectualdemonstrationexpect` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `intellectualid` int(11) unsigned NOT NULL,
  `firstsellincome` float DEFAULT NULL,
  `firstsellprofit` float DEFAULT NULL,
  `firstselltaxes` float DEFAULT NULL,
  `firstproductsincome` float DEFAULT NULL,
  `firstproductsprofit` float DEFAULT NULL,
  `firstproductstaxes` float DEFAULT NULL,
  `secondsellincome` float DEFAULT NULL,
  `secondsellprofit` float DEFAULT NULL,
  `secondselltaxes` float DEFAULT NULL,
  `secondproductsincome` float DEFAULT NULL,
  `secondproductsprofit` float DEFAULT NULL,
  `secondproductstaxes` float DEFAULT NULL,
  `thirdsellincome` float DEFAULT NULL,
  `thirdsellprofit` float DEFAULT NULL,
  `thirdselltaxes` float DEFAULT NULL,
  `thirdproductsincome` float DEFAULT NULL,
  `thirdproductsprofit` float DEFAULT NULL,
  `thirdproductstaxes` float DEFAULT NULL,
  `firstinlandacceptinventionaccept` int(11) DEFAULT NULL,
  `firstforeignacceptinventionaccept` int(11) DEFAULT NULL,
  `firstinlandmodelaccept` int(11) DEFAULT NULL,
  `firstforeignmodelaccept` int(11) DEFAULT NULL,
  `firstinlandappearanceaccept` int(11) DEFAULT NULL,
  `firstforeignappearanceaccept` int(11) DEFAULT NULL,
  `firstinlandsciaccept` int(11) DEFAULT NULL,
  `firstforeignsciaccept` int(11) DEFAULT NULL,
  `firstinlandacceptinvention` int(11) DEFAULT NULL,
  `firstforeignacceptinvention` int(11) DEFAULT NULL,
  `firstinlandmodel` int(11) DEFAULT NULL,
  `firstforeignmodel` int(11) DEFAULT NULL,
  `firstinlandappearance` int(11) DEFAULT NULL,
  `firstforeignappearance` int(11) DEFAULT NULL,
  `firstinlandsci` int(11) DEFAULT NULL,
  `firstforeignsci` int(11) DEFAULT NULL,
  `secondinlandacceptinventionaccept` int(11) DEFAULT NULL,
  `secondforeignacceptinventionaccept` int(11) DEFAULT NULL,
  `secondinlandmodelaccept` int(11) DEFAULT NULL,
  `secondforeignmodelaccept` int(11) DEFAULT NULL,
  `secondinlandappearanceaccept` int(11) DEFAULT NULL,
  `secondforeignappearanceaccept` int(11) DEFAULT NULL,
  `secondinlandsciaccept` int(11) DEFAULT NULL,
  `secondforeignsciaccept` int(11) DEFAULT NULL,
  `secondinlandacceptinvention` int(11) DEFAULT NULL,
  `secondforeignacceptinvention` int(11) DEFAULT NULL,
  `secondinlandmodel` int(11) DEFAULT NULL,
  `secondforeignmodel` int(11) DEFAULT NULL,
  `secondinlandappearance` int(11) DEFAULT NULL,
  `secondforeignappearance` int(11) DEFAULT NULL,
  `secondinlandsci` int(11) DEFAULT NULL,
  `secondforeignsci` int(11) DEFAULT NULL,
  `thirdinlandacceptinventionaccept` int(11) DEFAULT NULL,
  `thirdforeignacceptinventionaccept` int(11) DEFAULT NULL,
  `thirdinlandmodelaccept` int(11) DEFAULT NULL,
  `thirdforeignmodelaccept` int(11) DEFAULT NULL,
  `thirdinlandappearanceaccept` int(11) DEFAULT NULL,
  `thirdforeignappearanceaccept` int(11) DEFAULT NULL,
  `thirdinlandsciaccept` int(11) DEFAULT NULL,
  `thirdforeignsciaccept` int(11) DEFAULT NULL,
  `thirdinlandacceptinvention` int(11) DEFAULT NULL,
  `thirdforeignacceptinvention` int(11) DEFAULT NULL,
  `thirdinlandmodel` int(11) DEFAULT NULL,
  `thirdforeignmodel` int(11) DEFAULT NULL,
  `thirdinlandappearance` int(11) DEFAULT NULL,
  `thirdforeignappearance` int(11) DEFAULT NULL,
  `thirdinlandsci` int(11) DEFAULT NULL,
  `thirdforeignsci` int(11) DEFAULT NULL,
  `firstleader` int(11) DEFAULT NULL,
  `firsttechnicalperson` int(11) DEFAULT NULL,
  `firststaff` int(11) DEFAULT NULL,
  `firstpercent` varchar(50) DEFAULT NULL,
  `secondleader` int(11) DEFAULT NULL,
  `secondtechnicalperson` int(11) DEFAULT NULL,
  `secondstaff` int(11) DEFAULT NULL,
  `secondpercent` varchar(50) DEFAULT NULL,
  `thirdleader` int(11) DEFAULT NULL,
  `thirdtechnicalperson` int(11) DEFAULT NULL,
  `thirdstaff` int(11) DEFAULT NULL,
  `thirdpercent` varchar(50) DEFAULT NULL,
  `ts` int(2) DEFAULT NULL COMMENT '暂存标识',
  PRIMARY KEY (`id`),
  KEY `FK_intellectualdemonstrationexpect_intellectualdemonstration` (`intellectualid`),
  CONSTRAINT `FK_intellectualdemonstrationexpect_intellectualdemonstration` FOREIGN KEY (`intellectualid`) REFERENCES `intellectualdemonstration` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- 正在导出表  dianchi.intellectualdemonstrationexpect 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `intellectualdemonstrationexpect` DISABLE KEYS */;
/*!40000 ALTER TABLE `intellectualdemonstrationexpect` ENABLE KEYS */;

-- 导出  表 dianchi.intellectualdemonstrationstorage 结构
CREATE TABLE IF NOT EXISTS `intellectualdemonstrationstorage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `intellectualdemonstrationid` int(10) unsigned NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `type` varchar(200) DEFAULT NULL,
  `url` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_intellectualdemonstrationstorage_intellectualdemonstration` (`intellectualdemonstrationid`),
  CONSTRAINT `FK_intellectualdemonstrationstorage_intellectualdemonstration` FOREIGN KEY (`intellectualdemonstrationid`) REFERENCES `intellectualdemonstration` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;

-- 正在导出表  dianchi.intellectualdemonstrationstorage 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `intellectualdemonstrationstorage` DISABLE KEYS */;
/*!40000 ALTER TABLE `intellectualdemonstrationstorage` ENABLE KEYS */;

-- 导出  表 dianchi.intellectualpropertyallowance 结构
CREATE TABLE IF NOT EXISTS `intellectualpropertyallowance` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `companyid` int(11) unsigned NOT NULL,
  `patenttype` varchar(50) DEFAULT NULL,
  `patentnumber` varchar(50) DEFAULT NULL,
  `patentname` varchar(50) DEFAULT NULL,
  `patentee` varchar(50) DEFAULT NULL,
  `patentaddress` varchar(50) DEFAULT NULL,
  `phone` bigint(20) DEFAULT NULL,
  `patenteetype` varchar(50) DEFAULT NULL,
  `technosphere` varchar(50) DEFAULT NULL,
  `inventtype` varchar(50) DEFAULT NULL,
  `applydate` varchar(50) DEFAULT NULL,
  `impowerdate` varchar(50) DEFAULT NULL,
  `auditdepartment` varchar(50) DEFAULT NULL,
  `status` tinyint(4) DEFAULT NULL,
  `reportdate` date DEFAULT NULL,
  `ts` int(2) DEFAULT NULL COMMENT '暂存标识',
  `opinion` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_intellectualpropertyallowance_companys` (`companyid`),
  CONSTRAINT `FK_intellectualpropertyallowance_companys` FOREIGN KEY (`companyid`) REFERENCES `companys` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='知识产权补助';

-- 正在导出表  dianchi.intellectualpropertyallowance 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `intellectualpropertyallowance` DISABLE KEYS */;
/*!40000 ALTER TABLE `intellectualpropertyallowance` ENABLE KEYS */;

-- 导出  表 dianchi.intellectualpropertyallowancestorage 结构
CREATE TABLE IF NOT EXISTS `intellectualpropertyallowancestorage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `intellectualpropertyallowanceid` int(10) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `type` varchar(200) DEFAULT NULL,
  `url` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_allowancestorage_allowance` (`intellectualpropertyallowanceid`),
  CONSTRAINT `FK_allowancestorage_allowance` FOREIGN KEY (`intellectualpropertyallowanceid`) REFERENCES `intellectualpropertyallowance` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- 正在导出表  dianchi.intellectualpropertyallowancestorage 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `intellectualpropertyallowancestorage` DISABLE KEYS */;
/*!40000 ALTER TABLE `intellectualpropertyallowancestorage` ENABLE KEYS */;

-- 导出  表 dianchi.intellectualpropertyapply 结构
CREATE TABLE IF NOT EXISTS `intellectualpropertyapply` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `companyid` int(11) unsigned NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `sex` varchar(50) DEFAULT NULL,
  `nation` varchar(50) DEFAULT NULL,
  `birth` varchar(50) DEFAULT NULL,
  `politicsstatus` varchar(50) DEFAULT NULL,
  `educationbackground` varchar(50) DEFAULT NULL,
  `company` varchar(50) DEFAULT NULL,
  `duty` varchar(50) DEFAULT NULL,
  `companyaddress` varchar(50) DEFAULT NULL,
  `phone` bigint(20) DEFAULT NULL,
  `workexperience` varchar(500) DEFAULT NULL,
  `workperformance` varchar(500) DEFAULT NULL,
  `opinion1` varchar(500) DEFAULT NULL,
  `opinion2` varchar(500) DEFAULT NULL,
  `opinion3` varchar(500) DEFAULT NULL,
  `status` tinyint(4) DEFAULT NULL,
  `reportdate` date DEFAULT NULL,
  `ts` int(2) DEFAULT NULL COMMENT '暂存标识',
  `opinion` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_intellectualpropertyapply_companys` (`companyid`),
  CONSTRAINT `FK_intellectualpropertyapply_companys` FOREIGN KEY (`companyid`) REFERENCES `companys` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='知识产权先进个人/优秀工作者认定申请表';

-- 正在导出表  dianchi.intellectualpropertyapply 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `intellectualpropertyapply` DISABLE KEYS */;
/*!40000 ALTER TABLE `intellectualpropertyapply` ENABLE KEYS */;

-- 导出  表 dianchi.intellectualpropertyapplystorage 结构
CREATE TABLE IF NOT EXISTS `intellectualpropertyapplystorage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `intellectualpropertyapplyid` int(10) unsigned NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `type` varchar(200) DEFAULT NULL,
  `url` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_intellectualpropertyapplystorage_intellectualpropertyapply` (`intellectualpropertyapplyid`),
  CONSTRAINT `FK_intellectualpropertyapplystorage_intellectualpropertyapply` FOREIGN KEY (`intellectualpropertyapplyid`) REFERENCES `intellectualpropertyapply` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- 正在导出表  dianchi.intellectualpropertyapplystorage 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `intellectualpropertyapplystorage` DISABLE KEYS */;
/*!40000 ALTER TABLE `intellectualpropertyapplystorage` ENABLE KEYS */;

-- 导出  表 dianchi.myuser 结构
CREATE TABLE IF NOT EXISTS `myuser` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `realm` varchar(512) DEFAULT NULL,
  `username` varchar(512) DEFAULT NULL,
  `password` varchar(512) NOT NULL,
  `credentials` text,
  `challenges` text,
  `email` varchar(512) NOT NULL,
  `emailVerified` tinyint(1) DEFAULT NULL,
  `verificationToken` varchar(512) DEFAULT NULL,
  `status` varchar(512) DEFAULT NULL,
  `created` date DEFAULT NULL,
  `lastUpdated` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- 正在导出表  dianchi.myuser 的数据：~1 rows (大约)
/*!40000 ALTER TABLE `myuser` DISABLE KEYS */;
REPLACE INTO `myuser` (`id`, `realm`, `username`, `password`, `credentials`, `challenges`, `email`, `emailVerified`, `verificationToken`, `status`, `created`, `lastUpdated`) VALUES
	(1, NULL, 'djqsys', '$2a$10$Dbec9HcbZ20GbHHJy6.LxueXNFpKA5atQsuXBYpK0jaHWaU4RKE6O', NULL, NULL, 'djqsys@xx.com', NULL, NULL, NULL, NULL, NULL);
/*!40000 ALTER TABLE `myuser` ENABLE KEYS */;

-- 导出  表 dianchi.notice 结构
CREATE TABLE IF NOT EXISTS `notice` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `type` varchar(200) DEFAULT NULL,
  `url` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  dianchi.notice 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `notice` DISABLE KEYS */;
/*!40000 ALTER TABLE `notice` ENABLE KEYS */;

-- 导出  表 dianchi.projects 结构
CREATE TABLE IF NOT EXISTS `projects` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `projectname` varchar(200) NOT NULL,
  `projecttype` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  dianchi.projects 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;

-- 导出  表 dianchi.provinceassistancefunds 结构
CREATE TABLE IF NOT EXISTS `provinceassistancefunds` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `companyid` int(11) unsigned NOT NULL,
  `projectname` varchar(50) DEFAULT NULL,
  `companytype` varchar(50) DEFAULT NULL,
  `plantype` varchar(50) DEFAULT NULL,
  `industrytype` varchar(50) DEFAULT NULL COMMENT '行业类别',
  `projecttype` varchar(50) DEFAULT NULL,
  `secretlevel` varchar(50) DEFAULT NULL,
  `startdate` varchar(50) DEFAULT '2019-01-01',
  `enddate` varchar(50) DEFAULT '2019-01-01',
  `budget` float DEFAULT NULL,
  `nationfunds` float DEFAULT NULL,
  `provincefunds` float DEFAULT NULL,
  `cityfunds` float DEFAULT NULL,
  `districtfunds` float DEFAULT NULL,
  `responseperson` varchar(50) DEFAULT NULL,
  `contractperson` varchar(50) DEFAULT NULL,
  `telephone` bigint(20) DEFAULT '0',
  `phone` bigint(20) DEFAULT '0',
  `other` varchar(200) DEFAULT '0',
  `status` tinyint(4) DEFAULT '0',
  `reportdate` date DEFAULT NULL,
  `ts` int(2) DEFAULT NULL COMMENT '暂存标识',
  `opinion` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_provinceassistancefunds_companys` (`companyid`),
  CONSTRAINT `FK_provinceassistancefunds_companys` FOREIGN KEY (`companyid`) REFERENCES `companys` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- 正在导出表  dianchi.provinceassistancefunds 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `provinceassistancefunds` DISABLE KEYS */;
/*!40000 ALTER TABLE `provinceassistancefunds` ENABLE KEYS */;

-- 导出  表 dianchi.provinceassistancefundsstorage 结构
CREATE TABLE IF NOT EXISTS `provinceassistancefundsstorage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `provinceassistancefundsid` int(10) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `type` varchar(200) DEFAULT NULL,
  `url` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_provincestorage_provincefunds` (`provinceassistancefundsid`),
  CONSTRAINT `FK_provincestorage_provincefunds` FOREIGN KEY (`provinceassistancefundsid`) REFERENCES `provinceassistancefunds` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- 正在导出表  dianchi.provinceassistancefundsstorage 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `provinceassistancefundsstorage` DISABLE KEYS */;
/*!40000 ALTER TABLE `provinceassistancefundsstorage` ENABLE KEYS */;

-- 导出  表 dianchi.scienceproj 结构
CREATE TABLE IF NOT EXISTS `scienceproj` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `companyid` int(10) unsigned NOT NULL DEFAULT '0',
  `cooperation1` varchar(100) DEFAULT '0',
  `cooperation2` varchar(100) DEFAULT '0',
  `cooperation3` varchar(100) DEFAULT '0',
  `industrycategory` varchar(50) DEFAULT NULL,
  `projectname` varchar(100) DEFAULT '0',
  `secretlevel` varchar(20) DEFAULT '0',
  `responseperson` varchar(20) DEFAULT '0',
  `responsetelephone` bigint(11) DEFAULT NULL,
  `responsephone` bigint(11) DEFAULT NULL,
  `responsemail` varchar(100) DEFAULT '0',
  `contactperson` varchar(20) DEFAULT '0',
  `contacttelephone` bigint(11) DEFAULT NULL,
  `contactphone` bigint(11) DEFAULT NULL,
  `contactemail` varchar(100) DEFAULT '0',
  `plantype` varchar(50) DEFAULT '0',
  `isbigcompany` varchar(10) DEFAULT '0',
  `ishaveproject` varchar(10) DEFAULT '0',
  `applicationunitopinion` varchar(1000) DEFAULT '0',
  `status` tinyint(4) DEFAULT '0',
  `startdate` varchar(50) DEFAULT NULL,
  `enddate` varchar(50) DEFAULT NULL,
  `reportdate` date DEFAULT NULL,
  `ts` int(2) DEFAULT NULL COMMENT '暂存标识',
  `opinion` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_scienceproj_companys` (`companyid`),
  CONSTRAINT `FK_scienceproj_companys` FOREIGN KEY (`companyid`) REFERENCES `companys` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  dianchi.scienceproj 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `scienceproj` DISABLE KEYS */;
/*!40000 ALTER TABLE `scienceproj` ENABLE KEYS */;

-- 导出  表 dianchi.sciencestorage 结构
CREATE TABLE IF NOT EXISTS `sciencestorage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `scienceprojectid` int(10) unsigned NOT NULL DEFAULT '0',
  `name` varchar(200) DEFAULT NULL,
  `type` varchar(200) DEFAULT NULL,
  `url` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_sciencestorage_scienceproj` (`scienceprojectid`),
  CONSTRAINT `FK_sciencestorage_scienceproj` FOREIGN KEY (`scienceprojectid`) REFERENCES `scienceproj` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  dianchi.sciencestorage 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `sciencestorage` DISABLE KEYS */;
/*!40000 ALTER TABLE `sciencestorage` ENABLE KEYS */;

-- 导出  表 dianchi.sciprojectcontent 结构
CREATE TABLE IF NOT EXISTS `sciprojectcontent` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `scienceprojectid` int(10) unsigned NOT NULL DEFAULT '0',
  `necessity` varchar(520) DEFAULT '0',
  `feasibility` varchar(520) DEFAULT '0',
  `content` varchar(520) DEFAULT '0',
  `technicalindicators` varchar(520) DEFAULT '0',
  `financialindicators` varchar(520) DEFAULT '0',
  `ts` int(2) DEFAULT NULL COMMENT '暂存标识',
  PRIMARY KEY (`id`),
  KEY `FK_sciprojectcontent_scienceproj` (`scienceprojectid`),
  CONSTRAINT `FK_sciprojectcontent_scienceproj` FOREIGN KEY (`scienceprojectid`) REFERENCES `scienceproj` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- 正在导出表  dianchi.sciprojectcontent 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `sciprojectcontent` DISABLE KEYS */;
/*!40000 ALTER TABLE `sciprojectcontent` ENABLE KEYS */;

-- 导出  表 dianchi.sciprojectoutput 结构
CREATE TABLE IF NOT EXISTS `sciprojectoutput` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `scienceprojectid` int(10) unsigned NOT NULL,
  `newproducts` int(11) unsigned DEFAULT '0',
  `newproductsname` varchar(200) DEFAULT NULL,
  `newmaterial` int(10) unsigned DEFAULT '0',
  `newmaterialname` varchar(200) DEFAULT NULL,
  `newtechnology` int(10) unsigned DEFAULT '0',
  `newtechnologyname` varchar(200) DEFAULT NULL,
  `newdevice` int(10) unsigned DEFAULT '0',
  `newdevicename` varchar(200) DEFAULT NULL,
  `softcopyright` int(10) unsigned DEFAULT '0',
  `softcopyrightname` varchar(200) DEFAULT NULL,
  `agricultureproducts` int(10) unsigned DEFAULT '0',
  `agricultureproductsname` varchar(200) DEFAULT NULL,
  `greenproducts` int(10) unsigned DEFAULT '0',
  `greenproductsname` varchar(200) DEFAULT NULL,
  `pollutionfreeproducts` int(10) unsigned DEFAULT '0',
  `pollutionfreeproductsname` varchar(200) DEFAULT NULL,
  `achievements` int(10) unsigned DEFAULT '0',
  `achievementsname` varchar(200) DEFAULT NULL,
  `otherachievements` varchar(50) DEFAULT '0',
  `otherachievementsname` varchar(200) DEFAULT NULL,
  `nationalhightech` varchar(100) DEFAULT NULL,
  `nationalhightechamount` int(10) unsigned DEFAULT '0',
  `innovationcompany` varchar(100) DEFAULT NULL,
  `innovationcompanyamount` int(10) unsigned DEFAULT '0',
  `incubatorcompany` varchar(100) DEFAULT NULL,
  `incubatorcompanyamount` int(10) unsigned DEFAULT '0',
  `keycompany` varchar(100) DEFAULT NULL,
  `keycompanyamount` int(10) unsigned DEFAULT '0',
  `researchcenter` varchar(100) DEFAULT NULL,
  `researchcenteramount` int(10) unsigned DEFAULT '0',
  `industryunion` varchar(100) DEFAULT NULL,
  `industryunionamount` int(10) unsigned DEFAULT '0',
  `workstation` varchar(100) DEFAULT NULL,
  `workstationamount` int(10) unsigned DEFAULT '0',
  `innovationteam` varchar(100) DEFAULT NULL,
  `innovationteamamount` int(10) unsigned DEFAULT '0',
  `innovationlab` varchar(100) DEFAULT NULL,
  `innovationlabamount` int(10) unsigned DEFAULT '0',
  `ipright` varchar(100) DEFAULT NULL,
  `iprightamount` int(10) unsigned DEFAULT '0',
  `otherplatform` varchar(100) DEFAULT NULL,
  `otherplatformamount` int(10) unsigned DEFAULT '0',
  `nationalstandard` varchar(100) DEFAULT NULL,
  `nationalstandardamount` int(10) unsigned DEFAULT '0',
  `industrystandard` varchar(100) DEFAULT NULL,
  `industrystandardamount` int(10) unsigned DEFAULT '0',
  `localstandard` varchar(100) DEFAULT NULL,
  `localstandardamount` int(10) unsigned DEFAULT '0',
  `companystandard` varchar(100) DEFAULT NULL,
  `companystandardamount` int(10) unsigned DEFAULT '0',
  `applyinventionpatent` varchar(100) DEFAULT NULL,
  `applyinventionpatentamount` int(10) unsigned DEFAULT '0',
  `applymodelpatent` varchar(100) DEFAULT NULL,
  `applymodelpatentamount` int(10) unsigned DEFAULT '0',
  `applyappearancepatent` varchar(100) DEFAULT NULL,
  `applyappearanceapatentmount` int(10) unsigned DEFAULT '0',
  `inventionpatent` varchar(100) DEFAULT NULL,
  `inventionpatentamount` int(10) unsigned DEFAULT '0',
  `modelpatent` varchar(100) DEFAULT NULL,
  `modelpatentamount` int(10) unsigned DEFAULT '0',
  `appearancepatent` varchar(100) DEFAULT NULL,
  `appearanceapatentamount` int(10) unsigned DEFAULT '0',
  `sci` varchar(300) DEFAULT NULL,
  `sciamount` int(10) unsigned DEFAULT '0',
  `corejournals` varchar(300) DEFAULT NULL,
  `corejournalsamount` int(10) unsigned DEFAULT '0',
  `provincejournals` varchar(300) DEFAULT NULL,
  `provincejournalsamount` int(10) unsigned DEFAULT '0',
  `otherjournals` varchar(300) DEFAULT NULL,
  `otherjournalsamount` int(10) unsigned DEFAULT '0',
  `researchreport` varchar(300) DEFAULT NULL,
  `researchreportamount` int(10) unsigned DEFAULT '0',
  `monograph` varchar(300) DEFAULT NULL,
  `monographamount` int(10) unsigned DEFAULT '0',
  `compilingbook` varchar(300) DEFAULT NULL,
  `compilingbookamount` int(10) unsigned DEFAULT '0',
  `coauthorbook` varchar(300) DEFAULT NULL,
  `coauthorbookamount` int(10) unsigned DEFAULT '0',
  `otherbook` varchar(300) DEFAULT NULL,
  `otherbookamount` int(10) unsigned DEFAULT '0',
  `otherability` varchar(100) DEFAULT NULL,
  `garden` varchar(100) DEFAULT NULL,
  `gardenamount` int(10) unsigned DEFAULT '0',
  `base` varchar(100) DEFAULT NULL,
  `baseamount` int(10) unsigned DEFAULT '0',
  `threeaffirm` varchar(100) DEFAULT NULL,
  `threeaffirmamount` int(10) unsigned DEFAULT '0',
  `experimentalbase` varchar(100) DEFAULT NULL,
  `experimentalbaseamount` int(10) unsigned DEFAULT '0',
  `pilotproductionline` varchar(100) DEFAULT NULL,
  `pilotproductionlineamount` int(10) unsigned DEFAULT '0',
  `productionline` varchar(100) DEFAULT NULL,
  `productionlineamount` int(10) unsigned DEFAULT '0',
  `othertech` varchar(100) DEFAULT NULL,
  `othertechamount` int(10) unsigned DEFAULT '0',
  `cooperation` varchar(100) DEFAULT NULL,
  `cooperationamount` int(10) unsigned DEFAULT '0',
  `transformation` varchar(100) DEFAULT NULL,
  `transformationamount` int(10) unsigned DEFAULT '0',
  `assignment` varchar(100) DEFAULT NULL,
  `assignmentamount` int(10) unsigned DEFAULT '0',
  `transaction` varchar(100) DEFAULT NULL,
  `transactionamount` int(10) unsigned DEFAULT '0',
  `otherapplication` varchar(100) DEFAULT NULL,
  `otherapplicationamount` int(10) unsigned DEFAULT '0',
  `outputvalue` float unsigned DEFAULT '0',
  `salesvolume` float unsigned DEFAULT '0',
  `tax` float unsigned DEFAULT '0',
  `profit` float unsigned DEFAULT '0',
  `foreigncurrency` float DEFAULT '0',
  `costreduction` float DEFAULT '0',
  `othervalue` varchar(50) DEFAULT '0',
  `energysaving` varchar(100) DEFAULT NULL,
  `energysavingamount` int(10) unsigned DEFAULT '0',
  `cod` varchar(100) DEFAULT NULL,
  `codamount` int(10) unsigned DEFAULT '0',
  `SO2` varchar(100) DEFAULT NULL,
  `SO2amount` int(10) unsigned DEFAULT '0',
  `nox` varchar(100) DEFAULT NULL,
  `noxamount` int(10) unsigned DEFAULT '0',
  `ammonianitrogen` varchar(100) DEFAULT NULL,
  `ammonianitrogenamount` int(10) unsigned DEFAULT '0',
  `improvement` varchar(50) DEFAULT '0',
  `solidwaste` varchar(100) DEFAULT NULL,
  `solidwasteamount` int(10) unsigned DEFAULT '0',
  `otherecology` varchar(100) DEFAULT NULL,
  `employment` varchar(100) DEFAULT NULL,
  `employmentamount` int(10) unsigned DEFAULT '0',
  `farmerincomeincrease` varchar(100) DEFAULT NULL,
  `farmerincomeincreaseamount` int(10) unsigned DEFAULT '0',
  `technologyservice` varchar(100) DEFAULT NULL,
  `technologyserviceamount` int(10) unsigned DEFAULT '0',
  `healthservice` varchar(100) DEFAULT NULL,
  `healthserviceamount` int(10) unsigned DEFAULT '0',
  `publicsecurity` varchar(100) DEFAULT NULL,
  `publicsecurityamount` int(10) unsigned DEFAULT '0',
  `sciencebase` varchar(100) DEFAULT NULL,
  `sciencebaseamount` int(10) unsigned DEFAULT '0',
  `scienceactivity` varchar(100) DEFAULT NULL,
  `scienceactivityamount` int(10) unsigned DEFAULT '0',
  `sciencetraining` varchar(100) DEFAULT NULL,
  `sciencetrainingamount` int(10) unsigned DEFAULT '0',
  `sciencepropagation` varchar(100) DEFAULT NULL,
  `sciencepropagationamount` int(10) unsigned DEFAULT '0',
  `beneficiary` varchar(100) DEFAULT NULL,
  `beneficiaryamount` int(10) unsigned DEFAULT '0',
  `othersociality` varchar(100) DEFAULT NULL,
  `otherdevelopment` varchar(100) DEFAULT NULL,
  `overseastalent` varchar(100) DEFAULT NULL,
  `overseastalentamount` int(10) unsigned DEFAULT '0',
  `advancedtalent` varchar(100) DEFAULT NULL,
  `advancedtalentamount` int(10) unsigned DEFAULT '0',
  `nationaltalent` varchar(100) DEFAULT NULL,
  `nationaltalentamount` int(10) unsigned DEFAULT '0',
  `provincetalent` varchar(100) DEFAULT NULL,
  `provincetalentamount` int(10) unsigned DEFAULT '0',
  `innovationtalent` varchar(100) DEFAULT NULL,
  `innovationtalentamount` int(10) unsigned DEFAULT '0',
  `sciencetalent` varchar(100) DEFAULT NULL,
  `sciencetalentamount` int(10) unsigned DEFAULT '0',
  `specialagent` varchar(100) DEFAULT NULL,
  `specialagentamount` int(10) unsigned DEFAULT '0',
  `instructor` varchar(100) DEFAULT NULL,
  `instructoramount` int(10) unsigned DEFAULT '0',
  `citysciencetalent` varchar(100) DEFAULT NULL,
  `citysciencetalentamount` int(10) unsigned DEFAULT '0',
  `citytalent` varchar(100) DEFAULT NULL,
  `citytalentamount` int(10) unsigned DEFAULT '0',
  `cityinnovationtalent` varchar(100) DEFAULT NULL,
  `cityinnovationtalentamount` int(10) unsigned DEFAULT '0',
  `cityspecialagent` varchar(100) DEFAULT NULL,
  `cityspecialagentamount` int(10) unsigned DEFAULT '0',
  `othertalent` varchar(100) DEFAULT NULL,
  `othertalentamount` int(10) unsigned DEFAULT '0',
  `doctor` varchar(100) DEFAULT NULL,
  `doctoramount` int(10) unsigned DEFAULT '0',
  `graduate` varchar(100) DEFAULT NULL,
  `graduateamount` int(10) unsigned DEFAULT '0',
  `undergraduate` varchar(100) DEFAULT NULL,
  `undergraduateamount` int(10) unsigned DEFAULT '0',
  `senior` varchar(100) DEFAULT NULL,
  `senioramount` int(10) unsigned DEFAULT '0',
  `middle` varchar(100) DEFAULT NULL,
  `middleamount` int(10) unsigned DEFAULT '0',
  `othertitle` varchar(100) DEFAULT NULL,
  `othertitleamount` int(10) unsigned DEFAULT '0',
  `nationalreward` varchar(100) DEFAULT NULL,
  `nationalrewardamount` int(10) unsigned DEFAULT '0',
  `provincereward` varchar(100) DEFAULT NULL,
  `provincerewardamount` int(10) unsigned DEFAULT '0',
  `cityreward` varchar(100) DEFAULT NULL,
  `cityrewardamount` int(10) unsigned DEFAULT '0',
  `countyreward` varchar(100) DEFAULT NULL,
  `countyrewardamount` int(10) unsigned DEFAULT '0',
  `othersoftcopyright` varchar(100) DEFAULT NULL,
  `othersoftcopyrightamount` int(10) unsigned DEFAULT '0',
  `ts` int(2) DEFAULT NULL COMMENT '暂存标识',
  PRIMARY KEY (`id`),
  KEY `FK_sciprojectoutput_scienceproj` (`scienceprojectid`),
  CONSTRAINT `FK_sciprojectoutput_scienceproj` FOREIGN KEY (`scienceprojectid`) REFERENCES `scienceproj` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- 正在导出表  dianchi.sciprojectoutput 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `sciprojectoutput` DISABLE KEYS */;
/*!40000 ALTER TABLE `sciprojectoutput` ENABLE KEYS */;

-- 导出  表 dianchi.sciprojectsupportcondition 结构
CREATE TABLE IF NOT EXISTS `sciprojectsupportcondition` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `scienceprojectid` int(10) unsigned NOT NULL DEFAULT '0',
  `projectmanagerule` varchar(100) DEFAULT '0',
  `financialmanagerule` varchar(100) DEFAULT '0',
  `universitypartner` int(11) DEFAULT '0',
  `institutepartner` int(11) DEFAULT '0',
  `foreignpartner` int(11) DEFAULT '0',
  `otherpartner` int(11) DEFAULT '0',
  `cooperationways` varchar(100) DEFAULT '0',
  `districtfunds` float DEFAULT '0',
  `ownfunds` float DEFAULT '0',
  `loanfunds` float DEFAULT '0',
  `nationfunds` float DEFAULT '0',
  `otherfunds` float DEFAULT '0',
  `lastyearrdcost` float DEFAULT '0',
  `lastyearsaleincome` float DEFAULT '0',
  `seniorpersons` int(10) unsigned DEFAULT '0',
  `mediumpersons` int(10) unsigned DEFAULT '0',
  `primarypersons` int(10) unsigned DEFAULT '0',
  `otherpersons` int(10) unsigned DEFAULT '0',
  `doctors` int(10) unsigned DEFAULT '0',
  `graduates` int(10) unsigned DEFAULT '0',
  `undergraduates` int(10) unsigned DEFAULT '0',
  `otherdegrees` int(10) unsigned DEFAULT '0',
  `nationalhightech` varchar(100) DEFAULT '0',
  `innovationcompany` varchar(100) DEFAULT '0',
  `incubatorcompany` varchar(100) DEFAULT '0',
  `keycompany` varchar(100) DEFAULT '0',
  `researchcenter` varchar(100) DEFAULT '0',
  `industryunion` varchar(100) DEFAULT '0',
  `workstation` varchar(100) DEFAULT '0',
  `innovationteam` varchar(100) DEFAULT '0',
  `innovationlab` varchar(100) DEFAULT '0',
  `ipright` varchar(100) DEFAULT '0',
  `agricultureauthentication` varchar(100) DEFAULT '0',
  `otherauthentication` varchar(100) DEFAULT '0',
  `researchcondition` varchar(500) DEFAULT '0',
  `ts` int(2) DEFAULT NULL COMMENT '暂存标识',
  PRIMARY KEY (`id`),
  KEY `FK_sciprojectsupportcondition_scienceproj` (`scienceprojectid`),
  CONSTRAINT `FK_sciprojectsupportcondition_scienceproj` FOREIGN KEY (`scienceprojectid`) REFERENCES `scienceproj` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  dianchi.sciprojectsupportcondition 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `sciprojectsupportcondition` DISABLE KEYS */;
/*!40000 ALTER TABLE `sciprojectsupportcondition` ENABLE KEYS */;

-- 导出  表 dianchi.storagefile 结构
CREATE TABLE IF NOT EXISTS `storagefile` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `type` varchar(200) DEFAULT NULL,
  `url` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=248 DEFAULT CHARSET=utf8;

-- 正在导出表  dianchi.storagefile 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `storagefile` DISABLE KEYS */;
/*!40000 ALTER TABLE `storagefile` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
