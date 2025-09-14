import React from "react";
import DetailsSection from "../components/DetailsSection";

function Home({ onBook }) {
  return (
    <main className="flex-1">
      <section
        className="relative flex items-center justify-center text-white py-20 px-4 sm:px-6 lg:px-8 min-h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDBm4vnRAFPzbaEwzToB3Lsg52LviLeQS0slgmPr3QTJbOq4krZL16k1B-AUF8_GhApcSWkiQ2VTNfmUBLOv54X8lOOeeaid3zri9siY49XKQX7WpeGwJ-l_yowb3dLnmqvDdBtaTE4AwxLYCJ3BVPSg5mxtn7Mvt2ID15h6YTl-3zJBrhP1-NMNC77CmMM7jiBd4yY8h7BtidvTIE8Ag1s6s03VOeChs9u2G-3g63Qm5V7qYwJWPvJK3k8lUh1xuPe4CtYADMc")',
        }}
      >
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold !leading-tight tracking-tight">
            Your Health, Simplified
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
            Book appointments with top doctors in Uzbekistan, anytime, anywhere.
            Experience seamless healthcare at your fingertips.
          </p>
          <button
            className="mt-8 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-12 px-6 bg-[#13ecc8] text-[#0d1b19] text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors"
            onClick={onBook}
          >
            <span className="truncate">Book Appointment</span>
          </button>
        </div>
      </section>
      <DetailsSection />
      {/* Add more sections as needed */}
    </main>
  );
}

export default Home;
