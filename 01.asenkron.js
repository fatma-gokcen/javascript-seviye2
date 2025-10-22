// Asenkron programlama: javaScriptin aynı anda birden fazla işi yönetebilmesidir.
//  yani bazı işler arkada beklerken diğer işler çalışır.

// console.log("kahve siparişi verdim");
// setTimeout(() => {
//     console.log("kahve hazır")
// }, 3000);
// console.log("bu sırada telefondaydım")


// Event Loop bileşenleri

// 1. Call Stack = Yığın : Kodun satır satır yürütüldüğü yerdir.
// Push ve pop işlemleri burada gerçekleştirilir.

//2. Web API = Taryıcı API'leri : setTimeout, fetch, addEventListener .. bu tarz asenkron fonksiyonlar burada beklerç

//3. Callback Queue : web api'lerde işi biten görevlerin aktarıldığı yerdir.

//4. Call Stack boşalınca Callback Queue’daki ilk görevi alıp Stack’e gönderir. Böylece “senkron kodlar” bitmeden “asenkron işler” araya girmez.

// console.log("1")

// setTimeout(() => {
//     console.log("2")
// }, 0);

// console.log("3")


// Call Stack örnek
// function a() {
//     console.log("A çalıştı")
//     b();
// }
// function b() {
//     console.log("B çalıştı")
// }
// a();

// Task Queue  (Makro görev kuyruğu) . Bu kuyrukta setTimeout, setInterval, DOM olayları (click, load, vs) gibi asenkron görevler bekler.

// console.log("Başladı");
// setTimeout(() => {
//     console.log("zamanlayıcı bitti")
// }, 0);
// console.log("Bitti")

// Microtask Queue (Mikro görev kuyruğu): Microtask’ler, Task Queue’dan önce çalıştırılır.

console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");



