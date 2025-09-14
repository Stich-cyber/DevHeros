import React from "react";

function Dashboard() {
  return (
    <div className="relative flex min-h-screen w-full bg-gray-50 text-gray-900" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <aside className="flex w-64 flex-col bg-white p-6 border-r border-gray-200">
        <div className="flex items-center gap-2 mb-10">
          <img alt="Clinic Hub Logo" className="h-8 w-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTHAFZT7-PfcVhhMU0VSikDZRoZhLFOm64orBcRbnDuft5L5oU0QiaSk4arIy9tQDtObcpgNr_nCxxMz3s-xabRg-dKhIlyYXy-IGM3p5i6vNleIevJgR2NBFTD-latb7sog6mWwQl3MIPAiDRX9MNqpfK4t7xfu-76z1H-OnXi2SZkFh2Pe7sDkXQNQyDihoMy4hyJomqvoLeiAD5qnh2smTPY7KgS4HUTjUKckNFcPkGEr30CR-vVsnEK31Vr1241GF62AAe" />
          <h1 className="text-xl font-bold text-teal-900">ClinicHub</h1>
        </div>
        <nav className="flex flex-col gap-2">
          <a className="flex items-center gap-3 rounded-lg bg-teal-50 px-3 py-2 text-teal-600" href="#">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm font-medium">Dashboard</span>
          </a>
          <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-100" href="#">
            <span className="material-symbols-outlined">calendar_month</span>
            <span className="text-sm font-medium">Appointments</span>
          </a>
          <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-100" href="#">
            <span className="material-symbols-outlined">stethoscope</span>
            <span className="text-sm font-medium">Doctors</span>
          </a>
          <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-100" href="#">
            <span className="material-symbols-outlined">group</span>
            <span className="text-sm font-medium">Patients</span>
          </a>
          <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-100" href="#">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-sm font-medium">Settings</span>
          </a>
        </nav>
        <div className="mt-auto">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-100">
            <img alt="Dr. Azizov" className="w-10 h-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7UUrunSLr2M5U6Omr3Gr-BuhXlCImesZMv8Je-UlojPiyEx8-kAvivrrHXx26mM0Hyw_LFo7JC9TYzv1wSqEw9fQXCfCu6BgvwauVvBXLitE96YCIH1JZzXklesAVOy9taGVk2af-7pmJj1TGX76JQRQtkcpeaKtZxzqNM_2Qm1iVwjuasqnQS3ByI5rTMmzydHFhlr2R60V6uOuyaiXdmwFS1pKtq9ZJBF7T753JBOhwlFOBmSo8ukVOn7shLl1JHU3EwxLg" />
            <div>
              <p className="font-semibold text-gray-800 text-sm">Dr. Azizov</p>
              <p className="text-xs text-gray-500">azizov@clinic.uz</p>
            </div>
            <button className="ml-auto text-gray-500 hover:text-gray-700">
              <span className="material-symbols-outlined">logout</span>
            </button>
          </div>
        </div>
      </aside>
      <main className="flex-1 p-8">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Dashboard</h2>
            <p className="text-gray-500">Overview of clinic activities and upcoming appointments.</p>
          </div>
          <button className="flex items-center gap-2 rounded-lg bg-teal-500 px-4 py-2 text-white hover:bg-teal-600 transition-colors">
            <span className="material-symbols-outlined">add</span>
            <span>New Appointment</span>
          </button>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex flex-col gap-2 rounded-lg bg-white p-6 border border-gray-200">
            <p className="text-gray-600 font-medium">Upcoming Appointments</p>
            <p className="text-4xl font-bold text-gray-900">25</p>
          </div>
          <div className="flex flex-col gap-2 rounded-lg bg-white p-6 border border-gray-200">
            <p className="text-gray-600 font-medium">Total Patients</p>
            <p className="text-4xl font-bold text-gray-900">150</p>
          </div>
          <div className="flex flex-col gap-2 rounded-lg bg-white p-6 border border-gray-200">
            <p className="text-gray-600 font-medium">Active Doctors</p>
            <p className="text-4xl font-bold text-gray-900">5</p>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900">Upcoming Appointments</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-3 text-sm font-semibold text-gray-600">Time</th>
                  <th className="px-6 py-3 text-sm font-semibold text-gray-600">Patient</th>
                  <th className="px-6 py-3 text-sm font-semibold text-gray-600">Doctor</th>
                  <th className="px-6 py-3 text-sm font-semibold text-gray-600">Specialty</th>
                  <th className="px-6 py-3 text-sm font-semibold text-gray-600 text-center">Status</th>
                  <th className="px-6 py-3 text-sm font-semibold text-gray-600"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">9:00 AM</td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Nodira Aliyeva</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">Dr. Azizov</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">Cardiology</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <span className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">Scheduled</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button className="text-gray-500 hover:text-teal-600">
                      <span className="material-symbols-outlined">more_horiz</span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">10:30 AM</td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Jamshid Rakhimov</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">Dr. Karimova</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">Dermatology</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">Confirmed</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button className="text-gray-500 hover:text-teal-600">
                      <span className="material-symbols-outlined">more_horiz</span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">11:45 AM</td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Gulnara Saidova</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">Dr. Ismatov</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">Pediatrics</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <span className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">Scheduled</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button className="text-gray-500 hover:text-teal-600">
                      <span className="material-symbols-outlined">more_horiz</span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">1:15 PM</td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Rustam Mirzayev</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">Dr. Azizov</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">Cardiology</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">Confirmed</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button className="text-gray-500 hover:text-teal-600">
                      <span className="material-symbols-outlined">more_horiz</span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">2:30 PM</td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Dilfuza Karimova</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">Dr. Karimova</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">Dermatology</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <span className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">Scheduled</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button className="text-gray-500 hover:text-teal-600">
                      <span className="material-symbols-outlined">more_horiz</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
