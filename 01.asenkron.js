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

// PROMİSE : JavaScriptin bir işlemi şimdi değil gelecekte bitirebileceğini söyleyen yapıdır.
// "“Henüz hazır değilim ama hazır olunca sana haber vereceğim!”"


// Promise üç durumda olabilir:

// Pending (Bekliyor) — işlem devam ediyor
// Resolved (Başarılı) — işlem tamamlandı
// Rejected (Hatalı) — işlem başarısız oldu

const soz = new Promise((resolve, reject) => {
    let basarili = true;

    if (basarili) {
        resolve("İşlem başarıyla tamamlandı!");
    }
    else {
        reject("Bir hata oluştu!");
    }
});

soz
    .then(sonuc => console.log(sonuc))   // resolve tetiklenirse
    .catch(hata => console.log(hata));   // reject tetiklenirse

// Async/Await : Promises ile çalışmayı daha kolay ve okunabilir hale getiren yapılardır. Normalde Promises .then() ve .catch() ile zincirlenir ama async/await bunları düz bir akış gibi yazar.

// async , Bir fonksiyonun başına async yazarsan o fonksiyon her zaman bir Promise döner.

async function merhaba() {
    return "Hello!";
}

merhaba().then(sonuc => console.log(sonuc)); // Hello!

// await : await, sadece async fonksiyonun içinde kullanılır. Bir Promise’in sonuçlanmasını bekler, sonra devam eder.

async function bekle() {
    console.log("İşlem başlıyor...");
    await new Promise(resolve => setTimeout(resolve, 2000)); // 2 saniye beklet
    console.log("İşlem tamamlandı!");
}

bekle();

// async → fonksiyonu Promise’e dönüştürür
// await → Promise’in tamamlanmasını bekler
// Kod akışı senkronmuş gibi görünür ama aslında asenkrondur





