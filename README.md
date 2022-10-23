# Artsy

Artsy is a web-application clone inspired by [Etsy](https://www.etsy.com/), that allows users to purchase handmade products. It is also a place to sell crafty products to users who are interested.

* [Artsy](https://artsy-1014.herokuapp.com/)

### Please see below links to Project Wiki:
##### [API Documentation](https://github.com/haiyen2003/Etsy-clone/wiki/API-Documentation)
##### [Features](https://github.com/haiyen2003/Etsy-clone/wiki/Feature-List)
##### [Database Schema](https://github.com/haiyen2003/Etsy-clone/wiki/Database-Schema)
##### [User Story](https://github.com/haiyen2003/Etsy-clone/wiki/User-Story)
##### [Redux State](https://github.com/haiyen2003/Etsy-clone/wiki/Redux-State)



### This project is built with:

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
![SQLAlchemy](https://img.shields.io/badge/-SQLAlchemy-orange?style=for-the-badge)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

# Run Locally
  1) Clone this repository
  2) Frontend instruction: cd into react-app directory
     and run command : npm install
  3) Make an .env file under the root directory and copy the content of
     .env.example to the .env file.

  4) Backend instruction: open another terminal at the same time and run the
     following command in order :
     pipenv install -r requirements.txt
     In the following order:
     pipenv shell ; flask db upgrade ; flask seed all; flask run.
  5) With the second terminal, run npm start in the react-app directory.

# Features Direction
  HomePage
  <img src="./react-app/public/FeatureImages/splash_page.png" />



  Search Bar
  <img src="./react-app/public/FeatureImages/search_bar.png" />



  Category
  <img src="./react-app/public/FeatureImages/category.png" />



  ProductDetail Page
  <img src="./react-app/public/FeatureImages/product_detail_page.png" />



  My Products Listing
  <img src="./react-app/public/FeatureImages/get_allproducts_by_a_user.png" />



  Create a listing
  <img src="./react-app/public/FeatureImages/create_a_listing.png" />



  My Reviews
 <img src="./react-app/public/FeatureImages/my_reviews.png" />



  Create a review
  <img src="./react-app/public/FeatureImages/create_a_review.png" />



  My Cart
  <img src="./react-app/public/FeatureImages/my_cart.png" />




# Future Focus
  1. For search bar, We would like to add the cancel button to clear out the search history at once and set the magnifying glass as a button to fetch all the results at an another page.

  2. Shipping and Delivery features.

  3. For cart feature, we will create a 'You might also like' session where we suggest similar items - using query by category

  4. We can also add favorites feature to all the products.
