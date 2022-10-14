from app.models import db


def seed_products():
    product31 = Product(
        name= "DROPS Air A medium thick blow yarn, baby alpaca and merino wool, Beautiful knitting yarn",
        description= "An exciting "blow yarn" made from soft baby alpaca and cozy and warm merino wool. As implied in blow yarn, this quality has an unique construction where instead of spinning, the fibres of baby alpaca and merino wool are air blown into a tube together.",
        price= 100,
        userId = 1,
        category= "Clothing & Shoes",
        highlight = "Handmade",
        createdAt= "2022-10-14 20:39:36",
        updatedAt= "2022-10-14 20:39:36",
        previewImage= "https://i.etsystatic.com/21915528/r/il/b90fa5/3300321021/il_1588xN.3300321021_elpl.jpg"
)
    product32 = Product(
        name= "Drops air, aran weight knitting yarn, alpaca yarn and merino wool, blow yarn, worsted yarn, drops yarn, knitting yarn, medium thick yarn",
        description= "An exciting "blow yarn" made from soft baby alpaca and cozy and warm merino wool. As implied in blow yarn, this quality has an unique construction where instead of spinning.",
        price= 150,
        category= "Clothing & Shoes",
        highlight = "Materials: Primary fiber: Alpaca; Secondary fiber: Polyamide",
        createdAt= "2022-10-14 20:39:36",
        updatedAt= "2022-10-14 20:39:36",
        previewImage= "https://i.etsystatic.com/10304510/r/il/f7568b/2230955130/il_1588xN.2230955130_6yrs.jpg"
)
    product33 = Product(
        ownerId= 3,
        name= "Alpaca yarn, Drops Alpaca yarn,",
        about= "Alpaca yarn, Drops Alpaca yarn, Organic wool, soft alpaca yarn, knitting yarn, Natural fiber",
        description= "Alpaca is a lovely yarn spun from 3 strands of 100% superfine alpaca, with an extra twist to provide a durable surface. ",
        price= 200,
        category= "Clothing & Shoes",
        highlight = "Handmade",
        createdAt= "2022-10-14 20:39:36",
        updatedAt= "2022-10-14 20:39:36",
        previewImage= "https://i.etsystatic.com/32226150/r/il/3018e8/3921909534/il_1588xN.3921909534_k49c.jpg"
)
