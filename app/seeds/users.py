from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password')
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password')
    jimgreen = User(
        username='jimgreen', email='jimgreen@aa.io', password='password')
    meimeihan = User(
        username='meimeihan', email='meimeihan@aa.io', password='password')
    doodle = User(
        username='doodle', email='doodle@aa.io', password='password')
    goofy = User(
        username='goofy', email='goofy@aa.io', password='password')
    charlie = User(
        username='charlie', email='charlie@aa.io', password='password')
    william = User(
        username='william', email='william@aa.io', password='password')
    glenny = User(
        username='glenny', email='glenny@aa.io', password='password')



    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(jimgreen)
    db.session.add(meimeihan)
    db.session.add(doodle)
    db.session.add(goofy)
    db.session.add(charlie)
    db.session.add(william)
    db.session.add(glenny)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
