DROP SCHEMA IF EXISTS `cinema_test`;
CREATE SCHEMA IF NOT EXISTS `cinema_test`;
USE `cinema_test`;
CREATE TABLE IF NOT EXISTS `films` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `film_title` VARCHAR(40) DEFAULT NULL,
    `film_year` INTEGER,
    `film_rating` VARCHAR(3) DEFAULT NULL,
    `film_genre` VARCHAR(20) DEFAULT NULL,
    `film_secondary_genre` VARCHAR(20) DEFAULT NULL,
    `film_poster` VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
);
CREATE TABLE IF NOT EXISTS `screens` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `screen_max_seats` INT(4) DEFAULT NULL,
    PRIMARY KEY (`id`)
);
CREATE TABLE IF NOT EXISTS `users` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `user_name` VARCHAR(20) DEFAULT NULL,
    `user_fname` VARCHAR(20) DEFAULT NULL,
    `user_pass` VARCHAR(64) DEFAULT NULL,
    PRIMARY KEY (`id`)
);
CREATE TABLE IF NOT EXISTS `showings` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `showing_film` INT(11) NOT NULL,
    `showing_screen` INT(11) NOT NULL,
    `showing_time` DATETIME DEFAULT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY(`showing_film`) REFERENCES `films`(`id`) ON DELETE CASCADE,
    FOREIGN KEY(`showing_screen`) REFERENCES `screens`(`id`) ON DELETE CASCADE
);
CREATE TABLE IF NOT EXISTS `tickets` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `ticket_showing` INT(11) NOT NULL,
    `ticket_user` INT(11) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY(`ticket_user`) REFERENCES `users`(`id`) ON DELETE CASCADE,
    FOREIGN KEY(`ticket_showing`) REFERENCES `showings`(`id`) ON DELETE CASCADE
);
CREATE TABLE IF NOT EXISTS `cc_details` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `cc_user` INT(11) NOT NULL,
    `cc_number` BIGINT(16) NOT NULL,
    `cc_date` INT(4) NOT NULL,
    `cc_ccv` INT(3) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY(`cc_user`) REFERENCES `users`(`id`) ON DELETE CASCADE
);

CREATE TABLE `discussion_board` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `body` TEXT NOT NULL,
    `film_id` INT NOT NULL,
    `film_rating` INT,
    `cinema_rating` VARCHAR(15),
    PRIMARY KEY (`id`),
    FOREIGN KEY (`film_id`) REFERENCES `films`(`id`)
);