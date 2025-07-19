import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-hitech-black min-h-screen flex flex-col items-center justify-center text-hitech-offwhite">
      <h1 className="text-5xl font-bold mb-4">HI-TECH ELEX LLP</h1>
      <p className="text-lg max-w-xl text-center mb-6">
        Building smarter electrical and automation solutions with creativity and precision.
      </p>
      <button className="bg-hitech-orange hover:bg-hitech-teal text-white px-6 py-2 rounded-xl transition">
        Explore More
      </button>
    </div>
  );
}
