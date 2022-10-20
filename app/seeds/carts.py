from app.models import db, User, CartItem
from datetime import datetime, date

now = date.today()

def seed_cartItems():

    cartItem1 = CartItem(userId = 4, productId=1, quantity=2, createAt=now, updateAt=now)
    cartItem2 = CartItem(userId=4, productId=2, quantity = 3, createAt = now, updateAt = now)
    cartItem3 = CartItem(userId=2, productId=3, quantity = 3, createAt = now, updateAt = now)
    cartItem4 = CartItem(userId=2, productId=4, quantity = 3, createAt = now, updateAt = now)
    cartItem5 = CartItem(userId=3, productId=5, quantity = 3, createAt = now, updateAt = now)
    cartItem6 = CartItem(userId=3, productId=6, quantity = 3, createAt = now, updateAt = now)

    db.session.add(cartItem1)
    db.session.add(cartItem2)
    db.session.add(cartItem3)
    db.session.add(cartItem4)
    db.session.add(cartItem5)
    db.session.add(cartItem6)
    db.session.commit()

def undo_cartItems():
    db.session.execute('TRUNCATE carts RESTART IDENTITY CASCADE;')
    # db.session.execute('DELETE FROM users WHERE id = 50;')
    db.session.commit()
