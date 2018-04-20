create table users(
id serial primary key,
username varchar(20),
password varchar(20),
profile_pic text
);

insert into users(username, password, profile_pic)
values ('thetoemasher', 'varchar40', 'alsdjf;ljds;fljl');
insert into users(username, password, profile_pic)
values ('cheesebread76', 'buckaroobonzai', 'qwer;jlkj;fsa');
insert into users(username, password, profile_pic)
values ('somebodyonecetoldme2', 'theworldsgonnarollme', 'iaintthesharpesttoolintheshed');


create table posts (
id serial primary key,
title varchar(45),
img text,
content text,
author_id integer references users(id)
);

insert into posts(title, img, content, author_id)
values ('something', 'no image', 'aslfj;lasjflkjasfljoiaspofijasfj;', 3);
