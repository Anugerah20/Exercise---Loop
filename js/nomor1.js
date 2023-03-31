/* 
Soal Nomor 1
Kita sudah mengetahui bahwa banyaknya user maksimal adalah 100.
Buat sebuah program yang menampilkan teks ‘User ke - 1 … User ke - 100’ 
pada setiap baris di halaman HTML. Lakukan FOR LOOP pada Javascript
*/

// Membuat variabel user angka default-nya 1
let user = 1; 
// user, Inisialisasi variabel user dengan angka user dimulai dari 1
// user <= 100, Buat kondisi sampai dengan angka yang di isi terpenuhi
// user++, Increment berfungsi untuk menambahkan 1 angka setiap pengulangan
for(user; user <= 100; user++) {
     // Tampilkan hasilnya berupa text yang bisa dilihat di browser
     // <br> berfungsi untuk membuat baris baru agar mudah dibaca
     document.write(`User ke - ${user} <br>`);

}
