# Tugas 9 - Pertemuan 10 Praktikum Pemrograman Mobile

Nama        : Sufyan Abdur Rofiq

NIM         : H1D022004

Shift Awal  : B

Shift Baru  : C

# A. ScreenShoot Halaman :

1). Halaman Login :

![image](https://github.com/user-attachments/assets/0da65124-fb50-474a-a996-0aeed53d979a)

Halaman tersebut merupakan tampilan awal aplikasi yang memungkinkan pengguna untuk login menggunakan akun Google.

2). Halaman Home :

![image](https://github.com/user-attachments/assets/798f3e8f-f41b-4b45-bbe4-93f525aa148d)

Tampilan home di atas adalah halaman yang akan diakses pengguna setelah berhasil login.

3). Halaman Profile :

![image](https://github.com/user-attachments/assets/e0de1988-3d66-4b85-bf86-94d6e68b7a2e)

Tampilan di atas adalah halaman profil yang menampilkan informasi nama dan email pengguna.Di pojok kanan atas terdapat tombol "Logout" yang memungkinkan pengguna untuk keluar dari aplikasi. Ketika tombol tersebut ditekan, pengguna akan langsung keluar dan diarahkan kembali ke halaman login.

4). Navbar :

![image](https://github.com/user-attachments/assets/3b46ee7e-b0ba-4fd7-a339-32bd2be7d773)

Gambar di atas menunjukkan navbar yang digunakan oleh pengguna untuk navigasi antar halaman. Navbar tersebut memiliki dua opsi: Home dan Profile. Jika pengguna memilih Home, mereka akan diarahkan ke halaman Home, sedangkan jika memilih Profile, mereka akan menuju ke halaman Profile.

# B. Penjelasan cara dari mulai autentikasi login, hingga aplikasi mendapatkan username dan profil kita dari akun google

1. Langkah pertama adalah membuat proyek Firebase sebagai backend, sehingga proyek Ionic yang dibuat dapat terhubung dengan baik. Tujuan pembuatan proyek Firebase ini adalah untuk mendapatkan konfigurasi Firebase (firebaseConfig) yang berisi informasi seperti apiKey, authDomain, dan lainnya. Setelah mendapatkan firebaseConfig, konfigurasi tersebut disalin ke dalam folder utils. Folder utils ini berfungsi untuk menghubungkan proyek Ionic dengan Firebase yang telah dibuat. Berikut adalah tampilan kodenya :

![image](https://github.com/user-attachments/assets/bdb2ab63-2aa1-4bfd-93d0-13bbfe6798b4)

Dari kode di atas, dapat dilihat bahwa firebaseConfig yang telah disalin bertujuan untuk mengaktifkan layanan otentikasi Firebase (getAuth). Selain itu, penyedia otentikasi Google (GoogleAuthProvider) juga dipersiapkan agar pengguna dapat melakukan login menggunakan akun Google mereka.

2. Berikutnya, kita membuat fungsi untuk Sign In dan Logout. Fungsi Sign In memungkinkan pengguna masuk ke aplikasi menggunakan akun Google, memastikan mereka terverifikasi untuk mengakses fitur tertentu. Sedangkan fungsi Logout berfungsi untuk mengakhiri sesi pengguna dan mengarahkan mereka kembali ke halaman login :

![image](https://github.com/user-attachments/assets/5ff28355-fc5c-4694-b807-a0f4068a489f)

![image](https://github.com/user-attachments/assets/0ab72f21-0328-414f-a26d-5bbcac18885d)








