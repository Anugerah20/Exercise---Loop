/*
Soal Nomor 3
Lakukan pengulangan dengan FOR LOOP yang melakukan iterasi dari 0..20.
Setiap iterasi/pengulangan lakukan pengecekan apakah nilai tersebut ganjil atau genap.
Tampilkan keterangan ganjil dan genap pada sebuah nilai setiap pengulangan
*/

let x = 0; // Membuat variabel x default-nya itu 0
// x, Lakukan inisialisasi variabel x dengan angka 0
// x <= 20, Buat kondisi sampai angka yang di isi terpenuhi
// x++, Increment berfungsi untuk menambahkan 1 angka setiap pengulangan
for(x; x <= 20; x++) {
     // Jika nilainya itu adalah genap
     if(x % 2 === 0) {
     // Tampilkan angka dan pesan bahwa nilainya genap
     console.log(x + " itu nilai genap");
     // Kalau nilainya itu adalah ganjil
     } else {
     // Tampilkan angka dan pesan bahwa nilainya ganjil
     console.log(x + " itu nilai ganjil");
     }
}
