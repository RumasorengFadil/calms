import React, { useState } from "react";

const Home = () => {
  // State untuk menyimpan buku dan kata kunci pencarian
  const [searchTerm, setSearchTerm] = useState("");
  const [books] = useState([
    { id: 1, title: "Buku 1", stock: 10 },
    { id: 2, title: "Buku 2", stock: 5 },
    { id: 3, title: "Buku 3", stock: 3 },
    { id: 4, title: "Buku 4", stock: 7 },
    { id: 5, title: "Buku 5", stock: 0 },
  ]);

  // Fungsi untuk memfilter buku berdasarkan input pencarian
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="flex justify-between items-center p-5 bg-white shadow-md">
        <div className="flex items-center">
          <img src="/path-to-logo" alt="CAZH Logo" className="h-8" />
        </div>
        <nav className="flex space-x-8 text-lg">
          <a href="/" className="font-semibold text-gray-800">Beranda</a>
          <a href="/daftar-pinjaman" className="text-gray-600 hover:text-gray-800">Daftar Pinjaman</a>
          <a href="/profil" className="text-gray-600 hover:text-gray-800">Profil</a>
        </nav>
      </header>

      {/* Welcome Section */}
      <section className="text-center mt-10">
        <h1 className="text-2xl font-semibold text-gray-800">
          Selamat Datang, Flamingo! ✨
        </h1>
        <p className="mt-4 text-lg">Yuk cari bukunya...</p>
        <div className="mt-6">
          <input
            type="text"
            placeholder="Cari buku..."
            className="w-80 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </section>

      {/* Buku Terbaru - Hasil Pencarian */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-gray-800 text-center">
          Hasil Pencarian 📚
        </h2>
        <div className="flex justify-center mt-6 space-x-4">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <div
                key={book.id}
                className="bg-white shadow-lg p-4 w-40 rounded-lg text-center"
              >
                <div className="h-40 bg-gray-300 flex items-center justify-center">
                  COVER
                </div>
                <h3 className="mt-4 text-sm font-semibold text-gray-800">
                  {book.title}
                </h3>
                <p className="text-gray-600 mt-2">Stok Buku: {book.stock}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-lg">Buku tidak ditemukan.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
