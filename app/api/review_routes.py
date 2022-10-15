from flask import Blueprint
from app.models import  db, Product, Review, User
from datetime import datetime, date
from flask_login import current_user, login_user, logout_user, login_required



review_routes = Blueprint('reviews', __name__)


@review_routes.route('/products/<int:id>')
def get_product_reviews(id):
  product_reviews = Review.query.filter(Review.productId == id).all()
  return {'product_reviews': [review.to_dict() for review in product_reviews]}
