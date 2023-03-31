/* 
Soal Nomor 4
Tampilkan sebuah Konfirmasi Pop Up kepada user menggunakan confirm();
Berikan teks ‘Apakah anda mau mengulang’ pada box confirm Jika user 
memilih ‘OK’ maka program akan terus menampilan pop up yang sama Jika 
user memilih ‘Cancel’ maka program akan menampilkan teks ‘Perulangan sudah 
dilakukan sebanyak …(jumlah klik OK yang dilakukan user)
*/

let countUser = 0; // Kondisi jika user belum klik maka nilai-nya 0

//  Mengecek Pengulangan pada saat user klik tombol di confirm
while(true) {
     // Membuat pesan confirm yang akan ditampilkan user
     const infoUser = confirm("Apakah anda mau mengulang?");
     // Jika user mengklik tombol yang dia inginkan maka tambah 1 angka
     if(infoUser === true) {
          countUser++; // Increment berfungsi untuk menambahkan 1 angka setiap pengulangan
          continue; // Mengakhiri eksekusi pengulangan
     // Jika user mau melihat berapa kali melakukan klik di confirm
     } else {
          // Tampilkan pesan berupa popup yang menampilkan berapa kali klik
          alert(`Perulangan sudah dilakukan sebanyak ${countUser} kali`);
          break; // Menghentikan pengulangan secara paksa
     }
}