import React from "react";

const Contact = () => {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-colors duration-300">
          <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
            Let’s Keep In Touch
          </h2>
          <form className="space-y-5">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-md placeholder-gray-400 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-gray-200"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-md placeholder-gray-400 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-gray-200"
              />
            </div>
            <textarea
              placeholder="Your message..."
              className="w-full p-3 h-40 border border-gray-300 dark:border-gray-600 rounded-md placeholder-gray-400 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-gray-200"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white font-semibold py-3 rounded-lg hover:bg-yellow-600 transition"
            >
              SEND MESSAGE NOW
            </button>
          </form>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg">
  
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.670742883358!2d-43.36343382490898!3d-22.999132079190108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda484fa634bd%3A0xd108c89afb06b53d!2sNew%20York%20City%20Center!5e0!3m2!1sen!2sus!4v1755522890627!5m2!1sen!2sus"
            width="100%"
            height="100%"
            className="min-h-[400px] w-full"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
