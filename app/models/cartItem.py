from .db import db


class CartItem(db.Model):
    __tablename__ = 'cartItems'

    id = db.Column(db.Integer, primary_key=True)
    productId = db.Column(db.Integer, db.ForeignKey('products.id'), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)

    product = db.relationship('Product', back_populates='cartItem')
    cart = db.relationship('Cart', back_populates='cart', cascade = 'all, delete')


    def to_dict(self):
        return {
         "userId": self.userId
        }
