
CREATE TABLE Contact
(
  id      INT          NOT NULL AUTO_INCREMENT,
  name    VARCHAR(255) NOT NULL,
  email   VARCHAR(255) NOT NULL,
  message VARCHAR(255) NOT NULL,
  tlf     VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE messages
(
  id                 INT          NOT NULL AUTO_INCREMENT,
  message            VARCHAR(255) NOT NULL,
  idcontact          INT          NOT NULL,
   idservicepubliser INT          NOT NULL,
  idproductpubliser  INT          NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Products
(
  id                 INT           NOT NULL AUTO_INCREMENT,
  name               VARCHAR(255)  NOT NULL,
  Price              DECIMAL(10,2) NOT NULL,
  img                VARCHAR(255)  NOT NULL,
  description        VARCHAR(255)  NOT NULL,
  idproductspubliser INT           NOT NULL,
  idpurchase         INT           NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE productspubliser
(
  id          INT          NOT NULL AUTO_INCREMENT,
  name        VARCHAR(255) NOT NULL,
  company     VARCHAR(255) NULL    ,
  email       VARCHAR(255) NOT NULL,
  tlf         VARCHAR(255) NOT NULL,
  address     VARCHAR(255) NOT NULL,
  description VARCHAR(255) NULL    ,
  password    VARCHAR(255) NOT NULL,
  check_box   TINYINT      NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE purchase
(
  id      INT NOT NULL AUTO_INCREMENT,
  idusers INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE services
(
  id                 INT           NOT NULL AUTO_INCREMENT,
  name               VARCHAR(255)  NOT NULL,
  price              DECIMAL(10,2) NOT NULL,
  servicetype        VARCHAR(255)  NULL    ,
  description        VARCHAR(255)  NOT NULL,
  idservicespubliser INT           NOT NULL,
  idpurchase         INT           NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE servicespubliser
(
  id          INT          NOT NULL AUTO_INCREMENT,
  name        VARCHAR(255) NOT NULL,
  lastname    VARCHAR(255) NOT NULL,
  tlf         VARCHAR(255) NOT NULL,
  email       VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  address     VARCHAR(255) NOT NULL,
  servicetype VARCHAR(255) NULL    ,
  password    VARCHAR(255) NOT NULL,
  check_box   TINYINT      NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE users
(
  id        INT          NOT NULL AUTO_INCREMENT,
  name      VARCHAR(255) NOT NULL,
  lastname  VARCHAR(255) NOT NULL,
  password  VARCHAR(255) NOT NULL,
  address   VARCHAR(255) NOT NULL,
  email     VARCHAR(255) NOT NULL,
  check_box TINYINT      NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE Products
  ADD CONSTRAINT FK_productspubliser_TO_Products
    FOREIGN KEY (idproductspubliser)
    REFERENCES productspubliser (id);

ALTER TABLE messages
  ADD CONSTRAINT FK_Contact_TO_messages
    FOREIGN KEY (idcontact)
    REFERENCES Contact (id);

ALTER TABLE messages
  ADD CONSTRAINT FK_servicespubliser_TO_messages
    FOREIGN KEY ( idservicepubliser)
    REFERENCES servicespubliser (id);

ALTER TABLE messages
  ADD CONSTRAINT FK_productspubliser_TO_messages
    FOREIGN KEY (idproductpubliser)
    REFERENCES productspubliser (id);

ALTER TABLE services
  ADD CONSTRAINT FK_servicespubliser_TO_services
    FOREIGN KEY (idservicespubliser)
    REFERENCES servicespubliser (id);

ALTER TABLE purchase
  ADD CONSTRAINT FK_users_TO_purchase
    FOREIGN KEY (idusers)
    REFERENCES users (id);

ALTER TABLE Products
  ADD CONSTRAINT FK_purchase_TO_Products
    FOREIGN KEY (idpurchase)
    REFERENCES purchase (id);

ALTER TABLE services
  ADD CONSTRAINT FK_purchase_TO_services
    FOREIGN KEY (idpurchase)
    REFERENCES purchase (id);
