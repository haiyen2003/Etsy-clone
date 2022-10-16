from app.models import db, CartItem, User
from datetime import datetime, date

now = date.today()


def seed_carts():

    user = User(
        id = 50, username='cart-demo', email='cart-demo@aa.io', firstName="firstName01", lastName='lastName01', password='password'
    )

    cart = Cart(
        id = 1, userId = 50,
    )

    item01 = CartItem(
       productId = 1,
       quantity = 2
    )

    item02 = CartItem(
       productId = 3,
       quantity = 1
    )

    db.session.add(user)
    db.session.add(cart)
    db.session.add(item01)
    db.session.add(item02)
    db.session.commit()

def undo_carts():
    db.session.execute('TRUNCATE carts RESTART IDENTITY CASCADE;')
    db.session.execute('DELETE FROM users WHERE id = 50;')
    db.session.commit()
