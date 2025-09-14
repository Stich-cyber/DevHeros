import React from "react";

function ClinicBookingLandingPage() {
  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col bg-white overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-gray-200 px-10 py-4">
          <div className="flex items-center gap-3 text-gray-800">
            <svg
              className="h-8 w-8 text-teal-500"
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"
                fill="currentColor"
              ></path>
            </svg>
            <h2 className="text-2xl font-bold leading-tight tracking-tighter text-gray-900">
              Shifo Topish
            </h2>
          </div>
          <div className="flex flex-1 justify-end gap-6 items-center">
            <div className="hidden md:flex items-center gap-8">
              <a
                className="text-gray-600 hover:text-gray-900 text-base font-medium leading-normal"
                href="#"
              >
                Clinics
              </a>
              <a
                className="text-gray-600 hover:text-gray-900 text-base font-medium leading-normal"
                href="#"
              >
                Doctors
              </a>
              <a
                className="text-gray-600 hover:text-gray-900 text-base font-medium leading-normal"
                href="#"
              >
                Services
              </a>
              <a
                className="text-gray-600 hover:text-gray-900 text-base font-medium leading-normal"
                href="#"
              >
                About Us
              </a>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-11 px-6 bg-teal-400 hover:bg-teal-500 text-gray-900 text-base font-bold leading-normal tracking-wide shadow-sm transition-all duration-300">
                <span className="truncate">Book Now</span>
              </button>
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-11 bg-gray-100 hover:bg-gray-200 text-gray-700 gap-2 text-base font-bold leading-normal tracking-wide min-w-0 px-3 transition-all duration-300">
                <span className="material-symbols-outlined"> language </span>
              </button>
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-11 border-2 border-white shadow-md"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzWVdEBS1GuLkkBx-I5hcPi0PUkacRlt-nrwUJgRNk9nRiyHrA1-YUlXo73xcwH4vPVXdfBxDbr4G9iVrntyViKh8HnpevvEXK5T2W1MCru7lPeTKIEwDSYDVpdCnslmiUQUO3lAE5jQGevOno4Hljn1cNj6VgLmmXgFc3R9cL0mmhhfQhUawH5jZMdicNHrXZrBHsSEukjkujEEfIep6X_ES0c6XeWDEInj4aNQwmL3QM906JZFdhQb6wtxHcZsfgXx1fb65a")',
                }}
              ></div>
            </div>
          </div>
        </header>
        <div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-10">
          <div className="layout-content-container flex flex-col max-w-5xl flex-1 gap-16">
            <div className="@container">
              <div className="p-0 md:p-4">
                <div
                  className="flex min-h-[520px] flex-col gap-8 rounded-2xl bg-cover bg-center bg-no-repeat items-start justify-center px-6 md:px-12"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.1) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBIuAozJgpcOZCBJjhNlPxIn8wuVjgTYG-t6KGF_wurbpsticSEpUUZDmMqEL2do_oS7tHdVAyI5rnGjvFkscub87Xym_n0-0CO4n3t-T59mCJH_T7Iqscz1qYnZpMMXyF6rNZuCGjXcAA2_QvlwAsmc5rHwQ6eixgH0Ttaj-mJq3rMZ9Lq-ToICxg03oA9vIvek6gj9KwN0j-fFvJxmoxHtGzP5OiKiMmeLwcWX6Sj3_aNHdY7aF8GtCxVBIfrE7kUHSJVqEUv")',
                  }}
                >
                  <div className="flex flex-col gap-4 text-left max-w-lg">
                    <h1 className="text-white text-5xl md:text-6xl font-black leading-tight tracking-tighter">
                      Navbatlarsiz. Shifokoringizni Onlayn Bron Qiling.
                    </h1>
                    <h2 className="text-gray-200 text-base md:text-lg font-normal leading-relaxed">
                      O‘zbekistondagi klinikalarda uzoq kutishdan
                      charchadingizmi? Shifo Topish sizni eng yaxshi shifokorlar
                      va klinikalar bilan bog'laydigan uzluksiz onlayn bron
                      qilish tajribasini taklif etadi.
                    </h2>
                  </div>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-teal-400 hover:bg-teal-500 text-gray-900 text-lg font-bold leading-normal tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <span className="truncate">Book a Doctor Online</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 text-center">
              <h2 className="text-gray-800 text-4xl font-bold leading-tight tracking-tight">
                Qanday ishlaydi
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Sog'ligingizni nazorat qilish oson. Uch oddiy qadamda shifokor
                qabuliga yoziling.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                <div className="flex flex-col items-center gap-4 rounded-xl border border-gray-100 bg-white p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-teal-100 text-teal-600 p-4 rounded-full">
                    <span className="material-symbols-outlined text-4xl">
                      {" "}
                      apartment{" "}
                    </span>
                  </div>
                  <h3 className="text-gray-900 text-xl font-bold leading-tight">
                    Klinikani tanlang
                  </h3>
                  <p className="text-gray-500 text-base">
                    O'zingizga qulay bo'lgan klinikani toping.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-4 rounded-xl border border-gray-100 bg-white p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-teal-100 text-teal-600 p-4 rounded-full">
                    <span className="material-symbols-outlined text-4xl">
                      {" "}
                      stethoscope{" "}
                    </span>
                  </div>
                  <h3 className="text-gray-900 text-xl font-bold leading-tight">
                    Shifokorni tanlang
                  </h3>
                  <p className="text-gray-500 text-base">
                    Mutaxassislarimiz orasidan o'zingizga mosini tanlang.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-4 rounded-xl border border-gray-100 bg-white p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-teal-100 text-teal-600 p-4 rounded-full">
                    <span className="material-symbols-outlined text-4xl">
                      {" "}
                      event_available{" "}
                    </span>
                  </div>
                  <h3 className="text-gray-900 text-xl font-bold leading-tight">
                    Vaqtni tanlang
                  </h3>
                  <p className="text-gray-500 text-base">
                    Siz uchun eng qulay vaqtni belgilang.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 text-center">
              <h2 className="text-gray-800 text-4xl font-bold leading-tight tracking-tight">
                Afzalliklarimiz
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Biz bilan vaqtingizni va pulingizni tejang, sog'ligingizni oson
                boshqaring.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
                <div className="flex flex-col gap-4 rounded-xl bg-gray-50 p-6">
                  <span className="material-symbols-outlined text-3xl text-teal-500">
                    {" "}
                    savings{" "}
                  </span>
                  <h3 className="text-gray-900 text-lg font-bold leading-tight">
                    Vaqtni Tejang
                  </h3>
                  <p className="text-gray-500 text-base">
                    Klinikada navbat kutishga vaqt sarflamang.
                  </p>
                </div>
                <div className="flex flex-col gap-4 rounded-xl bg-gray-50 p-6">
                  <span className="material-symbols-outlined text-3xl text-teal-500">
                    {" "}
                    group_off{" "}
                  </span>
                  <h3 className="text-gray-900 text-lg font-bold leading-tight">
                    Navbatlarsiz
                  </h3>
                  <p className="text-gray-500 text-base">
                    Uchrashuvingizga to'g'ridan-to'g'ri keling.
                  </p>
                </div>
                <div className="flex flex-col gap-4 rounded-xl bg-gray-50 p-6">
                  <span className="material-symbols-outlined text-3xl text-teal-500">
                    {" "}
                    event_note{" "}
                  </span>
                  <h3 className="text-gray-900 text-lg font-bold leading-tight">
                    Tartibli Klinikalar
                  </h3>
                  <p className="text-gray-500 text-base">
                    Eng yaxshi va tartibli klinikalarga kirish.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 text-center">
              <h2 className="text-gray-800 text-4xl font-bold leading-tight tracking-tight">
                Mijozlarimizning Fikrlari
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Bizning xizmatimizdan foydalangan bemorlarning tajribalari.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
                <div className="flex flex-col gap-4 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCHcWpQD8V9ynaOTBfRHXacYhrNBaxRGlq1AsMCfFgTwXbVmLtMXFb5Ywu3GbnOj-CA0D200YpvtJvca0cBMyP4ybxGwWjy5d1JYdWfa30MWMeydDSroWvcT89LZ7_weeGLQEpy-65OCDjDhyE_iNAx-RGvGwGrzk-QmSIv6LLTa_my_w2dpEHeIluHLpq91OsTyMecXo3JsEor8b2N4J9_rcSyRb4WNN7wqhyrXpMvarlE4WC5ChY5T_cu-SxPC_n15i-HMS8O")',
                      }}
                    ></div>
                    <div>
                      <p className="text-gray-900 text-base font-semibold">
                        Nodira
                      </p>
                      <p className="text-gray-500 text-sm">2023-08-15</p>
                    </div>
                  </div>
                  <div className="flex gap-1 text-yellow-400">
                    <span className="material-symbols-outlined text-xl">
                      star
                    </span>
                    <span className="material-symbols-outlined text-xl">
                      star
                    </span>
                    <span className="material-symbols-outlined text-xl">
                      star
                    </span>
                    <span className="material-symbols-outlined text-xl">
                      star
                    </span>
                    <span className="material-symbols-outlined text-xl">
                      star
                    </span>
                  </div>
                  <p className="text-gray-600 text-base">
                    "Shifo Topish shifokorimga yozilishni juda osonlashtirdi!
                    Endi navbatda turish yo'q va yaqin atrofdan ajoyib
                    mutaxassis topdim."
                  </p>
                </div>
                <div className="flex flex-col gap-4 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAwf-MoapIIGHh4vVWHwNLJjIbA8qBhfwvt8t24_GoClD-Sy9U4-F3PJE3TmSNO7Hg9ePeRyncD46vb_92P2ePn7UvTulR7TR-tQzpJ_EVo9OWHWGGCSBg1fz77kMMIazT3GrVLfJ8E34tVtB-PQ7PYr9r2liGnGA50ikpRizOVJwBMguy8-6-Gy_hygcwUedfxL8zknAyDce8mUTx4O01yd8ndS-tmzk0dZcukT06l22psyNVfgqvtyTZQqdCgGmZ_D3zyrs0L")',
                      }}
                    ></div>
                    <div>
                      <p className="text-gray-900 text-base font-semibold">
                        Jamshid
                      </p>
                      <p className="text-gray-500 text-sm">2023-09-22</p>
                    </div>
                  </div>
                  <div className="flex gap-1 text-yellow-400">
                    <span className="material-symbols-outlined text-xl">
                      star
                    </span>
                    <span className="material-symbols-outlined text-xl">
                      star
                    </span>
                    <span className="material-symbols-outlined text-xl">
                      star
                    </span>
                    <span className="material-symbols-outlined text-xl">
                      star
                    </span>
                    <span className="material-symbols-outlined text-xl text-gray-300">
                      star
                    </span>
                  </div>
                  <p className="text-gray-600 text-base">
                    "Onlayn bron qilish qulay edi, lekin mening hududimda
                    ko'proq shifokorlar bo'lishini xohlardim. Umuman olganda,
                    yaxshi tajriba."
                  </p>
                </div>
                <div className="flex flex-col gap-4 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBEAHcXUNsDI9lzDWIIMai6VFBfqTzkcB9rjQC00q4G_CffMjAuKOjuSPqI8qifmARXHgRyLe1sCC_tzbuxWZ2EIvjhRj3_b0aXrNPNbY5BPIGGFBOFdHkPR_MGlH_PS4-nZATbZfBSfVFC5F458kAlaKBqXxvV5MZW_XQns0BsDY_WqBmbNpuSC9OeLU0lJQWynn-GM1NOzMdygiksTFCbE5oRAOWkwWFq3lZMB6Q9xtGEzt7BCyfsCXLlQpRi5YjBHWqa0X_5")',
                      }}
                    ></div>
                    <div>
                      <p className="text-gray-900 text-base font-semibold">
                        Gulnora
                      </p>
                      <p className="text-gray-500 text-sm">2023-10-10</p>
                    </div>
                  </div>
                  <div className="flex gap-1 text-yellow-400">
                    <span className="material-symbols-outlined text-xl">
                      star
                    </span>
                    <span className="material-symbols-outlined text-xl">
                      star
                    </span>
                    <span className="material-symbols-outlined text-xl">
                      star
                    </span>
                    <span className="material-symbols-outlined text-xl">
                      star
                    </span>
                    <span className="material-symbols-outlined text-xl">
                      star
                    </span>
                  </div>
                  <p className="text-gray-600 text-base">
                    "Shifo Topishning soddaligini yaxshi ko'raman. Bu menga juda
                    ko'p vaqtni tejadi va klinika yaxshi tashkil etilgan edi.
                    Tavsiya qilaman!"
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-gray-800 text-4xl font-bold leading-tight tracking-tight text-center">
                Tez-tez So'raladigan Savollar
              </h2>
              <div className="flex flex-col gap-4 max-w-3xl mx-auto w-full">
                <details className="flex flex-col rounded-lg border border-gray-200 bg-white p-4 group transition-all duration-300 hover:bg-gray-50">
                  <summary className="flex cursor-pointer items-center justify-between gap-4">
                    <p className="text-gray-800 text-lg font-medium">
                      Uchrashuvni qanday bron qilishim mumkin?
                    </p>
                    <span className="material-symbols-outlined text-gray-600 group-open:rotate-180 transition-transform">
                      {" "}
                      expand_more{" "}
                    </span>
                  </summary>
                  <p className="text-gray-600 text-base pt-2">
                    Platformamizda klinikani tanlang, shifokorni tanlang va
                    sizga mos vaqtni belgilang. Bu juda oson!
                  </p>
                </details>
                <details className="flex flex-col rounded-lg border border-gray-200 bg-white p-4 group transition-all duration-300 hover:bg-gray-50">
                  <summary className="flex cursor-pointer items-center justify-between gap-4">
                    <p className="text-gray-800 text-lg font-medium">
                      Shifokor sharhlarini ko'rishim mumkinmi?
                    </p>
                    <span className="material-symbols-outlined text-gray-600 group-open:rotate-180 transition-transform">
                      {" "}
                      expand_more{" "}
                    </span>
                  </summary>
                  <p className="text-gray-600 text-base pt-2">
                    Ha, siz boshqa bemorlar tomonidan qoldirilgan
                    shifokorlarning sharhlari va reytinglarini ko'rishingiz
                    mumkin.
                  </p>
                </details>
                <details className="flex flex-col rounded-lg border border-gray-200 bg-white p-4 group transition-all duration-300 hover:bg-gray-50">
                  <summary className="flex cursor-pointer items-center justify-between gap-4">
                    <p className="text-gray-800 text-lg font-medium">
                      Agar qayta rejalashtirishim kerak bo'lsa-chi?
                    </p>
                    <span className="material-symbols-outlined text-gray-600 group-open:rotate-180 transition-transform">
                      {" "}
                      expand_more{" "}
                    </span>
                  </summary>
                  <p className="text-gray-600 text-base pt-2">
                    Siz uchrashuvingizni hisobingiz orqali osongina qayta
                    rejalashtirishingiz yoki bekor qilishingiz mumkin.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-gray-50">
          <div className="container mx-auto max-w-5xl px-5 py-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
                <a
                  className="text-gray-600 hover:text-gray-900 text-base font-medium"
                  href="#"
                >
                  About Us
                </a>
                <a
                  className="text-gray-600 hover:text-gray-900 text-base font-medium"
                  href="#"
                >
                  Contact
                </a>
                <a
                  className="text-gray-600 hover:text-gray-900 text-base font-medium"
                  href="#"
                >
                  Privacy Policy
                </a>
                <a
                  className="text-gray-600 hover:text-gray-900 text-base font-medium"
                  href="#"
                >
                  Terms of Service
                </a>
              </div>
              <div className="flex justify-center gap-6">
                <a
                  className="text-gray-500 hover:text-gray-800 transition-colors"
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
                <a
                  className="text-gray-500 hover:text-gray-800 transition-colors"
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
                  className="text-gray-500 hover:text-gray-800 transition-colors"
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
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.797 2.013 10.15 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm6.406-11.845a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <p className="text-gray-500 text-base text-center mt-8">
              © 2023 Shifo Topish. Barcha huquqlar himoyalangan.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default ClinicBookingLandingPage;
