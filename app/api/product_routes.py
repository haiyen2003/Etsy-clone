from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Product, db, CartItem
from app.forms import ProductForm, CartForm
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
    # product = Product.query.options(db.joinedload(Product.reviews)).get(id)
    if product is None:
        return {'message': "No such product"}
    return product.to_dict()

#get current user product
@product_routes.route("/current")
@login_required
def currentuser_product():
    currentuserid = current_user.id
    products = Product.query.filter(Product.userId == currentuserid)
    return {'products': [product.to_dict() for product in products]}


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
def update_product(id):
    # print(id)
    form = ProductForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    edit_product = Product.query.get(id)
    # print(edit_product)
    if edit_product is None:
        return {"errors" : "Product couldn't be found"}, 404
    if edit_product.userId != current_user.id:
        return {"errors" : "You don't have the right to edit the product"}, 403

    if form.validate_on_submit():
        edit_product = Product.query.get(id)
        edit_product.name = form.data['name']
        edit_product.description = form.data['description']
        edit_product.price = form.data['price']
        edit_product.category = form.data['category']
        edit_product.highlight = form.data['highlight']
        edit_product.previewImage = form.data['previewImage']
        # edit_product.userId = current_user.id
        # edit_product.createdAt = now,
        edit_product.updatedAt = now
        # db.session.add(edit_product)
        db.session.commit()
        return edit_product.to_dict()
    return {"errors" : validation_errors_to_error_messages(form.errors)}, 400

#delete a product
@product_routes.route("/<int:id>", methods=['DELETE'])
@login_required
def delete_product(id):

    delete_product = Product.query.get(id)

    if delete_product.userId != current_user.id:
        return {"errors" : "You don't have the right to delete the product"}, 403

    db.session.delete(delete_product)
    db.session.commit()
    return ("Successfully deleted!")


# add a product with productId to cart

@product_routes.route("/<int:id>/cart", methods=['POST'])
@login_required
def add_to_cart(id):
    currentUserId = current_user.id
    item = Product.query.get(id)
    if item is None:
        return {'message': 'item not found'}, 404


    cartItem = db.session.query(CartItem) \
                            .filter(CartItem.userId == currentUserId) \
                            .filter(CartItem.productId == id) \
                            .first()

    form = CartForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        if cartItem is None:
            item = CartItem(
                userId = currentUserId,
                productId = id,
                quantity = form.data["quantity"],
                createAt = now,
                updateAt = now
            )
            db.session.add(item)
            db.session.commit()
            return item.to_dict()
        else:
            cartItem.quantity = form.data["quantity"]
            cartItem.updateAt = now
            db.session.commit()
            # response = cartItem.to_dict()
            return cartItem.to_dict()
