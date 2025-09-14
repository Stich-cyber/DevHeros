import React, { useState } from "react";
function BookingForm() {
  const [selectedDoctor, setSelectedDoctor] = useState("Dr. Ismailov");
  const [selectedDate, setSelectedDate] = useState(5);
  const [selectedTime, setSelectedTime] = useState("10:00 AM");

  const handleBookAppointment = () => {
    alert(`Appointment booked with ${selectedDoctor} on October ${selectedDate}, 2024 at ${selectedTime}`);
  };

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "1:00 PM", "1:30 PM", "2:00 PM"
  ];

  return (
    <main className="flex flex-1 justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl space-y-8">
        <div className="bg-white p-8 shadow-sm rounded-2xl border border-gray-200/50">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 tracking-tight">
              Book an Appointment
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Fill in the details below to schedule your visit.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <label
                  className="block text-sm font-medium text-gray-800 mb-2"
                  htmlFor="doctor-select"
                >
                  Select a Doctor
                </label>
                <select
                  className="block w-full rounded-lg border-gray-200 bg-gray-50 focus:border-[#13ecc8] focus:ring focus:ring-[#13ecc8] focus:ring-opacity-50 h-14 px-4 text-base"
                  id="doctor-select"
                  value={selectedDoctor}
                  onChange={(e) => setSelectedDoctor(e.target.value)}
                >
                  <option>Dr. Ismailov</option>
                  <option>Dr. Karimova</option>
                  <option>Dr. Abdullaev</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  Choose a Date
                </h3>
                <div className="rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <button className="p-2 rounded-full hover:bg-gray-100">
                      <span className="material-symbols-outlined text-gray-600">
                        chevron_left
                      </span>
                    </button>
                    <p className="text-base font-bold text-gray-800">
                      October 2024
                    </p>
                    <button className="p-2 rounded-full hover:bg-gray-100">
                      <span className="material-symbols-outlined text-gray-600">
                        chevron_right
                      </span>
                    </button>
                  </div>
                  <div className="grid grid-cols-7 text-center">
                    <p className="text-[13px] font-bold text-gray-500 h-12 flex items-center justify-center">S</p>
                    <p className="text-[13px] font-bold text-gray-500 h-12 flex items-center justify-center">M</p>
                    <p className="text-[13px] font-bold text-gray-500 h-12 flex items-center justify-center">T</p>
                    <p className="text-[13px] font-bold text-gray-500 h-12 flex items-center justify-center">W</p>
                    <p className="text-[13px] font-bold text-gray-500 h-12 flex items-center justify-center">T</p>
                    <p className="text-[13px] font-bold text-gray-500 h-12 flex items-center justify-center">F</p>
                    <p className="text-[13px] font-bold text-gray-500 h-12 flex items-center justify-center">S</p>
                    <button className="text-sm font-medium text-gray-400 h-12 w-full col-start-4 cursor-not-allowed">
                      <div className="flex size-full items-center justify-center">1</div>
                    </button>
                    <button className="text-sm font-medium text-gray-800 h-12 w-full" onClick={() => setSelectedDate(2)}>
                      <div className={`flex size-full items-center justify-center rounded-full hover:bg-gray-100 ${selectedDate === 2 ? 'bg-[#13ecc8] text-white' : ''}`}>2</div>
                    </button>
                    <button className="text-sm font-medium text-gray-800 h-12 w-full" onClick={() => setSelectedDate(3)}>
                      <div className={`flex size-full items-center justify-center rounded-full hover:bg-gray-100 ${selectedDate === 3 ? 'bg-[#13ecc8] text-white' : ''}`}>3</div>
                    </button>
                    <button className="text-sm font-medium text-gray-800 h-12 w-full" onClick={() => setSelectedDate(4)}>
                      <div className={`flex size-full items-center justify-center rounded-full hover:bg-gray-100 ${selectedDate === 4 ? 'bg-[#13ecc8] text-white' : ''}`}>4</div>
                    </button>
                    <button className="text-sm font-medium text-gray-800 h-12 w-full" onClick={() => setSelectedDate(5)}>
                      <div className={`flex size-full items-center justify-center rounded-full hover:bg-gray-100 ${selectedDate === 5 ? 'bg-[#13ecc8] text-white' : ''}`}>5</div>
                    </button>
                    <button className="text-sm font-medium text-gray-800 h-12 w-full" onClick={() => setSelectedDate(6)}>
                      <div className={`flex size-full items-center justify-center rounded-full hover:bg-gray-100 ${selectedDate === 6 ? 'bg-[#13ecc8] text-white' : ''}`}>6</div>
                    </button>
                    <button className="text-sm font-medium text-gray-800 h-12 w-full" onClick={() => setSelectedDate(7)}>
                      <div className={`flex size-full items-center justify-center rounded-full hover:bg-gray-100 ${selectedDate === 7 ? 'bg-[#13ecc8] text-white' : ''}`}>7</div>
                    </button>
                    <button className="text-sm font-medium text-gray-800 h-12 w-full" onClick={() => setSelectedDate(8)}>
                      <div className={`flex size-full items-center justify-center rounded-full hover:bg-gray-100 ${selectedDate === 8 ? 'bg-[#13ecc8] text-white' : ''}`}>8</div>
                    </button>
                    <button className="text-sm font-medium text-gray-800 h-12 w-full" onClick={() => setSelectedDate(9)}>
                      <div className={`flex size-full items-center justify-center rounded-full hover:bg-gray-100 ${selectedDate === 9 ? 'bg-[#13ecc8] text-white' : ''}`}>9</div>
                    </button>
                    <button className="text-sm font-medium text-gray-800 h-12 w-full" onClick={() => setSelectedDate(10)}>
                      <div className={`flex size-full items-center justify-center rounded-full hover:bg-gray-100 ${selectedDate === 10 ? 'bg-[#13ecc8] text-white' : ''}`}>10</div>
                    </button>
                    <button className="text-sm font-medium text-gray-800 h-12 w-full" onClick={() => setSelectedDate(11)}>
                      <div className={`flex size-full items-center justify-center rounded-full hover:bg-gray-100 ${selectedDate === 11 ? 'bg-[#13ecc8] text-white' : ''}`}>11</div>
                    </button>
                    <button className="text-sm font-medium text-gray-800 h-12 w-full" onClick={() => setSelectedDate(12)}>
                      <div className={`flex size-full items-center justify-center rounded-full hover:bg-gray-100 ${selectedDate === 12 ? 'bg-[#13ecc8] text-white' : ''}`}>12</div>
                    </button>
                    <button className="text-sm font-medium text-gray-800 h-12 w-full" onClick={() => setSelectedDate(13)}>
                      <div className={`flex size-full items-center justify-center rounded-full hover:bg-gray-100 ${selectedDate === 13 ? 'bg-[#13ecc8] text-white' : ''}`}>13</div>
                    </button>
                    <button className="text-sm font-medium text-gray-800 h-12 w-full" onClick={() => setSelectedDate(14)}>
                      <div className={`flex size-full items-center justify-center rounded-full hover:bg-gray-100 ${selectedDate === 14 ? 'bg-[#13ecc8] text-white' : ''}`}>14</div>
                    </button>
                    <button className="text-sm font-medium text-gray-800 h-12 w-full" onClick={() => setSelectedDate(15)}>
                      <div className={`flex size-full items-center justify-center rounded-full hover:bg-gray-100 ${selectedDate === 15 ? 'bg-[#13ecc8] text-white' : ''}`}>15</div>
                    </button>
                    <button className="text-sm font-medium text-gray-800 h-12 w-full" onClick={() => setSelectedDate(16)}>
                      <div className={`flex size-full items-center justify-center rounded-full hover:bg-gray-100 ${selectedDate === 16 ? 'bg-[#13ecc8] text-white' : ''}`}>16</div>
                    </button>
                    <button className="text-sm font-medium text-gray-800 h-12 w-full" onClick={() => setSelectedDate(17)}>
                      <div className={`flex size-full items-center justify-center rounded-full hover:bg-gray-100 ${selectedDate === 17 ? 'bg-[#13ecc8] text-white' : ''}`}>17</div>
                    </button>
                    <button className="text-sm font-medium text-gray-800 h-12 w-full" onClick={() => setSelectedDate(18)}>
                      <div className={`flex size-full items-center justify-center rounded-full hover:bg-gray-100 ${selectedDate === 18 ? 'bg-[#13ecc8] text-white' : ''}`}>18</div>
                    </button>
                    <button className="text-sm font-medium text-gray-800 h-12 w-full" onClick={() => setSelectedDate(19)}>
                      <div className={`flex size-full items-center justify-center rounded-full hover:bg-gray-100 ${selectedDate === 19 ? 'bg-[#13ecc8] text-white' : ''}`}>19</div>
                    </button>
                    <button className="text-sm font-medium text-gray-800 h-12 w-full" onClick={() => setSelectedDate(20)}>
                      <div className={`flex size-full items-center justify-center rounded-full hover:bg-gray-100 ${selectedDate === 20 ? 'bg-[#13ecc8] text-white' : ''}`}>20</div>
                    </button>
                    <button className="text-sm font-medium text-gray-800 h-12 w-full" onClick={() => setSelectedDate(21)}>
                      <div className={`flex size-full items-center justify-center rounded-full hover:bg-gray-100 ${selectedDate === 21 ? 'bg-[#13ecc8] text-white' : ''}`}>21</div>
                    </button>
                    <button className="text-sm font-medium text-gray-800 h-12 w-full" onClick={() => setSelectedDate(22)}>
                      <div className={`flex size-full items-center justify-center rounded-full hover:bg-gray-100 ${selectedDate === 22 ? 'bg-[#13ecc8] text-white' : ''}`}>22</div>
                    </button>
                    <button className="text-sm font-medium text-gray-800 h-12 w-full" onClick={() => setSelectedDate(23)}>
                      <div className={`flex size-full items-center justify-center rounded-full hover:bg-gray-100 ${selectedDate === 23 ? 'bg-[#13ecc8] text-white' : ''}`}>23</div>
                    </button>
                    <button className="text-sm font-medium text-gray-800 h-12 w-full" onClick={() => setSelectedDate(24)}>
                      <div className={`flex size-full items-center justify-center rounded-full hover:bg-gray-100 ${selectedDate === 24 ? 'bg-[#13ecc8] text-white' : ''}`}>24</div>
                    </button>
                    <button className="text-sm font-medium text-gray-800 h-12 w-full" onClick={() => setSelectedDate(25)}>
                      <div className={`flex size-full items-center justify-center rounded-full hover:bg-gray-100 ${selectedDate === 25 ? 'bg-[#13ecc8] text-white' : ''}`}>25</div>
                    </button>
                    <button className="text-sm font-medium text-gray-800 h-12 w-full" onClick={() => setSelectedDate(26)}>
                      <div className={`flex size-full items-center justify-center rounded-full hover:bg-gray-100 ${selectedDate === 26 ? 'bg-[#13ecc8] text-white' : ''}`}>26</div>
                    </button>
                    <button className="text-sm font-medium text-gray-800 h-12 w-full" onClick={() => setSelectedDate(27)}>
                      <div className={`flex size-full items-center justify-center rounded-full hover:bg-gray-100 ${selectedDate === 27 ? 'bg-[#13ecc8] text-white' : ''}`}>27</div>
                    </button>
                    <button className="text-sm font-medium text-gray-800 h-12 w-full" onClick={() => setSelectedDate(28)}>
                      <div className={`flex size-full items-center justify-center rounded-full hover:bg-gray-100 ${selectedDate === 28 ? 'bg-[#13ecc8] text-white' : ''}`}>28</div>
                    </button>
                    <button className="text-sm font-medium text-gray-800 h-12 w-full" onClick={() => setSelectedDate(29)}>
                      <div className={`flex size-full items-center justify-center rounded-full hover:bg-gray-100 ${selectedDate === 29 ? 'bg-[#13ecc8] text-white' : ''}`}>29</div>
                    </button>
                    <button className="text-sm font-medium text-gray-800 h-12 w-full" onClick={() => setSelectedDate(30)}>
                      <div className={`flex size-full items-center justify-center rounded-full hover:bg-gray-100 ${selectedDate === 30 ? 'bg-[#13ecc8] text-white' : ''}`}>30</div>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  Available Times on Oct {selectedDate}, 2024
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {timeSlots.map((time, index) => (
                    <label key={index} className={`text-sm font-medium leading-normal flex items-center justify-center rounded-lg border px-4 py-3 cursor-pointer transition-all ${time === "11:00 AM" ? 'border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed' : 'border-gray-200 text-gray-800'} ${selectedTime === time ? 'bg-[#13ecc8] text-white border-[#13ecc8]' : ''}`}>
                      {time}
                      <input
                        className="invisible absolute"
                        name="time-slot"
                        type="radio"
                        value={time}
                        checked={selectedTime === time}
                        onChange={() => setSelectedTime(time)}
                        disabled={time === "11:00 AM"}
                      />
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={handleBookAppointment}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-black bg-[#13ecc8] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#13ecc8]"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default BookingForm;

