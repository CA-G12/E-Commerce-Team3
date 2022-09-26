# Ecommerce-React

## Live Server [HERE]()

---

## Description:

---

## Databae Schema

![Databae Schema](https://i.imgur.com/DFhgiQI.png)

---

## User Stories:

- You can browse the products that we have.
- You can search for products by category, price and title
- You can buy products
- You edit your cart by updating product quantity.
- You can remove products from your cart
- You can signup new user.
- You login to the website.
- You need to login to view cart page.

---

## How to install the project on the local machine

- You can click the _code_ drop-down menu as illustrated in the picture above and copy the link to clone the repo.
- Now go to your terminal and type: `git clone <the link here>` and then the repo will be cloned to your local machine.
- By now you have to open your IDE -I recommend VSCode- and open the project.
- Now you need to run the command `npm install` to install all the dependencies.
- After that you should setting up the database follow the steps :

  1.  Connect to postgres, by typing `psql` or `pgcli` in the terminal.
  2.  use these commands to create your database
      ```
      CREATE DATABASE db_name;
      CREATE USER user_name WITH SUPERUSER PASSWORD 'password';
      ALTER DATABASE db_name OWNER TO user_name;
      ```
  3.  Add a `.env` you can see `example.env` to get idea of what you need to write.
  4.  Copy build.sql path `.../server/database/config/build.sql` and run this command in terminal `\i [build.sql path]`.

- to open a live page from your local machine project, you can run the `npm run dev` command which will open a live server to work with.
- Happy Coding!

---

## Technologies that I used

- HTML5.
- CSS3.
- JavaScript.
- Nodejs.
- Express.
- PLpgSQL.
- React

## This app is presented to you by:

- [Yazeed El-Haj Salem](https://github.com/ysalem-dev-89)
- [Shatha K. Eqdaih](https://github.com/shathakh)
- [Said MADI](https://github.com/Saeed99Madi)
- [Nada Suhail Ayesh](https://github.com/nadasuhailAyesh12)
