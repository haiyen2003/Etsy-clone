from flask_wtf import FlaskForm
from wtforms import SelectField, StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError, URL
from app.models import Review


stars = (
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 4),
    (5, 5),
)


class ReviewForm(FlaskForm):
    review = SelectField('review', choices=stars, validators=[DataRequired()])
    stars = IntegerField('stars', validators=[DataRequired()])
    reviewImg = StringField('reviewimg', validators=[URL(require_tld=True, message="Please enter a valid URL")])
