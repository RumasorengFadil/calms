import React, { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Flamingo",
    nis: "123456",
    email: "Flamingo@gmail.com",
    phone: "088123456789",
    status: "Aktif",
    birthPlace: "Jakarta",
    birthDate: "00 Januari 2024",
    activeUntil: "30 Desember 2025",
    password: "*******",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="flex justify-between items-center p-5 bg-white shadow-md">
        <div className="flex items-center">
          <img src="/path-to-logo" alt="CAZH Logo" className="h-8" />
        </div>
        <nav className="flex space-x-8 text-lg">
          <a href="/" className="text-gray-600 hover:text-gray-800">Beranda</a>
          <a href="/daftar-pinjaman" className="text-gray-600 hover:text-gray-800">Daftar Pinjaman</a>
          <a href="/profil" className="font-semibold text-gray-800">Profil</a>
        </nav>
      </header>

      {/* Section Judul */}
      <section className="bg-teal-500 text-white py-6">
        <h1 className="text-2xl font-semibold text-center">Profil</h1>
      </section>

      {/* Profile Form */}
      <div className="container mx-auto mt-8 bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-center items-center space-x-4 mb-8">
          <div className="w-28 h-28">
            <img
              src="/path-to-profile-picture"
              alt="Profile"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">{profile.name}</h2>
            <div className="flex space-x-2 mt-2">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
                Browse
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
                Hapus
              </button>
            </div>
          </div>
        </div>

        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nama */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Nama</label>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              />
            </div>

            {/* Status Keanggotaan */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Status Keanggotaan</label>
              <select
                name="status"
                value={profile.status}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              >
                <option value="Aktif">Aktif</option>
                <option value="Tidak Aktif">Tidak Aktif</option>
              </select>
            </div>

            {/* NIS */}
            <div>
              <label className="block text-sm font-medium text-gray-700">NIS</label>
              <input
                type="text"
                name="nis"
                value={profile.nis}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              />
            </div>

            {/* Aktif Sampai */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Aktif Sampai</label>
              <input
                type="text"
                name="activeUntil"
                value={profile.activeUntil}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              />
            </div>

            {/* Tempat / Tgl Lahir */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Tempat / Tgl lahir</label>
              <input
                type="text"
                name="birthDate"
                value={`${profile.birthPlace}, ${profile.birthDate}`}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              />
            </div>

            {/* No. Telepon */}
            <div>
              <label className="block text-sm font-medium text-gray-700">No. Telepon</label>
              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={profile.password}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex justify-end space-x-4">
            <button className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500">
              Batal
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
