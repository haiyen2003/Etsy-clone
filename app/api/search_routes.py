from flask import Blueprint, jsonify, request
from app.models import Product, db
from app.api.auth_routes import validation_errors_to_error_messages


search_routes = Blueprint('search', __name__)

@search_routes.route("/")
def search_product():
    #not sure how to get the user's inpurt into the search input
    searchinput = None

    searchproducts = Product.query.filter(Product.name.ilike(f"%{searchinput}%")).all()
    return {'products': [product.to_dict() for product in searchproducts]}

@search_routes.route("/onsale")
def search_onsale_product():

    searchproducts = Product.query.filter(Product.category == "On Sale").all()
    return {'products': [product.to_dict() for product in searchproducts]}

@search_routes.route("/home&living")
def search_home_living_product():

    searchproducts = Product.query.filter(Product.category == "Home & Living").all()
    return {'products': [product.to_dict() for product in searchproducts]}


@search_routes.route("/art")
def search_art_product():

    searchproducts = Product.query.filter(Product.category == "Art & Collectibles").all()
    return {'products': [product.to_dict() for product in searchproducts]}

@search_routes.route("/jewelry")
def search_jewelry_product():

    searchproducts = Product.query.filter(Product.category == "Jewelry & Accessories").all()
    return {'products': [product.to_dict() for product in searchproducts]}

@search_routes.route("/clothes")
def search_clothes_product():

    searchproducts = Product.query.filter(Product.category == "Clothing & Shoes").all()
    return {'products': [product.to_dict() for product in searchproducts]}


@search_routes.route("/decor")
def search_decor_product():

    searchproducts = Product.query.filter(Product.category == "Home Decor").all()
    return {'products': [product.to_dict() for product in searchproducts]}

@search_routes.route("/gift")
def search_gift_product():

    searchproducts = Product.query.filter(Product.category == "Personalized Gifts").all()
    return {'products': [product.to_dict() for product in searchproducts]}
