// Variabel untuk menyimpan nilai yang ditampilkan di layar
var layar = '';

// Fungsi untuk menambahkan angka atau simbol ke layar
function masukkan(input) {
    layar += input;
    document.getElementById('layar').innerHTML = layar;
}

// Fungsi untuk menghitung hasil dari operasi matematika
function hitung() {
    layar = eval(layar);
    document.getElementById('layar').innerHTML = layar;
}

// Fungsi untuk membersihkan layar
function bersihkan() {
    layar = '';
    document.getElementById('layar').innerHTML = layar;
}

// Fungsi untuk menghitung sinus sudut (dalam radian)
function sinus() {
    var sudut = parseFloat(layar);
    var hasil = Math.sin(sudut);
    document.getElementById('layar').innerHTML = hasil;
}

// Fungsi untuk menghitung cosinus
function cosinus() {
    var sudut = parseFloat(layar);
    var hasil = Math.cos(sudut);
    document.getElementById('layar').innerHTML = hasil;
}

// Fungsi untuk menghitung tangen
function tangen() {
    var sudut = parseFloat(layar);
    var hasil = Math.tan(sudut);
    document.getElementById('layar').innerHTML = hasil;
}


// Fungsi untuk menghitung akar kuadrat dari angka
function akar() {
    var angka = parseFloat(layar);
    var hasil = Math.sqrt(angka);
    document.getElementById('layar').innerHTML = hasil;
}

// Fungsi untuk menghitung persentase dari angka
function persen() {
    var angka = parseFloat(layar);
    var hasil = angka / 100;
    document.getElementById('layar').innerHTML = hasil;
}

