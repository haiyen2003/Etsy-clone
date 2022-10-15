from flask import Blueprint, jsonify, session, request, render_template, url_for
from app.models import Product

testRoute = Blueprint("testRoute", __name__)

@testRoute.route("/products")
def get_product():
    product1 = Product.query.first()
    return render_template("test.html", products = product1.to_dict())
