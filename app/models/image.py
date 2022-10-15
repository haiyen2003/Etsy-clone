
from .db import db




class Image(db.Model):
    __tablename__ = 'images'

    id = db.Column(db.Integer, primary_key=True)
    url= db.Column(db.String(250), nullable=False)
    productId = db.Column(db.Integer, db.ForeignKey('products.id'), nullable=False)

    product = db.relationship('Product', back_populates='images')

    def to_dict(self):
        return {
            'id': self.id,
            'url': self.url,
            'productId':self.productId,

        }
