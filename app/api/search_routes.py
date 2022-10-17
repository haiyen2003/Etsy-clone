from flask import Blueprint, jsonify, request
from app.models import Product, db
from app.api.auth_routes import validation_errors_to_error_messages


search_routes = Blueprint('search', __name__)

@search_routes.route("/")
def search_product():
    #not sure how to get the user's inpurt into the search input
    searchinput = None

    searchproducts = Product.query.filter(Product.name.like(f"%{searchinput}%")).all()
    return {'products': [product.to_dict() for product in searchproducts]}
