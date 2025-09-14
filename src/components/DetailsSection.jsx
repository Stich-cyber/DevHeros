import React from "react";

function DetailsSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <span className="material-symbols-outlined text-5xl text-[#13ecc8] mb-4">
              {" "}
              search{" "}
            </span>
            <h3 className="text-xl font-bold">Find a Doctor</h3>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <span className="material-symbols-outlined text-5xl text-[#13ecc8] mb-4">
              {" "}
              calendar_month{" "}
            </span>
            <h3 className="text-xl font-bold">Book an Appointment</h3>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <span className="material-symbols-outlined text-5xl text-[#13ecc8] mb-4">
              {" "}
              health_and_safety{" "}
            </span>
            <h3 className="text-xl font-bold">Get Care</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailsSection;
