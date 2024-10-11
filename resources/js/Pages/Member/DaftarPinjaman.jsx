import React, { useState } from "react";

const LoanList = () => {
  // State untuk tab dan data peminjaman
  const [activeTab, setActiveTab] = useState("current");

  const loans = [
    {
      id: 1,
      code: "B004",
      title: "Aku anak sehat",
      loanDate: "23-07-2024",
      returnDate: "29-07-2024",
      status: "Selesai",
    },
    // Tambahkan data buku lainnya di sini
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="flex justify-between items-center p-5 bg-white shadow-md">
        <div className="flex items-center">
          <img src="/path-to-logo" alt="CAZH Logo" className="h-8" />
        </div>
        <nav className="flex space-x-8 text-lg">
          <a href="/" className="text-gray-600 hover:text-gray-800">Beranda</a>
          <a href="/daftar-pinjaman" className="font-semibold text-gray-800">Daftar Pinjaman</a>
          <a href="/profil" className="text-gray-600 hover:text-gray-800">Profil</a>
        </nav>
      </header>

      {/* Section Judul */}
      <section className="bg-teal-500 text-white py-6">
        <h1 className="text-2xl font-semibold text-center">Daftar Pinjaman</h1>
      </section>

      {/* Tabs */}
      <div className="mt-6 container mx-auto">
        <div className="flex justify-center space-x-4 border-b border-gray-300">
          <button
            className={`py-2 px-4 font-semibold ${
              activeTab === "current" ? "border-b-2 border-teal-500 text-teal-500" : "text-gray-600"
            }`}
            onClick={() => setActiveTab("current")}
          >
            Pinjaman saat ini
          </button>
          <button
            className={`py-2 px-4 font-semibold ${
              activeTab === "history" ? "border-b-2 border-teal-500 text-teal-500" : "text-gray-600"
            }`}
            onClick={() => setActiveTab("history")}
          >
            Histori Peminjaman
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mt-6">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Kode buku</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Judul buku</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Tgl peminjaman</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Tgl pengembalian</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {loans.map((loan) => (
                <tr key={loan.id} className="border-t">
                  <td className="px-6 py-4 text-sm text-gray-800">{loan.code}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{loan.title}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{loan.loanDate}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{loan.returnDate}</td>
                  <td className="px-6 py-4">
                    <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-green-500 rounded-full">
                      {loan.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LoanList;
