import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          Get in <span className="text-blue-600">Touch</span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          Have questions or want to work with us? Reach out using the form below or our contact info.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Form */}
          <form
            data-aos="fade-left"
            className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 space-y-4"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6 text-left">
            <div data-aos="fade-right">
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="flex items-center gap-2 text-gray-600">
                <FaMapMarkerAlt /> 123 RealEstate St, Cairo, Egypt
              </p>
            </div>
            <div data-aos="fade-right" data-aos-delay="100">
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="flex items-center gap-2 text-gray-600">
                <FaPhoneAlt /> +20 123 456 789
              </p>
            </div>
            <div data-aos="fade-right" data-aos-delay="200">
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="flex items-center gap-2 text-gray-600">
                <FaEnvelope /> info@realestate.com
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
