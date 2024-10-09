const calcDayDifference = (dueDate) => {
    // Buat objek Date dari string input
    const startDate = new Date().setHours(0,0,0,0);
    const returnDate = new Date(dueDate).setHours(0,0,0,0);

    // Hitung selisih waktu dalam milidetik
    const timeDifference = returnDate - startDate;

    // Ubah selisih waktu menjadi hari
    const dayDifference = timeDifference / (1000 * 60 * 60 * 24);

    // Kembalikan hasilnya
    return dayDifference;
}

export default calcDayDifference;