import React from "react";

const Contact = () => {
  return (
    <>
      <div className="w-10/12 sm:w-8/12 lg:w-10/12 mx-auto mb-5 sm:mb-10 md:mb-16">
        <h2 className="text-center mb-16 text-2xl sm:text-4xl font-serif font-medium">
          Contact Me
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <figure className="h-full">
              <img
                src="https://elements-cover-images-0.imgix.net/d268051a-b156-4d23-8b02-41ce52312e35?auto=compress%2Cformat&w=900&fit=max&s=d681f88864fd47dcc6caab4372f6fe02"
                alt="family_shop"
                className="w-full h-full object-cover"
              />
            </figure>
          </div>
          <div>
            <form
              action="https://formspree.io/f/xbjnoobb"
              method="POST"
              className="flex flex-col"
            >
              <input
                type="text"
                name="text"
                autoComplete="off"
                placeholder="Name"
                className="outline-none border-2 border-[#898686] rounded-md px-5 placeholder:text-black text-sm h-12 mb-5"
              />
              <input
                type="email"
                name="email"
                autoComplete="off"
                placeholder="Email"
                className="outline-none border-2 border-[#898686] rounded-md px-5 placeholder:text-black text-sm h-12 mb-5"
              />
              <input
                type="number"
                name="number"
                autoComplete="off"
                placeholder="Phone Number"
                className="outline-none border-2 border-[#898686] rounded-md px-5 placeholder:text-black text-sm h-12 mb-5"
              />
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Message"
                className="border-2 border-[#898686] rounded-md px-5 py-3 placeholder:text-black resize-none mb-6 outline-none"
              />
              <div>
                <input
                  type="submit"
                  value="Send"
                  className="bg-[#ff9f43] px-16 py-3 outline-none border-2 border-[#ff9f43] hover:bg-transparent duration-300 rounded-md"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* MAP_IMAGE */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58311.63759435839!2d90.23983435820311!3d24.014226500000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755dd9abfac8dc1%3A0x52807671edd88246!2sbd%20shop%20online%20shopping!5e0!3m2!1sen!2sbd!4v1710694987277!5m2!1sen!2sbd"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default Contact;
