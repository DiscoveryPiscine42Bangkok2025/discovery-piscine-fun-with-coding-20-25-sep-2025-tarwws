// เลือก element ปุ่ม burger (☰) และเมนูนำทาง (nav.menu)
const burger = document.getElementById('burger'); // ปุ่ม burger
const menu = document.getElementById('menu');     // เมนูหลัก <nav>

// เมื่อคลิกปุ่ม burger
burger.addEventListener('click', () => {
    menu.classList.toggle('open'); // สลับ class "open" ของเมนู

    // ถ้าเมนูถูกเปิด
    if (menu.classList.contains('open')) {
        burger.innerHTML = '✕';          // เปลี่ยน icon เป็นกากบาท (✕)
        burger.style.color = '#000000ff'; // ตั้งสีปุ่มเป็นสีดำ
    } else {
        burger.innerHTML = '☰';          // เปลี่ยน icon กลับเป็น ☰
        burger.style.color = '#000000ff'; // คงสีดำไว้
    }
});

// เลือก <a> ทุกลิงก์ในเมนู
const menuLinks = document.querySelectorAll('.menu a');

// วนลูปเพิ่ม event ให้ลิงก์แต่ละตัว
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('open'); // ปิดเมนูทันทีเมื่อคลิกลิงก์
        burger.innerHTML = '☰';        // เปลี่ยน icon กลับเป็น ☰
        burger.style.color = '#000000ff'; // คงสีดำ
    });
});

// ตรวจสอบการคลิกนอกเมนู/ปุ่ม burger
document.addEventListener('click', (e) => {
    if (!burger.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('open'); // ปิดเมนู
        burger.innerHTML = '☰';        // icon เป็น ☰
        burger.style.color = '#000000ff'; // คงสีดำ
    }
});
