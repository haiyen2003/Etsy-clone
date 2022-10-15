from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError, URL
from app.models import Review





class ReviewForm(FlaskForm):
    review = StringField('review', validators=[DataRequired()])
    stars = IntegerField('stars', validators=[DataRequired()])
    reviewImg = StringField('reviewimg', validators=[URL(require_tld=True, message="Please enter a valid URL")])
