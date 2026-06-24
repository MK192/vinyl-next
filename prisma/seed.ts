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
      coverImage: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&auto=format&fit=crop&q=60",
      tracklist: ["So What", "Freddie Freeloader", "Blue in Green", "All Blues", "Flamenco Sketches"]
    },
    {
      title: "Rumours",
      artist: "Fleetwood Mac",
      price: 29.99,
      genre: "Rock",
      year: 1977,
      description: "A classic of the soft-rock era, Rumours is an album defined by its incredible songwriting and the interpersonal drama that fueled its creation.",
      coverImage: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&auto=format&fit=crop&q=60",
      tracklist: ["Second Hand News", "Dreams", "Never Going Back Again", "Don't Stop", "Go Your Own Way", "Songbird"]
    },
    {
      title: "Random Access Memories",
      artist: "Daft Punk",
      price: 42.99,
      genre: "Electronic",
      year: 2013,
      description: "A love letter to the era of analog synthesis and live instrumentation, Daft Punk's final studio album is a modern classic.",
      coverImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=60",
      tracklist: ["Give Life Back to Music", "The Game of Love", "Giorgio by Moroder", "Within", "Instant Crush", "Lose Yourself to Dance", "Get Lucky"]
    },
    {
      title: "A Love Supreme",
      artist: "John Coltrane",
      price: 31.99,
      genre: "Jazz",
      year: 1964,
      description: "One of the most important albums in the history of jazz, A Love Supreme is a spiritual journey through sound.",
      coverImage: "https://images.unsplash.com/photo-1525994886773-080587e161c2?w=800&auto=format&fit=crop&q=60",
      tracklist: ["Part I: Acknowledgement", "Part II: Resolution", "Part III: Pursuance", "Part IV: Psalm"]
    },
    {
      title: "The Dark Side of the Moon",
      artist: "Pink Floyd",
      price: 38.99,
      genre: "Rock",
      year: 1973,
      description: "A sonic masterpiece that explores themes of conflict, greed, time, and mental illness.",
      coverImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=60",
      tracklist: ["Speak to Me", "Breathe", "On the Run", "Time", "The Great Gig in the Sky", "Money", "Us and Them", "Any Colour You Like", "Brain Damage", "Eclipse"]
    }
  ]

  // Clear existing data to avoid duplicates and unique constraint violations
  await prisma.vinyl.deleteMany()
  await prisma.staff.deleteMany()

  for (const v of vinyls) {
    const vinyl = await prisma.vinyl.create({
      data: v,
    })
    console.log(`Created vinyl with id: ${vinyl.id}`)
  }

  await prisma.staff.create({
    data: {
      name: "Alex Reed",
      role: "Store Manager",
      email: "alex@vinylnext.com",
      bio: "Vinyl enthusiast and collector for over 20 years.",
    }
  })

  console.log('Seeding finished.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
