import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  console.log('Start seeding...')

  const vinyls = [
    {
      title: "Kind of Blue",
      artist: "Miles Davis",
      price: 34.99,
      genre: "Jazz",
      year: 1959,
      description: "The best-selling jazz album of all time, and for good reason. Miles Davis's masterpiece is a testament to the power of modal jazz.",
      coverImage: "https://upload.wikimedia.org/wikipedia/en/thumb/1/10/Miles_Davis_-_Kind_of_Blue_album_cover.jpg/250px-Miles_Davis_-_Kind_of_Blue_album_cover.jpg",
      tracklist: ["So What", "Freddie Freeloader", "Blue in Green", "All Blues", "Flamenco Sketches"]
    },
    {
      title: "Rumours",
      artist: "Fleetwood Mac",
      price: 29.99,
      genre: "Rock",
      year: 1977,
      description: "A classic of the soft-rock era, Rumours is an album defined by its incredible songwriting and the interpersonal drama that fueled its creation.",
      coverImage: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/FMacRumours.PNG/250px-FMacRumours.PNG",
      tracklist: ["Second Hand News", "Dreams", "Never Going Back Again", "Don't Stop", "Go Your Own Way", "Songbird"]
    },
    {
      title: "Random Access Memories",
      artist: "Daft Punk",
      price: 42.99,
      genre: "Electronic",
      year: 2013,
      description: "A love letter to the era of analog synthesis and live instrumentation, Daft Punk's final studio album is a modern classic.",
      coverImage: "https://upload.wikimedia.org/wikipedia/en/thumb/2/26/Daft_Punk_-_Random_Access_Memories.png/250px-Daft_Punk_-_Random_Access_Memories.png",
      tracklist: ["Give Life Back to Music", "The Game of Love", "Giorgio by Moroder", "Within", "Instant Crush", "Lose Yourself to Dance", "Get Lucky"]
    },
    {
      title: "A Love Supreme",
      artist: "John Coltrane",
      price: 31.99,
      genre: "Jazz",
      year: 1964,
      description: "One of the most important albums in the history of jazz, A Love Supreme is a spiritual journey through sound.",
      coverImage: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/John_Coltrane_-_A_Love_Supreme.jpg/250px-John_Coltrane_-_A_Love_Supreme.jpg",
      tracklist: ["Part I: Acknowledgement", "Part II: Resolution", "Part III: Pursuance", "Part IV: Psalm"]
    },
    {
      title: "The Dark Side of the Moon",
      artist: "Pink Floyd",
      price: 38.99,
      genre: "Rock",
      year: 1973,
      description: "A sonic masterpiece that explores themes of conflict, greed, time, and mental illness.",
      coverImage: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Dark_Side_of_the_Moon.png/250px-Dark_Side_of_the_Moon.png",
      tracklist: ["Speak to Me", "Breathe", "On the Run", "Time", "The Great Gig in the Sky", "Money", "Us and Them", "Any Colour You Like", "Brain Damage", "Eclipse"]
    },
    {
      title: "Revolver",
      artist: 'The Beatles',
      price: 35.54,
      genre: 'Rock',
      year: 1966,
      coverImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Revolver_%28album_cover%29.jpg/250px-Revolver_%28album_cover%29.jpg',
      description: 'One of the most iconic albums of all time, pushing the boundaries of what was possible in rock music',
      tracklist: ["Taxman", "Eleanor Rigby", "I'm Only Sleeping", "Love You To", "Here, There and Everywhere", "Yellow Submarine", "She Said She Said", "Good Day Sunshine", "For No One", "Dr. Robert", "I Want to Tell You", "Got to Get You into My Life", "Tomorrow Never Knows"]
    }, {
      title: 'Let it bleed',
      artist: 'Rolling Stones',
      price: 37.99,
      genre: 'Rock',
      year: 1969,
      description: 'The Stones deliver an album filled with grit, swagger, and timeless rock and roll.',
      coverImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/LetitbleedRS.jpg/250px-LetitbleedRS.jpg',
      tracklist: ["Gimme Shelter", "Love In Vain", "Country Honky", "Live With Me", "Midnight Rambler", "You Got to Move", "Broken Hearts", "Salt of the Earth"]
    },
    {
      title: 'Discovery',
      artist: 'Daft Punk',
      price: 41.99,
      genre: 'Electronic',
      year: 2001,
      description: "Daft Punk's second studio album, featuring a synth-pop and house sound that defined the early 2000s electronic music scene.",
      coverImage: 'https://upload.wikimedia.org/wikipedia/en/2/27/Daft_Punk_-_Discovery.png?_=20220309212602',
      tracklist: ["One More Time", "Aerodynamic", "Digital Love", "Harder, Better, Faster, Stronger", "Crescendolls", "Nightvision", "Superheroes", "Something About Us", "Voyager", "Veridis Quo", "Short Circuit", "Face to Face", "Too Long"]
    }, {
      title: 'Disraeli Gears',
      artist: 'Cream',
      price: 35.22,
      genre: 'Rock',
      year: 1967,
      description: 'The debut studio album by the British rock band Cream',
      coverImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/DisraeliGears.jpg/250px-DisraeliGears.jpg',
      tracklist: ["Strange Brew", "Sunshine of Your Love", "World of Pain", "Dance the Night Away", "Blue Condition", "Tales of Brave Ulysses",
        "SWLABR", "We're Going Wrong", "Outside Woman Blues", "Take It Back", "Mother's Lament"]
    },
    {
      title: 'The Fat of the land',
      artist: 'The Prodigy',
      price: 42.99,
      genre: 'Electronic',
      year: 1997,
      description: "The third studio album by English electronic dance music group the Prodigy, featuring aggressive, industrial electronic beats.",
      coverImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/TheProdigy-TheFatOfTheLand.jpg/250px-TheProdigy-TheFatOfTheLand.jpg',
      tracklist: ["Smack My Bitch Up", "Breathe", "Diesel Power", "Funky Shit", "Serial Thrilla", "Mindfields", "Firestarter", "Climbatize", "Fuel My Fire", "Serial Thrilla"]
    },
    {
      title: 'The Velvet Underground & Nico',
      artist: 'The Velvet Underground & Nico',
      price: 29.99,
      genre: 'Rock',
      year: 1967,
      description: 'A landmark album in the history of rock music, featuring avant-garde influences and experimental instrumentation.',
      coverImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Velvet_Underground_and_Nico.jpg/250px-Velvet_Underground_and_Nico.jpg',
      tracklist: ["Sunday Morning", "I'm Waiting for the Man", "Femme Fatale", "Venus in Furs", "Run Run Run", "All Tomorrow's Parties",
        "Heroin", "There She Goes Again", "I'll Be Your Mirror", "The Black Angel's Death Song", "European Son"]
    }
  ]

  // // Clear existing data to avoid duplicates and unique constraint violations
  // await prisma.vinyl.deleteMany()
  // await prisma.staff.deleteMany()

  for (const v of vinyls) {
    // Since title is not unique in the database schema, we search for a matching record first
    const existingVinyl = await prisma.vinyl.findFirst({
      where: {
        title: v.title,
        artist: v.artist,
      },
    })

    if (existingVinyl) {
      const vinyl = await prisma.vinyl.update({
        where: { id: existingVinyl.id },
        data: v,
      })
      console.log(`Updated vinyl: ${vinyl.title}`)
    } else {
      const vinyl = await prisma.vinyl.create({
        data: v,
      })
      console.log(`Created vinyl with id: ${vinyl.id}`)
    }
  }

  // Seed staff using upsert since email is unique
  // await prisma.staff.upsert({
  //   where: { email: "alex@vinylnext.com" },
  //   update: {
  //     name: "Alex Reed",
  //     role: "Store Manager",
  //     bio: "Vinyl enthusiast and collector for over 20 years.",
  //   },
  //   create: {
  //     name: "Alex Reed",
  //     role: "Store Manager",
  //     email: "alex@vinylnext.com",
  //     bio: "Vinyl enthusiast and collector for over 20 years.",
  //   },
  // })

  // console.log('Seeding finished.')
}
main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
