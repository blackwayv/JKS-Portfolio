CREATE DATABASE greenfield;

\c greenfield;

CREATE TABLE IF NOT EXISTS products (
  id serial NOT NULL PRIMARY KEY,
  name VARCHAR (30),
  slogan text,
  description text,
  category VARCHAR (20),
  default_price VARCHAR (10)
);

CREATE UNIQUE INDEX product_id ON products(id);

CREATE TABLE IF NOT EXISTS features (
  id serial NOT NULL PRIMARY KEY,
  product_id serial NOT NULL,
  feature VARCHAR (30),
  value VARCHAR (30)
);

CREATE INDEX f_product_id on features(product_id);

CREATE TABLE IF NOT EXISTS styles (
  id serial NOT NULL PRIMARY KEY,
  product_id serial NOT NULL REFERENCES products(id),
  name VARCHAR (30),
  sale_price VARCHAR (10),
  default_price VARCHAR (10),
  default_style integer
);

CREATE UNIQUE INDEX style_id on styles(id);
CREATE INDEX s_product_id ON styles(product_id);

CREATE TABLE IF NOT EXISTS skus (
  id serial NOT NULL PRIMARY KEY,
  style_id serial NOT NULL REFERENCES styles(id),
  size VARCHAR (20),
  quantity integer
);

CREATE INDEX s_style_id on skus(style_id);

CREATE TABLE IF NOT EXISTS related (
  id serial NOT NULL PRIMARY KEY,
  current_id serial NOT NULL REFERENCES products(id),
  related_id serial NOT NULL
);

CREATE INDEX r_product_id ON related(current_id);

CREATE TABLE IF NOT EXISTS photos (
  id serial NOT NULL PRIMARY KEY,
  style_id serial NOT NULL REFERENCES styles(id),
  url text,
  thumbnail_url text
);

CREATE INDEX p_style_id ON photos(style_id);

COPY products(id,name,slogan,description,category,default_price)
FROM 'C:\Program Files\PostgreSQL\bin\csv\product.csv' DELIMITER ',' CSV HEADER;

COPY features(id,product_id,feature,value)
FROM 'C:\Program Files\PostgreSQL\bin\csv\features.csv' DELIMITER ',' CSV;

COPY styles(id,product_id,name,sale_price,default_price,default_style)
FROM 'C:\Program Files\PostgreSQL\bin\csv\styles.csv' DELIMITER ',' CSV HEADER;

COPY skus(id,style_id,size,quantity)
FROM 'C:\Program Files\PostgreSQL\bin\csv\skus.csv' DELIMITER ',' CSV HEADER;

COPY related(id,current_id,related_id)
FROM 'C:\Program Files\PostgreSQL\bin\csv\related.csv' DELIMITER ',' CSV HEADER;

COPY photos(id,style_id,url,thumbnail_url)
FROM 'C:\Program Files\PostgreSQL\bin\csv\photos.csv' DELIMITER ',' CSV HEADER;