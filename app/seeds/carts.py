from app.models import db, User, Cart
from datetime import datetime, date

now = date.today()


def seed_carts():

   cart1 = Cart(userId = 1, productId=1, quantity=2, createAt=now, updateAt=now)
   cart2 = Cart(userId=1, productId=2, quantity = 3, createAt = now, updateAt = now)
   cart3 = Cart(userId=2, productId=3, quantity = 3, createAt = now, updateAt = now)
   cart4 = Cart(userId=2, productId=4, quantity = 3, createAt = now, updateAt = now)
   cart5 = Cart(userId=3, productId=5, quantity = 3, createAt = now, updateAt = now)
   cart6 = Cart(userId=3, productId=6, quantity = 3, createAt = now, updateAt = now)

    db.session.add(cart1)
    db.session.add(cart2)
    db.session.add(cart3)
    db.session.add(cart4)
    db.session.add(cart5)
    db.session.add(cart6)
    db.session.commit()

def undo_carts():
    db.session.execute('TRUNCATE carts RESTART IDENTITY CASCADE;')
    # db.session.execute('DELETE FROM users WHERE id = 50;')
    db.session.commit()
