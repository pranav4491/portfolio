"use client";

import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_beqgxsj", // Replace with your EmailJS service ID
        "template_fvir61c", // Replace with your EmailJS template ID
        formData,
        "CUSgkh6JeWFzBwfzg" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setStatus("Message sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  // Trigger animations when in view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <section ref={ref} className="min-h-screen bg-black text-white px-4 py-16 flex items-center justify-center">
      <div className="max-w-3xl text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>

        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 max-w-md mx-auto"
          initial="hidden"
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 25,
              },
            },
            hidden: {
              opacity: 0,
              y: 50,
            },
          }}
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-3 rounded-lg bg-darkRed text-white focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-3 rounded-lg bg-darkRed text-white focus:outline-none"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="p-3 rounded-lg bg-darkRed text-white focus:outline-none h-32"
            required
          />
          <button
            type="submit"
            className="bg-red-600 text-white py-3 rounded-lg transition-transform hover:scale-105"
          >
            Send Message
          </button>
        </motion.form>

        {status && <p className="mt-4 text-lg">{status}</p>}
      </div>
    </section>
  );
}
