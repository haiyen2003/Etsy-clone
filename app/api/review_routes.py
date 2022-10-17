from flask import Blueprint, request, session
from app.models import  db, Product, Review, User
from datetime import datetime, date
from flask_login import current_user, login_user, logout_user, login_required
from app.forms import ReviewForm
from app.api.auth_routes import validation_errors_to_error_messages

now = datetime.now()

review_routes = Blueprint('reviews', __name__)

#get reivews based on productId
@review_routes.route('/products/<int:id>')
def get_product_reviews(id):
  # print('this is', id)
  product_reviews = Review.query.filter(Review.productId == id).all()
  # product_reviews = Review.query.filter(Review.productId == productId).join(User).filter(Review.userId == User.id).all()
  # for preview in product_reviews:

  # product_reviews = db.session.query(User) \
  #                   .filter(Review.userId == User.id) \
  #                   .options(db.joinedload(Review.user)).all()
                    # .filter(Review.productId == id).all()
  # print("check product review", product_reviews)
  # return product_reviews
  return {'product_reviews': [review.to_dict() for review in product_reviews]}

#get reviews based on userId
@review_routes.route('/')
@login_required
def get_user_reviews():
  user_reviews = Review.query.filter(Review.userId == current_user.id).all()
  return {'user_reviews':[review.to_dict() for review in user_reviews]}

#delete a review
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

#create a review
@review_routes.route('/products/<int:id>', methods=['POST'])
@login_required
def create_review(id):
  form = ReviewForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    data = form.data
    newreview = Review(
       review = data['review'],
       stars = data['stars'],
       reviewImg = data['reviewImg'],
       productId = id,
       userId = current_user.id,
       createdAt = now,
       updatedAt = now
    )
    db.session.add(newreview)
    db.session.commit()
    return newreview.to_dict()
  else:
    return {'errors': validation_errors_to_error_messages(form.errors)},400

#update a review
@review_routes.route('/<int:reviewId>', methods=['PUT'])
@login_required
def update_product_review(reviewId):
    form = ReviewForm()
    form['csrf_token'].data=request.cookies['csrf_token']
    if form.validate_on_submit():
      updatedreview= Review.query.get(reviewId)
      if updatedreview:
         updatedreview.review = form.data['review']
         updatedreview.stars = form.data['stars']
         updatedreview.reviewImg = form.data['reviewImg']

         db.session.commit()
         return updatedreview.to_dict()
      else:
        return {'message': 'Review not found'}, 404
    else:
      return {'errors': validation_errors_to_error_messages(form.errors)}, 400
