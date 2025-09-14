import React, { useState } from "react";

function LoginForm({ onSuccess, onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 8) {
      setError("Parol kamida 8 ta belgidan iborat bo'lishi kerak.");
      return;
    }
    setError("");
    onSuccess();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <form
        className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-bold mb-4 text-gray-800">Login</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Username
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <div className="flex gap-2">
          <button
            type="submit"
            className="flex-1 bg-[#13ecc8] text-[#0d1b19] font-bold py-2 rounded-md hover:bg-opacity-90"
          >
            Login
          </button>
          <button
            type="button"
            className="flex-1 bg-gray-100 text-gray-700 font-bold py-2 rounded-md hover:bg-gray-200"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
