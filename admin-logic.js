// مبرمج بواسطة Eng. Abdel Nasser
document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // هنا مستقبلاً هنضيف كود الربط بقاعدة البيانات (Firebase)
    alert('تم استلام البيانات يا هندسة! جاري المعالجة والنشر على المنصة...');
    
    // مسح الخانات بعد الرفع
    this.reset();
});
