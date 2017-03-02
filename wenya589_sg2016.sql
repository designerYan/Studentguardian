-- phpMyAdmin SQL Dump
-- version 4.0.10.14
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Dec 08, 2016 at 09:01 PM
-- Server version: 5.6.33
-- PHP Version: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `wenya589_sg2016`
--

-- --------------------------------------------------------

--
-- Table structure for table `classes`
--

CREATE TABLE IF NOT EXISTS `classes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `grade` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=40 ;

--
-- Dumping data for table `classes`
--

INSERT INTO `classes` (`id`, `name`, `grade`) VALUES
(38, 'FMGT 1125', '96'),
(39, 'Henrys class', '50');

-- --------------------------------------------------------

--
-- Table structure for table `reminder`
--

CREATE TABLE IF NOT EXISTS `reminder` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dueevent` varchar(50) NOT NULL,
  `startdate` date NOT NULL,
  `starttime` varchar(10) NOT NULL,
  `enddate` date NOT NULL,
  `endtime` varchar(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`),
  KEY `enddate` (`enddate`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=35 ;

--
-- Dumping data for table `reminder`
--

INSERT INTO `reminder` (`id`, `dueevent`, `startdate`, `starttime`, `enddate`, `endtime`) VALUES
(1, 'homework', '2016-11-14', '13:20', '2016-11-14', '15:20'),
(2, 'accounting assignment', '2016-11-10', '16:20', '2016-11-17', '13:30'),
(4, 'homework', '2016-11-17', '18:46', '2016-11-17', '00:00'),
(24, 'dfgh', '2016-11-24', '16:03', '2016-11-25', '18:04'),
(26, 'term project', '2016-12-09', '13:00', '2016-12-09', '22:00'),
(30, 'Apps presentation', '2016-12-07', '16:30', '2016-12-07', '17:30'),
(31, 'Assignment', '2016-12-28', '15:00', '2016-12-28', '15:22'),
(32, 'this presentation', '2016-12-14', '16:30', '2016-12-14', '18:30'),
(33, 'stuff', '2016-12-21', '15:00', '2016-12-21', '18:00'),
(34, 'Presentation', '2016-12-14', '16:03', '2016-12-14', '18:30');

-- --------------------------------------------------------

--
-- Table structure for table `schedule`
--

CREATE TABLE IF NOT EXISTS `schedule` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `start` varchar(50) NOT NULL,
  `end` varchar(50) NOT NULL,
  `title` varchar(50) NOT NULL,
  `instructor` varchar(50) NOT NULL,
  `location` varchar(50) NOT NULL,
  `type` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `type` (`type`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=66 ;

--
-- Dumping data for table `schedule`
--

INSERT INTO `schedule` (`id`, `start`, `end`, `title`, `instructor`, `location`, `type`) VALUES
(13, 'Thu Nov 17 2016 09:00:00 GMT-0800 (PST)', 'Thu Nov 17 2016 12:00:00 GMT-0800 (PST)', 'photoshop', 'Deamon', 'se14 rm121', 'lecture'),
(16, 'Wed Nov 16 2016 08:30:00 GMT-0400 (AST)', 'Wed Nov 16 2016 11:30:00 GMT-0400 (AST)', 'indesign', 'edward', 'se14', 'lab'),
(17, 'Tue Nov 15 2016 11:15:00 GMT-0800 (PST)', 'Tue Nov 15 2016 14:00:00 GMT-0800 (PST)', 'hgkhgjk', 'ghjkhgj', 'khgj', 'kgjhk'),
(18, 'Tue Nov 15 2016 13:30:00 GMT-0800 (PST)', 'Tue Nov 15 2016 16:30:00 GMT-0800 (PST)', 'accounting', 'Trish', 'sw1', 'lab'),
(19, 'Thu Nov 17 2016 15:15:00 GMT-0800 (Pacific Standar', 'Thu Nov 17 2016 15:45:00 GMT-0800 (Pacific Standar', 'math', 'evan', 'Sw2', 'financial'),
(20, 'Thu Nov 17 2016 13:45:00 GMT-0800 (Pacific Standar', 'Thu Nov 17 2016 14:15:00 GMT-0800 (Pacific Standar', 'math', 'ramin', 'Sw2', 'accounting'),
(40, 'Thu Nov 24 2016 10:00:00 GMT-0800 (PST)', 'Thu Nov 24 2016 12:30:00 GMT-0800 (PST)', 'sfs', 'fgsfdgsdf', 'gfsdgsd', 'fg'),
(41, 'Wed Nov 23 2016 10:45:00 GMT-0800 (PST)', 'Wed Nov 23 2016 11:15:00 GMT-0800 (PST)', 'fgh', 'dfghdf', 'ghfdg', 'hgdfhdfh'),
(42, 'Tue Nov 22 2016 21:30:00 GMT-0800 (Pacific Standar', 'Wed Nov 23 2016 00:00:00 GMT-0800 (Pacific Standar', 'asd', 'asd', 'asd', 'asd'),
(44, 'Thu Nov 24 2016 17:30:00 GMT-0800 (Pacific Standar', 'Thu Nov 24 2016 18:00:00 GMT-0800 (Pacific Standar', 'ertert', 'ertert', 'erterte', 'rtert'),
(48, 'Fri Nov 25 2016 12:30:00 GMT-0800 (PST)', 'Fri Nov 25 2016 15:30:00 GMT-0800 (PST)', 'Business comm', 'Julie', 'SE14 rm121', 'LECTURE'),
(49, 'Wed Nov 30 2016 08:30:00 GMT-0800 (Pacific Standar', 'Wed Nov 30 2016 11:30:00 GMT-0800 (Pacific Standar', 'coding', 'hrmty', 'hgff', 'jh'),
(64, 'Wed Dec 07 2016 16:30:00 GMT-0800 (PST)', 'Wed Dec 07 2016 18:30:00 GMT-0800 (PST)', 'Project 2', 'Ramin', 'Sw1', 'Presentation'),
(65, 'Thu Dec 08 2016 13:45:00 GMT-0800 (Pacific Standar', 'Thu Dec 08 2016 16:30:00 GMT-0800 (Pacific Standar', 'MDIA 3109', 'Henry', 'Se14', 'Lab');

-- --------------------------------------------------------

--
-- Table structure for table `studentguardian`
--

CREATE TABLE IF NOT EXISTS `studentguardian` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(10) NOT NULL,
  `password` text NOT NULL,
  `email` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`),
  KEY `id_2` (`id`),
  KEY `id_3` (`id`),
  KEY `id_4` (`id`),
  KEY `id_5` (`id`),
  KEY `username` (`username`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=58 ;

--
-- Dumping data for table `studentguardian`
--

INSERT INTO `studentguardian` (`id`, `username`, `password`, `email`) VALUES
(1, 'Ben', 'adsf@gmai.com', '123432'),
(2, 'Henry', '123445dsg', 'henry@bcit.ca'),
(3, 'test', 'test1234', 'test@gmail.com'),
(5, 'fwe', 'ert', 'ewte'),
(6, 'sdf', 'asdfwe', 'agd@gmail.com'),
(37, 'dfsg', 'dfsg', 'dfsg@dfg.cs'),
(38, 'fdsg', 'fdsg', 'dfsg@gdf.vom'),
(41, 'kk', 'ZMZsa310-', 'karissa310@gmail.com'),
(42, 'Yan', '1234', 'yan@gmail.com'),
(43, 'Arron', '123', 'arron@gmail.com'),
(44, 'jarell', '123', 'j@hotmail.com'),
(45, 'morgan', '123456', 'mhueston@gmail.com'),
(46, 'chrissy', 'chrissy', 'cooke.cec@gmail.com'),
(47, 'asd', 'asd', 'asd@example.com'),
(48, 'Kate', 'kate1234', 'kate@gmail.com'),
(49, 'Andrew', 'Andrew', 'andrew@andrew.ca'),
(56, 'aaran', '1234', 'a@a.ca'),
(57, 'aaran', '123', 'a@a.ca');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
