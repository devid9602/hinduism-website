import { motion } from "framer-motion";
import { Book, Sun, Heart, Flower, Youtube } from "lucide-react";

export default function HinduismSpirituality() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 via-yellow-100 to-pink-100">
      {/* Hero Section */}
      <header className="relative w-full h-[90vh] flex flex-col justify-center items-center text-center p-8 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')] bg-cover bg-center">
        <motion.div
          className="absolute inset-0 bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg"
        >
          Blossom Within
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative mt-6 text-lg md:text-2xl max-w-2xl text-white/90"
        >
          Discover ancient Hindu wisdom and spiritual practices for inner peace and growth.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8"
        >
          <a
            href="https://www.youtube.com/@Blossomwithincreations"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full shadow-lg text-lg font-semibold"
          >
            <Youtube className="mr-2 h-6 w-6" />
            Explore on YouTube
          </a>
        </motion.div>
      </header>

      {/* About Section */}
      <section className="py-20 px-8 md:px-24 text-center">
        <h2 className="text-4xl font-semibold text-orange-800 mb-8">About Hinduism</h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
          Hinduism, a timeless way of life, weaves philosophy, devotion, and spiritual practices to guide you toward self-realization, karma, and dharma.
        </p>
      </section>

      {/* Teachings Section */}
      <section className="py-20 px-8 md:px-24 bg-yellow-50/50">
        <h2 className="text-4xl font-semibold text-orange-800 text-center mb-12">
          Core Teachings & Practices
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: <Book className="h-12 w-12 text-orange-600 mb-4" />, title: "Sacred Texts", desc: "The Vedas, Upanishads, and Bhagavad Gita offer profound spiritual insights." },
            { icon: <Flower className="h-12 w-12 text-orange-600 mb-4" />, title: "Meditation", desc: "Yoga and dhyana foster mindfulness, focus, and inner harmony." },
            { icon: <Heart className="h-12 w-12 text-orange-600 mb-4" />, title: "Bhakti", desc: "Express love for the divine through prayer, music, and rituals." },
            { icon: <Sun className="h-12 w-12 text-orange-600 mb-4" />, title: "Dharma", desc: "Live righteously by embracing truth, duty, and compassion." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 p-6 flex flex-col items-center text-center bg-white/90"
            >
              {item.icon}
              <h3 className="font-semibold text-xl text-orange-700 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* YouTube Section */}
      <section className="py-20 px-8 md:px-24 text-center bg-gradient-to-r from-orange-100 to-pink-100">
        <h2 className="text-4xl font-semibold text-orange-800 mb-8">Join Blossom Within on YouTube</h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg mb-8">
          Dive deeper into Hindu spirituality with guided meditations, teachings, and rituals on our YouTube channel.
        </p>
        <motion.a
          href="https://www.youtube.com/@Blossomwithincreations"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full shadow-lg text-lg font-semibold"
        >
          <Youtube className="mr-2 h-6 w-6" />
          Subscribe Now
        </motion.a>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center bg-orange-700 text-white">
        <p className="mb-2">© {new Date().getFullYear()} Blossom Within | Guided by Eternal Wisdom</p>
        <a
          href="https://www.youtube.com/@Blossomwithincreations"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-white hover:text-yellow-200"
        >
          <Youtube className="mr-2 h-5 w-5" />
          Follow us on YouTube
        </a>
      </footer>
    </div>
  );
}
