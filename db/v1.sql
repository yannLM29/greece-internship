CREATE USER 'website-node'@'%' IDENTIFIED VIA mysql_native_password USING '***';GRANT SELECT, INSERT ON *.* TO 'website-node'@'%' REQUIRE NONE WITH MAX_QUERIES_PER_HOUR 0 MAX_CONNECTIONS_PER_HOUR 0 MAX_UPDATES_PER_HOUR 0 MAX_USER_CONNECTIONS 0; 


CREATE TABLE `Messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pseudo` text NOT NULL,
  `gender` text NOT NULL,
  `message` mediumtext NOT NULL,
  PRIMARY KEY (`id`)
)