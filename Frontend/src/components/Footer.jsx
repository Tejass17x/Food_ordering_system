function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">

      <div className="
        max-w-7xl
        mx-auto
        px-6
        py-12
        grid
        grid-cols-1
        md:grid-cols-4
        gap-10
      ">


        {/* Brand */}

        <div>

          <h1 className="
            text-3xl
            font-bold
            text-orange-500
            mb-4
          ">
            Foodie 🍔
          </h1>


          <p className="
            text-gray-400
            leading-relaxed
          ">
            Discover delicious food from your favorite restaurants.
            Order fresh meals anytime, anywhere.
          </p>


        </div>





        {/* Quick Links */}

        <div>

          <h2 className="
            text-xl
            font-bold
            mb-4
          ">
            Quick Links
          </h2>


          <ul className="
            space-y-3
            text-gray-400
          ">

            <li className="hover:text-orange-500 cursor-pointer">
              Home
            </li>

            <li className="hover:text-orange-500 cursor-pointer">
              Restaurants
            </li>

            <li className="hover:text-orange-500 cursor-pointer">
              Offers
            </li>

            <li className="hover:text-orange-500 cursor-pointer">
              Contact
            </li>


          </ul>

        </div>






        {/* Services */}

        <div>

          <h2 className="
            text-xl
            font-bold
            mb-4
          ">
            Services
          </h2>


          <ul className="
            space-y-3
            text-gray-400
          ">

            <li>
              Fast Delivery 🚴
            </li>

            <li>
              Quality Food 🍕
            </li>

            <li>
              Secure Payment 💳
            </li>

            <li>
              24/7 Support 📞
            </li>


          </ul>

        </div>






        {/* Contact */}

        <div>

          <h2 className="
            text-xl
            font-bold
            mb-4
          ">
            Contact
          </h2>


          <p className="text-gray-400 mb-3">
            📍 Nashik, Maharashtra
          </p>


          <p className="text-gray-400 mb-3">
            📧 support@foodie.com
          </p>


          <p className="text-gray-400">
            📞 +91 98765 43210
          </p>


        </div>


      </div>





      {/* Bottom */}

      <div className="
        border-t
        border-gray-700
        py-5
        text-center
        text-gray-400
      ">

        © {new Date().getFullYear()} Foodie. All Rights Reserved.

      </div>


    </footer>
  );
}


export default Footer;