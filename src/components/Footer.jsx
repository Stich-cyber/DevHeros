import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex justify-center items-center gap-6 mb-8 text-sm">
          <a className="hover:text-[#13ecc8] transition-colors" href="#">
            About Us
          </a>
          <a className="hover:text-[#13ecc8] transition-colors" href="#">
            Contact
          </a>
          <a className="hover:text-[#13ecc8] transition-colors" href="#">
            Privacy Policy
          </a>
          <a className="hover:text-[#13ecc8] transition-colors" href="#">
            Terms of Service
          </a>
        </div>
        <div className="flex justify-center gap-6 mb-8">
          <a
            className="text-gray-400 hover:text-white transition-colors"
            href="#"
          >
            {/* Social SVGs */}
            <svg
              aria-hidden="true"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                clipRule="evenodd"
                d="M12.315 2c-5.204 0-9.42 4.216-9.42 9.42s4.216 9.42 9.42 9.42 9.42-4.216 9.42-9.42S17.519 2 12.315 2zM1.135 11.42c0-6.228 5.057-11.285 11.285-11.285s11.285 5.057 11.285 11.285-5.057 11.285-11.285 11.285S1.135 17.648 1.135 11.42zM12 8.25a.75.75 0 01.75.75v3.69l3.22 3.22a.75.75 0 01-1.06 1.06l-3.5-3.5a.75.75 0 01-.22-.53V9a.75.75 0 01.75-.75z"
                fillRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            className="text-gray-400 hover:text-white transition-colors"
            href="#"
          >
            <svg
              aria-hidden="true"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                clipRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                fillRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            className="text-gray-400 hover:text-white transition-colors"
            href="#"
          >
            <svg
              aria-hidden="true"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
            </svg>
          </a>
        </div>
        <p className="text-gray-400 text-sm">
          © 2024 Clinic Booking. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
