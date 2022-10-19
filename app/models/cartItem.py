from .db import db


class CartItem(db.Model):
    __tablename__ = 'cartItems'

    id = db.Column(db.Integer, primary_key=True)
    userId= db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    productId = db.Column(db.Integer, db.ForeignKey('products.id'), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    createAt = db.Column(db.DateTime, nullable=False)
    updateAt = db.Column(db.DateTime, nullable=False)

    user = db.relationship('User', back_populates='cartItems', foreign_keys=[userId])
    product= db.relationship('Product', back_populates='cartItems', foreign_keys=[productId])

    def to_dict(self):
        return {
            "userId": self.userId,
            "id": self.id,
            "productId": self.productId,
            "quantity": self.quantity,
            "created at": self.createAt,
            'Update at': self.updateAt
        }
