from app.models import db


def seed_products():
    product31 = Product(
        id= 1,
        name= "DROPS Air A medium thick blow yarn, baby alpaca and merino wool, Beautiful knitting yarn",
        description= "An exciting "blow yarn" made from soft baby alpaca and cozy and warm merino wool. As implied in blow yarn, this quality has an unique construction where instead of spinning, the fibres of baby alpaca and merino wool are air blown into a tube together.",
        price= 100,
        category= "Clothing & Shoes",
        highlight = "Handmade",
        createdAt= "2022-10-14 20:39:36",
        updatedAt= "2022-10-14 20:39:36",
        previewImage= "https://i.etsystatic.com/21915528/r/il/b90fa5/3300321021/il_1588xN.3300321021_elpl.jpg"
)
