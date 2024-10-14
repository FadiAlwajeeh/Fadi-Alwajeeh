const cover_box = document.querySelector('.cover_box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

function activateCoverBox() {
    cover_box.classList.add('active');
    deactivatePopup(); // إخفاء أي Popup مفتوح
}

function deactivateCoverBox() {
    cover_box.classList.remove('active');
}

function activatePopup() {
    cover_box.classList.add('active-popup');
}

function deactivatePopup() {
    cover_box.classList.remove('active-popup');
}

// إضافة الأحداث
if (registerLink) {
    registerLink.addEventListener('click', (event) => {
        event.preventDefault(); // منع السلوك الافتراضي للرابط
        activateCoverBox(); // تفعيل صندوق التسجيل

    });
}

if (loginLink) {
    loginLink.addEventListener('click', (event) => {
        event.preventDefault(); // منع السلوك الافتراضي للرابط
        deactivateCoverBox(); // إخفاء صندوق التسجيل
        activatePopup(); // إظهار صندوق تسجيل الدخول
    });
}

if (btnPopup) {
    btnPopup.addEventListener('click', (event) => {
        event.preventDefault(); // منع السلوك الافتراضي للرابط
        activatePopup(); // تفعيل نافذة تسجيل الدخول
    });
}

if (iconClose) {
    iconClose.addEventListener('click', deactivatePopup); // إغلاق النافذة
}