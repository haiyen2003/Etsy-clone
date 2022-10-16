from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.fields import (
    SelectField, SelectMultipleField, StringField, SubmitField, IntegerField, FloatField
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


class ProductForm(FlaskForm):
    name = StringField("Product Name", [DataRequired()])
    description = StringField("Product Description", [DataRequired()])
    price = FloatField("Price", [DataRequired()])
    category = SelectField("Category", coerce = int)
    highlight = StringField("Highlight")
    previewImage = StringField("PreviewImage")
