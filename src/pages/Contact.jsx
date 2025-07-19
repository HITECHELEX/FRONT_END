export default function Contact() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black">
      {/* 🔁 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      >
        <source src="/videos/BG_VIDEO.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 📬 Contact Form Overlay */}
      <div className="relative z-10 backdrop-blur-xl bg-white/8 border border-white/20 rounded-2xl shadow-2xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-white text-center mb-4 drop-shadow">
          📨 Contact Us
        </h2>

        <form className="grid gap-4 text-white">
          <div>
            <label className="block mb-1 font-medium">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-md px-3 py-1.5 bg-white/20 border border-white/30 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white/60"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-md px-3 py-1.5 bg-white/20 border border-white/30 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white/60"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Your Message</label>
            <textarea
              rows="3"
              placeholder="Write your message here..."
              className="w-full rounded-md px-3 py-1.5 bg-white/20 border border-white/30 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white/60"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black font-semibold py-2 rounded-md hover:bg-gray-100 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
