from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.fields import (
    SelectField, SelectMultipleField, StringField, SubmitField, IntegerField, FloatField, DecimalField
)
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Product


def name_validation(form, field):
    #check name is longer than 5 and less than 100 characters
    name = field.data
    if len(name) < 5 or len(name) > 100:
        raise ValidationError("Name must be more than 5 characters and less than 100 characters")

def description_validation(form, field):
    #check description is longer than 20 characters and less than 500 characters
    des = field.data
    if len(des) < 20 or len(des) > 500:
        raise ValidationError("Description must be more than 20 characters and less than 500 characters")

def price_validation(form, field):
    price = field.data
    if price <= 0:
        raise ValidationError("Price must be more than $0.0")

def highlights_validation(form, field):
    hl = field.data
    if len(hl) < 10 or len(hl) > 100:
        raise ValidationError("highlights must be more than 10 characters and less than 100 characters")

def imageURL_validation(form, field):
    img = field.data
    if not img[-3:] == 'jpg' and (not img[-3:] == 'png') and img[-4:] != 'jpeg' and img[-4:] != 'webp' and img[-3:] != 'gif' and img[-3:] != 'svg':

        raise ValidationError("Input must be a valid Image Url")


class ProductForm(FlaskForm):
    name = StringField("Product Name", validators= [DataRequired(), name_validation])
    description = StringField("Product Description", validators= [DataRequired(), description_validation])
    price = DecimalField("Price", validators=[DataRequired(), price_validation], place=2, rounding = ROUND_UP)
    category = StringField("Category", validators=[DataRequired()])
    highlight = StringField("Highlights", validators=[DataRequired(), highlights_validation])
    previewImage = StringField("Image URL", validators= [DataRequired(), imageURL_validation])
