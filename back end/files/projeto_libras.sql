-- create database ilibras;
use ilibras;

create table categoria (
    codigo_cat int primary key auto_increment,
    descri_cat varchar(50) unique not null
);

create table tag (
    codigo_tag int primary key auto_increment,
    descri_tag varchar(50) not null,
    codcat_tag int not null,
    foreign key (codcat_tag) references categoria(codigo_cat)
);

create table termo (
    codigo_ter int primary key auto_increment,
    descri_ter varchar(50) not null,
    codcat_ter int not null,
    codtag_ter int not null,
    foreign key (codcat_ter) references categoria(codigo_cat),
    foreign key (codtag_ter) references tag(codigo_tag)
);

create table estado (
    codigo_est int primary key auto_increment,
    descri_est varchar(30) unique not null,
    abrev_est varchar(19) unique not null
);

create table endereco (
    codigo_end int primary key auto_increment,
    lograd_end varchar(50) not null,
    bairro_end varchar(30) not null,
    numero_end int,
    comple_end varchar(40),
    cidade_end varchar(50) not null,
    codest_end int not null,
    foreign key (codest_end) references estado(codigo_est)
);

create table regiao (
    codigo_reg int primary key auto_increment,
    descri_reg varchar(50) unique not null,
    codend_reg int not null,
    foreign key(codend_reg) references endereco(codigo_end)
);

create table sinal (
    codigo_sin int primary key auto_increment,
    descri_sin varchar(50) not null,
    confmao_sin varchar(30) not null,
    expres_sin varchar(30) not null,
    orient_sin varchar(30) not null,
    ponart_sin varchar(30) not null,
    comvid_sin varchar(255),
    codter_sin int not null,
    codloc_sin int not null,
    foreign key (codter_sin) references termo(codigo_ter),
    foreign key (codloc_sin) references localizacao(codigo_loc)
);

create table foto (
    codigo_fot int primary key auto_increment,
    arqui_fot blob not null
);

create table usuario (
    codigo_usu int primary key auto_increment,
    email_usu varchar(60) unique not null,
    senha_usu varchar(20) not null,
    nome_usu varchar(50) not null,
    datnasc_usu date not null,
    fone_usu varchar(15) not null,
    codend_usu int not null,
    codfot_usu int not null,
    foreign key (codend_usu) references endereco(codigo_end),
    foreign key (codfot_usu) references foto(codigo_fot)
);

insert into estado(descri_est, abrev_est) values ('Acre', 'AC');
insert into estado(descri_est, abrev_est) values ('Alagoas', 'AL');
insert into estado(descri_est, abrev_est) values ('Amapá', 'AP');
insert into estado(descri_est, abrev_est) values ('Amazonas', 'AM');
insert into estado(descri_est, abrev_est) values ('Bahia', 'BA');
insert into estado(descri_est, abrev_est) values ('Ceará', 'CE');
insert into estado(descri_est, abrev_est) values ('Distrito Federal', 'DF');
insert into estado(descri_est, abrev_est) values ('Espírito Santo', 'ES');
insert into estado(descri_est, abrev_est) values ('Goiás', 'GO');
insert into estado(descri_est, abrev_est) values ('Maranhão', 'MA');
insert into estado(descri_est, abrev_est) values ('Mato Grosso', 'MT');
insert into estado(descri_est, abrev_est) values ('Mato Grosso do Sul', 'MS');
insert into estado(descri_est, abrev_est) values ('Minas Gerais', 'MG');
insert into estado(descri_est, abrev_est) values ('Pará', 'PA');
insert into estado(descri_est, abrev_est) values ('Paraibá', 'PB');
insert into estado(descri_est, abrev_est) values ('Paraná', 'PR');
insert into estado(descri_est, abrev_est) values ('Pernanbuco', 'PE');
insert into estado(descri_est, abrev_est) values ('Piauí', 'PI');
insert into estado(descri_est, abrev_est) values ('Rio de Janeiro', 'RJ');
insert into estado(descri_est, abrev_est) values ('Rio Grande do Norte', 'RN');
insert into estado(descri_est, abrev_est) values ('Rio Grande do Sul', 'RS');
insert into estado(descri_est, abrev_est) values ('Rondônia', 'RO');
insert into estado(descri_est, abrev_est) values ('Roraima', 'RR');
insert into estado(descri_est, abrev_est) values ('Santa Catarina', 'SC');
insert into estado(descri_est, abrev_est) values ('São Paulo', 'SP');
insert into estado(descri_est, abrev_est) values ('Sergipe', 'SE');
insert into estado(descri_est, abrev_est) values ('Tocantins', 'TO');