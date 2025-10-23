// DOM Manipülasyonu
// JavaScriptin HTML ile iletişim kurmasını sağlar.
// Sayfa yüklendikten sonra dahi içerikleri dinamik olarak değiştirebiliriz.

// Buton ve içerik div'ini seçelim
const ekleBtn = document.querySelector("#ekleBtn");
const icerikDiv = document.querySelector("#icerik");

// Butona tıklanınca çalışacak olay
ekleBtn.addEventListener("click", () => {
    // Yeni paragraf (p) elemanı oluştur
    const yeniParagraf = document.createElement("p");
    yeniParagraf.textContent = "Yeni bir paragraf eklendi!";

    // İçerik div'ine ekle
    icerikDiv.appendChild(yeniParagraf);
});
