from flask_wtf import FlaskForm
from wtforms import SelectField, StringField, IntegerField, TextAreaField
from wtforms.validators import DataRequired, ValidationError, URL, NumberRange, Optional
from app.models import Review


def review_validation(form, field):
    #check name is longer than 5 and less than 100 characters
    review = field.data
    if len(review) < 20 or len(review) > 500:
        raise ValidationError("Review must be more than 20 characters and less than 500 characters")

def imageURL_validation(form, field):
    img = field.data
    if not img[-3:] == 'jpg' and (not img[-3:] == 'png') and img[-4:] != 'jpeg' and img[-4:] != 'webp' and img[-3:] != 'gif' and img[-3:] != 'svg':
        raise ValidationError("Input must be a valid Image Url")



class ReviewForm(FlaskForm):
    review = TextAreaField('review', validators=[DataRequired(), review_validation ])
    stars = IntegerField('stars', validators=[DataRequired(), NumberRange(min=1, max=5, message="Stars must be between 1 to 5")])
    reviewImg = StringField('reviewimg', validators=[Optional(), URL(require_tld=True, message="Please enter a valid URL"), imageURL_validation])
