// Jumlahkan semua angka genap dalam array berikut
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let jumlahgenap  

//JAWABAN 
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        jumlahgenap = (jumlahgenap || 0) + numbers[i];
    }     
}
console.log(jumlahgenap); // Output: 20 


const numbersTwo = [1, 2, 3, 4, 5, 6, 7, 8];
//Tambahkan semua angka ganjil dalam array dan kembalikan hasilnya.


//JAWABAN
let angkaGanjil= 0;
for (let i = 0; i < numbersTwo.length; i++) {
    if (numbersTwo[i] % 2 !== 0) {
        angkaGanjil += numbersTwo[i];
    }
}               
if (angkaGanjil === 0) {
    console.log("Tidak ada angka ganjil dalam array.");
}  
console.log(angkaGanjil); // Output: 16                                         


// Ubah semua huruf kecil dalam array menjadi huruf besar
let students = ["Tito", "arY", "Bostang"]
let hurufKecill;    


//JAWABAN
hurufKecill = students.map(student => student.toUpperCase());   
console.log(hurufKecill); // Output: ['TITO', 'ARY', 'BOSTANG']


// Ambil hanya nama-nama orang yang umurnya di atas 18 tahun.
// Ambil hanya orang yang panjang namanya lebih dari 5
const people = [
    { name: 'Andi', age: 17 },
    { name: 'Tito Alexsta', age: 20 },
    { name: 'Bostang', age: 22 },
    { name: 'Cici', age: 17 }
];
//JAWABAN 
let pipel = [];
for (let i = 0; i < people.length; i++) {
    if (people[i].age > 18 && people[i].name.length > 5) {
        pipel.push(people[i].name);
    }
} 
console.log(pipel); // Output: ['Tito Alexsta', 'Bostang'] 

// Hitung total harga semua barang
const items = [
    { name: 'Book', price: 10000 },
    { name: 'Pen', price: 5000 },
    { name: 'Pencil', price: 3000 },
];
//jawaban 
let totalPrice = 0;
for (let i = 0; i < items.length; i++) {
    totalPrice += items[i].price;
}
console.log(totalPrice); // Output: 18000
  

//Ambil hanya angka unik dari array (hapus duplikat).
const numbersThree = [1, 2, 2, 3, 4, 4, 5];

// jawaban 
let unique = [];
for (let i = 0; i < numbersThree.length; i++) {
    if (!unique.includes(numbersThree[i])) {
        unique.push(numbersThree[i]);
    }

}
console.log(unique); // Output: [1, 2, 3, 4, 5]



// Ambil nama produk dengan harga tertinggi
const products = [
    { name: 'Laptop', price: 15000000 },
    { name: 'Phone', price: 8000000 },
    { name: 'Monitor', price: 3000000 },
];
// Jawaban 
let priceMax = 0;
for (let i = 0; i < products.length; i++) {
    if (products[i].price > priceMax) {
        priceMax = products[i].price;
    }
}
console.log(priceMax); // Output: 15000000


// Buat kalimat dari array kata.
const words = ['Belajar', 'array', 'itu', 'menyenangkan'];

//Jawaban
let sentences = '';
for (let i = 0; i < words.length; i++) {
    sentences += words[i] + ' ';
}
console.log(sentences.trim()); // Output: 'Belajar array itu menyenangkan'


// Ambil hanya 3 data pertama yang mengandung kata 'a' pada nama.
const names = ['Aldo', 'Budi', 'Caca', 'Dinda', 'Eka', 'Fajar'];

//Jawaban 
let firstNamesWithA = [];
for (let i = 0; i < names.length; i++) {
    if (names[i].toLowerCase().includes("a") && firstNamesWithA.length < 3) {
        firstNamesWithA.push(names[i]);
    }
}
console.log(firstNamesWithA); // Output: ['Aldo', 'Caca', 'Dinda']

// Hitung total karakter dari semua nama dalam array.
const namesTwo = ['Ani', 'Budi', 'Citra']; // 12 karakter

//jawaban
let totalChar = 0;
for (let i = 0; i < namesTwo.length; i++) {
    totalChar += namesTwo[i].length;
}
console.log(totalChar); // Output: 12


// Output: ['Tono (22)', 'Tara (25)']
// Ubah array objek ke array string dengan format 'Nama (Umur)' dan hanya yang umurnya di atas 21.
const peopleTwo = [
    { name: 'Tono', age: 22 },
    { name: 'Tini', age: 19 },
    { name: 'Tara', age: 25 },
];
//Jawaban
let arrayS = [];
for (let i = 0; i < peopleTwo.length; i++) {
    if (peopleTwo[i].age > 21) {
        arrayS.push(`${peopleTwo[i].name} (${peopleTwo[i].age})`);
    }
}
console.log(arrayS); // Output: ['Tono (22)', 'Tara (25)']
