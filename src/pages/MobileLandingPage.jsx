import React from "react";

function MobileLandingPage() {
  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-gray-50 text-gray-800"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3 text-gray-900">
            <div className="size-8 text-teal-400">
              <svg
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z"
                  fill="currentColor"
                ></path>
                <path
                  clipRule="evenodd"
                  d="M39.998 35.764C39.9944 35.7463 39.9875 35.7155 39.9748 35.6706C39.9436 35.5601 39.8949 35.4259 39.8346 35.2825C39.8168 35.2403 39.7989 35.1993 39.7813 35.1602C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832C8.17384 35.2075 8.16216 35.233 8.15052 35.2592C8.09919 35.3751 8.05721 35.4886 8.02977 35.589C8.00356 35.6848 8.00039 35.7333 8.00004 35.7388C8.00004 35.739 8 35.7393 8.00004 35.7388C8.00004 35.7641 8.0104 36.0767 8.68485 36.6314C9.34546 37.1746 10.4222 37.7531 11.9291 38.2772C14.9242 39.319 19.1919 40 24 40C28.8081 40 33.0758 39.319 36.0709 38.2772C37.5778 37.7531 38.6545 37.1746 39.3151 36.6314C39.9006 36.1499 39.9857 35.8511 39.998 35.764ZM4.95178 32.7688L21.4543 6.30267C22.6288 4.4191 25.3712 4.41909 26.5457 6.30267L43.0534 32.777C43.0709 32.8052 43.0878 32.8338 43.104 32.8629L41.3563 33.8352C43.104 32.8629 43.1038 32.8626 43.104 32.8629L43.1051 32.865L43.1065 32.8675L43.1101 32.8739L43.1199 32.8918C43.1276 32.906 43.1377 32.9246 43.1497 32.9473C43.1738 32.9925 43.2062 33.0545 43.244 33.1299C43.319 33.2792 43.4196 33.489 43.5217 33.7317C43.6901 34.1321 44 34.9311 44 35.7391C44 37.4427 43.003 38.7775 41.8558 39.7209C40.6947 40.6757 39.1354 41.4464 37.385 42.0552C33.8654 43.2794 29.133 44 24 44C18.867 44 14.1346 43.2794 10.615 42.0552C8.86463 41.4464 7.30529 40.6757 6.14419 39.7209C4.99695 38.7775 3.99999 37.4427 3.99999 35.7391C3.99999 34.8725 4.29264 34.0922 4.49321 33.6393C4.60375 33.3898 4.71348 33.1804 4.79687 33.0311C4.83898 32.9556 4.87547 32.8935 4.9035 32.8471C4.91754 32.8238 4.92954 32.8043 4.93916 32.7889L4.94662 32.777L4.95178 32.7688ZM35.9868 29.004L24 9.77997L12.0131 29.004C12.4661 28.8609 12.9179 28.7342 13.3617 28.6282C16.4281 27.8961 20.0901 27.4783 24 27.4783C27.9099 27.4783 31.5719 27.8961 34.6383 28.6282C35.082 28.7342 35.5339 28.8609 35.9868 29.004Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
            <h1 className="text-xl font-bold tracking-tight">Clinic Booking</h1>
          </div>
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <a className="hover:text-teal-400 transition-colors" href="#">
              Services
            </a>
            <a className="hover:text-teal-400 transition-colors" href="#">
              Doctors
            </a>
            <a className="hover:text-teal-400 transition-colors" href="#">
              Clinics
            </a>
            <a className="hover:text-teal-400 transition-colors" href="#">
              About Us
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="hidden lg:flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-4 bg-teal-400 text-gray-900 text-sm font-bold leading-normal tracking-wide hover:bg-opacity-90 transition-colors">
              <span className="truncate">Book Appointment</span>
            </button>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAfoahLzHfReDXqZ-ncQihjIhU5W_y9-ruw2YG-4UxUuNL-T4f9b-1RAyEcz3zgrgohxdcZhneg5Ox-du2_vtVKPXoaiOsxPQlo_y9eLugW7-kDR1XTon6sShrKe3l0eSIO_nJ6rgbUHiEPIU7ePbPDEvcnK1_x_5u7ygVRKtqYfJW4OZ8UBLTNkk__YO6FUDBME1Z6YKoPuwaH_BWY0e5Es7kO10UCJZl-H3N0L5MGxR0etet0lZLfI9e9DEC2KyeFMNtxG9vP")',
              }}
            ></div>
            <button className="lg:hidden text-gray-700">
              <span className="material-symbols-outlined"> menu </span>
            </button>
          </div>
        </header>
        <main className="flex-1">
          <section
            className="relative flex items-center justify-center text-white py-20 px-4 sm:px-6 lg:px-8 min-h-[60vh] bg-cover bg-center"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDBm4vnRAFPzbaEwzToB3Lsg52LviLeQS0slgmPr3QTJbOq4krZL16k1B-AUF8_GhApcSWkiQ2VTNfmUBLOv54X8lOOeeaid3zri9siY49XKQX7WpeGwJ-l_yowb3dLnmqvDdBtaTE4AwxLYCJ3BVPSg5mxtn7Mvt2ID15h6YTl-3zJBrhP1-NMNC77CmMM7jiBd4yY8h7BtidvTIE8Ag1s6s03VOeChs9u2G-3g63Qm5V7qYwJWPvJK3k8lUh1xuPe4CtYADMc")',
            }}
          >
            <div className="text-center max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                Your Health, Simplified
              </h1>
              <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
                Book appointments with top doctors in Uzbekistan, anytime,
                anywhere. Experience seamless healthcare at your fingertips.
              </p>
              <button className="mt-8 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-12 px-6 bg-teal-400 text-gray-900 text-base font-bold leading-normal tracking-wide hover:bg-opacity-90 transition-colors">
                <span className="truncate">Book Appointment</span>
              </button>
            </div>
          </section>
          <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                How It Works
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
                  <span className="material-symbols-outlined text-5xl text-teal-400 mb-4">
                    {" "}
                    search{" "}
                  </span>
                  <h3 className="text-xl font-bold">Find a Doctor</h3>
                </div>
                <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
                  <span className="material-symbols-outlined text-5xl text-teal-400 mb-4">
                    {" "}
                    calendar_month{" "}
                  </span>
                  <h3 className="text-xl font-bold">Book an Appointment</h3>
                </div>
                <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
                  <span className="material-symbols-outlined text-5xl text-teal-400 mb-4">
                    {" "}
                    health_and_safety{" "}
                  </span>
                  <h3 className="text-xl font-bold">Get Care</h3>
                </div>
              </div>
            </div>
          </section>
          <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Benefits</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center p-6">
                  <span className="material-symbols-outlined text-5xl text-teal-400 mb-4">
                    {" "}
                    schedule{" "}
                  </span>
                  <h3 className="text-xl font-bold">24/7 Access</h3>
                </div>
                <div className="flex flex-col items-center p-6">
                  <span className="material-symbols-outlined text-5xl text-teal-400 mb-4">
                    {" "}
                    forum{" "}
                  </span>
                  <h3 className="text-xl font-bold">Instant Consultations</h3>
                </div>
                <div className="flex flex-col items-center p-6">
                  <span className="material-symbols-outlined text-5xl text-teal-400 mb-4">
                    {" "}
                    payments{" "}
                  </span>
                  <h3 className="text-xl font-bold">Transparent Pricing</h3>
                </div>
              </div>
            </div>
          </section>
          <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                What Our Patients Say
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
                  <div
                    className="w-24 h-24 bg-center bg-no-repeat aspect-square bg-cover rounded-full flex-shrink-0 mx-auto mb-4"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCaayGtko2D0vOmrxTrKepUtb435msQFVt_-oiAt2XPBil5dFzAnvfrsoFWdiqvg_eri0lOMa0eIAMrCG42Yyqhr5dK_1RiKthDhQjBwhx-kUi87xcVqkm18XjP68UPY3E92YuV0mF5PHkyoElI409N--p4URk2BIJ6ZbWWkGU7RY6WRjx1k-pUA4kM8SceOV1qEBb7rVKEl_7yb2wTrdZxtWMzlN9tkAmUVhoqn3rpEuCLftsekfszgrW4R4G4arvPLyq6AfFl")',
                    }}
                  ></div>
                  <blockquote className="text-gray-600 text-center flex-grow">
                    "The app made it so easy to find a doctor and book an
                    appointment. Highly recommend!"
                  </blockquote>
                  <p className="text-center font-bold mt-4">Aisha K.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
                  <div
                    className="w-24 h-24 bg-center bg-no-repeat aspect-square bg-cover rounded-full flex-shrink-0 mx-auto mb-4"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAgmZAYzd7JqGC802cdUpKcWdRkBl1lALy-fO-gGCKddXvYQQbrMh1jvysz3xDeFtcvwQHXH4X4kHpByyyPIRqnZp00MYMVTPbdnAyYU2XaB269NWtYD7y3iBZ7Iszc6CJG5gregW3CB47WoCLd8FwxBonaVhcZ8rvRpJTQlCh_lqFbH4seD8oP8LjFeIRsO_I93gpgcxPr6GmqU5B76deaDCHY4t89cbg0Myx052P9-e87OionpQlrNkGViiG7BlVFdJvGLAsY")',
                    }}
                  ></div>
                  <blockquote className="text-gray-600 text-center flex-grow">
                    "I was able to get a consultation quickly and efficiently.
                    Great service!"
                  </blockquote>
                  <p className="text-center font-bold mt-4">Jamshid R.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
                  <div
                    className="w-24 h-24 bg-center bg-no-repeat aspect-square bg-cover rounded-full flex-shrink-0 mx-auto mb-4"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDakJveBLq5CagxZNwfj-V3voyQiBQpRsoaoGZWuoj3J4rG05LV-Y9cRt5Dle1LFU0iX2N5_QG-FbwCw3k4P0w5dLQcrw2TrwLqWjFtl2ieIFwFk8Mctoj-_WgDH8ZjvWL4sGzajvB0M6I-vZaw9PIcGRQgspf5F50YOU5mo6QQiXxFqdUx-FVZ-HF2uamUJoUYxGEQbfFcGF3W2gjvn7UE_ifAZ6VOLkYrRDKwGygEQ6KoJPhtuMi6hlFC93hkJy3inA9TcLCR")',
                    }}
                  ></div>
                  <blockquote className="text-gray-600 text-center flex-grow">
                    "The transparent pricing helped me choose the right doctor
                    within my budget."
                  </blockquote>
                  <p className="text-center font-bold mt-4">Nargiza S.</p>
                </div>
              </div>
            </div>
          </section>
          <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <details className="group bg-gray-50 p-4 rounded-lg">
                  <summary className="flex cursor-pointer items-center justify-between font-medium">
                    How do I book an appointment?
                    <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">
                      {" "}
                      expand_more{" "}
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-2">
                    Simply search for a doctor or clinic, choose a convenient
                    time slot, and confirm your booking. It's that easy!
                  </p>
                </details>
                <details className="group bg-gray-50 p-4 rounded-lg">
                  <summary className="flex cursor-pointer items-center justify-between font-medium">
                    Can I see a doctor online?
                    <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">
                      {" "}
                      expand_more{" "}
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-2">
                    Yes, we offer online consultations with many of our
                    registered doctors. Look for the "Online Consultation"
                    option when booking.
                  </p>
                </details>
                <details className="group bg-gray-50 p-4 rounded-lg">
                  <summary className="flex cursor-pointer items-center justify-between font-medium">
                    What payment methods are accepted?
                    <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">
                      {" "}
                      expand_more{" "}
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-2">
                    We accept various payment methods including credit/debit
                    cards and local payment systems for your convenience.
                  </p>
                </details>
              </div>
            </div>
          </section>
        </main>
        <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex justify-center items-center gap-6 mb-8 text-sm">
              <a className="hover:text-teal-400 transition-colors" href="#">
                About Us
              </a>
              <a className="hover:text-teal-400 transition-colors" href="#">
                Contact
              </a>
              <a className="hover:text-teal-400 transition-colors" href="#">
                Privacy Policy
              </a>
              <a className="hover:text-teal-400 transition-colors" href="#">
                Terms of Service
              </a>
            </div>
            <div className="flex justify-center gap-6 mb-8">
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
      </div>
    </div>
  );
}

export default MobileLandingPage;
