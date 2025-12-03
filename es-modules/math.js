// Modülerlik = kodu küçük parçalara ayırmak 
// Büyük bir dosyada her  şeyi yazmak yerine her iişlevi ayrı bir dosyada tutabiliriz
//Kodun okunması ve yönetilmesi kolaylaşır.

// Export= yazdığımız dosyadaki elemanları(bileşen, fonksiyon) dışarıya açmak  için kullanılır.
// Named export
export const sum = (a, b) => a + b;
export const multiply = (a, b) => a * b;

// Default export
export default function greet(name) {
    console.log(`Hello, ${name}!`);
}
