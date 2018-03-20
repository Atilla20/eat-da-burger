drop database if exists burgers_db;

create database burgers_db;

use burgers_db;

create table burgers(
	id integer(10) auto_increment not null,
	burger_name varchar(30),
    devoured boolean not null,	
	primary key (id)
);

select * from burgers;
