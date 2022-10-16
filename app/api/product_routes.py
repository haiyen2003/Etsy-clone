from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Product, db
from app.forms import ProductForm
from app.api.auth_routes import validation_errors_to_error_messages


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
            description = form.data['description']
            price = form.data['price']
            category = form.data['category']
            highlight = form.data['highlight']
            previewImage = form.data['previewImage']
        )

        db.session.add(new_product)
        db.session.commit()
        return new_product.to_dict()
    return {"errors" : validation_errors_to_error_messages(form.errors)}, 400
