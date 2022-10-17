from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Product, db, CartItem
from app.forms import CartForm
from app.api.auth_routes import validation_errors_to_error_messages
from datetime import datetime

now = datetime.now()

cart_routes = Blueprint('carts', __name__)

#get current user products in cart
@cart_routes.route("/current")
@login_required
def current_cart():
    currentUserId = current_user.id
    cartItems = db.session.query(CartItem) \
                            .filter(CartItem.userId == currentUserId) \
                            .options(db.joinedload(CartItem.product)) \
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

 #update cart
@cart_routes.route('/<int:id>', methods=["PUT"])
@login_required
def update_cart(id):
    form = CartForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    item = CartItem.query.get(id)
    if item is None:
        return {'message': ['item not found in cart']}, 404

    if not item.userId == current_user.id:
        return {'message': 'Unauthorized'}, 403

    if form.validate_on_submit():
        item.updateAt = now
        item.quantity = form.data['quantity']
        db.session.commit()
        return item.to_dict()
    else:
        return {'error': validation_errors_to_error_messages(form.errors) }, 400

#delete each item in cart
@cart_routes.route('/<int:id>', methods=["DELETE"])
@login_required

def delete_cart_item(id):
    currentUserId = current_user.id
    item = CartItem.query.get(id)
    if item is None:
        return {'message': 'Can not find this item in cart'}, 404

    if not item.userId == current_user.id:
        return {'message': 'Unauthorized'}, 403

    db.session.delete(item)
    db.session.commit()
    return {'message': 'Item has been successfully removed from cart'}, 200

#delete entire cart
@cart_routes.route('/current', methods=['DELETE'])
@login_required
def delete_cart():
    currentUserId = current_user.id
    cartItems = db.session.query(CartItem) \
                            .filter(CartItem.userId == currentUserId) \
                            .options(db.joinedload(CartItem.product)) \
                            .all()
    if len(cartItems) == 0 or not cartItems:
        return {'message': 'Your cart is empty'}, 404

    if not item.userId == current_user.id:
        return {'message': 'Unauthorized'}, 403

    for item in cartItems:
        db.session.delete(item)
    db.session.commit()
    return{'message': 'Cart is empty'}, 200
