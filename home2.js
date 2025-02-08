const saleImages = {
    buildings: [
        'img/2.jpg',
        'img/2.jpg',
        'img/2.jpg',
        'img/2.jpg',
        'img/2.jpg',
        'img/2.jpg',
        'img/2.jpg',
        'img/2.jpg',
        'img/2.jpg',
        'img/2.jpg',
        'https://via.placeholder.com/150?text=مبنى+2',
        'https://via.placeholder.com/150?text=مبنى+3',
        'https://via.placeholder.com/150?text=مبنى+4',
    ],
    apartments: [
        'img/3.jpg',
        'img/3.jpg',
        'img/3.jpg',
        'img/3.jpg',
        'img/3.jpg',
        'img/3.jpg',
        'img/3.jpg',
        'img/3.jpg',
        'img/3.jpg',
        'img/3.jpg',
        'img/3.jpg',
        'img/3.jpg',
    ],
    rooms: [
        'img/4.jpg',
        'img/4.jpg',
        'img/4.jpg',
        'img/4.jpg',
        'img/4.jpg',
        'img/4.jpg',
        'img/4.jpg',
        'img/4.jpg',
        'img/4.jpg',
        'img/4.jpg',
        'img/4.jpg',
        'img/4.jpg',
    ],
    lands: [
        'img/5.jpg',
        'img/5.jpg',
        'img/5.jpg',
        'img/5.jpg',
        'img/5.jpg',
        'img/5.jpg',
        'img/5.jpg',
        'img/5.jpg',
        'img/5.jpg',
        'img/5.jpg',
        'img/5.jpg',
        'img/5.jpg',
    ]
};
const byImages = {
    buildings: [
        'img/2.jpg',
        'img/2.jpg',
        'img/2.jpg',
        'img/2.jpg',
        'img/2.jpg',
        'img/2.jpg',
        'img/2.jpg',
        'img/2.jpg',
        'img/2.jpg',
        'img/2.jpg',
        'https://via.placeholder.com/150?text=مبنى+2',
        'https://via.placeholder.com/150?text=مبنى+3',
        'https://via.placeholder.com/150?text=مبنى+4',
    ],
    apartments: [
        'img/3.jpg',
        'img/3.jpg',
        'img/3.jpg',
        'img/3.jpg',
        'img/3.jpg',
        'img/3.jpg',
        'img/3.jpg',
        'img/3.jpg',
        'img/3.jpg',
        'img/3.jpg',
        'img/3.jpg',
        'img/3.jpg',
    ],
    rooms: [
        'img/4.jpg',
        'img/4.jpg',
        'img/4.jpg',
        'img/4.jpg',
        'img/4.jpg',
        'img/4.jpg',
        'img/4.jpg',
        'img/4.jpg',
        'img/4.jpg',
        'img/4.jpg',
        'img/4.jpg',
        'img/4.jpg',
    ],
    lands: [
        'img/5.jpg',
        'img/5.jpg',
        'img/5.jpg',
        'img/5.jpg',
        'img/5.jpg',
        'img/5.jpg',
        'img/5.jpg',
        'img/5.jpg',
        'img/5.jpg',
        'img/5.jpg',
        'img/5.jpg',
        'img/5.jpg',
    ]
};
const byImagesContainer = document.getElementById('byImagesContainer');

function displayImages2(images) {
    byImagesContainer.innerHTML = '';
    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        byImagesContainer.appendChild(img);
    });
}

document.getElementById('by-buildings-tab').addEventListener('click', () => {
    displayImages(byImages.buildings);
});

document.getElementById('by-apartments-tab').addEventListener('click', () => {
    displayImages(byImages.apartments);
});

document.getElementById('by-rooms-tab').addEventListener('click', () => {
    displayImages(byImages.rooms);
});

document.getElementById('by-lands-tab').addEventListener('click', () => {
    displayImages(byImages.lands);
});


document.getElementById('by-buildings-tab').addEventListener('click', () => displayImages2(byImages.buildings));
document.getElementById('by-apartments-tab').addEventListener('click', () => displayImages2(byImages.apartments));
document.getElementById('by-rooms-tab').addEventListener('click', () => displayImages2(byImages.rooms));
document.getElementById('by-lands-tab').addEventListener('click', () => displayImages2(byImages.lands));

// عرض الصور الافتراضية عند تحميل الصفحة
displayImages2(byImages.buildings);

const saleImagesContainer = document.getElementById('saleImagesContainer');

function displayImages(images) {
    saleImagesContainer.innerHTML = '';
    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        saleImagesContainer.appendChild(img);
    });
}

document.getElementById('sale-buildings-tab').addEventListener('click', () => {
    displayImages(saleImages.buildings);
});

document.getElementById('sale-apartments-tab').addEventListener('click', () => {
    displayImages(saleImages.apartments);
});

document.getElementById('sale-rooms-tab').addEventListener('click', () => {
    displayImages(saleImages.rooms);
});

document.getElementById('sale-lands-tab').addEventListener('click', () => {
    displayImages(saleImages.lands);
});


//const saleImagesContainer = document.getElementById('saleImagesContainer');
const modalImage = document.getElementById('modalImage');
//const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
const modalElement = document.getElementById('imageModal');
let imageModal = null;

if (modalElement) {
    imageModal = new bootstrap.Modal(modalElement);
} else {
    console.error("عنصر المودال غير موجود في الصفحة.");
}

function displayImages(images) {
    saleImagesContainer.innerHTML = '';
    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.addEventListener('click', () => openModal(src));
        saleImagesContainer.appendChild(img);
    });
}

// function openModal(src) {
//     const modalImage = document.getElementById('modalImage');

//     if (!modalImage) {
//         console.error("العنصر modalImage غير موجود في الصفحة.");
//         return;
//     }

//     modalImage.src = src;

//     if (imageModal) {
//         imageModal.show();
//     } else {
//         console.error("المودال غير مُهيأ بشكل صحيح.");
//     }
// }

function openModal(src) {
    if (!modalImage) {
        console.error("العنصر modalImage غير موجود في الصفحة.");
        return;
    }

    modalImage.src = src; // تحديث الصورة في المودال

    // عند النقر على "تفاصيل أكثر" يتم الانتقال لصفحة التفاصيل
    detailsButton.onclick = function() {
        window.location.href = `property_rent3.html?image=${encodeURIComponent(src)}`;
    };

    if (imageModal) {
        imageModal.show();
    } else {
        console.error("المودال غير مُهيأ بشكل صحيح.");
    }
}



document.getElementById('sale-buildings-tab').addEventListener('click', () => displayImages(saleImages.buildings));
document.getElementById('sale-apartments-tab').addEventListener('click', () => displayImages(saleImages.apartments));
document.getElementById('sale-rooms-tab').addEventListener('click', () => displayImages(saleImages.rooms));
document.getElementById('sale-lands-tab').addEventListener('click', () => displayImages(saleImages.lands));

// عرض الصور الافتراضية عند تحميل الصفحة
// displayImages(saleImages.buildings);
// document.getElementById('sale-apartments-tab').addEventListener('click', () => displayImages(saleImages.apartments));
// document.getElementById('sale-rooms-tab').addEventListener('click', () => displayImages(saleImages.rooms));
// document.getElementById('sale-lands-tab').addEventListener('click', () => displayImages(saleImages.lands));

// عرض الصور الافتراضية عند تحميل الصفحة
displayImages(saleImages.buildings);