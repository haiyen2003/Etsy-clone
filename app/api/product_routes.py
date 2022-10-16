from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Product, db
from app.forms import ProductForm
from app.api.auth_routes import validation_errors_to_error_messages
from datetime import datetime

now = datetime.now()

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
@product_routes.route('/new', methods=["POST"])
@login_required
def add_product():
    form = ProductForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_product = Product(
            name = form.data['name'],
            description = form.data['description'],
            price = form.data['price'],
            category = form.data['category'],
            highlight = form.data['highlight'],
            previewImage = form.data['previewImage'],
            userId = current_user.id,
            createdAt = now,
            updatedAt = now
        )

        db.session.add(new_product)
        db.session.commit()
        return new_product.to_dict()
    return {"errors" : validation_errors_to_error_messages(form.errors)}, 400

#update product
@product_routes.route('/<int:id>/edit', methods=["PUT"])
@login_required
def update_product():
    form = ProductForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    edit_product = Product.query.get(id)

    if edit_product is None:
        return {"errors" : "You don't have the right to edit the product"}, 403
    if edit_product.userId != current_user.id:
        return {"errors" : "Product couldn't be found"}, 404

    if form.validate_on_submit():

        edit_product.name = form.data['name'],
        edit_product.description = form.data['description'],
        edit_product.price = form.data['price'],
        edit_product.category = form.data['category'],
        edit_product.highlight = form.data['highlight'],
        edit_product.previewImage = form.data['previewImage'],
        edit_product.updatedAt = now

        db.session.add(edit_product)
        db.session.commit()
        return edit_product.to_dict()
    return {"errors" : validation_errors_to_error_messages(form.errors)}, 400
