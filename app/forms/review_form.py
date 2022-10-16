from flask_wtf import FlaskForm
from wtforms import SelectField, StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError, URL
from app.models import Review


def review_validation(form, field):
    #check name is longer than 5 and less than 100 characters
    review = field.data
    if len(review) < 20 or len(review) > 500:
        raise ValidationError("Review must be more than 20 characters and less than 500 characters")

def imageURL_validation(form, field):
    img = field.data
    if not img[-3:] == 'jpg' or not img[-3:] == 'jpeg' or not img[-3:] == 'png' or not img[-3:] == 'webp' or not img[-3:] == 'gif' or not img[-3:] == 'svg':
        raise ValidationError("Input must be a valid Image Url")



class ReviewForm(FlaskForm):
    review = StringField('review', validators=[DataRequired(), review_validation ])
    stars = IntegerField('stars', validators=[DataRequired()])
    reviewImg = StringField('reviewimg', validators=[URL(require_tld=True, message="Please enter a valid URL"), imageURL_validation])
    submit = SubmitField("Submit")
