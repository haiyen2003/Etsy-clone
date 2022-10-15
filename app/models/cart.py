from .db import db




class Cart(db.Model):
    __tablename__ = 'carts'

    id = db.Column(db.Integer, primary_key=True)
    userId= db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False, )
    productId = db.Column(db.Integer, db.ForeignKey('products.id'), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)

    user = db.relationship('User', back_populates='cart')
    products = db.relationship('Product', back_populates='cart', cascade = 'all, delete')


    def to_dict(self):
        return {
            'id': self.id,
            'review': self.review,
            'stars': self.stars,
            'productId':self.productId,
            'reviewImg':self.reviewImg,
            'userId':self.userId,
            'createdAt':self.createdAt,
            'updatedAt':self.updatedAt

        }
