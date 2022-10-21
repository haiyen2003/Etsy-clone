from app.models import db, Review
from datetime import datetime, date

now = date.today()

def seed_reviews():
    review01 = Review(
        productId = 1,
        userId = 1,
        stars = 5,
        review = 'Super cute and sizing is just right. I ordered a size up for a loose fit that I can wear with leggings. Obsessed with this design!!',
        createdAt= now,
        updatedAt= now,
    )
    review02 = Review(
        productId = 1,
        userId = 2,
        stars = 5,
        review = 'I ordered the wrong item so I contacted the seller and they were more than happy to accommodate. So I ended up getting the dragon ball with blue light and my 10 year old daughter is thrilled with it.',
        updatedAt= now,
        createdAt= now,
    )
    review03 = Review(
        productId = 1,
        userId = 4,
        stars = 5,
        review = "It feels like I'm in the anime when I hold the pokeball. The color and presentation are outstanding.",
        createdAt= now,
        updatedAt= now,
    )
    review04 = Review(
        productId = 1,
        userId = 5,
        stars = 5,
        review = "I love the fact that it comes in various sizes for us to download! Super cute as well!",
        createdAt= now,
        updatedAt= now,
    )
    review05 = Review(
        productId = 2,
        userId = 2,
        stars = 5,
        review = "So simple but so beautiful! It just looks good no matter where I place it :)",
        createdAt= now,
        updatedAt= now,
    )
    review06 = Review(
        productId = 2,
        userId = 3,
        stars = 5,
        review = "Printed beautifully and very crisp",
        createdAt= now,
        updatedAt= now,
    )
    review07 = Review(
        productId = 2,
        userId = 4,
        stars = 5,
        review = "Great quality print. Highly recommend",
        createdAt= now,
        updatedAt= now,
    )
    review08 = Review(
        productId = 3,
        userId = 1,
        stars = 5,
        review = "I'm obsessed with how my painting turned out!!! Couldn't even wait for my fiance's birthday to give it to him!",
        createdAt= now,
        updatedAt= now,
    )
    review09 = Review(
        productId = 3,
        userId = 3,
        stars = 5,
        review = "I am in love with this!! I had it printed and laminated. And just hung it in my gorls bedroom! It us exactly what I'd envisioned!",
        createdAt= now,
        updatedAt= now,
    )
    review10 = Review(
        productId = 3,
        userId = 4,
        stars = 5,
        review = "The cutest prints for my son’s beach themed room! I love that there are different sizes of the prints included in the digital file so you can pick and choose print sizes. Love them, they’re so cute! Great quality too!",
        createdAt= now,
        updatedAt= now,
    )
    review11 = Review(
        productId = 4,
        userId = 1,
        stars = 4,
        review = 'Super cute and sizing is just right. ',
        createdAt= now,
        updatedAt= now,
    )
    review12 = Review(
        productId = 4,
        userId = 2,
        stars = 4,
        review = 'The box this comes in is 4 yard by 5 kilometer and weights 11 pound!',
        createdAt= now,
        updatedAt= now,
    )
    review13 = Review(
        productId = 4,
        userId = 4,
        stars = 3,
        review = 'My neighbor Honora has one of these. She works as a reporter and she says it looks enormous.',
        createdAt= now,
        updatedAt= now,
    )
    review14 = Review(
        productId = 5,
        userId = 1,
        stars = 5,
        review = 'My co-worker Ali has one of these. He says it looks towering.',
        createdAt= now,
        updatedAt= now,
    )
    review15 = Review(
        productId = 5,
        userId = 2,
        stars = 4,
        review = 'My co-worker Kazuo has one of these. He says it looks transparent.',
        createdAt= now,
        updatedAt= now,
    )
    review16 = Review(
        productId = 5,
        userId = 3,
        stars = 5,
        review = 'My co-worker Merwin has one of these. He says it looks bubbly.',
        createdAt= now,
        updatedAt= now,
    )
    review17 = Review(
        productId = 6,
        userId = 1,
        stars = 4,
        review = 'My neighbor Lonnie has one of these. She works as a hobbit and she says it looks microscopic',
        createdAt= now,
        updatedAt= now,
    )
    review18 = Review(
        productId = 6,
        userId = 2,
        stars = 5,
        review = 'My neighbor Alida has one of these. She works as a gambler and she says it looks spotless.',
        createdAt= now,
        updatedAt= now,
    )
    review19 = Review(
        productId = 6,
        userId = 3,
        stars = 4,
        review = 'Lovely product. Will buy again in the future. Thank you!',
        createdAt= now,
        updatedAt= now
    )
    review20 = Review(
        productId = 6,
        userId = 4,
        stars = 4,
        review = 'Nice usage. Will buy again the next time I have more allowance.',
        createdAt= now,
        updatedAt= now
    )
    review21 = Review(
        productId = 7,
        userId = 1,
        stars = 5,
        review = "Beautiful yarn. It's sooo soft. I received all the colors I asked for and a sweet little gift as well.",
        createdAt= now,
        updatedAt= now
    )
    review22 = Review(
        productId = 7,
        userId = 2,
        stars = 5,
        review = 'Ordering this yarn was a breeze.',
        createdAt= now,
        updatedAt= now,
    )
    review23 = Review(
        productId = 7,
        userId = 3,
        stars = 5,
        review = 'I am very happy with this purchase. The yarn is exactly as described and the color is identical to the one shown online.',
        createdAt= now,
        updatedAt= now,
    )
    review24 = Review(
        productId = 7,
        userId = 4,
        stars = 5,
        review = 'Ordering this yarn was a breeze.',
        createdAt= now,
        updatedAt= now,
    )
    review25 = Review(
        productId = 8,
        userId = 1,
        stars = 5,
        review = 'Softest and most beautiful yarn ever! Not only super light and cloud soft.',
        createdAt= now,
        updatedAt= now,
    )
    review26 = Review(
        productId = 8,
        userId = 2,
        stars = 5,
        review = 'This watercolor is stunning!',
        createdAt= now,
        updatedAt= now,
    )
    review27 = Review(
        productId = 8,
        userId = 3,
        stars = 5,
        review = "I just adore this painting, I couldn't be any happier!",
        createdAt= now,
        updatedAt= now,
    )
    review28 = Review(
        productId = 9,
        userId = 2,
        stars = 5,
        review = 'I love this quilt art watercolor print by William Gardner of Gardnerwatercolors!',
        createdAt= now,
        updatedAt= now,
    )
    review29 = Review(
        productId = 9,
        userId = 3,
        stars = 5,
        review = 'It’s beautiful and exceeded my expectations! The colors are fabulous and I can’t wait to frame it and hang it on my wall. Thank you William!!!',
        createdAt= now,
        updatedAt= now,
    )
    review30 = Review(
        productId = 10,
        userId = 1,
        stars = 5,
        review = 'The color was very vibrant and the print was high quality.',
        createdAt= now,
        updatedAt= now,
    )
    db.session.add(review01)
    db.session.add(review02)
    db.session.add(review03)
    db.session.add(review04)
    db.session.add(review05)
    db.session.add(review06)
    db.session.add(review07)
    db.session.add(review08)
    db.session.add(review09)
    db.session.add(review10)
    db.session.add(review11)
    db.session.add(review12)
    db.session.add(review13)
    db.session.add(review14)
    db.session.add(review15)
    db.session.add(review16)
    db.session.add(review17)
    db.session.add(review18)
    db.session.add(review19)
    db.session.add(review20)
    db.session.add(review21)
    db.session.add(review22)
    db.session.add(review23)
    db.session.add(review24)
    db.session.add(review25)
    db.session.add(review26)
    db.session.add(review27)
    db.session.add(review28)
    db.session.add(review29)
    db.session.add(review30)


    db.session.commit()


def undo_reviews():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
