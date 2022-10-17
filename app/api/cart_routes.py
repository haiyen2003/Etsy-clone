from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Product, db, Cart
from app.forms import ProductForm
from app.api.auth_routes import validation_errors_to_error_messages
from datetime import datetime

now = datetime.now()

cart_routes = Blueprint('carts', __name__)

#get current user products in cart
@cart_routes.route("/current")
@login_required
def current_cart():
    currentUserId = current_user.id
    cartItems = db.session.query(Cart) \
                            .filter(Cart.userId == currentUserId) \
                            .options(db.joinedload(Cart.product)) \
                            .all()
    if cartItems and len(cartItems) > 0:
        details = []
        for item in cartItems:
            productInfo = item.product.to_dict()
            itemDict = item.to_dict()
            print(itemDict)
            itemDict['product details'] = productInfo
            details.append(itemDict)
        # return {'cart': [items._str_() for items in cartItems]}
        return {'cart': details}
    else:
        return {'message': 'Your cart is empty'}


# #create a product
# @cart_routes.route('/new', methods=["POST"])
# @login_required
# def add_product():
#     form = ProductForm()
#     form['csrf_token'].data = request.cookies['csrf_token']
#     if form.validate_on_submit():
#         new_product = Product(
#             name = form.data['name'],
#             description = form.data['description'],
#             price = form.data['price'],
#             category = form.data['category'],
#             highlight = form.data['highlight'],
#             previewImage = form.data['previewImage'],
#             userId = current_user.id,
#             createdAt = now,
#             updatedAt = now
#         )

#         db.session.add(new_product)
#         db.session.commit()
#         return new_product.to_dict()
#     return {"errors" : validation_errors_to_error_messages(form.errors)}, 400

# #update product
# @cart_routes.route('/<int:id>/edit', methods=["PUT"])
# @login_required
# def update_product(id):
#     print(id)
#     form = ProductForm()
#     form['csrf_token'].data = request.cookies['csrf_token']
#     edit_product = Product.query.get(id)
#     print(edit_product)
#     if edit_product is None:
#         return {"errors" : "Product couldn't be found"}, 404
#     if edit_product.userId != current_user.id:
#         return {"errors" : "You don't have the right to edit the product"}, 403

#     if form.validate_on_submit():
#         edit_product = Product.query.get(id)
#         edit_product.name = form.data['name'],
#         edit_product.description = form.data['description'],
#         edit_product.price = form.data['price'],
#         edit_product.category = form.data['category'],
#         edit_product.highlight = form.data['highlight'],
#         edit_product.previewImage = form.data['previewImage'],
#         # edit_product.userId = current_user.id,
#         # edit_product.createdAt = now,
#         edit_product.updatedAt = now
#         # db.session.add(edit_product)
#         db.session.commit()
#         return edit_product.to_dict()
#     return {"errors" : validation_errors_to_error_messages(form.errors)}, 400

# #delete a product
# @cart_routes.route("/<int:id>/delete", methods=['DELETE'])
# @login_required
# def delete_product(id):

#     delete_product = Product.query.get(id)

#     if delete_product.userId != current_user.id:
#         return {"errors" : "You don't have the right to delete the product"}, 403

#     db.session.delete(delete_product)
#     db.session.commit()
#     return ("Successfully deleted!")
