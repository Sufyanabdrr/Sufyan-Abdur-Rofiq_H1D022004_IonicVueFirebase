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

Berdasarkan kode di atas, kita dapat melihat bahwa untuk memungkinkan pengguna login menggunakan akun Google, kita harus memasukkan Client ID terlebih dahulu. Client ID ini dapat diperoleh dengan mengunjungi halaman API di Google Console (tautan: https://console.cloud.google.com/apis/dashboard). Setelah menemukan Client ID, salin dan masukkan ke dalam kode tersebut. Jika login berhasil, pengguna akan diarahkan ke halaman Home; jika login gagal, pesan "Login gagal!" - "Terjadi kesalahan saat login dengan Google. Coba lagi." akan ditampilkan.

3. Selanjutnya, kita membuat halaman Login, Home, Profile dan Navbarnya dengan kode sebagai berikut :

a). Halaman Login :

![image](https://github.com/user-attachments/assets/bec5f7df-44e9-4247-afcb-ab3dcfdfa878)

Halaman ini memiliki tombol untuk login menggunakan akun Google. Ketika tombol "Sign In with Google" diklik, fungsi login akan dipanggil untuk memulai proses autentikasi melalui getAuth yang sudah ditambahkan sebelumnya.

b). Halaman Home :

![image](https://github.com/user-attachments/assets/18ff3c12-f169-40e3-a403-49c48f7915dd)

Kode di atas merupakan tampilan untuk halaman Home, di mana di dalamnya terdapat komponen TabsMenu yang berfungsi untuk memanggil dan menampilkan Navbar.

c). Halaman Profile :

![image](https://github.com/user-attachments/assets/9153769e-d1d5-48f9-a82c-8125ca57b22b)

![image](https://github.com/user-attachments/assets/0b5ed0d2-4665-4355-97f2-313c6b44253c)

Dari kode di atas, dapat dilihat bahwa ProfilePage menampilkan informasi pengguna seperti foto profil, nama, dan email. Di bagian header, terdapat tombol logout yang berfungsi untuk mengakhiri sesi pengguna dan keluar dari aplikasi.

d). Navbar :

![image](https://github.com/user-attachments/assets/90e964a6-716c-4e39-bf69-e4ecda40605f)

Pada kode di atas, dibuat navbar untuk halaman Home dan Profile menggunakan ion icons, yang menampilkan ikon untuk Home dan Profile. Ikon-ikon tersebut dapat diklik dan akan mengarahkan pengguna ke halaman yang sesuai.

# Tugas 10 - Pertemuan 11 Praktikum Pemrograman Mobile

# A. Proses CRUD :

1). Create atau membuat Todo :

![image](https://github.com/user-attachments/assets/06006433-1683-4e6f-8695-ff0274a818ab)

![image](https://github.com/user-attachments/assets/0c7e61fc-bdd4-43d9-97cd-89dc174ca549)

Pengguna dapat menambahkan todo baru dengan memasukkan title dan description. Tekan tombol "+" di pojok kanan bawah untuk membuka halaman Add Todo. Setelah mengisi bagian title dan description, klik "Add Todo" untuk menyimpan ke Firestore.

2). Read Todo atau membaca Todo pada halaman home :

![image](https://github.com/user-attachments/assets/34347f4b-8a1a-46f8-8f01-78413d607946)

Tampilan di atas menampilkan daftar ToDo yang terbagi menjadi dua bagian, yaitu Active Todos dan Completed Todos.

3). Update Todo atau mengubah Todo :

![image](https://github.com/user-attachments/assets/45b83ee2-5a22-4224-9d02-2ff3e9bbe683)

Langkah pertama adalah menggeser Todo yang akan diupdate ke sebelah kiri, kemudian akan muncul 2 ikon yaitu ikon pensil dengan background berwarna biru dan ikon centang dengan background berwarna hijau. Kemudian klik ikon pensil dengan background berwarna biru maka akan masuk pada halaman Edit Todo :

![image](https://github.com/user-attachments/assets/31cbb7e7-438b-44c6-94a6-a211b9e2d71f)

kemudian setelah mengupdate data pada halaman Edit Todo :

![image](https://github.com/user-attachments/assets/a8b885a9-d7bc-4b36-9f7d-1c11d8fa0a6a)

Selanjutnya klik tombol Edit Todo berwarna biru untuk menyimpan perubahan, maka data Todo pada halaman home akan berubah/terupdate :

![image](https://github.com/user-attachments/assets/94eee61c-2777-463b-b7de-3e7b24f73721)

4). Delete Todo atau menghapus Todo :

![image](https://github.com/user-attachments/assets/af6436ce-d18a-4263-a239-1cb3de7b1866)

Untuk menghapus Todo caranya adalah dengan menggeser Todo yang akan dihapus ke sebelah kanan, kemuadian akan tampil ikon sampah dengan background berwarna merah dan akan muncul konfirmasi Todo berhasil dihapus dan Todo akan terhapus :

![image](https://github.com/user-attachments/assets/b34541a1-573b-4756-b491-a51337416371)

5). Toggle Todo Status atau mengubah status Todo dari active menjadi compelete :

![image](https://github.com/user-attachments/assets/4312d1e5-40be-4722-90e8-974946557432)

langkah pertama adalah menggeser Todo ke sebelah kiri, kemudian akan muncul 2 ikon yaitu ikon pensil dengan background berwarna biru dan ikon centang dengan background berwarna hijau. Kemudian klik ikon centang dengan background berwarna hijau :

![image](https://github.com/user-attachments/assets/c4d4893b-d841-4270-871c-37b8b5607a41)

Maka akan muncul konfirmasi Todo berubah status dan Todo akan berubah status menjadi complete.
























