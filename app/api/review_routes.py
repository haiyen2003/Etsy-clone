from flask import Blueprint
from app.models import  db, Product, Review, User
from datetime import datetime, date
from flask_login import current_user, login_user, logout_user, login_required



review_routes = Blueprint('reviews', __name__)

#get reivews based on productId
@review_routes.route('/products/<int:id>')
def get_product_reviews(id):
  product_reviews = Review.query.filter(Review.productId == id).all()
  return {'product_reviews': [review.to_dict() for review in product_reviews]}

#get reviews based on userId
@review_routes.route('')
@login_required
def get_user_reviews():
  user_reviews = Review.query.filter(Review.userId == current_user.id).all()
  return {'user_reviews':[review.to_dict() for review in user_reviews]}

@review_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_review(id):
   review = Review.query.get(id)
   if review:
     db.session.delete(review)
     db.session.commit()
     return {'message': 'Successfully Deleted'}
   else:
     return {'message': "Review cant not be found"}
