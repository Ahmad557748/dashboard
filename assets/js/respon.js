
//new DataTable('#example');

new DataTable('#example', {

    responsive: true,
    layout: {
        topStart: {
            buttons: [
                {
                  extend: 'copy',
        text: 'نسخ',
        className: 'btn btn-primary m-1 rounded-3' // الأزرق الأساسي
    },
    {
        extend: 'excel',
        text: 'تصدير للاكسل',
        style: 'background-color: #0077b6 !important;', // أزرق أفتح قليلاً
        className: 'btn btn-info text-white m-1 rounded-3'
    },
    {
        extend: 'pdf',
        text: 'تصدير كملف',
        className: 'btn btn-secondary m-1 rounded-3' // رمادي غامق لكسر حدة الأزرق
    },
    {
        extend: 'print',
        text: 'طباعة',
        className: 'btn btn-dark m-1 rounded-3' // كحلي غامق جداً
    },

            ]
        }
    }
});