# Schema Information

## photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null
user_id     | integer   | not null, foreign key (references users), indexed
album_id    | integer   | not null, foreign key (references albums), indexed

## albums
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
title       | string    | not null
description | string    |

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
photo_id    | string    | not null, foreign key (references photos), indexed
body        | text      | not null

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
photo_id    | integer   | not null, foreign key (references photos), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
full_name       | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
