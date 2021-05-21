-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Mag 21, 2021 alle 15:22
-- Versione del server: 10.4.14-MariaDB
-- Versione PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookreview`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `authors`
--

CREATE TABLE `authors` (
  `id` int(6) UNSIGNED ZEROFILL NOT NULL,
  `name` varchar(50) NOT NULL,
  `biography` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `authors`
--

INSERT INTO `authors` (`id`, `name`, `biography`) VALUES
(000004, 'Pirandello', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae tempor erat. Nullam lorem turpis, sodales placerat tempor non, dictum at diam. Mauris ac consequat augue. Sed at semper ligula, ut tincidunt mauris. Sed augue quam, ultrices eu pulvinar id, commodo efficitur libero. Etiam fermentum turpis pretium tempor molestie. Proin sit amet auctor justo. Donec venenatis tempor dictum. Sed leo erat, rhoncus accumsan nibh maximus, porta ullamcorper nulla. Donec a sodales sapien. Curabitur sodales blandit urna. Praesent aliquet facilisis volutpat. Sed quam est, iaculis sed arcu quis, sollicitudin aliquet nulla.'),
(000008, 'Brecht', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae tempor erat. Nullam lorem turpis, sodales placerat tempor non, dictum at diam. Mauris ac consequat augue. Sed at semper ligula, ut tincidunt mauris. Sed augue quam, ultrices eu pulvinar id, commodo efficitur libero. Etiam fermentum turpis pretium tempor molestie. Proin sit amet auctor justo. Donec venenatis tempor dictum. Sed leo erat, rhoncus accumsan nibh maximus, porta ullamcorper nulla. Donec a sodales sapien. Curabitur sodales blandit urna. Praesent aliquet facilisis volutpat. Sed quam est, iaculis sed arcu quis, sollicitudin aliquet nulla.');

-- --------------------------------------------------------

--
-- Struttura della tabella `books`
--

CREATE TABLE `books` (
  `id` int(10) UNSIGNED ZEROFILL NOT NULL,
  `title` varchar(30) NOT NULL,
  `summary` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `books`
--

INSERT INTO `books` (`id`, `title`, `summary`) VALUES
(0000000018, '1 nessuno', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae tempor erat. Nullam lorem turpis, sodales placerat tempor non, dictum at diam. Mauris ac consequat augue. Sed at semper ligula, ut tincidunt mauris. Sed augue quam, ultrices eu pulvinar id, commodo efficitur libero. Etiam fermentum turpis pretium tempor molestie. Proin sit amet auctor justo. Donec venenatis tempor dictum. Sed leo erat, rhoncus accumsan nibh maximus, porta ullamcorper nulla. Donec a sodales sapien. Curabitur sodales blandit urna. Praesent aliquet facilisis volutpat. Sed quam est, iaculis sed arcu quis, sollicitudin aliquet nulla.');

-- --------------------------------------------------------

--
-- Struttura della tabella `reviews`
--

CREATE TABLE `reviews` (
  `id` int(10) UNSIGNED ZEROFILL NOT NULL,
  `userId` int(10) UNSIGNED ZEROFILL NOT NULL,
  `bookId` int(10) UNSIGNED ZEROFILL NOT NULL,
  `mark` float(2,1) NOT NULL,
  `text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `reviews`
--

INSERT INTO `reviews` (`id`, `userId`, `bookId`, `mark`, `text`) VALUES
(0000000002, 0000000001, 0000000018, 4.5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae tempor erat. Nullam lorem turpis, sodales placerat tempor non, dictum at diam. Mauris ac consequat augue. Sed at semper ligula, ut tincidunt mauris. Sed augue quam, ultrices eu pulvinar id, commodo efficitur libero. Etiam fermentum turpis pretium tempor molestie. Proin sit amet auctor justo. Donec venenatis tempor dictum. Sed leo erat, rhoncus accumsan nibh maximus, porta ullamcorper nulla. Donec a sodales sapien. Curabitur sodales blandit urna. Praesent aliquet facilisis volutpat. Sed quam est, iaculis sed arcu quis, sollicitudin aliquet nulla.');

-- --------------------------------------------------------

--
-- Struttura della tabella `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED ZEROFILL NOT NULL,
  `firstname` varchar(30) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(50) NOT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `username`, `password`, `email`, `admin`) VALUES
(0000000001, 'michele', 'crimi', 'mcrimi', '9StAecwCyBqVxzkxJCklcQ==', 'mcrimi25@gmail.com', 1),
(0000000002, 'anita', 'paiardi', 'paia', 'VxzkxJCklcQ==9StAecwCyBq', 'anitapaia@gmail.com', 0);

-- --------------------------------------------------------

--
-- Struttura della tabella `write`
--

CREATE TABLE `write` (
  `author` int(6) UNSIGNED ZEROFILL NOT NULL,
  `book` int(10) UNSIGNED ZEROFILL NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `write`
--

INSERT INTO `write` (`author`, `book`) VALUES
(000004, 0000000018),
(000008, 0000000018);

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indici per le tabelle `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `title` (`title`);

--
-- Indici per le tabelle `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `bookId` (`bookId`);

--
-- Indici per le tabelle `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username_2` (`username`),
  ADD UNIQUE KEY `email_2` (`email`),
  ADD KEY `username` (`username`),
  ADD KEY `email` (`email`);

--
-- Indici per le tabelle `write`
--
ALTER TABLE `write`
  ADD PRIMARY KEY (`author`,`book`),
  ADD KEY `book` (`book`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `authors`
--
ALTER TABLE `authors`
  MODIFY `id` int(6) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT per la tabella `books`
--
ALTER TABLE `books`
  MODIFY `id` int(10) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT per la tabella `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(10) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT per la tabella `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`bookId`) REFERENCES `books` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limiti per la tabella `write`
--
ALTER TABLE `write`
  ADD CONSTRAINT `write_ibfk_1` FOREIGN KEY (`author`) REFERENCES `authors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `write_ibfk_2` FOREIGN KEY (`book`) REFERENCES `books` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
