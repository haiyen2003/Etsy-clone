from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Product
from app.forms import ProductForm

product_routes = Blueprint('products', __name__)

#get all product
@product_routes.route('/')

def products():
    products = Product.query.all()
    return {'products': [product.to_dict() for product in products]}

#get one product
@product_routes.route('/<int:id>')
def product(id):
    product = Product.query.get(id)
    if product is None:
        return {'message': "No such product"}
    return product.to_dict()

#create a product
@product_routes.route('/', methods=["POST"])
@login_required
def add_product():
    form = ProductForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_product = Product(
            name = form.data['name']
        )
