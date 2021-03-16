# Framework-test
In this project implements a simple back end whit express js and it consumes whit tow front-ends. The first is HTML+JQuery and the second is Angular 

Database

DROP DATABASE  IF EXISTS `person`;

CREATE DATABASE person;

USE person;

--
-- Table structure for table `generaldata`
--

DROP TABLE IF EXISTS `generaldata`;

CREATE TABLE `generaldata` (

  `id` int NOT NULL AUTO_INCREMENT,
  
  `name` varchar(45) NOT NULL,
  
  `surname` varchar(50) NOT NULL,
  
  `datebrith` date NOT NULL,
  
  `gender` varchar(45) NOT NULL,
  
  PRIMARY KEY (`id`)
  
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
