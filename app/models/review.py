from .db import db
from sqlalchemy.types  import DateTime, Date



class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    review = db.Column(db.String(1000), nullable=False)
    stars = db.Column(db.Integer, nullable=False)
    productId = db.Column(db.Integer, db.ForeignKey('products.id'), nullable=False)
    reviewImg = db.Column(db.String(1000))
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    createdAt = db.Column(db.DateTime, nullable=False)
    updatedAt = db.Column(db.DateTime, nullable=False)

    user = db.relationship('User', back_populates='reviews')
    product = db.relationship('Product', back_populates='reviews')


    def to_dict(self):
        return {
            'id': self.id,
            'review': self.review,
            'stars': self.stars,
            'productId':self.productId,
            'reviewImg':self.reviewImg,
            'productImg': self.product.previewImage if self.product else None,
            'productname': self.product.name if self.product else None,
            'productcategory': self.product.category if self.product else None,
            'userId':self.userId,
            'createdAt':self.createdAt,
            'updatedAt':self.updatedAt,
            'firstName': self.user.firstName if self.user else None,
            'lastName': self.user.lastName if self.user else None
        }
