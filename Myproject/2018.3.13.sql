/*
SQLyog  v12.2.6 (64 bit)
MySQL - 5.5.53 : Database - tourism
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`tourism` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_bin */;

USE `tourism`;

/*Table structure for table `t_accesstoken` */

DROP TABLE IF EXISTS `t_accesstoken`;

CREATE TABLE `t_accesstoken` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `AccessToken` text COLLATE utf8_bin,
  `createTime` char(20) COLLATE utf8_bin DEFAULT NULL COMMENT '生成时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=87 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `t_accesstoken` */

insert  into `t_accesstoken`(`id`,`AccessToken`,`createTime`) values 
(29,'6_RcqmQNeCLIepTVlrxH3OoqL0QfAGwWxv1u5T1OZAb4tBMqPXR6eqAzllZGiCUd8xmfomC5XY-pzOw_5qpCNgvqBmfv19KhHAj5CwwQORrbL0-hjsqsCcCyXBgE8qwO1k2E0XLyLDQAK8JJqzEEHaABAOOR','1516592448'),
(30,'6_P7UluowWF2OCIhIvnqObzZu57mpgUPT6oTa8dLP6sjFZi3bc5z-ED2yeyHwZC1g9kfAGY8RJr5Z_BFKYaEuXA0vZNbJNMngpS7z6s4d3kut3FpezunmYJNdGiHRf17Ia_xDtjpIAegKXG-JOOUWhAFADJL','1516602480'),
(28,'6_-Z3s9tnzb9_dDkU5hIXD0nZqKHVYZUDsuYT5zO_YvACL8-0BLWcpMCWcX6u0Brm52WwMDiKbYaUviKJJEXYvz53o1_BEdC8QzdNzGBH5FGigFpTEEjQenNUW41ZdidQezwy84GgS1hG3zSZ5XZLaAFAFHT','1516586385'),
(27,'5_YTLF6g_3V28GBET8yEl4APZKHdgeJcUpf4DpBC0vCAToiRYIGRUwmC_UDsJZ_N0Z3hylWvFVF0XCxwJuDEtibwt2kkdZ-JsHvAgqMtUJLfVeJejDvQpMRjrTvqtA2Vhcdugn_pgV5vBV3G1gRWJgAAAGLY','1515986092'),
(26,'5_vpscGbwUKXraEMv8bUhJqs1MfzhAmJQZ0tqt9j-WbBCrFExy_M0DK-OsV_RBK46Kc5mBojRpgUadb69DPXbmRm_yQoqDdKhk6vT2731clYp4eGFUOMaJO9T9cagtXNUcDbCWrdKAZWK1CGZNMVEeAJAWFO','1515729396'),
(25,'5_3FdyG6nvqpiPHQX2EkX2bG71_oUMRqLQDG8MhbVOiHpHIVhu73UaXZg507ZPTrBh_S4NKkg7Q-f3V8RLNwvMWkrR-arRSLjwTh9Vuy67al-wfFZoqLnEJUXvlA9Wn-LcnbK5TJ04IVkhEb91PYXfAHAKTS','1515553749'),
(24,'5_44kucu5aEYRqBkcgqMIpTsKcr52n4AMuz1_8CG7SSsjuGDsDTW1Krbk2sx9WZg3JL1gzvx19LTE9cLkvm68gaUBZI7m5qC4pzVcL6rBjAC74_0YeAxMaikw5wE30z0fS5rwl3VKjl1hH1TNoCCDaAAAHHI','1515484287'),
(23,'5_4JJ4Bk4XYipjmBK4T1babqbR0a96EQRNTcofmjM635VHqVRAV_gvIaZgqLZ9HJgsA9D7kbef62mXzabc65p4EVcp1pZoB2h-2pvqnLjaG0rQOPyWUMi7zdUdFQR1MLYMAnosFnkhkkXXkB2yFOYeAIAJSC','1515379328'),
(22,'5_MlEDvAhjnCrTVFczC_bf5DzVs0e4XBHX9cmG4dyw91ToNxemyTjeboIWHWdjv8-riKKlnMRTrqpfsfcSXxzZLiNm0a_DZ-WtqGJthCyR7hev9t2m79sqtWd4fE32l4CL7emWt8veCFawpNNwGHXfAIANOE','1515152060'),
(21,'5_-EOhxlPMQBJx3l4iV0oAMo4znqZjKjShe6f3yfxWkdmQxcMlIJ7waqhx0VWuxKRFY-c-q-zRi_rKHWGHh50Y3Z_KY94YX0vHLddqrVBtIVcy_bWHqzN4sOYQYM4wL5jG1WBTuzwEHlVporblLVRfAIAPZV','1515146056'),
(20,'5_zQIvbgBrH6v14Y07ek4NiXhkKXrTGWgXoNG_7639xkI2kOkSPB-Eso6E0KL8nHvIMrEEhPIIHVJhW19p5ycx2heMRJxROwhQKrx7Sf8LZQvBchMWgYQDaIhV2BhqUfyyf4waO3EI6I7rj5rMJAFfAJAULQ','1515137263'),
(19,'5_JOxYnURXPYR3RocDpV2BoZjoTI-Bdu1jWiSiEz0pnhTR7r_Adatr2FDtCRAaKdz3T12LelzJWt2AYVyNYi3YwLPg7WQqMIikgaND7zFLRob8baIGOhYTUjucl7RDtHufDgeM6Vnk2B-iThStAGFfABAVBA','1515122011'),
(31,'6_5aj1esOz2KaEXx2lzBNwBT91mTC-6qyXjUs8JxHq_DTx0hVSi-CMFj8wt29dV_C3kGS9bHTq_96C6ghOWkw107JJVKqjVuJ7PEAVwKZCYsmYSxdyjGVI8_kp5RO4L0zrYIpDR32tI9mKz1sTLENgAAATMV','1516608525'),
(32,'6_aVm9e4aTAJxvELgo5_x5Fe2-ncqPF6Oeuwkj2LgT5eW0fs7-4dP9j0jhRW0qchMJ2ko_mdhmeLuJZok14Gk5enE1dRqoeWzMp16OUJKW7v_-68GNHkzQ6TCECGM7gJ3qBbH2R9eUxuVumL-iIJPdABAZAG','1516614534'),
(33,'6_1ImYa28Ukd5-vuo1IfXOmuueyTHExcqqO4tklvAgaM9k9OsULYkARD7NJUVDzhH-nGwFjRbn6xX5Fzl6c9NXq5-rOkTDISiv1mhMvg6k3lzud1nBSUwKlAudMm2yiKMQsFrYqzmGtpSFufrpOIXhABACWL','1516620851'),
(34,'6_vJMoxlJTdgWDRCnUH9LbyzYxaX-RiOvQ2W3eRI8aDRX0Ngs-LNDsK7AiXsf87L8DPvtzkcGaN8HHLflz-OMkUzeELlnUY-h9t8Dv5ZRjG4f5Cf28qDBbzhfYm_Uw-CamnEBU5tCHjLsGCrqLXJPaADAPBH','1516669657'),
(35,'6_q6gyFBXIrA5upM5kTvhFOLUPt8247WVz1dj_NTckeRfYRqGONgAFeU9bpbAktY_cso-ZSrcCUDgmENpqy6HvWX7dF1HXgEwy-o2-rNE5YZEDae62PpjLqmEE4PkARWcACAKBG','1516675855'),
(36,'6_czUmXxbreVo9sa4P_drxB5b2RQLzJ1p6HB1-k_v6XIPyPFv_xE4UzHto9lMRr5eTN8b63-y3Z9aBQPLtIWBMEnK8uo1kNcsb8L1JTzrNc17UNaX_LaFTI9NwBLMpCNj4mdNFcfEOjSWI28yMTKLaAGAHYZ','1516690282'),
(37,'6_JlKwFUTwt3k0QuFf2-yZTF4_CgNPHww5vhtbNiVrQMx9ftU40SSLzK6gEjAa7ozyvNcTCPiDczMoqc_fSkqdbyjvwsjC09qiKRLH7dhL7uh7iKQF35Fs0NC-yICbe-E53RjtD5YvVmKExCLuXULaADAJGX','1516696312'),
(38,'6_YOU6UymfSFbpiKlNh0zgEQifBhfpe6XAcA-AXWAiuUTKVxMqEyaGLlhITJdzOImqbOb0oyRhEIYjmwxVOxaSiCC9XfA8985-xipNOfgpp_-VXHQsHceIGcyvO7AxdLuJj7jTVWaV9nkEMDgFNPDbABAWYM','1516702579'),
(39,'6_7tfZAw0-IHGOvRI6Mg_-mXbzVXA27-THuGdQdFtKLwYZV7OZIfOQgQk_SqVOVZ9CVMsRv_2KMzT0XPjpsZsJ3Kc2tel6exKdty2BiUGt5t_ST65EpmNjWRfEYLplmxL5K3bvYi6zc4XXdHYPZDYdABAIMH','1516758691'),
(40,'6_aRcO3XBCi51QsWscCBax1Zy_vTAeO4rkhJYDaL72GvtX247qUiHzFjEdnZvUyaEQAlBJoy1pdMZaL-mf9NLL1gUT4KpDLZRXxzNTQtP-Fw6RWb9sdMTuM1f9KU-FnmfnZVJ4QEYEtB8OrbMzGXCbAJAVMR','1516774698'),
(41,'6_IwlO8Q1Ib_p0Jh-VsC-xPQ1NynyWddopMtFLOInQ27_h9Ac4mi9mh9GxRBq_VMGR0C33X-62Pjv8z6CmikVSW5VJHfI377adDC_OUtoBq13ap938Tr6XFgh8LfoDy_j9nouTP4JCIlIoajj0IZRaAAACTL','1516780724'),
(42,'6_jTPhxexk0bRP4KHfbByEOdXaaJ3LOUaG3a6ERxeIx4WeLMmK87BoaxaMl7Uz06serH9pRHKF-5aI63HcLbnpPgzWcNJx5ASc1wniNXqX0DmO8t3a2LzT168c2Ni6ga0CastJ9MbILvyYxJdzCHAhABAUZS','1516786914'),
(43,'6_88P2sy-1nbv2jtE7djh95EQPTLM9CXLVTXwI1InCvEQOtbOqYh4RXNLQy3j1nI2tGvQIzdYB26KWyLeNUupCeBiGnDtJvitYmfzZZaKkJT3f4-HXvrrT3o7dILwj-AxJ9KnLGZ0Qs3Y2N75pNMAgAIAEDR','1516845009'),
(44,'6_Mc1ncdAqU_qMkKhhJ4QSXWUfQYokW1mR0_sV5cCvrRkt914eV6URH-pD2v1ufo--TU5FkPR3BpdmGkY1VqDLcHUeY-aU9WOmNhbCuyQK0zUNEmkk6qPLGpbnhdizxbE7CCE0oefbWwEHApXjSIXiAFAYOD','1516863780'),
(45,'6_SV1uXM09pYe17RSzVoyYu9H76Y_fIhtvoDvJdq9JFdQu0UNTj0sheC4uxG66rqQletFgrRS5JcQefQ_zWo3Dx4GxlHZnP9sFgkfF5LNA0mGChixQi2tE0NcBjhuWJKcX4fqlU4tyHJQk11a7WKLbABAAOP','1516874012'),
(46,'6_0Ok6mg43hJmrsnPIdmYGc6hlAlJRPi7A7vsA9TfeM6czSebx4Gsx4wxSCv6EMApwy9nihPl_zNg-MyJSF-ZtCjHiQxKhsY3Tjd-NpxKZJkSXO1V1NE0SD2NQ0-uHw2m3ix0ROLJph2R-RYGKQQFeABAZZO','1517018755'),
(47,'6_WIMBH3PBghEgvwwhh0zgEQifBhfpe6XAcA-AXepF187vzmQ68yqCXUdmdbyOdyvnpVXOao0A0JvUf3vQf-s-TOO9bopZ_km1hSYZFoOM0d9BNEDunCGuYqXwYZ_YomvBk_BgVfJopS4HTsOhPGWbADAKBR','1517048748'),
(48,'6_COvKJpm6dVHicWUZNcsr6xeebpUXMGqu3wI0FK0j4O3tGTZ3CgRHVwHczSjqIabhBa0gPPVOQ_Ps_5YG6Hn6Q_QbicEe7IYvyjsGnhg0X76lIuyCEx4mZdMfP-HSgwgJBvuKzCNl6tXGW9ciABLhAFAVWG','1517117156'),
(49,'6_fYrBdbAI30-fA2eR2-yZTF4_CgNPHww5vhtbNvc4vYzYnZbALyl6m452Zo1Bchvoj6zOp7HECrhYnYexIMZm2DwNchLK-VRodKOj1kHCx7Zpxq9qY-40rf4oCe9xli6gUlprpFvYzvMu21ckOOUaAFAZZF','1517127118'),
(50,'6_rbsBUBXSSFqegymWvss2FeAwWCpRwb20jPk9nRuxBcnKqZiuXdDWa6wtD2GJBacynvacG3XN7g5tgoj8QJuJeAoVOljfFiZa5JezhMi4QeLkq5oiHmLjsrKB6lcp1P5FIorcrWoV5zC5VwIEREIfAHAERV','1517209566'),
(51,'6_TiZHpw-FJRaG9krVYSXLE0waILdKOyzwZXfy-zC-Y9KOe7Nac8gbf-HY61yVP9B5BLDsK9pIW04I-rV_5Mn6t-uewlRQx1RjAPAORkWZ2C_xaVTDf3IcRMWbZJIJ6iTcFNOSyapo4KynHWMFUYTjABAFJE','1517215884'),
(52,'6_O7_iSs62C7J7fFz6qcqccGlckcRaoSjUk4AdIRi35DETUVg5slRwxHqb-uavry_Ko-ElHHfi_8SpgtoQ_SihnH0IN7JHMhEzPfs68Ev24iobeYQmip_-4EyI3DwPJObABALFK','1517279339'),
(53,'6_CxkFl5sysiL6I5s5SNyr6XISz_1JY5mucBcZHD9e70PWJRwnRVaC3HikIPhxVEbpyRRNIL-XrKs3RgdudSpGjniAd7NzCjFSbuOdC-oSLmvHiSzCJGpB1UY4Yg4Iq_y89OPSgi3EqYYP96M_QCIjACAYKQ','1517301644'),
(54,'6_KRUkdKg0TGpm0lhIujeYbvoBfgasFlU0peP7iXPPJ8ZeFVyToi05OMpooAcZ6UNJlS8keTOZ0axayXswr_cFBywzN9zoaGKGvoAXD1XMuKBfKdBSDRgqw1TXuht8Av2x_K0FofSkDAgZqRxmPBWeADAYKF','1517307710'),
(55,'6_SRiI4uQKOfVVQEL2VoyYu9H76Y_fIhtvoDvJdhf64w9wmdpNjxMGg7JLM4L54-EDSLQKBYGIYCuBNvyHKxj2fj2MBakk8k0NUl4keEKoqbz5hQpI9RoBoQTK25OST2pUATm3jnIZ37JdDbn9XIYjAFATEU','1517361064'),
(56,'6_XwAufCdUUlHRtIOFIKIOA3OJnY9DEnLpjv09XJ0E8XepYn1Yx9NSWJ2FFJ1Dz6vY2K0PGtyNFJ3c7kDhd9-FRPH10ZJbwWnMDJ1mLXzSJyQIeH8oWssJCRWFncfHj0eQGtP1vU5AA2Ake2OcCCTcAGAVVM','1517371615'),
(57,'6_FaYebtClH2pNHeO-mN2Ux7nAi-aUK4bESdn1tTe1cAB5H6BVPH_NJgF2eQP3GkvUVGI8aQ1I1L_tiULU_ZKKTM97JWlKEKITzyzsJbvyrfNmo_NTJlKt5kUx7KfZeyDWo6oCGBK6m1ErCZ1AMBRcABAYND','1517382091'),
(58,'6_Hv0gD6beSGjC4uwKLxqu9E2NDJf2oFkT261pnFhEOWDNlT23lLaSffOWiVKUSJBc1ayLRcQkCPIZ7cDpPMizjVmOnbwmxH3Y43sITnrMv_IlSiIxuRkJ7ZHHh2h-8U0F9814FRwYI3O5JpjYPCUgABACPH','1517389730'),
(59,'6_W4FCYmebx_t1EYnOo-Z-nNRYfuVGulzZd1_hZsra9Pf_Zl59vJuDxkrBnT9FtyhsdVf4vkhYYRWWZxsIuryAzi96p_ZrCgShm7SbeHc5Za98QIGcbTaCAo2ZB_pQVEVFiqKAdqaF04_Xat1gNKDbAHABYR','1517396297'),
(60,'6_p1dAS3a5p6UcDqDEVE0O9XkvcixnMq0j3-Cr7CJ2r1IIZzOYWPW55fFWp11XObRU9w0H96dXYDknhWWPuRA0P2uNJovlVqskD6-_kSHZcpwi3wb7USJes9YGHycWJYiAAASFU','1517451310'),
(61,'6_Y2327FoStRu6KCe4VoyYu9H76Y_fIhtvoDvJdsIaJRCeV5OQ3QAXTx3hj3hAYyD3sMMLGuwZk55adzHgfVHPiXeyHW1gBEtCIxerTXmFHB1WpKbobFbP8Si-AERFd0siv3a8ss6iYc_nqSWUOMWdAIAAYI','1517457323'),
(62,'6_9ikfGPH7vT1wcQZ-81ofUh6QCczMbPfmvvSeiU6PwaleyKoCj6cGVsO4Yc0d-IC2ehKuqZ2qHpmsM-ht1-EFHqORIoqNwBYDGJPC1S9HsK815_hKoy1OMIhVkBEMwGEW1Hl4HEZE19ucLbSVHXHeACAXNX','1517465250'),
(63,'6_xEW48as1w0rHHSrECBax1Zy_vTAeO4rkhJYDaLmxcbIB2Ff662qiOm1JI7XahKczVWlj6xlKyt51qL8VTOyeBpS3Mib6Cw_Oe3ptccrAhPopYIG3NdWniAIE1DMWtDI9JeQrXTRc04wVjXgqPFGhACALBC','1517481693'),
(64,'6_HaEFRdPApPPZf-Atw3_P6CeqvJYSBPq_1uLIeMDIn7-_DFcw9ea17TfB7HpOgCQslph2MEyRsqlWlAd1pkYq5n8zjqgqh-ARTswi7SGr_pS_-iDP5phsbAKtZaMOCSdADAKYO','1517495571'),
(65,'6_4sHRHExobi3fJVACbYZksrlMs1HBC6nA4gOA5_UaqYvat4NEedM55dsAdJOfPmkTV9xWy4RlpI1TxjKCqZh3k3nW4NwMfBllLr-yAQ5qr6zeZGxtGqTtExh6iyXXZ9zfFvs6LZBpeeDGtOc6LEFbAHAFYZ','1517727499'),
(66,'6_zRLsuIwYDAIMwlzYjo1CoabpsU6x11yngJhkFjFiqEwmfgeNZKLjt8rUth-gbF8jDzKYy1_WQaXzPLAZm_Tj64UXTslVBghOYWm_fsKMxiX8Ag5oLU9weFNwCSp3s4SCkvp85KmwHu9kAtqMHXYeABADTU','1517801138'),
(67,'6_l2sBxUXU5EBMIjutyJBU4oXB7YE-k9U0n3KlPD9ch3pR3EmIVIdVc809iZJQ1dRJQYDppRSqbX8q9Wq6wJvOrOllatCVYGv_OQHJRSoyeiNgBIZD-OP-6vqgdQWniT2ew7XRmeSYhQ6dKlOgJMPgAEAZCF','1517929668'),
(68,'6_Jc2z4k5V1MxJZi_D4BghTHapt2RhVyTEHKoer2KddhWS69-8GxULjOW30CYxHrudtrWM21FNRd7rjki-S-Kh4Gg-UopCarpZxLn3FpJaW4UG5N9R03R0wJxyUYoWYUjABAHJF','1517973740'),
(69,'6_05YcTFORKlunBnk4_DZYEmrUFRbvKAJg7bjLQEq65hxKtWqk5A6FazPtdb2-8RAjKkbiDMi3PgXsydaE8qnwuV_Yk9IEcw-wihQ213BC9gruK72bl3SvldS5Qv89QSfidNRBgVXiiUI8r433CDXgABAHIC','1518419547'),
(70,'6_qvEjS3XrLdngOtxVU5PGHz4nqdapa1g5Y6QBM7jt1JAo0MUExhSdyzd06hNHxriC5FTeX7P5sCrMmnHIkY9hYYZjN-m4M2Xrf2HDevYKmn0JqMeZt-Lr-ligH7Q45piYM9Owtt8I4DKXf2bCEVOfACAARK','1518598419'),
(71,'6_9oz7bjbTyVRkhQdql5sBUpkai7m3Q9RD-pDBv6tm4Fj41ZZqzncPM5dULicsKFPu65zCvAGV_wxe03rMzMFNCaB8NnRaqR6GId3RnbuJetz7rcMyqdOcsWm4CTIb9vpiiGxEq-zjku152WcTNVNfAJAQYQ','1518656443'),
(72,'6_f5NqNrJ0l6qzWB-ls21PVWptyVbIrXtAhZNniT4Kktjsp3ISJOS41jKXRixDMWAsJhw0mPmsUTCVvjGq9hTTIQtILMN6gc17HrcjCt3J1Cey7fwEGgqjF1HZu0Crq-Ltsfn-M8573P096cHRWUJjAJAKIX','1518694412'),
(73,'6_AsaF_-Tz7FeqMzOv_q0FQCo4llK1efo3u8K42X2S2OZK2d_Mq2dj7PJR9mLQWlXdibL-QPRTWGCtgcvVF2gMY0ym93drZq2kx3dMR0Fd_ALPbLRD87psBI42iIBWlmI-LHJJc4c_rIXwLPvNTDTbAFAKUK','1518862083'),
(74,'7_FErEvBzeBQ9oQ2sxKgMmZ9qtwSc8TeGsmfIlnwGQnAtm70XbGipnIivKc1f9ABVmUro29WzB3sEn-e-33TNDcHbPkO_M14qcx-p-1376EmQmA_4GlvUmOpQ10YcqMIwMieZn_5lz9UKlmcroLVReAHAHRN','1519208323'),
(75,'7_kgDp17TRvbW7yWCJVY_U_-fNeuAVzusqOdev6g6ByYAyTjSZGSEnevqnm3QzfTvD4jj-QDFjd4-FdAoHI6CdfrRjPE06cqgN5Ohsytin1XoWnQ3DJaTI-cI0EUQCAKhAHAOMW','1519360713'),
(76,'7_40e1EICSyCj8XehXOxLyWScBrAHeAEubmxtAJoL9GAfza_MpFscVBna5ZxfA49U0gU0bb0ebEfQVH2fYpZlYU_JPfjrSHepx9XpZHjWzLmNpIpesXBvZprwFZI5ZMIJ8W5lDECXdaSYqIIDaQEPaAJALZK','1519379049'),
(77,'7_-QFovHpJBTO-dd7hMw7uFjCajW7GPF2l978s5ikWn65PNH9ncb1vGHWxIlFREf3LexAc-1WA5YasRjasYo3--V2hMh2FbLOmk7JH0hdlI46Cm7L6NQKAvYrG2wnonFDW96loW8XabN4nMS42OTFgAHABGS','1519462341'),
(78,'7_p81PSel1SpRgK4cjnMNSspDvC89g0I7dX4jr4r1JvgEusmtqqe9EF-ZDfcOpXH6mqofx6GkHB2D-5PgMzDr8nBtnuKvLIb_Ac4HtwCN9bfJvK2r6DTp1jnF6NM0RYVbABAJQN','1519471392'),
(79,'7_B7Rh0m0ADfSko60Rd7t6VURVlvHZS4Y_T6cTduZhQkeJk9NIC_REqAbj9oLboBxVC8N6LhkRuwqL_f4vQpTvhwXviAfd8HdBnqGE-E2J5k-tUqmKcDWyah5tTuB6bXXryhGDfFec4NH_apRXERQeAJAVIH','1519553075'),
(80,'7_Fp_1X6d84NurXChWHAjgFI-LXysKq0OoZ8m0UY6Y0bqcdttx0jNVDs7bx7qrGLQv8LDWaieioZnT5T_v_M2QL01LGBXUOjO8ogwZKz4hyZ4yCkp24zAWZKJIhvEPYDhAAAKTY','1519621068'),
(81,'7_BNumqGegHjLsFiuskqI-u1leS5bV2W_gAqrP5xSTthvnU0UYgNatvUaLDOvYviAyES_ReP3t_0dcdqxClwCK_c4zV0kV2vMDvAXzkGyxGgOd0r9YHVLzgYOzqj9Bq9zZHRNXqYprHzyGZY26XXNhABAMMC','1519629464'),
(82,'7_BR1qTgRMGbGHSQgtfrXwYsbJOIXaPrFA20QD79w6BVfL8OJY57ip8M0wM3EpQSUAJXHSfAw2eiubHk0nbrLEt8f45N4o6YNKZ0ZifFiD7ZBhrDgmYgn3QT6Vm88UT8kNEhkrvt8USXo5n_3BHTDaAFARDN','1519630744'),
(83,'7__hpzQq14R5NTuf4BfrXwYsbJOIXaPrFA20QD79w6BVfL8OJY57ip8M0wM3GP46M8Z2RyB3f8mVvAm6lfSCZ1EKVtCG4n82hKJ83MnL5cFmJHuKTXR9aifpz6prPz2gunHZ7FNDdhwAQB36QfNJKaAFABXY','1519630746'),
(84,'7_4rOpXeZtPqORGP6oNeQv0RparyXogDejv90uq0c_EiJWvEORWHziyKIiSlkUDmrEUEy_Cn6q0PKsZ_IF2VafC8Q-CM2W_uGBHw0IdDTJC2-o3jdnvWAlRKqJHKc2GgdxOQwzUJYsCOShfvxbRDZjAIAKWS','1519630831'),
(85,'7_jl8Mk91HTqsB06XG2tL8wfFI2m4CQ3W2_EI9Hfwvp9D2w5Y2niN-lSAvpiHOHB_99nTAfsdjrqNgXdr1zNqKwSURwbvlJE8QQf_9xBT9BTeK0tAqrwnGeWZtwHVc9gr4BICSSIQblU0Rip_GTPWgACAAWD','1519795499'),
(86,'7_u-Jhu2SUTM_0Nz2Ho5TzLUcnml4I0cwM0Zl5mdBZUW3KrcK3GaOryARpqn2CREEtvDwqrq-t3nKFXKIWeFhnHHrwtFqNxhgN9NVpiRAbDOLh1-7kCFmxrqi4qqyFOrc69q1XGfOVlKm4pbnVSJAfAGAYPG','1520500468');

/*Table structure for table `t_admin` */

DROP TABLE IF EXISTS `t_admin`;

CREATE TABLE `t_admin` (
  `id` int(4) NOT NULL AUTO_INCREMENT COMMENT '管理员id',
  `account` char(25) COLLATE utf8_bin DEFAULT NULL COMMENT '管理员账号',
  `password` char(32) COLLATE utf8_bin DEFAULT NULL COMMENT '管理员登陆密码',
  `RegisterTime` char(11) COLLATE utf8_bin DEFAULT NULL COMMENT '账号注册时间',
  `RegisterAdmin` char(25) COLLATE utf8_bin DEFAULT NULL COMMENT '添加人',
  `RegisterIP` char(50) COLLATE utf8_bin DEFAULT NULL COMMENT '注册电脑IP地址',
  `LastRegisterTime` int(11) DEFAULT NULL COMMENT '最后登陆时间',
  `LastRegisterIP` char(50) COLLATE utf8_bin DEFAULT NULL COMMENT '最后登陆IP',
  `age` int(4) DEFAULT NULL COMMENT '年龄',
  `sex` int(2) DEFAULT NULL COMMENT '性别（1男，0女）',
  `PhoneNumber` char(12) COLLATE utf8_bin DEFAULT NULL COMMENT '电话号码',
  `pid` char(5) COLLATE utf8_bin DEFAULT NULL COMMENT '上一级负责人',
  `cid` char(20) COLLATE utf8_bin DEFAULT NULL COMMENT '所有上一级负责人',
  `RegionId` char(5) COLLATE utf8_bin DEFAULT NULL COMMENT '区域Id',
  `AdminName` char(30) COLLATE utf8_bin DEFAULT NULL COMMENT '管理员名字',
  `AdminRule` text COLLATE utf8_bin COMMENT '管理员权限',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `t_admin` */

insert  into `t_admin`(`id`,`account`,`password`,`RegisterTime`,`RegisterAdmin`,`RegisterIP`,`LastRegisterTime`,`LastRegisterIP`,`age`,`sex`,`PhoneNumber`,`pid`,`cid`,`RegionId`,`AdminName`,`AdminRule`) values 
(1,'admin','21232f297a57a5a743894a0e4a801fc3','1507456029','超级管理员','127.0.0.1',NULL,NULL,23,1,'2147483647','0','0','2','超级管理员',NULL),
(2,'shenyang','c5e1420285c579380bdc688ad48c3d2f','1507456029','沈仁海','127.0.0.1',NULL,NULL,22,1,'18780516325','4','4','3','沈阳','1,3,4,7,8,9'),
(3,'lisi','0acb300156efa544b4e44980afb2e539','1507455755','沈阳','127.0.0.1',NULL,NULL,22,0,'18780516324','4','4','21','李四','1,3,4,7,8,9,10,11'),
(4,'shenrenhai','21232f297a57a5a743894a0e4a801fc3','1507453687','超级管理员','127.0.0.1',NULL,NULL,22,1,'18780516325','0','0','2','沈仁海','1,3,4,5,6,7,8,9,10,11'),
(5,'test','78861e05c15dc8ad1a3724cf74d714ff','1511512504','沈仁海',NULL,NULL,NULL,23,1,'18781815151','2','4,2','4','测试管理员','4,7,9'),
(6,'test2','f8e3dd2f0dd2f15d27ec7546cb6eb16d','1511513561','沈仁海',NULL,NULL,NULL,21,0,'18781616262','0','0','1','测试管理员2','1,12,14,4,5,6,7,8,9,10,11,15,13,16,17'),
(7,'ms001','71d6c23ab0c57f42e96002d6b6fa3cf7','1511592420','超级管理员',NULL,NULL,NULL,21,0,'18784849595','4','4','19','绵师管理员','1,3,4,7,9,10'),
(8,'qwer','1dc6c936bda7d49ada02e6e364ff2d81','1511595837','超级管理员',NULL,NULL,NULL,23,1,'18912124545','2','4,2','23','测试12','4,7,8'),
(9,'test03','c5e1420285c579380bdc688ad48c3d2f','1511598875','沈仁海',NULL,NULL,NULL,32,1,'18780516325','4','4','19','测试03','1,3,4,5,9,11'),
(10,'test04','eea2f82c10fbf006ccbd343c2458f1b3','1511599880','超级管理员',NULL,NULL,NULL,23,0,'18784819295','6','6','6','测试04','4');

/*Table structure for table `t_business` */

DROP TABLE IF EXISTS `t_business`;

CREATE TABLE `t_business` (
  `id` int(5) NOT NULL AUTO_INCREMENT COMMENT '商家id',
  `Account` char(20) COLLATE utf8_bin DEFAULT NULL COMMENT '账号',
  `LiablePeople` char(40) COLLATE utf8_bin DEFAULT NULL COMMENT '负责人名字',
  `CompanyName` text COLLATE utf8_bin COMMENT '公司名称',
  `address` text COLLATE utf8_bin COMMENT '地址',
  `LoginPwd` char(50) COLLATE utf8_bin DEFAULT NULL COMMENT '登录密码',
  `PeopleImg` char(60) COLLATE utf8_bin DEFAULT NULL COMMENT '负责人头像',
  `LicenseImg` char(60) COLLATE utf8_bin DEFAULT NULL COMMENT '营业执照',
  `PhoneNum` char(50) COLLATE utf8_bin DEFAULT NULL COMMENT '电话',
  `EndTime` char(20) COLLATE utf8_bin DEFAULT NULL COMMENT '结束时间',
  `power` text COLLATE utf8_bin COMMENT '权限',
  `details` text COLLATE utf8_bin COMMENT '详细资料',
  `createTime` char(20) COLLATE utf8_bin DEFAULT NULL COMMENT '注册时间',
  `createAdmin` int(4) DEFAULT NULL COMMENT '注册人',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `t_business` */

insert  into `t_business`(`id`,`Account`,`LiablePeople`,`CompanyName`,`address`,`LoginPwd`,`PeopleImg`,`LicenseImg`,`PhoneNum`,`EndTime`,`power`,`details`,`createTime`,`createAdmin`) values 
(2,'ACqwe123','大黄蜂','四川大黄蜂','805','a7e569e0fe3d7213c19f747e99f61fc9','[\"20171208\",\"243f750ad5b47c93911071404c0989dd.jpg\"]',NULL,'13414723698,0810-1472583','1514649600','4,7,9,13,16,17',NULL,'1512730634',1),
(3,'CXB001','曹总','帮帮传媒','绵阳富乐大厦805','88a6c43d0cab4d2b1623badfb4696501','[\"20171208\",\"d842055c9271feff4ad6409f20af19d8.jpg\"]',NULL,'13515154646,010-12345698','1518537600','4,7,10',NULL,'1512730959',1),
(4,'SRH001','沈仁海001','我的测试公司','绵阳园艺山','397fe80cf01586a3ab4be823666bb739','[\"20171208\",\"526ca8da1186447b33998c3c80227f04.png\"]',NULL,'18325251616,010-12345678','1555603200','13,16',NULL,'1512733096',1),
(1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'4,7,8,9,10,15,13,16,17',NULL,NULL,NULL),
(5,'Stest001','测试商家001','测试公司001','测试公司地址001','139489935d66af2afa062bab3be266f7','[\"20171212\",\"c6ccfe10432a50a2396097bc4d02253c.jpg\"]',NULL,'18784849595,0830-4567894','1514563200',NULL,NULL,'1513049577',1),
(6,'test002','测试商家001','这是测试的商家哦','地址也是测试的哦','456ebb752694e32ca7cd665a0f868bde','[\"20171218\",\"fa06eb12777eff05a61ad684a26bc4e1.jpg\"]',NULL,'15256564545,0810-2121541','1596124800',NULL,NULL,'1513577773',1),
(7,'test02','测试商家2','测试的公司02','测试公司02的地址','38657f7c390234e038b0b85475cd52a8','[\"20171218\",\"d817e0920e595438c86a89c65ce973d7.jpg\"]',NULL,'13512345678,0810-2121365','1514649600','13,16,17',NULL,'1513577928',1),
(8,'test003','测试2','测试003公司','商务大厦','6a9b1d53f45353f884921fcab7d5e2b5','[\"20171218\",\"a94a12d2e378c83463cca99c4645fce1.jpg\"]',NULL,'18782824545,010-21215456','1545926400','4,7,8,9,10,13,16,17',NULL,'1513582204',1);

/*Table structure for table `t_evaluate` */

DROP TABLE IF EXISTS `t_evaluate`;

CREATE TABLE `t_evaluate` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `GoodsId` char(6) COLLATE utf8_bin DEFAULT NULL COMMENT '商品ID',
  `UserId` char(6) COLLATE utf8_bin DEFAULT NULL COMMENT '用户ID',
  `CreateTime` char(15) COLLATE utf8_bin DEFAULT NULL COMMENT '评价时间',
  `Evaluate_text` text COLLATE utf8_bin COMMENT '评论内容',
  `Grade` int(2) DEFAULT NULL COMMENT '评论等级',
  `OrderId` int(5) DEFAULT NULL COMMENT '订单Id',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `t_evaluate` */

insert  into `t_evaluate`(`id`,`GoodsId`,`UserId`,`CreateTime`,`Evaluate_text`,`Grade`,`OrderId`) values 
(2,'3','25','1520667697','药王谷的辛夷花真的不错哦',5,45),
(3,'2','25','1520667944','虽然说九皇山有点累人，不过风景确实可以！！！！',5,38);

/*Table structure for table `t_follow_people` */

DROP TABLE IF EXISTS `t_follow_people`;

CREATE TABLE `t_follow_people` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `openid` char(40) COLLATE utf8_bin DEFAULT NULL COMMENT '用户的OpenId',
  `nickname` char(30) COLLATE utf8_bin DEFAULT NULL COMMENT '用户昵称',
  `sex` int(2) DEFAULT NULL COMMENT '用户性别',
  `language` char(20) COLLATE utf8_bin DEFAULT NULL COMMENT '用户语言',
  `address` char(60) COLLATE utf8_bin DEFAULT NULL COMMENT '地址',
  `head` text COLLATE utf8_bin COMMENT '头像',
  `subscribe_time` int(30) DEFAULT NULL COMMENT '关注时间',
  `remark` char(30) COLLATE utf8_bin DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=458 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `t_follow_people` */

insert  into `t_follow_people`(`id`,`openid`,`nickname`,`sex`,`language`,`address`,`head`,`subscribe_time`,`remark`) values 
(1,'oNqUrwR92Esfn4nHPkBEhiI92_Ko','罗强',1,'zh_CN','','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxicTGEc2G4HFH6EkkImrpf5prTJvTLuYfFac96PORxiawjJNKq5tdcbIdm9NThYnFKiclVbiaqiciaJeQh63vgaicBzwy/132',1504939307,''),
(2,'oNqUrwX6txJnzBBepFpoA7UkU8Hw','大俊',0,'zh_CN','','http://wx.qlogo.cn/mmopen/ajNVdqHZLLDzqG4pmwTCGib4GVw9VTRO9d2zMrraDBSSaRicibDjrVlsbD3bm55f2iaS7tQ88TTB06Kgy3rwia1NW7iaMUGZYZa059l0duias3cBqw/132',1499745104,''),
(3,'oNqUrwSVYYkSOwqN4-ofY_vOPukE','云淡风轻',2,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxXF0P4AHzbOibiaiamzGgrsQRPiaLiaGXN2tANKeLYriaic3wLKpCxwGdGcmYv4kLqcFibR7DgyG3BUtPaiaCDNa3X6br4R/132',1499317521,''),
(4,'oNqUrwWY7QnFkTF8f3lSHNIXdWx0','南风知我意',2,'zh_CN','中国安徽安庆','http://wx.qlogo.cn/mmopen/fK3fRRPicgAyolCS8MZj6xkZB1EMmBdywrF1Dxuyn5ZfPMwfzicW7v0xUDNW5eI7UPU0rlYbHPsLhCsySrEbmwkA/132',1499311073,''),
(5,'oNqUrwemlB_w61h1v4zsTRvym1qw','A-mier',0,'zh_CN','','http://wx.qlogo.cn/mmopen/yehycmDVLMY8s2EkUQrKV5iaaxUH4WhvYu3ic1Gu4Qq2DlxdVrF7wdE2brDqH15Vicmd4QJEpKiaicD3Rcia5n4KLPbpKI2XzS2sH9/132',1499345649,''),
(6,'oNqUrwRZvJsO1U2qevRsom7PYQPQ','钟情于',0,'zh_CN','','http://wx.qlogo.cn/mmopen/ajNVdqHZLLABcl76sdISKscXiasMqc0Vg9hzQnrAwJzckYUicxQL0zicP3X3t7lj13tNz4YgxCYhMKPibq2kb49LaQ/132',1499483290,''),
(7,'oNqUrweO7OnCK05fAchr7_BYk9Pg','男人不毒ぁ何以立足',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/rK1nsTlCD8EgzD0aNcqI4WsY68NVo47vhf97LtDqzWdDeBfZXFthpXj8WYxgrCWzJ9YZahwxFnZiaS5sCiabDJLUg4J3TRCBnH/132',1499309334,''),
(8,'oNqUrwSSLX4F1X7muBe-ZZEcWljQ','ゞ哭泣の刄ゞ',1,'zh_CN','安道尔','http://wx.qlogo.cn/mmopen/rK1nsTlCD8EgzD0aNcqI4bibEQCDXLENvMoGur9d7L4JM4IF0CtEbKKDVficbm4nef0Na55zuzGcCrYsruKjo5GwicvycKxB3ibT/132',1507829268,''),
(9,'oNqUrwS-NOFoYzZC2AgIRzNlHYdo','几度夕阳红',1,'zh_CN','中国上海青浦','http://wx.qlogo.cn/mmopen/ajNVdqHZLLC6Ayom7EvH71M8kgiaacLP60fBBJFjiaybiaU0Hgk4sYqUHCMVibn9qjFQPy9EQfk7ytf9TDEibgUsUpg/132',1499689576,''),
(10,'oNqUrwU0EsbA8zxatH2J8o4xGajE','凤凰涅槃',2,'zh_CN','','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxIVrDvmKb7g1JrKicjnC6qoXWJYvxEGssJOocFWXJouiamHJRaZYsTJbeDtD1INwXt2a03QupRgVNrXQARAVV2c6/132',1501663336,''),
(11,'oNqUrwbfZiY4eHRdHLReyYiLqtkc','北极雪人',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxIVrDvmKb7gxWGY9lX6iaKEpXRMMcKkvwDfnzKSLiaB9IeEMvcBl1yDfjIofFibh7FxUhep5dyVIq823WKG6d9KD9/132',1499343849,''),
(12,'oNqUrwa7EgldtK9ENhBofwzsNPJo','时光屿我',2,'zh_CN','','http://wx.qlogo.cn/mmopen/PiajxSqBRaEKM3f7a1vb6L5Xz7FKvqu8YE8VKnU82icXNBvAGqGorrYA82XCibOjibDx4P4hicJvQ5ibZufCV0em2S2A/132',1507440774,''),
(13,'oNqUrwcslmpeiUKRTzChULj1aSRY','A---阿伟(爱仓酷科技)18608154444',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/ajNVdqHZLLApSIpWbPxeaJ0RqkHNWVQ4EeCTAI8bZdTDMhJqS2yuCm5Au0cb7LiaJ2EuJN3yTvNKozZwP3tKOBQ/132',1499238336,''),
(14,'oNqUrweZFryXmXB4EHN7reaYhVUg','丁志明',1,'zh_CN','中国福建泉州','http://wx.qlogo.cn/mmopen/ajNVdqHZLLBlRhggg7EHp1dbxCrCicFL4guU8SJCgCoSvrG0UWu5GPC9RlalSU9HWkrus7G1HibkEZ9XaszvGcibKbvVfz1NS0LJmIrnkxIaeM/132',1500301113,''),
(15,'oNqUrwX-7oauIkrGGvjxrVRg6KIE','木樨',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMbapjKRLeFPN9lmUc2xBWSnP2QwlQYa7eG0z2akKOd4ToPxNtewTx3D00QAmqItY7wGT1g6qicic54e57SEzQYGTY/132',1505884428,''),
(16,'oNqUrweHKPbst4PKfKCu1bhR8dU4','.',1,'zh_CN','中国四川凉山','http://wx.qlogo.cn/mmopen/yehycmDVLMbapjKRLeFPN2lnBzzeGg7J36sF68E3J8mOyoDhzDe5d8eK6xL3oTwPVaeGSAuoq4AEYeO2LCddzPd9ZiaPY5393/132',1499412309,''),
(17,'oNqUrwRlx3qqnKNZEKqoIs6N3Xpo','王坤',2,'zh_CN','奥地利蒂罗尔','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxdLAHmcUDic5aDCdJRtEuygvmbU0yCHRWdy8mAL3ibv5sNOwDliaLWKPticgicf0XqF3I4FZgiaLpgvDiag/132',1505225892,''),
(18,'oNqUrwRgjpppiaDz2oBOKoiPwYzQ','木木先生',1,'zh_CN','','http://wx.qlogo.cn/mmopen/o8HBbXd72BZYvKbTdtZzvetEticViblB5j4ZYYbnfiaOgNju4YAsAtXRcVnXE6vpwB0g0tbJoOPQPb8Nw1YHdWpaoJFsYWRFSns/132',1499248706,''),
(19,'oNqUrwXdPbMxZFpmcB5896x5NvgA','　　　　　　　　',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/o8HBbXd72BZYvKbTdtZzvRordVn8lPTvD3YzcLfpjOTmsxJUqRE0BuRTTm7ZXeVCw2jX9jwk9MXd3tH7bkMIwIqaJv6wwuSm/132',1499238680,''),
(20,'oNqUrwZTm94mNvkMmQP3PLyH0yzE','小黄羊',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/o8HBbXd72BZYvKbTdtZzvbLWW60Oz9IOcINhg36ZjemImQovCnMLum8tfQGQib7FntFAoVPURPoC3QYm8dl9P1oGUeBFySScz/132',1505009160,''),
(21,'oNqUrwegQEhmIvT7YnjZCdkW94-c','——进',1,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/Q3auHgzwzM5xM3oQQywFOEAbk4NQEdFEltptx2IuDPticDU1UgThgXHIe91dbXicHhkjugs1jNn06v88p4kFst0q6wfcyu7kV5lCop4S1MoJY/132',1505197286,''),
(22,'oNqUrwayG5w_iq0Bhb5TN2eMWryY','。',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/ajNVdqHZLLDDAC0bIj5EFicibdUX4icDRVg97rdHpO0JVqq2XNNibPa08UzD7ibia7ib90uhwyGSaXSib043cqwSApvd3A/132',1505364630,''),
(23,'oNqUrwQkv0iHfPrj8xequoJ7HYzw','你的回忆有我',2,'zh_CN','澳大利亚维多利亚墨尔本','http://wx.qlogo.cn/mmopen/rK1nsTlCD8GxxyARZGIlOic51vhH6qNHXoRHac1haCwicSR3UJPAX4qKFjTSJp9OI8ziadcwXBmic1tCPDvKmaBib9Q/132',1505190531,''),
(24,'oNqUrwfMZT4wHV_HIZAuQ91yexpo','TTTTBX',0,'zh_CN','','http://wx.qlogo.cn/mmopen/PiajxSqBRaELXMZyvycZowYB2sktAViaBhYAYsNQOFqUmKC9O2FRaExKCNAkfqDfp7RYdE5jI37bNuzZzJoAwNiag/132',1499496531,''),
(25,'oNqUrwSUqbXUQb0ZT6miIkhszVas','打糊乱说',1,'zh_CN','安提瓜岛和巴布达','http://wx.qlogo.cn/mmopen/yehycmDVLMbapjKRLeFPNicicsSkBJsW5o23SSz88Kn7Cu8U7uiciayJAj0TvxdIS61pMnwZFiby7IcibjNHPZM2ym83klGPDayNJP/132',1499310332,''),
(26,'oNqUrwUQqNJEJTb-ox7uA2owYRCs','心若无余',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/o8HBbXd72BZYvKbTdtZzvcdaSibymhULfIHC1vQzZoKvfsOiaeqWKjJ3qf8Zib0UnibzbVNgCPBiaZ1JHWzicBtkzKj6FcicO2ARibjq/132',1499329007,''),
(27,'oNqUrwdw6eca1KvRXJF2ZzQWqn5M','义山',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/Q3auHgzwzM4De8icqduacH3ezEVoetGnssOqjvaaTqJULdvcVnKROCYcGqAHH4jzv2q2FSReYkTjIeXrO470tqA/132',1505274795,''),
(28,'oNqUrwcawGTMoAT9R2iR_nSNwfBo','木木',2,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/yehycmDVLMbapjKRLeFPN5NsXPwia0WZE4VLRx3TKVR9O2QdV7evVU6ibHxnViceVKkg6dUQqTHJN3vibgARjKVYBTVcYRhmibU3E/132',1499952977,''),
(29,'oNqUrwRItc2mpoJf524mM_r15x0I','高雪',2,'zh_CN','阿尔巴尼亚','http://wx.qlogo.cn/mmopen/PiajxSqBRaEI0BpecLRSdHQSTXGs6zWictd916MkhbqewQONy78gpBcNBhGIlQzTt202MD0rJZ2SG4zH0UnGFRiaw/132',1499316059,''),
(30,'oNqUrwfUmr90LoLNRaqmiAHxZ9ds','李雪芮',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxIVrDvmKb7g60PUMlBB3Pu7v5Glj7icQicy91WQ4e8yjgzQ59Vqz5IWINzRFkmz99SfKwuv8haHx3c99TWCHgaD4/132',1502274220,''),
(31,'oNqUrwc2hJzAUznbBWhSCxT9UPLM','农资鬼才&兴农会 义哥',1,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/o8HBbXd72BZYvKbTdtZzvWvKUjYPficZVBZo2AgtG75ic2uE7PwMS0PsegVq2iaJdoyrTibxrXJTwWu6g4Zic2PLOYhQqGfu5icmHo/132',1499149102,''),
(32,'oNqUrwYVknG8Uf2nTY4aa3W9pwu4','久年',0,'zh_CN','','http://wx.qlogo.cn/mmopen/PiajxSqBRaELTO2hBFycgjAYylzLQUCEGOYrUleKDdEMwsiavWOYTc7TuxXFeeIEmGLHJxRqpU4ibSe6UrGlBVyGg/132',1505227701,''),
(33,'oNqUrwcENnAiyUNvm46QXuRxYB9M','小小魏。',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/o8HBbXd72BZYvKbTdtZzva1avmlNgTjxYcVGSoAzN2at3KeENSnoEluBBYnexYCwXniaNW7JWaTgLRicSF7Ozw4jHM9Z1cxnxo/132',1499343778,''),
(34,'oNqUrwf019p_rBVLNHAUK9weCD_Q','青青',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/rK1nsTlCD8EZibibfN30Qvj8RHWASJNj9A52qmOIJyzMc3mLPuXxibl9sBFHbPrFibK0IEwkLYK9K9Jt1ib2icNibDYew/132',1505018813,''),
(35,'oNqUrwaN7Y107zErEAINY_hVAKpY','yu.天。',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMbapjKRLeFPN2oG2UWKIBxy0jbY78rlkUDRBOkp6ciaHyWkRBq6MfXtIrWf1PmSicxk8hPDwbu80OMzVZEysdE9MA/132',1506078810,''),
(36,'oNqUrwQVRYd9JTUhSN-iIzZW10O4','我就是我',2,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/4I3LdGAOkJGE2beRCPSp1Jt4xibZK0Fzt82nBIGdSmZaVUMYVclicdU8tkujsKhHPCAWvw93Rys9x0rYbDQW3XWtsNvR7v1ibcW/132',1499310612,''),
(37,'oNqUrwR0YYnQOCd39EZZ_CEDxc9Q','紫意依然',0,'zh_CN','','http://wx.qlogo.cn/mmopen/Q3auHgzwzM4YvhYtcXxtk8HZ4zGc6FrbHIfCunucbDmP7sjOIXnSVH3a8Lcs9zAV1YVL310YedCibG0icMsY0N4A/132',1499396660,''),
(38,'oNqUrwZ74QxA-ig3KhBd1ura-39A','漠鹭',0,'zh_CN','','http://wx.qlogo.cn/mmopen/4I3LdGAOkJGE2beRCPSp1FQfhuXV1bLztMtDlJkUWialibnhFQ5xDuM3RWbrq55tcfJM7rPJ0snzXNMk63rzPYlBfYWTjJbA9b/132',1499310440,''),
(39,'oNqUrwfk_v_OSeT_bOHwlbC4NHyg','I. konw',0,'zh_CN','','http://wx.qlogo.cn/mmopen/yehycmDVLMbapjKRLeFPN3Af3obFFmVKleqqgGdtkVHibmYxjAG90IN6l7lJd2myuUjMUKxSQ6qqqolMtjvo3yc9ibKgcM6Ipm/132',1504962437,''),
(40,'oNqUrwRMJaVfiRkjA5FZuLg5n6GQ','胡同里的驴',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/rK1nsTlCD8Gk1rmOCD6lib4pwkA1Atj2zcDEBT7r0MLPyfJsfibMCjGibGFeWqajibtJROPUo6vr8nLtGLwoGHUFdQ/132',1499307673,''),
(41,'oNqUrwVblw8Vv9rqfoTczQ0VJ3e0','A+大学生',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/4I3LdGAOkJGE2beRCPSp1PgcDPHg5vwiaGaWpT7bJQeKu1qWTMpiaFGtpOffJDycsflDPqiasfzEbMF92xgKDSLGgib9h5ubEwCd/132',1499065360,''),
(42,'oNqUrwVvic_wzxfAE27UU6zobCC4','现实，太肤浅',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/ajNVdqHZLLD5jevDBcTwfOXTUxjY6qWXZBwZMqSBfTpQ3dY34zKqLmOlTJZvvRB98vXxVfIYKBiaM1TDsyAA0FQ/132',1499668459,''),
(43,'oNqUrwXbOblQnaVG7MhP3Zw1aKj0','懒得想了',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/rK1nsTlCD8GmBMI3OrXaV8173vBxMrcvC1o9FWONcKGMylOQlOYMfZw6R0YJptfsF3WktNVsXVpg8jBrroSnPQ/132',1499310339,''),
(44,'oNqUrwQo_eHilI2zJZYy4oMrilXo','David',1,'zh_CN','冰岛','http://wx.qlogo.cn/mmopen/ajNVdqHZLLAq74ibvdiaLZiaB6QPJ0AoXpK1FrbZbzTBnziaeAICpaA5WDIvJgOqW7N1mD0UozTnt5Y2icm18xbmu4A/132',1499431152,''),
(45,'oNqUrwd--HA2HtzeP0Db11g8o6Ew','敏儿-华硕代理红业',2,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/4I3LdGAOkJGE2beRCPSp1NnCphkW5UeII9bEOzvPQM7BAxTP7ElYCOJGtjeVL5akyKCEiapKHC82iaseak11KAnAXsfTv29rI1/132',1499238232,''),
(46,'oNqUrwQmMxATg8e-Ddk7Qa8v4jsI','牛牛',1,'zh_CN','菲律宾达沃','http://wx.qlogo.cn/mmopen/PiajxSqBRaEI6ZucxBjHoztGV6BcF8icGXCsbIjtaRF304UlyHziaibLV8DqoAxfnZhVuvGvjXZOJq3e3zaV7DicO4Q/132',1499313235,''),
(47,'oNqUrwYvuF8H0GBTFOqzQfgxAmBQ','Dalia',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/rK1nsTlCD8HbQCibibObn1CUjyfuWdzicgDpicsFwCA9lDVlZvmPacv1e2ZwLicperdy4Z9sxylqwFdlGYDWuzOe4uA/132',1499310310,''),
(48,'oNqUrwXpxRlNVB4wDG1OscE7A_U0','何老二',0,'zh_CN','','http://wx.qlogo.cn/mmopen/PiajxSqBRaELUiaXvPIaMacx6iaKf1uwpoV3AJ79y0bPibD8fgWxNrBDVpBT7CyNKb6H0zXh0OU8MZNibJhmJYw2ffw/132',1499351268,''),
(49,'oNqUrwZbNWivsF1y5bKsMQD8ILoE','醒了',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/rK1nsTlCD8HkIo8BBqn1wicjRFAiatxYvSwOaYTqpmiclforUNdgLvDdQ6Q2rO91vXacw8Nve1xMWSxBC76ZkdV4w/132',1499400393,''),
(50,'oNqUrwZZpjjMuINEgRT2jt_WnCqY','',1,'zh_CN','中国安徽合肥','http://wx.qlogo.cn/mmopen/ajNVdqHZLLCV995aCSCNNOuXSEl6mwXmZoOZK7B5K4Fia3w0fuUqbteicgMp5loqwzqITZWFQ0nfVOLKkWA9vZ0Q/132',1502089391,''),
(51,'oNqUrwaIw0-L7fXXmNZcHSUCTv8g','兔小凡二当家。',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxKLcgAw1libgwBhhmf8eFLeGWtEvMNf5aMaNUibdVg749tib1JfZ4ibUcdagwpHeZT39NpVev7rs9mqQ/132',1499309960,''),
(52,'oNqUrwbW6OVJlTCIWLsP2DhV45Gs','云淡风轻',2,'zh_CN','丹麦','http://wx.qlogo.cn/mmopen/Q3auHgzwzM5xM3oQQywFOEAbk4NQEdFE6JZrexFLPTtVrzYkDFAS2CSERqiaGMWtZ9xUicgcAIRToXcnrl1nz0ibGY4ouAlnkAKHthCvcoRYb4/132',1505050130,''),
(53,'oNqUrwXLTm_8N4ug2CXGSZ3tkG00','你还怕大雨吗',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/ajNVdqHZLLCImXBRskAVwgyhjzZYMZLYeu2Q8YgvLljMz4ReWqpiaDbTjfBhg0uOLC1qfeyibc00Wb5SZHVREeCg/132',1499063557,''),
(54,'oNqUrwdTToyWoRntObWdcGJphWmE','JดD',2,'zh_CN','中国四川','http://wx.qlogo.cn/mmopen/ajNVdqHZLLAslRwZfIYy2hJLFWrssBpX3VN8S6XXCCPvBJicUISKuZbMNUmm8fliaQlh5D3anzicvMXwQvqbRCibqg/132',1499315436,''),
(55,'oNqUrwV40zIMtH9o2fHw2HLBDmMk','陈守燕咯*',2,'zh_CN','安提瓜岛和巴布达','http://wx.qlogo.cn/mmopen/Q3auHgzwzM5xM3oQQywFOEAbk4NQEdFEoEsTOAuGZDvjAGS0M9PDl9R0f7yapsbMgFgUTc2Xrq440Nv0146e7tyh58eiah2O1iaicFRhwhFVnM/132',1499159194,''),
(56,'oNqUrwYfs_mG8lRPVj5lko8dKqv8','张登科',1,'zh_CN','','http://wx.qlogo.cn/mmopen/ajNVdqHZLLCeXDNl4qDfnde0EWAotTTicGylicvTZE2q5QjBscVECOTBEp8FmGdnibP6Gw2WHia9AT9TdGNvgM5vOw/132',1499065117,''),
(57,'oNqUrwWVnXvg9yKuQBxhISqjIJJQ','与你同行',1,'zh_CN','中国四川攀枝花','',1499238333,''),
(58,'oNqUrwdu89VUNoEIwCUIYNyAHbu4','邦浩',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/Q3auHgzwzM5WX0G2Gic1Ps5q7MBdV49heZ8OqUlaPFibYfXniafML22KUN0kLPJlrrlB3zOc830RXk4lDoQxIVmNQ/132',1500300721,''),
(59,'oNqUrwRqzTKjWPTVKVKhV677ldQo','...',1,'zh_CN','中国四川乐山','http://wx.qlogo.cn/mmopen/ajNVdqHZLLBlRhggg7EHp1dbxCrCicFL4J0AGF6K6RkIgeuSlbtfyf5QBguPwUUypvxjqGd2N3l3u1toiaMGWZicBqqQ1H3l1icztzf3YVr0oM0/132',1502439783,''),
(60,'oNqUrwcxptHslovazEbL1p2v0iyc','Yours',1,'zh_CN','中国四川资阳','http://wx.qlogo.cn/mmopen/ajNVdqHZLLDlJvf7b1iakV6ffjgyRokL8NljjuTESSfFWtFoep2SbqW61NexPBQB9r56K3BldmI9pUdia4Et0BQw/132',1499757894,''),
(61,'oNqUrwTreSwxiKOcDmXxHnslPNZM','秋香怒点唐伯虎',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxIVrDvmKb7g4xdkycehnP0UmJDRiaU9BKIrlFRevCaX8uIXr4JwkLtyqdBicWYILm2aiagibEeO7tcVvTwzfhoNhA5/132',1499396413,''),
(62,'oNqUrwTRxbnnLQShuQCPkucP_gcY',':P',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/Q3auHgzwzM5xM3oQQywFOEAbk4NQEdFEBrhH0Qq2N5CmiaElHs6usQicYVdJdkx0URX6ODMic2VdpvJzfuy5fdsz5bnz5h8PUzWQFfib9VffwZc/132',1499247449,''),
(63,'oNqUrwXagFSPQT89vPWj6-ecItnY','东风不破',1,'zh_CN','帕劳群岛','http://wx.qlogo.cn/mmopen/4I3LdGAOkJGE2beRCPSp1EF6YFibjkYOYL2NffEcMIlqjDLWaJYPGA3Ic3FicDBTuW6ldgTR0fsiag3iaFdccdo8zWJicL0IB12Dh/132',1499180395,''),
(64,'oNqUrwcyDEdi9zgVkd4kk1Npmoo8','好开心',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/ajNVdqHZLLCEKPibNRfrX0QQVLKYPhT76xFY0FXpeX5396nxBNP9BXSB9cVwyJgP7iakXhwckKb9J9EUZIAoqzdg/132',1499308660,''),
(65,'oNqUrwUu9jboofQR-U_rq4C7LXAY','你瞒我瞒',2,'zh_CN','中国四川','http://wx.qlogo.cn/mmopen/rK1nsTlCD8EsRVTEUEuaZpRVQv9uVEibgLe31UibdqnjpJWmBrloUNHiaktJGp6pk76UwD0L1Q9ib5I8QSC1TlMn1Q/132',1504961440,''),
(66,'oNqUrwaFrMCwGB7e28bLW_HBchp4','Sun',0,'zh_CN','','http://wx.qlogo.cn/mmopen/yehycmDVLMbapjKRLeFPN1dQYocKahqGnj6M0PMDnn00c5nia62ut3wuThhICy4UdjTvHLsgxdgjY32EPfOPLGicT3ezxQNNibh/132',1499309147,''),
(67,'oNqUrwaw50GlOt6B287raQhAd4Ac','m',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/PiajxSqBRaEIciae0ia9OKYTgBAibAib0TBqYE8ujlCWs88VaAZaRZJNMcic9qAHbMSMn1csNe7ibtMCDYhlqrXbcRYfA/132',1499413967,''),
(68,'oNqUrwRiGTGwlFbphFtZIbx8CKPE','旅客',1,'en','中国四川德阳','http://wx.qlogo.cn/mmopen/PiajxSqBRaEKvNnFWTEdJo9f30hz5yddq0LExIgPd3dKA8iaNchruT8HsUVpdU9xpTWYZ4dNWBKBFj4IZlqy2jSw/132',1500726964,''),
(69,'oNqUrwWQamvEMEU7kWF-TtWkI1sw','卢春成',1,'zh_CN','中国四川绵阳','',1505223834,''),
(70,'oNqUrwZLNSAAFnTfUFqy0vvPamX0','瘟症',2,'zh_CN','阿根廷圣地亚哥-德尔埃斯特罗','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxIVrDvmKb7g1pr6SuiaonqBn48Qk1bspp5MmuturTPHjboTLFdWyW0ZKYBHj1WDlfKpaibiaup4IMhToImkPicJxna/132',1499571562,''),
(71,'oNqUrwcxsnnEwgAbBfOd3iiuT0IQ','A美立芳养生馆15390271508',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/o8HBbXd72BZYvKbTdtZzvYfxn4C1UeGWW2Yt6I5YtiaDHffMlh753QWrh2Q6xDHAyXUnMo8Z0tQicWq4ChDj1BeE5XKyYSCIJv/132',1499413799,''),
(72,'oNqUrwROwX2kqouq7f3JbvVKIPS4','Renhaibin     。',1,'zh_CN','蒙古','http://wx.qlogo.cn/mmopen/o8HBbXd72BZYvKbTdtZzvWyw87UblOsTxVQt2MTXvGRMicCZvlX3BFfiaylUsXbSmxOhuu3EMgq80g4daSDsE5qjKibgVOyVicvG/132',1499310954,''),
(73,'oNqUrwSKlTqVjXrdUyebI95cn8N4','hzh',1,'zh_CN','中国四川内江','http://wx.qlogo.cn/mmopen/rK1nsTlCD8HXEiap3Uscg2RibHGVpBzkKnVZ8aNAKYaGiaek0U4I1jrB4DSPMPHMEP8xxa2aicvqRRwia0ds6cRsGHg/132',1499237535,''),
(74,'oNqUrwRkxFllYlBsQR06rC_YYzG4','久睡成瘾',1,'zh_CN','中国四川凉山','http://wx.qlogo.cn/mmopen/PiajxSqBRaEJVVbSXXpr7R6ibsPhiamDJ7QSK2a5sicwItzUKWh1NWQxGnB7oyCGkRv1Mx9fa68aqS5HiaOvPzQ6uuQ/132',1499263045,''),
(75,'oNqUrwXQATx9mm-kk1EmVEI0qAdc','K',2,'zh_CN','中国四川泸州','http://wx.qlogo.cn/mmopen/rK1nsTlCD8FtoTeg3Y49WleOxicWyOm1k6CXNopngGKGQ5cOS3dciaRhrP6DIoibeiahRakQpbxfdHgXCicUvL20ooQ/132',1499310750,''),
(76,'oNqUrwd8IC4TAWcBK-huHxZv0k78','半山小屋',1,'zh_CN','中国广东珠海','http://wx.qlogo.cn/mmopen/yehycmDVLMbapjKRLeFPNx5GVxIZ1ibCun4AafRoWguXXAHfD9eqQ9sNycoJcTA77XGc2XfUMxXibWh236fZvqaVMlUpuciclua/132',1499239564,''),
(77,'oNqUrwUkf5NExhlzVyiaAWn3qu1Q','驴者',0,'zh_CN','','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxIVrDvmKb7g3gcnMc2Kn0O1mIOOX3gd3hcsEdyEW1RJBqOPIIC1lCKYODfQnNjmHr5GIDcwY8oqNWLneCpwvpO/132',1499237782,''),
(78,'oNqUrwTzSdq03sVqENIt5-yvB0z0','',0,'zh_CN','中国四川资阳','http://wx.qlogo.cn/mmopen/yehycmDVLMbapjKRLeFPNyQ8RU9NLWicIDRfNoO7JeYFiaHlsb9pb5yvkicUnnKvnnPCQfnvK8z7aGnfiboz33O8PMsdlqpqWSlq/132',1499310514,''),
(79,'oNqUrwe_hAi9IkNLXruU5Y2SbSis','小一呀 ！',2,'zh_CN','','http://wx.qlogo.cn/mmopen/ajNVdqHZLLAkwt9V070YSjFBMNqhxEGicfNRI9nMAibbsXiaEhoQ0d0jfUYbo9KaW6ib8uNuT8IYfkt9kBIwdScH5Q/132',1499657781,''),
(80,'oNqUrwWhFi3THHIGZia_9U5HVDa0','哎呀呀！',2,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/yehycmDVLMbapjKRLeFPN1gcnwWYsTFVaNZQs5eMkl2EZuu2sj4bBA87o4lZR8zGdfK5iaicMlwpCfIG9Kib8jnqknkG8xCPNtb/132',1500304446,''),
(81,'oNqUrwTmoJo9RPE3Y4XR5gG199AM','听旧笑话。',2,'zh_CN','刚果民主共和国','http://wx.qlogo.cn/mmopen/rK1nsTlCD8GiawLXhsm4hzVGxJ6I7LS43RXkicIT9SWKoBQyApdtK9wdxfpUMlZmh5f1b4yAy1TCf3U95f6N3LOg/132',1499316794,''),
(82,'oNqUrwYHgMvEK4Okl5q_eJBlDnTA','燕子',2,'zh_CN','卡塔尔','http://wx.qlogo.cn/mmopen/rK1nsTlCD8HpM8rnTvg8Ul39tfcJghRwwRR8xOibciaL6XhwoKKJMuiciaPsHw9aNCGPOrwJZrcqBd8Nb7tOyjf1Qg/132',1499476009,''),
(83,'oNqUrwZjNwl9-0gTjjBnJkIKYe2U','家福来马廷',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMbapjKRLeFPN1NvZSJRQR8Ue6zCQicQWvibmvCggeoOWBqBHJUKH9MvmAWjg8ibC7E1aHNeXgcUEZchWahqXmy1W0D/132',1499668380,''),
(84,'oNqUrwTzlRlOQbnVIBNjcPqrxMoI','^_^',1,'zh_CN','中国重庆沙坪坝','http://wx.qlogo.cn/mmopen/ajNVdqHZLLAuAM3y2z1DZ1m1wftxSAHLm4O8IqRzLic1EuibQyEgQCN4KmFpwdgwaicvKeSvElRYxKRM7CI37ROhA/132',1499315595,''),
(85,'oNqUrwbY5ye19zepUhu4LAg3YU3k','唯爱一生',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxIVrDvmKb7g0yGDUZN8C0X6Eb0iabERlkUob3LujWTzzsYbHBxVXL6fP0BMTRYciaCoqFAwTfartXtkTOKpzn1O7/132',1499241282,''),
(86,'oNqUrwdRdrfzfJCt_UIHfPjNj4D8','飘飘何所似',1,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/yehycmDVLMbapjKRLeFPN7u60Uz7VmedDAsL91nNCCVWAb6sibuFW62DhMUgeS19VEHSyBf1IvoC99bnZWxwLmCTSjnhvicX0G/132',1499319777,''),
(87,'oNqUrwfbNsX74GxPy1OGNSd5lYuc','wzl&lzw',2,'zh_CN','中国四川攀枝花','http://wx.qlogo.cn/mmopen/o8HBbXd72BZYvKbTdtZzvZWFicOFuqp3QAibTV2tC4KRE6ibKWKibzqUaDmCYeTTHFmuIgicbomgTibju7TQcr0rVlRwAYEd1m0BJt/132',1499657641,''),
(88,'oNqUrwZr10OXZX1EC5FRPjR4tEXc','藍色房子',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/ajNVdqHZLLBVCgEicdQsAdIGtv6hE28H4bFexuEB3whNXZHgptugPZsPWXbibUNneBlXHMA15icTxoAkYDy2JYIbw/132',1499432165,''),
(89,'oNqUrwUh5cNf9LkSLwNiUht1G_gs','赵仁',1,'zh_CN','中非共和国','http://wx.qlogo.cn/mmopen/PiajxSqBRaELeHfKNd1szyWs3H5WGNd0ibtQUKJPQZibR3BCd8La8fX9YgAI7VYFunhFokMWXIwcBAwrQqzCoKCsg/132',1506952961,''),
(90,'oNqUrwQOlZliiSkSGZrNEZs8aErY','李琴丽',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMbapjKRLeFPNwRA6aw0trrhdNS4rtRK0EkEBqciczgeslwZEAawj1zw1YHaxpDTxmkg2BacZdlRyRuW1uBx6tYQB/132',1499669041,''),
(91,'oNqUrwa02V-TdqcLURjsYzSCsBW8','XH2016',2,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/yehycmDVLMbapjKRLeFPNicTsAwQ4SE2p4Ob7EQ5wz6tKnicTPFagWIayeta9U4opcoQyoEyTn7sXa6PWF3hD1fGrW8iboibx66C/132',1499315518,''),
(92,'oNqUrwVe6F59HDNoNM2YbpRYi_JU','联联',1,'zh_CN','中国四川','http://wx.qlogo.cn/mmopen/o8HBbXd72BZYvKbTdtZzvQISd7cf8pglIONZA9Rx404TH7X3uAevzOfRmpPrUNwGctaBb8EkHxpPxwic5OEppVmIE6CMqOibnl/132',1504844972,''),
(93,'oNqUrwbaU2nwmQFKKnzMnzXwn0Qo','A*可信房产--郭沙',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMbapjKRLeFPN7bhYBZrcRYrNHWHr2IhEhAArPysTAoOw9bKuOHDtWoawOria6gg4oJ7MWJoicQXfZcG4RwKMia8lOj/132',1499238378,''),
(94,'oNqUrwZG1DbkbWOvNweMAKhi3ptM','何碧琼',2,'zh_CN','中国广东佛山','http://wx.qlogo.cn/mmopen/yehycmDVLMbapjKRLeFPN4WQfGeH0qA3mdTkLz7Ce04SBk14b05Iq4qMiaRJoadtvrQupLZgcMwejWfesG4Nia3l8qiaMwy7RhH/132',1499261915,''),
(95,'oNqUrwagfQ3P33ZSfhk_Dkts0XaI','Messi',1,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/fK3fRRPicgAyhbeVCaQ5ia8NvHCBBQX07dNSVrNRQvf6y9b13CUjrYibTAoIr592U6iavGwsbowVm6b02JiaicDDHn7Q/132',1499668452,''),
(96,'oNqUrwcz_agoIJW-CfIs_M5YUX9k','...',2,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/o8HBbXd72BZYvKbTdtZzvQMTK1H1PnVNVpCw6NsIOzGrPGBMc4uhicYZyvXlGSyOugH7N8fWmxPHqrERp0zjVKGDfVibNhFkqu/132',1499314770,''),
(97,'oNqUrwZoP7A27uG7h85yGKxyXAfE','00:00',1,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxIVrDvmKb7gibQ4DXt0JgF84rbWxJEOibwz14RiaE5OwMdruKOwO9HAnLOGkw7hz3KNIyUC05c4NKcUfJCs8vLrQu/132',1499685954,''),
(98,'oNqUrwYsNy0uR87RJX4XpxOWfGkI','亽吢',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxIVrDvmKb7gibqBLX4Eic7sXxjQrBwSu1Z4ULLDMSpZia2p2kP6pdQVIibRW3Nz5RoIMicFGTW4SAt64CwWRlSaPuNq/132',1505136660,''),
(99,'oNqUrwZPofbdGJAhJUxnJBWIedd8','王  杰',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxiaPEupRtzXvthf1SSteziapo2wp25iaIzWCPLtut6H2BQ9lhia4GS3d0UZIqug5oLnFjCeVjadRfRMQ/132',1499510201,''),
(100,'oNqUrwQHV-AlPAFD8fqBSxmGlE7o','梦已醒',1,'zh_CN','中国江苏镇江','http://wx.qlogo.cn/mmopen/yehycmDVLMbapjKRLeFPNicZ93uH6IOiccLseNia5Z8tibWuIibYVDj4s6whR4RIGX6phWZ3ibP0ERF0sc7iaiaK0d3cATOtC9h8l2LP/132',1501912900,''),
(101,'oNqUrwRcGrDOzxge6N7p1baTPWkY','未来的梦',1,'zh_CN','中国浙江杭州','http://wx.qlogo.cn/mmopen/yehycmDVLMbapjKRLeFPN1cwHBzbxk0H3jcHaibWQFU3gvcF4ib0tUyiaaLfV0FF1dnM0gSZuzBCnGvTunWxgLiaVIK0kCf0nMaZ/132',1499316218,''),
(102,'oNqUrwZuKJy3ueq1p67_hKh6Om1g','春风吹',2,'zh_CN','','http://wx.qlogo.cn/mmopen/yehycmDVLMbapjKRLeFPNyftdTq26hlauFh6Bib8Nym6c7Gl8tWIbgr3icNlBlKibJCsedNCSBqgoRWibHP6HwicKtpk0icNhzD7Co/132',1499310552,''),
(103,'oNqUrwU-PrPPZL3aqTPoHLkaBzZ0','AA☞镭战 ☜拓展训练营袁安龙',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMbapjKRLeFPNy1vxbNBO7hHnxibiarJuKK8quWvia4IXrIVgwjZ5aWnwgBbHdO3EdVJBL1dIQqU4baLojFO3363R43/132',1500303344,''),
(104,'oNqUrweqWFJ7mj4gjPIhmWH566vs','许仙',0,'zh_CN','','http://wx.qlogo.cn/mmopen/Q3auHgzwzM4KALOIoa0P10UFdqrSgDclJxib9gMnvvMva9ibSZ1QlPqwtlpPT0Ef50whbInMxufvibo6gmZzic1G9A/132',1499249903,''),
(105,'oNqUrwdp8ZmP1yG72Xf-AosPimm4','墨笙清栀',2,'zh_CN','瑞士洛桑','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxIVrDvmKb7gicvgF0pmIDsXPr5N5iaAIOrkEK9aTibKPQibk3dMhm9uc4DAdrgGxQPfbeE6mS0uW0cdb7wSTBDiaFV6/132',1499761420,''),
(106,'oNqUrwbHndsuKZBpB2wNIrKZ4VDA','Mr • 郑',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/ajNVdqHZLLBlRhggg7EHp1dbxCrCicFL40HbmyGh9Fc7DibkxEPRAZep4ib0cFOvW51KyQZg0YnG8mmIicP92ds8ruQu9SefEWJPcJK3WmeVcHk/132',1499239102,''),
(107,'oNqUrwZ7uik64tDwIvHJpAdpNjmo','AUV',1,'zh_CN','中国甘肃','http://wx.qlogo.cn/mmopen/PiajxSqBRaEJ8aYxLpSjolkn6wgf41wHoNxnMEqFVibmEMMobT7iadeoTTSd0RLtawVE2B7PP12ZtDric2ltXjIdCA/132',1499311993,''),
(108,'oNqUrwSaYJR9Q56Igd5c8_AKxgKg','笑笑',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMbapjKRLeFPN02ibtsNouqds5DWvjCFkBwaHuQCOFN3VpGVnehuibWVjg2usbJqYh0bINoGf6tXI6LQdSWCGBvA8y/132',1500301666,''),
(109,'oNqUrwVfawSkEznD54DEswh6YXKg','',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMbapjKRLeFPNibic8T3EwqOkFEHTzCIFc8D8PmV8lf6mibquQcbttkqZvBkKvx9Ex5OGH6vERS70JF43rGHoIicicuRib/132',1499063393,''),
(110,'oNqUrwZ7NOM9v_S9zgoLma1R6-H8','彭捷',1,'zh_CN','中国湖南衡阳','http://wx.qlogo.cn/mmopen/ajNVdqHZLLDH7M6CVoQxkE31ezF7Mxmcu1YAHD5A5NNiaosGia9WBkCgB6zic8Y1AXUVfvwz9XqmlTKxZBmhl27Ng/132',1511006538,''),
(111,'oNqUrwUiM5LGrIbTnlmMxed9K7u0','海内、、知己',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/fK3fRRPicgAzCcSNexeuarpWGQqGic60kJanH7vlfhNaNXuulRkpRvckJEoQpr5ibFja8KiaxldN74ibYcibibaicH1MlA/132',1499497649,''),
(112,'oNqUrwdIqpINsoFjG-UwraATgAGQ','主持电话 18281615257',1,'zh_CN','中国四川内江','http://wx.qlogo.cn/mmopen/PiajxSqBRaEJw6BfeFqJe7tpHWPQ5G89KAEqQH0QMvicvBY9quaIzOS0nHicfmEV7F74AolChmhwS9wwLybZk0stA/132',1499413332,''),
(113,'oNqUrwdlvsbWXQb4fz2W5QL8Iv7k','時光倒流我也不回頭',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMbapjKRLeFPN79MwnqZrlwkHQGVfP2lKGYjv0R4PMTmzf3FicEDlkyQiceKvZibvmLiaibX9WJLUqhxNdibj434BR2fB3/132',1499672045,''),
(114,'oNqUrwSj-CrMJdITOBK2yk8TYLX8','帮帮还智能账单管家',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/4I3LdGAOkJGE2beRCPSp1FcT4a9wLGD5ibvCTRlKxu3FwHRiaBYzsia3ZreNbSRTsYowyTxgNhKycEdUHU3bWDWbZyFguraIib11/132',1499249512,''),
(115,'oNqUrweYUwaoyZ44r0KF-0NAwyDE','A阿峰',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/ajNVdqHZLLCs5CXWyicfs64ibGE83MJZXjWoqCsyccvjVR3uAX19p2wpPZLeyul9am1ELficj6I9etZEbSPAxibbicA/132',1499670959,''),
(116,'oNqUrwTFZPb3cjlWfMiYMCaHPdBg','想一个绅士',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/o8HBbXd72BZYvKbTdtZzvZaayeVNKXaeTnQmeI9YI7pdL7zCictHN5O3ouIbJghib549lbrRx45FbWWSMUQNEicGD66H4XF518I/132',1499313279,''),
(117,'oNqUrwUbqI7AmNV6JPweBim_l3rg','HUPAN',1,'zh_CN','中国四川攀枝花','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxIVrDvmKb7g35R1xNicDMwic2KmxLCrOvlgDf4uV0vEgVwZlLJWv1A0iaicX3ToOHvScvI1DwPIjos6WorAcQo8CkQ/132',1499065446,''),
(118,'oNqUrwTpvE0cu4mxDxcLgb52UdxY','只手遮天',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMbapjKRLeFPN4CMRGO0iafxoNC5X0W31619YjVUTWomguNOw4t6MjVbCuvRbSUVPFNVAKSnj12icSMO1jjt5unGJJ/132',1505529736,''),
(119,'oNqUrwepGgpN6SkIw9UDiRtI4LmM','王',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/o8HBbXd72BZYvKbTdtZzvZuD1ibb3ibtjeGNxvQc6jBlwL2oefiasXYy1ueLAjtK3r5HDVcEibsPicgc1hPQChDf5heam0ia3VbRibg/132',1499243788,''),
(120,'oNqUrwdeJFu_nUKvQX9bP8bD2TUk','大王叫我来巡巡巡山',1,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/4I3LdGAOkJGE2beRCPSp1F6T5NANS2Kia5upNPgibZ56fbekfrfv4KYb9c3kwATvVDNAFheDwFG8DxPMPibgWNT5Hibv2W05kvZB/132',1499413009,''),
(121,'oNqUrwUA9mcUw1B8ZApxGYGWsteE','雅娴',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/Q3auHgzwzM7EwKb3GUnq7yUnCO5Yv3IIryc8ZiaOUHKJIfUN9tu37FlMpliaYgMKgowv49iaRaCTTZNicj8thc2Dmg/132',1499311568,''),
(122,'oNqUrwXzCTYPU-XIbOXifwN4_zGg','曹子路',2,'zh_CN','新西兰奥克兰','http://wx.qlogo.cn/mmopen/Q3auHgzwzM6llfEZ8SJoX7I9z8dd3quv4IibbXxGf2NA2Fc1lOKe7mJD0W2WXxgkhLMRyvtqKCicGibnSMMICcU9w/132',1510561560,''),
(123,'oNqUrwUk_ldDYNH07L2A-k6uqPPc','萱妹',0,'zh_CN','','http://wx.qlogo.cn/mmopen/yehycmDVLMbapjKRLeFPNz2KbVrskCBrEmniayHgokhXsibU9H1xcJm7sjo1AM8GYj6HyPbWwkHTn7WXPWxqT8YFibLDb3fiaQwr/132',1501920847,''),
(124,'oNqUrwe8MmSqEklFajsNVSiby6i0','爱美ོ丽晴儿~小阳',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/ajNVdqHZLLCibyKygHCYIYopVpsWtrKb3FWdxoyg1rMpGGJsiaX32QCIg8ibAvtpIR8Q4Y5HPfervIIpqkPm2jspg/132',1499309982,''),
(125,'oNqUrwcTf2K_r6HyaOIExxgC1RpE','如果',0,'zh_CN','','http://wx.qlogo.cn/mmopen/o8HBbXd72BZYvKbTdtZzvZFgEJj8eYCcaHkLBuZLlzicBsXibphK57YWSmf6peUXREEgyNY0pLdiauIuzbUiadU6msUGKUAaZVzZ/132',1505051079,''),
(126,'oNqUrwdOYioJpduYFwkzbnoaUaGQ','T',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/ajNVdqHZLLB2fyIMicqBxFFx9ia6XPciaHib79MHYfgd76rP8nrn8iaiapr4F4icenKvibMlmTdN7ou3s1CN1icWOHiabU5A/132',1505816214,''),
(127,'oNqUrwY_ABVfNBtAmw6ZeCS98wBU','何妨',2,'zh_CN','卢森堡','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxIVrDvmKb7gyVt4EZdSkPicn8dPwRPpiaB7iatob8Xm2zEzF4IcxqNYGob2vwfUCwuTD9nvevRhTVicqtVJgPlGNZL/132',1505105069,''),
(128,'oNqUrwZus2QsR88qLUw3d65sSMzg','Boy',1,'zh_CN','安道尔','http://wx.qlogo.cn/mmopen/4I3LdGAOkJGE2beRCPSp1BjAIIeIzhzLoe5EqkNYnLCYPKg5c6dTnu0NMbicGlHu8JbXFqbqwHeibX2cPZpaBLASz8gOaib1MEV/132',1505191793,''),
(129,'oNqUrwZtSUs3rxTAm4nlvhmvdR5w','活在当下',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/Q3auHgzwzM5xM3oQQywFOEAbk4NQEdFEhqNWKl1JdMnIWT82iaZzPavC8jsgmo0gIs07yicsWgOF2o9ibf8HQRdiaxEvzuMA4JZZEhznyecBqKA/132',1504946569,''),
(130,'oNqUrwfzlpoM4x9udvk5OU_vHzyE','雨后空气',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/PiajxSqBRaEIUg6mIPvp1cCG7Ae6Bx85xPG2hmo26s4XcSGnMIyKQzMP3yv4wBduDodITRQ07ia0UgBVBKMCkz8A/132',1499317433,''),
(131,'oNqUrwSm0xlPB61tUWIIJG4PZGps','earnest',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMbapjKRLeFPN2lFmAjT011I9T8Quf3MSkufSpHxZQrD7NIG0Pz8gqND9diaGnhasJbibkbb5kfKEKe5PxH3zAUcET/132',1500522148,''),
(132,'oNqUrwTYYqeR4qqJaH8sgfbgflM8','一念执着',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMbapjKRLeFPN5icVUx1ZVHgibPv6v4K1M6DZp51Gx8V6h5omwpszh7eYlsGTPlBoDVfUPSaYkJpzklDH386ciaDaTX/132',1499309074,''),
(133,'oNqUrwUPeUepqKp5wE21xTijtr9I','春江',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/Q3auHgzwzM5xM3oQQywFOEAbk4NQEdFEUwat6naQohQYd1lAVx8cmFoX4tANXtE6YhiaYb8tVEpzyID36J75U2W8Zor0Hs6z160icJKNdFNI0/132',1499310211,''),
(134,'oNqUrwf8eFG4bSqWk9YigpzwVals','甲壳虫美甲美睫工作室',2,'zh_CN','安道尔','http://wx.qlogo.cn/mmopen/PiajxSqBRaELZwdXBDAxSOZ8pSVNHPoPPrlOjfbKILTjNgGN1xCWlQT3icGtVN0DLKoq7JlkFl99Hia7cVeSjCDPw/132',1501315887,''),
(135,'oNqUrwdIZ6qZK2DXyKDaVyvA6d8g','Professor',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMbapjKRLeFPN9c6Re75hVf0IndlGUwvEGymVibqow3BbMlwibAiaIiam99XHfCdpy3wkNOOCEZYPLap6PlVv5xH53w8/132',1499309401,''),
(136,'oNqUrwYKk5RgCx0jORZHjWxum92I','地衣客',1,'zh_CN','爱尔兰蒂珀雷里','http://wx.qlogo.cn/mmopen/4I3LdGAOkJGE2beRCPSp1Jv5huwKwRicdqYic0sZVWcd1VszyypJu95UpWrj9ibw2r6GSjoFIVChm4DZoMyk5AB1RG6OfYZGQfQ/132',1499343737,''),
(137,'oNqUrwS0FHxGexQHO-o6SS6fESPM','白鹿女少',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxIVrDvmKb7g1QibPY09I0diaibiaProv3e8KJad1DA9alkwia18xwfQU98o0pMWeebPy0uiavOttPb7sPAxQMTuojqR5/132',1499308253,''),
(138,'oNqUrwVBO07JuhXsKBykmqXW2KpA','蒽',2,'zh_CN','','http://wx.qlogo.cn/mmopen/rK1nsTlCD8EQY5VbCDt72qGJ9V2nNblkiboUiarD2ibFr4YVHviaic80G1ibSRYiaMHCVpQF34lPpRGp6bxZxNibkHQhBw/132',1499227614,''),
(139,'oNqUrwSqyQpj1OdTd4B8eOsujNaQ','晓伟',1,'zh_CN','中国四川宜宾','http://wx.qlogo.cn/mmopen/4I3LdGAOkJGE2beRCPSp1J29eaEhRj1ibt7QgA61HrPhJVCPbtSX6aicqRrZoliaxWoIWCVte0X20XqdavmejC7CuT4Eawm6YGm/132',1500301257,''),
(140,'oNqUrwRGuWj4Jv3XbkXkVEw8udB8','Euphoria',1,'zh_CN','汤加','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxIVrDvmKb7g4rBLKeJ5G5pZmUAAib3Q18C4syic0KibnmzibGUF8uosRauMQXibDrRdicvBQQibdicY58gk5UjdnDhqeUl/132',1499500569,''),
(141,'oNqUrwaIoDu65jDw9BqActFkPv7c','黑金狗子的小jv',0,'zh_CN','','http://wx.qlogo.cn/mmopen/yehycmDVLMbapjKRLeFPN3GumsYQtEib1cTnIzhHLNREpbdx9WwQ4XDojmGfLXLyuPM7iatvAq9L3LxmGSeiaiao3tnveSJYFAuG/132',1499259169,''),
(142,'oNqUrwQWaTdOnEtwknpQuk-XJt6M','♚Sunshine',2,'zh_CN','英国英格兰伦敦','http://wx.qlogo.cn/mmopen/4I3LdGAOkJGE2beRCPSp1FfQuWdeGGfHjgdWD4RE6DqiceLsgPXCnUX9EM2yib7LCxTeoyqhCicVxicLT46YSP7sicqjPy1evLliaN/132',1499672119,''),
(143,'oNqUrwefSY5NpAEMunGZZwtQTk-I','卫东',1,'zh_CN','中国四川遂宁','http://wx.qlogo.cn/mmopen/o8HBbXd72BZYvKbTdtZzvfmCxZrE0fqKk77HbmynzBy9VVEiaJ4dEfwIHeiaa32DCBZcCoK6yibFXLkwNEoaibkwjGo5OqzDtSqP/132',1500300886,''),
(144,'oNqUrwQYJRhhYWUWJRbzqLBGp1-I','禹',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/PiajxSqBRaELLhCsYicTiajw3qS0eHVxib1XibjlK2fMsEXqCXQt5X9NMWQpBBaGRyCAORQu1CSx7eiccu0PPC1LDD8Q/132',1495543349,''),
(145,'oNqUrwbeHgNq8DZnf6PRbBLqPVVc','沃尔特',2,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/o8HBbXd72BZYvKbTdtZzvdJh30aFhkbK200A1QQezl4uCot2emaiadfqV5ascRkq8KlSCnmS6cibUxsu7Oeiaic52oWsiapw2M92F/132',1499671749,''),
(146,'oNqUrwRipKWTM1jcmorFYnjXGbu8','Nasir丶凌风',1,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/Q3auHgzwzM5xM3oQQywFOEAbk4NQEdFEI141ib9xFIVWZMsiaNHIYeE2BBC6HD9BiaMWX38UExwyQFmJia5hTOheL0ibFC6VHHic3TmHUYGzicz9Fw/132',1499242889,''),
(147,'oNqUrwW8OZuSY1wxItVuP1xRWaW4','不屑沵旳回眸',1,'zh_CN','安道尔','http://wx.qlogo.cn/mmopen/o8HBbXd72BZYvKbTdtZzvb1yxPkhoNUglLVibWiaSCqQAuGMV2QlTicibhQ11PtMuOFQcroCncg84QQ2jUqt9zFERwdfzJqecwz6/132',1499232123,''),
(148,'oNqUrwakRL3lPofq7sDfe25Ckxkc','一眼 万年',1,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/PiajxSqBRaEK22ibwYCMS7UGjicnpF6lGOsMQdCxWTgUgWYDHhsI4lGkjFUc16ib7w21UiabicLzZxcSDLyMcsiarzFOQ/132',1499229092,''),
(149,'oNqUrwa1TOIsC3s5kasa1tFqiAgQ','A文某人',1,'zh_CN','中国江西南昌','http://wx.qlogo.cn/mmopen/fK3fRRPicgAyhYdH9cvyv8D9g7qChBNiceBLKFXdj7GYWL1yLZXVsEEZOYApm4TITLBSLxjSoBXn9hAt3KiczHiciaiaCroickjEEtT/132',1504887988,''),
(150,'oNqUrwV2LiilYHRTeVRztkGbqZJ4','小螃蟹',2,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/yehycmDVLMYTA4GCHzd8LnWjB3Ty964L4HFMQFowwiatfb2ibCSZ7CCgx9QzRbHJSjQyLZtGWxp0gh8QysrH5twvKIZPtdJyBT/132',1499310456,''),
(151,'oNqUrwbVu88qVNhQiCySEA39rQi0','绣',1,'zh_CN','中国四川广元','http://wx.qlogo.cn/mmopen/yehycmDVLMZBRYq59iaBkevURrFFEribU3LdblF1ObAQPoZQr0OGAWHXhHBRYEJrddD6sWvduhzWcMagzuYgV35LW0ZbyyeLoib/132',1499314827,''),
(152,'oNqUrwd10_EBp7-cpA6kKyQKhRfs','李金潞潞',0,'zh_CN','','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxicTGEc2G4HFGicb8Mn2ofp1hWDdEviafSTjzckcyr9D2ia5WmSj68egJMqfqXxjWPfHgS7CcBCSTPeUenia4qH3LVr/132',1505047822,''),
(153,'oNqUrweYPfSioKRY2KIitDAcVF0M','缓缓归',1,'zh_CN','爱尔兰利默里克','http://wx.qlogo.cn/mmopen/o8HBbXd72Bb5u54nVpsEfvRhPk8bIFG5ek0oRHtTlxw1lJC5icqC2hBfdFP0lLfLD4xO6qTBNONCW65cgEAyWXjXnfX1us6VB/132',1505050322,''),
(154,'oNqUrwUXQTJbzJYhU24XWTB9mP7I','糖糖',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMYTA4GCHzd8LiaqQgsmOjj24Dc3VZqZue3rsicJJl3dCj0ShG1ksC43UeibouiaBv6JPdRGrd58T289eq62oJbYwE3Q/132',1505278062,''),
(155,'oNqUrwWfCE2L6x2dU-_lK_SI6wRM','Catcheng',2,'zh_CN','中国四川巴中','http://wx.qlogo.cn/mmopen/o8HBbXd72BYkmhkhib6dkcBlYIsVics6nCqVhsMH8Aw9SDtibE6Cwsb0gXmtye93LCvERWwEibKnUlgbHXQrezxgaoiaCn8FkXI1U/132',1499238704,''),
(156,'oNqUrwWXN_5D_hf9qzOjYql_HTV4','傻人没傻福',1,'zh_CN','中国重庆丰都','http://wx.qlogo.cn/mmopen/o8HBbXd72BbJMpsUW31iaz8PicXs1FNpLvdibN4Ymdlfz0Y42aSqGqtVLPq7gwVAWEhN5ecicINejyO7yJt0IbZRtLOx0Bh5bG4N/132',1499315663,''),
(157,'oNqUrwcb3Jn_mUnLK9nRBUHZxL0w','辉辉。。。。红太狼',2,'zh_CN','安道尔','http://wx.qlogo.cn/mmopen/Q3auHgzwzM6yic2soDOknDbtvesVRdkYPtjvZe9LBQZ5eIibQSv2kDia8z9jDiaN3GicEgfzm4jNibXPd7g7H99Qib9GkUXIxRC4aba5f8V6HmmqP0/132',1499342108,''),
(158,'oNqUrwSnMXTEaKFnrmiEh0crF4og','张高民',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/fK3fRRPicgAyAqnPH0O8I0601IIiabnuSgUsQZEHMzDPH0jRcNFhbAIxwBQA87vQzoC3UBB7MTByteDyxYiaNktZo9icrUibwnqPB/132',1499398370,''),
(159,'oNqUrwXhLVmF-hXUH1rE1nrRKfn8','逐梦，无惧',1,'zh_CN','中国四川遂宁','http://wx.qlogo.cn/mmopen/j8mklVS5fhstXYZOVFF26GVVPtRvduZE1FbnuuZujLEILPiaxCbNyG3IpNCtXwoZicFoJAJlibU5Sej9XEZwdK4TSA8Xhz7giaIY/132',1499231632,''),
(160,'oNqUrwbg6iBdnn1Q1YCY0L40tRz8','丁志强',1,'zh_CN','中国福建泉州','http://wx.qlogo.cn/mmopen/yehycmDVLMYTA4GCHzd8LpRU2rvtbQBL06MoibwKf3Z0LWTDLlXciaXu75gicYEd3pvdmrb104UeUp9eoY2hTqfmctnZSYkDb5c/132',1500300497,''),
(161,'oNqUrwWxA0GkG7aObcYZmERWWkrg','冰     水',1,'zh_CN','冰岛','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxicTGEc2G4HFKOGSzeBqVXfIbHlj7YSCsvQYxg52TEfN1XCEmA7IarvWUqKzAadlHdrgCXTEsUU05GBd3JbZvMK/132',1499670756,''),
(162,'oNqUrwTcMEAljH0dO5touUZj8yMs','一笑而过',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMYTA4GCHzd8LjeCwUiaBfLnnFxM8Q9CVuls2jm0Vlcv2NM2M0VmXNn9hYQIsl9Xgx6y5FSxbjkicGHCGK9XALW7WJ/132',1499343647,''),
(163,'oNqUrwSn5HoLEQQ3wm7i4yT2PvyM','~',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/fK3fRRPicgAyPJO8CicKvca4NuDvTPIiaMlicMeOfqibVicybJVia6U3KtLT4Ag3fCndvZZOQlGDO1U5APZEmBSkB8JknTeCcjP5avZ/132',1499669912,''),
(164,'oNqUrwY1v1n3JVuhOwv6r9kkpsIc','someone',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/fK3fRRPicgAwaibuRibTRLtsnpQoScOPURzn0WicTE9GAiasUmxiaOcqu3ZTgtXlJUnwMPHYIooXKrXXTfbx1s3V5cT7sFKzHAwUYh/132',1505735159,''),
(165,'oNqUrwQ9-ChsAZInIMHtG5hJryQ4','鋼琴別戀',1,'zh_CN','中国台湾台北市','http://wx.qlogo.cn/mmopen/o8HBbXd72Ba09hJFxicf4v4ZflnIcCqBgzFvQj2nS2Nl5O3ibEglnW3lbna0AK3micfPFAXOjzaJuNMNnRuxk1UElGPzV87BaS4/132',1500301093,''),
(166,'oNqUrwekZ1-wx1zH_us4yn58aB78','刚子',1,'zh_CN','中国陕西','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxicTGEc2G4HFCL1WYB5CdjFLLXjC1WTicPhDPAdvWssQDunEcKhuAJZZHVuf39bMxibm1bcbtGOTonOMOVfRC1qcj/132',1511988861,''),
(167,'oNqUrwXsl2mdJ6HGASgacTxDTmlI','春天的风',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMYyZsk2bkibXibXY0asUNcGyjxuYTibqNmiafGibFj1YY67OIdzs7eKwlf2KInWcXNhouc0Dd6I6RBoLeafPnBU2UfCx/132',1499311830,''),
(168,'oNqUrwdp43NmgA60DXTIyg1wwV0k','李曙光',1,'zh_CN','中国湖北十堰','http://wx.qlogo.cn/mmopen/iaASibPu1NBDkibx8BMgtiaU67d7NB05Ht0OicW9ib6tjicUuxMaiadKtaACQ5XKic5k2K8sia4xDeiaL3WqtTGLw62xIg8twibGYjnJ8N0c/132',1499396779,''),
(169,'oNqUrwdYKU0wYJmqWfLo5eb6Cz9o','汝何',1,'zh_CN','中国浙江宁波','http://wx.qlogo.cn/mmopen/yehycmDVLMYTA4GCHzd8LvZDp266ksAMNS4AD2iaa05eEkG8o3jXgIzrzPOUz1Nj17Mr1icVTic61O9WIW80cx9rwA52oQ8mrzd/132',1499668507,''),
(170,'oNqUrwcuFNn6lFq3SuL8jP8gvQ6M','A小卒',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMYTA4GCHzd8LsWk1qJZeJGyUCkAegCQqr203408001tN02fey8a7wXNA4HVJ6wkjYYWW7L2oHvicOAHytLDr6Lib3/132',1500304074,''),
(171,'oNqUrwV7RhsL37Agrw9Gl5nygmJ8','WJYQ15281668079',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMbnej0s240nKap1WQ5PPbQWy6lgibxsMgPXqfeiclR8XNjb3VMicYng3GffczVez0CCjFhm0rsDZoLOHj5oFazYicO3/132',1499413374,''),
(172,'oNqUrwf1WfIgr3mD2tVnK73lKQCE','合衫难衬',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMYTA4GCHzd8Lo2MeuHeYAAzeUfMHnpJob5LWwoUCFESgibpG8CK8Sp0byLBrFexCRXqeEozOc0u27DBK8ns20edV/132',1499313161,''),
(173,'oNqUrwZLnzw7hMHZcLqP9g753oFU','',1,'zh_CN','中国四川巴中','http://wx.qlogo.cn/mmopen/ajNVdqHZLLDUPewKeqdfMXP8XsddAc07oKV0aJ5JNy6DgHzpJ5FTIh4MvG1kVDhAkvMibty8FLqCBD7asUiaNkGpibd4KUoXa661ACYFMmU1ic0/132',1499318196,''),
(174,'oNqUrwb5b6t1sPQ4maFtg-q5nnCI','CCcc',2,'zh_CN','格林纳达','http://wx.qlogo.cn/mmopen/yehycmDVLMYTA4GCHzd8LkvUlibFvWgjCTr3vAWjtQQtLIzViaBwjGz7SX0XHXUicJic0c9xcEia2mFu3F1IKIichmvGkXWFzVAhxc/132',1499311512,''),
(175,'oNqUrwQZJLcaENqroMK_dafUAuF8',' 小样儿',2,'zh_CN','爱尔兰克莱尔','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxg5xt8GTOoSkxXic6zP8AZyZ86X9r3fAOfiaXVDLTyM6t5CN80k4aXCsdFFL5po0d2iaLbxr9O8NPWoqXcYv2uHBp/132',1501236250,''),
(176,'oNqUrwdeLQqgfoKD8lhnfkToyNlM','我要换个名字',2,'zh_CN','','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxicTGEc2G4HFEGia6HhnN6JsVfIH9jMuKDlFn18XSh9KS8Hs7XQmM2n4RloIJIUTPA0FJoWDxtRAt6XsAWPLpmX3/132',1499253258,''),
(177,'oNqUrwZr8fxCtYeiwfly3Qofl0to','万家乐，罗秀英15881628175',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMbPvo28kgPHGBFzXq0A7cYXtdOrAL9CzcIEwau7oFBGpVicQY1kaq4tb9tVHnsDicW5WxX48J7ib6MpFRw2FMaFibjZ/132',1499668937,''),
(178,'oNqUrwYioYW6YfDIs4hhKOzzMspA','夜未眠',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxicTGEc2G4HFPjAyyice43k44oRXLTiclXicL0FtrYfZ6dDCicNRy1Kv53lsgsL0yibgc4lIS0aBdia3hwyyq5liay4DbZ/132',1506424223,''),
(179,'oNqUrwYuSfnNIfq5sfrKkpEaR_Bw','稻草人',1,'zh_CN','哥伦比亚','http://wx.qlogo.cn/mmopen/ajNVdqHZLLC8FtbsB54upY546u6le4WE2B5I9hjSYYsXX76iciaM9hSdmtIU9ORZLgz6bnzbEevZudDtU3pFkOKfaKfHC5x2ia1Z4R7rXpKHNo/132',1499316554,''),
(180,'oNqUrweGBseACpa5FbLZEWx27mw8','须佐能乎',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/o8HBbXd72BZYicRjduObdVZKRBXD9o0TuhEuHYicgGLHvw7P2fvic4DW3q6iaLYCgnb4sJKdFmskhEDlo6yIqKsIgZAJl5sibib8rv/132',1502353523,''),
(181,'oNqUrwT6rzWIdHVfxWXQi8DTYvZQ','祥五岁半',1,'en','中国四川绵阳','http://wx.qlogo.cn/mmopen/Q3auHgzwzM5wHicz69fsw1hOzfp8CVjt2fiaGwdlAZe9PyKPIsgQ1FHNCfK5H1HFicz7ZzxEmVQ5gXqvO4icRTN7yZX3A68LV6PzJ3RxVw4aeB0/132',1500608141,''),
(182,'oNqUrwa0I18MnZKEeejvLe1rJ8O8','帖明',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/rK1nsTlCD8EGjhdzF9OC7OSRvic6lyia9xroRFmRzkKywvGKJNpEQfmznq36OzTeSfpgXJTwaaMvmKrervW3XymoSFXRkKuIKq/132',1499311765,''),
(183,'oNqUrwWvkP0a8Lt9tw1S7BUFu0UE','小蜜蜂',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/o8HBbXd72BZkP71pSFLm2305Zs2eHJic87YJqYMtZrY5PA016mVcNrDFKkRobW1Re3MLo6iaZpqpVIOJjqI3KRul5jpcWGTyp2/132',1499237569,''),
(184,'oNqUrwXXYwR6XF5nffqvvy9MWmxE','言葉之庭',2,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/rK1nsTlCD8FonJ9ebgib67GkRdTCaxltCH8rbFEFUgKI0KYia5nAlV1qAjVV3t7acI4olfz8uUgDpgAYicgUVictDZ0JOPITTAWC/132',1505019107,''),
(185,'oNqUrwSDvjAQzCl8jaK7LQeis9nY','',1,'zh_CN','中国四川达州','http://wx.qlogo.cn/mmopen/yehycmDVLMavB9E3bibo5FnrSiauyqh2hhTNSTlPOHpNWMsibYpwJiccDhibTrhLicYnMkd4ltFicerNtmOkSzpPUKubayoQ2m6yzgQ/132',1499338434,''),
(186,'oNqUrwbAJLkLi2Uie3y6XgcHRy04','@H',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/fK3fRRPicgAwYdKg5iayibcVoHnpTqSOLlMpzv3EcYzs0rQkP981QEw2cnvsy06JNQSrzLOJzf23KRXjZS8e6RaVZqLKQ0z5iagO/132',1499239925,''),
(187,'oNqUrwW0E-l3PqSqHr6Ty4hFf3QY','majianbo',1,'zh_CN','中国四川攀枝花','http://wx.qlogo.cn/mmopen/o8HBbXd72BY0UAC0J8deQoeoqjKEPshJnE4dKsJzx2ATbRT6AD5KJ6vPia9yIXr41n2YEVOwIhibPP7QafJJla0zh7452ZMPxV/132',1504833313,''),
(188,'oNqUrwbrxTftpArL0-B2hieCYEa4','懵',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/Q3auHgzwzM5WcOEibicO5ZUXSDhkKAfLJphXzUf37rQREknHKQh7Atf3BpLktZXW2kbFKGTGM7PV7BET9kQiaIT7PqbEibIeCpPoj9FMcW1Pma0/132',1499302699,''),
(189,'oNqUrwThZAJDBBS2JUO6gG5Y1yMs','lucky dog',0,'zh_CN','','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxicTGEc2G4HFPt0WK1Q32CDvN9opOnpicv7q6yiaFZtEicnLlSkeZbaBnPEnUEKBolK9plGtgA2jrX44jXhK7D6NXX/132',1499237312,''),
(190,'oNqUrwaQkm7lE1G3_-dogGyYaOAw','小猫盖屎',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/rK1nsTlCD8GqAFlKyR3Db2JZpGRBcfrBoU58mYgvBFdmJxZ2p6icKwibGzyxj9dsO2PSlhZATrdmls9cx0XZxribE6E8IYI45nj/132',1499671848,''),
(191,'oNqUrwSKERzK31M5KAVYBUwhZf3U','~呀昳',2,'zh_CN','中国四川达州','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxicTGEc2G4HFEPpc6GyUwb6aSBrmBRVCJ05ia6FSduPuHjrl87eGArXKjic8iayny5CcuU5ljAgXBHMfvQVELqHqdb/132',1511113734,''),
(192,'oNqUrwTaJh4JPi1b21y41ROGkQgg','毅亻行',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMYSTApfIiaibciaDRhTwuZdibSE57ju82a8Z4hJQoIbgnNy1mZIHShmoBibY5a1dGT93ZSUgQ0icKUmVibV1SCxQZV1EIia/132',1499406101,''),
(193,'oNqUrweeh6-CUB8LegQwzTXlTzVs','（远程房产）@杨平',2,'zh_CN','中国四川广元','http://wx.qlogo.cn/mmopen/o8HBbXd72BaOicmic5OV9UIKSn3WmJjRnBYrjQR8mjeIibGKTPbYDv3VqKXjyQOykTa9CDyahibwhKx7LicHv2X6rN6XsurmasX4J/132',1499397971,''),
(194,'oNqUrwaJjXnG78iA6hySqRLgpG_Q','Min\'s',2,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/fK3fRRPicgAzmw3LOibUc3GlZiciayxaTCnIq80mmoMNwj7how8ggaibFFJvpEibr5M8ZZW9puazBOibJZ7vXHex9rKg34HjU1EibgP5/132',1499308192,''),
(195,'oNqUrwWQcm0aWPHAD00FmwOb8hX0','校长',1,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/o8HBbXd72BZE7icduDSNhhZMbpEBfCdI2sTlMHCQAXdUtJqoZx8fF0Y8we9B4NLdacdrAdseN7BHNKDIbAvafCDtHmFE2XKaP/132',1499337585,''),
(196,'oNqUrwRG8N51r6eB2FlxFA_ksamI','长征',1,'zh_CN','中国江苏南京','http://wx.qlogo.cn/mmopen/yehycmDVLMZFcukyib2W7FY0Dhfhw2Yzm86wibdEw95sVIW5GIVPDkbiauSo9ggb7SjIL030MicgibBSUd6qrpda0FznKHDIrl8BV/132',1499414175,''),
(197,'oNqUrwZQ5lViPdQULCaN9Tg54DCo','晚点遇见你    余生都是你',2,'zh_CN','中国四川巴中','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxCvW5EiaHIMlc5wdS66YA1A7s4oPMGMbicdNiadicSTvK0uuUcaticonT4KhEKSOj1fhXezUIgp37UsiaXwicmbHS6RCia/132',1499238604,''),
(198,'oNqUrwUVXNTz7VC_y1jJPPbEUepU','罗罗罗大罗子',2,'zh_CN','塞尔维亚,黑山','http://wx.qlogo.cn/mmopen/yehycmDVLMbfKgPVMLNP3dG5ABicFn0Akg0R163QK3gdYkYgGsW3ZRLzX0xRrK59zTg6vHK6ibx05XK73cVyldJDCN9b1Rg7Bl/132',1499310832,''),
(199,'oNqUrwV9eGUvsSV8nLKFWhg1W7wI','小透明',2,'zh_CN','中国海南海口','http://wx.qlogo.cn/mmopen/gVTCS8NQC2jos4BDMnJsYRjhRCPcyXno5X1CGYD9jbziaFTibDicicDY9Oiarlp8zQXG6nCGO3hSYHrMALJdBiajSV85ia484GtZ3Cm/132',1505050986,''),
(200,'oNqUrwevhdPZKOIohD4V8M1NI6Mc','绵阳友成商贸：赖兴明',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/ibwNibcTOrhtJRM5Ea0xZrR7ED523oGjCibibf4AHtXjKUGUyMhPhFcuNVEBkWA2J9Hj0NJ8WqVrXSmLbibliaKYL2BsHfR1I50IVd/132',1499395903,''),
(201,'oNqUrwVL9snpbKDtK74-tT4NRF4k','',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMYTA4GCHzd8Lsq3B5njJrb8gDMpnkqpKhBzjHzZX4YDiavcdb0YcIHdKsnScdcoHdrricla0QIda2WXsW7nK3OQAe/132',1499311300,''),
(202,'oNqUrwTSm8SEPUSvjEtdEMsQeN6w','一米阳光',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/rK1nsTlCD8FonJ9ebgib67CVHaGJXGfg0Pq69OZ4636RHf4tjV8aQPr5DBLTfw7Tu8a424Uf4Y0UFOoYLtibd7Jn3nxxCyHibbN/132',1495543429,''),
(203,'oNqUrwa8FIIwhMHe6UQQwwiAc_ak','张万良',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/fK3fRRPicgAyC6tJUOdpr0WC0ADKy3kibkdWnwJon7gIjezMFdDvAWA5jqcdqA75fM9iaa2q0O3o09KGArKH3Slt1SRrj6BSFww/132',1499310045,''),
(204,'oNqUrwTENlRPhCXgae2_s0ByvrWM','刘靓',0,'zh_CN','','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxicTGEc2G4HFM26yH9GVERnUzc7SEpky6ibq5N01PvFOmialueA8tM64pqic2GgFVicdGfWcSY6163rH0BqEvynrYVZ/132',1499339480,''),
(205,'oNqUrwRGR3c8XFpWprj71roJ0-DE','无敌杀手',1,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/gy8hFJbcFwVB0nqwCQATjGu0h553m5aYs2nzbib2fJcoMxibeYHZzzz3nKHMibVVWhsOnHUpLxt5OicDBzicfrH5exRcECMe08m08/132',1499424987,''),
(206,'oNqUrwXR9l-HmRhWbkVRJzrepJPw','欣欣',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/o8HBbXd72BZYicRjduObdVRRuLCV4LoJn9ib8TWqBcibasb6x2wsb7rZF1Iv2OMmqoYnvQFzqKHOscBdlmFNwJdicLOQ8iav4oYd3/132',1499347253,''),
(207,'oNqUrwd7zcjTD_xPzmjmbzgd-b1o','cr君',2,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/fK3fRRPicgAw6RKbxgIYiaCYhicfa4elPsW1zkYLky3f1nib1GaLvEJhDibicAsvP28icCfI31iaFDjFH5uOX2cMV3rKLLUMDeIG9yTT/132',1505049770,''),
(208,'oNqUrwf8UQc1NatROdL3DVVKfPrA','',0,'zh_CN','','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxCvW5EiaHIMlUiaLTawZFictxImCWjLpDuPxkGKYBeLQ1NOn8PxoDiczIVx7Xragnye4qH3Kp6QeTyXibZe68lnwVTI/132',1499310791,''),
(209,'oNqUrwcW5EW1CO5zezXo3Hf2bw6c','',2,'zh_CN','中国四川泸州','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxicTGEc2G4HFDAz86XibXMMsBuZPX84YgJcwia5vKczRgicO5Ufuxoicne4Pos6BoBTJgxMbRcxadsNCIXRevFX309F/132',1499310222,''),
(210,'oNqUrwcAZxvNF7vKSH5ssRrMaMO4','攀登',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxicTGEc2G4HFBZDJSSzKpCiaKLAoicibWicrRjqKAE7BQS7x5FPn0pSdqiaP7icicic5BSWRshoSPfbn392aO7J2UZbDPJV/132',1499229110,''),
(211,'oNqUrwQf_g44pQK7tHQd0dqcJDqU','田玉全18990161868',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMZkicmP5ib8exWXKhGViaZwn9u3TCVlnia58PySo5WBgHaeH1oCia0usWVvezicibp28qqD85U66X0utiaZqWqdtqoha1AR/132',1499309152,''),
(212,'oNqUrwRWu192eQ7bnttuZ149gWa4','Don\'t worry',1,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/fK3fRRPicgAyCibcLzib1iaD2axgZxORMPSy1ef2RoOYt2jRqplaGS4Gicj68LuKUzBtIWItQMkrVDe04kQ6UYuFict1n0mTYGIkAu/132',1499311391,''),
(213,'oNqUrwVTGVRa4XNPKlX6FQ7mfDW4','竹子',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/rK1nsTlCD8FonJ9ebgib67ARX3pcpsnJcN2XXCyKr0ia5ib8ib6jcYgic1sFOUQiaOEricWVHmP5jBrnK1iawsRngALPXWfZS4b1OS1S/132',1499309167,''),
(214,'oNqUrwVRqm3Cz_zoQRw0fCRHdYmk','！！！！',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMYTA4GCHzd8Lr8sFp84dpZ5ib9dxb6IQrZJSE6p6bZBJr5SKlc1zE7SXHvdI71qz6UARbWQDnrqmGj3f02jERwQG/132',1499746881,''),
(215,'oNqUrwVIYGODtvDB6hYvxrntxQ3w','杨丽',0,'zh_CN','','http://wx.qlogo.cn/mmopen/fK3fRRPicgAwibDavRVwqOYpGQxOx9ibYu9FSeWgjulb1Eeqfcaw3vmiaHffwxUyJndWRRPYFtO7vZCooyj2icTHFdQ4y68w05HYE/132',1499413770,''),
(216,'oNqUrwYcf9WbZg7bNE4uqzWLaJG8','哦豁',2,'zh_CN','中国四川攀枝花','http://wx.qlogo.cn/mmopen/yehycmDVLMYTA4GCHzd8LrvGvZM9jDbNKF0lq0yE3ay5ibC5He53sicdo0pnWkHHxbKIkcHR73vhZWtXm6XsGZ8uvJR4giblJicb/132',1499313136,''),
(217,'oNqUrwYaGIZWDuwvHSj0TuczaDb4','阿华',1,'zh_CN','中国江西吉安','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxUnMjQrKB9wUyPQCibdOxjGAGKTI6uAPHIHwIbkLMLL5CJuRYmI029lP33x2gNh2hOAQSDiccErCj7S19RzeSr8h/132',1499312100,''),
(218,'oNqUrwTg_1BOUxrTOSBy3ShJ0-OA','微笑式&笑傲',0,'zh_CN','','http://wx.qlogo.cn/mmopen/fK3fRRPicgAwSTT9UMGS0yKZlTSygNmwUsbS46iaMTOrQFeCic0ibWNS0DWuuxT8ET3NQ1n1GrfiaO7xRcmUZNvOfnIqhm2nOjeIV/132',1499250007,''),
(219,'oNqUrwRmKTAac3zD05v2WB9edPg8','星火燎原',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/o8HBbXd72BZYicRjduObdVW5wXMnJcYQmBe3iaF8zuKrt8J7wgwHcfGZPpRc1M1VFxVwnpiaJIqniaqZylTYyHfNP8X2t14x8CeL/132',1499310156,''),
(220,'oNqUrwXKC_mxCJvqL3pB9InDEtnM','阿凡达智慧教育丶兰老师',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/rK1nsTlCD8FonJ9ebgib67IhxMNn5uSslBNqA6oB78MM0PXQc47TsKic7CaUer49gBX890iaibskgduM3XLTicogicbwiaefs99EANK/132',1499648410,''),
(221,'oNqUrwZCJ9-xeKsjD9w7IpvltwMg','Lonely',1,'zh_CN','冈比亚','http://wx.qlogo.cn/mmopen/o8HBbXd72BbVoWbDRprCdkguXl6EbeYo0dtyhFldZEgWk6lPGyoZ1y7Gv8mdAxH47knYzvGqmwKNcI9GfYQKwaBzHTjXnfKj/132',1499243077,''),
(222,'oNqUrwWRcaJ8N3_OCHs6mrz6OnVk','精彩',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/o8HBbXd72BZYicRjduObdVSCoLk5kP1DcHSK2DibuA9cZFvYV82BVYg3yPMJVnOctQcYZhWqL9iaA2omKUwLo23AaSd1HAjykSq/132',1499164208,''),
(223,'oNqUrwU6VJv9_XRDoyT4JvVbbsDg','遇见最好自己',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/Q3auHgzwzM6yic2soDOknDbtvesVRdkYPNNC1hf39uZslJAsK19z7cic6BxB4SwWuSuKj6Dz55ibb1Erm0cNYJVcGTYibQbtmPnKUz7s4NCkGl8/132',1501232025,''),
(224,'oNqUrwediN54khB58S81QLI7NFhs','请叫我狗娃',1,'zh_CN','中国四川南充','http://wx.qlogo.cn/mmopen/fK3fRRPicgAzNiaibwTJJaXMmzkmLXDlXoJqicVVEbQFhxzdCFljMP0xuux7VrlWFhTKIGPjMHv2GiafsvjgDkDsyfrAmMsqq8cNC/132',1503441648,''),
(225,'oNqUrwQQy-kwx-6wPRAcSDzE39P8','Rainy',1,'zh_CN','中国四川巴中','http://wx.qlogo.cn/mmopen/o8HBbXd72BZJPZsov1iaY6iaiccNsfGSyXMtXZZPuvSsm6EkVX1SCytUGoCQtWwQ0ia0sN8OnPtFB2AKQRPyBGLB4IicTXXCeNm4x/132',1499272205,''),
(226,'oNqUrwXhkfw5b3pOhjtvwGHuqYmc','smile*=*',2,'zh_CN','中国重庆奉节','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxicTGEc2G4HFOvstQQGJVzm3XUp7TB2ZKJcAI6nHKqm8Fgia9oZRG1ttdwcnsdicuJTosNASbh6TfuibyJhkl1Ykqk/132',1499501935,''),
(227,'oNqUrwYTtSdK5ORxr-MRqqPUR62M','紫色烟花',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/fK3fRRPicgAweQLBUT8bzsibsiaDZ8Kibcic1AmJZQ3bicMQ4lMO9BpEoFPJYr0jfZzp73pIBPhm6brtdO86ia4tOm0B9lpl1oueicg2/132',1499316453,''),
(228,'oNqUrwRJ5CygEkZEWHTa-jyiwpQk','陈家麒',0,'zh_CN','','http://wx.qlogo.cn/mmopen/yehycmDVLMYTA4GCHzd8LmWfeAm5kQ8DnuibibibE49x1fibNnWVgqcATqIIDG5GA6LxB2Fuee34fEFAOwf7wuv77353CB8UUAHO/132',1499310962,''),
(229,'oNqUrwXhx50_DZOEu-1__h_72xYk','他、宝',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/o8HBbXd72BZYicRjduObdVS7ibGibfJJmkw8W91n5ic1zDwhEKQc2wIoG5XAp6maVBkqfTgTVHgpjibTS1NtSOCQicuIiba34SkCmAh/132',1499228262,''),
(230,'oNqUrwe1co6a8Nwp_TycBLtQt54w','心平气和',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/o8HBbXd72BbVoWbDRprCdlcP2Zu6JqomeHVTzZ7EOELGAsskAqab9k8M1Rxu2niaaBrEnQE9yypc8cywnd7TAwlorNV5iaqq6Q/132',1499412875,''),
(231,'oNqUrwRVH8fuLgWuhhyQIFnSZcqs','Angle丶Lucifer',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxicTGEc2G4HFJahiazDvx5k1rEmI58vZuqZiamy68dH2YYrsPjicgNgaEB1iajOvwhHyHCBtRMlmboO9m3GyyzicSKDa/132',1499065139,''),
(232,'oNqUrwSm1XM0nPvIP8eq4AB46_ew','汤圆',0,'en','','http://wx.qlogo.cn/mmopen/o8HBbXd72BZYicRjduObdVeOUatPYzTtHy2FfvpoXgcibL4LIzbhf4XXGibBAlZJNDlojw53kC1AibSNUTxEey3G4fkiaibJgJkaNx/132',1505995276,''),
(233,'oNqUrwaVySAStMrl3GxLGjwqwTKc','',1,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/iaASibPu1NBDkibx8BMgtiaU61umf6Q4sdvwk17VbJn9Zk1slqNytczmpcibdH7vbuvkib4vzIOqRM6u1jd4RAak0KtCdAXJoIeXI2/132',1499784432,''),
(234,'oNqUrwZgz1FM0G_gnCXKmalFuYXM','善意的谎言',1,'zh_CN','中国福建福州','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxicTGEc2G4HFEeKRs3slMSMZVPdDLpbO7Be8vib8ZlWd7qjQzeDnDtsMroU6LwZP1Lkfvdm6wicWrE9LSsmkCoJ5B/132',1500302021,''),
(235,'oNqUrwRYPujzot--7yCrORY32Hdg','娴娴小仙女',2,'zh_CN','冰岛','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxb9W9ZZU4eBSzNctYvDGb2LlCuSL9CiawmicNFXXczDFibcT8wYBFXnc6WNiaEib1Ro5ocapmUsYTOS8QqeOeALK1wF/132',1505049530,''),
(236,'oNqUrwZCKgi_aXEE8bSdNQtoYQi4','赵虎',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/fK3fRRPicgAwhsjKh5OYfugkiamhfMAWxpxwYWStSKQ6HXRraksmO62tibkibhduKkwlEgTlXJaLsiaWrWnqh3s6uDYxT74c8hhGC/132',1499326408,''),
(237,'oNqUrwbe-kVZUIJT301snT3B6nAU','A-先森',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/o8HBbXd72BYphERZHzicjqPx0Iria9voIcKmqlFYwQN67uQpASvNrUrgchwrWSTNZ5jiauKY3y6IJouCBIYNKQy25gXrMS5Nfib7/132',1499241417,''),
(238,'oNqUrwcbq78entw68dhW_zpbQYEw','萤火虫',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/Q3auHgzwzM7zntUMYYwb0Co8Aj6sXFVq5lUviae01qOoNhK9AkQt8uUgj2w2dzREnacOoIqIIx4LFSialtChBTcdQM3sgTiaCC9cNUWTZBTu3s/132',1500342462,''),
(239,'oNqUrwXa5vWPaRk_hob-6k7yCj7A','大  鱼',1,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/fK3fRRPicgAyGwQckfyoN1ia5tvhSvnpZCJp8B2QKq08UcsTKzJWBEF4QQXqnIvUdTYh9lFiazyOf92BibibIicntI12Yq0m390Xls/132',1504000576,''),
(240,'oNqUrwbzBXbYu3McJ1R7dD8Yg3js','错误代码',0,'zh_CN','','http://wx.qlogo.cn/mmopen/gVTCS8NQC2iatzrWc5J6ZsAgtrdBUkIJicfyS0CFtrOSOGqr1Xhq3pmdRa7HpseQHicZVThBEia2qVWgB7uZyYwcmeI4oZjMjXGN/132',1499505517,''),
(241,'oNqUrwVtCnwOLqxHJJkhPqnrtAYs','认真执着',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/rK1nsTlCD8EgGxpwAur6oINRckb27UHibqXBhttR2mFIRK2RAooiaZ7XRLSaYu7FNwdeGDQ5iaIcr7DtAe3tMtfwweRrCm7Gbtf/132',1505190824,''),
(242,'oNqUrwbIYTqxCqLPSVjExYWgX7TI','月光宝宝',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMYRdsLoBa8CQV1icMKSvehtW6bbQvqOgibicDwEQ7TI3w9N1njy2UmaVbAFSOn78dZbdT3oqoISsNKOK3u6RoJKtXX/132',1499490853,''),
(243,'oNqUrwdfI4ccA0yMk7Sn4WIZj3A4','顺其自然',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxD3KRclS6aW6Zib1YxVZEcVaDo8W9MgOx8t4HouwicUhHpXDiaKS3sw06Tv9iccFdiazYl350mLjAibXb5RtiaJh1aGyo/132',1501205644,''),
(244,'oNqUrwZBybZfx-_n98pWbrOiwU9U','落日栏杆流水',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxicTGEc2G4HFMzM147V4hx1HvZiaSWe4PwooOHWd3PL14EzYbXuPbhFt8Qm5u368KVMGrRWK1ejsOQTeZBwW0B74/132',1499480311,''),
(245,'oNqUrwcasr6z1HGbFdJaseL0Ha2E','谁与争锋gggfs',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/o8HBbXd72BZtCZTUbCu7ths6EM0ZItUKMUzjLyRKBIPQXm82dJ9RsQuRMiaN6qEC8YR3RomZJ1iaNA5VIwUicGpgbb20FbhVA2ic/132',1499143423,''),
(246,'oNqUrwfkLUtAd59k-TFbAtb0kTko','晨曦微浠',0,'zh_CN','','http://wx.qlogo.cn/mmopen/yehycmDVLMYTA4GCHzd8LgicsyXwvwmDAp5vYiafd29lglwt4EoTtrNvoWzJK1jdAJUqkDIJSc3nK4H2g0ibcbXwecQxJvT6njM/132',1505227809,''),
(247,'oNqUrwQUth2Zua0f03dRTWlTbW0E','LCG',1,'zh_CN','朝鲜','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxicTGEc2G4HFJtPGPHnkJMnR2ia4azy30kUQfMGZMMQITcicfFrGVOzpE2LibJ4galDDBCrJCxlDVJLqqr0NsJ28S5/132',1501120130,''),
(248,'oNqUrwUa_ObgW55MGlnusm3JXcCY','王达',1,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/o8HBbXd72BbJKgNpLojOiap9kjyAL6HibHTtt1H6Z1rMawJYsvf3TgCic1LFw7ib1XbSYAh08g2ATib67aWpPuNCvXMpF8cqrPrTb/132',1504092565,''),
(249,'oNqUrwfPrRzyoyqR3mKRGfq6v634','立场青妹 ',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/ajNVdqHZLLCEhCRKhqhBMUgKRm2wtZhoiaKdx4PN0ns7TWb4AFhdZarASeYV2FWv921u0GNpMVBsdODjT3rqrauicTaGbldgLYeDGexhzgvYg/132',1502274150,''),
(250,'oNqUrwZmy-ru6uY_SyO4dm6Ib13I','锦囊 远方',2,'zh_CN','中国四川','http://wx.qlogo.cn/mmopen/o8HBbXd72BbPVzgZakF1tklanVsOXdehh5RDVnZicrXSBQ16hexXJLNJMReoZpoAkpTEsYylR6NIoQH6jFFcVic6qAG9bXQyrib/132',1505009152,''),
(251,'oNqUrwR_aKFfFAEggtdHVk99_PFc','红太阳@_@琴',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/fK3fRRPicgAyFx2aTnuNq8hVRbtFBvJZgfNAWL7wibSonuicRib2MOewYBxEicIQiaia8IN8tia6KiaBqYQib4ejnhpuaZX8BGZibnicOW5X/132',1500300363,''),
(252,'oNqUrwTvzXY_q4SsRilf83hFPaLY','江涛',1,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/fK3fRRPicgAwEM5BpY5E2VERJOfGKHLBcW50xNylu4ib36nQZuyAfu8tA79h38vJQ4KD7AHjSRaVrtztkt5fFedB9vJmXHOGkv/132',1500702261,''),
(253,'oNqUrwTjkSRGLRmeF_dXC4fMOVzw','罗岚青。',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMZ4vnSBkgd3ia3Hh6tuyDrO43sSksv1aMMhlVia4Al61PLodYrr47BstLbVcMiaydbdGBusnY3wYqiaD1xXjFnvBCar/132',1504794076,''),
(254,'oNqUrweLCMyi_NiS6eXmYPjyZIp0','李姑凉',2,'zh_CN','英国苏格兰爱丁堡','http://wx.qlogo.cn/mmopen/yehycmDVLMYTA4GCHzd8LiaKDz97Rwb3b8Jgzc2iaU2ZDy2pWyaFqUfm9DzNc6OMdPLPoO0VVBqvHTh1uFIQYdOBmdJwaKLclQ/132',1502771261,''),
(255,'oNqUrwY5Fl4nPdAN5CnbENIg_Bnk','guoming',1,'zh_CN','中国江苏南京','http://wx.qlogo.cn/mmopen/yehycmDVLMbtYHdibicxNsAYQLgJLRZ9VnLSeq1T5skyoR0EZbvOtM3ee0nmR8Z0MWMwbu0EUH2b4x7C5IZqW2LibTAjWYNbBke/132',1499260208,''),
(256,'oNqUrwUbWlluY-K4k6sLjGzALVbE','怀瑾握瑜兮',2,'zh_CN','中国湖北武汉','http://wx.qlogo.cn/mmopen/rK1nsTlCD8EcWhZsnbFpS46h7UiaPuibkJlp3LkhsKWppr1DeUO4yYbA3TSccLbkAkHqBYEia5a9TtYZbbcS1MHMKJicMRNMERBR/132',1505134510,''),
(257,'oNqUrwTsGwaegCFPIVn0F6ai-y24','。',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/fK3fRRPicgAwmfd8Et9jiaMnZC0ib23sHa3zwPaugXaCTRvTjqh4Ej3rpVDex03pyOicw4xujxZiaZbbVmzcgMqTYN8AD0pE2defN/132',1499252348,''),
(258,'oNqUrwYgJbi_b2dYo1kPyoLvvoP8','Sparta',1,'zh_CN','冰岛','http://wx.qlogo.cn/mmopen/o8HBbXd72BZYicRjduObdVSiaEgia8yrRQJvBjG1XxTm1soMOexSjpjpBmfwq65z97rLp0FKbZaYSxX3QAykfHav9icMeJ8Y2JlQ/132',1507190034,''),
(259,'oNqUrwfCcMYQlz0xkzHM5y4wFyv0','超越自我',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMbv2fmofUmFQDGAn2IVWzbQ4OkvrmBJJCdzVD7fYKW8E3HsKl5s63elxZ46K3UROgicys1vvMZhW0QT0gIQ2eyv8/132',1499313622,''),
(260,'oNqUrwTP1kulbTSd89oEKrYaUttk','陌上花开',2,'zh_CN','爱尔兰凯里','http://wx.qlogo.cn/mmopen/fK3fRRPicgAweQLBUT8bzs7VS0LPCGL37MhL26cLC8rhlRDU5WClusY4eQicmKwIK3lfsBkAIskGVLzGaAUguAreWX4Sib83GCs/132',1499507451,''),
(261,'oNqUrway0Po8VZLk_vYedNUnejaM','尼古拉斯·青',2,'zh_CN','中国四川','http://wx.qlogo.cn/mmopen/fK3fRRPicgAwUFBUJb3LB1c1pbWAsuicMyZFkia3HWhvLQOtzLGkQqYK9qDZicLM4WfibOBx3gNnYablvy2vWYibmTjgy5n6XNJNOG/132',1505130524,''),
(262,'oNqUrwQhZc1MTjz5ZqH0_TaKdrqU','81士兵[强]',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/fK3fRRPicgAwTyJdCOPrg94VX4W0FAAQYRDQbiapkibKrwDqicNpVjACDllf0tf8y0DFjfnLFWVWSS1eEoqChATIoPAgOuvkpnSV/132',1499394917,''),
(263,'oNqUrwS2vwntpBmLvlO_s3g3HgWk','初心不二®何松泽₂₀₁₈',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/fK3fRRPicgAzmw3LOibUc3GrHkFHeyuoMxe4q33qFvbuM1Cr41dicBwOTdB6d4XVOggEs3gg6b2bK8xn5BBJ4F3ibT6n0Dd7qEu9/132',1510039641,''),
(264,'oNqUrwc3zaA9louReBXZbV3lirmg','大空毅',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/o8HBbXd72BbPVzgZakF1tgYux6ID8FH6ZfrO9dE6YrtAoqHFUvbVvicdwvG6Jc84rHcBFXd1rppibCo86mmVkcUEjwUbUxwkSM/132',1500301295,''),
(265,'oNqUrwWxUOPUiuvAivMU9ZQIYMio','我一直都在',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMbmLpS6VcZ0bOWFXkuKeOkvHnnBGCB2pTRklnfu5qhOdMEAvL34JXnDNA6esFZviavChV8UnPWRV9YiaAIDvYTxEE/132',1499411767,''),
(266,'oNqUrwfUKseUcDxJLqEIqjKiDSkY','熊童子',2,'zh_CN','澳大利亚维多利亚吉朗','http://wx.qlogo.cn/mmopen/rK1nsTlCD8FonJ9ebgib67CKnkErjVpwPcqiaQdZFOlTpqy8SEDc5PR5k1t1DsVpAwx8PV1HHWd4icxV4bRk6czrNJIbWicYRjRQ/132',1499299588,''),
(267,'oNqUrweqSrvB3sZfYaoEEVQABorM','迷失',2,'zh_CN','新加坡','http://wx.qlogo.cn/mmopen/fK3fRRPicgAzibIRX76bbh5WevnJnqH6EF5sO4TYGibL3qE0XtUd4XsThicbTcf6sy4kDmib8gmQb7s6Seykos3miaRyNfr5kxG0n9/132',1499330792,''),
(268,'oNqUrwcNOQkwDgTcVy772njZXrUM','上帝说名字一定要很长',1,'zh_CN','保加利亚','http://wx.qlogo.cn/mmopen/rK1nsTlCD8FonJ9ebgib67NMkkXiaJt4KjWeP5lN0KMflenEFMLp7lPUOdIMcVScyKxkedibf5xYiaTGicylGTBibP4pAlCwLwRiaPb/132',1500045007,''),
(269,'oNqUrwTRvpUyUA-Qic6neU1KNKiE','rascal',1,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxicTGEc2G4HFIZfkGfNqKl7PEd25klVKSUKTf5dHg9NY89xyahdSicGKXejDobjO5b1otOOEXy9VmicUO5eR0bE9k/132',1505024333,''),
(270,'oNqUrwSlNPb3CoCkeKxPxMuwZyAs','一杯敬故乡 一杯敬远方',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/fK3fRRPicgAy5RpQhtoBnzNedcQYMyQia1ibk6DxKEFOHibreMEaBLyJ9IicBVpIZKSO9ibzGDzPwa6bnNUgIZ8VdA4Fb5Dtsia9S1Y/132',1500302625,''),
(271,'oNqUrwVAhRZA4Xleul4COuqgPr2k','枫',1,'zh_CN','中国重庆','http://wx.qlogo.cn/mmopen/o8HBbXd72BY1WbSgia02N1xc5rWn7cc0Ety0ZcfMvsEHPT2KWPj6PvjJAZRQXDXzO6WlEZDTqnFjEefIvYRfap5ctAdsns1zh/132',1499327957,''),
(272,'oNqUrwZsqy-db3VfGIA1Fr-lv2rQ','红果果',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMYTA4GCHzd8Lm7b91mN6mYtlWIdRX3UaLKBaMNvib6n4RegC0vLU8VHOT0iaG6tUL5iax3YtBibsouQ0fnq6MU0RtK4/132',1499243526,''),
(273,'oNqUrwQzgRuuU3fk9lLB0P0fWJJk','Dinergate',1,'zh_CN','','http://wx.qlogo.cn/mmopen/iaASibPu1NBDkibx8BMgtiaU685uHFk6uo9KSHiaBiahqbiaLUEia9YibDZna0sOzCoxx0CYFUuMibESpzZJsHnc30266sNJKpbTFr7c1ib/132',1504938983,''),
(274,'oNqUrwTe46Wkprihh9gKePFX0Akw','可爱的雯雯呢',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMa2kSgR4mOPeVlLbdEfJW4Ve3OzkBkbdNw79AGcuYlysKvByL5TQib0Yh2EPP5VZXfEAAibZcBVmQCY1eKpyFOSHf/132',1499425672,''),
(275,'oNqUrwQDCyo3lLCgzo_ex_bonN60','。',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/o8HBbXd72BZX7qmS5icQJTXVO7UJGKicbpUZEoh34yJ0s2IvvjMK6Y3H53icF8aWmgakFsOO0yA2r7LjFibfmJogTeYKymhvQbSW/132',1499668453,''),
(276,'oNqUrwXeeZPa-MRJV0AlnKSgW3wU','smile',1,'zh_CN','中国河北邯郸','http://wx.qlogo.cn/mmopen/yehycmDVLMYTA4GCHzd8Lia08nKav1n45f1Y4ugibTkHUNfCMfdJNAQYpuXZKR58iczXia9opBKxjteRzZZiaFfsls5TAqf2C2w59/132',1499161403,''),
(277,'oNqUrwc-XuKcNLfMY01txH2Zf3lw','欢迎刊登各类广告，教育和医学论文',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/DVr2Ut8Om2I4Oqkib3JazZlHlGVoNAEMMwFsNM88oiaaHaXmkEYGPfvjJ6sn7IzTteV1c4hNlLX0jbBCQPxw18QmsjuYyGvczv/132',1499324772,''),
(278,'oNqUrwTp9Y3VeiaVjrWEt1TcReGw','你好洋气',1,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxicTGEc2G4HFAgQDTZZXeXyp22MDHdHM9j8jaBqNGc2lawEQfu1rSib1ORe2IIR2mD8oj5YkfDLjiajThnEfBcrNv/132',1501631373,''),
(279,'oNqUrwbwCJjqt1VfMBNcASR-QxBU','黄娱洋',1,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/yehycmDVLMYTA4GCHzd8LvlJoQ2Tyiacv090F29KxiaOZkEkB2Gx9K16J0UwiagmjzVjtibtoR7jicJ3JXtEhL7PjajsCBuLmXIj3/132',1500300258,''),
(280,'oNqUrwdiSx-nXvsYyU1MqOSV_Qao','听见阳光',1,'zh_CN','中国四川','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxhKaISbUe9fULnF7ibgUG0oK8l6picPiaINEJtGOMGLpblbXXO7vgdzwOeiawlWiaXkxuSqficGgKqTVNicbXMGrh0Ptt/132',1499162904,''),
(281,'oNqUrwd04iw32VLtlHOTRLbygzK4','Jun yi  Hou',1,'zh_CN','中国四川达州','http://wx.qlogo.cn/mmopen/yehycmDVLMZ3licF9EwfsLMiaVGM0Vo0kqrwjsDw6JIINUVRHSvEUJsITd3YGDYv5y8MnBzZQssKV3icQc9aUXWwhgLTFicOnPot/132',1499263194,''),
(282,'oNqUrwY0aTNuNGx1lG_I5NU-Q8pc','沈大爷',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMYTA4GCHzd8LgdeDB1R5FGFeRqrYwMRbbY5I7lAHqq167Rsib3lmXUWNUfLrv8l2HtbP7VCvE3L1yfIg5VqLyowc/132',1499504105,''),
(283,'oNqUrwRZiLFa--loUexNWE2UcJk4','One Tenth健身私教运动馆',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/rK1nsTlCD8FonJ9ebgib67CIsE1apTKbE2Yhuk64weGF8AZCpfNBLoKZicoantMpWf4LJfmZYxhvgCYTArdYIajgBcEwV2k6ZD/132',1501229237,''),
(284,'oNqUrwUo7e0ePEad2BG1r6ykPO5U','春儿',2,'zh_CN','中国重庆永川','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxicTGEc2G4HFBG2OyD2Nb1ATk8VsZy3iaC0T1sVU6TwzlNQawe5FaaPLZ0SNnQibFicOPxvYXlRpOFTUlI0Vgol9ial/132',1499315546,''),
(285,'oNqUrwTvfQ6gk-XQMWsiXm0uh7gY',' 藽亲 宝贝',2,'zh_CN','中国四川达州','http://wx.qlogo.cn/mmopen/Q3auHgzwzM7usS7aiclDbG3EPDLztMpZbFEKQuK5FiajQrQC9LV5B65ty659a3YOHM1EVRAk5HgOdhJUQjcKBibmmNgpRlPdM0bwZSBic2C2R9E/132',1499327750,''),
(286,'oNqUrwRc6HC-yjm3JOF7LdXZDTls','平兄',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMZzRibVQB3icicictubJzX62OX3see2AsoP1LkB8wKQia0ibSicfdJf2zgHYW2LqxicTyMgSr5DNFF7uBnWHoyKqib9maMZZ/132',1499267439,''),
(287,'oNqUrwYyzkGk35_775yTb9offuQs','弓长月月鸟',1,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/yehycmDVLMYTA4GCHzd8LorPLL7G2IL67YQww2SPfYYssZTojaXVbBDsLBK7bO655Kcr2Yt9T9MZU3cNMBTN7zgg31NxMDB5/132',1499315624,''),
(288,'oNqUrwY_d3xhviMEKnPSP6SrZks0','自摸关三家',2,'zh_CN','智利','http://wx.qlogo.cn/mmopen/fK3fRRPicgAwAWm4sshoE5Iv4qdQ7sAjx4SNmWxMP1pznhmUnibOfzV2SqVysvqHkq59Rnyib6oiaron2HcPicDghx5he7JC56kNF/132',1499736377,''),
(289,'oNqUrwRRbFd9p08HceGDAdtkMv5s','冰羊',2,'zh_CN','中国新疆乌鲁木齐','http://wx.qlogo.cn/mmopen/yehycmDVLMYTA4GCHzd8LpJXrZ3BMxyvbwibia7RDUorYwdE8qPzicMMFiaNtVp2siahia14kULic4YdfwexU2PGVNAvlOrFxic2JlJ5/132',1499489790,''),
(290,'oNqUrwd9DLiamfe_eww0uTPqGrqk','美滋滋',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/o8HBbXd72BZYicRjduObdVS9xmlibWJhSRTywMSCQUJgMe3ObThz3UCLlIzXJrviaUibWut9mYga5D8IxR2kKwl34PrswIjLB8bZ/132',1504869899,''),
(291,'oNqUrwdcjVqNU3DiJxOtnSWxA8_0','曹海军',1,'zh_CN','中国福建厦门','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxicTGEc2G4HFDydwQtsU9LUVW4gZPBRsvibUOA9BRrdgmAPWbGCCALIG6Sa8icdzqbx5A1DsSqK6nzhXV1zCOMehZ/132',1500353093,''),
(292,'oNqUrwcLMaU_DJv2nkYPGQkFxVF8','A Young man',1,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/o8HBbXd72Bbiab98ejr1C6y9sU2QzSPQV2ko03ypPW7rkAawsddMaGNlGEFp6bMhu6OZrqibFoMjBntsVnibRvNCIxV9u2RphD0/132',1499499199,''),
(293,'oNqUrwfbT942cNjFx8LEylTsybZQ','《军魂》杨萧15308300993',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/rK1nsTlCD8FonJ9ebgib67BAksF8DVxLtsAXmVx3tnpiaaKIy0aVtASADDuf3OFqShwEicLxMJXywibz8icy1zpl2G7AmunOB9dww/132',1500300575,''),
(295,'oNqUrwZPnMsD-IYfI1KCpr8Ph4aY','董懂',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMZj0t8WC0ypZuK2ibX9QB41zJUtiawfORAJ5kQqGwOEic885XQ35raQJhg7lDfqQTKOOZiaphiaG6TgpDu1DFb6eiagOX/132',1504888398,''),
(296,'oNqUrwb1WmZU4GWAoaYbgqa_n31k','刘幺',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/o8HBbXd72BYgVm32q4yszaj5byy3xbrFsiclicH2wCHJBdJ0jic7gojnhpQ3jZls69XEPKBIT29ZqzP6ObHkOQhxbAka9hI3licp/132',1499668699,''),
(297,'oNqUrwTIL-1uQqhiaDHlt3HwfFSs','智中电脑',1,'zh_CN','中国四川广元','http://wx.qlogo.cn/mmopen/Q3auHgzwzM6r0yZ4O3vMSp6iaHaK3xIb9sjwkukuSUP4hoEyIr6uh9He0NlDsuIktiaume68lDKOYVAjBlUdW7M5bRScialIMWkcsogOYkkCoM/132',1499242278,''),
(298,'oNqUrwfcJ0VD8OMGZ-PBMe71LGK0','雨穆知音',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMYTA4GCHzd8Lial3UV5CRtTngVEUWJFbmEFUR3aEtvjtlibqCicv1tkuDKRZnnGoMWs6PXzsxDydIYuMibAJEZudW8P/132',1499505800,''),
(299,'oNqUrwesb9M2crf0zBc_5u3qd51k','杨绍琛',0,'zh_CN','','http://wx.qlogo.cn/mmopen/rK1nsTlCD8FonJ9ebgib67EExw8Ic1FLicmJu8lz4E65bmmTVJ72MgoaZP1kW2ichtftEvE4lfYExtO5zb0BWicgbVDuCWrKfEKT/132',1510158087,''),
(300,'oNqUrwXqHe4b_MAcOScFAAraVqbA','鑫航谱',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMb87h5PIwoOTTqXvRXiatzKNicDxqtHmo2pqyRicZlUIMgqxRue4gwibeazbXfqe8xGYZEPDzsAXygaQLzYr4ODnnnj/132',1499505573,''),
(301,'oNqUrwbs2Xap55eTMM_1yYvMpX0I','JiaYuu',2,'zh_CN','丹麦','http://wx.qlogo.cn/mmopen/8QhicY02UriaTuBgtx1kSwmjRbxjaFXLcwd1t85xSSTCUVtQwuz9WJicx6sC6Ye2uOicLiaWjcC8agLOSmaj15yoY6SJOGpPIFy2o/132',1504833354,''),
(302,'oNqUrwYV5XsDoV7AMax7VcYEDnZg','蓝。',1,'zh_CN','中国江苏苏州','http://wx.qlogo.cn/mmopen/o8HBbXd72BZYicRjduObdVS3N4NHrDKBCBcHiaycAptmpRnJmhxfCAZkg96kxegQSIXwllGrSRln2SWF5CnlIiauo1mpkOY9ehB/132',1499310505,''),
(303,'oNqUrwS4JojQ7XxXmJCWDSw782YI','自然',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/fK3fRRPicgAyFx2aTnuNq8r1ib1L3ic28zqp5R5dn1ga3A0Urh39neLNcic5jOon2OKT7Jq1icZLtQWBlCkWb3VvhuN3O6eh4LFQe/132',1499479010,''),
(304,'oNqUrwSl5HDXpFwT-TYO6R-jhRdw','沉默......',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMYTA4GCHzd8LmQV3DqD2bKwXZAvK5GcJC7eUzL6dpfghNm0PnqbW07T7IxgKUT0gia9spEtxZIJIpm8L5gLB6WoR/132',1499309027,''),
(305,'oNqUrwT8XgsshShwLXv4OgZsumbc','长不大的小孩',0,'zh_CN','','http://wx.qlogo.cn/mmopen/JDYlPHvriavvMJlZ07MsBAjzZibaFMXzZkQEGpgAKjXQRtUSRvJJicd2pfeDFiaVvCQt9ibWkbNiaIY4uGtWznsicjribgCViaPDeiarHl/132',1506615329,''),
(306,'oNqUrweS3KPe7eKMfAxZBbf1_Shw','明威的海',1,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/rK1nsTlCD8FonJ9ebgib67FFicsvKTVYgOGKIpjjw5A8EelTabcAxBSglMUqAgnfl8tu08S3gOc3OwbxxcFNmkSnASHzV5tYgI/132',1501510841,''),
(307,'oNqUrwXrW0mDyce9WxnPUg_ElDPw','',2,'zh_CN','安提瓜岛和巴布达','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxicTGEc2G4HFML4v8ZYyJWQf7Etz8Ucb65r6KlSqqnwNTdwuOlNXZoib1trnMjuU6uwX54OYYjOWEO3DFRv6OpnV/132',1500300847,''),
(308,'oNqUrwaxz1mybTSnR0-ec6de8GWk','Q先森',1,'zh_CN','安道尔','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxicTGEc2G4HFCUxORqtPoytS5ujia4L50licWPJAcKyNtx2B8cuNuB9H4jlnp7sndOfDjXTuxp150nwfU2Eib7K28U/132',1499481051,''),
(309,'oNqUrwQ82eJsu70SdEGv4OHHtFSU','张维',1,'zh_CN','安道尔','http://wx.qlogo.cn/mmopen/o8HBbXd72BY0rKIWdLhezRp4pkoibwg0HXTxpSgWASAF239lFSJUSE7sgnU5D4GlIh20P2aHibLzOqlcodU9TY0o8U2v0t1Yh4/132',1499669420,''),
(310,'oNqUrwQNE6bVETa4XpLtkAop8UyQ','时光',1,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/rEdpWR6icOmGVSO1AAFaYTaRJOSBwRlaUmHwkndzFicvRcBOaYblpSpRLSbwib2ItvGAf1EmQwr0WaskjAVbRK0CHlUOkPlpvBj/132',1504882449,''),
(311,'oNqUrwT4zM9fPUpBQb1OMz_Y43_Y','特血军人',1,'zh_CN','安哥拉马兰热','http://wx.qlogo.cn/mmopen/yehycmDVLMauicXIjibFWDxprw24ggBB3aCxc6a2A6TdvVSjsPHrqxHCR5CkicdNZZaEjeS8RlQV0uNlBXDYLnh64zq1nVsZKdQ/132',1500362520,''),
(312,'oNqUrwWUxyw4FqdD4gmu7D33ICrw','米笨笨',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMYTA4GCHzd8Lra7UkSS8nQvfgBAOvl2YIaQ0CEsuHdmiaba5pAlYdHz3toYCibpVFl2cwlr9uQRJCJVLMHDic4liaq0/132',1499227758,''),
(313,'oNqUrwXVVncrXEOVYnA7Xx0MFpII','浪子回头金不换',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxicTGEc2G4HFDkJAy1U58Qr1fqpCP7gQ7hDianc8HECDKSwHs9nXt13pa1M4ot53EGAG0gRicg1s3tQEiawHtUa2MU/132',1499238228,''),
(314,'oNqUrwZ6vJCWOackJvUAJh_RueUQ','谨.怡',2,'zh_CN','中国四川南充','http://wx.qlogo.cn/mmopen/iaASibPu1NBDkibx8BMgtiaU60EFvia7HXMIQ2Yz9zMdAPiap2xdMyBgyicVQiaI3Zpbae9prj6dtNibMypHMbOyNn3bibSxyRXcXGChf9/132',1499397922,''),
(315,'oNqUrwS5OjFKl0uKKZxgAiPivlBY','何炬龙',1,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxepicxh1OibOno7LmDrrnpz7z6xCk4NKxzk2flXQUyYnE2Aoa2KkMlezoKDGwDU2HsgcEs7ibeaSKInCCpZyew1A4/132',1500301794,''),
(316,'oNqUrwZpbjoq9OQd9I--IZosYyl0','め迁',1,'zh_CN','中国福建泉州','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxicTGEc2G4HFCF7980nw4JPwP1Od7rPhm4mic3eOvVbibl644cl73yhqL6BAicAhmgUUQpmdiaEjw9ErcMWzeFBaU3E/132',1499293056,''),
(317,'oNqUrwariK2FmeatnXcMYIFIg_pQ','岭梧',1,'zh_CN','中国浙江杭州','http://wx.qlogo.cn/mmopen/yehycmDVLMbyAJibELjpH2XoSGhccdEW8ic0HopFSgXU2ZYp9ImGhceQGaXEtgBBic1zYtduHLH0sFR1mbL9ib7dfVic2SfAyQwe4/132',1502439694,''),
(318,'oNqUrwdITrU3KjZsJFTuFGxsuNG4','张鑫',2,'zh_CN','中国四川巴中','http://wx.qlogo.cn/mmopen/o8HBbXd72BbicB2pQcSv0S3tdPrvwIJialvHpkH0pE1p67cNs4TwSZstpgLsI8fkibDk6gqmIRWdt3G8UmL3Liarwrr0TcJR9Rbia/132',1499669693,''),
(319,'oNqUrwWacdX1qp81BzZCz7Vl-c2g','@宗×',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMbCBKap2rXlDKib08LsjF456sPyRqoicyHCAViclAv8uvn0wXEd4ZGrm2hLAvJm9dnavangBkAlZ2WOFeCJdia6nRYr/132',1495543458,''),
(320,'oNqUrwTBPQ9UKi3SOXub1fZLctMM','火星人老乡',0,'zh_CN','','http://wx.qlogo.cn/mmopen/BjOxXeUnTJko3qf4sGfKB3dFXEzcnMUnibyPnUw3aWIDIqNVvup565XNh2GBwibSjn30EIm7o9slOQ0m6LQ5h15Zmfhud47Op6/132',1499668109,''),
(321,'oNqUrwVmSMCCAdLQC5ZqKFZXikS0','兴农会～杨义',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMYTA4GCHzd8LuzAEYPrMViaLtfT8u8PtTXfDrJKUmiaRYzzFcxLT7alnFibdezNuuWG2u5KVsvian7y7ZAIv4SaqZMA/132',1499161477,''),
(322,'oNqUrwWKUWximJo_dGGVGfwBx4vs','AA雪橙魏ེ超@',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/4I3LdGAOkJFFv3CqQuq2McOThFrMC5gtCu5yy8yJMeH8ULPs9jRumok8HWTJ9kzMM2syafcZV49NLgOOw7GfRcLLvNU4IxGia/132',1499308207,''),
(323,'oNqUrwZK3FRwowRjqyan-40rhq7o','《Try Everything》',1,'zh_CN','冰岛','http://wx.qlogo.cn/mmopen/rK1nsTlCD8FonJ9ebgib67OjDdEoKT03IBUlklfBJWFjvnIiaxOIMObicw5icpRLGlGz3PibPchF54PMjALia2btV84opMw9lVPSMj/132',1499311443,''),
(324,'oNqUrwe8Zeyo6BrkiVK6KNZZwzKE','Xiao黎',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/o8HBbXd72BZYicRjduObdVXB3LTWSksjNcNiao5yvyAF8aepEOhQ2eDnu5jACQRqFFt6ibqappN8f5cTZ9nAr4r5ic9V7dH97nR9/132',1499227284,''),
(325,'oNqUrwS2nKobGrxx7jXQRjPio_nQ','燕子',1,'zh_CN','阿拉伯联合酋长国阿布扎比','http://wx.qlogo.cn/mmopen/yehycmDVLMYTA4GCHzd8LuBgjT6ZakcmWeE5bs8Cnb8skTiaaibTtsVpibARfVEpFKHZYTyGdqicTK0WZJkO5UBvCtdYaPgmLqdb/132',1501389426,''),
(326,'oNqUrwQNh92asPVh-0llfis7i6WI','牛牛',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMaQs2szfRmZWfibH1qyOkYH2YLxWt7LeWWnH19mrVB3B07ZzTuuNhSJO9wjIFz7FfO7v9F8vqia2kibFe7RVOy97rC/132',1502065483,''),
(327,'oNqUrwT4digN2I5YPwK9Zb0b0Hq0','超级扎儿根',1,'zh_CN','中国四川宜宾','http://wx.qlogo.cn/mmopen/yehycmDVLMZJ673d0N3NEGiaL3EX6qKczhQTeKwFclDX5EIicQWIKtkBJR2srxCdgJ04fvCFjxwmy8JTJVgdjw1DMYOXXAVGPF/132',1505995274,''),
(328,'oNqUrwTgOYMMyP_fAyfzky3HQDmU','菟丝花的悲哀。',2,'zh_CN','中国四川巴中','http://wx.qlogo.cn/mmopen/rK1nsTlCD8FonJ9ebgib67EXITJ5Ba0fOmqyibcpodkSuyic8ldgZSciakK4leRTS2I0jVryo1YiagXrTota5xLjyzvY4AQAFRJIA/132',1500300655,''),
(329,'oNqUrwX0d_6Xr4wLGi46qexSZ19w','成都',0,'zh_CN','中国北京通州','http://wx.qlogo.cn/mmopen/yehycmDVLMZvweqTuvGG1uuAw9j8KECUH6aJTVjtADbcIxlyiciaslJicZCLlr2icNgibh21DzIcoU8alhPIrrru3ZlibeEicGIPz7X/132',1499309124,''),
(330,'oNqUrwaFHCmxQpGRJbqODXQpCJ3c','周波',1,'zh_CN','中国','http://wx.qlogo.cn/mmopen/fK3fRRPicgAwluAibiaaBJYOZurKGnmsRFV48QNYicg9m5LmOibADGJ7lPQLI5XdYB4o4nibacPGd849DEeULI3Ak9aWicHiapD0SBKB/132',1499429028,''),
(331,'oNqUrwWb0mwr6_bC7HJ8pAz3ssB0','罗盛奇',1,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxicTGEc2G4HFJ83PTF5d4OxggEo2ibh60ImubqkxzxdQybCjib4AfDjT0Dovmmsxn1aydIFOCIOnQWSUJAIGVZxgQ/132',1499238537,''),
(332,'oNqUrwdqmfzAqDRg6cqjav8dy0Ec','陈妍锡',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/o8HBbXd72BZfuNFV4lGfG9FU6PQHicKQS67BF1HZ2anAia0f95ougN4zepDJA8Aj4yIRYfY7R5bXCSkDicJOWLDNd5sdGPz2VF2/132',1499239886,''),
(333,'oNqUrwTl6edtu5pAeVpPPW_mc8nY','慧质兰心',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/o5jEPPiaJzIOXO6hrdbg56jQOiaH1hoic7pllQhngsQyHPesxNzGSjhphFIb98yGAZtqicLUVDls9Vdaib5zohbpOEricRtq8L0ibrQ/132',1499267422,''),
(334,'oNqUrwTcl5DePaMC5Nbb04WsYuJs','票务旅游(召代理)',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/fK3fRRPicgAz5WvtyUygmhDG7O00QtKxrnKZ1tU3LIEqH5EmdGo5mdkYyegH76ZDNucfGiatlbVuqm2PVfhUORF9obOaAQGXRR/132',1499228279,''),
(335,'oNqUrwQ56ciCI7-Ce2zRGJsS4Aeg','听雨',2,'zh_CN','','http://wx.qlogo.cn/mmopen/yehycmDVLMYTA4GCHzd8LsFTKSgLBWFZKcOCdUm0gdHvrfOO2KjH4iaXZLf0ASIrkOIjj6KibhItMgEvnOqDZxbLx2FkytmiaHS/132',1505307948,''),
(336,'oNqUrwc90Jzuw4sGtKK6SO4mLShI','晨曦的鑫光',1,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/yehycmDVLMYTA4GCHzd8LiaSDnic5suibrWiczZzXs52mO9rQjJO5toroN33TStrnJaoZHH36oTeZrH1I4eHQZ2ndTamDhYwiagck/132',1499315493,''),
(337,'oNqUrwbQu0rOrfxMDC7iKO1H3jzg','走走停停',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/fK3fRRPicgAyFMaFpU1KVW3gVuhBkxklkZVMNWXvkUwllavayydLiapTaXmutDcuv1rheyccfykzfwcG1CKXJf8ItGX2eyia97d/132',1499314931,''),
(338,'oNqUrwUfjcV0bJptbb-Uz8T9oC3Y','陳凡',1,'zh_CN','中国重庆渝中','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxicTGEc2G4HFL6rz820n2GojFlHeUm5W97aUic965ZGQOkglZwNS5DxFbnTzUcORngGf3fNnicKD3vX5mVsmUe4v6/132',1499314784,''),
(339,'oNqUrwV0Q-nXT42yFRblulODu62k','王芳',0,'zh_CN','中国四川南充','http://wx.qlogo.cn/mmopen/Q3auHgzwzM6icFKicXoxO9JLjUBIFUsukFBM3sgDdgHOTyLIY5vZB8iaLDNibF4icLxzPY1Coy1CicolE0S5oQewwnQUiaHKSIOOqw3ictic9HMK53fk/132',1500115739,''),
(340,'oNqUrwUFGUeMcDOUMNHEE-dM_oxw','侯秋均',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/fK3fRRPicgAyPLTdEVCjM4nJ6kEyIFMZPLSun1IiabXf4jGCedE1BHfvgxXqQss8dl6o5OUXM5dEcaiaA98wgcibVA7ricsDJynk0/132',1499332508,''),
(341,'oNqUrwXVDIW9HVWT6uxv5iGa1Ol4','罗丹',1,'zh_CN','中国四川遂宁','http://wx.qlogo.cn/mmopen/yehycmDVLMYTA4GCHzd8LjaoQ628xR50Lcccib2G3DyjIDjXbjf0fWe7zuCp1J4A7Du5SicugAYzX4Y0DIvtVibrdXo8OtgIH9E/132',1499241218,''),
(342,'oNqUrwXULv8v5LjUqLUh1s_p7Z14','现实 生活',1,'zh_CN','中国西藏拉萨','http://wx.qlogo.cn/mmopen/o8HBbXd72BZPNRv7lMLaNybrRj0U52GdycKD5UyRDFlCHJibZrT4u6R2lIZZurlF73fWdJTbVfwEZt1SscrbBVVatzMnz4fqh/132',1505380060,''),
(343,'oNqUrwQ3NYfmXbeFU2KDWSHEBhII','A--安可绮G琴',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/rK1nsTlCD8FonJ9ebgib67NvacIv9wVt2JxfIdxHREUMiadb6Fx5AnZpYJib82icQIzSmI1jLah5TxZqbRqZgTibyxCKTBGmvSP0Z/132',1500300702,''),
(344,'oNqUrwWi4_sTIyz4yXO0Zx1m2Tmk','怎言笑',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/hXfwaP9OTryUg2hseg8ZwkUKkiaoM3KZR0M3vjLIAqxBXI7fVfXspSB5FRLMl93wVKf9C3XicTaDp1hnvR5T2qxe2FPNReiceIT/132',1505231016,''),
(345,'oNqUrwSTx-WyrumDA36VOqAMp1rU','昵称',2,'zh_CN','中国四川广元','http://wx.qlogo.cn/mmopen/krGtrTEXHtOpxt7sHjeeBwEaXGdQcqLJ4TW5b2JYWpY8RzzkaZdbXriasyO1V4qdgVZvWVdpPK1MXpMqnoWQ5icx8AQo0q5qfA/132',1499412783,''),
(346,'oNqUrwSMAVQJb_KdcjyxMkygp9F0','炼心',1,'zh_CN','卢森堡','http://wx.qlogo.cn/mmopen/yehycmDVLMbPvo28kgPHGINGwibCakEhLpmtLe0bibq6MydagAF7dAC2QdZM3xlV0deg3VyYMGPy7U9EC3U8FBSV9O6Isp0iaFQ/132',1499323087,''),
(347,'oNqUrwQEJBJlEb6TCwajm5c21_-s','归途',0,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/o8HBbXd72BZYicRjduObdVTeCiahJibmia1bHaj2Slt2qWWLTpdJUmItzyL0o4RxiaCRrVPwGqwk1bVbFAFzZO1YTaUWybL53Oz96/132',1499306582,''),
(348,'oNqUrwcMMNRnL6H-D4u3QMl4GzA4','夜深人未静',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxicTGEc2G4HFCyR8h7heo6Ua3z7AVydCMiabySJyqyfCh7icNw9ZDVzY0wrtV4iaHQCFl8CsVGYT0rqeprJiaXK0CnK/132',1500302292,''),
(349,'oNqUrwbpXRGqmy_5pZc437Mm7kZc','泡',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/rK1nsTlCD8F7OyBVPqtexdxjQAW6vicqgiaFenm0pTFlnfILLjYKULggHTGheicZsgohrTRicfS9H1CEQTjURoCu15NDmiaxF5Ixb/132',1500729913,''),
(350,'oNqUrwbEROnmZyjwxGptEJWAg-_M','阿秀',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/fK3fRRPicgAx3xYw31wqjAx756G6reSBbZe2SCcxDaX5DCfTVYFlZXY7wndaxqPaL5kO37G6kWrcalspkE9LHXpiaZzzDnuvtk/132',1499483668,''),
(351,'oNqUrweRZLgvE8bUBegPPp6d27Zk','肖辉',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/o8HBbXd72BYH6Tpqh0MoeeWOZ0jQLNZW7L1YWRz5AXCvEdrQ8l7X7Y7ic2qQTBZffBjeA9BxBmDZOr1lCEB4qicibiaYfAwLIZTc/132',1499311390,''),
(352,'oNqUrwaeaUzQuIchvE4XEjm7mlaQ','A雷迪森形象设计会.欢',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/o8HBbXd72BZMH7Yic7d7qAZvImVhd26Q7IBwAzD2lg5YChBgfoHGAiaHB8wFWWen9yMdbZw71kEQp30CibvJJJv5brCy1XmRYvl/132',1499262965,''),
(353,'oNqUrwVrG9ahIPcfheIdIokhf4bI','潇洒走一回',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxicTGEc2G4HFJnC4r2BziaRpxRxVeDtgppsyrxC9qrLIicNKOGQsPSzQtDiafibAITYicKYZudicfFW96KmribNfWWhgW6/132',1505225970,''),
(354,'oNqUrwf98M7CYlgN6X8zm42CWRRk','无为',1,'zh_CN','中国西藏拉萨','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxicTGEc2G4HFBMcjXwdqtGQZ8W5LVia9yjBRKFJ71PBLIT2ibJD7QFIYlvviajgbMtfwjHpdVjedh3sJxmAFXqmVfM/132',1499309358,''),
(355,'oNqUrwXaWe_mEwWqq7GRt6E80q60','.艺煜',0,'zh_CN','','http://wx.qlogo.cn/mmopen/fK3fRRPicgAw49MER9iaZaXOJV3ATvurEoeqYv7gyibSqRtjOzWNGCg3BsOVVTZiaCYJ2zGiap9nJbIHnD6dRIjHA7icophwZcV3ica/132',1499237708,''),
(356,'oNqUrweukVIVZPJNwYfquyxJ05iY','LliuWanQing',1,'zh_CN','中国湖北黄石','http://wx.qlogo.cn/mmopen/o8HBbXd72BbweqVbBn6KgcmtL8aQEZH40vrQwBJRMmprEibicHQB0nemK1e368KMES8PD1IaAQPKtCLWttUWLQ5hHgZm0ZS53R/132',1499412709,''),
(357,'oNqUrwZZB41dg9uOVItA3ejbdOLg','@急速金福 18227024414 王坤',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/rK1nsTlCD8FonJ9ebgib67GZxTia76BDMibmsfoN1W3M3VFTu0PN1VqvxpNxSnyOhgpq3RcicMVMM79lc06dwvtaibMHd8rNAbU6u/132',1499407104,''),
(358,'oNqUrwXFEeP1HZsrP5VgSp-fPVWE','珍惜每天',1,'zh_CN','中国福建厦门','http://wx.qlogo.cn/mmopen/Q3auHgzwzM6yic2soDOknDbtvesVRdkYPHkEVU3QUaAbmOhze3rf9gPwWiazMJj6Rhq4oNzxyjShulCandwFplrotibxXIVyjvtKoEN8sia8epE/132',1499682090,''),
(359,'oNqUrwYMbwLddvhINEe3Goy5Iz7k','风吹沙',1,'zh_CN','中国四川内江','http://wx.qlogo.cn/mmopen/fK3fRRPicgAw41jFnNWicFOzgojfzUmUaoNGq5msUUeV6TXclw7aq5EY94ITkHfJmuR5z8jZSkK5QKwmdH4X02ULk9WSk644LU/132',1499315611,''),
(360,'oNqUrwRCJYR_kEB1HuNkF2BN1YUg','海哥的龙崽子',1,'zh_CN','海地','http://wx.qlogo.cn/mmopen/yehycmDVLMaJXwdPJxmL985e9TD8a11WPT1aUWbkhLG6IYtnVZdo1YolG6BKm8YXcA6jd0MwDJH3ZzLUcB0DgBRic3z1B1B7h/132',1505130561,''),
(361,'oNqUrwWX4n55ZTaZCdY4Ngij19no','King',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/Q3auHgzwzM6LMTY02R9y9YztnP2XUuPHWdnibicdvhkAibMeB7qicX2k7qVV9icSGwFmKrHGjjWTjpGDE9GY8gOllzVHhTv3tgW0sKKgdJGr0Qu4/132',1505397333,''),
(362,'oNqUrwR2GK0RWRcuJ_zgbYktqByE','A 有幸 ',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/rK1nsTlCD8EGjhdzF9OC7B7icib9dZokNbfa4U9ic9CwBukzUZgyFSwianYVqEayLqeo3lYricQX6YkcJnBdSPQ8Zoa99brxurpJm/132',1499658538,''),
(363,'oNqUrwdhj7YlY8ChBqkwrefkhLW4','糖糖',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMZ0jHialC0sDmIzicDiaQm24YB4u3hZjHbWgMUSUl58Oypt7AGgEl1fVIt4iaTyryM6bQNlL9AHR0fDjEfJIzNYJhm2/132',1499414106,''),
(364,'oNqUrwYJTxFtsFtD4rMzV1SMcZqQ','A.廖廖',2,'zh_CN','安道尔','http://wx.qlogo.cn/mmopen/yehycmDVLMZoJib4X4FzBhoHh1C12NMo9tX1znHlwGUD9ZGSIgsqwpnpXtA0KkFkVcFycAicibhLXzQ4DYkL9sicCmYx4ueK255z/132',1499672121,''),
(365,'oNqUrwecNd5mJ8uILj5Lzcx0L9I8','经历',1,'zh_CN','中国四川宜宾','http://wx.qlogo.cn/mmopen/o8HBbXd72BbSvmtNXvCrxvuhCiaru4NMeprNRtraIwhDvaiaSibadqIgGAHJPVicLtxIBUibLxQ5n6dNcPBGGqxv5DAPfN4ibaDckM/132',1505129818,''),
(366,'oNqUrwS_0JM1PuDzsubnF7kGt3ao','Y',2,'zh_CN','古巴','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxD3KRclS6aW2mnIh75NYPGwmiaP1FGTgvvR9SslaOVC7FM8wocn7iaR5K3GiboGicQBNsW3rV4EzFueAblgYic97PYK/132',1499063539,''),
(367,'oNqUrwX8K3nmz0RDwjyv5YJ7R12I','A  無',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMZ0jHialC0sDmDL6lAjwkE6W3YDkjygADNseia5GOmoAMs01wxOwmVukIOicKGHyKGvRTUhUMZMvbYBic1kGQgwr7Pic/132',1500302441,''),
(368,'oNqUrwTCpNSN8H-KdzRltNmsa7aA','Nina',2,'zh_CN','中国广东','http://wx.qlogo.cn/mmopen/yehycmDVLMbxaaOEia2Fs7zOkRm5Ue02zjx01JUd0dMKfXK8njjjib32FicSiccWUiaKf6cAibiaOadu9yRQJEWKpViayog9XaRL92ja/132',1499259885,''),
(369,'oNqUrweH2x7Zf_2xDzr2j57GV4oU','HOU_Y',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/o8HBbXd72BZpxanibWNNic0MDUgzib5hbloqhzZFAAGWnwTPeGowBYrkjKJpazC9lEWtvO4LC5t05HysgWjWsSktM5xibNsHgb14/132',1499063599,''),
(370,'oNqUrwUJLsrGPZDQaJPEGfDQENMo','On  love and  loneliness',1,'zh_CN','安道尔','http://wx.qlogo.cn/mmopen/o8HBbXd72Bb4cNshjiahprXGBHibMaicdtkSsxoicg1YpX4KlD7dFImPEGdL9ToI8k6cddGfG7xexLmcU8GtFCw3iasskyn1EfsR7/132',1499669690,''),
(371,'oNqUrwQl8IUwXkK-9F9trGINOcyg','丶诺',1,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/Q3auHgzwzM6f8jBp6G2pT81DjWib9qrOg8ibibXVZA4iceVQgJcIHgyXPLb3RWYOH3kPywoNl5eialickuibV1mteB7EgqKf1rs4Pf8ExalQ4icAEfw/132',1499312108,''),
(372,'oNqUrwSsJNCm4lpInnXRSqiiA2Q8','爱断情伤',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/Q3auHgzwzM4Y2UzokoVE7X66FquCRdKhFtYyicGabuym3tiavg01v3KyjlxeFhIf6iceibzECfA0n7C43GLuJgVUnPdiaXGh0D30ibu1G47E3xdzM/132',1499309756,''),
(373,'oNqUrwYNKTN2obbHrGp43i4AjBpA','Tracy青涛',1,'zh_CN','约旦','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxicTGEc2G4HFCSDDOO8jLclRmhmf4GhFhCVanoo2b8JOGvWicD8e3H5tKuVICyU9ZTps4go5MCtVr1KwTzmp4edX/132',1500479697,''),
(374,'oNqUrwaWMAUlxlfJ7flwZ0FL7jvk','姚强',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxufnk6XXJPV1tviaAqibc2xOOvdyEribibl15atnayTqGwNrpudjFv4piaP240G5HXhKue72dDiagpIuQrLL2ttzSWRU/132',1499669676,''),
(375,'oNqUrwSSTA2qsGCnKFOVUKFWUYaI','新起点主持人  曹悦',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/fK3fRRPicgAwSTT9UMGS0yK2pOmV0LOpjfCc1ILL1yibgTvpIFfRwoSLTBCtiaXlvAZqWYbEzTEJkAfTm9icVW1m9P8Yflx7iaMcA/132',1499241555,''),
(376,'oNqUrwXvKKZ0hQBS-MkBPbTrfw1w','summer',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/o8HBbXd72BZ6A0OibT6k2dcWAGUMHept7Xhw2WPw6yic8FapNVpAozh3kAmdd1iaPicibJf5kv8DvAn91o3Toz7lia0OsGwKMmszuq/132',1505125679,''),
(377,'oNqUrwaiZHr31oEVcv6prtHq4GrQ','上善若水',2,'zh_CN','巴基斯坦','http://wx.qlogo.cn/mmopen/o8HBbXd72BbJ6LD5Whiab2U0SFlomqFFJ0KH5loJdHNg3ibCmsR6WOXwEPCo36UzVTk6dlRlib1chiaseia3KVuth3p0iaB8xZI0Y4/132',1501112685,''),
(378,'oNqUrwc5rVzxpGUNs4y7-_Hm5EKU','Amo_r',1,'zh_CN','中国四川宜宾','http://wx.qlogo.cn/mmopen/fK3fRRPicgAwn8DN5O5l0pvmu1NUVC5lgg7pEpjpu3WyzXjcicB52msgOiciaEO5gytsJICzDic4eUiavxKkRm6wR441EJGDtCheWU/132',1499263673,''),
(379,'oNqUrwWjShoaZ8QrNmBwP_hVYpwc','无语',1,'zh_CN','中国四川遂宁','http://wx.qlogo.cn/mmopen/fMBs1UdJPw9gL22yOouHG6jvGrtjMhvGLPwAUyjQJLR9icWWiaRYkbgqnH7wtKjqwt4STEDIic4syzsqaDbfCibcv975TUbQBfX0/132',1499074572,''),
(380,'oNqUrwenwjW9wcOoZhTmv6SlNX2g','晴雨',1,'zh_CN','安道尔','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxicTGEc2G4HFLQLRqicRDribTN770n3pNxwSYbT2dKx9kibwgUzhUnDKDD1stKKeDeSIeISYXVK6woluVB7slRzh0ib/132',1502006942,''),
(381,'oNqUrwWs2iEc5aFAy_Em2azwt4po','',2,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/rK1nsTlCD8GRE5mtkmx1K4pCiajJU3YFx5FVzbDsBOzPHrhiaSp95icNiapVTdJYH4Mx5jn3P6ojPEPywjnWEYb9JJmUibpqef43C/132',1501228851,''),
(382,'oNqUrwYMXanOP945Adegq0QhSPFw','一生平安琳',2,'zh_CN','','http://wx.qlogo.cn/mmopen/yehycmDVLMZoJib4X4FzBhr0GG8ibPGamXOGeNyCcL662TZXgJQXjjsgzbQZia2o2qEtBQnOSgzukK1QlMlPHpIhlPk4n3Z19LK/132',1499259843,''),
(383,'oNqUrwSfodmhS_icaAgMLnJtsSwY','Evelyn',2,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/Q3auHgzwzM6CRtqZqII4SaZBQC1hdecuJo22F1oPibricUz9qFiae2X54yDFSjvlO8WHuxRodibfvGm3ngb8aN4QdjZ3YOibaLu8OqWfEcqmrReQ/132',1502516566,''),
(384,'oNqUrwYE15fUH7IPfd1cD3a0AnwE','兔子先生',1,'zh_CN','中国四川乐山','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxb9W9ZZU4eBaDEZWUHKQJiciciaU7jnZTUbjpTZPIk47YAia5icnU5dRibP1oFJYEQu8ibCKb1whxuFRqoysa7YgBLJs3/132',1502441181,''),
(385,'oNqUrwczbyl5hCnzVNObYDBHY1Fs','Prod.chen',1,'zh_CN','洪都拉斯','http://wx.qlogo.cn/mmopen/iaASibPu1NBDkibx8BMgtiaU6zJOOBZ4ibuKEGETToGXGIwnBZOp63G9LWehxeu9vrznIDay9LZhLvK4ccjXhNq2VS45KRGq6icTCZ/132',1499255113,''),
(386,'oNqUrwdVRb2inAfD72cJPBjYtOJM','身处暗谁带光',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/o8HBbXd72BZYicRjduObdVaGFxSSLbtNO9pyIXcQhXibnm9BicfWdvvofbz6TibFhp40j5DxznuROdiaaGTnH7ZicctFM11Ff2Wnmq/132',1501230053,''),
(387,'oNqUrwVNCLUnckogHoLdGGnkbs9s','如你，如风',1,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/fK3fRRPicgAwCO1656OvUWrVXxiaJ3uichnxZia4Rz9ibicomX3GVicxJQgK7D375Lk1LiaWrw5iaY5tUMtbSDTq82NREhic8IibOQic8Wfh/132',1505393025,''),
(388,'oNqUrwXG6wW68ItUT8wt_dQ9r52w','上善若水',1,'zh_CN','新加坡','http://wx.qlogo.cn/mmopen/rK1nsTlCD8FonJ9ebgib67IFGucQ4hqoDpSPkA1tZRyzO2MupAfog80OI5qsS7sERt2ib3L8sF2OQ34tJBb8Cb01qkk0r5V6Tia/132',1499315501,''),
(389,'oNqUrwZae11N4iSDY0OLKzbZi1F8','粥可温，立黄昏',2,'zh_CN','中国四川南充','http://wx.qlogo.cn/mmopen/o8HBbXd72BaCicAarWE5mwsCIZKGibG1DU6LzKw7NrQAZUZvMVbZ7on3iczia8Q6DtwBTKic12mptdS7K4zEf74rVxQSwmcYw0KrQ/132',1499233064,''),
(390,'oNqUrwXgkEiz5atnXbpkmrje_l0U','·沃本善良',1,'zh_CN','中国山东青岛','http://wx.qlogo.cn/mmopen/rK1nsTlCD8FonJ9ebgib67CdGvTFB9Yzj8Bk2E3RzvAWyhxZ5B5m09PmVkfiaibqNdaRDQaAhBPV9xfNFgUjHFDTCicfC7Yb2O2I/132',1502201014,''),
(391,'oNqUrwR1kQeBekp_MWlXAen_nXKI','静悄悄',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxwBalzeb28Y9ooDMQddWJB97cBgNeibU39yPWHURKJicj0DKkc5qOo6mSjsickf3UtznqtRF0wN01qTYliarymKzTq/132',1499432952,''),
(392,'oNqUrwaiu9b6jcKQU4L2QoOw7c4k','『晨光夕阳』',1,'zh_CN','中国四川凉山','http://wx.qlogo.cn/mmopen/yehycmDVLMZNu3KPD1IE4Pujn5p0icsY7t06FlzNEIWXsffPibM9BxWM8eGr7krPvxhZkrrgBCLwLQOFTIhyjicAtB3ibufOq0Vs/132',1499310435,''),
(393,'oNqUrwTuOZeIaa1_-SCuxV1e6OUI','张聪',2,'zh_CN','中国四川德阳','http://wx.qlogo.cn/mmopen/5fweqMCSJr7ouX9xMooUdibNsiaxmV1hYYXCwUpoicVLryFMo6AODqGK7nQ8VQjg5iaRbIiaUWic07I8IxOX9UQ95hs9zIowbA3VbT/132',1505277730,''),
(394,'oNqUrwUM9u3RUe73BIUc5EWBz2t0','快乐明天',2,'zh_CN','中国浙江杭州','http://wx.qlogo.cn/mmopen/o8HBbXd72BZYicRjduObdVZaRgN8mXsQg40OXbgxJvDeXE8W0or2tlA6ImT9XU0v7tERM2oymWNr3nWJMTic1mY6zkDhHYicHu9/132',1499341983,''),
(395,'oNqUrwa8Cw6Y8MJfBe_MoMQumFiM','华',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMY2JPBMm2yd6RBBXWTP5ibnib6rY5sOZtBgAp0OFmhkbjG1DTy3tRbLLR8ibf6xmg8Sk62OtjHxwqxUjpujSFePG3QEP2bMPz1I6U/132',1499315390,''),
(396,'oNqUrwVuRmHbo3i2SzXX3favQr2M','小仙女',1,'zh_CN','英国英格兰伦敦','http://wx.qlogo.cn/mmopen/o8HBbXd72Ba0xsnd8uoXpGVKBWL3QeqnfeobCwCHlGZoC97hSmAVdKLTgQaGia5BLsaticD402iaouhKCDB1et2wk8ib0ibdvUo6f/132',1499228054,''),
(397,'oNqUrwThDrwfFboQgyzxrZxMoIGA','Mr.coo',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/PiajxSqBRaELw5rUq45Z3OlHic97gWDZNQL0iaZASZRUNaGr5XEol7NCka93mWstJfZFicWPhI5MuibCeDtagAfepsryGJKW5nUYSPuWHmsqBqwY/132',1495544042,''),
(398,'oNqUrwea5xDgBM0E1gzAEOLbHCL4','柠萌',2,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxicTGEc2G4HFOBic6WrhdkK6avItibMNcIW2qpUqqqUYen7C7ib2CvsdS9Ge5Aiadc5FicENr88fibO6OdlX3NARW0o22/132',1499310457,''),
(399,'oNqUrwZPEw2ZoKSoHV6g9RL8ruk0','飞哥',1,'zh_CN','中国四川南充','http://wx.qlogo.cn/mmopen/fK3fRRPicgAyeEkSghTicaCVMklIbnIaRALMRtrevIcPiaKFYLYHdnWF2tamDibIwBSXtVxHTPedc9nvAw88eh2OYRjM0UVrJhua/132',1499393246,''),
(400,'oNqUrwYBBJGBz3Va0sPgdNeT6z5A','小淡',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/o8HBbXd72BZYicRjduObdVf5B2BAO2quLx57VmQkJYFSynrMciaibOHVib993fmAQJXfq4lavlxtVrc0GQePVDQUr0Gq7OgkP5hn/132',1499341224,''),
(401,'oNqUrwdMlbiSX3EugZwuHbAEqR30','后来.',1,'zh_CN','冰岛','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxicTGEc2G4HFMUb5QEKqlLoydkqX1TafuVAozyHVLicYISII4ygRYVCv2NNZKUkEEONwWv3r3RsCcRykyVLDyJvC/132',1499309218,''),
(402,'oNqUrwa5y-_jlPLnbf3YsxX7LkNQ','淋',2,'zh_CN','中国四川广元','http://wx.qlogo.cn/mmopen/o8HBbXd72BZYicRjduObdVfkVRAudtXo9ibalXSGVhBwlicuiadibkm8vgYDM7kBeiaibuQ8hmVV6tic27EkiccqvAd5beMIbbKftZMtP/132',1499324601,''),
(403,'oNqUrweONeQ0PhqFc7CCTWdrhN4M','做最好的自己',2,'zh_CN','中国四川','http://wx.qlogo.cn/mmopen/rK1nsTlCD8G2r1VjYsDSFuumSuVL4liab5O8U60Dm9f63L9HlDWzibpYStAA5yfmvkqLJ9RAkMov6075Yb5qiau0iaTYZickZz8Lic/132',1499063610,''),
(404,'oNqUrwSzO0Hk_uxSCKc-eb7Cd6iE','summie蓉',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/rK1nsTlCD8GAib682txVAQwkiasE55bucHYwianHK7QjUtKjLh1hoUpicBfniau2hVm9Ox7ZnbVTGlyiczAcWjf5QMsuAYiczrmjBwd/132',1505376004,''),
(405,'oNqUrwTEyzk-1T5WigOpiJtHobzI','郁正杰',1,'zh_CN','阿尔及利亚','http://wx.qlogo.cn/mmopen/o8HBbXd72BbJMpsUW31iazxqA2Hcu8sYLZBcXpckHapZ30sMicYlcxrQlEzibn8ibXGic0yKc9ibjMNNCn7fA4iaricicj9lQRxrCEHHb/132',1502036629,''),
(406,'oNqUrwdmJ3ERzZMGsTNIDzaYNqOs','haitangyijiu6102',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/E5cW8VEibZiczwCJDEicVvkslZRhfQDmHvdsd7iaNQe83RF9oo6P9cM4x2WxmmOfklPU8KtEg6Od7A4ibLlZxrq8pN10tGvC55uN7/132',1505274767,''),
(407,'oNqUrwWs3MHoiRytFcZvyF3pG8_k','催眠的魄力',1,'zh_CN','开曼群岛','http://wx.qlogo.cn/mmopen/fK3fRRPicgAy0kicL0epO8Xrl29SficDYfiatGbh3j6zCkFibM0Jib4CUHicFhAmzOJ7QKvu7CB9X5iaHv1IWCoN7JeokGJgLuQP3awD/132',1499243536,''),
(408,'oNqUrwVw4C6QjfvisByk1ZCnDU8E','Original.',2,'zh_CN','中国四川','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxicTGEc2G4HFDJoAx9A8wiciboLicib7HpS729nDmyYaSibCzu0EH69ibH0oiawtZIcwgSalAyCf0Y1w1vNBDV6ABmM36G/132',1505137526,''),
(409,'oNqUrwfxN_XxkJ3Q1st9Gd46vmvI','MS.孫',1,'zh_CN','中国广东深圳','http://wx.qlogo.cn/mmopen/rK1nsTlCD8GCiaabp17pt8dylC3XUPm2pgnZpcvzZKxwLAO61yXXcJYE6oGJcibbicm4wnVnVQm5kzttUAe5BMcYqmVF17Z32b3/132',1499327999,''),
(410,'oNqUrweaBmqCv8EpLgIhMCiNM73U','我最爱我姐姐啦啦啦啦啦啦',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMYTA4GCHzd8LukDhDUg7FC0dBNJicib6c874j9rKLKzBXe4h8GP7ryjIVeSycvmOy0mpLc4SVJOHK5RicZ7jEQRG5X/132',1506080987,''),
(411,'oNqUrwRidr-X5N59Caq5S93PqHHM','刘清元',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMZNu3KPD1IE4BusPmGtrZAGHJFiakzibWcowrQFFTT9kxlXWJRoAbicMcJPQNK8nb87ZalwdFt0CGxwtwIcet7vRxc/132',1501231675,''),
(412,'oNqUrwRoGtkpHIGbxTPR_ogU0FRg','曲还末终人却散、情海未淡',2,'zh_CN','中国广东佛山','http://wx.qlogo.cn/mmopen/o8HBbXd72BbLyzgcMKD6tKv432LskrJic52pwqouY7PR1CmbibjtLgr1HKEc643n8L6uYzUuPoDE6SPv1Dplg0fiaM3lDTwmgPZ/132',1499253993,''),
(413,'oNqUrwfcKvIqEIk7qWqNUhh312-g','AI    小娟儿',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxicTGEc2G4HFNz7iarqGk6iaaHkOTnjMDqplAosRJSoTasJ42LYJiadhXBwQCHgphSm5ia3HC5icHmHpRHGdtDTgq7k3/132',1499413490,''),
(414,'oNqUrwdCvRhhyP5qPs_XPap74akI','学思行',1,'zh_CN','中国重庆','http://wx.qlogo.cn/mmopen/rK1nsTlCD8Fhuw5FYu52AV3zboe3iaoAicNcIxtQH8uic0VicBBUYUYXD6JYDAKgK21MEMwdECNzfpuK2e2iaFZalgicuicVAQ0HulI/132',1502897448,''),
(415,'oNqUrwaNmpcyzjwVjdlYL_IkvGro','张先生',1,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/BjOxXeUnTJko3qf4sGfKB7S8V3IJ6JLqwbEEGr75ZSZiaHGMfuyR6cg6Krz44Kshib9QvEAvTDoGj6wp5fv14rWEj3daCRAsQQ/132',1499312955,''),
(416,'oNqUrwVppRghRMsdjKQgeqW0qFvA','微风细雨',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/o8HBbXd72Ba8QBSNsvTxWdBfeqIqZTQ1iaFmfLXlO8vNianptiblu0PklbHUxjvBnctTrdQ2VxicmVT4arUGY1libQDNCA6augwmb/132',1500355079,''),
(417,'oNqUrwVvB2ZZx98cjodSb1wUkKmk','那那那边的巫婆',2,'zh_CN','','http://wx.qlogo.cn/mmopen/fK3fRRPicgAwlELz7I5c5fpO17qHtEFicfILZ0lEwwCOfOrQqysMHVxDKfiakOKhxExK59xdEyGw04CL6zGv4Yr3nO8zicbFrnmr/132',1499311415,''),
(418,'oNqUrweDtu6wz-hmBo33BC4OI7LE','罗容',2,'zh_TW','','http://wx.qlogo.cn/mmopen/I3kEysuiaCtqzJU2VQIEQ9qVqmSuxe7DcrkXXLX0va07wOz4GfjoicQvHJD3Dictll3pLYYQvo3tKmIDaiahsXhK76JwIjDzKZkn/132',1499308922,''),
(419,'oNqUrwZ78hXPaeT69p3F_mLCApXg','风雨.',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/fK3fRRPicgAzJvz3IBgMCYAARkticicQodGHqHI8dGBSm6AXfkMaxjteFnWChyjHOvnw8o7CdeyX5uejj1Er1PMm99iblLwgjSDs/132',1499342495,''),
(420,'oNqUrweqtuUQxbcbKYeJjR_JKqYE','Annabel',2,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/yehycmDVLMYtMdRuz9OFKjxfEKicx3rP5FTibCBibDichwJ3dnkdXibF3b6oY79QCCibXbXqwm8Nicx0nR0uC26TwvZryw3ATxdNqRo/132',1502013544,''),
(421,'oNqUrwadqnCSutG779vCYqQzVFUM','hzm',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/iaASibPu1NBDkibx8BMgtiaU65ovrgIoPoibTMNBWI3Wt516yDicOy8OExQ0k1DDkxgjdKPrbIu67on7qxEaQcBKZXicPicSF3TeIcvr/132',1499310407,''),
(422,'oNqUrwbI-l5CmZZowJM-gwX8-aio','Sunflower。。。L',2,'zh_CN','美国华盛顿西雅图','http://wx.qlogo.cn/mmopen/rK1nsTlCD8FonJ9ebgib67HImetA0tnhfaTFk07plCgPrVtn9YlAtug8V3U2Kh4BS4nkCsHXq6WMXOdpbT8iaOzzf6CicaAbch4/132',1505280977,''),
(423,'oNqUrwWweev0nOFbBMrwYO9GxlK4','秦珊珊',2,'zh_CN','澳大利亚堪培拉','http://wx.qlogo.cn/mmopen/hXfwaP9OTrzq7dmDW2wcc6fFpROoLg4HTzQEEWib5h54hBmGWiaslfTVuAtQxRnbomj0mnmM2tqFVrlU0KKmbmBh5fOMwaX8K6/132',1505136746,''),
(424,'oNqUrwSr35n93GJ8OiML5ARBNNGA','黄钰琳达拉嘿哟喂.',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/ajNVdqHZLLAePoFNl76Q4oRzBLHbfW4mxibsln1moqOMt6V1vdic7icoZ6ZTDcRhFFmeXn2WS2EI4gw4DteoRKJbL5RfmaNBc4YoKHhMNC2Fmg/132',1499232224,''),
(425,'oNqUrwcoNWVmz0InRc4WW_YMo9v8','夏洛洛',0,'zh_CN','','http://wx.qlogo.cn/mmopen/fK3fRRPicgAx6yoicfneDIk0EkuOicia6KJ8R5ROloQTRjADPZCyCdFFDawpITk2lwSMe6zjZvBoX9FHgUBWUeIeaxa7w5MElMpl/132',1499609388,''),
(426,'oNqUrweEe6diXO2mtlCBlEh-Q27w','西红柿炒鸡蛋',2,'zh_CN','中国四川南充','http://wx.qlogo.cn/mmopen/Q3auHgzwzM6JU0WYT1jHMBqRthurDYtyziafgAadLYvAM6RTr6NdAwklMbrEcTH5G09ibYeYN4iargdwF64pVx5MZNQ7Y7Boc3gXCicwUibJu6aE/132',1499311161,''),
(427,'oNqUrwT-Hg5FlRXZQrmjtfbFHVeo','凡若尘曦',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMYTA4GCHzd8Lmicibjf1ib4MXkFAybO5Ax8bBsyrNFEk3ASRFnL9R10TRDiajGQEAfdSF7KHA4YziaNICRVQq7k2iaVx5/132',1499669332,''),
(428,'oNqUrwUdwTo1n5sgkADItpDTWuz8','我是失眠者',1,'zh_CN','中国河南安阳','http://wx.qlogo.cn/mmopen/o8HBbXd72BZYicRjduObdVamicibMLGcAaW9Gyynb1wfllrveQS0rwAR5AuFgXAudnNcqQ4bKSYrPUrsBrOfhianTg1GsgHtEJKR/132',1499417375,''),
(429,'oNqUrwYnma0z6lmcF-uTcuYgg7Ck','S',1,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/5fweqMCSJr7ouX9xMooUdibGraZyN9D3gXuT1sWS7klFMUXkZxiaznAnZPVjrJ5SiacsopgwliaUGPpDQopPcn7t0OEqC2InDibpR/132',1499398176,''),
(430,'oNqUrwTFBez7pjB1khy-HojirlbY','林@',1,'zh_CN','中国四川宜宾','http://wx.qlogo.cn/mmopen/o8HBbXd72BbSvmtNXvCrxgFSOnP11YGRdjq0ktL3Bebq8IoApt7foQU4FaCKK1LMQAsUWibYiac33LL9luQkfHX92Icy4jIlIz/132',1505553232,''),
(431,'oNqUrwdiELxVP9vd7IcvTi2Ek8us','不再',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMbz05AKibPBGZz3WEcdGUlDibJMd0UQLs2M7xg4mPWbP2lT1hFUgTxlhPcJMSu6KdS7NTzYPRw1FicXnaV8yRpI4ws/132',1515124806,''),
(432,'oNqUrwVB0bJll8bU7mKvOhj-iyRc','枭郎',0,'zh_CN','','http://wx.qlogo.cn/mmopen/rK1nsTlCD8F7OyBVPqtexdaOvPwUIh24LSnRvlPvPndKJ8EjAnmkficMlXwaUfShwIyOoBjDmpnLxAjPq3leoLe8nk2hMG2Lt/132',1516105945,''),
(433,'oNqUrwY62SeZM4MqNgIK-lnuck_A','江江',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMbVMDnpM9U9ugCs4QwkPgJhEvhYqpEaTQARzWRgILtGtdjsLKiaibx3EFJetH2kwyKH5BULKgp7PYNJEdbnFcZNdT/132',1499310827,''),
(434,'oNqUrwTFWCBtT8hfAIoiUE6K1kiI','月亮女神',0,'zh_CN','','http://wx.qlogo.cn/mmopen/o8HBbXd72BaWK0wjTQdibhUohV2dJ0ZiaCLLwkwesQhkTNXuPyIGvNmj2wBIq4K89TTq4oLlpJQkiaJPJrvcbvFbn4xsqdnALBS/132',1499310420,''),
(435,'oNqUrwTJWZVNmq5zZTpnIAdHq1R0','姚先升',1,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/yehycmDVLMbBczMxC4uQ7Rwibia2auQrBtbDrzUSdDic6cPyd0tsmGREDlwzyNRJR2Z7kFoGGsOcmRJe0lEOb1wJhnsmoqNG6eJ/132',1499678754,''),
(436,'oNqUrwR7qL6Hdi4Nf0fFj7o7LlOM','熊大',1,'zh_CN','中国四川德阳','http://wx.qlogo.cn/mmopen/yehycmDVLMYTA4GCHzd8LuEDZMs7jknkBBBUpOpd0GhdZ9TETema2PEFuScHuWocUiaib5yjyY1dbslhpam6FcqicjVz639NDUt/132',1499310364,''),
(437,'oNqUrwcINz7R7VEI3p4_C_nsUxSQ','ﺭ踢了你一脚ﺭ你哥哥',1,'zh_CN','阿拉伯联合酋长国迪拜','http://wx.qlogo.cn/mmopen/rK1nsTlCD8FonJ9ebgib67F5CwqKyUsqicTib2ibTUZL2j8U2Eiab3eJv3OUmN501HWWO0BtS7RkvDyR1JgPooRiaS4sXHiabw6diaz1/132',1505222288,''),
(438,'oNqUrwdZ-jjH-jSECtCO46IpNWl8','鱼是乎',2,'zh_CN','中国四川自贡','http://wx.qlogo.cn/mmopen/gVTCS8NQC2iatzrWc5J6ZsPlSBLJP5oNzrlMD6v9omfTd2SzAPxicZMkX1ZczblDpRIMXU8iafD0J4zQia3KQv31TARtd9YYHfFX/132',1503628874,''),
(439,'oNqUrwUVW9CowpgR3V9tiO5NdpRo','@*^_^*玲',2,'zh_CN','中国四川','http://wx.qlogo.cn/mmopen/yehycmDVLMZgSW3JJHtKpOu7AicEPzG9Aoe4EXGaouVlmqeSLUvprSxnUBqAe0d1HP3iaVB1cSdcQEmBlQGT7TB6yRulTsrJCI/132',1505009146,''),
(440,'oNqUrwe3cTmY1YLdOyRqyVJeujFc','霸气侧漏',2,'zh_CN','中国四川绵阳','http://wx.qlogo.cn/mmopen/fK3fRRPicgAxTL6F4mDDusWLgdy5C2uIyBUnRz6ibmpZiauxeGv2mfeXL7YXaxBeHOLMBicPofF3IHQHSLdgReb8LRKGL4CEExp6/132',1499311638,''),
(441,'oNqUrwUncu3D5myrUlgfY6c8XKa0','且听风吟',2,'zh_CN','阿尔巴尼亚','http://wx.qlogo.cn/mmopen/o8HBbXd72Bb6yemJHFvxxFpJ7HqwIhkBzbFyBjRzbZxvjiaapcDOS2z3kH0zOhMg5Uaib5cn8PwhhFA94wHjQdNthDaiasltDNc/132',1505308925,''),
(442,'oNqUrwRo1leCmfKn0VFMzrgIUyV4','勿忘心安',2,'zh_CN','阿尔巴尼亚','http://wx.qlogo.cn/mmopen/rK1nsTlCD8FonJ9ebgib67Cwic1wDZ6D1yBg8vfbN5WB8vGPvpHUj1ibuJuxanvHozGPlktKk7rSq3hbbCCXxSkia9LG4Lw2fx1x/132',1499313021,''),
(443,'oNqUrwTDDG0EWkl0lw9L-Jlv98jI','曹梦宇呀',2,'zh_CN','中国四川乐山','http://wx.qlogo.cn/mmopen/Ak3hbG3RADc3o6soE2owJXpMKYlzm222HuHrfDOjb1r32eppFeBRuIpic7CkI2rQiaC0b1ZPDmweicOYho0pO1HkAPIGjN46J3C/132',1505193194,''),
(444,'oNqUrwcTW4Q2CM9-XkHqbcB-vttA','七月',2,'zh_CN','中国四川成都','http://wx.qlogo.cn/mmopen/o8HBbXd72BZEqib15QlmGwsCPia1dR7ukeCH00WXbwx8tZTSIgnvia1CnMPmHKUwVOeUNPzMcibiciaD0jaeDrgGKjyiaLgfIB2SicT3/132',1505309775,''),
(457,'oNqUrwRmDJslHtb9wlOmcJQUekLc','沈仁海',1,'zh_CN','中国四川泸州','http://wx.qlogo.cn/mmopen/o8HBbXd72BYGwd6K9cmDYe9unXorbBvnA0U0tDCCUfADz2fZ2TwD1ib1d0iannszweU1cX87SuicVf2sXUJJSrsHh4DFTbDzDCh/132',1517452934,'');

/*Table structure for table `t_friend_talk_comment` */

DROP TABLE IF EXISTS `t_friend_talk_comment`;

CREATE TABLE `t_friend_talk_comment` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `talkId` int(5) DEFAULT NULL COMMENT '驴友说Id',
  `user` char(5) COLLATE utf8_bin DEFAULT NULL COMMENT '评论人Id',
  `Touser` char(5) COLLATE utf8_bin DEFAULT NULL COMMENT '被回复人',
  `text` text COLLATE utf8_bin COMMENT '内容',
  `CommentTime` char(20) COLLATE utf8_bin DEFAULT NULL COMMENT '评论时间',
  `type` int(2) DEFAULT NULL COMMENT '1评论2回复',
  `pid` int(5) DEFAULT NULL COMMENT '父级消息Id',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `t_friend_talk_comment` */

insert  into `t_friend_talk_comment`(`id`,`talkId`,`user`,`Touser`,`text`,`CommentTime`,`type`,`pid`) values 
(2,2,'9','9','兄弟，真的有那么好？','1516440314',1,0),
(3,9,'9','9','为什么只有文字呢？','1516440531',1,0),
(4,2,'9','9','这个我表示有点怀疑哦，你能给我介绍一下吗？','1516447267',1,0),
(5,5,'11','9','1111111111111','1516447533',1,0),
(6,6,'9','9','大哥，能不能说句中文！这个我表示看不懂','1516447784',1,0),
(7,11,'9','11','你这个什么文字都没有','1516587127',1,0),
(8,5,'27','9','111111','1516693027',1,0),
(9,7,'25','9','赞一个\n','1516693073',1,0),
(10,10,'25','9','我的心情','1516693160',1,0),
(11,2,'11','9','1111111111111','1516693163',1,0),
(12,3,'11','9','1111111111','1516693180',1,0),
(13,5,'27','9','111112222222','1516693255',1,0),
(14,3,'25','9','Fjydvjjdsgjigecf ','1516693318',1,0),
(15,11,'27','11','111111111','1516693361',1,0),
(16,14,'25','9','哎，怎么会有BUG呢','1516693894',1,0),
(17,6,'25','9','别那么挑剔','1516704932',NULL,6),
(18,6,'9','25','没有没有','1516705032',NULL,6);

/*Table structure for table `t_friendtalk` */

DROP TABLE IF EXISTS `t_friendtalk`;

CREATE TABLE `t_friendtalk` (
  `id` int(5) NOT NULL AUTO_INCREMENT COMMENT '评论Id',
  `UserId` char(5) COLLATE utf8_bin DEFAULT NULL COMMENT '用户ID',
  `CreateTime` char(15) COLLATE utf8_bin DEFAULT NULL COMMENT '评论时间',
  `position` char(40) COLLATE utf8_bin DEFAULT NULL COMMENT '评论人定位',
  `GoodsId` char(10) COLLATE utf8_bin DEFAULT NULL COMMENT '商品ID',
  `TalkText` text COLLATE utf8_bin COMMENT '评论人感受',
  `photo` text COLLATE utf8_bin COMMENT '照片',
  `pageView` char(5) COLLATE utf8_bin DEFAULT '1' COMMENT '浏览量',
  `Fabulous` text COLLATE utf8_bin COMMENT '点赞人',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `t_friendtalk` */

insert  into `t_friendtalk`(`id`,`UserId`,`CreateTime`,`position`,`GoodsId`,`TalkText`,`photo`,`pageView`,`Fabulous`) values 
(6,'9','1511603599','四川省绵阳市涪城区','1','gfdhd','[[\"20171125\",\"57c17d0582ea6257ae36562841265a07.jpg\"],[\"20171125\",\"6d61d91430d7a17c90c2b748f90c6931.png\"],[\"20171125\",\"4a274af96e8d3281492b4b3c3aef6cd2.png\"],[\"20171125\",\"487c670a54dcedf1219aba7b988127f5.jpg\"]]','162','9,27,25'),
(2,'9','1510628153','四川省绵阳市涪城区','1','举横幅扩大和购房贷款','[[\"20171114\",\"90ff3e0b08fe650d1399a9035f8bb12b.jpg\"],[\"20171114\",\"30a25ec8c9b7ad2695f59a8fa33ae408.jpg\"]]','162','27,11,25,9'),
(3,'9','1510628523','四川省绵阳市涪城区','2','这是我的感受','[[\"20171114\",\"247be2dee1c79e7b7a4b7c179885b323.jpg\"],[\"20171114\",\"dfc5b5829d8718347ca9c66d83821dfe.jpg\"],[\"20171114\",\"3c33ceda588a724e9f7100472c4ca070.png\"],[\"20171114\",\"f21b1ccaa7445ace9681c1f2db28d83c.png\"],[\"20171114\",\"1b4d5574b5764a25512749ea1b024e3f.jpg\"]]','162','27,11,9,25'),
(5,'9','1510628788','四川省绵阳市涪城区','1','我还记得发生了',NULL,'162','9,25'),
(7,'9','1511948616','四川省绵阳市涪城区','1','这是我的感受','[[\"20171129\",\"8abe41b16db9dbfa8334f6b4f477d12a.png\"],[\"20171129\",\"6857a6ae26e3a10b3dd7117bb074f063.png\"],[\"20171129\",\"0f953d12b78229e928ffca9ac9a8bfd1.jpg\"]]','162','9,25'),
(8,'9','1511948987','四川省绵阳市涪城区','2','测试1','[[\"20171129\",\"996900754311ef5a9c6a042b4ed7267d.jpg\"],[\"20171129\",\"5cff76e1ce50935a2d0bb221088d2e7f.jpg\"],[\"20171129\",\"abcd7b921fe23c3fec4e818163164259.png\"]]','162','25,9'),
(9,'9','1511949153','四川省绵阳市涪城区','1','只有文字',NULL,'162','25,9'),
(10,'9','1512551641','四川省绵阳市涪城区','1','阿道夫三分','[[\"20171206\",\"d5ced38ca49172789db3d4e9b8a1bfc6.jpg\"],[\"20171206\",\"24757afb3c281f185407c9094e413436.jpg\"],[\"20171206\",\"1f5f79fcbf7cf2e7dfca740fb84a30cc.jpg\"]]','162','9,27,25'),
(11,'11','1513400607','四川省绵阳市涪城区福安巷26号','1','',NULL,'162','25,9'),
(14,'9','1516671120','四川省绵阳市涪城区','1','测试','[[\"20180123\",\"bd196062eb6541aa4b9d1394b8483ae9.jpg\"],[\"20180123\",\"2a87d6987d3837e9e3cf750249655025.png\"],[\"20180123\",\"fe435aae93afcf7f21d199f575d1cc24.jpg\"]]','161','1,9,25');

/*Table structure for table `t_goods` */

DROP TABLE IF EXISTS `t_goods`;

CREATE TABLE `t_goods` (
  `id` int(6) NOT NULL AUTO_INCREMENT COMMENT '商品id',
  `GoodsName` char(50) COLLATE utf8_bin DEFAULT NULL COMMENT '商品名称',
  `cid` char(20) COLLATE utf8_bin DEFAULT NULL COMMENT '商品所有分类id',
  `PositionName` char(60) COLLATE utf8_bin DEFAULT NULL COMMENT '商品所在地',
  `X_LONG` double DEFAULT NULL COMMENT '经度',
  `Y_LONG` double DEFAULT NULL COMMENT '纬度',
  `addPeopleId` char(5) COLLATE utf8_bin DEFAULT NULL COMMENT '添加人的id',
  `DetailsImage` text COLLATE utf8_bin COMMENT '商品页轮播图照片（json）',
  `Template_1` char(50) COLLATE utf8_bin DEFAULT NULL COMMENT '模板1照片',
  `Template_2` char(50) COLLATE utf8_bin DEFAULT NULL COMMENT '模板2照片',
  `Template_3` char(50) COLLATE utf8_bin DEFAULT NULL COMMENT '模板3照片',
  `Template_4` char(50) COLLATE utf8_bin DEFAULT NULL COMMENT '模板4照片',
  `BusinessId` int(5) DEFAULT NULL COMMENT '商家ID',
  `addPeopleType` int(2) DEFAULT NULL COMMENT '1:管理员0:商家',
  `addTime` char(20) COLLATE utf8_bin DEFAULT NULL COMMENT '添加时间',
  `HotClass` char(30) COLLATE utf8_bin DEFAULT NULL COMMENT '热门分类',
  `startTime` char(20) COLLATE utf8_bin DEFAULT NULL COMMENT '开始时间',
  `endTime` char(20) COLLATE utf8_bin DEFAULT NULL COMMENT '结束时间',
  `enable` int(2) DEFAULT '0' COMMENT '是否上架',
  `groups` int(2) DEFAULT '0' COMMENT '是否拼团',
  `pid` int(3) DEFAULT NULL COMMENT '商品父级分类Id',
  `oldPrice` char(10) COLLATE utf8_bin DEFAULT NULL COMMENT '原价',
  `activityPrice` char(10) COLLATE utf8_bin DEFAULT NULL COMMENT '活动价',
  `CovorImg` text COLLATE utf8_bin COMMENT '封面图',
  `HotOrder` char(30) COLLATE utf8_bin DEFAULT NULL,
  `introduce` tinytext COLLATE utf8_bin COMMENT '产品介绍',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `t_goods` */

insert  into `t_goods`(`id`,`GoodsName`,`cid`,`PositionName`,`X_LONG`,`Y_LONG`,`addPeopleId`,`DetailsImage`,`Template_1`,`Template_2`,`Template_3`,`Template_4`,`BusinessId`,`addPeopleType`,`addTime`,`HotClass`,`startTime`,`endTime`,`enable`,`groups`,`pid`,`oldPrice`,`activityPrice`,`CovorImg`,`HotOrder`,`introduce`) values 
(3,'药王谷','1,10','四川省绵阳市北川羌族自治县',104.685747,31.895751,'1','[[\"20171220\",\"b4def40775e0aada6b1e5e8a7e794d78.jpg\"],[\"20171220\",\"3e443d15a74d2da9cc4af9b1cd9c8b48.jpg\"]]','20171223/a42febcacd87e788ad5546ca8ca1f166.jpg','20180313/e883231744a609e5c0f4aede6381cbaa.jpg','20180313/1cdf4db6a67cb527906240e10cc42fa5.jpg','20180313/9adbfdc362401ba7e3a66e5fe6fa3cbc.jpg',2,1,'1513758685','2,3','1513785600','1514995200',1,0,10,'45','35','20180127/eda2d8f5d4bdd0087901b7cf3b30b5f3.jpg',NULL,'这里是对药王谷的初步介绍'),
(2,'九皇山','1,10','四川省绵阳市北川羌族自治县',104.692415,31.925615,'1','[[\"20171220\",\"9781f168863fac114dcda5e10d13314f.png\"],[\"20171220\",\"8279ca4544388ce0c1f62aecb7634508.jpg\"]]','20180313/d627c048b23e1ddc348a69e55ce0fb74.jpg',NULL,NULL,'20180313/5dd5991ca9f528368d3be57621e1efec.jpg',4,1,'1513758460','3,4','1513785600','1517356800',1,0,10,'30','25','20180309/1987aaecb07634168a799b65349339f1.jpg',NULL,NULL),
(7,'南湖烧烤','2,3','四川省绵阳市涪城区',104.756152,31.42962,'1','[[\"20171220\",\"57076dfe23c66fd675034d28a2a3340d.jpg\"],[\"20171220\",\"6d5855e480b3fa060b36620c6ad5e115.png\"],[\"20171220\",\"1e35938fde692c15b439442731cf1a9b.png\"],[\"20171220\",\"82e863bf20e4665e0e094d2a0a4f121f.jpg\"],[\"20171220\",\"1c3624059342d63127b657d868b7fb5d.png\"]]','20171223/84f33121e1761bfa4fd7e8e1f28921c6.jpg','20171226/66551799ed77aa0d962b99d7cea9ea7e.jpg','20171223/e5d03d06a6583172d6578e0e449e31b0.jpg','20171223/2def3f64755e6d29901ba5601d47b493.jpg',2,1,'1513767938','2','1513699200','1513785600',0,1,3,'89','75','20180127/6d8ac80de07a3214bc15447e75ed8da0.jpg',NULL,NULL),
(8,'李白故里','1,11','四川省绵阳市江油市明月路',104.691535,31.68569,'1','[[\"20171220\",\"b6ff2e7bd4c05b9f43ebf1334a39fa92.png\"]]','20180313/71cd798010aa6660c6a6123751ff0164.jpg',NULL,'20180313/cd2f11b9a19350e2f3170e9c4966f41e.jpg','20180313/2b034c5c8837a13c6c66406e90345d34.jpg',2,1,'1513768386','3,4','1514908800','1516723200',1,0,11,'40','20','',NULL,NULL),
(9,'晚辅老师','12','四川省绵阳市涪城区绵兴东路96',104.687502,31.472801,'1','[[\"20171221\",\"dcfe6470d77af2ddd368b868484b7009.png\"],[\"20171221\",\"ddc73727c2e78c429aa5b190a04e5670.jpg\"],[\"20171221\",\"6ebc558bf3ddefeeeae99875a9320298.png\"]]',NULL,NULL,NULL,NULL,8,1,'1513819257','3','1513958400','1514649600',0,0,12,'80','90','',NULL,NULL),
(10,'罗浮山漂流','2,3','四川省绵阳市涪城区元通路',104.724599,31.470133,'1','[[\"20171221\",\"e8587cf823384ddcbf0a5c087ef1a502.png\"],[\"20171221\",\"12d5ead514251f2eb9b82345bf8c5b38.jpg\"],[\"20171221\",\"ce29123e144ed8c84884bfd9bffe0ba7.jpg\"],[\"20171221\",\"d33879ffba184c6815339dd8b02c57a4.jpg\"],[\"20171221\",\"0b247eb7e41206ef5db3ec979e3622c2.png\"]]',NULL,NULL,NULL,'20180313/bc6f941736d0d64370566c64a04e89ad.jpg',2,1,'1513819883','3','1543680000','1546012800',1,0,3,'80','70','',NULL,NULL),
(11,'测试','2,3','四川省南充市南部县',105.760816,31.29123,'1','[[\"20171221\",\"97b2aee2622f1c59aacb3143212e7fc8.jpg\"],[\"20171221\",\"7ebed18567d0166e7f6f7c6bf92fdb2d.png\"],[\"20171221\",\"ec5304043f8398b3d4277eca125f3a73.jpg\"],[\"20171221\",\"a427ab71f6c4ed005d3be919f2d1fb32.png\"],[\"20171221\",\"fbb8344b22b304511a89f170b2facd8a.png\"]]','20171223/84f842e48d6e98e54de1766b50bdca5a.jpg',NULL,NULL,NULL,2,1,'1513841164','3','1513785600','1514476800',1,0,3,'45','40','',NULL,NULL),
(12,'测试团游1','2,4','四川省绵阳市涪城区创业大道',104.700672,31.490485,'1','[[\"20171221\",\"1fee5643dfa1742d61fbb4c6f96f798d.png\"],[\"20171221\",\"8adcaa929de8c69fdcbf8d5ec2f436d3.jpg\"],[\"20171221\",\"3ec8fe452de9b69d78afe236e0068c14.jpg\"],[\"20171221\",\"f727ebae4776d351ee631c1b5f393b60.jpg\"],[\"20171221\",\"2809258071818f108ddcda88f2721db5.jpg\"]]','20180313/0da3a3ae508373efa349bc1b6b4a7340.jpg',NULL,NULL,NULL,2,1,'1513841306','3,4','1513785600','1514649600',1,1,4,'80','60','',NULL,NULL),
(14,'测试商品11111','2,3','四川省绵阳市盐亭县',105.39402,31.345525,'1','[[\"20171221\",\"4395c1b3090ea1a9f07c3c92f2bb58a8.png\"],[\"20171221\",\"4b5e02fb10f5328c7a869bb7e7c3c6f1.png\"],[\"20171221\",\"003605b56c3865df4db7ad5e6a44bd8f.png\"]]','20180313/5afe60fe101f352217fcdf70f12245f4.jpg',NULL,NULL,NULL,5,1,'1513841594','3,4','1513958400','1514044800',1,0,3,'121','12','',NULL,NULL),
(15,'测试','2,4','四川省绵阳市盐亭县',105.514753,31.281355,'1','[[\"20171221\",\"08828650deee41c04ec1d3e46810dd56.jpg\"],[\"20171221\",\"16d14d974f7bc7d6c3365cc83fd51b4e.png\"]]',NULL,NULL,NULL,NULL,3,1,'1513842907','3','1513872000','1514649600',1,0,4,'70','50','',NULL,NULL),
(16,'测试','2,3','四川省绵阳市盐亭县',105.420466,31.32085,'1','[[\"20171221\",\"01f47db4a0cdea81883879e3e7e37837.jpg\"],[\"20171221\",\"007eb0c754c261e99c45c869fd4e560a.png\"],[\"20171221\",\"03441b0b59438b565af07c6711de738f.jpg\"],[\"20171221\",\"c9f775229925b626c006d38d9256dc42.jpg\"]]',NULL,NULL,NULL,NULL,6,1,'1513843204','3','1513785600','1514563200',1,0,3,'800','500','',NULL,NULL),
(18,'商品1','2,3','四川省绵阳市涪城区元通路',104.725969,31.471761,'1','[[\"20171222\",\"7620716d7745febffa6714b61abe9a11.png\"],[\"20171222\",\"bf7edb1af19e0bfa09f1c5c67ef2e4a7.jpg\"],[\"20171222\",\"dc9edf43bd8ef0d7aff9efaefbfd70ef.jpg\"]]','20180313/5af6e34214c6a2332dac0bc91b4eb2e1.jpg',NULL,NULL,NULL,2,1,'1513932914','3,4','1513958400','1514649600',1,0,3,'45','40',NULL,NULL,NULL),
(19,'白马王朗','2,3','四川省绵阳市平武县S205(九环公路)白马王朗',104.318436,32.755966,'1','[[\"20171226\",\"eb09a3ed09aa3b239a69278ca979c6cb.jpg\"],[\"20171226\",\"e5cc7ac98f6b39f2217b4c50ce3e5dbe.jpg\"],[\"20171226\",\"b271321b4c769717d29649e4932404b5.jpg\"]]',NULL,NULL,'20180313/f1476c8070cb5ed83ec452228d91d105.jpg',NULL,2,1,'1514271804','5','1514217600','1514476800',1,0,3,'300','285',NULL,NULL,'白马王朗，一个来了你就不想走的旅游好地方！'),
(20,'千佛山旅游胜地','2,3','四川省绵阳市安县秀茶路',104.288817,31.705165,'1','[[\"20171227\",\"1b24212650cea6c34599b2bd32bed5ef.jpg\"],[\"20171227\",\"563cd4a1247ab67d0915633e8793398a.jpg\"]]',NULL,NULL,'20171227/0e7226cbd5f793faed14bdf9c49043aa.jpg',NULL,2,1,'1514344641','5','1514390400','1514563200',1,0,3,'50','40',NULL,NULL,NULL),
(23,'程序测试商品1号','1,11','四川省绵阳市盐亭县',105.356076,31.35638,'1','[[\"20180126\",\"9921972cc687025ecafed7b34cf5df46.jpg\"],[\"20180126\",\"33f438cd3e2e41dda4c4693f38b33c09.png\"],[\"20180126\",\"33f438cd3e2e41dda4c4693f38b33c09.png\"]]',NULL,NULL,NULL,NULL,2,1,'1516964301','2','1516896000','1517328000',1,0,11,'60','50',NULL,NULL,NULL),
(24,'测试提交商品123','1,10','四川省绵阳市涪城区S205',104.712296,31.525635,'1','[[\"20180307\",\"fbad4db342adaf5d1347c3492b26219d.jpg\"],[\"20180307\",\"fceaaf9f2fa6a19917b9d598a18473af.png\"],[\"20180307\",\"2d3a3a81f7762cefc869a80b9e40a7ad.png\"],[\"20180307\",\"0c347f3c8aaa179223d819b9109de6f6.jpg\"]]',NULL,NULL,NULL,'20180307/db02287b24827acfadcfb0ebf8a6d321.jpg',2,1,'1520391115','3','1519833600','1521561600',0,0,10,'50','40','20180307/65a7eb6cf389bcbc5afe9b01ef3a8875.jpg',NULL,NULL);

/*Table structure for table `t_goods_classify` */

DROP TABLE IF EXISTS `t_goods_classify`;

CREATE TABLE `t_goods_classify` (
  `id` int(3) NOT NULL AUTO_INCREMENT COMMENT '商品分类id',
  `ClassName` char(20) COLLATE utf8_bin DEFAULT NULL COMMENT '分类名称',
  `pid` char(3) COLLATE utf8_bin DEFAULT NULL COMMENT '父级分类id',
  `cid` char(15) COLLATE utf8_bin DEFAULT NULL COMMENT '所有父级分类id',
  `createTime` char(15) COLLATE utf8_bin DEFAULT NULL COMMENT '创建分类名称',
  `CreateAdmin` char(30) COLLATE utf8_bin DEFAULT NULL COMMENT '创建分类人',
  `PageDisplays_frame` char(2) COLLATE utf8_bin DEFAULT NULL COMMENT '首页显示框架分类',
  `Enable` int(2) DEFAULT NULL COMMENT '是否启用',
  `icon` char(60) COLLATE utf8_bin DEFAULT NULL COMMENT '分类图标',
  `level` char(2) COLLATE utf8_bin DEFAULT NULL COMMENT '等级',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `t_goods_classify` */

insert  into `t_goods_classify`(`id`,`ClassName`,`pid`,`cid`,`createTime`,`CreateAdmin`,`PageDisplays_frame`,`Enable`,`icon`,`level`) values 
(1,'门票','0','0',NULL,NULL,'1',1,'20180124/42aa52d9860fee05a85477a1d0cebf82.png','1'),
(2,'团游1','0','0',NULL,NULL,'2',1,'20180124/3ecef6bae2501b719d519248cc99cdf9.png','1'),
(3,'一日游','2','2',NULL,NULL,'',1,NULL,'2'),
(4,'跟团游','2','2','1513217715','1',NULL,1,NULL,'2'),
(5,'兼职','0','0','1513217963','1','3',1,'20180124/083647646cf625372457041c781900b9.png','1'),
(10,'风景区','1','1','1513237692','1','1',1,NULL,'2'),
(11,'博物馆','1','1','1513237711','1','1',1,NULL,'2'),
(12,'默认分类','0','0','1516789556','1','1',0,NULL,'1');

/*Table structure for table `t_goods_comment` */

DROP TABLE IF EXISTS `t_goods_comment`;

CREATE TABLE `t_goods_comment` (
  `CommentId` int(10) NOT NULL AUTO_INCREMENT COMMENT '商品评论',
  `user` int(7) DEFAULT NULL COMMENT '评论人',
  `level` int(2) DEFAULT NULL COMMENT '等级',
  `time` char(20) COLLATE utf8_bin DEFAULT NULL COMMENT '评论时间',
  `content` text COLLATE utf8_bin COMMENT '评论内容',
  `photo` text COLLATE utf8_bin COMMENT '照片',
  PRIMARY KEY (`CommentId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `t_goods_comment` */

/*Table structure for table `t_goods_order` */

DROP TABLE IF EXISTS `t_goods_order`;

CREATE TABLE `t_goods_order` (
  `Id` int(10) NOT NULL AUTO_INCREMENT,
  `GoodsOrderID` char(50) COLLATE utf8_bin DEFAULT NULL COMMENT '订单号id',
  `GoodsId` char(8) COLLATE utf8_bin DEFAULT NULL COMMENT '商品Id',
  `PackageId` char(8) COLLATE utf8_bin DEFAULT NULL COMMENT '套餐ID',
  `num` char(5) COLLATE utf8_bin DEFAULT NULL COMMENT '数量',
  `createTime` char(20) COLLATE utf8_bin DEFAULT NULL COMMENT '创建时间',
  `User` char(10) COLLATE utf8_bin DEFAULT NULL COMMENT '用户id',
  `lastUpdateTime` char(20) COLLATE utf8_bin DEFAULT NULL COMMENT '最后操作时间',
  `state` char(2) COLLATE utf8_bin DEFAULT NULL COMMENT '状态（1购物车，2已支付，3已发货，4已收货，5已评价）',
  `ReceiveAddress` text COLLATE utf8_bin COMMENT '收货地址',
  `price` char(10) COLLATE utf8_bin DEFAULT NULL COMMENT '价格',
  `ReceivePeople` char(20) COLLATE utf8_bin DEFAULT NULL COMMENT '收货人',
  `ReceivePhoneNum` char(13) COLLATE utf8_bin DEFAULT NULL COMMENT '接收人电话',
  `Urge` int(2) NOT NULL DEFAULT '0' COMMENT '催促发货',
  `LastUrgeTime` int(20) DEFAULT '0' COMMENT '最后催促时间',
  PRIMARY KEY (`Id`,`Urge`)
) ENGINE=MyISAM AUTO_INCREMENT=65 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `t_goods_order` */

insert  into `t_goods_order`(`Id`,`GoodsOrderID`,`GoodsId`,`PackageId`,`num`,`createTime`,`User`,`lastUpdateTime`,`state`,`ReceiveAddress`,`price`,`ReceivePeople`,`ReceivePhoneNum`,`Urge`,`LastUrgeTime`) values 
(38,'148374795220180111160152','2','4','1','1515657712','25','1520584020','5','富乐大厦','0.01',NULL,NULL,0,0),
(37,'148374795220180111153913','3','4','1','1515656353','25','1515660212','3','富乐大厦','0.01',NULL,NULL,0,0),
(39,'148374795220180111160900','3','4','1','1515658140','25','1515660202','4','富乐大厦','0.01',NULL,NULL,0,0),
(40,'148374795220180111163557','3','4','1','1515659757','25','1515660017','3','富乐大厦','0.01',NULL,NULL,0,0),
(41,'148374795220180111170257','3','4','1','1515661377','25','1515672449','3','富乐大厦','0.01',NULL,NULL,0,0),
(42,'148374795220180111170723','3','4','1','1515661643','25','1515672705','3','富乐大厦','0.01',NULL,NULL,0,0),
(43,'148374795220180111170844','3','4','1','1515661724','25','1515672796','3','四川省绵阳市高新区绵兴西路166号绵阳师范学院磨家校区8栋133','0.01','苏小扬','15221245858',0,0),
(44,'148374795220180111170948','3','4','1','1515661788','25','1515672850','3','富乐大厦','0.01',NULL,NULL,0,0),
(45,'148374795220180111171242','3','4','1','1515661962','25','1520584030','5','富乐大厦','0.01',NULL,NULL,0,0),
(46,'148374795220180111171437','3','4','1','1515662077','25','1515673154','2','富乐大厦','0.01',NULL,NULL,0,0),
(47,'148374795220180111172753','3','4','1','1515662873','25','1515662873','5','富乐大厦','0.01',NULL,NULL,0,0),
(48,'148374795220180111172819','3','4','1','1515662899','25','1515673964','2','富乐大厦','0.01',NULL,NULL,1,1520498930),
(50,'148374795220180113131958','3','4','1','1515820798','25','1520469880','2','富乐大厦','0.01',NULL,NULL,2,1520490045),
(51,'148374795220180122112655','3','4','1','1516591615','25','1516591615','0','富乐大厦','0.01',NULL,NULL,0,0),
(52,'148374795220180122115829','2','6','1','1516593509','25','1520909946','3','富乐大厦','40',NULL,NULL,0,0),
(53,'148374795220180122115853','2','7','3','1516593533','25','1516593533','0','四川省绵阳市高新区绵兴西路166号绵阳师范学院磨家校区8栋133','45','庞鹏','18780516325',0,0),
(54,'148374795220180124155552','3','4','1','1516780552','25','1516780552','0','富乐大厦','0.01',NULL,NULL,0,0),
(55,'148374795220180124155618','3','4','1','1516780578','25','1516780578','0','富乐大厦','0.01',NULL,NULL,0,0),
(57,'148374795220180206230838','3','4','1','1517929718','38','1517929718','0','富乐大厦','0.01',NULL,NULL,0,0),
(58,'148374795220180206231126','3','4','1','1517929886','38','1517929886','0','富乐大厦','0.01',NULL,NULL,0,0),
(60,'148374795220180225175434','3','4','1','1519552474','9','1519552474','0','富乐大厦','0.01',NULL,NULL,0,0),
(61,'148374795220180225175509','3','4','1','1519552509','25','1519552509','0','富乐大厦','0.01',NULL,NULL,0,0),
(64,'148374795220180308185835','2','7','3','1520506715','25','1520506715','0','富乐大厦','60',NULL,NULL,0,0);

/*Table structure for table `t_goods_package` */

DROP TABLE IF EXISTS `t_goods_package`;

CREATE TABLE `t_goods_package` (
  `PackageId` int(6) NOT NULL AUTO_INCREMENT COMMENT '套餐ID',
  `GoodsID` char(6) COLLATE utf8_bin DEFAULT NULL COMMENT '商品ID',
  `PackageName` char(30) COLLATE utf8_bin DEFAULT NULL COMMENT '套餐名称',
  `careful` char(30) COLLATE utf8_bin DEFAULT NULL COMMENT '提醒',
  `ActivityPrice` char(13) COLLATE utf8_bin DEFAULT NULL COMMENT '活动价格',
  `OldPrice` char(13) COLLATE utf8_bin DEFAULT NULL COMMENT '市场价格',
  PRIMARY KEY (`PackageId`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `t_goods_package` */

insert  into `t_goods_package`(`PackageId`,`GoodsID`,`PackageName`,`careful`,`ActivityPrice`,`OldPrice`) values 
(1,'2','学生票','123','25','30'),
(2,'3','成人票','','0.05','0.1'),
(3,'3','学生票','提醒2','0.01','0.02'),
(4,'3','儿童票','儿童票哦','0.01','0.02'),
(9,'8','成人票【包含来往车费】','套餐一只限单个人哦','40','45'),
(6,'2','成人票','456','40','50'),
(7,'2','儿童票','789','15','20'),
(8,'2','老人票','','25','30');

/*Table structure for table `t_hotclass` */

DROP TABLE IF EXISTS `t_hotclass`;

CREATE TABLE `t_hotclass` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `HotName` char(30) COLLATE utf8_bin DEFAULT NULL COMMENT '热门分类名称',
  `MubanNum` char(2) COLLATE utf8_bin DEFAULT NULL COMMENT '模板Id',
  `enable` int(2) DEFAULT NULL COMMENT '启用',
  `icon` char(60) COLLATE utf8_bin DEFAULT NULL COMMENT '图标',
  `order` char(4) COLLATE utf8_bin DEFAULT NULL COMMENT '排序',
  `GoodsOrder` text COLLATE utf8_bin COMMENT '商品排序',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `t_hotclass` */

insert  into `t_hotclass`(`id`,`HotName`,`MubanNum`,`enable`,`icon`,`order`,`GoodsOrder`) values 
(2,'限时抢购','2',1,'20171219/17ef688f5e083f538cdef38ee4d922ff.png','2','{\"3\":\"1\",\"7\":\"2\"}'),
(3,'旅游门票','4',1,'20171219/66c47e642f3e524bf6ce697363edf190.png','4','{\"3\":\"1\",\"2\":\"2\",\"10\":\"3\",\"8\":\"4\",\"24\":\"6\"}'),
(4,'热门旅游地','1',1,'20171222/f14bc10dcc546acb5c076ea89f936207.png','1','{\"2\":\"3\",\"14\":\"4\",\"8\":\"5\",\"18\":\"1\",\"12\":\"2\"}'),
(5,'热门攻略','3',1,'20171226/776ab8cb6a5a17076ecfdab324ddde30.png','3','{\"19\":\"1\",\"20\":\"2\"}'),
(6,'测试','1',0,'20180210/e9f65d6f26c66a8b856fa638cd13fbf3.png','5',NULL);

/*Table structure for table `t_managemenu` */

DROP TABLE IF EXISTS `t_managemenu`;

CREATE TABLE `t_managemenu` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `MenuName` char(30) COLLATE utf8_bin DEFAULT NULL COMMENT '菜单名称',
  `leval` char(2) COLLATE utf8_bin DEFAULT NULL COMMENT '菜单等级',
  `pid` char(2) COLLATE utf8_bin DEFAULT NULL COMMENT '父级菜单ID',
  `cid` char(10) COLLATE utf8_bin DEFAULT NULL COMMENT '所有父级菜单ID',
  `href` char(50) COLLATE utf8_bin DEFAULT NULL COMMENT '菜单链接',
  `fileName` char(50) COLLATE utf8_bin DEFAULT NULL COMMENT '文件夹或文件名字',
  `Enable` char(2) COLLATE utf8_bin DEFAULT NULL COMMENT '是否启用（1启用0不启用）',
  `Name` char(20) COLLATE utf8_bin DEFAULT NULL COMMENT '文件名',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=44 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `t_managemenu` */

insert  into `t_managemenu`(`id`,`MenuName`,`leval`,`pid`,`cid`,`href`,`fileName`,`Enable`,`Name`) values 
(1,'系统设置','1','0','0','/manage/system','system','1','system'),
(2,'菜单生成','2','1','1','/manage/system/Pcmenu/index','system/Pcmenu/index','1','Pcmenu'),
(3,'手机端商品分类','2','1','1','/manage/system/Mobmenu/index','system/Mobmenu/index','1','Mobmenu'),
(4,'人员管理','1','0','0','/manage/people','people','1','people'),
(5,'系统管理员','2','4','4','/manage/people/Admin/index','people/Admin/index','1','Admin'),
(6,'商家管理','2','4','4','/manage/people/Business/index','people/Business/index','1','Business'),
(7,'用户','2','4','4','/manage/people/Users/index','people/Users/index','1','Users'),
(8,'所有用户','3','7','4,7','/manage/people/Users/index','people/Users/index','0','index'),
(9,'微信用户','3','7','4,7','/manage/people/Users/weixin','people/Users/weixin','1','weixin'),
(10,'QQ用户','3','7','4,7','/manage/people/Users/qq','people/Users/qq','0','qq'),
(11,'微信公众号回复','2','18','18','/manage/weixin/Reply/index','weixin/Reply/index','1','Reply'),
(12,'公众号关注人员','2','18','18','/manage/weixin/Follow/index','weixin/Follow/index','1','Follow'),
(13,'商品管理','1','0','0','/manage/goods','goods','1','goods'),
(14,'区域管理','2','1','1','/manage/system/Region/index','system/Region/index','1','Region'),
(15,'手机用户','3','7','4,7','/manage/people/Users/phoneusers','people/Users/phoneusers','1','phoneusers'),
(16,'商品列表','2','13','13','/manage/goods/goodslist/index','goods/Goodslist/index','1','Goodslist'),
(17,'热门分类','2','13','13','/manage/goods/Hotclass/index','goods/Hotclass/index','1','Hotclass'),
(18,'微信公众号','1','0','0','/manage/weixin','weixin','1','weixin'),
(19,'公众号绑定','2','18','18','/manage/weixin/Linkwx/index','weixin/Linkwx/index','0','Linkwx'),
(20,'微信菜单生成','2','18','18','/manage/weixin/Createmenu/index','weixin/Createmenu/index','1','Createmenu'),
(21,'素材管理','2','18','18','/manage/weixin/Material/index','weixin/Material/index','1','Material'),
(22,'图片','3','21','18,21','/manage/weixin/Material/images','weixin/Material/images','1','images'),
(23,'视频','3','21','18,21','/manage/weixin/Material/video','weixin/Material/video','0','video'),
(24,'语音','3','21','18,21','/manage/weixin/Material/voice','weixin/Material/voice','0','voice'),
(25,'图文','3','21','18,21','/manage/weixin/Material/index','weixin/Material/index','1','index'),
(26,'手机首页轮播图','2','1','1','/manage/system/Carousel/index','system/Carousel/index','1','Carousel'),
(27,'订单管理','1','0','0','/manage/order','order','1','order'),
(28,'拼团管理','1','0','0','/manage/groups','groups','1','groups'),
(29,'可拼团产品','2','28','28','/manage/groups/Groupgoods/index','groups/Groupgoods/index','1','Groupgoods'),
(30,'未支付','2','27','27','/manage/order/Unpaid/index','order/Unpaid/index','0','Unpaid'),
(31,'购物车','2','27','27','/manage/order/Shopcar/index','order/Shopcar/index','0','Shopcar'),
(32,'未发货','2','27','27','/manage/order/Nofahuo/index','order/Nofahuo/index','1','Nofahuo'),
(33,'已发货','2','27','27','/manage/order/Yifahuo/index','order/Yifahuo/index','1','Yifahuo'),
(34,'已完成','2','27','27','/manage/order/Finish/index','order/Finish/index','1','Finish'),
(35,'已评论','2','27','27','/manage/order/Comment/index','order/Comment/index','1','Comment'),
(36,'兼职管理','1','0','0','/manage/jianzhi','jianzhi','1','jianzhi'),
(37,'所有职位','2','36','36','/manage/jianzhi/Alljob/index','Jianzhi/Alljob/index','1','Alljob'),
(38,'待处理申请','2','36','36','/manage/jianzhi/Delivery/index','jianzhi/Delivery/index','1','Delivery'),
(39,'已拒绝的申请','2','36','36','/manage/jianzhi/Refuse/index','jianzhi/Refuse/index','1','Refuse'),
(40,'待面试','2','36','36','/manage/jianzhi/Daims/index','jianzhi/Daims/index','1','Daims'),
(41,'面试结果','2','36','36','/manage/jianzhi/Result/index','jianzhi/Result/index','1','Result'),
(42,'已通过','3','41','36,41','/manage/jianzhi/Result/pass','jianzhi/Result/pass','1','pass'),
(43,'未通过','3','41','36,41','/manage/jianzhi/Result/failed','jianzhi/Result/failed','1','failed');

/*Table structure for table `t_parameter` */

DROP TABLE IF EXISTS `t_parameter`;

CREATE TABLE `t_parameter` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `GoodsId` char(6) COLLATE utf8_bin DEFAULT NULL COMMENT '商品Id',
  `GoodsDetails` text COLLATE utf8_bin COMMENT '商品详情',
  `GoodsParameter` text COLLATE utf8_bin COMMENT '商品参数',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `t_parameter` */

insert  into `t_parameter`(`id`,`GoodsId`,`GoodsDetails`,`GoodsParameter`) values 
(1,'3','<p style=\"text-align: center;\">盛夏药王谷，避暑好去处</p><p style=\"text-align: center;\"><img src=\"/ueditor/php/upload/image/20171225/1514199124340338.jpg\" title=\"1514199124340338.jpg\" alt=\"59f83c42dd78df7a625c3910.jpg\" width=\"521\" height=\"168\"/></p><p style=\"text-align: right;\">2017-12-25&nbsp;19:04:25</p><table><tbody><tr class=\"firstRow\"><td width=\"76\" valign=\"top\" style=\"border-width: 1px; border-style: solid; word-break: break-all;\">1</td><td width=\"76\" valign=\"top\" style=\"border-width: 1px; border-style: solid; word-break: break-all;\">2</td><td width=\"76\" valign=\"top\" style=\"border-width: 1px; border-style: solid; word-break: break-all;\">3</td><td width=\"76\" valign=\"top\" style=\"border-width: 1px; border-style: solid; word-break: break-all;\"><p>4</p></td><td width=\"76\" valign=\"top\" style=\"border-width: 1px; border-style: solid; word-break: break-all;\">5</td><td width=\"76\" valign=\"top\" style=\"border-width: 1px; border-style: solid; word-break: break-all;\">6</td><td width=\"76\" valign=\"top\" style=\"border-width: 1px; border-style: solid; word-break: break-all;\">7</td><td width=\"76\" valign=\"top\" style=\"border-width: 1px; border-style: solid; word-break: break-all;\">8</td></tr><tr><td width=\"76\" valign=\"top\" style=\"border-width: 1px; border-style: solid; word-break: break-all;\">qw</td><td width=\"76\" valign=\"top\" style=\"border-width: 1px; border-style: solid; word-break: break-all;\">er</td><td width=\"76\" valign=\"top\" style=\"border-width: 1px; border-style: solid; word-break: break-all;\">ty</td><td width=\"76\" valign=\"top\" style=\"border-width: 1px; border-style: solid; word-break: break-all;\">ui</td><td width=\"76\" valign=\"top\" style=\"border-width: 1px; border-style: solid; word-break: break-all;\">op</td><td width=\"76\" valign=\"top\" style=\"border-width: 1px; border-style: solid; word-break: break-all;\">as</td><td width=\"76\" valign=\"top\" style=\"border-width: 1px; border-style: solid; word-break: break-all;\">df</td><td width=\"76\" valign=\"top\" style=\"border-width: 1px; border-style: solid; word-break: break-all;\">gh</td></tr><tr><td width=\"76\" valign=\"top\" style=\"border-width: 1px; border-style: solid; word-break: break-all;\">jk</td><td width=\"76\" valign=\"top\" style=\"border-width: 1px; border-style: solid; word-break: break-all;\">lz</td><td width=\"76\" valign=\"top\" style=\"border-width: 1px; border-style: solid; word-break: break-all;\">xc</td><td width=\"76\" valign=\"top\" style=\"border-width: 1px; border-style: solid; word-break: break-all;\">vb</td><td width=\"76\" valign=\"top\" style=\"border-width: 1px; border-style: solid; word-break: break-all;\">nm</td><td width=\"76\" valign=\"top\" style=\"border-width: 1px; border-style: solid; word-break: break-all;\">，。</td><td width=\"76\" valign=\"top\" style=\"border-width: 1px; border-style: solid; word-break: break-all;\">12</td><td width=\"76\" valign=\"top\" style=\"border-width: 1px; border-style: solid; word-break: break-all;\">34</td></tr><tr><td width=\"76\" valign=\"top\" style=\"border-width: 1px; border-style: solid; word-break: break-all;\">56</td><td width=\"76\" valign=\"top\" style=\"border-width: 1px; border-style: solid; word-break: break-all;\">78</td><td width=\"76\" valign=\"top\" style=\"border-width: 1px; border-style: solid; word-break: break-all;\">90</td><td width=\"76\" valign=\"top\" style=\"border-width: 1px; border-style: solid; word-break: break-all;\">！@</td><td width=\"76\" valign=\"top\" style=\"border-width: 1px; border-style: solid; word-break: break-all;\">#￥</td><td width=\"76\" valign=\"top\" style=\"border-width: 1px; border-style: solid; word-break: break-all;\">%……</td><td width=\"76\" valign=\"top\" style=\"border-width: 1px; border-style: solid; word-break: break-all;\">&amp;*</td><td width=\"76\" valign=\"top\" style=\"border-width: 1px; border-style: solid; word-break: break-all;\">（）</td></tr><tr><td width=\"76\" valign=\"top\" style=\"border-width: 1px; border-style: solid; word-break: break-all;\">+-</td><td width=\"76\" valign=\"top\" style=\"border-width: 1px; border-style: solid; word-break: break-all;\">*`</td><td width=\"76\" valign=\"top\" style=\"border-width: 1px; border-style: solid; word-break: break-all;\">？=</td><td width=\"76\" valign=\"top\" style=\"border-width: 1px; border-style: solid; word-break: break-all;\">/\\</td><td width=\"76\" valign=\"top\" style=\"border-width: 1px; border-style: solid; word-break: break-all;\">:;</td><td width=\"76\" valign=\"top\" style=\"border-width: 1px; border-style: solid; word-break: break-all;\">&quot;&quot;&#39;&#39;</td><td width=\"76\" valign=\"top\" style=\"border-width: 1px; border-style: solid; word-break: break-all;\">{}[]</td><td width=\"76\" valign=\"top\" style=\"border-width: 1px; border-style: solid; word-break: break-all;\">_~</td></tr></tbody></table><p style=\"text-align: left;\"><br/></p><div style=\"width: 15px; height: 15px; background-image: url(&quot;http://www.yiqiwan.com/public/static/ueditor/dialogs/table/dragicon.png&quot;); position: absolute; cursor: move; top: 222px; left: 8px; user-select: none;\"></div>','<p style=\"white-space: normal; text-align: center;\">请在这儿输入商品参数！</p><p style=\"white-space: normal;\">111111111111111谷歌阖家团圆</p>'),
(2,'2','<p style=\"text-align: center;\"><strong><span style=\"font-size: 24px;\">这里是商品详情！</span></strong></p><p>大家好，今天我给大家介绍一下这个产品！</p><p>好了，结束</p><p>如果有疑问，请问<span style=\"color: rgb(255, 0, 0); text-decoration: underline;\"><a href=\"http://www.baidu.com\" target=\"_blank\" title=\"百度\" style=\"color: rgb(255, 0, 0); text-decoration: underline;\">百度</a></span></p><p>&lt;p style=&quot;text-align: center;&quot;&gt;</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;strong&gt;&lt;span style=&quot;font-size: 24px;&quot;&gt;这里是商品详情！&lt;/span&gt;&lt;/strong&gt;</p><p>&lt;/p&gt;</p><p>&lt;p&gt;大家好，今天我给大家介绍一下这个产品！&lt;/p&gt;</p><p>&lt;p&gt;好了，结束&lt;/p&gt;</p><p>&lt;p&gt;</p><p>&nbsp;&nbsp;&nbsp;&nbsp;如果有疑问，请问</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;a href=&quot;http://www.baidu.com&quot; target=&quot;_blank&quot; title=&quot;百度&quot; style=&quot;color: rgb(255, 0, 0); text-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;decoration: underline;&quot;&gt;</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;span style=&quot;color: rgb(255, 0, 0);&quot;&gt;百度&lt;/span&gt;</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/a&gt;</p><p>&lt;/p&gt;</p>',NULL),
(3,'7','<p style=\"text-align: center;\"><img src=\"/ueditor/php/upload/image/20180105/1515140434778961.jpg\" title=\"1515140434778961.jpg\" alt=\"qrcode_for_gh_0dc3d79476ec_344.jpg\" width=\"248\" height=\"246\"/></p>',NULL);

/*Table structure for table `t_phoneimg` */

DROP TABLE IF EXISTS `t_phoneimg`;

CREATE TABLE `t_phoneimg` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `name` char(20) COLLATE utf8_bin DEFAULT NULL COMMENT '照片名',
  `href` text COLLATE utf8_bin COMMENT '链接',
  `order` char(3) COLLATE utf8_bin DEFAULT NULL COMMENT '排序',
  `img` text COLLATE utf8_bin COMMENT '照片',
  `creatTime` char(25) COLLATE utf8_bin DEFAULT NULL COMMENT '创建时间',
  `zhuangtai` int(2) DEFAULT NULL COMMENT '状态（1启用，0不启用）',
  `method` int(2) DEFAULT NULL COMMENT '打开方式1新链接打开',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `t_phoneimg` */

insert  into `t_phoneimg`(`id`,`name`,`href`,`order`,`img`,`creatTime`,`zhuangtai`,`method`) values 
(10,'水果1','http://www.hfyiqiwan.top/admin/goods/Details/index/Goods/3.html','2','20180119/e555fc1260cd2d895b0ef44519c32f6a.jpg','1516345179',1,1),
(7,'百度','http://www.baidu.com','3','20180119/88b4e4bd8d13b1bcfdf956bb8061bb34.png','1516335074',1,0),
(8,'水果','http://www.hfyiqiwan.top','1','20180119/342f6d9ba83066afbe7d0633ac06f7e5.jpg','1516342788',1,0),
(9,'名字','http://www.bootcss.com/p/font-awesome','4','20180119/620dd82f9825c934097aa738343d74f0.png','1516343208',0,1);

/*Table structure for table `t_phonemenu` */

DROP TABLE IF EXISTS `t_phonemenu`;

CREATE TABLE `t_phonemenu` (
  `id` int(4) NOT NULL AUTO_INCREMENT COMMENT '手机端菜单id',
  `MenuName` char(30) COLLATE utf8_bin DEFAULT NULL COMMENT '手机端菜单名称',
  `level` char(3) COLLATE utf8_bin DEFAULT NULL COMMENT '菜单等级',
  `pid` char(2) COLLATE utf8_bin DEFAULT NULL,
  `cid` char(20) COLLATE utf8_bin DEFAULT NULL,
  `href` char(50) COLLATE utf8_bin DEFAULT NULL,
  `filePosition` char(50) COLLATE utf8_bin DEFAULT NULL COMMENT '文件位置',
  `Enable` int(2) DEFAULT NULL COMMENT '是否启用（1启用，0不启用）',
  `name` char(10) COLLATE utf8_bin DEFAULT NULL COMMENT '文件名称',
  `cssBoot` char(50) COLLATE utf8_bin DEFAULT NULL COMMENT 'css图标',
  `photo_icon` char(50) COLLATE utf8_bin DEFAULT NULL COMMENT '照片图标',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `t_phonemenu` */

insert  into `t_phonemenu`(`id`,`MenuName`,`level`,`pid`,`cid`,`href`,`filePosition`,`Enable`,`name`,`cssBoot`,`photo_icon`) values 
(1,'首页','1','0','0','/admin/home/Home/index','home/Home/index',1,'index',NULL,NULL),
(2,'拼团','1','0','0','/admin/groups/Groups/index','groups/Groups/index',1,'index',NULL,NULL),
(3,'个人中心','1','0','0','/admin/personal/Personal/index','personal/Personal/index',1,'index',NULL,NULL),
(4,'购物车','1','0','0','/admin/shoppingcar/Shoppingcar/index','shoppingcar/Shoppingcar/index',1,'index',NULL,NULL),
(5,'驴友说','1','0','0','/admin/discuss/Discuss/index','discuss/Discuss/index',1,'index',NULL,NULL);

/*Table structure for table `t_receive` */

DROP TABLE IF EXISTS `t_receive`;

CREATE TABLE `t_receive` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `MegType` char(20) COLLATE utf8_bin DEFAULT NULL COMMENT '接收的消息类型',
  `content` text COLLATE utf8_bin COMMENT '接受的消息内容',
  `ReplyMegType` char(20) COLLATE utf8_bin DEFAULT NULL COMMENT '回复的消息类型',
  `ReplyID` char(50) COLLATE utf8_bin DEFAULT NULL COMMENT '关联回复表格的id',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `t_receive` */

insert  into `t_receive`(`id`,`MegType`,`content`,`ReplyMegType`,`ReplyID`) values 
(1,'text','吃了没有','text','3'),
(2,'text','你好','text','5'),
(3,'text','表情','text','3'),
(4,'text','测试表情','text','4'),
(5,'text','欢迎','text','5');

/*Table structure for table `t_region` */

DROP TABLE IF EXISTS `t_region`;

CREATE TABLE `t_region` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `regionName` char(50) COLLATE utf8_bin DEFAULT NULL COMMENT '区域名称',
  `level` char(2) COLLATE utf8_bin DEFAULT NULL,
  `pid` char(5) COLLATE utf8_bin DEFAULT NULL,
  `cid` char(20) COLLATE utf8_bin DEFAULT NULL,
  `enable` int(2) DEFAULT NULL COMMENT '是否启用（1启用0不启用）',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `t_region` */

insert  into `t_region`(`id`,`regionName`,`level`,`pid`,`cid`,`enable`) values 
(1,'公司','1','0','0',1),
(2,'绵阳','1','0','0',1),
(3,'安县','2','2','2',1),
(4,'安县实验学校','3','3','2,3',1),
(5,'沈仁海','2','1','1',1),
(6,'沈仁海子区域','3','5','1,5',1),
(26,'测试顶级区域2','1','0','0',0),
(25,'测试顶级区域','2','2','2',1),
(23,'泸州老窖小学','3','3','2,3',1),
(22,'绵阳职业技术学院','2','2','2',1),
(21,'西南财经天府学院','2','2','2',1),
(20,'西南科技大学','2','2','2',1),
(19,'绵阳师范学院','2','2','2',1);

/*Table structure for table `t_reply` */

DROP TABLE IF EXISTS `t_reply`;

CREATE TABLE `t_reply` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `MsgType` char(20) COLLATE utf8_bin DEFAULT NULL COMMENT '回复消息的类型',
  `ReplyContent` text COLLATE utf8_bin COMMENT '回复的文本消息内容',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `t_reply` */

insert  into `t_reply`(`id`,`MsgType`,`ReplyContent`) values 
(1,'text','还没有呢。。。。。'),
(2,'text','感谢关注该公众号，该公众号是四川大黄蜂公司的旅行公众号，我们正极力打造绵阳周边最好的旅行服务公司，由于近期该公众号正在开发中，功能不完善，手机商城功能不完整，还请多多原谅，您可以关注我们的另外两个公众号：“一起玩周边游”和“帮帮还智能管家”，了解更多关于我们的各种优惠活动哦'),
(3,'text','测试表情/::<，结束'),
(4,'text','[Smile]'),
(5,'text','[Kiss][Kiss]欢迎关注四川大黄蜂科技有限公司的公众号[Clap][Clap]');

/*Table structure for table `t_shoppingcar` */

DROP TABLE IF EXISTS `t_shoppingcar`;

CREATE TABLE `t_shoppingcar` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `userId` int(8) DEFAULT NULL,
  `packgeId` int(5) DEFAULT NULL,
  `num` int(2) DEFAULT NULL,
  `addTime` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `t_shoppingcar` */

insert  into `t_shoppingcar`(`id`,`userId`,`packgeId`,`num`,`addTime`) values 
(1,25,4,3,1520672792),
(2,25,6,1,1520674632);

/*Table structure for table `t_user` */

DROP TABLE IF EXISTS `t_user`;

CREATE TABLE `t_user` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `UserName` char(40) COLLATE utf8_bin DEFAULT NULL COMMENT '用户名',
  `UserPassword` char(50) COLLATE utf8_bin DEFAULT NULL COMMENT '用户密码',
  `RegisterTime` char(20) COLLATE utf8_bin DEFAULT NULL COMMENT '注册时间',
  `PhoneNum` char(12) COLLATE utf8_bin DEFAULT NULL COMMENT '电话号码',
  `UserAge` int(3) DEFAULT NULL COMMENT '用户年龄',
  `UserSex` int(2) DEFAULT NULL COMMENT '用户性别（1男0女）',
  `LastRegisterIP` char(30) COLLATE utf8_bin DEFAULT NULL COMMENT '最后登录IP',
  `UserAccount` char(60) COLLATE utf8_bin DEFAULT NULL COMMENT '用户账号',
  `UserAddress` char(50) COLLATE utf8_bin DEFAULT NULL COMMENT '用户地址',
  `Registration` int(2) DEFAULT NULL COMMENT '注册方式（1：手机2：微信3：qq）',
  `UserImg` text COLLATE utf8_bin COMMENT '用户头像',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=40 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `t_user` */

insert  into `t_user`(`id`,`UserName`,`UserPassword`,`RegisterTime`,`PhoneNum`,`UserAge`,`UserSex`,`LastRegisterIP`,`UserAccount`,`UserAddress`,`Registration`,`UserImg`) values 
(9,'沈阳','21232f297a57a5a743894a0e4a801fc3','1511851430','18780516325',NULL,NULL,NULL,'18780516325',NULL,1,'20180130/S316c833822182a8b0e6a64c87091d03f.png'),
(8,'游客Kzb08AQqmP','200820e3227815ed1756a6b531e7e0d2','1511847981','18161026257',NULL,NULL,NULL,'18161026257',NULL,1,NULL),
(7,'游客i48hjTV36F','200820e3227815ed1756a6b531e7e0d2','1511846680','18780516328',NULL,NULL,NULL,'18780516328',NULL,1,NULL),
(6,'游客6lPDHzgTlM','393ea0ece698c9ceacdfbbaab4004081','1510033758','18780516327',NULL,NULL,NULL,'18780516327',NULL,1,NULL),
(10,'杨晨皓','e10adc3949ba59abbe56e057f20f883e','1512715502','18608156724',NULL,NULL,NULL,'18608156724',NULL,1,NULL),
(11,'游客O3b1yh8RwO','e10adc3949ba59abbe56e057f20f883e','1513400118','17738426631',NULL,NULL,NULL,'17738426631',NULL,1,'20180117/Sc39ed67029b7df194fcabaf66edc53ba.png'),
(12,'小雨','fde4adff6a6c412bea189d36852da73e','1513419059','13330884141',NULL,NULL,NULL,'13330884141',NULL,1,NULL),
(13,'游客VWfNw5fK74','f0ff4cbf04af1dd743df7f3262500ba0','1513564762','18381646987',NULL,NULL,NULL,'18381646987',NULL,1,NULL),
(14,'游客VjOQYWSgtn','6fe5f5e54d620201dee3687066b31952','1514534842','18349316164',NULL,NULL,NULL,'18349316164',NULL,1,NULL),
(15,'一米阳光','c08931522cd6d3696b91977880918afd','1514875418','15882886136',NULL,NULL,NULL,'15882886136',NULL,1,NULL),
(22,'沈仁海',NULL,'1514974868',NULL,NULL,1,NULL,'ofAc50SdMjiFN8RGVzpzqUQmnpeQ','中国四川泸州',2,'http://wx.qlogo.cn/mmopen/vi_32/P2rXleBYAVGn9bkak4gUZatoq2ibKqupGsK8e3jH5etNWpOcjHtXiaWBhmIHHCFTWHibPDUuvMgTvXFQxSlbZe6Hw/0'),
(21,'星月',NULL,'1514963270',NULL,NULL,1,NULL,'ofAc50egzpmLQEJ5YWRWsEdlawz0','中国四川绵阳',2,'http://wx.qlogo.cn/mmopen/vi_32/3Lqk1qt1icFQEQveXHL7I0VRBmBTYjfyicRn1mYBCffWpQ9CWN3Iehesg1TriamCm3TE7bUSWVFjKRFL5ianSOTDDw/0'),
(23,'@宗×',NULL,'1514974882',NULL,NULL,1,NULL,'ofAc50VCxTNhGC5dIYbB2RQjEBoA','中国四川绵阳',2,'http://wx.qlogo.cn/mmopen/vi_32/SsIFdia6CumxFm3kRiahpbaic6a2MfwZh1KShx6iaVV8SvxZsSPt2DiajiahZFicwpjRPVftiaTYVKjUtXHCOoUOmnSibuA/0'),
(24,'Mr.coo',NULL,'1515061863',NULL,NULL,1,NULL,'ofAc50WTt4piUYDzgSvKYkcWMlFo','中国四川绵阳',2,'http://wx.qlogo.cn/mmopen/vi_32/BZROGkDG04icgibDGYf6uj8B8AajqMT7Zc5IVtj4l2fHaPoUhH2xAYibGjVx9ALHx0baBAQPKLqmCibvPeQYhwxcicA/0'),
(25,'沈仁海','21232f297a57a5a743894a0e4a801fc3','1515122731',NULL,NULL,1,NULL,'oNqUrwRmDJslHtb9wlOmcJQUekLc','中国四川泸州',2,'20180312/S231c001645c44ba284c1008c4a798bb4.png'),
(26,'禹',NULL,'1515123094',NULL,NULL,2,NULL,'oNqUrwQYJRhhYWUWJRbzqLBGp1-I','中国四川绵阳',2,'http://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83erpaKRF39M8TiaBHP4HZFJAogNRMKPTrh9UpypAetGvlq0I48COdXnn2LmYFsia0apaMbuRrdvQHGbA/0'),
(27,'星月',NULL,'1515124812',NULL,NULL,1,NULL,'oNqUrwdiELxVP9vd7IcvTi2Ek8us','中国四川绵阳',2,'20180123/S9c1f64a08d7bad24540964b0e691b61a.png'),
(28,'游客GFrdohA7ko','a03b195accd3ae2f57909dbeca96f3c5','1515132678','18380591165',NULL,NULL,NULL,'18380591165',NULL,NULL,NULL),
(36,'绵阳漂流票营销人员',NULL,'1516801750',NULL,NULL,1,NULL,'oNqUrwUWsLBum7SVuPsc5t11kepY','中国四川绵阳',2,'http://wx.qlogo.cn/mmopen/vi_32/ZmIcra83qK8aQRmbc5coibJaOIDjM7ED5RpWlL0mZ2zSBeFeYlt3EVyTs3t9RLw46NcicaicNrHBZiamERHQ1KjoNA/132'),
(29,'静大仙人',NULL,'1515552482',NULL,NULL,2,NULL,'oNqUrwTNdGfzM_2bfMYJGuMja2Gc','中国四川成都',2,'http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIN1ibVbITlruQhYnURuyAJOJC0eZ2QXKqyoxOsQmxv0XsEhGQpW1WqlaoR2L9jNGLxamvxxAiameUg/0'),
(30,'A-A企业团建、亲子游、周边游',NULL,'1515558974',NULL,NULL,1,NULL,'oNqUrwSj-CrMJdITOBK2yk8TYLX8','中国四川绵阳',2,'http://wx.qlogo.cn/mmopen/vi_32/lKJL15L3V1uHE7ibSua5PPQ2uXcZVLAACEOqgd0WicFWGqzz4umGic14SXtfTR1ziaMv1LtvU0wVbOrHh2oz6YjyWA/132'),
(31,'陈守燕咯*',NULL,'1515666117',NULL,NULL,2,NULL,'oNqUrwV40zIMtH9o2fHw2HLBDmMk','安提瓜岛和巴布达',2,'http://wx.qlogo.cn/mmopen/vi_32/VBic0zlD0ZgBeWQCrjdlV91jsQibnwgPxe1icurpEOEb2EgNTtRQSZ2fvPnLJLWwAyu0E1150oB3bMbwaqHfSrZDg/132'),
(32,'枭郎',NULL,'1516105956',NULL,NULL,0,NULL,'oNqUrwVB0bJll8bU7mKvOhj-iyRc','',2,'http://wx.qlogo.cn/mmopen/vi_32/JvHPNWXZYYdKSn5NVmiaCUMkIX7jYh6yxJ2amqI2bpF83vAYwUSPrhkF2UvZJPb4VcENbNxpn6NvI8AO2RIRNtg/132'),
(33,'时光屿我',NULL,'1516211591',NULL,NULL,2,NULL,'oNqUrwa7EgldtK9ENhBofwzsNPJo','',2,'http://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqib6TXh1ibJUG0WgoaPH8mm7n6icMXHJoYbHvP8uGM4drUibanicfZhkhTPKDw1sIDj46kTicTxDPoguew/132'),
(34,'Mr.coo',NULL,'1516300158',NULL,NULL,1,NULL,'oNqUrwThDrwfFboQgyzxrZxMoIGA','中国四川绵阳',2,'http://wx.qlogo.cn/mmopen/vi_32/nXv3pLUO0ODGWzz9M1mwDlcibAKRGagicS9DJYicicicQFfxIlXoZrTysHXr35HchNOPddK7vsSyQ2expGfm00YtLeQ/132'),
(35,'小龙王',NULL,'1516612911',NULL,NULL,1,NULL,'oNqUrwS6_AZNINT11YE9aTATM9VQ','中国四川巴中',2,'http://wx.qlogo.cn/mmopen/vi_32/nN9X7kAIBLibliapOdpCExZ23bqLwBTbqItBH4aN1eibN393Gg3lsEicRCib9OeazJhTEf2iaTvKFJUibppcMCR79zvpQ/132'),
(37,'A Dreamer',NULL,'1517727514',NULL,NULL,1,NULL,'oNqUrwasWKxW89PHKBvQi-FqNwxE','中国四川绵阳',2,'http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKnqWujdyfP4UGjNeicm9K8eWLC3ZhicTDhrMZ7qIxiceAXRxzd0XKjFJKGsjY58dNvUO2jEtshLAVBQ/132'),
(38,'杨洪琴',NULL,'1517929673',NULL,NULL,0,NULL,'oNqUrwdDlOeXEmbbbYjVkLXnDANE','中国四川成都',2,'http://wx.qlogo.cn/mmopen/vi_32/RA6OBEksNvLYy8b6jiaaicbXLg9gvtxcN26WC0NTRteoCb1wkKPFG774yrFkLx7eb9jSUiaL2NsC2DVxcfoXpIibsg/132'),
(39,'.艺煜',NULL,'1518598411',NULL,NULL,0,NULL,'oNqUrwXaWe_mEwWqq7GRt6E80q60','',2,'http://thirdwx.qlogo.cn/mmopen/vi_32/ib4seqpGlIibtTAU23HWjE1kywlnparp5ppRdS1hnsX2VIkZn0DxocX1y5DXBOYDqCxPSuLbRMaAqbYFcSDkwbLQ/132');

/*Table structure for table `t_user_receive_address` */

DROP TABLE IF EXISTS `t_user_receive_address`;

CREATE TABLE `t_user_receive_address` (
  `adId` int(6) NOT NULL AUTO_INCREMENT,
  `userId` int(6) DEFAULT NULL COMMENT '用户Id',
  `receivePeople` char(20) COLLATE utf8_bin DEFAULT NULL COMMENT '收件人',
  `phone` char(13) COLLATE utf8_bin DEFAULT NULL COMMENT '联系电话',
  `ZipCode` int(7) DEFAULT NULL COMMENT '邮政编码',
  `address` text COLLATE utf8_bin COMMENT '收货地址',
  `moren` int(2) DEFAULT NULL COMMENT '是否设置为默认1默认，0不是默认',
  `sex` int(2) DEFAULT NULL COMMENT '性别1男0女',
  PRIMARY KEY (`adId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `t_user_receive_address` */

/*Table structure for table `t_weixin_expression` */

DROP TABLE IF EXISTS `t_weixin_expression`;

CREATE TABLE `t_weixin_expression` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `phoneName` char(10) COLLATE utf8_bin DEFAULT NULL COMMENT '照片名称',
  `EnglishName` char(20) COLLATE utf8_bin DEFAULT NULL COMMENT '英文名称',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=71 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `t_weixin_expression` */

insert  into `t_weixin_expression`(`id`,`phoneName`,`EnglishName`) values 
(1,'0.png','Smile'),
(2,'1.png','Grimace'),
(3,'2.png','Drool'),
(4,'3.png','Scowl'),
(5,'4.png','CoolGuy'),
(6,'5.png','Sob'),
(7,'6.png','Shy'),
(8,'7.png','Silent'),
(9,'8.png','Sleep'),
(10,'9.png','Cry'),
(11,'10.png','Awkward'),
(12,'11.png','Angry'),
(13,'12.png','Tongue'),
(14,'13.png','Grin'),
(15,'14.png','Surprise'),
(16,'15.png','Frown'),
(17,'16.png','Ruthless'),
(18,'17.png','Blush'),
(19,'18.png','Scream'),
(20,'19.png','Puke'),
(21,'20.png','Chuckle'),
(22,'21.png','Joyful'),
(23,'22.png','Slight'),
(24,'23.png','Smug'),
(25,'24.png','Hungry'),
(26,'25.png','Drowsy'),
(27,'26.png','Panic'),
(28,'27.png','Sweat'),
(29,'28.png','Laugh'),
(30,'29.png','Commando'),
(31,'30.png','Determined'),
(32,'31.png','Scold'),
(33,'32.png','Shocked'),
(34,'33.png','Shhh'),
(35,'34.png','Dizzy'),
(36,'35.png','Tormented'),
(37,'36.png','Toasted'),
(38,'37.png','Skull'),
(39,'38.png','Hammer'),
(40,'39.png','Wave'),
(41,'40.png','Speechless'),
(42,'41.png','NosePick'),
(43,'42.png','Clap'),
(44,'43.png','Shame'),
(45,'44.png','Trick'),
(46,'45.png','Bah！L'),
(47,'46.png','Bah！R'),
(48,'47.png','Yawn'),
(49,'48.png','Pooh-pooh'),
(50,'49.png','Shrunken'),
(51,'50.png','TearingUp'),
(52,'51.png','Sly'),
(53,'52.png','Kiss'),
(54,'53.png','Wrath'),
(55,'54.png','Whimper'),
(56,'55.png','Cleaver'),
(57,'56.png','Watermelon'),
(58,'57.png','Beer'),
(59,'58.png','Basketball'),
(60,'59.png','PingPong'),
(61,'60.png','Coffee'),
(62,'61.png','Rice'),
(63,'62.png','Pig'),
(64,'63.png','Rose'),
(65,'64.png','Wilt'),
(66,'65.png','Lips'),
(67,'66.png','Heart'),
(68,'67.png','BrokenHeart'),
(69,'68.png','Cake'),
(70,'69.png','Lightning');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
