from app.models import db, Product
from datetime import datetime, date

now = date.today()


def seed_products():
    product01 = Product(
        name= "Black Large Wall Clock, Real Mirror Clock ,Black colored numerals on a Silver colored mirror",
        description= "Our products are produced from real mirror.You should not choose models made with plexi mirror and mirror effect.Pay attention to this detail before ordering.",
        price= 120.00,
        userId =1,
        category= "Home & Living",
        highlight = "Handmade",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://i.etsystatic.com/25075715/r/il/bac101/3141997968/il_794xN.3141997968_2chr.jpg"
    )
    product02 = Product(
        name= "3D Wooden Fox Decoration with light,Wooden Wolf Horse Decor Craft,Wooden Christmas ornament,Wall Decoration,Desktop ornaments,Free Engraving",
        description= "This 3D tabletop ornament has 3 designs of Fox/Wolf/Horse. Each design contains five layers of interwoven forest plants and wildlife scenes. Each layer is carefully cut and polished to highlight each layer, then glued together to create a beautiful 3D effect that gives the piece depth.",
        price= 15.99,
        userId = 2,
        category= "Home & Living",
        highlight = "Materials",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://i.etsystatic.com/26618873/r/il/e4cdfe/3990084111/il_794xN.3990084111_tmlb.jpg"
<<<<<<< HEAD
)
=======
    )
>>>>>>> test_lyn
    product03 = Product(
        name= "Botanical Print Set of 4 - Botanical Illustration - Botanical Art Print - Art Prints - Vintage Botanical Print Set of 4 - Botanical Poster",
        description= "This is for a set of 4 prints of a Botanical Floral illustration that has been hand painted and were found in an Antique natural history text book. The original has been digitally enhanced and are printed on heavy matte photo paper.",
        price= 38.00,
        userId = 3,
        category= "Home & Living",
        highlight = "Handmade",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://i.etsystatic.com/12324116/r/il/6b44c0/4241871316/il_794xN.4241871316_9tuv.jpg"
    )
    product04 = Product(
        name= "Custom NES Nintendo Themed Nintendo Switch Joy-Con JoyCon Controllers",
        description= "This set of Nintendo Switch Joy-Con controllers features a custom painted Nintendo theme. Comes with matching colored wrist straps.",
        price= 204.95,
        userId = 4,
        category= "Toys & Entertainment",
        highlight = "Handmade",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://i.etsystatic.com/11774051/r/il/4ac32d/1251597408/il_794xN.1251597408_iwor.jpg"
    )
    product05 = Product(
        name= "Fuzzy Car Accessories, Steering Wheel Cover, Gear Shift Knob Cover, Handbrake Cover, Rear View Mirror Cover, Belt Cover. Accessories Set.",
        description= "Drive with Style and choose handmade covers from shop 'BeutySteeringWheel'. :)",
        price= 25.59,
        userId = 5,
        category= "Toys & Entertainment",
        highlight = "Materials",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://i.etsystatic.com/25075715/r/il/bac101/3141997968/il_794xN.3141997968_2chr.jpg"
    )
    product06 = Product(
        name= "Meth joke coffee mug. Coffee because meth is illegal.",
        description= "11 ounce or 15 ounce premium white ceramic mugs-Images are printed with magical dye sublimation process that infuses the ink into the ceramic. This means the image is a part of the mug. Image will not rub, peel or come off like adhesive vinyl or other processes.",
        price= 15.00,
        userId = 6,
        category= "Home & Living",
        highlight = "Materials",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://i.etsystatic.com/10501376/r/il/12ca23/3542919463/il_794xN.3542919463_if7i.jpg"
    )
    product07 = Product(
        name= "Dainty Chain Bracelet, Delicate Bracelets for Women, Layering Bracelet, Gold Chain, Coin, Tube, Lace, Satellite Chain",
        description= "Beautiful dainty chain bracelet in 14K gold or sterling silver. Our delicate bracelets are offered in four unique styles: coin chain, tube chain, lace chain, oval link or satellite chain. Pick one or more for a custom layering look just for you!",
        price= 31.00,
        userId = 7,
        category= "Jewelry & Accessories",
        highlight = "Made to Order",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://i.etsystatic.com/10934823/r/il/30ef21/1339090870/il_794xN.1339090870_8lk9.jpg"
    )
    product08 = Product(
        name= "GREEN LEAF EARRINGS, Leaf studs, Tiny Dangle Earrings, spring jewelry, Nature Jewelry, Green Leaves",
        description= "High-quality picture is printed on waterproof paper and protected with a glass cabochon. All findings are Nickel Free.",
        price= 7.56,
        userId = 8,
        category= "Jewelry & Accessories",
        highlight = "Handmade",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://i.etsystatic.com/7645072/r/il/dacff5/1696593437/il_794xN.1696593437_30ci.jpg"
    )
    product09 = Product(
        name= "Blue Teardrop pendant Necklace, Fancy, Dressy necklace, Formal Jewelry, Homecoming, crystal, Pendant Royal Blue, PROM jewelry, For Mom",
        description= "A classic look that can be worn during and after a wedding or any special occasion. Perfect for a Homecoming Dance, Formal, Sorority Formal, holiday party, wedding.... New Year's Eve",
        price= 18.95,
        userId = 9,
        category= "Jewelry & Accessories",
        highlight = "Handmade",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://i.etsystatic.com/11392819/r/il/f6e03a/1234859552/il_794xN.1234859552_s7vy.jpg"
    )
    product10 = Product(
        name= "Wedding, Fairy lights, Rustic Wedding Decor, Wedding Centerpiece Lights, Mason Jar Lighting, Copper Wire Lights, Battery included *No Jar",
        description= "Whimsical fairy lights for your rustic wedding decor. Easy! Just add to your wedding centerpiece. DIY Mason jar lighting to make your wedding tables stunning!",
        price= 3.33,
        userId = 10,
        category= "Wedding & Party",
        highlight = "Materials",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://i.etsystatic.com/10316178/r/il/2070b5/2506090917/il_794xN.2506090917_66m9.jpg"
    )
    product11 = Product(
        name= "Set of 2 - Champagne Flutes Personalized, Wedding Gifts, Mr and Mrs Champagne Glasses, Toasting Flutes for Couples - Bride and Groom",
        description= "Set of 2 - Wedding Champagne Flutes, Mr. and Mrs. Champagne Glasses, Wedding Gifts for Couples, Toasting Flutes",
        price= 19.99,
        userId = 1,
        category= "Wedding & Party",
        highlight = "Can be personalized",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://i.etsystatic.com/14466987/r/il/40ede1/2584790379/il_794xN.2584790379_pwyg.jpg"
    )
    product12 = Product(
        name= "Vintage style silver wedding band, Filigree wedding ring, Nature silver band, Men wedding band, Women wedding ring, Leaves ring, Unique band",
        description= "Vintage style silver wedding band, Filigree wedding ring, Nature silver band, Men wedding band, Women wedding ring, Leaves ring, Unique wedding band, Sterling silver ring.",
        price= 93.60,
        userId = 2,
        category= "Wedding & Party",
        highlight = "Can be personalized",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://i.etsystatic.com/12896129/r/il/928fc4/1380024725/il_794xN.1380024725_2yrf.jpg"
    )
    product13 = Product(
        name= "Digital custom portrait in my style",
        description= "Personalized Portrait | Couple portrait | Family portrait | Valentine custom gift | digital custom portrait in my style | digital art commission | family illustration | couple illustration | pet illustration commission | Wedding illustration | draw from photo",
        price= 4.89,
        userId = 3,
        category= "Art & Collectibles",
        highlight = "Made to Order",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://i.etsystatic.com/26291699/r/il/269539/2838983613/il_794xN.2838983613_sull.jpg"
    )
    product14 = Product(
        name= "Now Spinning Vinyl Record Holder for Musicians, Dads, Music Lovers, DJs, Record Stores (Single or Double LP)",
        description= "HIGH DEMAND! Holidays are coming! Sold out? Get added to the waitlist, so you don't miss this popular gift!",
        price= 34.99,
        userId = 4,
        category= "Art & Collectibles",
        highlight = "Made to Order",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://i.etsystatic.com/31038643/r/il/f82816/4033193826/il_794xN.4033193826_1x9j.jpg"
    )
    product15 = Product(
        name= "Pokeball with Ringlight, Pokemon cosplay must have",
        description= "Battery required for LED: 9V (Rectangular battery). Shipping time: 2 weeks to 1 month. Total Time: 3 WEEKS TO TWO MONTH from order to receiving it, will take much longer if you give the wrong address. ALL POKEBALLS are handmade, and customized ball takes longer.",
        price= 34.40,
        userId = 5,
        category= "Art & Collectibles",
        highlight = "Handmade",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://i.etsystatic.com/12233055/r/il/c7fe9f/976711688/il_794xN.976711688_7xa0.jpg"
    )
    product16 = Product(
        name= "Dainty Name Necklace with Birth Flower, Personalized Name Necklace, Custom Gold Name Jewelry, Birthday Gift for Her, Bridesmaid Gift",
        description= "Dainty Name Necklace with Birth Flower, Personalized Name Necklace, Custom Gold Name Jewelry, Birthday Gift for Her, Mother's Day Gifts",
        price= 50,
        userId =1,
        category= "Personalized Gifts",
        highlight = "Handmade Item",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://images.pexels.com/photos/860009/pexels-photo-860009.jpeg"
     )
    product17 = Product(
        name= "Pure crystal that has spiritual affects to heal the mind, soul, and body. Perfect gift for those who are having who want to relax.",
        description= "Pure crystal that has spiritual affects to heal the mind, soul, and body. Perfect gift for those who are having who want to relax.",
        price= 70,
        userId = 2,
        category= "Personalized Gifts",
        highlight = "Handmade Item",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://images.pexels.com/photos/965981/pexels-photo-965981.jpeg"
    )
    product18 = Product(
        name= "Pure beewax candle and processed by natural bees. Great gift for loved ones who enjoy a nice scent.",
        description="Pure beewax candle and processed by natural bees. Great gift for loved ones who enjoy a nice scent.",
        price= 30,
        userId=3,
        category= "Home Decor",
        highlight = "Handmade",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://images.pexels.com/photos/6634662/pexels-photo-6634662.jpeg"
    )
    product19 = Product(
        name= "Authentic clay pots handmade by the Brixton Family. Each pot is carefully shaped to the customer's desire.",
        description= "Our products are wonderful. We use only natural resources to produce a nice quality pot for all kinds of uses in the home.",
        price= 40,
        userId=4,
        category= "Home Decor",
        highlight = "Handmade",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://images.pexels.com/photos/3817497/pexels-photo-3817497.jpeg"
    )
    product20 = Product(
        name= "Recycled sheets of cloth that are dyed and processed for any use around the home",
        description= "Our products are sourced from any donations of recyclable cloths to be resused again. Shipping may take up to 2 days.",
        price= 90,
        userId =5,
        category= "Home Decor",
        highlight = "Handmade",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://images.pexels.com/photos/6850482/pexels-photo-6850482.jpeg"
    )
    product21 = Product(
        name= "Naturally dyed soap that has no fragrance making it toxic free. Great gift for any who are need of a good quality soap.",
        description= "Our products are carefully sourced to produce a greaty quality soap that not only cleans well but also looks wonderful",
        price= 120,
        userId = 6,
        category= "Home Decor",
        highlight = "Handmade",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://images.pexels.com/photos/6621468/pexels-photo-6621468.jpeg"
    )
    product22 = Product(
        name= "Nice handmade guitar created by a skilled crafter most known as Rivera.",
        description= "Please note that guitars will take about 2 weeks for shipping. Guitars are processed by hand so it may take some time for orders to be fufilled.",
        price= 120,
        userId = 6,
        category= "Home Decor",
        highlight = "Handmade",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://images.pexels.com/photos/3811836/pexels-photo-3811836.jpeg"
    )
    product23 = Product(
        name= "Black Large Wall Clock, Real Mirror Clock ,Black colored numerals on a Silver colored mirror",
        description= "Our products are produced from real mirror.You should not choose models made with plexi mirror and mirror effect.Pay attention to this detail before ordering.",
        price= 120,
        userId = 7,
        category= "Home Decor",
        highlight = "Handmade",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://i.etsystatic.com/25075715/r/il/bac101/3141997968/il_794xN.3141997968_2chr.jpg"
    )
    product24 = Product(
        name= "Nice handmade gift for friends and families for any home decoration.",
        description= "Our products are produced from real pine wood. Not only does it smell nice but will last for a long time. Wood is sourced across North America.",
        price= 120,
        userId = 8,
        category= "Home Decor",
        highlight = "Handmade",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://images.pexels.com/photos/7181110/pexels-photo-7181110.jpeg"
    )
    product25 = Product(
        name= "Medium wooden clock that was handmade to appear like a moon.",
        description= "Nice fun gift for friends and families to keep track of the time. Each clock is carefully handmade by many artists and crafted with recycled wood.",
        price= 120,
        userId = 9,
        category= "Home Decor",
        highlight = "Handmade",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://images.pexels.com/photos/7181113/pexels-photo-7181113.jpeg"
    )
    product26 = Product(
        name= "White Cermic Cups that are handmade and have a rustic feel.",
        description= "Rustic looking cups that give a cozy vibe. Cups are limited so please buy as soon as you can. We appreciate all the support. Comes in sets of 4.",
        price= 120,
        userId =10,
        category= "Home Decor",
        highlight = "Handmade",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://images.pexels.com/photos/4830748/pexels-photo-4830748.jpeg"
    )
    product27 = Product(
        name= "Silicon based art piece that comes in many different colors.",
        description= "Our products are produced from silicon. Please do not leave in the sun. Shipping may take up to 5 days.",
        price= 120,
        userId = 10,
        category= "Home Decor",
        highlight = "Handmade",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://images.pexels.com/photos/7175390/pexels-photo-7175390.jpeg"
    )
    product28 = Product(
        name= "Recycled cloth shirts that have customized prints.",
        description= "Customers can choose what kind of print they want depending on the size. Please donate any material to process more shirts.",
        price= 30,
        userId = 9,
        category= "Home Decor",
        highlight = "Handmade",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://i.etsystatic.com/25075715/r/il/bac101/3141997968/il_794xN.3141997968_2chr.jpg"
    )
    product29 = Product(
        name= "Nice gift for those who love to cook and have a nice looking cutting board.",
        description= "Our products are produced from fallen redwood trees. Burnt to a nice finish. A nice gift all around.",
        price= 120,
        userId = 8,
        category= "Home Decor",
        highlight = "Handmade",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://images.pexels.com/photos/1087909/pexels-photo-1087909.jpeg"
    )
    product30 = Product(
        name= "Recycled clear glass that are sourced across the world.",
        description= "Our vision is to try to make the world a better place. We accept any types of glass for us to craft these wonderful vases.",
        price= 40,
        userId =9,
        category= "Home Decor",
        highlight = "Handmade",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://i.etsystatic.com/25075715/r/il/bac101/3141997968/il_794xN.3141997968_2chr.jpg"
<<<<<<< HEAD
)
    product31 = Product(
        name= "DROPS Air A medium thick blow yarn, baby alpaca and merino wool, Beautiful knitting yarn",
        description= "An exciting `blow yarn" made from soft baby alpaca and cozy and warm merino wool. As implied in blow yarn, this quality has an unique construction where instead of spinning, the fibres of baby alpaca and merino wool are air blown into a tube together.",
=======
    )
    product31 = Product(
        name= "DROPS Air A medium thick blow yarn, baby alpaca and merino wool, Beautiful knitting yarn",
        description= "An exciting 'blow yarn' made from soft baby alpaca and cozy and warm merino wool. As implied in blow yarn, this quality has an unique construction where instead of spinning, the fibres of baby alpaca and merino wool are air blown into a tube together.",
>>>>>>> test_lyn
        price= 100,
        userId = 1,
        category= "Clothing & Shoes",
        highlight = "Handmade",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://i.etsystatic.com/21915528/r/il/b90fa5/3300321021/il_1588xN.3300321021_elpl.jpg"
    )
    product32 = Product(
<<<<<<< HEAD
        name= "Drops air, aran weight knitting yarn, alpaca yarn and merino wool, blow yarn, worsted yarn, drops yarn, knitting yarn, medium thick yarn",
        description= "An exciting `blow yarn` made from soft baby alpaca and cozy and warm merino wool. As implied in blow yarn, this quality has an unique construction where instead of spinning.",
=======
        name= "Brushed Alpaca silk yarn! Garnstudio DROPS Design Brushed Alpaca silk 67% baby alpaca 23 mulberry silk fluffy knitting wool - 25 grams",
        description= "Super soft DROPS Alpaca Silk has a sophisticated shade card ranging from soft beige and gray hues, to gorgeous reds and purples. The yarn’s feather light and surprisingly warm features make it suitable for both small and large garments, and it can be knitted relatively fast on larger needles. DROPS Alpaca Silk can be used as an effect yarn when worked together with other yarns for lovely soft results!",
>>>>>>> test_lyn
        price= 150,
        userId = 2,
        category= "Clothing & Shoes",
        highlight = "Materials: Primary fiber: Alpaca; Secondary fiber: Polyamide",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://i.etsystatic.com/10304510/r/il/f7568b/2230955130/il_1588xN.2230955130_6yrs.jpg"
    )
    product33 = Product(
        name= "Alpaca yarn, Drops Alpaca yarn, Organic wool, soft alpaca yarn, knitting yarn, Natural fiber",
        description= "Alpaca is a lovely yarn spun from 3 strands of 100% superfine alpaca, with an extra twist to provide a durable surface. ",
        price= 200,
        userId = 3,
        category= "Clothing & Shoes",
        highlight = "Handmade",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://i.etsystatic.com/32226150/r/il/3018e8/3921909534/il_1588xN.3921909534_k49c.jpg"
    )
    product34 = Product(
        name= "Mohair Yarn DROPS Kid Silk Lace Yarn Super Kid Mohair Silk Yarn Mohair Wool Yarn",
        description= "A luxurious, light brushed yarn in an exclusive mix of 75% mohair super kid and 25% mulberry silk, DROPS Kid-Silk is feather light, and will give garments a sophisticated look.",
        price= 300,
        userId = 4,
        category= "Clothing & Shoes",
        highlight = "Handmade",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://i.etsystatic.com/18889371/r/il/4ed750/3040943685/il_1588xN.3040943685_894g.jpg"
    )
    product35 = Product(
        name= "DROPS Baby Merino knitting yarn Superwash treated extra fine merino wool yarn Sport Garnstudio design 50g",
        description= "DROPS Baby Merino is spun from extra-fine merino wool fibers from free-range animals in South America. A super soft and itch-free wool yarn, it is perfectly suited for delicate baby skin. The yarn is also superwash treated which makes it machine washable and ideal for daily use.",
        price= 350,
        userId =5,
        category= "Clothing & Shoes",
        highlight = "Handmade",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://i.etsystatic.com/18508755/r/il/0b5349/2440378086/il_1588xN.2440378086_5mad.jpg"
    )
    product36 = Product(
        name= "Original oil painting, Street Cafe , Impressionist Greek Art, Mediterranean street, Europe travel, Handmade on stretched canvas Large",
        description= "A good idea to give a touch of Greece taste to your home, living room, kitchen, bedroom or office…perfect gifts for your relatives and friends",
        price= 1000,
        userId=6,
        category= "Art & Collectibles",
        highlight = "Handmade",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://i.etsystatic.com/21187145/r/il/0e7a7e/2466292412/il_1588xN.2466292412_f2kw.jpg"
    )
    product37 = Product(
        name= "Saint Petersburg Original oil painting Russia Travel Leningrad Cityscape Autumn Landscape Small wall art",
        description= "Original oil Painting Saint Petersburg.Russia Travel. Let my works add comfort to your home or office!",
        price= 800,
        userId=7,
        category= "Art & Collectibles",
        highlight = "Handmade",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://i.etsystatic.com/21187145/r/il/0f5035/3489428794/il_1588xN.3489428794_kqk5.jpg"
    )
    product38 = Product(
        name= "Greece watercolor Original painting Greek travel art Mediterranean Sea A5 size artwork by AnaMuStudio",
        description= "Santorini artwork Greece painting Original watercolor.",
        price= 80,
        userId=8,
        category= "Art & Collectibles",
        highlight = "Handmade",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://i.etsystatic.com/20809018/r/il/423612/3877368233/il_1588xN.3877368233_i0f2.jpg"
    )
    product39 = Product(
        name= "Edinburgh watercolor painting, art print, Edinburgh Old Town,Edinburgh painting, Edinburgh Scotland travel gift, 8.5 x 11 in",
        description= "Edinburgh Sotland cityscape art print.Art print from my original art work. Museum-quality textured paper,310 gsm 8.5 x 11 inch",
        price= 870,
        userId = 9,
        category= "Art & Collectibles",
        highlight = "Handmade",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://i.etsystatic.com/17085680/r/il/e2325f/3530850675/il_1588xN.3530850675_7a9p.jpg"
    )
    product40 = Product(
        name= "Ciclistas 30x40 Pulg Acrilic",
        description= "Original acrylic on canvas 30'x40' from cyclist collection finished in 2017. Painting is perfect condition, stretched.",
        price= 3000,
        userId = 10,
        category= "Art & Collectibles",
        highlight = "Handmade",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://i.etsystatic.com/20085606/r/il/0aaeef/3552040603/il_1588xN.3552040603_h1z7.jpg"
    )
    product41 = Product(
        name= "Paris Oil Painting Eiffel Tower Original Art Sunset Artwork Architecture Wall Art Travel Art Mid Century Painting",
        description= "Colorful Paris painting would be a great addition to your original oil painting collection.",
        price= 5000,
        userId = 1,
        category= "Art & Collectibles",
        highlight = "Handmade",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://i.etsystatic.com/27937711/r/il/cd3380/4144385824/il_1588xN.4144385824_2r55.jpg"
    )
    product42 = Product(
        name= "Old Houses, Singapore, original watercolor painting, blair road, asia travel, not a print, landscape, wallart id221013",
        description= "Peranakan housesalong Blair Road,Singapore.Original watercolor and Not a Print.",
        price= 800,
        userId = 2,
        category= "Art & Collectibles",
        highlight = "Handmade",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://i.etsystatic.com/5203219/r/il/cba206/4247312242/il_1588xN.4247312242_lalu.jpg"
    )
    product43 = Product(
        name= "Watercolour painting PRINT of a restaurant at night in Paris, France, Giclee art print",
        description= " Giclee/ Fine art PRINT of a watercolour painting I did of a restaurant in Paris, France. The city has many different faces and I especially like its look in the evening.",
        price= 900,
        userId = 3,
        category= "Art & Collectibles",
        highlight = "Handmade",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://i.etsystatic.com/23629440/r/il/435525/3007420413/il_1588xN.3007420413_7max.jpg"
    )
    product44 = Product(
        name= "Parisian street scene, vintage Italian oil painting, Parisian piazza, impressionist, signed",
        description= "A stunning street scene of Paris in the rain. Colorful jackets and the brick building are all the more vibrant against the gloomy sky.",
        price= 1000,
        userId = 4,
        category= "Art & Collectibles",
        highlight = "Handmade",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://i.etsystatic.com/28509808/r/il/a91a70/3465342691/il_1588xN.3465342691_i43b.jpg"
    )
    product45 = Product(
        name= "Chicago City Street in the 1970s - ORIGINAL PAINTING - 18 X 24",
        description= "This Chicago street scene is my original work. I paint city scenes, still lifes, landscapes, and whatever else I feel like painting. I like the Impressionists so I build on their influences.",
        price= 1500,
        userId=5,
        category= "Art & Collectibles",
        highlight = "Handmade",
        createdAt= now,
        updatedAt= now,
        previewImage= "https://i.etsystatic.com/8360328/r/il/b13679/1475839035/il_1588xN.1475839035_tgc8.jpg"
    )

    db.session.add(product01)
    db.session.add(product02)
    db.session.add(product03)
    db.session.add(product04)
    db.session.add(product05)
    db.session.add(product06)
    db.session.add(product07)
    db.session.add(product08)
    db.session.add(product09)
    db.session.add(product10)
    db.session.add(product11)
    db.session.add(product12)
    db.session.add(product13)
    db.session.add(product14)
    db.session.add(product15)
    db.session.add(product16)
    db.session.add(product17)
    db.session.add(product18)
    db.session.add(product19)
    db.session.add(product20)
    db.session.add(product21)
    db.session.add(product22)
    db.session.add(product23)
    db.session.add(product24)
    db.session.add(product25)
    db.session.add(product26)
    db.session.add(product27)
    db.session.add(product28)
    db.session.add(product29)
    db.session.add(product30)
    db.session.add(product31)
    db.session.add(product32)
    db.session.add(product33)
    db.session.add(product34)
    db.session.add(product35)
    db.session.add(product36)
    db.session.add(product37)
    db.session.add(product38)
    db.session.add(product39)
    db.session.add(product40)
    db.session.add(product41)
    db.session.add(product42)
    db.session.add(product43)
    db.session.add(product44)
    db.session.add(product45)

    db.session.commit()

def undo_products():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
