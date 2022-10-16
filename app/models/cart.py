from .db import db


class Cart(db.Model):
    __tablename__ = 'carts'

    id = db.Column(db.Integer, primary_key=True)
    userId= db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    # cartItemId = db.Column(db.Integer, db.ForeignKey('cartItems.id'))

    user = db.relationship('User', back_populates='cart')
    cartItems = db.relationship('CartItem', back_populates='cart', cascade = 'all, delete')

    def to_dict(self):
        return {
         "userId": self.userId
        }
