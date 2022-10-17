from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired, ValidationError
from app.models import Cart

def quantiylen(form, field):
    quantity = field.data
    if quantity > 100 or quantity < 1:
        raise ValidationError('No more than 100 products or less than one')

class CartForm(FlaskForm):
    quantity = IntegerField('quantity', validators=[DataRequired(), quantiylen])