from .db import db
from sqlalchemy.types  import DateTime, Date



class Product(db.Model):
    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(1000), nullable=False)
    description = db.Column(db.String(1000), nullable=False)
    price = db.Column(db.Float, nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    category = db.Column(db.String(1000), nullable=False)
    highlight = db.Column(db.String(1000), nullable=False)
    createdAt = db.Column(db.DateTime, nullable=False)
    updatedAt = db.Column(db.DateTime, nullable=False)
    previewImage= db.Column(db.String(1000), nullable=False)
    reviews = db.relationship('Review', back_populates='product', cascade = 'all, delete')
    cart = db.relationship('Cart', back_populates='products')
    user = db.relationship('User', back_populates='products')
    # images = db.relationship('Image', back_populates='product', cascade = 'all, delete')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'price':self.price,
            'userId':self.userId,
            'username': self.user.username if self.user else None,
            'firstname': self.user.firstName if self.user else None,
            'lastname': self.user.lastName if self.user else None,
            'category':self.category,
            'highlight':self.highlight,
            'createdAt':self.createdAt,
            'updatedAt':self.updatedAt,
            'previewImage':self.previewImage
        }
