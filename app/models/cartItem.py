from .db import db


class CartItem(db.Model):
    __tablename__ = 'cartItems'

    id = db.Column(db.Integer, primary_key=True)
    # userId= db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    productId = db.Column(db.Integer, db.ForeignKey('products.id'), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    # user = db.relationship('User', back_populates='cart')
    products = db.relationship('Product', back_populates='cartItems')
    cart = db.relationship('Cart', back_populates='cart', cascade = 'all, delete')


    def to_dict(self):
        return {
         "userId": self.userId
        }
