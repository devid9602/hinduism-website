import { motion } from "framer-motion";
import { Book, Sun, Heart, Flower, PlayCircle, Users, Mail } from "lucide-react";

export default function BlossomWithinWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 via-yellow-50 to-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md fixed w-full top-0 z-50">
        <h1 className="text-2xl font-bold text-orange-700">Blossom Within Creations</h1>
        <ul className="flex space-x-6 font-medium text-gray-700">
          <li><a href="#home" className="hover:text-orange-600">Home</a></li>
          <li><a href="#about" className="hover:text-orange-600">About</a></li>
          <li><a href="#teachings" className="hover:text-orange-600">Teachings</a></li>
          <li><a href="#blog" className="hover:text-orange-600">Blog</a></li>
          <li><a href="#meditations" className="hover:text-orange-600">Meditations</a></li>
          <li><a href="#resources" className="hover:text-orange-600">Resources</a></li>
          <li><a href="#community" className="hover:text-orange-600">Community</a></li>
          <li><a href="#contact" className="hover:text-orange-600">Contact</a></li>
        </ul>
      </nav>

      {/* Home Section */}
      <header id="home" className="relative w-full h-[90vh] flex flex-col justify-center items-center text-center p-8 pt-32">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold text-orange-700 drop-shadow-md"
        >
          Blossom Within Creations
        </motion.h1>
        <p className="mt-6 text-lg md:text-2xl max-w-2xl text-gray-700">
          Discover Ancient Wisdom for Modern Living
        </p>
        <div className="mt-8">
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-2xl shadow-lg text-lg font-semibold">
            Watch Our Videos
          </button>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 px-8 md:px-20 text-center">
        <h2 className="text-4xl font-semibold text-orange-700 mb-6">About Us</h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg">
          Blossom Within Creations is dedicated to guiding seekers toward self-awareness,
          spiritual clarity, and inner growth. Through our videos and content, we explore
          Hindu philosophy, mantras, meditation, and devotion in a way that resonates
          with the modern world.
        </p>
      </section>

      {/* Teachings Section */}
      <section id="teachings" className="py-20 px-8 md:px-20 bg-orange-50">
        <h2 className="text-4xl font-semibold text-orange-700 text-center mb-12">Core Teachings & Practices</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[{ icon: <Book className="h-12 w-12 text-orange-600 mb-4" />, title: "Philosophical Schools", desc: "Charvaka, Nyaya, Agam & Nigam explained simply." },
            { icon: <Flower className="h-12 w-12 text-orange-600 mb-4" />, title: "Meditation", desc: "Guided meditation practices for inner peace and clarity." },
            { icon: <Heart className="h-12 w-12 text-orange-600 mb-4" />, title: "Bhakti", desc: "Devotion and spiritual love through rituals, chants, and mantras." },
            { icon: <Sun className="h-12 w-12 text-orange-600 mb-4" />, title: "Dharma", desc: "Living truthfully, compassionately, and righteously." }]
            .map((item, i) => (
              <div key={i} className="rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col items-center text-center bg-white">
                {item.icon}
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-8 md:px-20">
        <h2 className="text-4xl font-semibold text-orange-700 text-center mb-12">Blog</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["Charvaka in Modern Times", "Nyaya Logic for Spiritual Growth", "Agam vs Nigam: Inner vs Outer Channels"]
            .map((title, i) => (
              <div key={i} className="rounded-2xl shadow-md hover:shadow-xl transition p-6 bg-white">
                <h3 className="font-semibold text-xl mb-2 text-orange-700">{title}</h3>
                <p className="text-gray-600">Read more about {title.toLowerCase()} and how it relates to everyday spirituality.</p>
                <button className="mt-4 flex items-center text-orange-600 font-medium">
                  <PlayCircle className="h-5 w-5 mr-2" /> Read More
                </button>
              </div>
          ))}
        </div>
      </section>

      {/* Meditations Section */}
      <section id="meditations" className="py-20 px-8 md:px-20 bg-orange-50 text-center">
        <h2 className="text-4xl font-semibold text-orange-700 mb-6">Meditations & Practices</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Explore guided meditations, mantra recitation guides, and reflective practices to
          cultivate mindfulness and spiritual harmony.
        </p>
        <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl shadow-lg text-lg font-semibold">
          Explore Meditations
        </button>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-20 px-8 md:px-20">
        <h2 className="text-4xl font-semibold text-orange-700 text-center mb-12">Resources</h2>
        <ul className="list-disc max-w-2xl mx-auto text-left text-gray-700 space-y-3">
          <li>Bhagavad Gita – reliable translations and interpretations</li>
          <li>Upanishads – wisdom of the ancient rishis</li>
          <li>Mantra Sagar – complete mantra compendiums explained</li>
          <li>Nyaya Sutras – logic and philosophy for seekers</li>
        </ul>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 px-8 md:px-20 bg-orange-50 text-center">
        <h2 className="text-4xl font-semibold text-orange-700 mb-6">Join Our Community</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Follow us on social platforms, share your reflections, and become part of our
          growing spiritual community.
        </p>
        <button className="flex items-center bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl shadow-lg text-lg font-semibold mx-auto">
          <Users className="h-5 w-5 mr-2" /> Join Now
        </button>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 md:px-20 text-center">
        <h2 className="text-4xl font-semibold text-orange-700 mb-6">Contact Us</h2>
        <p className="text-gray-700 mb-6">Have questions or suggestions? Reach out to us.</p>
        <button className="flex items-center bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl shadow-lg text-lg font-semibold mx-auto">
          <Mail className="h-5 w-5 mr-2" /> Get in Touch
        </button>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center bg-orange-600 text-white mt-16">
        <p>© {new Date().getFullYear()} Blossom Within Creations | Guided by Eternal Wisdom</p>
      </footer>
    </div>
  );
}
