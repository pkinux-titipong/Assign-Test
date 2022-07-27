-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jul 27, 2022 at 01:40 PM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Shop_assign`
--

-- --------------------------------------------------------

--
-- Table structure for table `productTable`
--

CREATE TABLE `productTable` (
  `Gender` varchar(10) NOT NULL,
  `Style` varchar(50) NOT NULL,
  `Size` varchar(5) NOT NULL,
  `Price` int(11) NOT NULL,
  `id` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `productTable`
--

INSERT INTO `productTable` (`Gender`, `Style`, `Size`, `Price`, `id`) VALUES
('Men', 'Iron man', 'L', 400, 1),
('Women', 'Polka dots', 'S', 500, 2),
('Women', 'Pink', 'M', 400, 3),
('Men', 'Black', 'M', 400, 4),
('Men', 'Blue', 'L', 500, 5),
('Women', 'Yellow', 'M', 400, 6),
('Women', 'Pink', 'S', 300, 7),
('Men', 'Spiderman', 'M', 500, 8),
('Men', 'Spiderman', 'L', 500, 9),
('Men', 'Batman', 'L', 500, 10);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
