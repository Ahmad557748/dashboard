




// sidebar



let sidebar = document.getElementById("sidebar");
let content = document.querySelector("#content");
let sidebar_toggle = document.querySelector("#sidebar-toggle");


sidebar_toggle.addEventListener("click", () => {
    // تغيير اتجاه السايد بار حسب اللغة
    if (window.innerWidth > 767) {
        if (sidebar.style.right === "0px") {
            sidebar.style.right = "-250px";
            content.style.marginRight = "0px";
        } else {
            sidebar.style.right = "0px";
            content.style.marginRight = "250px";
        }
    } else {
        if (sidebar.style.right === "0px") {
            sidebar.style.right = "-250px";
        } else {
            sidebar.style.right = "0px";
        }
    }
});












// sidebar_toggle.addEventListener("click", () => {
//     let sidebarWidth = window.getComputedStyle(sidebar).width;
//     if (sidebarWidth == "250px") {
//         sidebar.style.width = "0";
//         content.style.marginRight = "0";

//     } else {
//         sidebar.style.width = "250px";
//         content.style.marginRight = "250px";
//     }

// }
// );


// messages-container

let messagescontainer = document.getElementById('messages-container');
let messagesarea = document.getElementById('messages-area');

messagescontainer.addEventListener("click", function () {
    messagesarea.style.display = messagesarea.style.display === "block" ? "none" : "block";
});



// messages-container

let messagescontainerbell = document.getElementById('messages-container-bell');
let messagesarebell = document.getElementById('messages-are-bell');

messagescontainerbell.addEventListener("click", function () {
    messagesarebell.style.display = messagesarebell.style.display === "block" ? "none" : "block";
});







//new DataTable('#example');
new DataTable('#example', {
    responsive: true,
    layout: {
        topStart: {
            buttons: [
                { extend: 'copy', text: 'نسخ', className: 'btn-table-blue' },
                { extend: 'excel', text: 'تصدير للأكسل', className: 'btn-table-blue' },
                { extend: 'pdf', text: 'تصدير كملف', className: 'btn-table-blue' },
                { extend: 'print', text: 'طباعة', className: 'btn-table-blue' }
            ]
        }
    }
});