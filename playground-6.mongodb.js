/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('Project');

// Insert a few documents into the sales collection.
/*
// crime
db.getCollection('products').insertMany([
    {
        "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/0071/9780007119318.jpg",
        "name": "Murder on the Orient Express",
        "author": "Agatha Christie",
        "price": 5.91,
        "category": "Crime",
        "qty": 29
    },
    {
        "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/0071/9780007136834.jpg",
        "name": "And Then There Were None",
        "author": "Agatha Christie",
        "price": 7.13,
        "category": "Crime",
        "qty": 0
    },
    {
        "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/0620/9780062073488.jpg",
        "name": "And Then There Were None",
        "author": "Agatha Christie",
        "price": 7.16,
        "category": "Crime",
        "qty": 8
    },
    {
        "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/0075/9780007527526.jpg",
        "name": "The Murder of Roger Ackroyd",
        "author": "Agatha Christie",
        "price": 8.19,
        "category": "Crime",
        "qty": 6
    },
    {
        "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/0071/9780007119325.jpg",
        "name": "Death on the Nile",
        "author": "Agatha Christie",
        "price": 7.43,
        "category": "Crime",
        "qty": 5
    },
    {
        "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/0620/9780062073501.jpg",
        "name": "Murder on the Orient Express",
        "author": "Agatha Christie",
        "price": 7.16,
        "category": "Crime",
        "qty": 24
    },
    {
        "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/0065/9780006513773.jpg",
        "name": "Hercule Poirot: the Complete Short Stories",
        "author": "Agatha Christie",
        "price": 17.87,
        "category": "Crime",
        "qty": 17
    },
    {
        "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/0075/9780007527533.jpg",
        "name": "The ABC Murders",
        "author": "Agatha Christie",
        "price": 8.04,
        "category": "Crime",
        "qty": 11
    },
    {
        "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/0075/9780007527519.jpg",
        "name": "Five Little Pigs",
        "author": "Agatha Christie",
        "price": 8.34,
        "category": "Crime",
        "qty": 2
    },
    {
        "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/4862/9780486296951.jpg",
        "name": "The Mysterious Affair at Styles",
        "author": "Agatha Christie",
        "price": 6.76,
        "category": "Crime",
        "qty": 3
    },
    {
        "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/0075/9780007527502.jpg",
        "name": "Murder on the Orient Express",
        "author": "Agatha Christie",
        "price": 8.08,
        "category": "Crime",
        "qty": 17
    }
]);

// fantasy
db.getCollection('products').insertMany([
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/6482/9781648279218.jpg",
      "name": "The Scum Villain's Self-Saving System",
      "author": "Mo Xiang Tong Xiu",
      "price": 23.16,
      "category": "Fantasy",
      "qty": 4
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/9753/9781975319434.jpg",
      "name": "Solo Leveling, Vol. 1 (manga)",
      "author": "Chugong",
      "price": 28.81,
      "category": "Fantasy",
      "qty": 35
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/9753/9781975399573.jpg",
      "name": "Toilet-bound Hanako-kun, Vol. 2",
      "author": "AidaIro",
      "price": 19.46,
      "category": "Fantasy",
      "qty": 39
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/6385/9781638582533.jpg",
      "name": "The Scum Villain's Self-Saving System: Ren Zha Fanpai Zijiu Xitong (Novel) Vol. 3",
      "author": "Mo Xiang Tong Xiu",
      "price": 23.99,
      "category": "Fantasy",
      "qty": 50
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/9753/9781975319458.jpg",
      "name": "Solo Leveling, Vol. 2",
      "author": "Chugong",
      "price": 28.81,
      "category": "Fantasy",
      "qty": 33
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/6482/9781648279188.jpg",
      "name": "Heaven Official's Blessing: Tian Guan Ci Fu (Novel) Vol. 2",
      "author": "Mo Xiang Tong Xiu",
      "price": 23.99,
      "category": "Fantasy",
      "qty": 45
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4714/9781471407598.jpg",
      "name": "The Queen of Nothing (The Folk of the Air #3)",
      "author": "Holly Black",
      "price": 14.1,
      "category": "Fantasy",
      "qty": 7
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/6385/9781638581567.jpg",
      "name": "Grandmaster of Demonic Cultivation: Mo Dao Zu Shi (Novel) Vol. 3",
      "author": "Mo Xiang Tong Xiu",
      "price": 23.99,
      "category": "Fantasy",
      "qty": 29
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4714/9781471407369.jpg",
      "name": "The Wicked King (The Folk of the Air #2)",
      "author": "Holly Black",
      "price": 23.71,
      "category": "Fantasy",
      "qty": 9
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/5293/9781529356557.jpg",
      "name": "Six Crimson Cranes",
      "author": "Elizabeth Lim",
      "price": 31.25,
      "category": "Fantasy",
      "qty": 49
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4088/9781408856772.jpg",
      "name": "Harry Potter Box Set: The Complete Collection (Children's Paperback)",
      "author": "J.K. Rowling",
      "price": 107.82,
      "category": "Fantasy",
      "qty": 36
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/6482/9781648279201.jpg",
      "name": "Grandmaster of Demonic Cultivation: Mo Dao Zu Shi (Novel) Vol. 2",
      "author": "Mo Xiang Tong Xiu",
      "price": 23.99,
      "category": "Fantasy",
      "qty": 12
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/5293/9781529350487.jpg",
      "name": "Kingdom of the Wicked",
      "author": "Kerri Maniscalco",
      "price": 18.23,
      "category": "Fantasy",
      "qty": 31
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/2501/9781250196231.jpg",
      "name": "The Shadow and Bone Trilogy Boxed Set",
      "author": "Leigh Bardugo",
      "price": 51.53,
      "category": "Fantasy",
      "qty": 17
    }
  ])

  // manga

  db.getCollection('products').insertMany([
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/9747/9781974723676.jpg",
      "name": "Given, Vol. 6",
      "author": "Natsuki Kizu",
      "price": 19.02,
      "category": "Manga",
      "qty": 28
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/9747/9781974714810.jpg",
      "name": "Jujutsu Kaisen, Vol. 5",
      "author": "Gege Akutami",
      "price": 15.29,
      "category": "Manga",
      "qty": 29
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/5697/9781569703366.jpg",
      "name": "Twittering Birds Never Fly Volume 2 (Yaoi Manga)",
      "author": "Kou Yoneda",
      "price": 21.19,
      "category": "Manga",
      "qty": 40
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/9747/9781974725106.jpg",
      "name": "My Hero Academia, Vol. 29",
      "author": "Kohei Horikoshi",
      "price": 15.29,
      "category": "Manga",
      "qty": 28
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/9747/9781974725120.jpg",
      "name": "One-Punch Man, Vol. 23",
      "author": "ONE",
      "price": 15.29,
      "category": "Manga",
      "qty": 45
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/9747/9781974725137.jpg",
      "name": "Spy x Family, Vol. 6",
      "author": "Tatsuya Endo",
      "price": 15.29,
      "category": "Manga",
      "qty": 43
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/5067/9781506712000.jpg",
      "name": "Berserk Deluxe Volume 3",
      "author": "Kentaro Miura",
      "price": 89.74,
      "category": "Manga",
      "qty": 11
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/5067/9781506711980.jpg",
      "name": "Berserk Deluxe Volume 1",
      "author": "Kentaro Miura",
      "price": 94.47,
      "category": "Manga",
      "qty": 7
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/5693/9781569319727.jpg",
      "name": "Banana Fish, Vol. 1",
      "author": "Akimi Yoshida",
      "price": 15.29,
      "category": "Manga",
      "qty": 13
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/9747/9781974723645.jpg",
      "name": "Haikyu!!, Vol. 45",
      "author": "Haruichi Furudate",
      "price": 12.97,
      "category": "Manga",
      "qty": 32
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/9753/9781975332877.jpg",
      "name": "Toilet-bound Hanako-kun, Vol. 1",
      "author": "Aidalro",
      "price": 19.46,
      "category": "Manga",
      "qty": 3
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/9747/9781974709298.jpg",
      "name": "Yarichin Bitch Club, Vol. 2",
      "author": "Ogeretsu Tanaka",
      "price": 19.26,
      "category": "Manga",
      "qty": 30
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/9747/9781974721573.jpg",
      "name": "Fist of the North Star, Vol. 2",
      "author": "Buronson",
      "price": 29.84,
      "category": "Manga",
      "qty": 21
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/6323/9781632366993.jpg",
      "name": "Attack On Titan Season 1 Part 1 Manga Box Set",
      "author": "Hajime Isayama",
      "price": 55.42,
      "category": "Manga",
      "qty": 14
    }
  ])

  // Adventure
  db.getCollection('products').insertMany([
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/7868/9781786892737.jpg",
      "name": "The Midnight Library",
      "author": "Matt Haig",
      "price": 15,
      "category": "Adventure",
      "qty": 12
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4732/9781473217935.jpg",
      "name": "Cytonic",
      "author": "Brandon Sanderson",
      "price": 30.35,
      "category": "Adventure",
      "qty": 45
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/0083/9780008339180.jpg",
      "name": "The Burning God",
      "author": "R.F. Kuang",
      "price": 20.06,
      "category": "Adventure",
      "qty": 20
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/2414/9780241480724.jpg",
      "name": "The Hawthorne Legacy",
      "author": "Jennifer Lynn Barnes",
      "price": 15.29,
      "category": "Adventure",
      "qty": 14
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/2502/9781250211101.jpg",
      "name": "Six of Crows Boxed Set",
      "author": "Leigh Bardugo",
      "price": 38.85,
      "category": "Adventure",
      "qty": 21
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/3383/9781338329544.jpg",
      "name": "The Bad Guys in They're Bee-Hind You! (the Bad Guys #14), 14",
      "author": "Aaron Blabey",
      "price": 12.68,
      "category": "Adventure",
      "qty": 22
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/0629/9780062946140.jpg",
      "name": "Dark Rise",
      "author": "C S Pacat",
      "price": 29.25,
      "category": "Adventure",
      "qty": 4
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/0614/9780061478789.jpg",
      "name": "Howl's Moving Castle",
      "author": "Diana Wynne Jones",
      "price": 16.03,
      "category": "Adventure",
      "qty": 10
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/6355/9781635574043.jpg",
      "name": "House of Earth and Blood",
      "author": "Sarah J Maas",
      "price": 41.58,
      "category": "Adventure",
      "qty": 47
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4847/9781484707234.jpg",
      "name": "Percy Jackson and the Olympians",
      "author": "Rick Riordan",
      "price": 61.71,
      "category": "Adventure",
      "qty": 25
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/2414/9780241473665.jpg",
      "name": "You'll Be the Death of Me",
      "author": "Karen M. McManus",
      "price": 14.02,
      "category": "Adventure",
      "qty": 32
    }
  ])
  // Sci Fi
  db.getCollection('products').insertMany([
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/5266/9781526637888.jpg",
      "name": "Harry Potter and the Chamber of Secrets: MinaLima Edition",
      "author": "J.K. Rowling",
      "price": 54.62,
      "category": "Sci Fi",
      "qty": 11
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4732/9781473233805.jpg",
      "name": "God Emperor Of Dune",
      "author": "Frank Herbert",
      "price": 18.75,
      "category": "Sci Fi",
      "qty": 41
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4732/9781473233799.jpg",
      "name": "Heretics Of Dune",
      "author": "Frank Herbert",
      "price": 17.21,
      "category": "Sci Fi",
      "qty": 17
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/9753/9781975303143.jpg",
      "name": "86 - EIGHTY SIX, Vol. 2 (light novel)",
      "author": "Asato Asato",
      "price": 21.02,
      "category": "Sci Fi",
      "qty": 7
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4732/9781473233812.jpg",
      "name": "Chapter House Dune",
      "author": "Frank Herbert",
      "price": 16.07,
      "category": "Sci Fi",
      "qty": 26
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/6433/9781643377803.jpg",
      "name": "The Incal",
      "author": "Alejandro Jodorowsky",
      "price": 41.69,
      "category": "Sci Fi",
      "qty": 42
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/5101/9781510107038.jpg",
      "name": "Crooked Kingdom Collector's Edition",
      "author": "Leigh Bardugo",
      "price": 37.09,
      "category": "Sci Fi",
      "qty": 41
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4732/9781473217386.jpg",
      "name": "Neuromancer",
      "author": "William Gibson",
      "price": 11.02,
      "category": "Sci Fi",
      "qty": 39
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/9753/9781975303112.jpg",
      "name": "86 - EIGHTY SIX, Vol. 3 (light novel)",
      "author": "Asato Asato",
      "price": 19.46,
      "category": "Sci Fi",
      "qty": 49
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/2503/9781250308979.jpg",
      "name": "Dance of Thieves",
      "author": "Mary Pearson",
      "price": 21.48,
      "category": "Sci Fi",
      "qty": 46
    }
  ])
  // Horror
  db.getCollection('products').insertMany([
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/0083/9780008350437.jpg",
      "name": "Empire of the Vampire",
      "author": "Jay Kristoff",
      "price": 37.49,
      "category": "Horror",
      "qty": 46
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/6465/9781646512515.jpg",
      "name": "Junji Ito's Cat Diary: Yon & Mu Collector's Edition",
      "author": "Junji Ito",
      "price": 30.92,
      "category": "Horror",
      "qty": 7
    }
  ])
// Education

db.getCollection('products').insertMany([
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/3741/9780374157357.jpg",
      "name": "The Dawn of Everything",
      "author": "David Graeber",
      "price": 42.25,
      "category": "Education",
      "qty": 49
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/0995/9780099590088.jpg",
      "name": "Sapiens",
      "author": "Yuval Noah Harari",
      "price": 22.16,
      "category": "Education",
      "qty": 37
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/2419/9780241958223.jpg",
      "name": "Start With Why",
      "author": "Simon Sinek",
      "price": 16.85,
      "category": "Education",
      "qty": 9
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/9753/9781975336516.jpg",
      "name": "Solo Leveling, Vol. 3 (Manga)",
      "author": "Chugong",
      "price": 30.48,
      "category": "Education",
      "qty": 49
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/2419/9780241989692.jpg",
      "name": "Numbers Don't Lie",
      "author": "Vaclav Smil",
      "price": 17.81,
      "category": "Education",
      "qty": 3
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/6709/9780670923175.jpg",
      "name": "Leaders Eat Last",
      "author": "Simon Sinek",
      "price": 18.96,
      "category": "Education",
      "qty": 47
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/7880/9781788006712.jpg",
      "name": "British Museum: A History of the World in 25 Cities",
      "author": "Tracey Turner",
      "price": 35.8,
      "category": "Education",
      "qty": 8
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1404/9780140449334.jpg",
      "name": "Meditations",
      "author": "Marcus Aurelius",
      "price": 17.38,
      "category": "Education",
      "qty": 28
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/7847/9781784703936.jpg",
      "name": "Homo Deus",
      "author": "Yuval Noah Harari",
      "price": 22.34,
      "category": "Education",
      "qty": 36
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/6098/9780609806951.jpg",
      "name": "Who Cooked the Last Supper?",
      "author": "Rosalind Miles",
      "price": 21.13,
      "category": "Education",
      "qty": 36
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/9848/9781984860262.jpg",
      "name": "This Book Is for You",
      "author": "Worry Lines",
      "price": 23.52,
      "category": "Education",
      "qty": 45
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4088/9781408898956.jpg",
      "name": "Humankind",
      "author": "Rutger Bregman",
      "price": 20.64,
      "category": "Education",
      "qty": 26
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/7608/9781760896973.jpg",
      "name": "You're Doing it Wrong: A History of Bad & Bonkers Advice to Women",
      "author": "Kaz Cooke",
      "price": 50.32,
      "category": "Education",
      "qty": 22
    }
  ])
// Comics
db.getCollection('products').insertMany([
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4012/9781401216672.jpg",
      "name": "Batman The Killing Joke, Deluxe Edition",
      "author": "Alan Moore",
      "price": 14.18,
      "category": "Comics",
      "qty": 27
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4012/9781401207526.jpg",
      "name": "Batman Year One",
      "author": "Frank Miller",
      "price": 11.03,
      "category": "Comics",
      "qty": 6
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4012/9781401223175.jpg",
      "name": "Batman Hush",
      "author": "Jeph Loeb",
      "price": 18.15,
      "category": "Comics",
      "qty": 25
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4012/9781401232597.jpg",
      "name": "Batman",
      "author": "Jeph Loeb",
      "price": 18.6,
      "category": "Comics",
      "qty": 30
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4012/9781401235420.jpg",
      "name": "Batman Vol. 1 The Court Of Owls (The New 52)",
      "author": "Scott Snyder",
      "price": 11.74,
      "category": "Comics",
      "qty": 30
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4012/9781401237783.jpg",
      "name": "Batman Vol. 2 The City Of Owls (The New 52)",
      "author": "Scott Snyder",
      "price": 12.38,
      "category": "Comics",
      "qty": 2
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4012/9781401279592.jpg",
      "name": "Batman: White Knight",
      "author": "Sean Murphy",
      "price": 13.97,
      "category": "Comics",
      "qty": 21
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4012/9781401246020.jpg",
      "name": "Batman Vol. 3 Death Of The Family (The New 52)",
      "author": "Scott Snyder",
      "price": 11.8,
      "category": "Comics",
      "qty": 13
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/7624/9780762445264.jpg",
      "name": "Batman: Bat Signal",
      "author": "Danielle Selber",
      "price": 6.36,
      "category": "Comics",
      "qty": 25
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4012/9781401263119.jpg",
      "name": "Batman The Dark Knight Returns 30th Anniversary Edition",
      "author": "Frank Miller",
      "price": 14.56,
      "category": "Comics",
      "qty": 29
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4012/9781401249335.jpg",
      "name": "Batman Vol. 4 Zero Year-Secret City (The New 52)",
      "author": "Scott Snyder",
      "price": 11.73,
      "category": "Comics",
      "qty": 1
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4012/9781401232740.jpg",
      "name": "Batman: A Death in the Family",
      "author": "Various",
      "price": 17.31,
      "category": "Comics",
      "qty": 26
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4012/9781401216269.jpg",
      "name": "Batman The Man Who Laughs",
      "author": "Ed Brubaker",
      "price": 10.77,
      "category": "Comics",
      "qty": 16
    }
  ])

  //Romance
  db.getCollection('products').insertMany([
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4714/9781471403989.jpg",
      "name": "We Were Liars",
      "author": "E. Lockhart",
      "price": 20.77,
      "category": "Romance",
      "qty": 30
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/3494/9780349417592.jpg",
      "name": "The Unhoneymooners",
      "author": "Christina Lauren",
      "price": 15,
      "category": "Romance",
      "qty": 50
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/7806/9781780622286.jpg",
      "name": "Six of Crows",
      "author": "Leigh Bardugo",
      "price": 16.91,
      "category": "Romance",
      "qty": 41
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4711/9781471154621.jpg",
      "name": "November 9",
      "author": "Colleen Hoover",
      "price": 14.87,
      "category": "Romance",
      "qty": 17
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/5290/9781529087949.jpg",
      "name": "The House in the Cerulean Sea",
      "author": "TJ Klune",
      "price": 15.53,
      "category": "Romance",
      "qty": 32
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/6465/9781646513635.jpg",
      "name": "Wotakoi: Love Is Hard for Otaku 5",
      "author": "Fujita",
      "price": 26,
      "category": "Romance",
      "qty": 27
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9798/6719/9798671981742.jpg",
      "name": "Heart Bones",
      "author": "Colleen Hoover",
      "price": 21.97,
      "category": "Romance",
      "qty": 9
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9798/5175/9798517564375.jpg",
      "name": "The Cheat Sheet",
      "author": "Sarah Adams",
      "price": 22.77,
      "category": "Romance",
      "qty": 25
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/2502/9781250244499.jpg",
      "name": "One Last Stop",
      "author": "Casey McQuiston",
      "price": 24.66,
      "category": "Romance",
      "qty": 34
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4449/9781444951387.jpg",
      "name": "Heartstopper Volume One",
      "author": "Alice Oseman",
      "price": 27.49,
      "category": "Romance",
      "qty": 36
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/3494/9780349429458.jpg",
      "name": "Bridgerton: Romancing Mr Bridgerton (Bridgertons Book 4)",
      "author": "Julia Quinn",
      "price": 14.26,
      "category": "Romance",
      "qty": 26
    }
  ])

  //self-help
  db.getCollection('products').insertMany([
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/7850/9781785042188.jpg",
      "name": "Surrounded by Idiots",
      "author": "Thomas Erikson",
      "price": 17.18,
      "category": "Self-Help",
      "qty": ""
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4391/9781439199190.jpg",
      "name": "How to Win Friends and Influence People",
      "author": "Dale Carnegie",
      "price": 14.69,
      "category": "Self-Help",
      "qty": ""
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/0613/9780061339202.jpg",
      "name": "Flow",
      "author": "Mihaly Csikszentmihalyi",
      "price": 23.61,
      "category": "Self-Help",
      "qty": ""
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4091/9781409197744.jpg",
      "name": "How To Do The Work",
      "author": "Nicole Lepera",
      "price": 23.33,
      "category": "Self-Help",
      "qty": ""
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/7850/9781785042201.jpg",
      "name": "In the Realm of Hungry Ghosts",
      "author": "Dr Gabor Mate",
      "price": 20.9,
      "category": "Self-Help",
      "qty": ""
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/1019/9781101980385.jpg",
      "name": "It Didn't Start with You",
      "author": "Mark Wolynn",
      "price": 26.73,
      "category": "Self-Help",
      "qty": ""
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/2412/9780241283912.jpg",
      "name": "The Little Book of Hygge",
      "author": "Meik Wiking",
      "price": 24.64,
      "category": "Self-Help",
      "qty": ""
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1419/9780141983769.jpg",
      "name": "Why We Sleep",
      "author": "Matthew Walker",
      "price": 19.1,
      "category": "Self-Help",
      "qty": ""
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1431/9780143127741.jpg",
      "name": "The Body Keeps the Score",
      "author": "Bessel van der Kolk",
      "price": 24.42,
      "category": "Self-Help",
      "qty": ""
    },
    {
      "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/6836/9781683646686.jpg",
      "name": "No Bad Parts",
      "author": "Richard C. Schwartz",
      "price": 28.02,
      "category": "Self-Help",
      "qty": ""
    }
  ])


// Run a find command to view items sold on April 4th, 2014.
const salesOnApril4th = db.getCollection('sales').find({
    date: { $gte: new Date('2014-04-04'), $lt: new Date('2014-04-05') }
}).count();

// Print a message to the output window.
console.log(`${salesOnApril4th} sales occurred in 2014.`);

// Here we run an aggregation and open a cursor to the results.
// Use '.toArray()' to exhaust the cursor to return the whole result set.
// You can use '.hasNext()/.next()' to iterate through the cursor page by page.
db.getCollection('sales').aggregate([
    // Find all of the sales that occurred in 2014.
    { $match: { date: { $gte: new Date('2014-01-01'), $lt: new Date('2015-01-01') } } },
    // Group the total sales for each product.
    { $group: { _id: '$item', totalSaleAmount: { $sum: { $multiply: ['$price', '$quantity'] } } } }
]);

db.getCollection('products').distinct('category')
db.getCollection('Users').insertMany([
  {"fname":"Abdelrahman","lname":"Essmat","email":"abdo.essmat@gmail.com","password":"pass12345678","gender":"male"},
  {"fname":"zeyad","lname":"mahmoud","email":"Zey@gmail.com","password":"12345678","gender":"male"},
  {"fname":"Yasser","lname":"Fouad","email":"Yasser@gmail.com","password":"111","gender":"male"},
  {"fname":"Khaled","lname":"Shaaban","email":"khaled@gmail.com","password":"khaled123","gender":"male"}
])
*/
db.getCollection('products').find({ category: "Adventure" });