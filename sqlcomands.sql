use museu_bcc;

select * from autor;

select * from autor where nome like "%n%";

select nome, nacionalidade from autor where nome like "%r%";

select * from esculturamaterial;

select * from material;

select * from obra;

select * from obra where IDOBRA = 8;

select * from obra where peso >= 12;

select * from obra where TIPOOBRA <> "Pintura"; 

select * from obra where TIPOOBRA != "Pintura"; 

select * from obra where idautor = 1+1;
select * from obra where idautor = 2*2;

select * from obra where anocriacao >= 2000 and idautor >= 2;

select * from obra where anocriacao >= 2000 or idautor = 2;

select * from obra where anocriacao between 2000 and 2015;
select * from obra where anocriacao not between 2000 and 2015;

select * from obra where idobra in(10, 11, 12);
select * from obra where idobra not in(10, 11, 12);

select * from obra where peso is null;
select * from obra where peso is not null;

select * from autor;

insert into autor(nome, nacionalidade) values("Maria Luiza Valente", "Argentino");
update autor set nacionalidade = "Italiano" where idautor = 6;

delete from autor where idautor=6;

