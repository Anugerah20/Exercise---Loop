/*
Soal Nomor 5
Buat sebuah program kuis. Tampilkan prompt() untuk meminta inputan dari user. Tampilan teks ‘Sebutkan kepanjangan dari nama IB (Impact Byte)?’ Lakukan pengecekan apakah jawaban dari user sudah benar
Jika benar, tampilkan alert ‘Selamat jawaban kamu benar’ Jika salah, lakukan pengulangan untuk 
menampilkan prompt() yg sama hingga jawaban dari user benar
*/

let kuis = ""; // membuat variabel kuis kosong
//  Melakukan pengulangan jika jawabannya tidak tepat
while(kuis !== "Impact Byte") {
     // Menampilkan pesan prompt ke user jika jawaban belum benar
     kuis = prompt("Sebutkan kepanjangan dari nama IB (Impact Byte)?");
     // Jika jawaban kuisnya itu benar
     if(kuis === "Impact Byte") {
          // Maka tampilkan pesan popup alert
          alert("Selamat jawaban kamu benar");
     }
}

