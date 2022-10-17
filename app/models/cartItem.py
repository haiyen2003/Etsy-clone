from .db import db


class CartItem(db.Model):
    __tablename__ = 'cartItems'

    id = db.Column(db.Integer, primary_key=True)
    productId = db.Column(db.Integer, nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    cartId = db.Column(db.Integer, db.ForeignKey('carts.id'), nullable=False)

    # product = db.relationship('Product', back_populates='cartItem')
    cart = db.relationship('Cart', back_populates='cartItems', cascade = 'all, delete')

    def to_dict(self):
        return {
         "Id": self.id,
         "productId": self.productId,
         "quantity": self.quantity
        }
