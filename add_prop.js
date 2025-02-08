const form = document.getElementById('property-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // استخراج البيانات من الحقول
    const name = document.getElementById('property-name').value;
    const type = document.getElementById('property-type').value;
    const category = document.getElementById('property-category').value;
    const details = document.getElementById('property-details').value;
    const price = document.getElementById('property-price').value;

    // إنشاء بطاقة العقار
    const card = `
                <div class="col-md-4">
                    <div class="card property-card">
                        <img src="placeholder.jpg" class="card-img-top" alt="${name}">
                        <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                            <p class="card-text">${details}</p>
                            <p class="card-text"><strong>السعر:</strong> ${price} ريال</p>
                            <a href="#" class="btn btn-primary">تفاصيل أكثر</a>
                        </div>
                    </div>
                </div>
            `;

    // حفظ البطاقة في التخزين المحلي
    const existingCards = localStorage.getItem('cards') || '';
    localStorage.setItem('cards', existingCards + card);

    // إعادة تعيين الحقول
    alert('تم إضافة العقار بنجاح!');
    form.reset();
});

// عند تحميل الصفحة السابقة، قم بعرض البطاقات المحفوظة
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('properties-section');
    const cards = localStorage.getItem('cards');
    if (container && cards) {
        container.innerHTML += cards;
    }
});