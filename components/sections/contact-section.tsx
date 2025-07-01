export function ContactSection() {
  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="space-y-6 bg-white p-6 rounded-2xl shadow-md">
            <div>
              <label className="block mb-1 font-semibold">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border rounded-md p-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border rounded-md p-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Message</label>
              <textarea
                placeholder="Your message..."
                className="w-full border rounded-md p-2 h-32"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="bg-white p-6 rounded-2xl shadow-md space-y-4">
            <h3 className="text-xl font-bold">Get in Touch</h3>
            <p className="text-gray-700">We’d love to hear from you!</p>
            <div>
              <strong>Email:</strong> contact@example.com
            </div>
            <div>
              <strong>Phone:</strong> +256 700 000 000
            </div>
            <div>
              <strong>Address:</strong> Kampala, Uganda
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
