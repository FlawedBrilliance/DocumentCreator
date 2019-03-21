-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 18, 2019 at 07:11 AM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dcv3`
--

-- --------------------------------------------------------

--
-- Table structure for table `revisions`
--

CREATE TABLE `revisions` (
  `rev_sign` varchar(32) NOT NULL,
  `prs` varchar(256) DEFAULT NULL,
  `rev_id1` int(2) DEFAULT NULL,
  `rev_id2` int(4) DEFAULT NULL,
  `rev_desc` varchar(1024) DEFAULT NULL,
  `rev_author` varchar(64) DEFAULT NULL,
  `rev_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `published` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `revisions`
--

INSERT INTO `revisions` (`rev_sign`, `prs`, `rev_id1`, `rev_id2`, `rev_desc`, `rev_author`, `rev_date`, `published`) VALUES
('5c5aae80201ae', 'Test01', 1, 1, 'Initial Revision', 'System', '2019-02-06 09:53:04', 1),
('5c5aae802303d', 'Test01', 1, 1, 'Initial Revision', 'System', '2019-02-06 09:53:19', 0),
('5c5ab0887a897', 'Test01', 1, 2, 'adaf', 'test@gmail.com', '2019-02-06 10:05:21', 1),
('5c5ab1615d4c9', 'Test01', 1, 1, 'Initial Revision', 'System', '2019-02-06 10:21:31', 0),
('5c5ab58a1f382', 'TEST02', 1, 1, 'Initial Revision', 'System', '2019-02-06 10:23:06', 1),
('5c5ab58a22551', 'TEST02', 1, 2, 'ASFADFA', 'tets', '2019-02-06 10:24:02', 1),
('5c5ab5c29e6ef', 'TEST02', 1, 3, 'ca', 'test', '2019-02-06 10:56:51', 1),
('5c5bebe9959a0', 'TEST02', 1, 4, 'test', '', '2019-02-07 09:17:30', 1),
('5c5c1c9c4b3b0', 'TEST02', 1, 1, 'Initial Revision', 'System', '2019-02-07 12:06:29', 0),
('5c5d10b984c1b', 'TEST02', 1, 5, 'changed mappings', 'test@gmail.com', '2019-02-08 05:18:20', 1),
('5c610444b9409', 'TEST02', 1, 6, 'wrwrwe', 'test', '2019-02-11 05:13:06', 1),
('5c610462a12c5', 'TEST02', 1, 7, 'hiee', 'test', '2019-02-11 05:14:33', 1),
('5c6104b90a598', 'TEST02', 1, 8, 'dfsfsdfsd', 'test', '2019-02-11 06:07:48', 1),
('5c611134dd454', 'TEST02', 1, 9, 'wdww', 'test', '2019-02-11 06:11:15', 1),
('5c61120389287', 'TEST02', 1, 10, 'dwqdqd', 'test', '2019-02-11 06:28:09', 1),
('5c6115f973e79', 'TEST02', 1, 11, 'wdcwdcd', 'test', '2019-02-11 06:37:37', 1),
('5c611831efb6c', 'TEST02', 1, 1, 'Initial Revision', 'System', '2019-02-11 06:42:10', 0),
('5c615f42ddec0', 'TEST02', 1, 1, 'Initial Revision', 'System', '2019-02-11 11:41:00', 0),
('5c61604c502d6', 'TEST02', 1, 1, 'Initial Revision', 'System', '2019-02-11 11:46:02', 0),
('5c6161615bac4', 'TEST02', 1, 12, 'dafad', 'test', '2019-02-11 12:08:22', 1),
('5c6165b61202f', 'TEST02', 1, 1, 'Initial Revision', 'System', '2019-02-11 12:10:17', 0),
('5c6166a607c59', 'TEST02', 1, 1, 'Initial Revision', 'System', '2019-02-11 12:12:29', 0),
('5c625b299e069', 'TEST02', 1, 1, 'Initial Revision', 'System', '2019-02-12 05:35:50', 0),
('5c625cd13b07c', 'Test01', 1, 1, 'Initial Revision', 'System', '2019-02-12 05:42:45', 0),
('5c62695455fe9', 'TEST02', 1, 1, 'Initial Revision', 'System', '2019-02-12 06:37:14', 0),
('5c629806783ad', 'TEST02', 1, 13, '', 'test', '2019-02-12 09:58:20', 1),
('5c6298bc65310', 'TEST02', 1, 14, '', 'test', '2019-02-12 10:01:15', 1),
('5c62996b2dbca', 'TEST02', 1, 1, 'Initial Revision', 'System', '2019-02-12 10:02:00', 0),
('5c629b6a3ed89', 'TEST02', 1, 15, 'zvzv', 'test', '2019-02-12 10:12:11', 1),
('5c629bfb7590e', 'TEST02', 1, 16, 'dgsdgs', 'test', '2019-02-12 10:18:41', 1),
('5c629d81849d2', 'TEST02', 1, 17, 'cdcsdfsd', '5435', '2019-02-12 10:25:52', 1),
('5c629f305e58f', 'TEST02', 1, 18, '', '5435', '2019-02-12 10:31:43', 1),
('5c62a08f786c4', 'TEST02', 1, 19, '', '', '2019-02-12 10:32:57', 1),
('5c62a0d950851', 'TEST02', 1, 20, '', '', '2019-02-12 10:33:59', 1),
('5c62a11785da6', 'TEST02', 1, 21, '', '', '2019-02-12 10:36:10', 1),
('5c62a19a2bf29', 'TEST02', 1, 22, '', '', '2019-02-12 10:38:54', 1),
('5c63df513a32c', 'TEST02', 1, 23, '', '', '2019-02-13 09:12:17', 1),
('5c63df7174ee9', 'TEST02', 1, 1, 'Initial Revision', 'System', '2019-02-13 09:13:57', 0),
('5c63ff18941ad', 'TEST02', 1, 1, 'Initial Revision', 'System', '2019-02-13 11:27:33', 0),
('5c6511abb39c8', 'TEST02', 1, 1, 'Initial Revision', 'System', '2019-02-14 07:01:25', 0),
('5c6516224947e', 'TEST02', 1, 1, 'Initial Revision', 'System', '2019-02-14 07:18:02', 0),
('5c6ceed116d3f', 'TEST02', 1, 24, 'asdgj', 'test', '2019-02-20 06:16:42', 1),
('5c6cf0cae0486', 'TEST02', 1, 1, 'Initial Revision', 'System', '2019-02-20 06:20:24', 0),
('5c6cf224d4488', 'TEST02', 1, 25, 'weffw', '', '2019-02-20 06:35:23', 1),
('5c6cf52ba2856', 'TEST02', 1, 26, '', 'test', '2019-02-20 06:37:21', 1),
('5c6cf5a1958a6', 'TEST02', 1, 1, 'Initial Revision', 'System', '2019-02-20 06:40:24', 0),
('5c6cfad402b6d', 'Test01', 1, 1, 'Initial Revision', 'System', '2019-02-20 06:59:42', 0),
('5c761a6fdf647', 'TEST02', 1, 27, '', '', '2019-02-27 05:27:57', 1),
('5c761fdd445bb', 'TEST02', 1, 28, '', '', '2019-02-27 05:30:57', 1),
('5c76209164c9e', 'TEST02', 1, 1, 'Initial Revision', 'System', '2019-02-27 06:41:54', 0),
('5c763252676a2', 'TEST02', 1, 1, 'Initial Revision', 'System', '2019-02-27 06:46:56', 0),
('5c7781e7b4d64', 'Test01', 1, 1, 'Initial Revision', 'System', '2019-02-28 06:43:04', 0),
('5c7cb6b424fc3', 'Test01', 1, 1, 'Initial Revision', 'System', '2019-03-04 06:54:30', 0),
('5c7e08a75563f', 'Test01', 1, 1, 'Initial Revision', 'System', '2019-03-05 08:30:17', 0),
('5c7f5ba48c831', 'Test01', 1, 3, '', 'test', '2019-03-06 10:13:30', 1),
('5c7f9d4ae3a82', 'Test01', 1, 1, 'Initial Revision', 'System', '2019-03-06 10:16:19', 0),
('5c7fb0af2b68c', 'Test01', 1, 1, 'Initial Revision', 'System', '2019-03-06 11:45:39', 0),
('5c80b063ac4d1', 'Test01', 1, 1, 'Initial Revision', 'System', '2019-03-07 06:30:40', 0),
('5c824a7ad39d2', 'Test01', 1, 1, 'Initial Revision', 'System', '2019-03-08 10:57:12', 0),
('5c86301448854', 'Test01', 1, 1, 'New Unpublished Revision', 'System', '2019-03-11 05:23:33', 0),
('5c86322731ae4', 'Test01', 1, 1, 'Initial Revision', 'System', '2019-03-11 10:02:20', 0),
('5c863391e735a', 'Test01', 1, 1, 'Initial Revision', 'System', '2019-03-11 10:08:26', 0),
('5c86342a55439', 'TEST02', 1, 1, 'Initial Revision', 'System', '2019-03-11 10:10:57', 0),
('5c863564ae9cc', 'Test01', 1, 1, 'Initial Revision', 'System', '2019-03-11 10:16:14', 0),
('5c8644a728dae', 'TEST02', 1, 1, 'Initial Revision', 'System', '2019-03-11 11:21:19', 0),
('5c8644d7d1cf0', 'TEST02', 1, 1, 'Initial Revision', 'System', '2019-03-11 11:22:08', 0),
('5c864ed26dc7c', 'TEST02', 1, 1, 'Initial Revision', 'System', '2019-03-11 12:04:43', 0),
('5c87725446f35', 'TEST02', 1, 29, '', '', '2019-03-12 10:13:03', 1),
('5c87862f5d05e', 'TEST02', 1, 30, '57', '', '2019-03-12 10:13:43', 1),
('5c87865703dba', 'TEST02', 1, 31, '', '', '2019-03-12 11:35:19', 1),
('5c879a55e8732', 'Test01', 1, 1, 'Initial Revision', 'System', '2019-03-12 11:39:07', 0),
('5c888f5571939', 'TEST02', 1, 1, 'Initial Revision', 'System', '2019-03-13 05:04:47', 0),
('5c89e2085ea5e', 'TEST02', 1, 32, '', 'dil', '2019-03-14 09:59:17', 1),
('5c8a2915971de', 'Test01', 1, 4, '', 'dilww', '2019-03-14 10:13:14', 1),
('5c8b39a3d9e16', 'TEST02', 1, 1, 'Initial Revision', 'System', '2019-03-15 05:35:47', 0);

-- --------------------------------------------------------

--
-- Table structure for table `section2_contactdetails`
--

CREATE TABLE `section2_contactdetails` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `contact_name` varchar(64) DEFAULT NULL,
  `contact_role` varchar(64) DEFAULT NULL,
  `contact_organization` int(1) DEFAULT NULL,
  `contact_email` varchar(64) DEFAULT NULL,
  `contact_phone` varchar(15) DEFAULT NULL,
  `remark` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section2_contactdetails`
--

INSERT INTO `section2_contactdetails` (`row_counter`, `sec_sign`, `contact_name`, `contact_role`, `contact_organization`, `contact_email`, `contact_phone`, `remark`) VALUES
(2, '5c5ab0887a897', 'Test', 'test01', 1, 'test@gmail.com', '123456789', ''),
(3, '5c5ab58a22551', 'TEST02', 'test', 1, 'test02@GMAIL.COM', '123456457567', ''),
(4, '5c5c1c9c4b3b0', 'test01', 'demo', 1, 'test@gmail.com', '984423423', ''),
(5, '5c5c1c9c4b3b0', 'TEST02', 'test', 1, 'test02@GMAIL.COM', '123456457567', ''),
(6, '5c761a6fdf647', 'Baptist', 'lab', 1, 'baptist@gmail.com', '794732702347', ''),
(7, '5c761a6fdf647', 'TEST02', 'test', 1, 'test02@GMAIL.COM', '123456457567', '');

-- --------------------------------------------------------

--
-- Table structure for table `section3_technicaldetails`
--

CREATE TABLE `section3_technicaldetails` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `system_type` varchar(64) DEFAULT NULL,
  `app_role` varchar(32) DEFAULT NULL,
  `app_name` varchar(64) DEFAULT NULL,
  `version` varchar(32) DEFAULT NULL,
  `ip` varchar(32) DEFAULT NULL,
  `hostname` varchar(32) DEFAULT NULL,
  `username` varchar(64) DEFAULT NULL,
  `password` varchar(64) DEFAULT NULL,
  `remark` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `section4_connectivitydetails`
--

CREATE TABLE `section4_connectivitydetails` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `type` int(1) DEFAULT NULL,
  `system_details` varchar(64) DEFAULT NULL,
  `interface_type` varchar(64) DEFAULT NULL,
  `message_event` varchar(64) DEFAULT NULL,
  `interface_direction` int(1) DEFAULT NULL,
  `conn_source` varchar(64) DEFAULT NULL,
  `source_ip` varchar(32) DEFAULT NULL,
  `conn_destination` varchar(64) DEFAULT NULL,
  `destination_ip` varchar(32) DEFAULT NULL,
  `port` varchar(32) DEFAULT NULL,
  `ae_title` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `section4_modalitydetails`
--

CREATE TABLE `section4_modalitydetails` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `vendor` varchar(64) DEFAULT NULL,
  `hostname` varchar(64) DEFAULT NULL,
  `ip` varchar(32) DEFAULT NULL,
  `ae_title` varchar(64) DEFAULT NULL,
  `model` varchar(64) DEFAULT NULL,
  `location` varchar(64) DEFAULT NULL,
  `serial` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `section5_exammodalitytype`
--

CREATE TABLE `section5_exammodalitytype` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `exam_code` varchar(64) DEFAULT NULL,
  `study_type` varchar(64) DEFAULT NULL,
  `modality` varchar(64) DEFAULT NULL,
  `ae_title` varchar(64) DEFAULT NULL,
  `procStepCode` varchar(64) DEFAULT NULL,
  `cptCode` varchar(64) DEFAULT NULL,
  `procStepDesc` varchar(64) DEFAULT NULL,
  `cdrCode` varchar(2048) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `section5_ordercontrolcode`
--

CREATE TABLE `section5_ordercontrolcode` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `message_type` varchar(64) DEFAULT NULL,
  `processing_trigger` varchar(64) DEFAULT NULL,
  `description` varchar(2048) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `section5_ordercontrolstatus`
--

CREATE TABLE `section5_ordercontrolstatus` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `message_type` varchar(64) DEFAULT NULL,
  `processing_trigger` varchar(64) DEFAULT NULL,
  `description` varchar(2048) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `section5_orderstatus`
--

CREATE TABLE `section5_orderstatus` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `message_type` varchar(64) DEFAULT NULL,
  `processing_trigger` varchar(64) DEFAULT NULL,
  `description` varchar(2048) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `section5_patientclass`
--

CREATE TABLE `section5_patientclass` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `source_value` varchar(64) DEFAULT NULL,
  `destination_value` varchar(64) DEFAULT NULL,
  `description` varchar(2048) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `section5_race`
--

CREATE TABLE `section5_race` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `source_value` varchar(64) DEFAULT NULL,
  `destination_value` varchar(64) DEFAULT NULL,
  `description` varchar(2048) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `section6_samplemessages`
--

CREATE TABLE `section6_samplemessages` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `message_type` int(1) DEFAULT NULL,
  `message_content` varchar(2048) DEFAULT NULL,
  `message_source` int(1) DEFAULT NULL,
  `message_from` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `section7_mappings_msh`
--

CREATE TABLE `section7_mappings_msh` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `applications` varchar(64) NOT NULL,
  `site` varchar(64) DEFAULT NULL,
  `msh_1_defaultvalue` varchar(64) DEFAULT NULL,
  `msh_1_newhl7parsing` varchar(64) DEFAULT NULL,
  `msh_1_comment` varchar(64) DEFAULT NULL,
  `msh_2_defaultvalue` varchar(64) DEFAULT NULL,
  `msh_2_newhl7parsing` varchar(64) DEFAULT NULL,
  `msh_2_comment` varchar(64) DEFAULT NULL,
  `msh_3_defaultvalue` varchar(64) DEFAULT NULL,
  `msh_3_newhl7parsing` varchar(64) DEFAULT NULL,
  `msh_3_comment` varchar(64) DEFAULT NULL,
  `msh_4_defaultvalue` varchar(64) DEFAULT NULL,
  `msh_4_newhl7parsing` varchar(64) DEFAULT NULL,
  `msh_4_comment` varchar(64) DEFAULT NULL,
  `msh_5_defaultvalue` varchar(64) DEFAULT NULL,
  `msh_5_newhl7parsing` varchar(64) DEFAULT NULL,
  `msh_5_comment` varchar(64) DEFAULT NULL,
  `msh_6_defaultvalue` varchar(64) DEFAULT NULL,
  `msh_6_newhl7parsing` varchar(64) DEFAULT NULL,
  `msh_6_comment` varchar(64) DEFAULT NULL,
  `msh_7_defaultvalue` varchar(64) DEFAULT NULL,
  `msh_7_newhl7parsing` varchar(64) DEFAULT NULL,
  `msh_7_comment` varchar(64) DEFAULT NULL,
  `msh_9_defaultvalue` varchar(64) DEFAULT NULL,
  `msh_9_newhl7parsing` varchar(64) DEFAULT NULL,
  `msh_9_comment` varchar(64) DEFAULT NULL,
  `msh_9_1_defaultvalue` varchar(64) DEFAULT NULL,
  `msh_9_1_newhl7parsing` varchar(64) DEFAULT NULL,
  `msh_9_1_comment` varchar(64) DEFAULT NULL,
  `msh_9_2_defaultvalue` varchar(64) DEFAULT NULL,
  `msh_9_2_newhl7parsing` varchar(64) DEFAULT NULL,
  `msh_9_2_comment` varchar(64) DEFAULT NULL,
  `msh_10_defaultvalue` varchar(64) DEFAULT NULL,
  `msh_10_newhl7parsing` varchar(64) DEFAULT NULL,
  `msh_10_comment` varchar(64) DEFAULT NULL,
  `msh_11_defaultvalue` varchar(64) DEFAULT NULL,
  `msh_11_newhl7parsing` varchar(64) DEFAULT NULL,
  `msh_11_comment` varchar(64) DEFAULT NULL,
  `msh_12_defaultvalue` varchar(64) DEFAULT NULL,
  `msh_12_newhl7parsing` varchar(64) DEFAULT NULL,
  `msh_12_comment` varchar(64) DEFAULT NULL,
  `msh_18_defaultvalue` varchar(64) DEFAULT NULL,
  `msh_18_newhl7parsing` varchar(64) DEFAULT NULL,
  `msh_18_comment` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section7_mappings_msh`
--

INSERT INTO `section7_mappings_msh` (`row_counter`, `sec_sign`, `applications`, `site`, `msh_1_defaultvalue`, `msh_1_newhl7parsing`, `msh_1_comment`, `msh_2_defaultvalue`, `msh_2_newhl7parsing`, `msh_2_comment`, `msh_3_defaultvalue`, `msh_3_newhl7parsing`, `msh_3_comment`, `msh_4_defaultvalue`, `msh_4_newhl7parsing`, `msh_4_comment`, `msh_5_defaultvalue`, `msh_5_newhl7parsing`, `msh_5_comment`, `msh_6_defaultvalue`, `msh_6_newhl7parsing`, `msh_6_comment`, `msh_7_defaultvalue`, `msh_7_newhl7parsing`, `msh_7_comment`, `msh_9_defaultvalue`, `msh_9_newhl7parsing`, `msh_9_comment`, `msh_9_1_defaultvalue`, `msh_9_1_newhl7parsing`, `msh_9_1_comment`, `msh_9_2_defaultvalue`, `msh_9_2_newhl7parsing`, `msh_9_2_comment`, `msh_10_defaultvalue`, `msh_10_newhl7parsing`, `msh_10_comment`, `msh_11_defaultvalue`, `msh_11_newhl7parsing`, `msh_11_comment`, `msh_12_defaultvalue`, `msh_12_newhl7parsing`, `msh_12_comment`, `msh_18_defaultvalue`, `msh_18_newhl7parsing`, `msh_18_comment`) VALUES
(1, '5c629b6a3ed89', '', '1', '564', '5', '46', '476', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(2, '5c62a19a2bf29', '', '1', '4234', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(3, '5c6511abb39c8', '', '1', '56', '7', '57', '7', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(4, '5c6ceed116d3f', '', '1', '668', '6', '8', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(5, '5c6cf224d4488', 'ibe', '1', '76', '768', '8', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(6, '5c761fdd445bb', 'ibe', '1', '66788', '78', '7', '8', '86', '66', '78', '6', '6', '76', '786', '786', '78678', '678', '68', '678', '68778', '7', '787', '5', '44', '456', '45', '4', '4', '64', '56', '564', '564', '5645', '456', '456', '44', '56456', '56', '4', '56', '456', '46', '46', '546', '654');

-- --------------------------------------------------------

--
-- Table structure for table `section7_mappings_obr`
--

CREATE TABLE `section7_mappings_obr` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `applications` varchar(64) NOT NULL,
  `site` varchar(64) DEFAULT NULL,
  `obr_1_defaultvalue` varchar(64) DEFAULT NULL,
  `obr_1_newhl7parsing` varchar(64) DEFAULT NULL,
  `obr_1_comment` varchar(64) DEFAULT NULL,
  `obr_3_defaultvalue` varchar(64) DEFAULT NULL,
  `obr_3_newhl7parsing` varchar(64) DEFAULT NULL,
  `obr_3_comment` varchar(64) DEFAULT NULL,
  `obr_4_defaultvalue` varchar(64) DEFAULT NULL,
  `obr_4_newhl7parsing` varchar(64) DEFAULT NULL,
  `obr_4_comment` varchar(64) DEFAULT NULL,
  `obr_4_2_defaultvalue` varchar(64) DEFAULT NULL,
  `obr_4_2_newhl7parsing` varchar(64) DEFAULT NULL,
  `obr_4_2_comment` varchar(64) DEFAULT NULL,
  `obr_4_3_defaultvalue` varchar(64) DEFAULT NULL,
  `obr_4_3_newhl7parsing` varchar(64) DEFAULT NULL,
  `obr_4_3_comment` varchar(64) DEFAULT NULL,
  `obr_7_defaultvalue` varchar(64) DEFAULT NULL,
  `obr_7_newhl7parsing` varchar(64) DEFAULT NULL,
  `obr_7_comment` varchar(64) DEFAULT NULL,
  `obr_8_defaultvalue` varchar(64) DEFAULT NULL,
  `obr_8_newhl7parsing` varchar(64) DEFAULT NULL,
  `obr_8_comment` varchar(64) DEFAULT NULL,
  `obr_16_defaultvalue` varchar(64) DEFAULT NULL,
  `obr_16_newhl7parsing` varchar(64) DEFAULT NULL,
  `obr_16_newhl7parsingcomment` varchar(64) DEFAULT NULL,
  `obr_18_defaultvalue` varchar(64) DEFAULT NULL,
  `obr_18_newhl7parsing` varchar(64) DEFAULT NULL,
  `obr_18_comment` varchar(64) DEFAULT NULL,
  `obr_20_defaultvalue` varchar(64) DEFAULT NULL,
  `obr_20_newhl7parsing` varchar(64) DEFAULT NULL,
  `obr_20_comment` varchar(64) DEFAULT NULL,
  `obr_22_defaultvalue` varchar(64) DEFAULT NULL,
  `obr_22_newhl7parsing` varchar(64) DEFAULT NULL,
  `obr_22_comment` varchar(64) DEFAULT NULL,
  `obr_24_defaultvalue` varchar(64) DEFAULT NULL,
  `obr_24_newhl7parsing` varchar(64) DEFAULT NULL,
  `obr_24_comment` varchar(64) DEFAULT NULL,
  `obr_25_defaultvalue` varchar(64) DEFAULT NULL,
  `obr_25_newhl7parsing` varchar(64) DEFAULT NULL,
  `obr_25_comment` varchar(64) DEFAULT NULL,
  `obr_31_defaultvalue` varchar(64) DEFAULT NULL,
  `obr_31_newhl7parsing` varchar(64) DEFAULT NULL,
  `obr_31_comment` varchar(64) DEFAULT NULL,
  `obr_32_defaultvalue` varchar(64) DEFAULT NULL,
  `obr_32_newhl7parsing` varchar(64) DEFAULT NULL,
  `obr_32_comment` varchar(64) DEFAULT NULL,
  `obr_32_2_defaultvalue` varchar(64) DEFAULT NULL,
  `obr_32_2_newhl7parsing` varchar(64) DEFAULT NULL,
  `obr_32_2_comment` varchar(64) DEFAULT NULL,
  `obr_32_3_defaultvalue` varchar(64) DEFAULT NULL,
  `obr_32_3_newhl7parsing` varchar(64) DEFAULT NULL,
  `obr_32_3_comment` varchar(64) DEFAULT NULL,
  `obr_32_4_defaultvalue` varchar(64) DEFAULT NULL,
  `obr_32_4_newhl7parsing` varchar(64) DEFAULT NULL,
  `obr_32_4_comment` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `section7_mappings_obx`
--

CREATE TABLE `section7_mappings_obx` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `applications` varchar(64) NOT NULL,
  `site` varchar(64) DEFAULT NULL,
  `obx_1_defaultvalue` varchar(64) DEFAULT NULL,
  `obx_1_newhl7parsing` varchar(64) DEFAULT NULL,
  `obx_1_comment` varchar(64) DEFAULT NULL,
  `obx_2_defaultvalue` varchar(64) DEFAULT NULL,
  `obx_2_newhl7parsing` varchar(64) DEFAULT NULL,
  `obx_2_comment` varchar(64) DEFAULT NULL,
  `obx_3_defaultvalue` varchar(64) DEFAULT NULL,
  `obx_3_newhl7parsing` varchar(64) DEFAULT NULL,
  `obx_3_comment` varchar(64) DEFAULT NULL,
  `obx_4_defaultvalue` varchar(64) DEFAULT NULL,
  `obx_4_newhl7parsing` varchar(64) DEFAULT NULL,
  `obx_4_comment` varchar(64) DEFAULT NULL,
  `obx_5_defaultvalue` varchar(64) DEFAULT NULL,
  `obx_5_newhl7parsing` varchar(64) DEFAULT NULL,
  `obx_5_comment` varchar(64) DEFAULT NULL,
  `obx_11_defaultvalue` varchar(64) DEFAULT NULL,
  `obx_11_newhl7parsing` varchar(64) DEFAULT NULL,
  `obx_11_comment` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `section7_mappings_orc`
--

CREATE TABLE `section7_mappings_orc` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `applications` varchar(64) NOT NULL,
  `site` varchar(64) DEFAULT NULL,
  `orc_1_defaultvalue` varchar(64) DEFAULT NULL,
  `orc_1_newhl7parsing` varchar(64) DEFAULT NULL,
  `orc_1_comment` varchar(64) DEFAULT NULL,
  `orc_2_defaultvalue` varchar(64) DEFAULT NULL,
  `orc_2_newhl7parsing` varchar(64) DEFAULT NULL,
  `orc_2_comment` varchar(64) DEFAULT NULL,
  `orc_3_defaultvalue` varchar(64) DEFAULT NULL,
  `orc_3_newhl7parsing` varchar(64) DEFAULT NULL,
  `orc_3_comment` varchar(64) DEFAULT NULL,
  `orc_5_defaultvalue` varchar(64) DEFAULT NULL,
  `orc_5_newhl7parsing` varchar(64) DEFAULT NULL,
  `orc_5_comment` varchar(64) DEFAULT NULL,
  `orc_9_defaultvalue` varchar(64) DEFAULT NULL,
  `orc_9_newhl7parsing` varchar(64) DEFAULT NULL,
  `orc_9_comment` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `section7_mappings_pid`
--

CREATE TABLE `section7_mappings_pid` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `applications` varchar(64) NOT NULL,
  `site` varchar(64) DEFAULT NULL,
  `pid_3_defaultvalue` varchar(64) DEFAULT NULL,
  `pid_3_newhl7parsing` varchar(64) DEFAULT NULL,
  `pid_3_comment` varchar(64) DEFAULT NULL,
  `pid_3_1_defaultvalue` varchar(64) DEFAULT NULL,
  `pid_3_1_newhl7parsing` varchar(64) DEFAULT NULL,
  `pid_3_1_comment` varchar(64) DEFAULT NULL,
  `pid_3_4_defaultvalue` varchar(64) DEFAULT NULL,
  `pid_3_4_newhl7parsing` varchar(64) DEFAULT NULL,
  `pid_3_4_comment` varchar(64) DEFAULT NULL,
  `pid_5_defaultvalue` varchar(64) DEFAULT NULL,
  `pid_5_newhl7parsing` varchar(64) DEFAULT NULL,
  `pid_5_comment` varchar(64) DEFAULT NULL,
  `pid_5_1_defaultvalue` varchar(64) DEFAULT NULL,
  `pid_5_1_newhl7parsing` varchar(64) DEFAULT NULL,
  `pid_5_1_comment` varchar(64) DEFAULT NULL,
  `pid_5_2_defaultvalue` varchar(64) DEFAULT NULL,
  `pid_5_2_newhl7parsing` varchar(64) DEFAULT NULL,
  `pid_5_2_comment` varchar(64) DEFAULT NULL,
  `pid_5_3_defaultvalue` varchar(64) DEFAULT NULL,
  `pid_5_3_newhl7parsing` varchar(64) DEFAULT NULL,
  `pid_5_3_comment` varchar(64) DEFAULT NULL,
  `pid_7_defaultvalue` varchar(64) DEFAULT NULL,
  `pid_7_newhl7parsing` varchar(64) DEFAULT NULL,
  `pid_7_comment` varchar(64) DEFAULT NULL,
  `pid_8_defaultvalue` varchar(64) DEFAULT NULL,
  `pid_8_newhl7parsing` varchar(64) DEFAULT NULL,
  `pid_8_comment` varchar(64) DEFAULT NULL,
  `pid_10_defaultvalue` varchar(64) DEFAULT NULL,
  `pid_10_newhl7parsing` varchar(64) DEFAULT NULL,
  `pid_10_comment` varchar(64) DEFAULT NULL,
  `pid_11_defaultvalue` varchar(64) DEFAULT NULL,
  `pid_11_newhl7parsing` varchar(64) DEFAULT NULL,
  `pid_11_comment` varchar(64) DEFAULT NULL,
  `pid_11_1_defaultvalue` varchar(64) DEFAULT NULL,
  `pid_11_1_newhl7parsing` varchar(64) DEFAULT NULL,
  `pid_11_1_comment` varchar(64) DEFAULT NULL,
  `pid_11_2_defaultvalue` varchar(64) DEFAULT NULL,
  `pid_11_2_newhl7parsing` varchar(64) DEFAULT NULL,
  `pid_11_2_comment` varchar(64) DEFAULT NULL,
  `pid_11_3_defaultvalue` varchar(64) DEFAULT NULL,
  `pid_11_3_newhl7parsing` varchar(64) DEFAULT NULL,
  `pid_11_3_comment` varchar(64) DEFAULT NULL,
  `pid_11_4_defaultvalue` varchar(64) DEFAULT NULL,
  `pid_11_4_newhl7parsing` varchar(64) DEFAULT NULL,
  `pid_11_4_comment` varchar(64) DEFAULT NULL,
  `pid_11_5_defaultvalue` varchar(64) DEFAULT NULL,
  `pid_11_5_newhl7parsing` varchar(64) DEFAULT NULL,
  `pid_11_5_comment` varchar(64) DEFAULT NULL,
  `pid_13_defaultvalue` varchar(64) DEFAULT NULL,
  `pid_13_newhl7parsing` varchar(64) DEFAULT NULL,
  `pid_13_comment` varchar(64) DEFAULT NULL,
  `pid_14_defaultvalue` varchar(64) DEFAULT NULL,
  `pid_14_newhl7parsing` varchar(64) DEFAULT NULL,
  `pid_14_comment` varchar(64) DEFAULT NULL,
  `pid_18_defaultvalue` varchar(64) DEFAULT NULL,
  `pid_18_newhl7parsing` varchar(64) DEFAULT NULL,
  `pid_18_comment` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section7_mappings_pid`
--

INSERT INTO `section7_mappings_pid` (`row_counter`, `sec_sign`, `applications`, `site`, `pid_3_defaultvalue`, `pid_3_newhl7parsing`, `pid_3_comment`, `pid_3_1_defaultvalue`, `pid_3_1_newhl7parsing`, `pid_3_1_comment`, `pid_3_4_defaultvalue`, `pid_3_4_newhl7parsing`, `pid_3_4_comment`, `pid_5_defaultvalue`, `pid_5_newhl7parsing`, `pid_5_comment`, `pid_5_1_defaultvalue`, `pid_5_1_newhl7parsing`, `pid_5_1_comment`, `pid_5_2_defaultvalue`, `pid_5_2_newhl7parsing`, `pid_5_2_comment`, `pid_5_3_defaultvalue`, `pid_5_3_newhl7parsing`, `pid_5_3_comment`, `pid_7_defaultvalue`, `pid_7_newhl7parsing`, `pid_7_comment`, `pid_8_defaultvalue`, `pid_8_newhl7parsing`, `pid_8_comment`, `pid_10_defaultvalue`, `pid_10_newhl7parsing`, `pid_10_comment`, `pid_11_defaultvalue`, `pid_11_newhl7parsing`, `pid_11_comment`, `pid_11_1_defaultvalue`, `pid_11_1_newhl7parsing`, `pid_11_1_comment`, `pid_11_2_defaultvalue`, `pid_11_2_newhl7parsing`, `pid_11_2_comment`, `pid_11_3_defaultvalue`, `pid_11_3_newhl7parsing`, `pid_11_3_comment`, `pid_11_4_defaultvalue`, `pid_11_4_newhl7parsing`, `pid_11_4_comment`, `pid_11_5_defaultvalue`, `pid_11_5_newhl7parsing`, `pid_11_5_comment`, `pid_13_defaultvalue`, `pid_13_newhl7parsing`, `pid_13_comment`, `pid_14_defaultvalue`, `pid_14_newhl7parsing`, `pid_14_comment`, `pid_18_defaultvalue`, `pid_18_newhl7parsing`, `pid_18_comment`) VALUES
(1, '2', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `section7_mappings_pv1`
--

CREATE TABLE `section7_mappings_pv1` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `applications` varchar(64) NOT NULL,
  `site` varchar(64) DEFAULT NULL,
  `pv1_2_defaultvalue` varchar(64) DEFAULT NULL,
  `pv1_2_newhl7parsing` varchar(64) DEFAULT NULL,
  `pv1_2_comment` varchar(64) DEFAULT NULL,
  `pv1_3_defaultvalue` varchar(64) DEFAULT NULL,
  `pv1_3_newhl7parsing` varchar(64) DEFAULT NULL,
  `pv1_3_comment` varchar(64) DEFAULT NULL,
  `pv1_39_defaultvalue` varchar(64) DEFAULT NULL,
  `pv1_39_newhl7parsing` varchar(64) DEFAULT NULL,
  `pv1_39_comment` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section7_mappings_pv1`
--

INSERT INTO `section7_mappings_pv1` (`row_counter`, `sec_sign`, `applications`, `site`, `pv1_2_defaultvalue`, `pv1_2_newhl7parsing`, `pv1_2_comment`, `pv1_3_defaultvalue`, `pv1_3_newhl7parsing`, `pv1_3_comment`, `pv1_39_defaultvalue`, `pv1_39_newhl7parsing`, `pv1_39_comment`) VALUES
(1, '5c629f305e58f', '', '1', '5', '7', '567', '76', '5765', '765', '7657', '765', '765'),
(3, '5c62a19a2bf29', '', '1', 'dweffdwef', '', '', '', '', '', '', '', ''),
(4, '5c6ceed116d3f', '', '1', '76', '8', '668', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `section7_mappings_zds`
--

CREATE TABLE `section7_mappings_zds` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `applications` varchar(64) NOT NULL,
  `site` varchar(64) DEFAULT NULL,
  `zds_1_defaultvalue` varchar(64) DEFAULT NULL,
  `zds_1_newhl7parsing` varchar(64) DEFAULT NULL,
  `zds_1_comment` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section7_mappings_zds`
--

INSERT INTO `section7_mappings_zds` (`row_counter`, `sec_sign`, `applications`, `site`, `zds_1_defaultvalue`, `zds_1_newhl7parsing`, `zds_1_comment`) VALUES
(2, '5c6cf224d4488', 'ispacs', '1', '76', '67', '68'),
(4, '5c6cf52ba2856', 'xper', '1', '687', '68', '6');

-- --------------------------------------------------------

--
-- Table structure for table `section8_customizations`
--

CREATE TABLE `section8_customizations` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `site` varchar(64) DEFAULT NULL,
  `description` varchar(256) DEFAULT NULL,
  `details` varchar(256) DEFAULT NULL,
  `solution` varchar(256) DEFAULT NULL,
  `screenshot` varchar(128) DEFAULT NULL,
  `remark` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `section10_testplan_adt`
--

CREATE TABLE `section10_testplan_adt` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `issue_num` varchar(32) DEFAULT NULL,
  `date_time` varchar(32) DEFAULT NULL,
  `issue_by` varchar(32) DEFAULT NULL,
  `priority` int(1) DEFAULT NULL,
  `issue_des` varchar(32) DEFAULT NULL,
  `assign_to` varchar(32) DEFAULT NULL,
  `comments` varchar(32) DEFAULT NULL,
  `resolved_by` varchar(32) DEFAULT NULL,
  `closed_date` varchar(32) DEFAULT NULL,
  `status` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section10_testplan_adt`
--

INSERT INTO `section10_testplan_adt` (`row_counter`, `sec_sign`, `issue_num`, `date_time`, `issue_by`, `priority`, `issue_des`, `assign_to`, `comments`, `resolved_by`, `closed_date`, `status`) VALUES
(9, '5c87865703dba', '1678', '66', 'hjjhjl', 1, 'lljl', 'jlkl', 'lkjljklj', 'lkljlkjl', '878', 'jkkn'),
(10, '5c879a55e8732', '1979', '78998', '', 0, '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `section10_testplan_dicom_createreport`
--

CREATE TABLE `section10_testplan_dicom_createreport` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `create_report_pass` varchar(32) DEFAULT NULL,
  `create_report_comments` varchar(64) DEFAULT NULL,
  `finalize_study_pass` varchar(32) DEFAULT NULL,
  `finalize_study_comments` varchar(64) DEFAULT NULL,
  `verify_status_pass` varchar(32) DEFAULT NULL,
  `verify_status_comments` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section10_testplan_dicom_createreport`
--

INSERT INTO `section10_testplan_dicom_createreport` (`row_counter`, `sec_sign`, `create_report_pass`, `create_report_comments`, `finalize_study_pass`, `finalize_study_comments`, `verify_status_pass`, `verify_status_comments`) VALUES
(6, '5c888f5571939', 'd', 'd', 'dg', 'dd', 'verify_status_pass', 'gf');

-- --------------------------------------------------------

--
-- Table structure for table `section10_testplan_dicom_dw_createreport`
--

CREATE TABLE `section10_testplan_dicom_dw_createreport` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `create_report_pass` varchar(32) DEFAULT NULL,
  `create_report_comments` varchar(64) DEFAULT NULL,
  `finalize_study_pass` varchar(32) DEFAULT NULL,
  `finalize_study_comments` varchar(64) DEFAULT NULL,
  `verify_status_pass` varchar(32) DEFAULT NULL,
  `verify_status_comments` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section10_testplan_dicom_dw_createreport`
--

INSERT INTO `section10_testplan_dicom_dw_createreport` (`row_counter`, `sec_sign`, `create_report_pass`, `create_report_comments`, `finalize_study_pass`, `finalize_study_comments`, `verify_status_pass`, `verify_status_comments`) VALUES
(5, '5c888f5571939', 'd', 'd', 'fg', 'dgd', 'g', 'fgdg');

-- --------------------------------------------------------

--
-- Table structure for table `section10_testplan_dicom_dw_images`
--

CREATE TABLE `section10_testplan_dicom_dw_images` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `enter_mrn_pass` varchar(32) DEFAULT NULL,
  `enter_mrn_comments` varchar(64) DEFAULT NULL,
  `study_pass` varchar(32) DEFAULT NULL,
  `study_comments` varchar(64) DEFAULT NULL,
  `transfer_images_pass` varchar(32) DEFAULT NULL,
  `transfer_images_comments` varchar(64) DEFAULT NULL,
  `verify_status_pass` varchar(32) DEFAULT NULL,
  `verify_status_comments` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section10_testplan_dicom_dw_images`
--

INSERT INTO `section10_testplan_dicom_dw_images` (`row_counter`, `sec_sign`, `enter_mrn_pass`, `enter_mrn_comments`, `study_pass`, `study_comments`, `transfer_images_pass`, `transfer_images_comments`, `verify_status_pass`, `verify_status_comments`) VALUES
(1, '5c888f5571939', 'dfg', 'd', 'fgd', 'fgdf', 'transfer_images_pass', 'd', 'fgd', 'gf');

-- --------------------------------------------------------

--
-- Table structure for table `section10_testplan_dicom_dw_reconcile_study`
--

CREATE TABLE `section10_testplan_dicom_dw_reconcile_study` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `locate_order_pass` varchar(32) DEFAULT NULL,
  `locate_order_comments` varchar(64) DEFAULT NULL,
  `merge_study_pass` varchar(32) DEFAULT NULL,
  `merge_study_comments` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section10_testplan_dicom_dw_reconcile_study`
--

INSERT INTO `section10_testplan_dicom_dw_reconcile_study` (`row_counter`, `sec_sign`, `locate_order_pass`, `locate_order_comments`, `merge_study_pass`, `merge_study_comments`) VALUES
(6, '5c888f5571939', 'g', 'dfgd', 'g', 'dg');

-- --------------------------------------------------------

--
-- Table structure for table `section10_testplan_dicom_dw_resultmsg`
--

CREATE TABLE `section10_testplan_dicom_dw_resultmsg` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `createoru_pass` varchar(32) DEFAULT NULL,
  `createoru_comments` varchar(64) DEFAULT NULL,
  `sendoru_pass` varchar(32) DEFAULT NULL,
  `sendoru_comments` varchar(64) DEFAULT NULL,
  `verify_status_pass` varchar(32) DEFAULT NULL,
  `verify_status_comments` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section10_testplan_dicom_dw_resultmsg`
--

INSERT INTO `section10_testplan_dicom_dw_resultmsg` (`row_counter`, `sec_sign`, `createoru_pass`, `createoru_comments`, `sendoru_pass`, `sendoru_comments`, `verify_status_pass`, `verify_status_comments`) VALUES
(6, '5c888f5571939', 'd', 'gdg', 'fdgf', 'd', 'verify_status_pass', 'gf');

-- --------------------------------------------------------

--
-- Table structure for table `section10_testplan_dicom_imagetransfer`
--

CREATE TABLE `section10_testplan_dicom_imagetransfer` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `select_patient_pass` varchar(32) DEFAULT NULL,
  `select_patient_comments` varchar(64) DEFAULT NULL,
  `study_pass` varchar(32) DEFAULT NULL,
  `study_comments` varchar(64) DEFAULT NULL,
  `transfer_images_pass` varchar(32) DEFAULT NULL,
  `transfer_images_comments` varchar(64) DEFAULT NULL,
  `verify_status_pass` varchar(32) DEFAULT NULL,
  `verify_status_comments` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `section10_testplan_dicom_resultmsg`
--

CREATE TABLE `section10_testplan_dicom_resultmsg` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `createoru_pass` varchar(32) DEFAULT NULL,
  `createoru_comments` varchar(64) DEFAULT NULL,
  `sendoru_pass` varchar(32) DEFAULT NULL,
  `sendoru_comments` varchar(64) DEFAULT NULL,
  `verify_status_pass` varchar(32) DEFAULT NULL,
  `verify_status_comments` varchar(64) DEFAULT NULL,
  `ammend_report_pass` varchar(32) DEFAULT NULL,
  `ammend_report_comments` varchar(64) DEFAULT NULL,
  `finalize_report_pass` varchar(32) DEFAULT NULL,
  `finalize_report_comments` varchar(64) DEFAULT NULL,
  `verify_result_pass` varchar(32) DEFAULT NULL,
  `verify_result_comments` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section10_testplan_dicom_resultmsg`
--

INSERT INTO `section10_testplan_dicom_resultmsg` (`row_counter`, `sec_sign`, `createoru_pass`, `createoru_comments`, `sendoru_pass`, `sendoru_comments`, `verify_status_pass`, `verify_status_comments`, `ammend_report_pass`, `ammend_report_comments`, `finalize_report_pass`, `finalize_report_comments`, `verify_result_pass`, `verify_result_comments`) VALUES
(2, '5c888f5571939', 'd', 'gdg', 'fdgf', 'd', 'fgd', 'gf', 'd', '', 'fg', 'dgd', 'g', 'fgdg');

-- --------------------------------------------------------

--
-- Table structure for table `section10_testplan_dicom_usmodality`
--

CREATE TABLE `section10_testplan_dicom_usmodality` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `initiate_query_pass` varchar(32) DEFAULT NULL,
  `initiate_query_comments` varchar(64) DEFAULT NULL,
  `locate_order_pass` varchar(32) DEFAULT NULL,
  `locate_order_comments` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section10_testplan_dicom_usmodality`
--

INSERT INTO `section10_testplan_dicom_usmodality` (`row_counter`, `sec_sign`, `initiate_query_pass`, `initiate_query_comments`, `locate_order_pass`, `locate_order_comments`) VALUES
(3, '5c888f5571939', 'd', 'fd', 'g', 'dfgd'),
(4, '5c888f5571939', 'd', 'fd', 'g', 'dfgd');

-- --------------------------------------------------------

--
-- Table structure for table `section10_testplan_dicom_worklist_createorder`
--

CREATE TABLE `section10_testplan_dicom_worklist_createorder` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `create_order_pass` varchar(32) DEFAULT NULL,
  `create_order_comments` varchar(64) DEFAULT NULL,
  `orm_pass` varchar(32) DEFAULT NULL,
  `orm_comments` varchar(64) DEFAULT NULL,
  `modality_query_pass` varchar(32) DEFAULT NULL,
  `modality_query_comments` varchar(64) DEFAULT NULL,
  `suid_pass` varchar(32) DEFAULT NULL,
  `suid_comments` varchar(64) DEFAULT NULL,
  `update_patient_pass` varchar(32) DEFAULT NULL,
  `update_patient_comments` varchar(64) DEFAULT NULL,
  `neworder_pass` varchar(32) DEFAULT NULL,
  `neworder_comments` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section10_testplan_dicom_worklist_createorder`
--

INSERT INTO `section10_testplan_dicom_worklist_createorder` (`row_counter`, `sec_sign`, `create_order_pass`, `create_order_comments`, `orm_pass`, `orm_comments`, `modality_query_pass`, `modality_query_comments`, `suid_pass`, `suid_comments`, `update_patient_pass`, `update_patient_comments`, `neworder_pass`, `neworder_comments`) VALUES
(3, '5c888f5571939', 'fgd', 'd', 'ggfd', 'd', 'gd', 'gd', 'gdf', 'd', 'gd', 'fgdfg', 'neworder_pass', 'dfgd');

-- --------------------------------------------------------

--
-- Table structure for table `section10_testplan_orders_cancelorder`
--

CREATE TABLE `section10_testplan_orders_cancelorder` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `orm_ca_cancel_test_date` varchar(64) DEFAULT NULL,
  `orm_ca_cancel_pass_fail` varchar(64) DEFAULT NULL,
  `orm_ca_cancel_expected_value` varchar(64) DEFAULT NULL,
  `orm_ca_cancel_actual_value` varchar(64) DEFAULT NULL,
  `orm_ca_cancel_comments` varchar(64) DEFAULT NULL,
  `orm_ca_cancel_signoff` varchar(64) DEFAULT NULL,
  `orm_oc_cancel_test_date` varchar(64) DEFAULT NULL,
  `orm_oc_cancel_pass_fail` varchar(64) DEFAULT NULL,
  `orm_oc_cancel_expected_value` varchar(64) DEFAULT NULL,
  `orm_oc_cancel_actual_value` varchar(64) DEFAULT NULL,
  `orm_oc_cancel_comments` varchar(64) DEFAULT NULL,
  `orm_oc_cancel_signoff` varchar(64) DEFAULT NULL,
  `orm_dc_discontinue_test_date` varchar(64) DEFAULT NULL,
  `orm_dc_discontinue_pass_fail` varchar(64) DEFAULT NULL,
  `orm_dc_discontinue_expected_vlaue` varchar(64) DEFAULT NULL,
  `orm_dc_discontinue_actual_value` varchar(64) DEFAULT NULL,
  `orm_dc_discontinue_comments` varchar(64) DEFAULT NULL,
  `orm_dc_discontinue_signoff` varchar(64) DEFAULT NULL,
  `orm_od_discontinue_test_date` varchar(64) DEFAULT NULL,
  `orm_od_discontinue_pass_fail` varchar(64) DEFAULT NULL,
  `orm_od_discontinue_expected_value` varchar(64) DEFAULT NULL,
  `orm_od_discontinue_actual_value` varchar(64) DEFAULT NULL,
  `orm_od_discontinue_comments` varchar(64) DEFAULT NULL,
  `orm_od_discontinue_signoff` varchar(64) DEFAULT NULL,
  `orm_ca_future_cancel_test_date` varchar(64) DEFAULT NULL,
  `orm_ca_future_cancel_pass_fail` varchar(64) DEFAULT NULL,
  `orm_ca_future_cancel_expected_value` varchar(64) DEFAULT NULL,
  `orm_ca_future_cancel_actual_value` varchar(64) DEFAULT NULL,
  `orm_ca_future_cancel_comments` varchar(64) DEFAULT NULL,
  `orm_ca_future_cancel_signoff` varchar(64) DEFAULT NULL,
  `orm_dc_disc_future_test_date` varchar(64) DEFAULT NULL,
  `orm_dc_disc_future_pass_fail` varchar(64) DEFAULT NULL,
  `orm_dc_disc_future_expected_value` varchar(64) DEFAULT NULL,
  `orm_dc_disc_future_actual_value` varchar(64) DEFAULT NULL,
  `orm_dc_disc_future_comments` varchar(64) DEFAULT NULL,
  `orm_dc_disc_future_signoff` varchar(64) DEFAULT NULL,
  `orm_od_disc_future_test_date` varchar(64) DEFAULT NULL,
  `orm_od_disc_future_pass_fail` varchar(64) DEFAULT NULL,
  `orm_od_disc_future_expected_value` varchar(64) DEFAULT NULL,
  `orm_od_disc_future_actual_value` varchar(64) DEFAULT NULL,
  `orm_od_disc_future_comments` varchar(64) DEFAULT NULL,
  `orm_od_disc_future_signoff` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `section10_testplan_orders_neworder`
--

CREATE TABLE `section10_testplan_orders_neworder` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `orm_new_test_date` varchar(64) DEFAULT NULL,
  `orm_new_pass_fail` varchar(64) DEFAULT NULL,
  `orm_new_expected_value` varchar(64) DEFAULT NULL,
  `orm_new_actual_value` varchar(64) DEFAULT NULL,
  `orm_new_comments` varchar(64) DEFAULT NULL,
  `orm_new_signoff` varchar(64) DEFAULT NULL,
  `orm_future_test_date` varchar(64) DEFAULT NULL,
  `orm_future_pass_fail` varchar(64) DEFAULT NULL,
  `orm_future_expected_vlaue` varchar(64) DEFAULT NULL,
  `orm_future_actual_value` varchar(64) DEFAULT NULL,
  `orm_future_comments` varchar(64) DEFAULT NULL,
  `orm_future_signoff` varchar(64) DEFAULT NULL,
  `orm_repeat_test_date` varchar(64) DEFAULT NULL,
  `orm_repeat_pass_fail` varchar(64) DEFAULT NULL,
  `orm_repeat_expected_value` varchar(64) DEFAULT NULL,
  `orm_repeat_actual_value` varchar(64) DEFAULT NULL,
  `orm_repeat_comments` varchar(64) DEFAULT NULL,
  `orm_repeat_signoff` varchar(64) DEFAULT NULL,
  `orm_recr_test_date` varchar(64) DEFAULT NULL,
  `orm_recr_pass_fail` varchar(64) DEFAULT NULL,
  `orm_recr_expected_value` varchar(64) DEFAULT NULL,
  `orm_recr_actual_value` varchar(64) DEFAULT NULL,
  `orm_recr_comments` varchar(64) DEFAULT NULL,
  `orm_recr_signoff` varchar(64) DEFAULT NULL,
  `orm_noncardio_test_date` varchar(64) DEFAULT NULL,
  `orm_noncardio_pass_fail` varchar(64) DEFAULT NULL,
  `orm_noncardio_expected_value` varchar(64) DEFAULT NULL,
  `orm_noncardio_actual_value` varchar(64) DEFAULT NULL,
  `orm_noncardio_comments` varchar(64) DEFAULT NULL,
  `orm_noncardio_signoff` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section10_testplan_orders_neworder`
--

INSERT INTO `section10_testplan_orders_neworder` (`row_counter`, `sec_sign`, `orm_new_test_date`, `orm_new_pass_fail`, `orm_new_expected_value`, `orm_new_actual_value`, `orm_new_comments`, `orm_new_signoff`, `orm_future_test_date`, `orm_future_pass_fail`, `orm_future_expected_vlaue`, `orm_future_actual_value`, `orm_future_comments`, `orm_future_signoff`, `orm_repeat_test_date`, `orm_repeat_pass_fail`, `orm_repeat_expected_value`, `orm_repeat_actual_value`, `orm_repeat_comments`, `orm_repeat_signoff`, `orm_recr_test_date`, `orm_recr_pass_fail`, `orm_recr_expected_value`, `orm_recr_actual_value`, `orm_recr_comments`, `orm_recr_signoff`, `orm_noncardio_test_date`, `orm_noncardio_pass_fail`, `orm_noncardio_expected_value`, `orm_noncardio_actual_value`, `orm_noncardio_comments`, `orm_noncardio_signoff`) VALUES
(4, '5c879a55e8732', 'kjhk', 'kljkl', '', '', ' ', '', '', '', '', '', ' ', '', '', '', '', '', '', '', '', '', '', '', ' ', '', '', '', '', '', ' ', ''),
(5, '5c888f5571939', 'gjjgjh', '', '', '', ' ', '', '', '', '', '', ' ', '', '', '', '', '', '', '', '', '', '', '', ' ', '', '', '', '', '', ' ', '');

-- --------------------------------------------------------

--
-- Table structure for table `section10_testplan_orders_status`
--

CREATE TABLE `section10_testplan_orders_status` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `orm_sc_pc_test_date` varchar(64) DEFAULT NULL,
  `orm_sc_pc_pass_fail` varchar(64) DEFAULT NULL,
  `orm_sc_pc_expected_value` varchar(64) DEFAULT NULL,
  `orm_sc_pc_actual_value` varchar(64) DEFAULT NULL,
  `orm_sc_pc_comments` varchar(64) DEFAULT NULL,
  `orm_sc_pc_signoff` varchar(64) DEFAULT NULL,
  `orm_sc_sdc_test_date` varchar(64) DEFAULT NULL,
  `orm_sc_sdc_pass_fail` varchar(64) DEFAULT NULL,
  `orm_sc_sdc_expected_value` varchar(64) DEFAULT NULL,
  `orm_sc_sdc_actual_value` varchar(64) DEFAULT NULL,
  `orm_sc_sdc_comments` varchar(64) DEFAULT NULL,
  `orm_sc_sdc_signoff` varchar(64) DEFAULT NULL,
  `orm_sc_ip_test_date` varchar(64) DEFAULT NULL,
  `orm_sc_ip_pass_fail` varchar(64) DEFAULT NULL,
  `orm_sc_ip_expected_value` varchar(64) DEFAULT NULL,
  `orm_sc_ip_actual_value` varchar(64) DEFAULT NULL,
  `orm_sc_ip_comments` varchar(64) DEFAULT NULL,
  `orm_sc_ip_signoff` varchar(64) DEFAULT NULL,
  `orm_sc_ca_test_date` varchar(64) DEFAULT NULL,
  `orm_sc_ca_pass_fail` varchar(64) DEFAULT NULL,
  `orm_sc_ca_expected_value` varchar(64) DEFAULT NULL,
  `orm_sc_ca_actual_value` varchar(64) DEFAULT NULL,
  `orm_sc_ca_comments` varchar(64) DEFAULT NULL,
  `orm_sc_ca_signoff` varchar(64) DEFAULT NULL,
  `orm_sc_dc_cancel_test_date` varchar(64) DEFAULT NULL,
  `orm_sc_dc_cancel_pass_fail` varchar(64) DEFAULT NULL,
  `orm_sc_dc_cancel_expected_vlaue` varchar(64) DEFAULT NULL,
  `orm_sc_dc_cancel_actual_value` varchar(64) DEFAULT NULL,
  `orm_sc_dc_cancel_comments` varchar(64) DEFAULT NULL,
  `orm_sc_dc_cancel_signoff` varchar(64) DEFAULT NULL,
  `orm_sc_cm_future_test_date` varchar(64) DEFAULT NULL,
  `orm_sc_cm_future_pass_fail` varchar(64) DEFAULT NULL,
  `orm_sc_cm_future_expected_value` varchar(64) DEFAULT NULL,
  `orm_sc_cm_future_actual_value` varchar(64) DEFAULT NULL,
  `orm_sc_cm_future_comments` varchar(64) DEFAULT NULL,
  `orm_sc_cm_future_signoff` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section10_testplan_orders_status`
--

INSERT INTO `section10_testplan_orders_status` (`row_counter`, `sec_sign`, `orm_sc_pc_test_date`, `orm_sc_pc_pass_fail`, `orm_sc_pc_expected_value`, `orm_sc_pc_actual_value`, `orm_sc_pc_comments`, `orm_sc_pc_signoff`, `orm_sc_sdc_test_date`, `orm_sc_sdc_pass_fail`, `orm_sc_sdc_expected_value`, `orm_sc_sdc_actual_value`, `orm_sc_sdc_comments`, `orm_sc_sdc_signoff`, `orm_sc_ip_test_date`, `orm_sc_ip_pass_fail`, `orm_sc_ip_expected_value`, `orm_sc_ip_actual_value`, `orm_sc_ip_comments`, `orm_sc_ip_signoff`, `orm_sc_ca_test_date`, `orm_sc_ca_pass_fail`, `orm_sc_ca_expected_value`, `orm_sc_ca_actual_value`, `orm_sc_ca_comments`, `orm_sc_ca_signoff`, `orm_sc_dc_cancel_test_date`, `orm_sc_dc_cancel_pass_fail`, `orm_sc_dc_cancel_expected_vlaue`, `orm_sc_dc_cancel_actual_value`, `orm_sc_dc_cancel_comments`, `orm_sc_dc_cancel_signoff`, `orm_sc_cm_future_test_date`, `orm_sc_cm_future_pass_fail`, `orm_sc_cm_future_expected_value`, `orm_sc_cm_future_actual_value`, `orm_sc_cm_future_comments`, `orm_sc_cm_future_signoff`) VALUES
(1, '5c879a55e8732', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(2, '5c888f5571939', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `section10_testplan_procedures`
--

CREATE TABLE `section10_testplan_procedures` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `his_procedure_code` varchar(32) DEFAULT NULL,
  `his_procedure` varchar(64) DEFAULT NULL,
  `iscv_study_type` varchar(32) DEFAULT NULL,
  `iscv_test_date` varchar(32) DEFAULT NULL,
  `iscv_expected_value` varchar(32) DEFAULT NULL,
  `iscv_actual_value` varchar(32) DEFAULT NULL,
  `iscv_pass_fail` varchar(32) DEFAULT NULL,
  `iscv_accession_num` varchar(32) DEFAULT NULL,
  `iscv_comments` varchar(64) DEFAULT NULL,
  `his_test_date` varchar(32) DEFAULT NULL,
  `his_expected_value` varchar(32) DEFAULT NULL,
  `his_actual_value` varchar(32) DEFAULT NULL,
  `his_pass_fail` varchar(32) DEFAULT NULL,
  `his_accession_num` varchar(32) DEFAULT NULL,
  `his_comments` varchar(64) DEFAULT NULL,
  `his_report_format` varchar(32) DEFAULT NULL,
  `his_signoff` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section10_testplan_procedures`
--

INSERT INTO `section10_testplan_procedures` (`row_counter`, `sec_sign`, `his_procedure_code`, `his_procedure`, `iscv_study_type`, `iscv_test_date`, `iscv_expected_value`, `iscv_actual_value`, `iscv_pass_fail`, `iscv_accession_num`, `iscv_comments`, `his_test_date`, `his_expected_value`, `his_actual_value`, `his_pass_fail`, `his_accession_num`, `his_comments`, `his_report_format`, `his_signoff`) VALUES
(1, '5c888f5571939', 'khkj', 'jkh', 'jkh', 'kjh', 'kh', 'k', 'hkh', 'kjh', 'jkh', 'hh', 'his_expected_value', 'h', 'h', 'k', NULL, 'kh', 'kh'),
(3, '5c89e2085ea5e', 'fhfh', 'hfh', '', 'ghf', 'g', 'fgh', 'ghf', 'ghfgh', 'fgh', 'fgh', 'his_expected_value', 'fghf', '', 'fgh', NULL, 'fghfgh', 'fh'),
(4, '5c8a25f5f1842', 'dil', 'bbsdf', '', 'df', 'fsd', 'fssdf', 's', 'dfsd', 'fsd', 'fdf', 'his_expected_value', 'sdf', 'sd', 'sd', NULL, 'fs', 'dfs'),
(5, '5c8a2915971de', 'fdsDFSfds', 'sd', 'fs', 'fs', 'fdsd', 'fsd', 'fsfd', 'sdf', 'd', 'fs', 'his_expected_value', 'dfs', 'dfs', 'dfs', NULL, 'df', 'sd');

-- --------------------------------------------------------

--
-- Table structure for table `section10_testplan_resultpdf`
--

CREATE TABLE `section10_testplan_resultpdf` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `oru_date` varchar(32) DEFAULT NULL,
  `oru_pass` varchar(32) DEFAULT NULL,
  `oru_expected_val` varchar(32) DEFAULT NULL,
  `oru_actual_val` varchar(32) DEFAULT NULL,
  `oru_comments` varchar(64) DEFAULT NULL,
  `oru_signoff` varchar(32) DEFAULT NULL,
  `oru_amended_date` varchar(32) DEFAULT NULL,
  `oru_amended_pass` varchar(32) DEFAULT NULL,
  `oru_amended_expected_val` varchar(32) DEFAULT NULL,
  `oru_amended_actual_val` varchar(32) DEFAULT NULL,
  `oru_amended_comments` varchar(64) DEFAULT NULL,
  `oru_amended_signoff` varchar(32) DEFAULT NULL,
  `oru_amended2_date` varchar(32) DEFAULT NULL,
  `oru_amended2_pass` varchar(32) DEFAULT NULL,
  `oru_amended2_expected_val` varchar(32) DEFAULT NULL,
  `oru_amended2_actual_val` varchar(32) DEFAULT NULL,
  `oru_amended2_comments` varchar(64) DEFAULT NULL,
  `oru_amended2_signoff` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section10_testplan_resultpdf`
--

INSERT INTO `section10_testplan_resultpdf` (`row_counter`, `sec_sign`, `oru_date`, `oru_pass`, `oru_expected_val`, `oru_actual_val`, `oru_comments`, `oru_signoff`, `oru_amended_date`, `oru_amended_pass`, `oru_amended_expected_val`, `oru_amended_actual_val`, `oru_amended_comments`, `oru_amended_signoff`, `oru_amended2_date`, `oru_amended2_pass`, `oru_amended2_expected_val`, `oru_amended2_actual_val`, `oru_amended2_comments`, `oru_amended2_signoff`) VALUES
(1, '5c888f5571939', 'mklm', 'klm', 'kl', 'klmkl', 'ml', 'mk', 'ml', 'mkl', 'mkl', 'mkl', 'mkl', 'mkl', 'mk', 'mkl', 'mkl', 'll', 'kmkl', 'mkl'),
(2, '5c888f5571939', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(3, '5c888f5571939', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(4, '5c888f5571939', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(5, '5c888f5571939', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(6, '5c888f5571939', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(7, '5c888f5571939', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(8, '5c888f5571939', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(9, '5c888f5571939', 'sdasd', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(10, '5c888f5571939', 'vvcv', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(11, '5c888f5571939', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `section10_testplan_resultpdf_msh`
--

CREATE TABLE `section10_testplan_resultpdf_msh` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `msh_1_iscv_val` varchar(32) DEFAULT NULL,
  `msh_1_hl7_parsing` varchar(32) DEFAULT NULL,
  `msh_1_expected_val` varchar(32) DEFAULT NULL,
  `msh_1_actual_val` varchar(32) DEFAULT NULL,
  `msh_1_pass` varchar(32) DEFAULT NULL,
  `msh_1_comments` varchar(64) DEFAULT NULL,
  `msh_1_signoff` varchar(32) DEFAULT NULL,
  `msh_2_iscv_val` varchar(32) DEFAULT NULL,
  `msh_2_hl7_parsing` varchar(32) DEFAULT NULL,
  `msh_2_expected_val` varchar(32) DEFAULT NULL,
  `msh_2_actual_val` varchar(32) DEFAULT NULL,
  `msh_2_pass` varchar(32) DEFAULT NULL,
  `msh_2_comments` varchar(64) DEFAULT NULL,
  `msh_2_signoff` varchar(32) DEFAULT NULL,
  `msh_3_iscv_val` varchar(32) DEFAULT NULL,
  `msh_3_hl7_parsing` varchar(32) DEFAULT NULL,
  `msh_3_expected_val` varchar(32) DEFAULT NULL,
  `msh_3_actual_val` varchar(32) DEFAULT NULL,
  `msh_3_pass` varchar(32) DEFAULT NULL,
  `msh_3_comments` varchar(64) DEFAULT NULL,
  `msh_3_signoff` varchar(32) DEFAULT NULL,
  `msh_4_iscv_val` varchar(32) DEFAULT NULL,
  `msh_4_hl7_parsing` varchar(32) DEFAULT NULL,
  `msh_4_expected_val` varchar(32) DEFAULT NULL,
  `msh_4_actual_val` varchar(32) DEFAULT NULL,
  `msh_4_pass` varchar(32) DEFAULT NULL,
  `msh_4_comments` varchar(64) DEFAULT NULL,
  `msh_4_signoff` varchar(32) DEFAULT NULL,
  `msh_5_iscv_val` varchar(32) DEFAULT NULL,
  `msh_5_hl7_parsing` varchar(32) DEFAULT NULL,
  `msh_5_expected_val` varchar(32) DEFAULT NULL,
  `msh_5_actual_val` varchar(32) DEFAULT NULL,
  `msh_5_pass` varchar(32) DEFAULT NULL,
  `msh_5_comments` varchar(64) DEFAULT NULL,
  `msh_5_signoff` varchar(32) DEFAULT NULL,
  `msh_6_iscv_val` varchar(32) DEFAULT NULL,
  `msh_6_hl7_parsing` varchar(32) DEFAULT NULL,
  `msh_6_expected_val` varchar(32) DEFAULT NULL,
  `msh_6_actual_val` varchar(32) DEFAULT NULL,
  `msh_6_pass` varchar(32) DEFAULT NULL,
  `msh_6_comments` varchar(64) DEFAULT NULL,
  `msh_6_signoff` varchar(32) DEFAULT NULL,
  `msh_7_iscv_val` varchar(32) DEFAULT NULL,
  `msh_7_hl7_parsing` varchar(32) DEFAULT NULL,
  `msh_7_expected_val` varchar(32) DEFAULT NULL,
  `msh_7_actual_val` varchar(32) DEFAULT NULL,
  `msh_7_pass` varchar(32) DEFAULT NULL,
  `msh_7_comments` varchar(64) DEFAULT NULL,
  `msh_7_signoff` varchar(32) DEFAULT NULL,
  `msh_9_iscv_val` varchar(32) DEFAULT NULL,
  `msh_9_hl7_parsing` varchar(32) DEFAULT NULL,
  `msh_9_expected_val` varchar(32) DEFAULT NULL,
  `msh_9_actual_val` varchar(32) DEFAULT NULL,
  `msh_9_pass` varchar(32) DEFAULT NULL,
  `msh_9_comments` varchar(64) DEFAULT NULL,
  `msh_9_signoff` varchar(32) DEFAULT NULL,
  `msh_9_1_iscv_val` varchar(32) DEFAULT NULL,
  `msh_9_1_hl7_parsing` varchar(32) DEFAULT NULL,
  `msh_9_1_expected_val` varchar(32) DEFAULT NULL,
  `msh_9_1_actual_val` varchar(32) DEFAULT NULL,
  `msh_9_1_pass` varchar(32) DEFAULT NULL,
  `msh_9_1_comments` varchar(64) DEFAULT NULL,
  `msh_9_1_signoff` varchar(32) DEFAULT NULL,
  `msh_9_2_iscv_val` varchar(32) DEFAULT NULL,
  `msh_9_2_hl7_parsing` varchar(32) DEFAULT NULL,
  `msh_9_2_expected_val` varchar(32) DEFAULT NULL,
  `msh_9_2_actual_val` varchar(32) DEFAULT NULL,
  `msh_9_2_pass` varchar(32) DEFAULT NULL,
  `msh_9_2_comments` varchar(64) DEFAULT NULL,
  `msh_9_2_signoff` varchar(32) DEFAULT NULL,
  `msh_10_iscv_val` varchar(32) DEFAULT NULL,
  `msh_10_hl7_parsing` varchar(32) DEFAULT NULL,
  `msh_10_expected_val` varchar(32) DEFAULT NULL,
  `msh_10_actual_val` varchar(32) DEFAULT NULL,
  `msh_10_pass` varchar(32) DEFAULT NULL,
  `msh_10_comments` varchar(64) DEFAULT NULL,
  `msh_10_signoff` varchar(32) DEFAULT NULL,
  `msh_11_iscv_val` varchar(32) DEFAULT NULL,
  `msh_11_hl7_parsing` varchar(32) DEFAULT NULL,
  `msh_11_expected_val` varchar(32) DEFAULT NULL,
  `msh_11_actual_val` varchar(32) DEFAULT NULL,
  `msh_11_pass` varchar(32) DEFAULT NULL,
  `msh_11_comments` varchar(64) DEFAULT NULL,
  `msh_11_signoff` varchar(32) DEFAULT NULL,
  `msh_12_iscv_val` varchar(32) DEFAULT NULL,
  `msh_12_hl7_parsing` varchar(32) DEFAULT NULL,
  `msh_12_expected_val` varchar(32) DEFAULT NULL,
  `msh_12_actual_val` varchar(32) DEFAULT NULL,
  `msh_12_pass` varchar(32) DEFAULT NULL,
  `msh_12_comments` varchar(64) DEFAULT NULL,
  `msh_12_signoff` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section10_testplan_resultpdf_msh`
--

INSERT INTO `section10_testplan_resultpdf_msh` (`row_counter`, `sec_sign`, `msh_1_iscv_val`, `msh_1_hl7_parsing`, `msh_1_expected_val`, `msh_1_actual_val`, `msh_1_pass`, `msh_1_comments`, `msh_1_signoff`, `msh_2_iscv_val`, `msh_2_hl7_parsing`, `msh_2_expected_val`, `msh_2_actual_val`, `msh_2_pass`, `msh_2_comments`, `msh_2_signoff`, `msh_3_iscv_val`, `msh_3_hl7_parsing`, `msh_3_expected_val`, `msh_3_actual_val`, `msh_3_pass`, `msh_3_comments`, `msh_3_signoff`, `msh_4_iscv_val`, `msh_4_hl7_parsing`, `msh_4_expected_val`, `msh_4_actual_val`, `msh_4_pass`, `msh_4_comments`, `msh_4_signoff`, `msh_5_iscv_val`, `msh_5_hl7_parsing`, `msh_5_expected_val`, `msh_5_actual_val`, `msh_5_pass`, `msh_5_comments`, `msh_5_signoff`, `msh_6_iscv_val`, `msh_6_hl7_parsing`, `msh_6_expected_val`, `msh_6_actual_val`, `msh_6_pass`, `msh_6_comments`, `msh_6_signoff`, `msh_7_iscv_val`, `msh_7_hl7_parsing`, `msh_7_expected_val`, `msh_7_actual_val`, `msh_7_pass`, `msh_7_comments`, `msh_7_signoff`, `msh_9_iscv_val`, `msh_9_hl7_parsing`, `msh_9_expected_val`, `msh_9_actual_val`, `msh_9_pass`, `msh_9_comments`, `msh_9_signoff`, `msh_9_1_iscv_val`, `msh_9_1_hl7_parsing`, `msh_9_1_expected_val`, `msh_9_1_actual_val`, `msh_9_1_pass`, `msh_9_1_comments`, `msh_9_1_signoff`, `msh_9_2_iscv_val`, `msh_9_2_hl7_parsing`, `msh_9_2_expected_val`, `msh_9_2_actual_val`, `msh_9_2_pass`, `msh_9_2_comments`, `msh_9_2_signoff`, `msh_10_iscv_val`, `msh_10_hl7_parsing`, `msh_10_expected_val`, `msh_10_actual_val`, `msh_10_pass`, `msh_10_comments`, `msh_10_signoff`, `msh_11_iscv_val`, `msh_11_hl7_parsing`, `msh_11_expected_val`, `msh_11_actual_val`, `msh_11_pass`, `msh_11_comments`, `msh_11_signoff`, `msh_12_iscv_val`, `msh_12_hl7_parsing`, `msh_12_expected_val`, `msh_12_actual_val`, `msh_12_pass`, `msh_12_comments`, `msh_12_signoff`) VALUES
(14, '5c888f5571939', 'xdfxf', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `section10_testplan_resultpdf_obr`
--

CREATE TABLE `section10_testplan_resultpdf_obr` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `obr_1_iscv_val` varchar(32) DEFAULT NULL,
  `obr_1_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_1_expected_val` varchar(32) DEFAULT NULL,
  `obr_1_actual_val` varchar(32) DEFAULT NULL,
  `obr_1_pass` varchar(32) DEFAULT NULL,
  `obr_1_comments` varchar(64) DEFAULT NULL,
  `obr_1_signoff` varchar(32) DEFAULT NULL,
  `obr_2_iscv_val` varchar(32) DEFAULT NULL,
  `obr_2_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_2_expected_val` varchar(32) DEFAULT NULL,
  `obr_2_actual_val` varchar(32) DEFAULT NULL,
  `obr_2_pass` varchar(32) DEFAULT NULL,
  `obr_2_comments` varchar(64) DEFAULT NULL,
  `obr_2_signoff` varchar(32) DEFAULT NULL,
  `obr_3_iscv_val` varchar(32) DEFAULT NULL,
  `obr_3_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_3_expected_val` varchar(32) DEFAULT NULL,
  `obr_3_actual_val` varchar(32) DEFAULT NULL,
  `obr_3_pass` varchar(32) DEFAULT NULL,
  `obr_3_comments` varchar(64) DEFAULT NULL,
  `obr_3_signoff` varchar(32) DEFAULT NULL,
  `obr_4_iscv_val` varchar(32) DEFAULT NULL,
  `obr_4_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_4_expected_val` varchar(32) DEFAULT NULL,
  `obr_4_actual_val` varchar(32) DEFAULT NULL,
  `obr_4_pass` varchar(32) DEFAULT NULL,
  `obr_4_comments` varchar(64) DEFAULT NULL,
  `obr_4_signoff` varchar(32) DEFAULT NULL,
  `obr_4_1_iscv_val` varchar(32) DEFAULT NULL,
  `obr_4_1_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_4_1_expected_val` varchar(32) DEFAULT NULL,
  `obr_4_1_actual_val` varchar(32) DEFAULT NULL,
  `obr_4_1_pass` varchar(32) DEFAULT NULL,
  `obr_4_1_comments` varchar(64) DEFAULT NULL,
  `obr_4_1_signoff` varchar(32) DEFAULT NULL,
  `obr_4_2_iscv_val` varchar(32) DEFAULT NULL,
  `obr_4_2_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_4_2_expected_val` varchar(32) DEFAULT NULL,
  `obr_4_2_actual_val` varchar(32) DEFAULT NULL,
  `obr_4_2_pass` varchar(32) DEFAULT NULL,
  `obr_4_2_comments` varchar(64) DEFAULT NULL,
  `obr_4_2_signoff` varchar(32) DEFAULT NULL,
  `obr_7_iscv_val` varchar(32) DEFAULT NULL,
  `obr_7_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_7_expected_val` varchar(32) DEFAULT NULL,
  `obr_7_actual_val` varchar(32) DEFAULT NULL,
  `obr_7_pass` varchar(32) DEFAULT NULL,
  `obr_7_comments` varchar(64) DEFAULT NULL,
  `obr_7_signoff` varchar(32) DEFAULT NULL,
  `obr_8_iscv_val` varchar(32) DEFAULT NULL,
  `obr_8_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_8_expected_val` varchar(32) DEFAULT NULL,
  `obr_8_actual_val` varchar(32) DEFAULT NULL,
  `obr_8_pass` varchar(32) DEFAULT NULL,
  `obr_8_comments` varchar(64) DEFAULT NULL,
  `obr_8_signoff` varchar(32) DEFAULT NULL,
  `obr_16_iscv_val` varchar(32) DEFAULT NULL,
  `obr_16_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_16_expected_val` varchar(32) DEFAULT NULL,
  `obr_16_actual_val` varchar(32) DEFAULT NULL,
  `obr_16_pass` varchar(32) DEFAULT NULL,
  `obr_16_comments` varchar(64) DEFAULT NULL,
  `obr_16_signoff` varchar(32) DEFAULT NULL,
  `obr_18_iscv_val` varchar(32) DEFAULT NULL,
  `obr_18_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_18_expected_val` varchar(32) DEFAULT NULL,
  `obr_18_actual_val` varchar(32) DEFAULT NULL,
  `obr_18_pass` varchar(32) DEFAULT NULL,
  `obr_18_comments` varchar(64) DEFAULT NULL,
  `obr_18_signoff` varchar(32) DEFAULT NULL,
  `obr_20_iscv_val` varchar(32) DEFAULT NULL,
  `obr_20_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_20_expected_val` varchar(32) DEFAULT NULL,
  `obr_20_actual_val` varchar(32) DEFAULT NULL,
  `obr_20_pass` varchar(32) DEFAULT NULL,
  `obr_20_comments` varchar(64) DEFAULT NULL,
  `obr_20_signoff` varchar(32) DEFAULT NULL,
  `obr_22_iscv_val` varchar(32) DEFAULT NULL,
  `obr_22_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_22_expected_val` varchar(32) DEFAULT NULL,
  `obr_22_actual_val` varchar(32) DEFAULT NULL,
  `obr_22_pass` varchar(32) DEFAULT NULL,
  `obr_22_comments` varchar(64) DEFAULT NULL,
  `obr_22_signoff` varchar(32) DEFAULT NULL,
  `obr_24_iscv_val` varchar(32) DEFAULT NULL,
  `obr_24_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_24_expected_val` varchar(32) DEFAULT NULL,
  `obr_24_actual_val` varchar(32) DEFAULT NULL,
  `obr_24_pass` varchar(32) DEFAULT NULL,
  `obr_24_comments` varchar(64) DEFAULT NULL,
  `obr_24_signoff` varchar(32) DEFAULT NULL,
  `obr_25_iscv_val` varchar(32) DEFAULT NULL,
  `obr_25_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_25_expected_val` varchar(32) DEFAULT NULL,
  `obr_25_actual_val` varchar(32) DEFAULT NULL,
  `obr_25_pass` varchar(32) DEFAULT NULL,
  `obr_25_comments` varchar(64) DEFAULT NULL,
  `obr_25_signoff` varchar(32) DEFAULT NULL,
  `obr_31_iscv_val` varchar(32) DEFAULT NULL,
  `obr_31_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_31_expected_val` varchar(32) DEFAULT NULL,
  `obr_31_actual_val` varchar(32) DEFAULT NULL,
  `obr_31_pass` varchar(32) DEFAULT NULL,
  `obr_31_comments` varchar(64) DEFAULT NULL,
  `obr_31_signoff` varchar(32) DEFAULT NULL,
  `obr_32_iscv_val` varchar(32) DEFAULT NULL,
  `obr_32_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_32_expected_val` varchar(32) DEFAULT NULL,
  `obr_32_actual_val` varchar(32) DEFAULT NULL,
  `obr_32_pass` varchar(32) DEFAULT NULL,
  `obr_32_comments` varchar(64) DEFAULT NULL,
  `obr_32_signoff` varchar(32) DEFAULT NULL,
  `obr_32_1_1_iscv_val` varchar(32) DEFAULT NULL,
  `obr_32_1_1_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_32_1_1_expected_val` varchar(32) DEFAULT NULL,
  `obr_32_1_1_actual_val` varchar(32) DEFAULT NULL,
  `obr_32_1_1_pass` varchar(32) DEFAULT NULL,
  `obr_32_1_1_comments` varchar(64) DEFAULT NULL,
  `obr_32_1_1_signoff` varchar(32) DEFAULT NULL,
  `obr_32_1_2_iscv_val` varchar(32) DEFAULT NULL,
  `obr_32_1_2_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_32_1_2_expected_val` varchar(32) DEFAULT NULL,
  `obr_32_1_2_actual_val` varchar(32) DEFAULT NULL,
  `obr_32_1_2_pass` varchar(32) DEFAULT NULL,
  `obr_32_1_2_comments` varchar(64) DEFAULT NULL,
  `obr_32_1_2_signoff` varchar(32) DEFAULT NULL,
  `obr_32_1_3_iscv_val` varchar(32) DEFAULT NULL,
  `obr_32_1_3_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_32_1_3_expected_val` varchar(32) DEFAULT NULL,
  `obr_32_1_3_actual_val` varchar(32) DEFAULT NULL,
  `obr_32_1_3_pass` varchar(32) DEFAULT NULL,
  `obr_32_1_3_comments` varchar(64) DEFAULT NULL,
  `obr_32_1_3_signoff` varchar(32) DEFAULT NULL,
  `obr_32_1_4_iscv_val` varchar(32) DEFAULT NULL,
  `obr_32_1_4_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_32_1_4_expected_val` varchar(32) DEFAULT NULL,
  `obr_32_1_4_actual_val` varchar(32) DEFAULT NULL,
  `obr_32_1_4_pass` varchar(32) DEFAULT NULL,
  `obr_32_1_4_comments` varchar(64) DEFAULT NULL,
  `obr_32_1_4_signoff` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section10_testplan_resultpdf_obr`
--

INSERT INTO `section10_testplan_resultpdf_obr` (`row_counter`, `sec_sign`, `obr_1_iscv_val`, `obr_1_hl7_parsing`, `obr_1_expected_val`, `obr_1_actual_val`, `obr_1_pass`, `obr_1_comments`, `obr_1_signoff`, `obr_2_iscv_val`, `obr_2_hl7_parsing`, `obr_2_expected_val`, `obr_2_actual_val`, `obr_2_pass`, `obr_2_comments`, `obr_2_signoff`, `obr_3_iscv_val`, `obr_3_hl7_parsing`, `obr_3_expected_val`, `obr_3_actual_val`, `obr_3_pass`, `obr_3_comments`, `obr_3_signoff`, `obr_4_iscv_val`, `obr_4_hl7_parsing`, `obr_4_expected_val`, `obr_4_actual_val`, `obr_4_pass`, `obr_4_comments`, `obr_4_signoff`, `obr_4_1_iscv_val`, `obr_4_1_hl7_parsing`, `obr_4_1_expected_val`, `obr_4_1_actual_val`, `obr_4_1_pass`, `obr_4_1_comments`, `obr_4_1_signoff`, `obr_4_2_iscv_val`, `obr_4_2_hl7_parsing`, `obr_4_2_expected_val`, `obr_4_2_actual_val`, `obr_4_2_pass`, `obr_4_2_comments`, `obr_4_2_signoff`, `obr_7_iscv_val`, `obr_7_hl7_parsing`, `obr_7_expected_val`, `obr_7_actual_val`, `obr_7_pass`, `obr_7_comments`, `obr_7_signoff`, `obr_8_iscv_val`, `obr_8_hl7_parsing`, `obr_8_expected_val`, `obr_8_actual_val`, `obr_8_pass`, `obr_8_comments`, `obr_8_signoff`, `obr_16_iscv_val`, `obr_16_hl7_parsing`, `obr_16_expected_val`, `obr_16_actual_val`, `obr_16_pass`, `obr_16_comments`, `obr_16_signoff`, `obr_18_iscv_val`, `obr_18_hl7_parsing`, `obr_18_expected_val`, `obr_18_actual_val`, `obr_18_pass`, `obr_18_comments`, `obr_18_signoff`, `obr_20_iscv_val`, `obr_20_hl7_parsing`, `obr_20_expected_val`, `obr_20_actual_val`, `obr_20_pass`, `obr_20_comments`, `obr_20_signoff`, `obr_22_iscv_val`, `obr_22_hl7_parsing`, `obr_22_expected_val`, `obr_22_actual_val`, `obr_22_pass`, `obr_22_comments`, `obr_22_signoff`, `obr_24_iscv_val`, `obr_24_hl7_parsing`, `obr_24_expected_val`, `obr_24_actual_val`, `obr_24_pass`, `obr_24_comments`, `obr_24_signoff`, `obr_25_iscv_val`, `obr_25_hl7_parsing`, `obr_25_expected_val`, `obr_25_actual_val`, `obr_25_pass`, `obr_25_comments`, `obr_25_signoff`, `obr_31_iscv_val`, `obr_31_hl7_parsing`, `obr_31_expected_val`, `obr_31_actual_val`, `obr_31_pass`, `obr_31_comments`, `obr_31_signoff`, `obr_32_iscv_val`, `obr_32_hl7_parsing`, `obr_32_expected_val`, `obr_32_actual_val`, `obr_32_pass`, `obr_32_comments`, `obr_32_signoff`, `obr_32_1_1_iscv_val`, `obr_32_1_1_hl7_parsing`, `obr_32_1_1_expected_val`, `obr_32_1_1_actual_val`, `obr_32_1_1_pass`, `obr_32_1_1_comments`, `obr_32_1_1_signoff`, `obr_32_1_2_iscv_val`, `obr_32_1_2_hl7_parsing`, `obr_32_1_2_expected_val`, `obr_32_1_2_actual_val`, `obr_32_1_2_pass`, `obr_32_1_2_comments`, `obr_32_1_2_signoff`, `obr_32_1_3_iscv_val`, `obr_32_1_3_hl7_parsing`, `obr_32_1_3_expected_val`, `obr_32_1_3_actual_val`, `obr_32_1_3_pass`, `obr_32_1_3_comments`, `obr_32_1_3_signoff`, `obr_32_1_4_iscv_val`, `obr_32_1_4_hl7_parsing`, `obr_32_1_4_expected_val`, `obr_32_1_4_actual_val`, `obr_32_1_4_pass`, `obr_32_1_4_comments`, `obr_32_1_4_signoff`) VALUES
(11, '5c888f5571939', '', '', '', '', '', 'obr_1_comments', '', '', '', '', '', '', 'obr_2_comments', '', '', '', '', '', '', 'obr_3_comments', '', '', '', '', '', '', 'obr_4_comments', '', '', '', '', '', '', 'obr_4_1_comments', '', '', '', '', '', '', 'obr_4_2_comments', '', '', '', '', '', '', 'obr_7_comments', '', '', '', '', '', '', 'obr_8_comments', '', '', '', '', '', '', 'obr_16_comments', '', '', '', '', '', '', 'obr_18_comments', '', '', '', '', '', '', 'obr_20_comments', '', '', '', '', '', '', 'obr_22_comments', '', '', '', '', '', '', 'obr_24_comments', '', '', '', '', '', '', 'obr_25_comments', '', '', '', '', '', '', 'obr_31_comments', '', '', '', '', '', '', 'obr_32_comments', '', '', '', '', '', '', 'obr_32_1_1_comments', '', '', '', '', '', '', 'obr_32_1_2_comments', '', '', '', '', '', '', 'obr_32_1_3_comments', '', '', '', '', '', '', 'obr_32_1_4_comments', '');

-- --------------------------------------------------------

--
-- Table structure for table `section10_testplan_resultpdf_obx`
--

CREATE TABLE `section10_testplan_resultpdf_obx` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `obx_1_iscv_val` varchar(32) DEFAULT NULL,
  `obx_1_hl7_parsing` varchar(32) DEFAULT NULL,
  `obx_1_expected_val` varchar(32) DEFAULT NULL,
  `obx_1_actual_val` varchar(32) DEFAULT NULL,
  `obx_1_pass` varchar(32) DEFAULT NULL,
  `obx_1_comments` varchar(64) DEFAULT NULL,
  `obx_1_signoff` varchar(32) DEFAULT NULL,
  `obx_2_iscv_val` varchar(32) DEFAULT NULL,
  `obx_2_hl7_parsing` varchar(32) DEFAULT NULL,
  `obx_2_expected_val` varchar(32) DEFAULT NULL,
  `obx_2_actual_val` varchar(32) DEFAULT NULL,
  `obx_2_pass` varchar(32) DEFAULT NULL,
  `obx_2_comments` varchar(64) DEFAULT NULL,
  `obx_2_signoff` varchar(32) DEFAULT NULL,
  `obx_3_iscv_val` varchar(32) DEFAULT NULL,
  `obx_3_hl7_parsing` varchar(32) DEFAULT NULL,
  `obx_3_expected_val` varchar(32) DEFAULT NULL,
  `obx_3_actual_val` varchar(32) DEFAULT NULL,
  `obx_3_pass` varchar(32) DEFAULT NULL,
  `obx_3_comments` varchar(64) DEFAULT NULL,
  `obx_3_signoff` varchar(32) DEFAULT NULL,
  `obx_3_1_iscv_val` varchar(32) DEFAULT NULL,
  `obx_3_1_hl7_parsing` varchar(32) DEFAULT NULL,
  `obx_3_1_expected_val` varchar(32) DEFAULT NULL,
  `obx_3_1_actual_val` varchar(32) DEFAULT NULL,
  `obx_3_1_pass` varchar(32) DEFAULT NULL,
  `obx_3_1_comments` varchar(64) DEFAULT NULL,
  `obx_3_1_signoff` varchar(32) DEFAULT NULL,
  `obx_3_2_iscv_val` varchar(32) DEFAULT NULL,
  `obx_3_2_hl7_parsing` varchar(32) DEFAULT NULL,
  `obx_3_2_expected_val` varchar(32) DEFAULT NULL,
  `obx_3_2_actual_val` varchar(32) DEFAULT NULL,
  `obx_3_2_pass` varchar(32) DEFAULT NULL,
  `obx_3_2_comments` varchar(64) DEFAULT NULL,
  `obx_3_2_signoff` varchar(32) DEFAULT NULL,
  `obx_4_iscv_val` varchar(32) DEFAULT NULL,
  `obx_4_hl7_parsing` varchar(32) DEFAULT NULL,
  `obx_4_expected_val` varchar(32) DEFAULT NULL,
  `obx_4_actual_val` varchar(32) DEFAULT NULL,
  `obx_4_pass` varchar(32) DEFAULT NULL,
  `obx_4_comments` varchar(64) DEFAULT NULL,
  `obx_4_signoff` varchar(32) DEFAULT NULL,
  `obx_5_iscv_val` varchar(32) DEFAULT NULL,
  `obx_5_hl7_parsing` varchar(32) DEFAULT NULL,
  `obx_5_expected_val` varchar(32) DEFAULT NULL,
  `obx_5_actual_val` varchar(32) DEFAULT NULL,
  `obx_5_pass` varchar(32) DEFAULT NULL,
  `obx_5_comments` varchar(64) DEFAULT NULL,
  `obx_5_signoff` varchar(32) DEFAULT NULL,
  `obx_11_iscv_val` varchar(32) DEFAULT NULL,
  `obx_11_hl7_parsing` varchar(32) DEFAULT NULL,
  `obx_11_expected_val` varchar(32) DEFAULT NULL,
  `obx_11_actual_val` varchar(32) DEFAULT NULL,
  `obx_11_pass` varchar(32) DEFAULT NULL,
  `obx_11_comments` varchar(64) DEFAULT NULL,
  `obx_11_signoff` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section10_testplan_resultpdf_obx`
--

INSERT INTO `section10_testplan_resultpdf_obx` (`row_counter`, `sec_sign`, `obx_1_iscv_val`, `obx_1_hl7_parsing`, `obx_1_expected_val`, `obx_1_actual_val`, `obx_1_pass`, `obx_1_comments`, `obx_1_signoff`, `obx_2_iscv_val`, `obx_2_hl7_parsing`, `obx_2_expected_val`, `obx_2_actual_val`, `obx_2_pass`, `obx_2_comments`, `obx_2_signoff`, `obx_3_iscv_val`, `obx_3_hl7_parsing`, `obx_3_expected_val`, `obx_3_actual_val`, `obx_3_pass`, `obx_3_comments`, `obx_3_signoff`, `obx_3_1_iscv_val`, `obx_3_1_hl7_parsing`, `obx_3_1_expected_val`, `obx_3_1_actual_val`, `obx_3_1_pass`, `obx_3_1_comments`, `obx_3_1_signoff`, `obx_3_2_iscv_val`, `obx_3_2_hl7_parsing`, `obx_3_2_expected_val`, `obx_3_2_actual_val`, `obx_3_2_pass`, `obx_3_2_comments`, `obx_3_2_signoff`, `obx_4_iscv_val`, `obx_4_hl7_parsing`, `obx_4_expected_val`, `obx_4_actual_val`, `obx_4_pass`, `obx_4_comments`, `obx_4_signoff`, `obx_5_iscv_val`, `obx_5_hl7_parsing`, `obx_5_expected_val`, `obx_5_actual_val`, `obx_5_pass`, `obx_5_comments`, `obx_5_signoff`, `obx_11_iscv_val`, `obx_11_hl7_parsing`, `obx_11_expected_val`, `obx_11_actual_val`, `obx_11_pass`, `obx_11_comments`, `obx_11_signoff`) VALUES
(15, '5c888f5571939', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `section10_testplan_resultpdf_orc`
--

CREATE TABLE `section10_testplan_resultpdf_orc` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `orc_1_iscv_val` varchar(32) DEFAULT NULL,
  `orc_1_hl7_parsing` varchar(32) DEFAULT NULL,
  `orc_1_expected_val` varchar(32) DEFAULT NULL,
  `orc_1_actual_val` varchar(32) DEFAULT NULL,
  `orc_1_pass` varchar(32) DEFAULT NULL,
  `orc_1_comments` varchar(64) DEFAULT NULL,
  `orc_1_signoff` varchar(32) DEFAULT NULL,
  `orc_3_iscv_val` varchar(32) DEFAULT NULL,
  `orc_3_hl7_parsing` varchar(32) DEFAULT NULL,
  `orc_3_expected_val` varchar(32) DEFAULT NULL,
  `orc_3_actual_val` varchar(32) DEFAULT NULL,
  `orc_3_pass` varchar(32) DEFAULT NULL,
  `orc_3_comments` varchar(64) DEFAULT NULL,
  `orc_3_signoff` varchar(32) DEFAULT NULL,
  `orc_5_iscv_val` varchar(32) DEFAULT NULL,
  `orc_5_hl7_parsing` varchar(32) DEFAULT NULL,
  `orc_5_expected_val` varchar(32) DEFAULT NULL,
  `orc_5_actual_val` varchar(32) DEFAULT NULL,
  `orc_5_pass` varchar(32) DEFAULT NULL,
  `orc_5_comments` varchar(64) DEFAULT NULL,
  `orc_5_signoff` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section10_testplan_resultpdf_orc`
--

INSERT INTO `section10_testplan_resultpdf_orc` (`row_counter`, `sec_sign`, `orc_1_iscv_val`, `orc_1_hl7_parsing`, `orc_1_expected_val`, `orc_1_actual_val`, `orc_1_pass`, `orc_1_comments`, `orc_1_signoff`, `orc_3_iscv_val`, `orc_3_hl7_parsing`, `orc_3_expected_val`, `orc_3_actual_val`, `orc_3_pass`, `orc_3_comments`, `orc_3_signoff`, `orc_5_iscv_val`, `orc_5_hl7_parsing`, `orc_5_expected_val`, `orc_5_actual_val`, `orc_5_pass`, `orc_5_comments`, `orc_5_signoff`) VALUES
(15, '5c888f5571939', '', '', '', '', '', 'orc_1_comments', '', '', '', '', '', '', 'orc_3_comments', '', '', '', '', '', '', 'orc_5_comments', '');

-- --------------------------------------------------------

--
-- Table structure for table `section10_testplan_resultpdf_pid`
--

CREATE TABLE `section10_testplan_resultpdf_pid` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `pid_3_iscv_val` varchar(32) DEFAULT NULL,
  `pid_3_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_3_expected_val` varchar(32) DEFAULT NULL,
  `pid_3_actual_val` varchar(32) DEFAULT NULL,
  `pid_3_pass` varchar(32) DEFAULT NULL,
  `pid_3_comments` varchar(64) DEFAULT NULL,
  `pid_3_signoff` varchar(32) DEFAULT NULL,
  `pid_3_1_iscv_val` varchar(32) DEFAULT NULL,
  `pid_3_1_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_3_1_expected_val` varchar(32) DEFAULT NULL,
  `pid_3_1_actual_val` varchar(32) DEFAULT NULL,
  `pid_3_1_pass` varchar(32) DEFAULT NULL,
  `pid_3_1_comments` varchar(64) DEFAULT NULL,
  `pid_3_1_signoff` varchar(32) DEFAULT NULL,
  `pid_3_4_iscv_val` varchar(32) DEFAULT NULL,
  `pid_3_4_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_3_4_expected_val` varchar(32) DEFAULT NULL,
  `pid_3_4_actual_val` varchar(32) DEFAULT NULL,
  `pid_3_4_pass` varchar(32) DEFAULT NULL,
  `pid_3_4_comments` varchar(64) DEFAULT NULL,
  `pid_3_4_signoff` varchar(32) DEFAULT NULL,
  `pid_5_iscv_val` varchar(32) DEFAULT NULL,
  `pid_5_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_5_expected_val` varchar(32) DEFAULT NULL,
  `pid_5_actual_val` varchar(32) DEFAULT NULL,
  `pid_5_pass` varchar(32) DEFAULT NULL,
  `pid_5_comments` varchar(64) DEFAULT NULL,
  `pid_5_signoff` varchar(32) DEFAULT NULL,
  `pid_5_1_iscv_val` varchar(32) DEFAULT NULL,
  `pid_5_1_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_5_1_expected_val` varchar(32) DEFAULT NULL,
  `pid_5_1_actual_val` varchar(32) DEFAULT NULL,
  `pid_5_1_pass` varchar(32) DEFAULT NULL,
  `pid_5_1_comments` varchar(64) DEFAULT NULL,
  `pid_5_1_signoff` varchar(32) DEFAULT NULL,
  `pid_5_2_iscv_val` varchar(32) DEFAULT NULL,
  `pid_5_2_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_5_2_expected_val` varchar(32) DEFAULT NULL,
  `pid_5_2_actual_val` varchar(32) DEFAULT NULL,
  `pid_5_2_pass` varchar(32) DEFAULT NULL,
  `pid_5_2_comments` varchar(64) DEFAULT NULL,
  `pid_5_2_signoff` varchar(32) DEFAULT NULL,
  `pid_5_3_iscv_val` varchar(32) DEFAULT NULL,
  `pid_5_3_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_5_3_expected_val` varchar(32) DEFAULT NULL,
  `pid_5_3_actual_val` varchar(32) DEFAULT NULL,
  `pid_5_3_pass` varchar(32) DEFAULT NULL,
  `pid_5_3_comments` varchar(64) DEFAULT NULL,
  `pid_5_3_signoff` varchar(32) DEFAULT NULL,
  `pid_7_iscv_val` varchar(32) DEFAULT NULL,
  `pid_7_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_7_expected_val` varchar(32) DEFAULT NULL,
  `pid_7_actual_val` varchar(32) DEFAULT NULL,
  `pid_7_pass` varchar(32) DEFAULT NULL,
  `pid_7_comments` varchar(64) DEFAULT NULL,
  `pid_7_signoff` varchar(32) DEFAULT NULL,
  `pid_8_iscv_val` varchar(32) DEFAULT NULL,
  `pid_8_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_8_expected_val` varchar(32) DEFAULT NULL,
  `pid_8_actual_val` varchar(32) DEFAULT NULL,
  `pid_8_pass` varchar(32) DEFAULT NULL,
  `pid_8_comments` varchar(64) DEFAULT NULL,
  `pid_8_signoff` varchar(32) DEFAULT NULL,
  `pid_10_iscv_val` varchar(32) DEFAULT NULL,
  `pid_10_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_10_expected_val` varchar(32) DEFAULT NULL,
  `pid_10_actual_val` varchar(32) DEFAULT NULL,
  `pid_10_pass` varchar(32) DEFAULT NULL,
  `pid_10_comments` varchar(64) DEFAULT NULL,
  `pid_10_signoff` varchar(32) DEFAULT NULL,
  `pid_11_iscv_val` varchar(32) DEFAULT NULL,
  `pid_11_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_11_expected_val` varchar(32) DEFAULT NULL,
  `pid_11_actual_val` varchar(32) DEFAULT NULL,
  `pid_11_pass` varchar(32) DEFAULT NULL,
  `pid_11_comments` varchar(64) DEFAULT NULL,
  `pid_11_signoff` varchar(32) DEFAULT NULL,
  `pid_11_1_iscv_val` varchar(32) DEFAULT NULL,
  `pid_11_1_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_11_1_expected_val` varchar(32) DEFAULT NULL,
  `pid_11_1_actual_val` varchar(32) DEFAULT NULL,
  `pid_11_1_pass` varchar(32) DEFAULT NULL,
  `pid_11_1_comments` varchar(64) DEFAULT NULL,
  `pid_11_1_signoff` varchar(32) DEFAULT NULL,
  `pid_11_2_iscv_val` varchar(32) DEFAULT NULL,
  `pid_11_2_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_11_2_expected_val` varchar(32) DEFAULT NULL,
  `pid_11_2_actual_val` varchar(32) DEFAULT NULL,
  `pid_11_2_pass` varchar(32) DEFAULT NULL,
  `pid_11_2_comments` varchar(64) DEFAULT NULL,
  `pid_11_2_signoff` varchar(32) DEFAULT NULL,
  `pid_11_3_iscv_val` varchar(32) DEFAULT NULL,
  `pid_11_3_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_11_3_expected_val` varchar(32) DEFAULT NULL,
  `pid_11_3_actual_val` varchar(32) DEFAULT NULL,
  `pid_11_3_pass` varchar(32) DEFAULT NULL,
  `pid_11_3_comments` varchar(64) DEFAULT NULL,
  `pid_11_3_signoff` varchar(32) DEFAULT NULL,
  `pid_11_4_iscv_val` varchar(32) DEFAULT NULL,
  `pid_11_4_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_11_4_expected_val` varchar(32) DEFAULT NULL,
  `pid_11_4_actual_val` varchar(32) DEFAULT NULL,
  `pid_11_4_pass` varchar(32) DEFAULT NULL,
  `pid_11_4_comments` varchar(64) DEFAULT NULL,
  `pid_11_4_signoff` varchar(32) DEFAULT NULL,
  `pid_11_5_iscv_val` varchar(32) DEFAULT NULL,
  `pid_11_5_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_11_5_expected_val` varchar(32) DEFAULT NULL,
  `pid_11_5_actual_val` varchar(32) DEFAULT NULL,
  `pid_11_5_pass` varchar(32) DEFAULT NULL,
  `pid_11_5_comments` varchar(64) DEFAULT NULL,
  `pid_11_5_signoff` varchar(32) DEFAULT NULL,
  `pid_13_iscv_val` varchar(32) DEFAULT NULL,
  `pid_13_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_13_expected_val` varchar(32) DEFAULT NULL,
  `pid_13_actual_val` varchar(32) DEFAULT NULL,
  `pid_13_pass` varchar(32) DEFAULT NULL,
  `pid_13_comments` varchar(64) DEFAULT NULL,
  `pid_13_signoff` varchar(32) DEFAULT NULL,
  `pid_14_iscv_val` varchar(32) DEFAULT NULL,
  `pid_14_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_14_expected_val` varchar(32) DEFAULT NULL,
  `pid_14_actual_val` varchar(32) DEFAULT NULL,
  `pid_14_pass` varchar(32) DEFAULT NULL,
  `pid_14_comments` varchar(64) DEFAULT NULL,
  `pid_14_signoff` varchar(32) DEFAULT NULL,
  `pid_18_iscv_val` varchar(32) DEFAULT NULL,
  `pid_18_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_18_expected_val` varchar(32) DEFAULT NULL,
  `pid_18_actual_val` varchar(32) DEFAULT NULL,
  `pid_18_pass` varchar(32) DEFAULT NULL,
  `pid_18_comments` varchar(64) DEFAULT NULL,
  `pid_18_signoff` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section10_testplan_resultpdf_pid`
--

INSERT INTO `section10_testplan_resultpdf_pid` (`row_counter`, `sec_sign`, `pid_3_iscv_val`, `pid_3_hl7_parsing`, `pid_3_expected_val`, `pid_3_actual_val`, `pid_3_pass`, `pid_3_comments`, `pid_3_signoff`, `pid_3_1_iscv_val`, `pid_3_1_hl7_parsing`, `pid_3_1_expected_val`, `pid_3_1_actual_val`, `pid_3_1_pass`, `pid_3_1_comments`, `pid_3_1_signoff`, `pid_3_4_iscv_val`, `pid_3_4_hl7_parsing`, `pid_3_4_expected_val`, `pid_3_4_actual_val`, `pid_3_4_pass`, `pid_3_4_comments`, `pid_3_4_signoff`, `pid_5_iscv_val`, `pid_5_hl7_parsing`, `pid_5_expected_val`, `pid_5_actual_val`, `pid_5_pass`, `pid_5_comments`, `pid_5_signoff`, `pid_5_1_iscv_val`, `pid_5_1_hl7_parsing`, `pid_5_1_expected_val`, `pid_5_1_actual_val`, `pid_5_1_pass`, `pid_5_1_comments`, `pid_5_1_signoff`, `pid_5_2_iscv_val`, `pid_5_2_hl7_parsing`, `pid_5_2_expected_val`, `pid_5_2_actual_val`, `pid_5_2_pass`, `pid_5_2_comments`, `pid_5_2_signoff`, `pid_5_3_iscv_val`, `pid_5_3_hl7_parsing`, `pid_5_3_expected_val`, `pid_5_3_actual_val`, `pid_5_3_pass`, `pid_5_3_comments`, `pid_5_3_signoff`, `pid_7_iscv_val`, `pid_7_hl7_parsing`, `pid_7_expected_val`, `pid_7_actual_val`, `pid_7_pass`, `pid_7_comments`, `pid_7_signoff`, `pid_8_iscv_val`, `pid_8_hl7_parsing`, `pid_8_expected_val`, `pid_8_actual_val`, `pid_8_pass`, `pid_8_comments`, `pid_8_signoff`, `pid_10_iscv_val`, `pid_10_hl7_parsing`, `pid_10_expected_val`, `pid_10_actual_val`, `pid_10_pass`, `pid_10_comments`, `pid_10_signoff`, `pid_11_iscv_val`, `pid_11_hl7_parsing`, `pid_11_expected_val`, `pid_11_actual_val`, `pid_11_pass`, `pid_11_comments`, `pid_11_signoff`, `pid_11_1_iscv_val`, `pid_11_1_hl7_parsing`, `pid_11_1_expected_val`, `pid_11_1_actual_val`, `pid_11_1_pass`, `pid_11_1_comments`, `pid_11_1_signoff`, `pid_11_2_iscv_val`, `pid_11_2_hl7_parsing`, `pid_11_2_expected_val`, `pid_11_2_actual_val`, `pid_11_2_pass`, `pid_11_2_comments`, `pid_11_2_signoff`, `pid_11_3_iscv_val`, `pid_11_3_hl7_parsing`, `pid_11_3_expected_val`, `pid_11_3_actual_val`, `pid_11_3_pass`, `pid_11_3_comments`, `pid_11_3_signoff`, `pid_11_4_iscv_val`, `pid_11_4_hl7_parsing`, `pid_11_4_expected_val`, `pid_11_4_actual_val`, `pid_11_4_pass`, `pid_11_4_comments`, `pid_11_4_signoff`, `pid_11_5_iscv_val`, `pid_11_5_hl7_parsing`, `pid_11_5_expected_val`, `pid_11_5_actual_val`, `pid_11_5_pass`, `pid_11_5_comments`, `pid_11_5_signoff`, `pid_13_iscv_val`, `pid_13_hl7_parsing`, `pid_13_expected_val`, `pid_13_actual_val`, `pid_13_pass`, `pid_13_comments`, `pid_13_signoff`, `pid_14_iscv_val`, `pid_14_hl7_parsing`, `pid_14_expected_val`, `pid_14_actual_val`, `pid_14_pass`, `pid_14_comments`, `pid_14_signoff`, `pid_18_iscv_val`, `pid_18_hl7_parsing`, `pid_18_expected_val`, `pid_18_actual_val`, `pid_18_pass`, `pid_18_comments`, `pid_18_signoff`) VALUES
(15, '5c888f5571939', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `section10_testplan_resultpdf_pv1`
--

CREATE TABLE `section10_testplan_resultpdf_pv1` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `pv1_2_iscv_val` varchar(32) DEFAULT NULL,
  `pv1_2_hl7_parsing` varchar(32) DEFAULT NULL,
  `pv1_2_expected_val` varchar(32) DEFAULT NULL,
  `pv1_2_actual_val` varchar(32) DEFAULT NULL,
  `pv1_2_pass` varchar(32) DEFAULT NULL,
  `pv1_2_comments` varchar(64) DEFAULT NULL,
  `pv1_2_signoff` varchar(32) DEFAULT NULL,
  `pv1_3_iscv_val` varchar(32) DEFAULT NULL,
  `pv1_3_hl7_parsing` varchar(32) DEFAULT NULL,
  `pv1_3_expected_val` varchar(32) DEFAULT NULL,
  `pv1_3_actual_val` varchar(32) DEFAULT NULL,
  `pv1_3_pass` varchar(32) DEFAULT NULL,
  `pv1_3_comments` varchar(64) DEFAULT NULL,
  `pv1_3_signoff` varchar(32) DEFAULT NULL,
  `pv1_8_iscv_val` varchar(32) DEFAULT NULL,
  `pv1_8_hl7_parsing` varchar(32) DEFAULT NULL,
  `pv1_8_expected_val` varchar(32) DEFAULT NULL,
  `pv1_8_actual_val` varchar(32) DEFAULT NULL,
  `pv1_8_pass` varchar(32) DEFAULT NULL,
  `pv1_8_comments` varchar(64) DEFAULT NULL,
  `pv1_8_signoff` varchar(32) DEFAULT NULL,
  `pv1_8_1_iscv_val` varchar(32) DEFAULT NULL,
  `pv1_8_1_hl7_parsing` varchar(32) DEFAULT NULL,
  `pv1_8_1_expected_val` varchar(32) DEFAULT NULL,
  `pv1_8_1_actual_val` varchar(32) DEFAULT NULL,
  `pv1_8_1_pass` varchar(32) DEFAULT NULL,
  `pv1_8_1_comments` varchar(64) DEFAULT NULL,
  `pv1_8_1_signoff` varchar(32) DEFAULT NULL,
  `pv1_8_2_iscv_val` varchar(32) DEFAULT NULL,
  `pv1_8_2_hl7_parsing` varchar(32) DEFAULT NULL,
  `pv1_8_2_expected_val` varchar(32) DEFAULT NULL,
  `pv1_8_2_actual_val` varchar(32) DEFAULT NULL,
  `pv1_8_2_pass` varchar(32) DEFAULT NULL,
  `pv1_8_2_comments` varchar(64) DEFAULT NULL,
  `pv1_8_2_signoff` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section10_testplan_resultpdf_pv1`
--

INSERT INTO `section10_testplan_resultpdf_pv1` (`row_counter`, `sec_sign`, `pv1_2_iscv_val`, `pv1_2_hl7_parsing`, `pv1_2_expected_val`, `pv1_2_actual_val`, `pv1_2_pass`, `pv1_2_comments`, `pv1_2_signoff`, `pv1_3_iscv_val`, `pv1_3_hl7_parsing`, `pv1_3_expected_val`, `pv1_3_actual_val`, `pv1_3_pass`, `pv1_3_comments`, `pv1_3_signoff`, `pv1_8_iscv_val`, `pv1_8_hl7_parsing`, `pv1_8_expected_val`, `pv1_8_actual_val`, `pv1_8_pass`, `pv1_8_comments`, `pv1_8_signoff`, `pv1_8_1_iscv_val`, `pv1_8_1_hl7_parsing`, `pv1_8_1_expected_val`, `pv1_8_1_actual_val`, `pv1_8_1_pass`, `pv1_8_1_comments`, `pv1_8_1_signoff`, `pv1_8_2_iscv_val`, `pv1_8_2_hl7_parsing`, `pv1_8_2_expected_val`, `pv1_8_2_actual_val`, `pv1_8_2_pass`, `pv1_8_2_comments`, `pv1_8_2_signoff`) VALUES
(1, '5c888f5571939', 'ada', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `section10_testplan_resultpdf_zds`
--

CREATE TABLE `section10_testplan_resultpdf_zds` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `zds_1_iscv_val` varchar(32) DEFAULT NULL,
  `zds_1_hl7_parsing` varchar(32) DEFAULT NULL,
  `zds_1_expected_val` varchar(32) DEFAULT NULL,
  `zds_1_actual_val` varchar(32) DEFAULT NULL,
  `zds_1_pass` varchar(32) DEFAULT NULL,
  `zds_1_comments` varchar(64) DEFAULT NULL,
  `zds_1_signoff` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section10_testplan_resultpdf_zds`
--

INSERT INTO `section10_testplan_resultpdf_zds` (`row_counter`, `sec_sign`, `zds_1_iscv_val`, `zds_1_hl7_parsing`, `zds_1_expected_val`, `zds_1_actual_val`, `zds_1_pass`, `zds_1_comments`, `zds_1_signoff`) VALUES
(15, '5c888f5571939', '', '', '', '', '', 'zds_1_comments', 'zds_1_signoff');

-- --------------------------------------------------------

--
-- Table structure for table `section10_testplan_resultstext`
--

CREATE TABLE `section10_testplan_resultstext` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `oru_date` varchar(32) DEFAULT NULL,
  `oru_pass` varchar(32) DEFAULT NULL,
  `oru_expected_val` varchar(32) DEFAULT NULL,
  `oru_actual_val` varchar(32) DEFAULT NULL,
  `oru_comments` varchar(64) DEFAULT NULL,
  `oru_signoff` varchar(32) DEFAULT NULL,
  `oru_amended_date` varchar(32) DEFAULT NULL,
  `oru_amended_pass` varchar(32) DEFAULT NULL,
  `oru_amended_expected_val` varchar(32) DEFAULT NULL,
  `oru_amended_actual_val` varchar(32) DEFAULT NULL,
  `oru_amended_comments` varchar(64) DEFAULT NULL,
  `oru_amended_signoff` varchar(32) DEFAULT NULL,
  `oru_amended2_date` varchar(32) DEFAULT NULL,
  `oru_amended2_pass` varchar(32) DEFAULT NULL,
  `oru_amended2_expected_val` varchar(32) DEFAULT NULL,
  `oru_amended2_actual_val` varchar(32) DEFAULT NULL,
  `oru_amended2_comments` varchar(64) DEFAULT NULL,
  `oru_amended2_signoff` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section10_testplan_resultstext`
--

INSERT INTO `section10_testplan_resultstext` (`row_counter`, `sec_sign`, `oru_date`, `oru_pass`, `oru_expected_val`, `oru_actual_val`, `oru_comments`, `oru_signoff`, `oru_amended_date`, `oru_amended_pass`, `oru_amended_expected_val`, `oru_amended_actual_val`, `oru_amended_comments`, `oru_amended_signoff`, `oru_amended2_date`, `oru_amended2_pass`, `oru_amended2_expected_val`, `oru_amended2_actual_val`, `oru_amended2_comments`, `oru_amended2_signoff`) VALUES
(1, '5c888f5571939', 'vvcv', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(2, '5c888f5571939', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(3, '5c888f5571939', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(4, '5c888f5571939', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(5, '5c888f5571939', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(6, '5c888f5571939', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(7, '5c888f5571939', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `section10_testplan_resultstext_msh`
--

CREATE TABLE `section10_testplan_resultstext_msh` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `msh_1_iscv_val` varchar(32) DEFAULT NULL,
  `msh_1_hl7_parsing` varchar(32) DEFAULT NULL,
  `msh_1_expected_val` varchar(32) DEFAULT NULL,
  `msh_1_actual_val` varchar(32) DEFAULT NULL,
  `msh_1_pass` varchar(32) DEFAULT NULL,
  `msh_1_comments` varchar(64) DEFAULT NULL,
  `msh_1_signoff` varchar(32) DEFAULT NULL,
  `msh_2_iscv_val` varchar(32) DEFAULT NULL,
  `msh_2_hl7_parsing` varchar(32) DEFAULT NULL,
  `msh_2_expected_val` varchar(32) DEFAULT NULL,
  `msh_2_actual_val` varchar(32) DEFAULT NULL,
  `msh_2_pass` varchar(32) DEFAULT NULL,
  `msh_2_comments` varchar(64) DEFAULT NULL,
  `msh_2_signoff` varchar(32) DEFAULT NULL,
  `msh_3_iscv_val` varchar(32) DEFAULT NULL,
  `msh_3_hl7_parsing` varchar(32) DEFAULT NULL,
  `msh_3_expected_val` varchar(32) DEFAULT NULL,
  `msh_3_actual_val` varchar(32) DEFAULT NULL,
  `msh_3_pass` varchar(32) DEFAULT NULL,
  `msh_3_comments` varchar(64) DEFAULT NULL,
  `msh_3_signoff` varchar(32) DEFAULT NULL,
  `msh_4_iscv_val` varchar(32) DEFAULT NULL,
  `msh_4_hl7_parsing` varchar(32) DEFAULT NULL,
  `msh_4_expected_val` varchar(32) DEFAULT NULL,
  `msh_4_actual_val` varchar(32) DEFAULT NULL,
  `msh_4_pass` varchar(32) DEFAULT NULL,
  `msh_4_comments` varchar(64) DEFAULT NULL,
  `msh_4_signoff` varchar(32) DEFAULT NULL,
  `msh_5_iscv_val` varchar(32) DEFAULT NULL,
  `msh_5_hl7_parsing` varchar(32) DEFAULT NULL,
  `msh_5_expected_val` varchar(32) DEFAULT NULL,
  `msh_5_actual_val` varchar(32) DEFAULT NULL,
  `msh_5_pass` varchar(32) DEFAULT NULL,
  `msh_5_comments` varchar(64) DEFAULT NULL,
  `msh_5_signoff` varchar(32) DEFAULT NULL,
  `msh_6_iscv_val` varchar(32) DEFAULT NULL,
  `msh_6_hl7_parsing` varchar(32) DEFAULT NULL,
  `msh_6_expected_val` varchar(32) DEFAULT NULL,
  `msh_6_actual_val` varchar(32) DEFAULT NULL,
  `msh_6_pass` varchar(32) DEFAULT NULL,
  `msh_6_comments` varchar(64) DEFAULT NULL,
  `msh_6_signoff` varchar(32) DEFAULT NULL,
  `msh_7_iscv_val` varchar(32) DEFAULT NULL,
  `msh_7_hl7_parsing` varchar(32) DEFAULT NULL,
  `msh_7_expected_val` varchar(32) DEFAULT NULL,
  `msh_7_actual_val` varchar(32) DEFAULT NULL,
  `msh_7_pass` varchar(32) DEFAULT NULL,
  `msh_7_comments` varchar(64) DEFAULT NULL,
  `msh_7_signoff` varchar(32) DEFAULT NULL,
  `msh_9_iscv_val` varchar(32) DEFAULT NULL,
  `msh_9_hl7_parsing` varchar(32) DEFAULT NULL,
  `msh_9_expected_val` varchar(32) DEFAULT NULL,
  `msh_9_actual_val` varchar(32) DEFAULT NULL,
  `msh_9_pass` varchar(32) DEFAULT NULL,
  `msh_9_comments` varchar(64) DEFAULT NULL,
  `msh_9_signoff` varchar(32) DEFAULT NULL,
  `msh_9_1_iscv_val` varchar(32) DEFAULT NULL,
  `msh_9_1_hl7_parsing` varchar(32) DEFAULT NULL,
  `msh_9_1_expected_val` varchar(32) DEFAULT NULL,
  `msh_9_1_actual_val` varchar(32) DEFAULT NULL,
  `msh_9_1_pass` varchar(32) DEFAULT NULL,
  `msh_9_1_comments` varchar(64) DEFAULT NULL,
  `msh_9_1_signoff` varchar(32) DEFAULT NULL,
  `msh_9_2_iscv_val` varchar(32) DEFAULT NULL,
  `msh_9_2_hl7_parsing` varchar(32) DEFAULT NULL,
  `msh_9_2_expected_val` varchar(32) DEFAULT NULL,
  `msh_9_2_actual_val` varchar(32) DEFAULT NULL,
  `msh_9_2_pass` varchar(32) DEFAULT NULL,
  `msh_9_2_comments` varchar(64) DEFAULT NULL,
  `msh_9_2_signoff` varchar(32) DEFAULT NULL,
  `msh_10_iscv_val` varchar(32) DEFAULT NULL,
  `msh_10_hl7_parsing` varchar(32) DEFAULT NULL,
  `msh_10_expected_val` varchar(32) DEFAULT NULL,
  `msh_10_actual_val` varchar(32) DEFAULT NULL,
  `msh_10_pass` varchar(32) DEFAULT NULL,
  `msh_10_comments` varchar(64) DEFAULT NULL,
  `msh_10_signoff` varchar(32) DEFAULT NULL,
  `msh_11_iscv_val` varchar(32) DEFAULT NULL,
  `msh_11_hl7_parsing` varchar(32) DEFAULT NULL,
  `msh_11_expected_val` varchar(32) DEFAULT NULL,
  `msh_11_actual_val` varchar(32) DEFAULT NULL,
  `msh_11_pass` varchar(32) DEFAULT NULL,
  `msh_11_comments` varchar(64) DEFAULT NULL,
  `msh_11_signoff` varchar(32) DEFAULT NULL,
  `msh_12_iscv_val` varchar(32) DEFAULT NULL,
  `msh_12_hl7_parsing` varchar(32) DEFAULT NULL,
  `msh_12_expected_val` varchar(32) DEFAULT NULL,
  `msh_12_actual_val` varchar(32) DEFAULT NULL,
  `msh_12_pass` varchar(32) DEFAULT NULL,
  `msh_12_comments` varchar(64) DEFAULT NULL,
  `msh_12_signoff` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section10_testplan_resultstext_msh`
--

INSERT INTO `section10_testplan_resultstext_msh` (`row_counter`, `sec_sign`, `msh_1_iscv_val`, `msh_1_hl7_parsing`, `msh_1_expected_val`, `msh_1_actual_val`, `msh_1_pass`, `msh_1_comments`, `msh_1_signoff`, `msh_2_iscv_val`, `msh_2_hl7_parsing`, `msh_2_expected_val`, `msh_2_actual_val`, `msh_2_pass`, `msh_2_comments`, `msh_2_signoff`, `msh_3_iscv_val`, `msh_3_hl7_parsing`, `msh_3_expected_val`, `msh_3_actual_val`, `msh_3_pass`, `msh_3_comments`, `msh_3_signoff`, `msh_4_iscv_val`, `msh_4_hl7_parsing`, `msh_4_expected_val`, `msh_4_actual_val`, `msh_4_pass`, `msh_4_comments`, `msh_4_signoff`, `msh_5_iscv_val`, `msh_5_hl7_parsing`, `msh_5_expected_val`, `msh_5_actual_val`, `msh_5_pass`, `msh_5_comments`, `msh_5_signoff`, `msh_6_iscv_val`, `msh_6_hl7_parsing`, `msh_6_expected_val`, `msh_6_actual_val`, `msh_6_pass`, `msh_6_comments`, `msh_6_signoff`, `msh_7_iscv_val`, `msh_7_hl7_parsing`, `msh_7_expected_val`, `msh_7_actual_val`, `msh_7_pass`, `msh_7_comments`, `msh_7_signoff`, `msh_9_iscv_val`, `msh_9_hl7_parsing`, `msh_9_expected_val`, `msh_9_actual_val`, `msh_9_pass`, `msh_9_comments`, `msh_9_signoff`, `msh_9_1_iscv_val`, `msh_9_1_hl7_parsing`, `msh_9_1_expected_val`, `msh_9_1_actual_val`, `msh_9_1_pass`, `msh_9_1_comments`, `msh_9_1_signoff`, `msh_9_2_iscv_val`, `msh_9_2_hl7_parsing`, `msh_9_2_expected_val`, `msh_9_2_actual_val`, `msh_9_2_pass`, `msh_9_2_comments`, `msh_9_2_signoff`, `msh_10_iscv_val`, `msh_10_hl7_parsing`, `msh_10_expected_val`, `msh_10_actual_val`, `msh_10_pass`, `msh_10_comments`, `msh_10_signoff`, `msh_11_iscv_val`, `msh_11_hl7_parsing`, `msh_11_expected_val`, `msh_11_actual_val`, `msh_11_pass`, `msh_11_comments`, `msh_11_signoff`, `msh_12_iscv_val`, `msh_12_hl7_parsing`, `msh_12_expected_val`, `msh_12_actual_val`, `msh_12_pass`, `msh_12_comments`, `msh_12_signoff`) VALUES
(8, '5c888f5571939', 'tuygu', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `section10_testplan_resultstext_obr`
--

CREATE TABLE `section10_testplan_resultstext_obr` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `obr_1_iscv_val` varchar(32) DEFAULT NULL,
  `obr_1_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_1_expected_val` varchar(32) DEFAULT NULL,
  `obr_1_actual_val` varchar(32) DEFAULT NULL,
  `obr_1_pass` varchar(32) DEFAULT NULL,
  `obr_1_comments` varchar(64) DEFAULT NULL,
  `obr_1_signoff` varchar(32) DEFAULT NULL,
  `obr_2_iscv_val` varchar(32) DEFAULT NULL,
  `obr_2_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_2_expected_val` varchar(32) DEFAULT NULL,
  `obr_2_actual_val` varchar(32) DEFAULT NULL,
  `obr_2_pass` varchar(32) DEFAULT NULL,
  `obr_2_comments` varchar(64) DEFAULT NULL,
  `obr_2_signoff` varchar(32) DEFAULT NULL,
  `obr_3_iscv_val` varchar(32) DEFAULT NULL,
  `obr_3_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_3_expected_val` varchar(32) DEFAULT NULL,
  `obr_3_actual_val` varchar(32) DEFAULT NULL,
  `obr_3_pass` varchar(32) DEFAULT NULL,
  `obr_3_comments` varchar(64) DEFAULT NULL,
  `obr_3_signoff` varchar(32) DEFAULT NULL,
  `obr_4_iscv_val` varchar(32) DEFAULT NULL,
  `obr_4_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_4_expected_val` varchar(32) DEFAULT NULL,
  `obr_4_actual_val` varchar(32) DEFAULT NULL,
  `obr_4_pass` varchar(32) DEFAULT NULL,
  `obr_4_comments` varchar(64) DEFAULT NULL,
  `obr_4_signoff` varchar(32) DEFAULT NULL,
  `obr_4_1_iscv_val` varchar(32) DEFAULT NULL,
  `obr_4_1_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_4_1_expected_val` varchar(32) DEFAULT NULL,
  `obr_4_1_actual_val` varchar(32) DEFAULT NULL,
  `obr_4_1_pass` varchar(32) DEFAULT NULL,
  `obr_4_1_comments` varchar(64) DEFAULT NULL,
  `obr_4_1_signoff` varchar(32) DEFAULT NULL,
  `obr_4_2_iscv_val` varchar(32) DEFAULT NULL,
  `obr_4_2_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_4_2_expected_val` varchar(32) DEFAULT NULL,
  `obr_4_2_actual_val` varchar(32) DEFAULT NULL,
  `obr_4_2_pass` varchar(32) DEFAULT NULL,
  `obr_4_2_comments` varchar(64) DEFAULT NULL,
  `obr_4_2_signoff` varchar(32) DEFAULT NULL,
  `obr_7_iscv_val` varchar(32) DEFAULT NULL,
  `obr_7_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_7_expected_val` varchar(32) DEFAULT NULL,
  `obr_7_actual_val` varchar(32) DEFAULT NULL,
  `obr_7_pass` varchar(32) DEFAULT NULL,
  `obr_7_comments` varchar(64) DEFAULT NULL,
  `obr_7_signoff` varchar(32) DEFAULT NULL,
  `obr_8_iscv_val` varchar(32) DEFAULT NULL,
  `obr_8_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_8_expected_val` varchar(32) DEFAULT NULL,
  `obr_8_actual_val` varchar(32) DEFAULT NULL,
  `obr_8_pass` varchar(32) DEFAULT NULL,
  `obr_8_comments` varchar(64) DEFAULT NULL,
  `obr_8_signoff` varchar(32) DEFAULT NULL,
  `obr_16_iscv_val` varchar(32) DEFAULT NULL,
  `obr_16_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_16_expected_val` varchar(32) DEFAULT NULL,
  `obr_16_actual_val` varchar(32) DEFAULT NULL,
  `obr_16_pass` varchar(32) DEFAULT NULL,
  `obr_16_comments` varchar(64) DEFAULT NULL,
  `obr_16_signoff` varchar(32) DEFAULT NULL,
  `obr_18_iscv_val` varchar(32) DEFAULT NULL,
  `obr_18_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_18_expected_val` varchar(32) DEFAULT NULL,
  `obr_18_actual_val` varchar(32) DEFAULT NULL,
  `obr_18_pass` varchar(32) DEFAULT NULL,
  `obr_18_comments` varchar(64) DEFAULT NULL,
  `obr_18_signoff` varchar(32) DEFAULT NULL,
  `obr_20_iscv_val` varchar(32) DEFAULT NULL,
  `obr_20_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_20_expected_val` varchar(32) DEFAULT NULL,
  `obr_20_actual_val` varchar(32) DEFAULT NULL,
  `obr_20_pass` varchar(32) DEFAULT NULL,
  `obr_20_comments` varchar(64) DEFAULT NULL,
  `obr_20_signoff` varchar(32) DEFAULT NULL,
  `obr_22_iscv_val` varchar(32) DEFAULT NULL,
  `obr_22_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_22_expected_val` varchar(32) DEFAULT NULL,
  `obr_22_actual_val` varchar(32) DEFAULT NULL,
  `obr_22_pass` varchar(32) DEFAULT NULL,
  `obr_22_comments` varchar(64) DEFAULT NULL,
  `obr_22_signoff` varchar(32) DEFAULT NULL,
  `obr_24_iscv_val` varchar(32) DEFAULT NULL,
  `obr_24_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_24_expected_val` varchar(32) DEFAULT NULL,
  `obr_24_actual_val` varchar(32) DEFAULT NULL,
  `obr_24_pass` varchar(32) DEFAULT NULL,
  `obr_24_comments` varchar(64) DEFAULT NULL,
  `obr_24_signoff` varchar(32) DEFAULT NULL,
  `obr_25_iscv_val` varchar(32) DEFAULT NULL,
  `obr_25_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_25_expected_val` varchar(32) DEFAULT NULL,
  `obr_25_actual_val` varchar(32) DEFAULT NULL,
  `obr_25_pass` varchar(32) DEFAULT NULL,
  `obr_25_comments` varchar(64) DEFAULT NULL,
  `obr_25_signoff` varchar(32) DEFAULT NULL,
  `obr_31_iscv_val` varchar(32) DEFAULT NULL,
  `obr_31_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_31_expected_val` varchar(32) DEFAULT NULL,
  `obr_31_actual_val` varchar(32) DEFAULT NULL,
  `obr_31_pass` varchar(32) DEFAULT NULL,
  `obr_31_comments` varchar(64) DEFAULT NULL,
  `obr_31_signoff` varchar(32) DEFAULT NULL,
  `obr_32_iscv_val` varchar(32) DEFAULT NULL,
  `obr_32_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_32_expected_val` varchar(32) DEFAULT NULL,
  `obr_32_actual_val` varchar(32) DEFAULT NULL,
  `obr_32_pass` varchar(32) DEFAULT NULL,
  `obr_32_comments` varchar(64) DEFAULT NULL,
  `obr_32_signoff` varchar(32) DEFAULT NULL,
  `obr_32_1_1_iscv_val` varchar(32) DEFAULT NULL,
  `obr_32_1_1_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_32_1_1_expected_val` varchar(32) DEFAULT NULL,
  `obr_32_1_1_actual_val` varchar(32) DEFAULT NULL,
  `obr_32_1_1_pass` varchar(32) DEFAULT NULL,
  `obr_32_1_1_comments` varchar(64) DEFAULT NULL,
  `obr_32_1_1_signoff` varchar(32) DEFAULT NULL,
  `obr_32_1_2_iscv_val` varchar(32) DEFAULT NULL,
  `obr_32_1_2_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_32_1_2_expected_val` varchar(32) DEFAULT NULL,
  `obr_32_1_2_actual_val` varchar(32) DEFAULT NULL,
  `obr_32_1_2_pass` varchar(32) DEFAULT NULL,
  `obr_32_1_2_comments` varchar(64) DEFAULT NULL,
  `obr_32_1_2_signoff` varchar(32) DEFAULT NULL,
  `obr_32_1_3_iscv_val` varchar(32) DEFAULT NULL,
  `obr_32_1_3_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_32_1_3_expected_val` varchar(32) DEFAULT NULL,
  `obr_32_1_3_actual_val` varchar(32) DEFAULT NULL,
  `obr_32_1_3_pass` varchar(32) DEFAULT NULL,
  `obr_32_1_3_comments` varchar(64) DEFAULT NULL,
  `obr_32_1_3_signoff` varchar(32) DEFAULT NULL,
  `obr_32_1_4_iscv_val` varchar(32) DEFAULT NULL,
  `obr_32_1_4_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_32_1_4_expected_val` varchar(32) DEFAULT NULL,
  `obr_32_1_4_actual_val` varchar(32) DEFAULT NULL,
  `obr_32_1_4_pass` varchar(32) DEFAULT NULL,
  `obr_32_1_4_comments` varchar(64) DEFAULT NULL,
  `obr_32_1_4_signoff` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section10_testplan_resultstext_obr`
--

INSERT INTO `section10_testplan_resultstext_obr` (`row_counter`, `sec_sign`, `obr_1_iscv_val`, `obr_1_hl7_parsing`, `obr_1_expected_val`, `obr_1_actual_val`, `obr_1_pass`, `obr_1_comments`, `obr_1_signoff`, `obr_2_iscv_val`, `obr_2_hl7_parsing`, `obr_2_expected_val`, `obr_2_actual_val`, `obr_2_pass`, `obr_2_comments`, `obr_2_signoff`, `obr_3_iscv_val`, `obr_3_hl7_parsing`, `obr_3_expected_val`, `obr_3_actual_val`, `obr_3_pass`, `obr_3_comments`, `obr_3_signoff`, `obr_4_iscv_val`, `obr_4_hl7_parsing`, `obr_4_expected_val`, `obr_4_actual_val`, `obr_4_pass`, `obr_4_comments`, `obr_4_signoff`, `obr_4_1_iscv_val`, `obr_4_1_hl7_parsing`, `obr_4_1_expected_val`, `obr_4_1_actual_val`, `obr_4_1_pass`, `obr_4_1_comments`, `obr_4_1_signoff`, `obr_4_2_iscv_val`, `obr_4_2_hl7_parsing`, `obr_4_2_expected_val`, `obr_4_2_actual_val`, `obr_4_2_pass`, `obr_4_2_comments`, `obr_4_2_signoff`, `obr_7_iscv_val`, `obr_7_hl7_parsing`, `obr_7_expected_val`, `obr_7_actual_val`, `obr_7_pass`, `obr_7_comments`, `obr_7_signoff`, `obr_8_iscv_val`, `obr_8_hl7_parsing`, `obr_8_expected_val`, `obr_8_actual_val`, `obr_8_pass`, `obr_8_comments`, `obr_8_signoff`, `obr_16_iscv_val`, `obr_16_hl7_parsing`, `obr_16_expected_val`, `obr_16_actual_val`, `obr_16_pass`, `obr_16_comments`, `obr_16_signoff`, `obr_18_iscv_val`, `obr_18_hl7_parsing`, `obr_18_expected_val`, `obr_18_actual_val`, `obr_18_pass`, `obr_18_comments`, `obr_18_signoff`, `obr_20_iscv_val`, `obr_20_hl7_parsing`, `obr_20_expected_val`, `obr_20_actual_val`, `obr_20_pass`, `obr_20_comments`, `obr_20_signoff`, `obr_22_iscv_val`, `obr_22_hl7_parsing`, `obr_22_expected_val`, `obr_22_actual_val`, `obr_22_pass`, `obr_22_comments`, `obr_22_signoff`, `obr_24_iscv_val`, `obr_24_hl7_parsing`, `obr_24_expected_val`, `obr_24_actual_val`, `obr_24_pass`, `obr_24_comments`, `obr_24_signoff`, `obr_25_iscv_val`, `obr_25_hl7_parsing`, `obr_25_expected_val`, `obr_25_actual_val`, `obr_25_pass`, `obr_25_comments`, `obr_25_signoff`, `obr_31_iscv_val`, `obr_31_hl7_parsing`, `obr_31_expected_val`, `obr_31_actual_val`, `obr_31_pass`, `obr_31_comments`, `obr_31_signoff`, `obr_32_iscv_val`, `obr_32_hl7_parsing`, `obr_32_expected_val`, `obr_32_actual_val`, `obr_32_pass`, `obr_32_comments`, `obr_32_signoff`, `obr_32_1_1_iscv_val`, `obr_32_1_1_hl7_parsing`, `obr_32_1_1_expected_val`, `obr_32_1_1_actual_val`, `obr_32_1_1_pass`, `obr_32_1_1_comments`, `obr_32_1_1_signoff`, `obr_32_1_2_iscv_val`, `obr_32_1_2_hl7_parsing`, `obr_32_1_2_expected_val`, `obr_32_1_2_actual_val`, `obr_32_1_2_pass`, `obr_32_1_2_comments`, `obr_32_1_2_signoff`, `obr_32_1_3_iscv_val`, `obr_32_1_3_hl7_parsing`, `obr_32_1_3_expected_val`, `obr_32_1_3_actual_val`, `obr_32_1_3_pass`, `obr_32_1_3_comments`, `obr_32_1_3_signoff`, `obr_32_1_4_iscv_val`, `obr_32_1_4_hl7_parsing`, `obr_32_1_4_expected_val`, `obr_32_1_4_actual_val`, `obr_32_1_4_pass`, `obr_32_1_4_comments`, `obr_32_1_4_signoff`) VALUES
(5, '5c888f5571939', '', '', '', '', '', 'obr_1_comments', '', '', '', '', '', '', 'obr_2_comments', '', '', '', '', '', '', 'obr_3_comments', '', '', '', '', '', '', 'obr_4_comments', '', '', '', '', '', '', 'obr_4_1_comments', '', '', '', '', '', '', 'obr_4_2_comments', '', '', '', '', '', '', 'obr_7_comments', '', '', '', '', '', '', 'obr_8_comments', '', '', '', '', '', '', 'obr_16_comments', '', '', '', '', '', '', 'obr_18_comments', '', '', '', '', '', '', 'obr_20_comments', '', '', '', '', '', '', 'obr_22_comments', '', '', '', '', '', '', 'obr_24_comments', '', '', '', '', '', '', 'obr_25_comments', '', '', '', '', '', '', 'obr_31_comments', '', '', '', '', '', '', 'obr_32_comments', '', '', '', '', '', '', 'obr_32_1_1_comments', '', '', '', '', '', '', 'obr_32_1_2_comments', '', '', '', '', '', '', 'obr_32_1_3_comments', '', '', '', '', '', '', 'obr_32_1_4_comments', '');

-- --------------------------------------------------------

--
-- Table structure for table `section10_testplan_resultstext_obx`
--

CREATE TABLE `section10_testplan_resultstext_obx` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `obx_1_iscv_val` varchar(32) DEFAULT NULL,
  `obx_1_hl7_parsing` varchar(32) DEFAULT NULL,
  `obx_1_expected_val` varchar(32) DEFAULT NULL,
  `obx_1_actual_val` varchar(32) DEFAULT NULL,
  `obx_1_pass` varchar(32) DEFAULT NULL,
  `obx_1_comments` varchar(64) DEFAULT NULL,
  `obx_1_signoff` varchar(32) DEFAULT NULL,
  `obx_2_iscv_val` varchar(32) DEFAULT NULL,
  `obx_2_hl7_parsing` varchar(32) DEFAULT NULL,
  `obx_2_expected_val` varchar(32) DEFAULT NULL,
  `obx_2_actual_val` varchar(32) DEFAULT NULL,
  `obx_2_pass` varchar(32) DEFAULT NULL,
  `obx_2_comments` varchar(64) DEFAULT NULL,
  `obx_2_signoff` varchar(32) DEFAULT NULL,
  `obx_3_iscv_val` varchar(32) DEFAULT NULL,
  `obx_3_hl7_parsing` varchar(32) DEFAULT NULL,
  `obx_3_expected_val` varchar(32) DEFAULT NULL,
  `obx_3_actual_val` varchar(32) DEFAULT NULL,
  `obx_3_pass` varchar(32) DEFAULT NULL,
  `obx_3_comments` varchar(64) DEFAULT NULL,
  `obx_3_signoff` varchar(32) DEFAULT NULL,
  `obx_3_1_iscv_val` varchar(32) DEFAULT NULL,
  `obx_3_1_hl7_parsing` varchar(32) DEFAULT NULL,
  `obx_3_1_expected_val` varchar(32) DEFAULT NULL,
  `obx_3_1_actual_val` varchar(32) DEFAULT NULL,
  `obx_3_1_pass` varchar(32) DEFAULT NULL,
  `obx_3_1_comments` varchar(64) DEFAULT NULL,
  `obx_3_1_signoff` varchar(32) DEFAULT NULL,
  `obx_3_2_iscv_val` varchar(32) DEFAULT NULL,
  `obx_3_2_hl7_parsing` varchar(32) DEFAULT NULL,
  `obx_3_2_expected_val` varchar(32) DEFAULT NULL,
  `obx_3_2_actual_val` varchar(32) DEFAULT NULL,
  `obx_3_2_pass` varchar(32) DEFAULT NULL,
  `obx_3_2_comments` varchar(64) DEFAULT NULL,
  `obx_3_2_signoff` varchar(32) DEFAULT NULL,
  `obx_4_iscv_val` varchar(32) DEFAULT NULL,
  `obx_4_hl7_parsing` varchar(32) DEFAULT NULL,
  `obx_4_expected_val` varchar(32) DEFAULT NULL,
  `obx_4_actual_val` varchar(32) DEFAULT NULL,
  `obx_4_pass` varchar(32) DEFAULT NULL,
  `obx_4_comments` varchar(64) DEFAULT NULL,
  `obx_4_signoff` varchar(32) DEFAULT NULL,
  `obx_5_iscv_val` varchar(32) DEFAULT NULL,
  `obx_5_hl7_parsing` varchar(32) DEFAULT NULL,
  `obx_5_expected_val` varchar(32) DEFAULT NULL,
  `obx_5_actual_val` varchar(32) DEFAULT NULL,
  `obx_5_pass` varchar(32) DEFAULT NULL,
  `obx_5_comments` varchar(64) DEFAULT NULL,
  `obx_5_signoff` varchar(32) DEFAULT NULL,
  `obx_11_iscv_val` varchar(32) DEFAULT NULL,
  `obx_11_hl7_parsing` varchar(32) DEFAULT NULL,
  `obx_11_expected_val` varchar(32) DEFAULT NULL,
  `obx_11_actual_val` varchar(32) DEFAULT NULL,
  `obx_11_pass` varchar(32) DEFAULT NULL,
  `obx_11_comments` varchar(64) DEFAULT NULL,
  `obx_11_signoff` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section10_testplan_resultstext_obx`
--

INSERT INTO `section10_testplan_resultstext_obx` (`row_counter`, `sec_sign`, `obx_1_iscv_val`, `obx_1_hl7_parsing`, `obx_1_expected_val`, `obx_1_actual_val`, `obx_1_pass`, `obx_1_comments`, `obx_1_signoff`, `obx_2_iscv_val`, `obx_2_hl7_parsing`, `obx_2_expected_val`, `obx_2_actual_val`, `obx_2_pass`, `obx_2_comments`, `obx_2_signoff`, `obx_3_iscv_val`, `obx_3_hl7_parsing`, `obx_3_expected_val`, `obx_3_actual_val`, `obx_3_pass`, `obx_3_comments`, `obx_3_signoff`, `obx_3_1_iscv_val`, `obx_3_1_hl7_parsing`, `obx_3_1_expected_val`, `obx_3_1_actual_val`, `obx_3_1_pass`, `obx_3_1_comments`, `obx_3_1_signoff`, `obx_3_2_iscv_val`, `obx_3_2_hl7_parsing`, `obx_3_2_expected_val`, `obx_3_2_actual_val`, `obx_3_2_pass`, `obx_3_2_comments`, `obx_3_2_signoff`, `obx_4_iscv_val`, `obx_4_hl7_parsing`, `obx_4_expected_val`, `obx_4_actual_val`, `obx_4_pass`, `obx_4_comments`, `obx_4_signoff`, `obx_5_iscv_val`, `obx_5_hl7_parsing`, `obx_5_expected_val`, `obx_5_actual_val`, `obx_5_pass`, `obx_5_comments`, `obx_5_signoff`, `obx_11_iscv_val`, `obx_11_hl7_parsing`, `obx_11_expected_val`, `obx_11_actual_val`, `obx_11_pass`, `obx_11_comments`, `obx_11_signoff`) VALUES
(9, '5c888f5571939', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `section10_testplan_resultstext_orc`
--

CREATE TABLE `section10_testplan_resultstext_orc` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `orc_1_iscv_val` varchar(32) DEFAULT NULL,
  `orc_1_hl7_parsing` varchar(32) DEFAULT NULL,
  `orc_1_expected_val` varchar(32) DEFAULT NULL,
  `orc_1_actual_val` varchar(32) DEFAULT NULL,
  `orc_1_pass` varchar(32) DEFAULT NULL,
  `orc_1_comments` varchar(64) DEFAULT NULL,
  `orc_1_signoff` varchar(32) DEFAULT NULL,
  `orc_3_iscv_val` varchar(32) DEFAULT NULL,
  `orc_3_hl7_parsing` varchar(32) DEFAULT NULL,
  `orc_3_expected_val` varchar(32) DEFAULT NULL,
  `orc_3_actual_val` varchar(32) DEFAULT NULL,
  `orc_3_pass` varchar(32) DEFAULT NULL,
  `orc_3_comments` varchar(64) DEFAULT NULL,
  `orc_3_signoff` varchar(32) DEFAULT NULL,
  `orc_5_iscv_val` varchar(32) DEFAULT NULL,
  `orc_5_hl7_parsing` varchar(32) DEFAULT NULL,
  `orc_5_expected_val` varchar(32) DEFAULT NULL,
  `orc_5_actual_val` varchar(32) DEFAULT NULL,
  `orc_5_pass` varchar(32) DEFAULT NULL,
  `orc_5_comments` varchar(64) DEFAULT NULL,
  `orc_5_signoff` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section10_testplan_resultstext_orc`
--

INSERT INTO `section10_testplan_resultstext_orc` (`row_counter`, `sec_sign`, `orc_1_iscv_val`, `orc_1_hl7_parsing`, `orc_1_expected_val`, `orc_1_actual_val`, `orc_1_pass`, `orc_1_comments`, `orc_1_signoff`, `orc_3_iscv_val`, `orc_3_hl7_parsing`, `orc_3_expected_val`, `orc_3_actual_val`, `orc_3_pass`, `orc_3_comments`, `orc_3_signoff`, `orc_5_iscv_val`, `orc_5_hl7_parsing`, `orc_5_expected_val`, `orc_5_actual_val`, `orc_5_pass`, `orc_5_comments`, `orc_5_signoff`) VALUES
(9, '5c888f5571939', '', '', '', '', '', 'orc_1_comments', '', '', '', '', '', '', 'orc_3_comments', '', '', '', '', '', '', 'orc_5_comments', '');

-- --------------------------------------------------------

--
-- Table structure for table `section10_testplan_resultstext_pid`
--

CREATE TABLE `section10_testplan_resultstext_pid` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `pid_3_iscv_val` varchar(32) DEFAULT NULL,
  `pid_3_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_3_expected_val` varchar(32) DEFAULT NULL,
  `pid_3_actual_val` varchar(32) DEFAULT NULL,
  `pid_3_pass` varchar(32) DEFAULT NULL,
  `pid_3_comments` varchar(64) DEFAULT NULL,
  `pid_3_signoff` varchar(32) DEFAULT NULL,
  `pid_3_1_iscv_val` varchar(32) DEFAULT NULL,
  `pid_3_1_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_3_1_expected_val` varchar(32) DEFAULT NULL,
  `pid_3_1_actual_val` varchar(32) DEFAULT NULL,
  `pid_3_1_pass` varchar(32) DEFAULT NULL,
  `pid_3_1_comments` varchar(64) DEFAULT NULL,
  `pid_3_1_signoff` varchar(32) DEFAULT NULL,
  `pid_3_4_iscv_val` varchar(32) DEFAULT NULL,
  `pid_3_4_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_3_4_expected_val` varchar(32) DEFAULT NULL,
  `pid_3_4_actual_val` varchar(32) DEFAULT NULL,
  `pid_3_4_pass` varchar(32) DEFAULT NULL,
  `pid_3_4_comments` varchar(64) DEFAULT NULL,
  `pid_3_4_signoff` varchar(32) DEFAULT NULL,
  `pid_5_iscv_val` varchar(32) DEFAULT NULL,
  `pid_5_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_5_expected_val` varchar(32) DEFAULT NULL,
  `pid_5_actual_val` varchar(32) DEFAULT NULL,
  `pid_5_pass` varchar(32) DEFAULT NULL,
  `pid_5_comments` varchar(64) DEFAULT NULL,
  `pid_5_signoff` varchar(32) DEFAULT NULL,
  `pid_5_1_iscv_val` varchar(32) DEFAULT NULL,
  `pid_5_1_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_5_1_expected_val` varchar(32) DEFAULT NULL,
  `pid_5_1_actual_val` varchar(32) DEFAULT NULL,
  `pid_5_1_pass` varchar(32) DEFAULT NULL,
  `pid_5_1_comments` varchar(64) DEFAULT NULL,
  `pid_5_1_signoff` varchar(32) DEFAULT NULL,
  `pid_5_2_iscv_val` varchar(32) DEFAULT NULL,
  `pid_5_2_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_5_2_expected_val` varchar(32) DEFAULT NULL,
  `pid_5_2_actual_val` varchar(32) DEFAULT NULL,
  `pid_5_2_pass` varchar(32) DEFAULT NULL,
  `pid_5_2_comments` varchar(64) DEFAULT NULL,
  `pid_5_2_signoff` varchar(32) DEFAULT NULL,
  `pid_5_3_iscv_val` varchar(32) DEFAULT NULL,
  `pid_5_3_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_5_3_expected_val` varchar(32) DEFAULT NULL,
  `pid_5_3_actual_val` varchar(32) DEFAULT NULL,
  `pid_5_3_pass` varchar(32) DEFAULT NULL,
  `pid_5_3_comments` varchar(64) DEFAULT NULL,
  `pid_5_3_signoff` varchar(32) DEFAULT NULL,
  `pid_7_iscv_val` varchar(32) DEFAULT NULL,
  `pid_7_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_7_expected_val` varchar(32) DEFAULT NULL,
  `pid_7_actual_val` varchar(32) DEFAULT NULL,
  `pid_7_pass` varchar(32) DEFAULT NULL,
  `pid_7_comments` varchar(64) DEFAULT NULL,
  `pid_7_signoff` varchar(32) DEFAULT NULL,
  `pid_8_iscv_val` varchar(32) DEFAULT NULL,
  `pid_8_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_8_expected_val` varchar(32) DEFAULT NULL,
  `pid_8_actual_val` varchar(32) DEFAULT NULL,
  `pid_8_pass` varchar(32) DEFAULT NULL,
  `pid_8_comments` varchar(64) DEFAULT NULL,
  `pid_8_signoff` varchar(32) DEFAULT NULL,
  `pid_10_iscv_val` varchar(32) DEFAULT NULL,
  `pid_10_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_10_expected_val` varchar(32) DEFAULT NULL,
  `pid_10_actual_val` varchar(32) DEFAULT NULL,
  `pid_10_pass` varchar(32) DEFAULT NULL,
  `pid_10_comments` varchar(64) DEFAULT NULL,
  `pid_10_signoff` varchar(32) DEFAULT NULL,
  `pid_11_iscv_val` varchar(32) DEFAULT NULL,
  `pid_11_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_11_expected_val` varchar(32) DEFAULT NULL,
  `pid_11_actual_val` varchar(32) DEFAULT NULL,
  `pid_11_pass` varchar(32) DEFAULT NULL,
  `pid_11_comments` varchar(64) DEFAULT NULL,
  `pid_11_signoff` varchar(32) DEFAULT NULL,
  `pid_11_1_iscv_val` varchar(32) DEFAULT NULL,
  `pid_11_1_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_11_1_expected_val` varchar(32) DEFAULT NULL,
  `pid_11_1_actual_val` varchar(32) DEFAULT NULL,
  `pid_11_1_pass` varchar(32) DEFAULT NULL,
  `pid_11_1_comments` varchar(64) DEFAULT NULL,
  `pid_11_1_signoff` varchar(32) DEFAULT NULL,
  `pid_11_2_iscv_val` varchar(32) DEFAULT NULL,
  `pid_11_2_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_11_2_expected_val` varchar(32) DEFAULT NULL,
  `pid_11_2_actual_val` varchar(32) DEFAULT NULL,
  `pid_11_2_pass` varchar(32) DEFAULT NULL,
  `pid_11_2_comments` varchar(64) DEFAULT NULL,
  `pid_11_2_signoff` varchar(32) DEFAULT NULL,
  `pid_11_3_iscv_val` varchar(32) DEFAULT NULL,
  `pid_11_3_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_11_3_expected_val` varchar(32) DEFAULT NULL,
  `pid_11_3_actual_val` varchar(32) DEFAULT NULL,
  `pid_11_3_pass` varchar(32) DEFAULT NULL,
  `pid_11_3_comments` varchar(64) DEFAULT NULL,
  `pid_11_3_signoff` varchar(32) DEFAULT NULL,
  `pid_11_4_iscv_val` varchar(32) DEFAULT NULL,
  `pid_11_4_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_11_4_expected_val` varchar(32) DEFAULT NULL,
  `pid_11_4_actual_val` varchar(32) DEFAULT NULL,
  `pid_11_4_pass` varchar(32) DEFAULT NULL,
  `pid_11_4_comments` varchar(64) DEFAULT NULL,
  `pid_11_4_signoff` varchar(32) DEFAULT NULL,
  `pid_11_5_iscv_val` varchar(32) DEFAULT NULL,
  `pid_11_5_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_11_5_expected_val` varchar(32) DEFAULT NULL,
  `pid_11_5_actual_val` varchar(32) DEFAULT NULL,
  `pid_11_5_pass` varchar(32) DEFAULT NULL,
  `pid_11_5_comments` varchar(64) DEFAULT NULL,
  `pid_11_5_signoff` varchar(32) DEFAULT NULL,
  `pid_13_iscv_val` varchar(32) DEFAULT NULL,
  `pid_13_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_13_expected_val` varchar(32) DEFAULT NULL,
  `pid_13_actual_val` varchar(32) DEFAULT NULL,
  `pid_13_pass` varchar(32) DEFAULT NULL,
  `pid_13_comments` varchar(64) DEFAULT NULL,
  `pid_13_signoff` varchar(32) DEFAULT NULL,
  `pid_14_iscv_val` varchar(32) DEFAULT NULL,
  `pid_14_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_14_expected_val` varchar(32) DEFAULT NULL,
  `pid_14_actual_val` varchar(32) DEFAULT NULL,
  `pid_14_pass` varchar(32) DEFAULT NULL,
  `pid_14_comments` varchar(64) DEFAULT NULL,
  `pid_14_signoff` varchar(32) DEFAULT NULL,
  `pid_18_iscv_val` varchar(32) DEFAULT NULL,
  `pid_18_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_18_expected_val` varchar(32) DEFAULT NULL,
  `pid_18_actual_val` varchar(32) DEFAULT NULL,
  `pid_18_pass` varchar(32) DEFAULT NULL,
  `pid_18_comments` varchar(64) DEFAULT NULL,
  `pid_18_signoff` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section10_testplan_resultstext_pid`
--

INSERT INTO `section10_testplan_resultstext_pid` (`row_counter`, `sec_sign`, `pid_3_iscv_val`, `pid_3_hl7_parsing`, `pid_3_expected_val`, `pid_3_actual_val`, `pid_3_pass`, `pid_3_comments`, `pid_3_signoff`, `pid_3_1_iscv_val`, `pid_3_1_hl7_parsing`, `pid_3_1_expected_val`, `pid_3_1_actual_val`, `pid_3_1_pass`, `pid_3_1_comments`, `pid_3_1_signoff`, `pid_3_4_iscv_val`, `pid_3_4_hl7_parsing`, `pid_3_4_expected_val`, `pid_3_4_actual_val`, `pid_3_4_pass`, `pid_3_4_comments`, `pid_3_4_signoff`, `pid_5_iscv_val`, `pid_5_hl7_parsing`, `pid_5_expected_val`, `pid_5_actual_val`, `pid_5_pass`, `pid_5_comments`, `pid_5_signoff`, `pid_5_1_iscv_val`, `pid_5_1_hl7_parsing`, `pid_5_1_expected_val`, `pid_5_1_actual_val`, `pid_5_1_pass`, `pid_5_1_comments`, `pid_5_1_signoff`, `pid_5_2_iscv_val`, `pid_5_2_hl7_parsing`, `pid_5_2_expected_val`, `pid_5_2_actual_val`, `pid_5_2_pass`, `pid_5_2_comments`, `pid_5_2_signoff`, `pid_5_3_iscv_val`, `pid_5_3_hl7_parsing`, `pid_5_3_expected_val`, `pid_5_3_actual_val`, `pid_5_3_pass`, `pid_5_3_comments`, `pid_5_3_signoff`, `pid_7_iscv_val`, `pid_7_hl7_parsing`, `pid_7_expected_val`, `pid_7_actual_val`, `pid_7_pass`, `pid_7_comments`, `pid_7_signoff`, `pid_8_iscv_val`, `pid_8_hl7_parsing`, `pid_8_expected_val`, `pid_8_actual_val`, `pid_8_pass`, `pid_8_comments`, `pid_8_signoff`, `pid_10_iscv_val`, `pid_10_hl7_parsing`, `pid_10_expected_val`, `pid_10_actual_val`, `pid_10_pass`, `pid_10_comments`, `pid_10_signoff`, `pid_11_iscv_val`, `pid_11_hl7_parsing`, `pid_11_expected_val`, `pid_11_actual_val`, `pid_11_pass`, `pid_11_comments`, `pid_11_signoff`, `pid_11_1_iscv_val`, `pid_11_1_hl7_parsing`, `pid_11_1_expected_val`, `pid_11_1_actual_val`, `pid_11_1_pass`, `pid_11_1_comments`, `pid_11_1_signoff`, `pid_11_2_iscv_val`, `pid_11_2_hl7_parsing`, `pid_11_2_expected_val`, `pid_11_2_actual_val`, `pid_11_2_pass`, `pid_11_2_comments`, `pid_11_2_signoff`, `pid_11_3_iscv_val`, `pid_11_3_hl7_parsing`, `pid_11_3_expected_val`, `pid_11_3_actual_val`, `pid_11_3_pass`, `pid_11_3_comments`, `pid_11_3_signoff`, `pid_11_4_iscv_val`, `pid_11_4_hl7_parsing`, `pid_11_4_expected_val`, `pid_11_4_actual_val`, `pid_11_4_pass`, `pid_11_4_comments`, `pid_11_4_signoff`, `pid_11_5_iscv_val`, `pid_11_5_hl7_parsing`, `pid_11_5_expected_val`, `pid_11_5_actual_val`, `pid_11_5_pass`, `pid_11_5_comments`, `pid_11_5_signoff`, `pid_13_iscv_val`, `pid_13_hl7_parsing`, `pid_13_expected_val`, `pid_13_actual_val`, `pid_13_pass`, `pid_13_comments`, `pid_13_signoff`, `pid_14_iscv_val`, `pid_14_hl7_parsing`, `pid_14_expected_val`, `pid_14_actual_val`, `pid_14_pass`, `pid_14_comments`, `pid_14_signoff`, `pid_18_iscv_val`, `pid_18_hl7_parsing`, `pid_18_expected_val`, `pid_18_actual_val`, `pid_18_pass`, `pid_18_comments`, `pid_18_signoff`) VALUES
(2, '5c888f5571939', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `section10_testplan_resultstext_pv1`
--

CREATE TABLE `section10_testplan_resultstext_pv1` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `pv1_2_iscv_val` varchar(32) DEFAULT NULL,
  `pv1_2_hl7_parsing` varchar(32) DEFAULT NULL,
  `pv1_2_expected_val` varchar(32) DEFAULT NULL,
  `pv1_2_actual_val` varchar(32) DEFAULT NULL,
  `pv1_2_pass` varchar(32) DEFAULT NULL,
  `pv1_2_comments` varchar(64) DEFAULT NULL,
  `pv1_2_signoff` varchar(32) DEFAULT NULL,
  `pv1_3_iscv_val` varchar(32) DEFAULT NULL,
  `pv1_3_hl7_parsing` varchar(32) DEFAULT NULL,
  `pv1_3_expected_val` varchar(32) DEFAULT NULL,
  `pv1_3_actual_val` varchar(32) DEFAULT NULL,
  `pv1_3_pass` varchar(32) DEFAULT NULL,
  `pv1_3_comments` varchar(64) DEFAULT NULL,
  `pv1_3_signoff` varchar(32) DEFAULT NULL,
  `pv1_8_iscv_val` varchar(32) DEFAULT NULL,
  `pv1_8_hl7_parsing` varchar(32) DEFAULT NULL,
  `pv1_8_expected_val` varchar(32) DEFAULT NULL,
  `pv1_8_actual_val` varchar(32) DEFAULT NULL,
  `pv1_8_pass` varchar(32) DEFAULT NULL,
  `pv1_8_comments` varchar(64) DEFAULT NULL,
  `pv1_8_signoff` varchar(32) DEFAULT NULL,
  `pv1_8_1_iscv_val` varchar(32) DEFAULT NULL,
  `pv1_8_1_hl7_parsing` varchar(32) DEFAULT NULL,
  `pv1_8_1_expected_val` varchar(32) DEFAULT NULL,
  `pv1_8_1_actual_val` varchar(32) DEFAULT NULL,
  `pv1_8_1_pass` varchar(32) DEFAULT NULL,
  `pv1_8_1_comments` varchar(64) DEFAULT NULL,
  `pv1_8_1_signoff` varchar(32) DEFAULT NULL,
  `pv1_8_2_iscv_val` varchar(32) DEFAULT NULL,
  `pv1_8_2_hl7_parsing` varchar(32) DEFAULT NULL,
  `pv1_8_2_expected_val` varchar(32) DEFAULT NULL,
  `pv1_8_2_actual_val` varchar(32) DEFAULT NULL,
  `pv1_8_2_pass` varchar(32) DEFAULT NULL,
  `pv1_8_2_comments` varchar(64) DEFAULT NULL,
  `pv1_8_2_signoff` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section10_testplan_resultstext_pv1`
--

INSERT INTO `section10_testplan_resultstext_pv1` (`row_counter`, `sec_sign`, `pv1_2_iscv_val`, `pv1_2_hl7_parsing`, `pv1_2_expected_val`, `pv1_2_actual_val`, `pv1_2_pass`, `pv1_2_comments`, `pv1_2_signoff`, `pv1_3_iscv_val`, `pv1_3_hl7_parsing`, `pv1_3_expected_val`, `pv1_3_actual_val`, `pv1_3_pass`, `pv1_3_comments`, `pv1_3_signoff`, `pv1_8_iscv_val`, `pv1_8_hl7_parsing`, `pv1_8_expected_val`, `pv1_8_actual_val`, `pv1_8_pass`, `pv1_8_comments`, `pv1_8_signoff`, `pv1_8_1_iscv_val`, `pv1_8_1_hl7_parsing`, `pv1_8_1_expected_val`, `pv1_8_1_actual_val`, `pv1_8_1_pass`, `pv1_8_1_comments`, `pv1_8_1_signoff`, `pv1_8_2_iscv_val`, `pv1_8_2_hl7_parsing`, `pv1_8_2_expected_val`, `pv1_8_2_actual_val`, `pv1_8_2_pass`, `pv1_8_2_comments`, `pv1_8_2_signoff`) VALUES
(1, '5c888f5571939', 'dfgfg', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `section10_testplan_resultstext_zds`
--

CREATE TABLE `section10_testplan_resultstext_zds` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `zds_1_iscv_val` varchar(32) DEFAULT NULL,
  `zds_1_hl7_parsing` varchar(32) DEFAULT NULL,
  `zds_1_expected_val` varchar(32) DEFAULT NULL,
  `zds_1_actual_val` varchar(32) DEFAULT NULL,
  `zds_1_pass` varchar(32) DEFAULT NULL,
  `zds_1_comments` varchar(64) DEFAULT NULL,
  `zds_1_signoff` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section10_testplan_resultstext_zds`
--

INSERT INTO `section10_testplan_resultstext_zds` (`row_counter`, `sec_sign`, `zds_1_iscv_val`, `zds_1_hl7_parsing`, `zds_1_expected_val`, `zds_1_actual_val`, `zds_1_pass`, `zds_1_comments`, `zds_1_signoff`) VALUES
(9, '5c888f5571939', '', '', '', '', '', 'zds_1_comments', 'zds_1_signoff');

-- --------------------------------------------------------

--
-- Table structure for table `section10_testplan_resultsutr`
--

CREATE TABLE `section10_testplan_resultsutr` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `oru_date` varchar(32) DEFAULT NULL,
  `oru_pass` varchar(32) DEFAULT NULL,
  `oru_expected_val` varchar(32) DEFAULT NULL,
  `oru_actual_val` varchar(32) DEFAULT NULL,
  `oru_comments` varchar(64) DEFAULT NULL,
  `oru_signoff` varchar(32) DEFAULT NULL,
  `oru_amended_date` varchar(32) DEFAULT NULL,
  `oru_amended_pass` varchar(32) DEFAULT NULL,
  `oru_amended_expected_val` varchar(32) DEFAULT NULL,
  `oru_amended_actual_val` varchar(32) DEFAULT NULL,
  `oru_amended_comments` varchar(64) DEFAULT NULL,
  `oru_amended_signoff` varchar(32) DEFAULT NULL,
  `oru_amended2_date` varchar(32) DEFAULT NULL,
  `oru_amended2_pass` varchar(32) DEFAULT NULL,
  `oru_amended2_expected_val` varchar(32) DEFAULT NULL,
  `oru_amended2_actual_val` varchar(32) DEFAULT NULL,
  `oru_amended2_comments` varchar(64) DEFAULT NULL,
  `oru_amended2_signoff` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section10_testplan_resultsutr`
--

INSERT INTO `section10_testplan_resultsutr` (`row_counter`, `sec_sign`, `oru_date`, `oru_pass`, `oru_expected_val`, `oru_actual_val`, `oru_comments`, `oru_signoff`, `oru_amended_date`, `oru_amended_pass`, `oru_amended_expected_val`, `oru_amended_actual_val`, `oru_amended_comments`, `oru_amended_signoff`, `oru_amended2_date`, `oru_amended2_pass`, `oru_amended2_expected_val`, `oru_amended2_actual_val`, `oru_amended2_comments`, `oru_amended2_signoff`) VALUES
(1, '5c888f5571939', 'qeq', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `section10_testplan_resultsutr_msh`
--

CREATE TABLE `section10_testplan_resultsutr_msh` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `msh_1_iscv_val` varchar(32) DEFAULT NULL,
  `msh_1_hl7_parsing` varchar(32) DEFAULT NULL,
  `msh_1_expected_val` varchar(32) DEFAULT NULL,
  `msh_1_actual_val` varchar(32) DEFAULT NULL,
  `msh_1_pass` varchar(32) DEFAULT NULL,
  `msh_1_comments` varchar(64) DEFAULT NULL,
  `msh_1_signoff` varchar(32) DEFAULT NULL,
  `msh_2_iscv_val` varchar(32) DEFAULT NULL,
  `msh_2_hl7_parsing` varchar(32) DEFAULT NULL,
  `msh_2_expected_val` varchar(32) DEFAULT NULL,
  `msh_2_actual_val` varchar(32) DEFAULT NULL,
  `msh_2_pass` varchar(32) DEFAULT NULL,
  `msh_2_comments` varchar(64) DEFAULT NULL,
  `msh_2_signoff` varchar(32) DEFAULT NULL,
  `msh_3_iscv_val` varchar(32) DEFAULT NULL,
  `msh_3_hl7_parsing` varchar(32) DEFAULT NULL,
  `msh_3_expected_val` varchar(32) DEFAULT NULL,
  `msh_3_actual_val` varchar(32) DEFAULT NULL,
  `msh_3_pass` varchar(32) DEFAULT NULL,
  `msh_3_comments` varchar(64) DEFAULT NULL,
  `msh_3_signoff` varchar(32) DEFAULT NULL,
  `msh_4_iscv_val` varchar(32) DEFAULT NULL,
  `msh_4_hl7_parsing` varchar(32) DEFAULT NULL,
  `msh_4_expected_val` varchar(32) DEFAULT NULL,
  `msh_4_actual_val` varchar(32) DEFAULT NULL,
  `msh_4_pass` varchar(32) DEFAULT NULL,
  `msh_4_comments` varchar(64) DEFAULT NULL,
  `msh_4_signoff` varchar(32) DEFAULT NULL,
  `msh_5_iscv_val` varchar(32) DEFAULT NULL,
  `msh_5_hl7_parsing` varchar(32) DEFAULT NULL,
  `msh_5_expected_val` varchar(32) DEFAULT NULL,
  `msh_5_actual_val` varchar(32) DEFAULT NULL,
  `msh_5_pass` varchar(32) DEFAULT NULL,
  `msh_5_comments` varchar(64) DEFAULT NULL,
  `msh_5_signoff` varchar(32) DEFAULT NULL,
  `msh_6_iscv_val` varchar(32) DEFAULT NULL,
  `msh_6_hl7_parsing` varchar(32) DEFAULT NULL,
  `msh_6_expected_val` varchar(32) DEFAULT NULL,
  `msh_6_actual_val` varchar(32) DEFAULT NULL,
  `msh_6_pass` varchar(32) DEFAULT NULL,
  `msh_6_comments` varchar(64) DEFAULT NULL,
  `msh_6_signoff` varchar(32) DEFAULT NULL,
  `msh_7_iscv_val` varchar(32) DEFAULT NULL,
  `msh_7_hl7_parsing` varchar(32) DEFAULT NULL,
  `msh_7_expected_val` varchar(32) DEFAULT NULL,
  `msh_7_actual_val` varchar(32) DEFAULT NULL,
  `msh_7_pass` varchar(32) DEFAULT NULL,
  `msh_7_comments` varchar(64) DEFAULT NULL,
  `msh_7_signoff` varchar(32) DEFAULT NULL,
  `msh_9_iscv_val` varchar(32) DEFAULT NULL,
  `msh_9_hl7_parsing` varchar(32) DEFAULT NULL,
  `msh_9_expected_val` varchar(32) DEFAULT NULL,
  `msh_9_actual_val` varchar(32) DEFAULT NULL,
  `msh_9_pass` varchar(32) DEFAULT NULL,
  `msh_9_comments` varchar(64) DEFAULT NULL,
  `msh_9_signoff` varchar(32) DEFAULT NULL,
  `msh_9_1_iscv_val` varchar(32) DEFAULT NULL,
  `msh_9_1_hl7_parsing` varchar(32) DEFAULT NULL,
  `msh_9_1_expected_val` varchar(32) DEFAULT NULL,
  `msh_9_1_actual_val` varchar(32) DEFAULT NULL,
  `msh_9_1_pass` varchar(32) DEFAULT NULL,
  `msh_9_1_comments` varchar(64) DEFAULT NULL,
  `msh_9_1_signoff` varchar(32) DEFAULT NULL,
  `msh_9_2_iscv_val` varchar(32) DEFAULT NULL,
  `msh_9_2_hl7_parsing` varchar(32) DEFAULT NULL,
  `msh_9_2_expected_val` varchar(32) DEFAULT NULL,
  `msh_9_2_actual_val` varchar(32) DEFAULT NULL,
  `msh_9_2_pass` varchar(32) DEFAULT NULL,
  `msh_9_2_comments` varchar(64) DEFAULT NULL,
  `msh_9_2_signoff` varchar(32) DEFAULT NULL,
  `msh_10_iscv_val` varchar(32) DEFAULT NULL,
  `msh_10_hl7_parsing` varchar(32) DEFAULT NULL,
  `msh_10_expected_val` varchar(32) DEFAULT NULL,
  `msh_10_actual_val` varchar(32) DEFAULT NULL,
  `msh_10_pass` varchar(32) DEFAULT NULL,
  `msh_10_comments` varchar(64) DEFAULT NULL,
  `msh_10_signoff` varchar(32) DEFAULT NULL,
  `msh_11_iscv_val` varchar(32) DEFAULT NULL,
  `msh_11_hl7_parsing` varchar(32) DEFAULT NULL,
  `msh_11_expected_val` varchar(32) DEFAULT NULL,
  `msh_11_actual_val` varchar(32) DEFAULT NULL,
  `msh_11_pass` varchar(32) DEFAULT NULL,
  `msh_11_comments` varchar(64) DEFAULT NULL,
  `msh_11_signoff` varchar(32) DEFAULT NULL,
  `msh_12_iscv_val` varchar(32) DEFAULT NULL,
  `msh_12_hl7_parsing` varchar(32) DEFAULT NULL,
  `msh_12_expected_val` varchar(32) DEFAULT NULL,
  `msh_12_actual_val` varchar(32) DEFAULT NULL,
  `msh_12_pass` varchar(32) DEFAULT NULL,
  `msh_12_comments` varchar(64) DEFAULT NULL,
  `msh_12_signoff` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section10_testplan_resultsutr_msh`
--

INSERT INTO `section10_testplan_resultsutr_msh` (`row_counter`, `sec_sign`, `msh_1_iscv_val`, `msh_1_hl7_parsing`, `msh_1_expected_val`, `msh_1_actual_val`, `msh_1_pass`, `msh_1_comments`, `msh_1_signoff`, `msh_2_iscv_val`, `msh_2_hl7_parsing`, `msh_2_expected_val`, `msh_2_actual_val`, `msh_2_pass`, `msh_2_comments`, `msh_2_signoff`, `msh_3_iscv_val`, `msh_3_hl7_parsing`, `msh_3_expected_val`, `msh_3_actual_val`, `msh_3_pass`, `msh_3_comments`, `msh_3_signoff`, `msh_4_iscv_val`, `msh_4_hl7_parsing`, `msh_4_expected_val`, `msh_4_actual_val`, `msh_4_pass`, `msh_4_comments`, `msh_4_signoff`, `msh_5_iscv_val`, `msh_5_hl7_parsing`, `msh_5_expected_val`, `msh_5_actual_val`, `msh_5_pass`, `msh_5_comments`, `msh_5_signoff`, `msh_6_iscv_val`, `msh_6_hl7_parsing`, `msh_6_expected_val`, `msh_6_actual_val`, `msh_6_pass`, `msh_6_comments`, `msh_6_signoff`, `msh_7_iscv_val`, `msh_7_hl7_parsing`, `msh_7_expected_val`, `msh_7_actual_val`, `msh_7_pass`, `msh_7_comments`, `msh_7_signoff`, `msh_9_iscv_val`, `msh_9_hl7_parsing`, `msh_9_expected_val`, `msh_9_actual_val`, `msh_9_pass`, `msh_9_comments`, `msh_9_signoff`, `msh_9_1_iscv_val`, `msh_9_1_hl7_parsing`, `msh_9_1_expected_val`, `msh_9_1_actual_val`, `msh_9_1_pass`, `msh_9_1_comments`, `msh_9_1_signoff`, `msh_9_2_iscv_val`, `msh_9_2_hl7_parsing`, `msh_9_2_expected_val`, `msh_9_2_actual_val`, `msh_9_2_pass`, `msh_9_2_comments`, `msh_9_2_signoff`, `msh_10_iscv_val`, `msh_10_hl7_parsing`, `msh_10_expected_val`, `msh_10_actual_val`, `msh_10_pass`, `msh_10_comments`, `msh_10_signoff`, `msh_11_iscv_val`, `msh_11_hl7_parsing`, `msh_11_expected_val`, `msh_11_actual_val`, `msh_11_pass`, `msh_11_comments`, `msh_11_signoff`, `msh_12_iscv_val`, `msh_12_hl7_parsing`, `msh_12_expected_val`, `msh_12_actual_val`, `msh_12_pass`, `msh_12_comments`, `msh_12_signoff`) VALUES
(1, '5c888f5571939', 'ted', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `section10_testplan_resultsutr_obr`
--

CREATE TABLE `section10_testplan_resultsutr_obr` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `obr_1_iscv_val` varchar(32) DEFAULT NULL,
  `obr_1_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_1_expected_val` varchar(32) DEFAULT NULL,
  `obr_1_actual_val` varchar(32) DEFAULT NULL,
  `obr_1_pass` varchar(32) DEFAULT NULL,
  `obr_1_comments` varchar(64) DEFAULT NULL,
  `obr_1_signoff` varchar(32) DEFAULT NULL,
  `obr_2_iscv_val` varchar(32) DEFAULT NULL,
  `obr_2_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_2_expected_val` varchar(32) DEFAULT NULL,
  `obr_2_actual_val` varchar(32) DEFAULT NULL,
  `obr_2_pass` varchar(32) DEFAULT NULL,
  `obr_2_comments` varchar(64) DEFAULT NULL,
  `obr_2_signoff` varchar(32) DEFAULT NULL,
  `obr_3_iscv_val` varchar(32) DEFAULT NULL,
  `obr_3_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_3_expected_val` varchar(32) DEFAULT NULL,
  `obr_3_actual_val` varchar(32) DEFAULT NULL,
  `obr_3_pass` varchar(32) DEFAULT NULL,
  `obr_3_comments` varchar(64) DEFAULT NULL,
  `obr_3_signoff` varchar(32) DEFAULT NULL,
  `obr_4_iscv_val` varchar(32) DEFAULT NULL,
  `obr_4_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_4_expected_val` varchar(32) DEFAULT NULL,
  `obr_4_actual_val` varchar(32) DEFAULT NULL,
  `obr_4_pass` varchar(32) DEFAULT NULL,
  `obr_4_comments` varchar(64) DEFAULT NULL,
  `obr_4_signoff` varchar(32) DEFAULT NULL,
  `obr_4_1_iscv_val` varchar(32) DEFAULT NULL,
  `obr_4_1_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_4_1_expected_val` varchar(32) DEFAULT NULL,
  `obr_4_1_actual_val` varchar(32) DEFAULT NULL,
  `obr_4_1_pass` varchar(32) DEFAULT NULL,
  `obr_4_1_comments` varchar(64) DEFAULT NULL,
  `obr_4_1_signoff` varchar(32) DEFAULT NULL,
  `obr_4_2_iscv_val` varchar(32) DEFAULT NULL,
  `obr_4_2_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_4_2_expected_val` varchar(32) DEFAULT NULL,
  `obr_4_2_actual_val` varchar(32) DEFAULT NULL,
  `obr_4_2_pass` varchar(32) DEFAULT NULL,
  `obr_4_2_comments` varchar(64) DEFAULT NULL,
  `obr_4_2_signoff` varchar(32) DEFAULT NULL,
  `obr_7_iscv_val` varchar(32) DEFAULT NULL,
  `obr_7_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_7_expected_val` varchar(32) DEFAULT NULL,
  `obr_7_actual_val` varchar(32) DEFAULT NULL,
  `obr_7_pass` varchar(32) DEFAULT NULL,
  `obr_7_comments` varchar(64) DEFAULT NULL,
  `obr_7_signoff` varchar(32) DEFAULT NULL,
  `obr_8_iscv_val` varchar(32) DEFAULT NULL,
  `obr_8_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_8_expected_val` varchar(32) DEFAULT NULL,
  `obr_8_actual_val` varchar(32) DEFAULT NULL,
  `obr_8_pass` varchar(32) DEFAULT NULL,
  `obr_8_comments` varchar(64) DEFAULT NULL,
  `obr_8_signoff` varchar(32) DEFAULT NULL,
  `obr_16_iscv_val` varchar(32) DEFAULT NULL,
  `obr_16_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_16_expected_val` varchar(32) DEFAULT NULL,
  `obr_16_actual_val` varchar(32) DEFAULT NULL,
  `obr_16_pass` varchar(32) DEFAULT NULL,
  `obr_16_comments` varchar(64) DEFAULT NULL,
  `obr_16_signoff` varchar(32) DEFAULT NULL,
  `obr_18_iscv_val` varchar(32) DEFAULT NULL,
  `obr_18_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_18_expected_val` varchar(32) DEFAULT NULL,
  `obr_18_actual_val` varchar(32) DEFAULT NULL,
  `obr_18_pass` varchar(32) DEFAULT NULL,
  `obr_18_comments` varchar(64) DEFAULT NULL,
  `obr_18_signoff` varchar(32) DEFAULT NULL,
  `obr_20_iscv_val` varchar(32) DEFAULT NULL,
  `obr_20_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_20_expected_val` varchar(32) DEFAULT NULL,
  `obr_20_actual_val` varchar(32) DEFAULT NULL,
  `obr_20_pass` varchar(32) DEFAULT NULL,
  `obr_20_comments` varchar(64) DEFAULT NULL,
  `obr_20_signoff` varchar(32) DEFAULT NULL,
  `obr_22_iscv_val` varchar(32) DEFAULT NULL,
  `obr_22_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_22_expected_val` varchar(32) DEFAULT NULL,
  `obr_22_actual_val` varchar(32) DEFAULT NULL,
  `obr_22_pass` varchar(32) DEFAULT NULL,
  `obr_22_comments` varchar(64) DEFAULT NULL,
  `obr_22_signoff` varchar(32) DEFAULT NULL,
  `obr_24_iscv_val` varchar(32) DEFAULT NULL,
  `obr_24_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_24_expected_val` varchar(32) DEFAULT NULL,
  `obr_24_actual_val` varchar(32) DEFAULT NULL,
  `obr_24_pass` varchar(32) DEFAULT NULL,
  `obr_24_comments` varchar(64) DEFAULT NULL,
  `obr_24_signoff` varchar(32) DEFAULT NULL,
  `obr_25_iscv_val` varchar(32) DEFAULT NULL,
  `obr_25_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_25_expected_val` varchar(32) DEFAULT NULL,
  `obr_25_actual_val` varchar(32) DEFAULT NULL,
  `obr_25_pass` varchar(32) DEFAULT NULL,
  `obr_25_comments` varchar(64) DEFAULT NULL,
  `obr_25_signoff` varchar(32) DEFAULT NULL,
  `obr_31_iscv_val` varchar(32) DEFAULT NULL,
  `obr_31_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_31_expected_val` varchar(32) DEFAULT NULL,
  `obr_31_actual_val` varchar(32) DEFAULT NULL,
  `obr_31_pass` varchar(32) DEFAULT NULL,
  `obr_31_comments` varchar(64) DEFAULT NULL,
  `obr_31_signoff` varchar(32) DEFAULT NULL,
  `obr_32_iscv_val` varchar(32) DEFAULT NULL,
  `obr_32_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_32_expected_val` varchar(32) DEFAULT NULL,
  `obr_32_actual_val` varchar(32) DEFAULT NULL,
  `obr_32_pass` varchar(32) DEFAULT NULL,
  `obr_32_comments` varchar(64) DEFAULT NULL,
  `obr_32_signoff` varchar(32) DEFAULT NULL,
  `obr_32_1_1_iscv_val` varchar(32) DEFAULT NULL,
  `obr_32_1_1_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_32_1_1_expected_val` varchar(32) DEFAULT NULL,
  `obr_32_1_1_actual_val` varchar(32) DEFAULT NULL,
  `obr_32_1_1_pass` varchar(32) DEFAULT NULL,
  `obr_32_1_1_comments` varchar(64) DEFAULT NULL,
  `obr_32_1_1_signoff` varchar(32) DEFAULT NULL,
  `obr_32_1_2_iscv_val` varchar(32) DEFAULT NULL,
  `obr_32_1_2_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_32_1_2_expected_val` varchar(32) DEFAULT NULL,
  `obr_32_1_2_actual_val` varchar(32) DEFAULT NULL,
  `obr_32_1_2_pass` varchar(32) DEFAULT NULL,
  `obr_32_1_2_comments` varchar(64) DEFAULT NULL,
  `obr_32_1_2_signoff` varchar(32) DEFAULT NULL,
  `obr_32_1_3_iscv_val` varchar(32) DEFAULT NULL,
  `obr_32_1_3_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_32_1_3_expected_val` varchar(32) DEFAULT NULL,
  `obr_32_1_3_actual_val` varchar(32) DEFAULT NULL,
  `obr_32_1_3_pass` varchar(32) DEFAULT NULL,
  `obr_32_1_3_comments` varchar(64) DEFAULT NULL,
  `obr_32_1_3_signoff` varchar(32) DEFAULT NULL,
  `obr_32_1_4_iscv_val` varchar(32) DEFAULT NULL,
  `obr_32_1_4_hl7_parsing` varchar(32) DEFAULT NULL,
  `obr_32_1_4_expected_val` varchar(32) DEFAULT NULL,
  `obr_32_1_4_actual_val` varchar(32) DEFAULT NULL,
  `obr_32_1_4_pass` varchar(32) DEFAULT NULL,
  `obr_32_1_4_comments` varchar(64) DEFAULT NULL,
  `obr_32_1_4_signoff` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section10_testplan_resultsutr_obr`
--

INSERT INTO `section10_testplan_resultsutr_obr` (`row_counter`, `sec_sign`, `obr_1_iscv_val`, `obr_1_hl7_parsing`, `obr_1_expected_val`, `obr_1_actual_val`, `obr_1_pass`, `obr_1_comments`, `obr_1_signoff`, `obr_2_iscv_val`, `obr_2_hl7_parsing`, `obr_2_expected_val`, `obr_2_actual_val`, `obr_2_pass`, `obr_2_comments`, `obr_2_signoff`, `obr_3_iscv_val`, `obr_3_hl7_parsing`, `obr_3_expected_val`, `obr_3_actual_val`, `obr_3_pass`, `obr_3_comments`, `obr_3_signoff`, `obr_4_iscv_val`, `obr_4_hl7_parsing`, `obr_4_expected_val`, `obr_4_actual_val`, `obr_4_pass`, `obr_4_comments`, `obr_4_signoff`, `obr_4_1_iscv_val`, `obr_4_1_hl7_parsing`, `obr_4_1_expected_val`, `obr_4_1_actual_val`, `obr_4_1_pass`, `obr_4_1_comments`, `obr_4_1_signoff`, `obr_4_2_iscv_val`, `obr_4_2_hl7_parsing`, `obr_4_2_expected_val`, `obr_4_2_actual_val`, `obr_4_2_pass`, `obr_4_2_comments`, `obr_4_2_signoff`, `obr_7_iscv_val`, `obr_7_hl7_parsing`, `obr_7_expected_val`, `obr_7_actual_val`, `obr_7_pass`, `obr_7_comments`, `obr_7_signoff`, `obr_8_iscv_val`, `obr_8_hl7_parsing`, `obr_8_expected_val`, `obr_8_actual_val`, `obr_8_pass`, `obr_8_comments`, `obr_8_signoff`, `obr_16_iscv_val`, `obr_16_hl7_parsing`, `obr_16_expected_val`, `obr_16_actual_val`, `obr_16_pass`, `obr_16_comments`, `obr_16_signoff`, `obr_18_iscv_val`, `obr_18_hl7_parsing`, `obr_18_expected_val`, `obr_18_actual_val`, `obr_18_pass`, `obr_18_comments`, `obr_18_signoff`, `obr_20_iscv_val`, `obr_20_hl7_parsing`, `obr_20_expected_val`, `obr_20_actual_val`, `obr_20_pass`, `obr_20_comments`, `obr_20_signoff`, `obr_22_iscv_val`, `obr_22_hl7_parsing`, `obr_22_expected_val`, `obr_22_actual_val`, `obr_22_pass`, `obr_22_comments`, `obr_22_signoff`, `obr_24_iscv_val`, `obr_24_hl7_parsing`, `obr_24_expected_val`, `obr_24_actual_val`, `obr_24_pass`, `obr_24_comments`, `obr_24_signoff`, `obr_25_iscv_val`, `obr_25_hl7_parsing`, `obr_25_expected_val`, `obr_25_actual_val`, `obr_25_pass`, `obr_25_comments`, `obr_25_signoff`, `obr_31_iscv_val`, `obr_31_hl7_parsing`, `obr_31_expected_val`, `obr_31_actual_val`, `obr_31_pass`, `obr_31_comments`, `obr_31_signoff`, `obr_32_iscv_val`, `obr_32_hl7_parsing`, `obr_32_expected_val`, `obr_32_actual_val`, `obr_32_pass`, `obr_32_comments`, `obr_32_signoff`, `obr_32_1_1_iscv_val`, `obr_32_1_1_hl7_parsing`, `obr_32_1_1_expected_val`, `obr_32_1_1_actual_val`, `obr_32_1_1_pass`, `obr_32_1_1_comments`, `obr_32_1_1_signoff`, `obr_32_1_2_iscv_val`, `obr_32_1_2_hl7_parsing`, `obr_32_1_2_expected_val`, `obr_32_1_2_actual_val`, `obr_32_1_2_pass`, `obr_32_1_2_comments`, `obr_32_1_2_signoff`, `obr_32_1_3_iscv_val`, `obr_32_1_3_hl7_parsing`, `obr_32_1_3_expected_val`, `obr_32_1_3_actual_val`, `obr_32_1_3_pass`, `obr_32_1_3_comments`, `obr_32_1_3_signoff`, `obr_32_1_4_iscv_val`, `obr_32_1_4_hl7_parsing`, `obr_32_1_4_expected_val`, `obr_32_1_4_actual_val`, `obr_32_1_4_pass`, `obr_32_1_4_comments`, `obr_32_1_4_signoff`) VALUES
(1, '5c888f5571939', 'adsads', '', '', '', '', 'obr_1_comments', '', '', '', '', '', '', 'obr_2_comments', '', '', '', '', '', '', 'obr_3_comments', '', '', '', '', '', '', 'obr_4_comments', '', '', '', '', '', '', 'obr_4_1_comments', '', '', '', '', '', '', 'obr_4_2_comments', '', '', '', '', '', '', 'obr_7_comments', '', '', '', '', '', '', 'obr_8_comments', '', '', '', '', '', '', 'obr_16_comments', '', '', '', '', '', '', 'obr_18_comments', '', '', '', '', '', '', 'obr_20_comments', '', '', '', '', '', '', 'obr_22_comments', '', '', '', '', '', '', 'obr_24_comments', '', '', '', '', '', '', 'obr_25_comments', '', '', '', '', '', '', 'obr_31_comments', '', '', '', '', '', '', 'obr_32_comments', '', '', '', '', '', '', 'obr_32_1_1_comments', '', '', '', '', '', '', 'obr_32_1_2_comments', '', '', '', '', '', '', 'obr_32_1_3_comments', '', '', '', '', '', '', 'obr_32_1_4_comments', '');

-- --------------------------------------------------------

--
-- Table structure for table `section10_testplan_resultsutr_obx`
--

CREATE TABLE `section10_testplan_resultsutr_obx` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `obx_1_iscv_val` varchar(32) DEFAULT NULL,
  `obx_1_hl7_parsing` varchar(32) DEFAULT NULL,
  `obx_1_expected_val` varchar(32) DEFAULT NULL,
  `obx_1_actual_val` varchar(32) DEFAULT NULL,
  `obx_1_pass` varchar(32) DEFAULT NULL,
  `obx_1_comments` varchar(64) DEFAULT NULL,
  `obx_1_signoff` varchar(32) DEFAULT NULL,
  `obx_2_iscv_val` varchar(32) DEFAULT NULL,
  `obx_2_hl7_parsing` varchar(32) DEFAULT NULL,
  `obx_2_expected_val` varchar(32) DEFAULT NULL,
  `obx_2_actual_val` varchar(32) DEFAULT NULL,
  `obx_2_pass` varchar(32) DEFAULT NULL,
  `obx_2_comments` varchar(64) DEFAULT NULL,
  `obx_2_signoff` varchar(32) DEFAULT NULL,
  `obx_3_iscv_val` varchar(32) DEFAULT NULL,
  `obx_3_hl7_parsing` varchar(32) DEFAULT NULL,
  `obx_3_expected_val` varchar(32) DEFAULT NULL,
  `obx_3_actual_val` varchar(32) DEFAULT NULL,
  `obx_3_pass` varchar(32) DEFAULT NULL,
  `obx_3_comments` varchar(64) DEFAULT NULL,
  `obx_3_signoff` varchar(32) DEFAULT NULL,
  `obx_3_1_iscv_val` varchar(32) DEFAULT NULL,
  `obx_3_1_hl7_parsing` varchar(32) DEFAULT NULL,
  `obx_3_1_expected_val` varchar(32) DEFAULT NULL,
  `obx_3_1_actual_val` varchar(32) DEFAULT NULL,
  `obx_3_1_pass` varchar(32) DEFAULT NULL,
  `obx_3_1_comments` varchar(64) DEFAULT NULL,
  `obx_3_1_signoff` varchar(32) DEFAULT NULL,
  `obx_3_2_iscv_val` varchar(32) DEFAULT NULL,
  `obx_3_2_hl7_parsing` varchar(32) DEFAULT NULL,
  `obx_3_2_expected_val` varchar(32) DEFAULT NULL,
  `obx_3_2_actual_val` varchar(32) DEFAULT NULL,
  `obx_3_2_pass` varchar(32) DEFAULT NULL,
  `obx_3_2_comments` varchar(64) DEFAULT NULL,
  `obx_3_2_signoff` varchar(32) DEFAULT NULL,
  `obx_4_iscv_val` varchar(32) DEFAULT NULL,
  `obx_4_hl7_parsing` varchar(32) DEFAULT NULL,
  `obx_4_expected_val` varchar(32) DEFAULT NULL,
  `obx_4_actual_val` varchar(32) DEFAULT NULL,
  `obx_4_pass` varchar(32) DEFAULT NULL,
  `obx_4_comments` varchar(64) DEFAULT NULL,
  `obx_4_signoff` varchar(32) DEFAULT NULL,
  `obx_5_iscv_val` varchar(32) DEFAULT NULL,
  `obx_5_hl7_parsing` varchar(32) DEFAULT NULL,
  `obx_5_expected_val` varchar(32) DEFAULT NULL,
  `obx_5_actual_val` varchar(32) DEFAULT NULL,
  `obx_5_pass` varchar(32) DEFAULT NULL,
  `obx_5_comments` varchar(64) DEFAULT NULL,
  `obx_5_signoff` varchar(32) DEFAULT NULL,
  `obx_11_iscv_val` varchar(32) DEFAULT NULL,
  `obx_11_hl7_parsing` varchar(32) DEFAULT NULL,
  `obx_11_expected_val` varchar(32) DEFAULT NULL,
  `obx_11_actual_val` varchar(32) DEFAULT NULL,
  `obx_11_pass` varchar(32) DEFAULT NULL,
  `obx_11_comments` varchar(64) DEFAULT NULL,
  `obx_11_signoff` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section10_testplan_resultsutr_obx`
--

INSERT INTO `section10_testplan_resultsutr_obx` (`row_counter`, `sec_sign`, `obx_1_iscv_val`, `obx_1_hl7_parsing`, `obx_1_expected_val`, `obx_1_actual_val`, `obx_1_pass`, `obx_1_comments`, `obx_1_signoff`, `obx_2_iscv_val`, `obx_2_hl7_parsing`, `obx_2_expected_val`, `obx_2_actual_val`, `obx_2_pass`, `obx_2_comments`, `obx_2_signoff`, `obx_3_iscv_val`, `obx_3_hl7_parsing`, `obx_3_expected_val`, `obx_3_actual_val`, `obx_3_pass`, `obx_3_comments`, `obx_3_signoff`, `obx_3_1_iscv_val`, `obx_3_1_hl7_parsing`, `obx_3_1_expected_val`, `obx_3_1_actual_val`, `obx_3_1_pass`, `obx_3_1_comments`, `obx_3_1_signoff`, `obx_3_2_iscv_val`, `obx_3_2_hl7_parsing`, `obx_3_2_expected_val`, `obx_3_2_actual_val`, `obx_3_2_pass`, `obx_3_2_comments`, `obx_3_2_signoff`, `obx_4_iscv_val`, `obx_4_hl7_parsing`, `obx_4_expected_val`, `obx_4_actual_val`, `obx_4_pass`, `obx_4_comments`, `obx_4_signoff`, `obx_5_iscv_val`, `obx_5_hl7_parsing`, `obx_5_expected_val`, `obx_5_actual_val`, `obx_5_pass`, `obx_5_comments`, `obx_5_signoff`, `obx_11_iscv_val`, `obx_11_hl7_parsing`, `obx_11_expected_val`, `obx_11_actual_val`, `obx_11_pass`, `obx_11_comments`, `obx_11_signoff`) VALUES
(1, '5c888f5571939', 'adasdas', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `section10_testplan_resultsutr_orc`
--

CREATE TABLE `section10_testplan_resultsutr_orc` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `orc_1_iscv_val` varchar(32) DEFAULT NULL,
  `orc_1_hl7_parsing` varchar(32) DEFAULT NULL,
  `orc_1_expected_val` varchar(32) DEFAULT NULL,
  `orc_1_actual_val` varchar(32) DEFAULT NULL,
  `orc_1_pass` varchar(32) DEFAULT NULL,
  `orc_1_comments` varchar(64) DEFAULT NULL,
  `orc_1_signoff` varchar(32) DEFAULT NULL,
  `orc_3_iscv_val` varchar(32) DEFAULT NULL,
  `orc_3_hl7_parsing` varchar(32) DEFAULT NULL,
  `orc_3_expected_val` varchar(32) DEFAULT NULL,
  `orc_3_actual_val` varchar(32) DEFAULT NULL,
  `orc_3_pass` varchar(32) DEFAULT NULL,
  `orc_3_comments` varchar(64) DEFAULT NULL,
  `orc_3_signoff` varchar(32) DEFAULT NULL,
  `orc_5_iscv_val` varchar(32) DEFAULT NULL,
  `orc_5_hl7_parsing` varchar(32) DEFAULT NULL,
  `orc_5_expected_val` varchar(32) DEFAULT NULL,
  `orc_5_actual_val` varchar(32) DEFAULT NULL,
  `orc_5_pass` varchar(32) DEFAULT NULL,
  `orc_5_comments` varchar(64) DEFAULT NULL,
  `orc_5_signoff` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section10_testplan_resultsutr_orc`
--

INSERT INTO `section10_testplan_resultsutr_orc` (`row_counter`, `sec_sign`, `orc_1_iscv_val`, `orc_1_hl7_parsing`, `orc_1_expected_val`, `orc_1_actual_val`, `orc_1_pass`, `orc_1_comments`, `orc_1_signoff`, `orc_3_iscv_val`, `orc_3_hl7_parsing`, `orc_3_expected_val`, `orc_3_actual_val`, `orc_3_pass`, `orc_3_comments`, `orc_3_signoff`, `orc_5_iscv_val`, `orc_5_hl7_parsing`, `orc_5_expected_val`, `orc_5_actual_val`, `orc_5_pass`, `orc_5_comments`, `orc_5_signoff`) VALUES
(1, '5c888f5571939', 'dasds', '', '', '', '', 'orc_1_comments', '', '', '', '', '', '', 'orc_3_comments', '', '', '', '', '', '', 'orc_5_comments', '');

-- --------------------------------------------------------

--
-- Table structure for table `section10_testplan_resultsutr_pid`
--

CREATE TABLE `section10_testplan_resultsutr_pid` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `pid_3_iscv_val` varchar(32) DEFAULT NULL,
  `pid_3_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_3_expected_val` varchar(32) DEFAULT NULL,
  `pid_3_actual_val` varchar(32) DEFAULT NULL,
  `pid_3_pass` varchar(32) DEFAULT NULL,
  `pid_3_comments` varchar(64) DEFAULT NULL,
  `pid_3_signoff` varchar(32) DEFAULT NULL,
  `pid_3_1_iscv_val` varchar(32) DEFAULT NULL,
  `pid_3_1_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_3_1_expected_val` varchar(32) DEFAULT NULL,
  `pid_3_1_actual_val` varchar(32) DEFAULT NULL,
  `pid_3_1_pass` varchar(32) DEFAULT NULL,
  `pid_3_1_comments` varchar(64) DEFAULT NULL,
  `pid_3_1_signoff` varchar(32) DEFAULT NULL,
  `pid_3_4_iscv_val` varchar(32) DEFAULT NULL,
  `pid_3_4_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_3_4_expected_val` varchar(32) DEFAULT NULL,
  `pid_3_4_actual_val` varchar(32) DEFAULT NULL,
  `pid_3_4_pass` varchar(32) DEFAULT NULL,
  `pid_3_4_comments` varchar(64) DEFAULT NULL,
  `pid_3_4_signoff` varchar(32) DEFAULT NULL,
  `pid_5_iscv_val` varchar(32) DEFAULT NULL,
  `pid_5_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_5_expected_val` varchar(32) DEFAULT NULL,
  `pid_5_actual_val` varchar(32) DEFAULT NULL,
  `pid_5_pass` varchar(32) DEFAULT NULL,
  `pid_5_comments` varchar(64) DEFAULT NULL,
  `pid_5_signoff` varchar(32) DEFAULT NULL,
  `pid_5_1_iscv_val` varchar(32) DEFAULT NULL,
  `pid_5_1_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_5_1_expected_val` varchar(32) DEFAULT NULL,
  `pid_5_1_actual_val` varchar(32) DEFAULT NULL,
  `pid_5_1_pass` varchar(32) DEFAULT NULL,
  `pid_5_1_comments` varchar(64) DEFAULT NULL,
  `pid_5_1_signoff` varchar(32) DEFAULT NULL,
  `pid_5_2_iscv_val` varchar(32) DEFAULT NULL,
  `pid_5_2_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_5_2_expected_val` varchar(32) DEFAULT NULL,
  `pid_5_2_actual_val` varchar(32) DEFAULT NULL,
  `pid_5_2_pass` varchar(32) DEFAULT NULL,
  `pid_5_2_comments` varchar(64) DEFAULT NULL,
  `pid_5_2_signoff` varchar(32) DEFAULT NULL,
  `pid_5_3_iscv_val` varchar(32) DEFAULT NULL,
  `pid_5_3_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_5_3_expected_val` varchar(32) DEFAULT NULL,
  `pid_5_3_actual_val` varchar(32) DEFAULT NULL,
  `pid_5_3_pass` varchar(32) DEFAULT NULL,
  `pid_5_3_comments` varchar(64) DEFAULT NULL,
  `pid_5_3_signoff` varchar(32) DEFAULT NULL,
  `pid_7_iscv_val` varchar(32) DEFAULT NULL,
  `pid_7_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_7_expected_val` varchar(32) DEFAULT NULL,
  `pid_7_actual_val` varchar(32) DEFAULT NULL,
  `pid_7_pass` varchar(32) DEFAULT NULL,
  `pid_7_comments` varchar(64) DEFAULT NULL,
  `pid_7_signoff` varchar(32) DEFAULT NULL,
  `pid_8_iscv_val` varchar(32) DEFAULT NULL,
  `pid_8_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_8_expected_val` varchar(32) DEFAULT NULL,
  `pid_8_actual_val` varchar(32) DEFAULT NULL,
  `pid_8_pass` varchar(32) DEFAULT NULL,
  `pid_8_comments` varchar(64) DEFAULT NULL,
  `pid_8_signoff` varchar(32) DEFAULT NULL,
  `pid_10_iscv_val` varchar(32) DEFAULT NULL,
  `pid_10_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_10_expected_val` varchar(32) DEFAULT NULL,
  `pid_10_actual_val` varchar(32) DEFAULT NULL,
  `pid_10_pass` varchar(32) DEFAULT NULL,
  `pid_10_comments` varchar(64) DEFAULT NULL,
  `pid_10_signoff` varchar(32) DEFAULT NULL,
  `pid_11_iscv_val` varchar(32) DEFAULT NULL,
  `pid_11_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_11_expected_val` varchar(32) DEFAULT NULL,
  `pid_11_actual_val` varchar(32) DEFAULT NULL,
  `pid_11_pass` varchar(32) DEFAULT NULL,
  `pid_11_comments` varchar(64) DEFAULT NULL,
  `pid_11_signoff` varchar(32) DEFAULT NULL,
  `pid_11_1_iscv_val` varchar(32) DEFAULT NULL,
  `pid_11_1_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_11_1_expected_val` varchar(32) DEFAULT NULL,
  `pid_11_1_actual_val` varchar(32) DEFAULT NULL,
  `pid_11_1_pass` varchar(32) DEFAULT NULL,
  `pid_11_1_comments` varchar(64) DEFAULT NULL,
  `pid_11_1_signoff` varchar(32) DEFAULT NULL,
  `pid_11_2_iscv_val` varchar(32) DEFAULT NULL,
  `pid_11_2_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_11_2_expected_val` varchar(32) DEFAULT NULL,
  `pid_11_2_actual_val` varchar(32) DEFAULT NULL,
  `pid_11_2_pass` varchar(32) DEFAULT NULL,
  `pid_11_2_comments` varchar(64) DEFAULT NULL,
  `pid_11_2_signoff` varchar(32) DEFAULT NULL,
  `pid_11_3_iscv_val` varchar(32) DEFAULT NULL,
  `pid_11_3_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_11_3_expected_val` varchar(32) DEFAULT NULL,
  `pid_11_3_actual_val` varchar(32) DEFAULT NULL,
  `pid_11_3_pass` varchar(32) DEFAULT NULL,
  `pid_11_3_comments` varchar(64) DEFAULT NULL,
  `pid_11_3_signoff` varchar(32) DEFAULT NULL,
  `pid_11_4_iscv_val` varchar(32) DEFAULT NULL,
  `pid_11_4_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_11_4_expected_val` varchar(32) DEFAULT NULL,
  `pid_11_4_actual_val` varchar(32) DEFAULT NULL,
  `pid_11_4_pass` varchar(32) DEFAULT NULL,
  `pid_11_4_comments` varchar(64) DEFAULT NULL,
  `pid_11_4_signoff` varchar(32) DEFAULT NULL,
  `pid_11_5_iscv_val` varchar(32) DEFAULT NULL,
  `pid_11_5_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_11_5_expected_val` varchar(32) DEFAULT NULL,
  `pid_11_5_actual_val` varchar(32) DEFAULT NULL,
  `pid_11_5_pass` varchar(32) DEFAULT NULL,
  `pid_11_5_comments` varchar(64) DEFAULT NULL,
  `pid_11_5_signoff` varchar(32) DEFAULT NULL,
  `pid_13_iscv_val` varchar(32) DEFAULT NULL,
  `pid_13_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_13_expected_val` varchar(32) DEFAULT NULL,
  `pid_13_actual_val` varchar(32) DEFAULT NULL,
  `pid_13_pass` varchar(32) DEFAULT NULL,
  `pid_13_comments` varchar(64) DEFAULT NULL,
  `pid_13_signoff` varchar(32) DEFAULT NULL,
  `pid_14_iscv_val` varchar(32) DEFAULT NULL,
  `pid_14_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_14_expected_val` varchar(32) DEFAULT NULL,
  `pid_14_actual_val` varchar(32) DEFAULT NULL,
  `pid_14_pass` varchar(32) DEFAULT NULL,
  `pid_14_comments` varchar(64) DEFAULT NULL,
  `pid_14_signoff` varchar(32) DEFAULT NULL,
  `pid_18_iscv_val` varchar(32) DEFAULT NULL,
  `pid_18_hl7_parsing` varchar(32) DEFAULT NULL,
  `pid_18_expected_val` varchar(32) DEFAULT NULL,
  `pid_18_actual_val` varchar(32) DEFAULT NULL,
  `pid_18_pass` varchar(32) DEFAULT NULL,
  `pid_18_comments` varchar(64) DEFAULT NULL,
  `pid_18_signoff` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section10_testplan_resultsutr_pid`
--

INSERT INTO `section10_testplan_resultsutr_pid` (`row_counter`, `sec_sign`, `pid_3_iscv_val`, `pid_3_hl7_parsing`, `pid_3_expected_val`, `pid_3_actual_val`, `pid_3_pass`, `pid_3_comments`, `pid_3_signoff`, `pid_3_1_iscv_val`, `pid_3_1_hl7_parsing`, `pid_3_1_expected_val`, `pid_3_1_actual_val`, `pid_3_1_pass`, `pid_3_1_comments`, `pid_3_1_signoff`, `pid_3_4_iscv_val`, `pid_3_4_hl7_parsing`, `pid_3_4_expected_val`, `pid_3_4_actual_val`, `pid_3_4_pass`, `pid_3_4_comments`, `pid_3_4_signoff`, `pid_5_iscv_val`, `pid_5_hl7_parsing`, `pid_5_expected_val`, `pid_5_actual_val`, `pid_5_pass`, `pid_5_comments`, `pid_5_signoff`, `pid_5_1_iscv_val`, `pid_5_1_hl7_parsing`, `pid_5_1_expected_val`, `pid_5_1_actual_val`, `pid_5_1_pass`, `pid_5_1_comments`, `pid_5_1_signoff`, `pid_5_2_iscv_val`, `pid_5_2_hl7_parsing`, `pid_5_2_expected_val`, `pid_5_2_actual_val`, `pid_5_2_pass`, `pid_5_2_comments`, `pid_5_2_signoff`, `pid_5_3_iscv_val`, `pid_5_3_hl7_parsing`, `pid_5_3_expected_val`, `pid_5_3_actual_val`, `pid_5_3_pass`, `pid_5_3_comments`, `pid_5_3_signoff`, `pid_7_iscv_val`, `pid_7_hl7_parsing`, `pid_7_expected_val`, `pid_7_actual_val`, `pid_7_pass`, `pid_7_comments`, `pid_7_signoff`, `pid_8_iscv_val`, `pid_8_hl7_parsing`, `pid_8_expected_val`, `pid_8_actual_val`, `pid_8_pass`, `pid_8_comments`, `pid_8_signoff`, `pid_10_iscv_val`, `pid_10_hl7_parsing`, `pid_10_expected_val`, `pid_10_actual_val`, `pid_10_pass`, `pid_10_comments`, `pid_10_signoff`, `pid_11_iscv_val`, `pid_11_hl7_parsing`, `pid_11_expected_val`, `pid_11_actual_val`, `pid_11_pass`, `pid_11_comments`, `pid_11_signoff`, `pid_11_1_iscv_val`, `pid_11_1_hl7_parsing`, `pid_11_1_expected_val`, `pid_11_1_actual_val`, `pid_11_1_pass`, `pid_11_1_comments`, `pid_11_1_signoff`, `pid_11_2_iscv_val`, `pid_11_2_hl7_parsing`, `pid_11_2_expected_val`, `pid_11_2_actual_val`, `pid_11_2_pass`, `pid_11_2_comments`, `pid_11_2_signoff`, `pid_11_3_iscv_val`, `pid_11_3_hl7_parsing`, `pid_11_3_expected_val`, `pid_11_3_actual_val`, `pid_11_3_pass`, `pid_11_3_comments`, `pid_11_3_signoff`, `pid_11_4_iscv_val`, `pid_11_4_hl7_parsing`, `pid_11_4_expected_val`, `pid_11_4_actual_val`, `pid_11_4_pass`, `pid_11_4_comments`, `pid_11_4_signoff`, `pid_11_5_iscv_val`, `pid_11_5_hl7_parsing`, `pid_11_5_expected_val`, `pid_11_5_actual_val`, `pid_11_5_pass`, `pid_11_5_comments`, `pid_11_5_signoff`, `pid_13_iscv_val`, `pid_13_hl7_parsing`, `pid_13_expected_val`, `pid_13_actual_val`, `pid_13_pass`, `pid_13_comments`, `pid_13_signoff`, `pid_14_iscv_val`, `pid_14_hl7_parsing`, `pid_14_expected_val`, `pid_14_actual_val`, `pid_14_pass`, `pid_14_comments`, `pid_14_signoff`, `pid_18_iscv_val`, `pid_18_hl7_parsing`, `pid_18_expected_val`, `pid_18_actual_val`, `pid_18_pass`, `pid_18_comments`, `pid_18_signoff`) VALUES
(1, '5c888f5571939', 'das', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `section10_testplan_resultsutr_pv1`
--

CREATE TABLE `section10_testplan_resultsutr_pv1` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `pv1_2_iscv_val` varchar(32) DEFAULT NULL,
  `pv1_2_hl7_parsing` varchar(32) DEFAULT NULL,
  `pv1_2_expected_val` varchar(32) DEFAULT NULL,
  `pv1_2_actual_val` varchar(32) DEFAULT NULL,
  `pv1_2_pass` varchar(32) DEFAULT NULL,
  `pv1_2_comments` varchar(64) DEFAULT NULL,
  `pv1_2_signoff` varchar(32) DEFAULT NULL,
  `pv1_3_iscv_val` varchar(32) DEFAULT NULL,
  `pv1_3_hl7_parsing` varchar(32) DEFAULT NULL,
  `pv1_3_expected_val` varchar(32) DEFAULT NULL,
  `pv1_3_actual_val` varchar(32) DEFAULT NULL,
  `pv1_3_pass` varchar(32) DEFAULT NULL,
  `pv1_3_comments` varchar(64) DEFAULT NULL,
  `pv1_3_signoff` varchar(32) DEFAULT NULL,
  `pv1_8_iscv_val` varchar(32) DEFAULT NULL,
  `pv1_8_hl7_parsing` varchar(32) DEFAULT NULL,
  `pv1_8_expected_val` varchar(32) DEFAULT NULL,
  `pv1_8_actual_val` varchar(32) DEFAULT NULL,
  `pv1_8_pass` varchar(32) DEFAULT NULL,
  `pv1_8_comments` varchar(64) DEFAULT NULL,
  `pv1_8_signoff` varchar(32) DEFAULT NULL,
  `pv1_8_1_iscv_val` varchar(32) DEFAULT NULL,
  `pv1_8_1_hl7_parsing` varchar(32) DEFAULT NULL,
  `pv1_8_1_expected_val` varchar(32) DEFAULT NULL,
  `pv1_8_1_actual_val` varchar(32) DEFAULT NULL,
  `pv1_8_1_pass` varchar(32) DEFAULT NULL,
  `pv1_8_1_comments` varchar(64) DEFAULT NULL,
  `pv1_8_1_signoff` varchar(32) DEFAULT NULL,
  `pv1_8_2_iscv_val` varchar(32) DEFAULT NULL,
  `pv1_8_2_hl7_parsing` varchar(32) DEFAULT NULL,
  `pv1_8_2_expected_val` varchar(32) DEFAULT NULL,
  `pv1_8_2_actual_val` varchar(32) DEFAULT NULL,
  `pv1_8_2_pass` varchar(32) DEFAULT NULL,
  `pv1_8_2_comments` varchar(64) DEFAULT NULL,
  `pv1_8_2_signoff` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section10_testplan_resultsutr_pv1`
--

INSERT INTO `section10_testplan_resultsutr_pv1` (`row_counter`, `sec_sign`, `pv1_2_iscv_val`, `pv1_2_hl7_parsing`, `pv1_2_expected_val`, `pv1_2_actual_val`, `pv1_2_pass`, `pv1_2_comments`, `pv1_2_signoff`, `pv1_3_iscv_val`, `pv1_3_hl7_parsing`, `pv1_3_expected_val`, `pv1_3_actual_val`, `pv1_3_pass`, `pv1_3_comments`, `pv1_3_signoff`, `pv1_8_iscv_val`, `pv1_8_hl7_parsing`, `pv1_8_expected_val`, `pv1_8_actual_val`, `pv1_8_pass`, `pv1_8_comments`, `pv1_8_signoff`, `pv1_8_1_iscv_val`, `pv1_8_1_hl7_parsing`, `pv1_8_1_expected_val`, `pv1_8_1_actual_val`, `pv1_8_1_pass`, `pv1_8_1_comments`, `pv1_8_1_signoff`, `pv1_8_2_iscv_val`, `pv1_8_2_hl7_parsing`, `pv1_8_2_expected_val`, `pv1_8_2_actual_val`, `pv1_8_2_pass`, `pv1_8_2_comments`, `pv1_8_2_signoff`) VALUES
(1, '5c888f5571939', 'asddw', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `section10_testplan_resultsutr_zds`
--

CREATE TABLE `section10_testplan_resultsutr_zds` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `zds_1_iscv_val` varchar(32) DEFAULT NULL,
  `zds_1_hl7_parsing` varchar(32) DEFAULT NULL,
  `zds_1_expected_val` varchar(32) DEFAULT NULL,
  `zds_1_actual_val` varchar(32) DEFAULT NULL,
  `zds_1_pass` varchar(32) DEFAULT NULL,
  `zds_1_comments` varchar(64) DEFAULT NULL,
  `zds_1_signoff` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section10_testplan_resultsutr_zds`
--

INSERT INTO `section10_testplan_resultsutr_zds` (`row_counter`, `sec_sign`, `zds_1_iscv_val`, `zds_1_hl7_parsing`, `zds_1_expected_val`, `zds_1_actual_val`, `zds_1_pass`, `zds_1_comments`, `zds_1_signoff`) VALUES
(1, '5c888f5571939', 'dasdasd', '', '', '', '', 'zds_1_comments', 'zds_1_signoff');

-- --------------------------------------------------------

--
-- Table structure for table `section11_issues`
--

CREATE TABLE `section11_issues` (
  `row_counter` int(5) NOT NULL,
  `sec_sign` varchar(32) DEFAULT NULL,
  `issue_num` varchar(32) DEFAULT NULL,
  `status` int(1) DEFAULT NULL,
  `log_date` varchar(32) DEFAULT NULL,
  `issue_system` varchar(32) DEFAULT NULL,
  `issue_name` varchar(64) DEFAULT NULL,
  `status_update` varchar(64) DEFAULT NULL,
  `owner` varchar(64) DEFAULT NULL,
  `case_num` varchar(32) DEFAULT NULL,
  `priority` int(1) DEFAULT NULL,
  `resolve_date` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section11_issues`
--

INSERT INTO `section11_issues` (`row_counter`, `sec_sign`, `issue_num`, `status`, `log_date`, `issue_system`, `issue_name`, `status_update`, `owner`, `case_num`, `priority`, `resolve_date`) VALUES
(1, '5c5bebe9959a0', '123', 1, '12/1/2019', 'philips', 'qwe', 'close', 'test', '1', 1, '12/02/2019');

-- --------------------------------------------------------

--
-- Table structure for table `sections`
--

CREATE TABLE `sections` (
  `rev_sign` varchar(32) NOT NULL,
  `section2` varchar(32) DEFAULT NULL,
  `section3` varchar(32) DEFAULT NULL,
  `section4` varchar(32) DEFAULT NULL,
  `section5` varchar(32) DEFAULT NULL,
  `section6` varchar(32) DEFAULT NULL,
  `section7` varchar(32) DEFAULT NULL,
  `section7_PID` varchar(100) DEFAULT NULL,
  `section7_PV1` varchar(100) DEFAULT NULL,
  `section7_ORC` varchar(100) DEFAULT NULL,
  `section7_OBR` varchar(100) DEFAULT NULL,
  `section7_OBX` varchar(100) DEFAULT NULL,
  `section7_ZDS` varchar(100) DEFAULT NULL,
  `section8` varchar(32) DEFAULT NULL,
  `section9` varchar(32) DEFAULT NULL,
  `section10` varchar(32) DEFAULT NULL,
  `section10_orders_neworder` varchar(32) DEFAULT NULL,
  `section10_orders_cancelorder` varchar(32) DEFAULT NULL,
  `section10_orders_status` varchar(32) DEFAULT NULL,
  `section10_dicom_worklist_createorder` varchar(32) DEFAULT NULL,
  `section10_dicom_usmodality` varchar(32) DEFAULT NULL,
  `section10_dicom_imagetransfer` varchar(32) DEFAULT NULL,
  `section10_dicom_createreport` varchar(32) DEFAULT NULL,
  `section10_dicom_resultmsg` varchar(32) DEFAULT NULL,
  `section10_dicom_dw_images` varchar(32) DEFAULT NULL,
  `section10_dicom_dw_reconcile_study` varchar(32) DEFAULT NULL,
  `section10_dicom_dw_createreport` varchar(32) DEFAULT NULL,
  `section10_dicom_dw_resultmsg` varchar(32) DEFAULT NULL,
  `section10_procedures` varchar(32) DEFAULT NULL,
  `section10_resultpdf` varchar(32) DEFAULT NULL,
  `section10_resultpdf_msh` varchar(32) DEFAULT NULL,
  `section10_resultpdf_obr` varchar(32) DEFAULT NULL,
  `section10_resultpdf_obx` varchar(32) DEFAULT NULL,
  `section10_resultpdf_orc` varchar(32) DEFAULT NULL,
  `section10_resultpdf_pid` varchar(32) DEFAULT NULL,
  `section10_resultpdf_pv1` varchar(32) DEFAULT NULL,
  `section10_resultpdf_zds` varchar(32) DEFAULT NULL,
  `section10_resultstext` varchar(32) DEFAULT NULL,
  `section10_resultstext_msh` varchar(32) DEFAULT NULL,
  `section10_resultstext_obr` varchar(32) DEFAULT NULL,
  `section10_resultstext_obx` varchar(32) DEFAULT NULL,
  `section10_resultstext_orc` varchar(32) DEFAULT NULL,
  `section10_resultstext_pid` varchar(32) DEFAULT NULL,
  `section10_resultstext_pv1` varchar(32) DEFAULT NULL,
  `section10_resultstext_zds` varchar(32) DEFAULT NULL,
  `section10_resultsutr` varchar(32) DEFAULT NULL,
  `section10_resultsutr_msh` varchar(32) DEFAULT NULL,
  `section10_resultsutr_obr` varchar(32) DEFAULT NULL,
  `section10_resultsutr_obx` varchar(32) DEFAULT NULL,
  `section10_resultsutr_orc` varchar(32) DEFAULT NULL,
  `section10_resultsutr_pid` varchar(32) DEFAULT NULL,
  `section10_resultsutr_pv1` varchar(32) DEFAULT NULL,
  `section10_resultsutr_zds` varchar(32) DEFAULT NULL,
  `section11` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sections`
--

INSERT INTO `sections` (`rev_sign`, `section2`, `section3`, `section4`, `section5`, `section6`, `section7`, `section7_PID`, `section7_PV1`, `section7_ORC`, `section7_OBR`, `section7_OBX`, `section7_ZDS`, `section8`, `section9`, `section10`, `section10_testplan_orders_neworder`, `section10_testplan_orders_cancelorder`, `section10_testplan_orders_status`, `section10_testplan_dicom_worklist_createorder`, `section10_testplan_dicom_usmodality`, `section10_testplan_dicom_imagetransfer`, `section10_testplan_dicom_createreport`, `section10_testplan_dicom_resultmsg`, `section10_testplan_dicom_dw_images`, `section10_testplan_dicom_dw_reconcile_study`, `section10_testplan_dicom_dw_createreport`, `section10_testplan_dicom_dw_resultmsg`, `section10_testplan_procedures`, `section10_resultpdf`, `section10_resultpdf_msh`, `section10_resultpdf_obr`, `section10_resultpdf_obx`, `section10_resultpdf_orc`, `section10_resultpdf_pid`, `section10_resultpdf_pv1`, `section10_resultpdf_zds`, `section10_resultstext`, `section10_resultstext_msh`, `section10_resultstext_obr`, `section10_resultstext_obx`, `section10_resultstext_orc`, `section10_resultstext_pid`, `section10_resultstext_pv1`, `section10_resultstext_zds`, `section10_resultsutr`, `section10_resultsutr_msh`, `section10_resultsutr_obr`, `section10_resultsutr_obx`, `section10_resultsutr_orc`, `section10_resultsutr_pid`, `section10_resultsutr_pv1`, `section10_resultsutr_zds`, `section11`) VALUES
('5c5aab3283a8c', '5c5aab3283a8c', '5c5aab3283a8c', '5c5aab3283a8c', '5c5aab3283a8c', '5c5aab3283a8c', '5c5aab3283a8c', NULL, NULL, NULL, NULL, NULL, NULL, '5c5aab3283a8c', '5c5aab3283a8c', '5c5aab3283a8c', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '5c5aab3283a8c'),
('5c5aab3285d52', '5c5aab3285d52', '5c5aab3283a8c', '5c5aab3283a8c', '5c5aab3283a8c', '5c5aab3283a8c', '5c5aab3283a8c', NULL, NULL, NULL, NULL, NULL, NULL, '5c5aab3283a8c', '5c5aab3283a8c', '5c5aab3283a8c', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '5c5aab3283a8c'),
('5c5aab9f44a01', '5c5aab3285d52', '5c5aab3283a8c', '5c5aab3283a8c', '5c5aab3283a8c', '5c5aab3283a8c', '5c5aab3283a8c', NULL, NULL, NULL, NULL, NULL, NULL, '5c5aab3283a8c', '5c5aab3283a8c', '5c5aab3283a8c', NULL, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '5c5aab3283a8c'),
('5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', NULL, NULL, NULL, NULL, NULL, NULL, '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', NULL, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '5c5ab58a1f382'),
('5c5ab58a22551', '5c5ab58a22551', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c5ab5c29e6ef', '5c5ab58a22551', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c5bebe9959a0', '5c5ab58a22551', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '5c5bebe9959a0'),
('5c5c1c9c4b3b0', '5c5c1c9c4b3b0', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c5d10b984c1b', '5c5ab58a22551', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5d10b984c1b', NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c610444b9409', '5c5ab58a22551', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c610444b9409', NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c610462a12c5', '5c5ab58a22551', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c610462a12c5', NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c6104b90a598', '5c5ab58a22551', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c6104b90a598', NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c611134dd454', '5c5ab58a22551', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c611134dd454', NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c61120389287', '5c5ab58a22551', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c61120389287', NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c6115f973e79', '5c5ab58a22551', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c6115f973e79', NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c611831efb6c', '5c5ab58a22551', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c611831efb6c', NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c615f42ddec0', '5c5ab58a22551', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c6115f973e79', NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c61604c502d6', '5c5ab58a22551', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c6115f973e79', NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c6161615bac4', '5c5ab58a22551', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c6161615bac4', NULL, NULL, NULL, NULL, '5c6161615bac4', NULL, '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c6165b61202f', '5c5ab58a22551', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c6161615bac4', NULL, NULL, NULL, NULL, '5c6165b61202f', NULL, '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c6166a607c59', '5c5ab58a22551', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c6161615bac4', NULL, NULL, NULL, NULL, '5c6166a607c59', NULL, '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c625b299e069', '5c5ab58a22551', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c625b299e069', NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c62695455fe9', '5c5ab58a22551', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c62695455fe9', NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c629806783ad', '5c5ab58a22551', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c629806783ad', '5c629806783ad', NULL, NULL, NULL, NULL, NULL, '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c6298bc65310', '5c5ab58a22551', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c6298bc65310', '5c6298bc65310', NULL, NULL, NULL, NULL, NULL, '5c629806783ad', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c62996b2dbca', '5c5ab58a22551', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c62996b2dbca', NULL, NULL, NULL, NULL, NULL, NULL, '5c6298bc65310', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c629b6a3ed89', '5c5ab58a22551', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c629b6a3ed89', NULL, NULL, NULL, NULL, NULL, NULL, '5c6298bc65310', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c629bfb7590e', '5c5ab58a22551', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c629b6a3ed89', '5c629bfb7590e', NULL, NULL, NULL, NULL, NULL, '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c629d81849d2', '5c5ab58a22551', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c629b6a3ed89', '5c629d81849d2', NULL, NULL, NULL, NULL, NULL, '5c629bfb7590e', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c629f305e58f', '5c5ab58a22551', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c629b6a3ed89', NULL, '5c629f305e58f', NULL, NULL, NULL, NULL, '5c629d81849d2', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c62a08f786c4', '5c5ab58a22551', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c629b6a3ed89', '5c62a08f786c4', NULL, NULL, NULL, NULL, NULL, '', '5c629f305e58f', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c62a0d950851', '5c5ab58a22551', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c629b6a3ed89', '5c62a0d950851', NULL, NULL, NULL, NULL, NULL, '5c62a08f786c4', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c62a11785da6', '5c5ab58a22551', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c629b6a3ed89', NULL, NULL, '5c62a11785da6', NULL, NULL, NULL, '5c62a0d950851', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c62a19a2bf29', '5c5ab58a22551', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c62a19a2bf29', '5c62a19a2bf29', '5c62a19a2bf29', '5c62a19a2bf29', '5c62a19a2bf29', '5c62a19a2bf29', '5c62a19a2bf29', '', '', '5c62a11785da6', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c63df513a32c', '5c5ab58a22551', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c62a19a2bf29', '5c63df513a32c', NULL, NULL, NULL, NULL, NULL, '5c62a19a2bf29', '5c62a19a2bf29', '5c62a19a2bf29', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '5c62a19a2bf29'),
('5c63df7174ee9', '5c5ab58a22551', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c62a19a2bf29', '5c63df7174ee9', NULL, NULL, NULL, NULL, NULL, '5c63df513a32c', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c63ff18941ad', '5c5ab58a22551', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c62a19a2bf29', '5c63ff18941ad', NULL, NULL, NULL, NULL, NULL, '5c63df513a32c', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c6511abb39c8', '5c5ab58a22551', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c6511abb39c8', '5c6511abb39c8', NULL, NULL, NULL, NULL, NULL, '5c63df513a32c', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c6516224947e', '5c5ab58a22551', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c62a19a2bf29', '5c6516224947e', NULL, NULL, NULL, NULL, NULL, '5c63df513a32c', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c6ceed116d3f', '5c5ab58a22551', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c6ceed116d3f', '5c6ceed116d3f', '5c6ceed116d3f', '5c6ceed116d3f', '5c6ceed116d3f', '5c6ceed116d3f', '5c6ceed116d3f', '5c63df513a32c', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c6cf0cae0486', '5c5ab58a22551', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c6cf0cae0486', NULL, NULL, NULL, NULL, NULL, NULL, '5c6ceed116d3f', '5c6ceed116d3f', '5c6ceed116d3f', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '5c6ceed116d3f'),
('5c6cf224d4488', '5c5ab58a22551', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c6cf224d4488', NULL, NULL, NULL, NULL, NULL, '5c6cf224d4488', '5c6ceed116d3f', '5c6ceed116d3f', '5c6ceed116d3f', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '5c6ceed116d3f'),
('5c6cf52ba2856', '5c5ab58a22551', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c6cf224d4488', NULL, NULL, NULL, NULL, NULL, '5c6cf52ba2856', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c6cf5a1958a6', '5c5ab58a22551', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c6cf224d4488', '5c6cf5a1958a6', NULL, NULL, NULL, NULL, NULL, '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c761a6fdf647', '5c761a6fdf647', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c6cf224d4488', NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c761fdd445bb', '5c761a6fdf647', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c761fdd445bb', NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c76209164c9e', '5c761a6fdf647', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c761fdd445bb', NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c763252676a2', '5c761a6fdf647', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c761fdd445bb', NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c86342a55439', '5c761a6fdf647', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c761fdd445bb', NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c8644a728dae', '5c761a6fdf647', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c761fdd445bb', NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c8644d7d1cf0', '5c761a6fdf647', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c8644d7d1cf0', NULL, NULL, NULL, NULL, NULL, NULL, '', '', '5c8644d7d1cf0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c864ed26dc7c', '5c761a6fdf647', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c761fdd445bb', NULL, NULL, NULL, '5c864ed26dc7c', NULL, NULL, '', '', '5c864ed26dc7c', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c87725446f35', '5c761a6fdf647', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c87725446f35', NULL, NULL, '5c87725446f35', '5c87725446f35', NULL, NULL, '', '', '5c87725446f35', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c87862f5d05e', '5c761a6fdf647', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c87862f5d05e', NULL, NULL, NULL, NULL, NULL, NULL, '', '', '5c87725446f35', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '5c87725446f35'),
('5c87865703dba', '5c761a6fdf647', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c87865703dba', NULL, NULL, NULL, NULL, NULL, '5c87865703dba', '', '', '5c87865703dba', '5c87865703dba', '5c87865703dba', '5c87865703dba', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c888f5571939', '5c761a6fdf647', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c87865703dba', NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '5c888f5571939', '5c888f5571939', '5c888f5571939', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c89e2085ea5e', '5c761a6fdf647', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c87865703dba', NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
('5c8b39a3d9e16', '5c761a6fdf647', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c5ab58a1f382', '5c87865703dba', NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '');

-- --------------------------------------------------------

--
-- Table structure for table `sites`
--

CREATE TABLE `sites` (
  `prs` varchar(256) NOT NULL,
  `site_name` varchar(64) DEFAULT NULL,
  `site_city` varchar(64) DEFAULT NULL,
  `site_state` varchar(64) DEFAULT NULL,
  `site_country` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sites`
--

INSERT INTO `sites` (`prs`, `site_name`, `site_city`, `site_state`, `site_country`) VALUES
('Test01', 'Test', 'Barpeta', 'Assam', 'in'),
('TEST02', 'Test02', 'East Godavari', 'State of Andhra Pradesh', 'in');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `revisions`
--
ALTER TABLE `revisions`
  ADD PRIMARY KEY (`rev_sign`),
  ADD KEY `prs` (`prs`);

--
-- Indexes for table `section2_contactdetails`
--
ALTER TABLE `section2_contactdetails`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section3_technicaldetails`
--
ALTER TABLE `section3_technicaldetails`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section4_connectivitydetails`
--
ALTER TABLE `section4_connectivitydetails`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section4_modalitydetails`
--
ALTER TABLE `section4_modalitydetails`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section5_exammodalitytype`
--
ALTER TABLE `section5_exammodalitytype`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section5_ordercontrolcode`
--
ALTER TABLE `section5_ordercontrolcode`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section5_ordercontrolstatus`
--
ALTER TABLE `section5_ordercontrolstatus`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section5_orderstatus`
--
ALTER TABLE `section5_orderstatus`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section5_patientclass`
--
ALTER TABLE `section5_patientclass`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section5_race`
--
ALTER TABLE `section5_race`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section6_samplemessages`
--
ALTER TABLE `section6_samplemessages`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section7_mappings_msh`
--
ALTER TABLE `section7_mappings_msh`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section7_mappings_obr`
--
ALTER TABLE `section7_mappings_obr`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section7_mappings_obx`
--
ALTER TABLE `section7_mappings_obx`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section7_mappings_orc`
--
ALTER TABLE `section7_mappings_orc`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section7_mappings_pid`
--
ALTER TABLE `section7_mappings_pid`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section7_mappings_pv1`
--
ALTER TABLE `section7_mappings_pv1`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section7_mappings_zds`
--
ALTER TABLE `section7_mappings_zds`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section8_customizations`
--
ALTER TABLE `section8_customizations`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section10_testplan_adt`
--
ALTER TABLE `section10_testplan_adt`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section10_testplan_dicom_createreport`
--
ALTER TABLE `section10_testplan_dicom_createreport`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section10_testplan_dicom_dw_createreport`
--
ALTER TABLE `section10_testplan_dicom_dw_createreport`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section10_testplan_dicom_dw_images`
--
ALTER TABLE `section10_testplan_dicom_dw_images`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section10_testplan_dicom_dw_reconcile_study`
--
ALTER TABLE `section10_testplan_dicom_dw_reconcile_study`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section10_testplan_dicom_dw_resultmsg`
--
ALTER TABLE `section10_testplan_dicom_dw_resultmsg`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section10_testplan_dicom_imagetransfer`
--
ALTER TABLE `section10_testplan_dicom_imagetransfer`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section10_testplan_dicom_resultmsg`
--
ALTER TABLE `section10_testplan_dicom_resultmsg`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section10_testplan_dicom_usmodality`
--
ALTER TABLE `section10_testplan_dicom_usmodality`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section10_testplan_dicom_worklist_createorder`
--
ALTER TABLE `section10_testplan_dicom_worklist_createorder`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section10_testplan_orders_cancelorder`
--
ALTER TABLE `section10_testplan_orders_cancelorder`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section10_testplan_orders_neworder`
--
ALTER TABLE `section10_testplan_orders_neworder`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section10_testplan_orders_status`
--
ALTER TABLE `section10_testplan_orders_status`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section10_testplan_procedures`
--
ALTER TABLE `section10_testplan_procedures`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section10_testplan_resultpdf`
--
ALTER TABLE `section10_testplan_resultpdf`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section10_testplan_resultpdf_msh`
--
ALTER TABLE `section10_testplan_resultpdf_msh`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section10_testplan_resultpdf_obr`
--
ALTER TABLE `section10_testplan_resultpdf_obr`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section10_testplan_resultpdf_obx`
--
ALTER TABLE `section10_testplan_resultpdf_obx`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section10_testplan_resultpdf_orc`
--
ALTER TABLE `section10_testplan_resultpdf_orc`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section10_testplan_resultpdf_pid`
--
ALTER TABLE `section10_testplan_resultpdf_pid`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section10_testplan_resultpdf_pv1`
--
ALTER TABLE `section10_testplan_resultpdf_pv1`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section10_testplan_resultpdf_zds`
--
ALTER TABLE `section10_testplan_resultpdf_zds`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section10_testplan_resultstext`
--
ALTER TABLE `section10_testplan_resultstext`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section10_testplan_resultstext_msh`
--
ALTER TABLE `section10_testplan_resultstext_msh`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section10_testplan_resultstext_obr`
--
ALTER TABLE `section10_testplan_resultstext_obr`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section10_testplan_resultstext_obx`
--
ALTER TABLE `section10_testplan_resultstext_obx`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section10_testplan_resultstext_orc`
--
ALTER TABLE `section10_testplan_resultstext_orc`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section10_testplan_resultstext_pid`
--
ALTER TABLE `section10_testplan_resultstext_pid`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section10_testplan_resultstext_pv1`
--
ALTER TABLE `section10_testplan_resultstext_pv1`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section10_testplan_resultstext_zds`
--
ALTER TABLE `section10_testplan_resultstext_zds`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section10_testplan_resultsutr`
--
ALTER TABLE `section10_testplan_resultsutr`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section10_testplan_resultsutr_msh`
--
ALTER TABLE `section10_testplan_resultsutr_msh`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section10_testplan_resultsutr_obr`
--
ALTER TABLE `section10_testplan_resultsutr_obr`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section10_testplan_resultsutr_obx`
--
ALTER TABLE `section10_testplan_resultsutr_obx`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section10_testplan_resultsutr_orc`
--
ALTER TABLE `section10_testplan_resultsutr_orc`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section10_testplan_resultsutr_pid`
--
ALTER TABLE `section10_testplan_resultsutr_pid`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section10_testplan_resultsutr_pv1`
--
ALTER TABLE `section10_testplan_resultsutr_pv1`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section10_testplan_resultsutr_zds`
--
ALTER TABLE `section10_testplan_resultsutr_zds`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `section11_issues`
--
ALTER TABLE `section11_issues`
  ADD PRIMARY KEY (`row_counter`);

--
-- Indexes for table `sections`
--
ALTER TABLE `sections`
  ADD PRIMARY KEY (`rev_sign`);

--
-- Indexes for table `sites`
--
ALTER TABLE `sites`
  ADD PRIMARY KEY (`prs`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `section2_contactdetails`
--
ALTER TABLE `section2_contactdetails`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `section3_technicaldetails`
--
ALTER TABLE `section3_technicaldetails`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `section4_connectivitydetails`
--
ALTER TABLE `section4_connectivitydetails`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `section4_modalitydetails`
--
ALTER TABLE `section4_modalitydetails`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `section5_exammodalitytype`
--
ALTER TABLE `section5_exammodalitytype`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `section5_ordercontrolcode`
--
ALTER TABLE `section5_ordercontrolcode`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `section5_ordercontrolstatus`
--
ALTER TABLE `section5_ordercontrolstatus`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `section5_orderstatus`
--
ALTER TABLE `section5_orderstatus`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `section5_patientclass`
--
ALTER TABLE `section5_patientclass`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `section5_race`
--
ALTER TABLE `section5_race`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `section6_samplemessages`
--
ALTER TABLE `section6_samplemessages`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `section7_mappings_msh`
--
ALTER TABLE `section7_mappings_msh`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `section7_mappings_obr`
--
ALTER TABLE `section7_mappings_obr`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `section7_mappings_obx`
--
ALTER TABLE `section7_mappings_obx`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `section7_mappings_orc`
--
ALTER TABLE `section7_mappings_orc`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `section7_mappings_pid`
--
ALTER TABLE `section7_mappings_pid`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `section7_mappings_pv1`
--
ALTER TABLE `section7_mappings_pv1`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `section7_mappings_zds`
--
ALTER TABLE `section7_mappings_zds`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `section8_customizations`
--
ALTER TABLE `section8_customizations`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `section10_testplan_adt`
--
ALTER TABLE `section10_testplan_adt`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `section10_testplan_dicom_createreport`
--
ALTER TABLE `section10_testplan_dicom_createreport`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `section10_testplan_dicom_dw_createreport`
--
ALTER TABLE `section10_testplan_dicom_dw_createreport`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `section10_testplan_dicom_dw_images`
--
ALTER TABLE `section10_testplan_dicom_dw_images`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `section10_testplan_dicom_dw_reconcile_study`
--
ALTER TABLE `section10_testplan_dicom_dw_reconcile_study`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `section10_testplan_dicom_dw_resultmsg`
--
ALTER TABLE `section10_testplan_dicom_dw_resultmsg`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `section10_testplan_dicom_imagetransfer`
--
ALTER TABLE `section10_testplan_dicom_imagetransfer`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `section10_testplan_dicom_resultmsg`
--
ALTER TABLE `section10_testplan_dicom_resultmsg`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `section10_testplan_dicom_usmodality`
--
ALTER TABLE `section10_testplan_dicom_usmodality`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `section10_testplan_dicom_worklist_createorder`
--
ALTER TABLE `section10_testplan_dicom_worklist_createorder`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `section10_testplan_orders_cancelorder`
--
ALTER TABLE `section10_testplan_orders_cancelorder`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `section10_testplan_orders_neworder`
--
ALTER TABLE `section10_testplan_orders_neworder`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `section10_testplan_orders_status`
--
ALTER TABLE `section10_testplan_orders_status`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `section10_testplan_procedures`
--
ALTER TABLE `section10_testplan_procedures`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `section10_testplan_resultpdf`
--
ALTER TABLE `section10_testplan_resultpdf`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `section10_testplan_resultpdf_msh`
--
ALTER TABLE `section10_testplan_resultpdf_msh`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `section10_testplan_resultpdf_obr`
--
ALTER TABLE `section10_testplan_resultpdf_obr`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `section10_testplan_resultpdf_obx`
--
ALTER TABLE `section10_testplan_resultpdf_obx`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `section10_testplan_resultpdf_orc`
--
ALTER TABLE `section10_testplan_resultpdf_orc`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `section10_testplan_resultpdf_pid`
--
ALTER TABLE `section10_testplan_resultpdf_pid`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `section10_testplan_resultpdf_pv1`
--
ALTER TABLE `section10_testplan_resultpdf_pv1`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `section10_testplan_resultpdf_zds`
--
ALTER TABLE `section10_testplan_resultpdf_zds`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `section10_testplan_resultstext`
--
ALTER TABLE `section10_testplan_resultstext`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `section10_testplan_resultstext_msh`
--
ALTER TABLE `section10_testplan_resultstext_msh`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `section10_testplan_resultstext_obr`
--
ALTER TABLE `section10_testplan_resultstext_obr`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `section10_testplan_resultstext_obx`
--
ALTER TABLE `section10_testplan_resultstext_obx`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `section10_testplan_resultstext_orc`
--
ALTER TABLE `section10_testplan_resultstext_orc`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `section10_testplan_resultstext_pid`
--
ALTER TABLE `section10_testplan_resultstext_pid`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `section10_testplan_resultstext_pv1`
--
ALTER TABLE `section10_testplan_resultstext_pv1`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `section10_testplan_resultstext_zds`
--
ALTER TABLE `section10_testplan_resultstext_zds`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `section10_testplan_resultsutr`
--
ALTER TABLE `section10_testplan_resultsutr`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `section10_testplan_resultsutr_msh`
--
ALTER TABLE `section10_testplan_resultsutr_msh`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `section10_testplan_resultsutr_obr`
--
ALTER TABLE `section10_testplan_resultsutr_obr`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `section10_testplan_resultsutr_obx`
--
ALTER TABLE `section10_testplan_resultsutr_obx`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `section10_testplan_resultsutr_orc`
--
ALTER TABLE `section10_testplan_resultsutr_orc`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `section10_testplan_resultsutr_pid`
--
ALTER TABLE `section10_testplan_resultsutr_pid`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `section10_testplan_resultsutr_pv1`
--
ALTER TABLE `section10_testplan_resultsutr_pv1`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `section10_testplan_resultsutr_zds`
--
ALTER TABLE `section10_testplan_resultsutr_zds`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `section11_issues`
--
ALTER TABLE `section11_issues`
  MODIFY `row_counter` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `revisions`
--
ALTER TABLE `revisions`
  ADD CONSTRAINT `revisions_ibfk_1` FOREIGN KEY (`prs`) REFERENCES `sites` (`prs`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
