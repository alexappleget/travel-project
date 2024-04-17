CREATE DATABASE vacation;

CREATE TABLE vacation (
    vacation_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    img_url TEXT,
    location VARCHAR(100),
    description VARCHAR(255),
    price INT
);

CREATE TABLE customer (
    customer_id SERIAL PRIMARY KEY,
    firstName VARCHAR(100),
    lastName VARCHAR(100),
    email VARCHAR(100),
    phone INT
);

INSERT INTO vacation (name, img_url, location, description, price) VALUES ('Theme Park', 'https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/2022-05/VC_Summer-Theme-Parks_Disneyland_SUPPLIED_1280x640.jpg', 'Orlando, FL', 'Endless Awesome. Endless Value. Introducing and amazing theme park resort for you and your family. Book Now!', 99);

INSERT INTO vacation (name, img_url, location, description, price) VALUES ('Cruise', 'https://www.usnews.com/object/image/0000018b-d925-dafe-a7ab-fd2540190001/new-main-image-icon-of-the-seas-royal-caribbean-international.jpg?update-time=1700155178582&size=responsive640', 'Miami, FL', 'Embark on a journey across the ocean for 7-nights. All-inclusive for you and your family to enjoy as much as possible. As well as, a $500 voucher to enjoy excersions as various ports. Book Now!', 1399);

INSERT INTO vacation (name, img_url, location, description, price) VALUES ('Resort All-Inclusive', 'https://media.cnn.com/api/v1/images/stellar/prod/underscored-grant-hyatt-baha-mar.png?q=h_1800,w_3200,x_0,y_0', 'Cancun, MX', 'Enjoy a 5-night all inclusive resort in Cancun, Mexico! Free food, smoothies, massages, and transportation. Book Now!', 3499);

INSERT INTO vacation (name, img_url, location, description, price) VALUES ('Harry Potter Set Tour', 'https://www.getyourguide.com/cdn/img/tour/54b7e542042c8.jpeg/98.jpg', 'Watford, UK', 'Big Harry Potter fan? Ever wanted to experience the real-life Hogwarts where the movies took place? In this package you will fly out to London and experience firsthand what made Hogwarts so magical. Book Now!', 3999);

INSERT INTO vacation (name, img_url, location, description, price) VALUES ('7 Wonders of the World', 'https://www.exoticca.com/us/blog/wp-content/uploads/2021/05/930X360_Image-of-the-blog_ING-930x360.jpg', 'World', 'Experience all 7 wonders of the world in this amazing vacation package. Includes all flights and hotels as you get a taste of the worlds greatest attractions. Book Now!', 10999);

INSERT INTO vacation (name, img_url, location, description, price) VALUES ('National Parks of America', 'https://cdn.britannica.com/58/94458-050-0C18D00E/Yosemite-National-Park-California.jpg', 'USA', 'Travel all throughout America to experience every national park. Avid nature lovers and tourists unite for this once in a lifetime experience. Book Now!', 14999);

INSERT INTO vacation (name, img_url, location, description, price) VALUES ('Some Other Great Place', 'https://travelpro.com/cdn/shop/articles/shutterstock_1181523733_1024x1024.webp?v=1697120789', 'Someplace, USA', 'I am starting to run out of ideas but just want to fill up my database. Book Now!', 99999);

INSERT INTO vacation (name, img_url, location, description, price) VALUES ('Washington D.C. Tour', 'https://www.thoughtco.com/thmb/_ZNhs9lhwfoos1WoYBygoL03g6c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-497322993-598b2ad403f4020010ae0a08.jpg', 'Washington DC, VA', 'Come see all about the history of the United States with this amazing tour of our nations capital. Book now!', 4999);

INSERT INTO vacation (name, img_url, location, description, price) VALUES ('Around the World in 80 Days', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2006_Ojiya_balloon_festival_011.jpg/1200px-2006_Ojiya_balloon_festival_011.jpg', 'World', 'Take on the challenge of using a hot air balloon to travel around the entire world in 80 days with various stops for food. Think it is possible? Book now!', 19999);