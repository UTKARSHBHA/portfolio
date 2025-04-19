import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="px-6 md:px-20 py-16 bg-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Contact Me
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Got a question, project idea, or just want to say hi? Reach out!
        </p>

        <form
          action="https://formspree.io/f/YOUR_FORM_ID" // Replace this
          method="POST"
          className="grid gap-6 text-left"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded-lg border border-gray-300 focus:outline-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded-lg border border-gray-300 focus:outline-blue-500"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className="p-3 rounded-lg border border-gray-300 focus:outline-blue-500"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 flex justify-center gap-6">
          <a
            href="mailto:youremail@example.com"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            📧 Email
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            💻 GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            💼 LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
