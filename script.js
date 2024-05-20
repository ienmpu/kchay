// Скрипт для обработки регистрации
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Здесь можно добавить AJAX-запрос для отправки данных на сервер
    alert('Регистрация завершена');
});

// Скрипт для обработки авторизации
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Здесь можно добавить AJAX-запрос для отправки данных на сервер
    alert('Вход выполнен');
});

// Скрипт для создания новой заявки
document.getElementById('newBookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Здесь можно добавить AJAX-запрос для отправки данных на сервер
    alert('Заявка подана');
});

// Пример данных заявок для панели администратора (можно заменить на AJAX-запрос к серверу)
const bookings = [
    {fio: 'Иван Иванов', phone: '1234567890', email: 'ivan@example.com', car: 'Toyota', booking_date: '2024-06-01', status: 'новое'},
    {fio: 'Петр Петров', phone: '0987654321', email: 'petr@example.com', car: 'Honda', booking_date: '2024-06-02', status: 'подтверждено'}
];

// Заполнение таблицы заявок для администратора
const adminBookingsTable = document.getElementById('adminBookingsTable');
bookings.forEach(booking => {
    const row = adminBookingsTable.insertRow();
    row.insertCell(0).innerText = booking.fio;
    row.insertCell(1).innerText = booking.phone;
    row.insertCell(2).innerText = booking.email;
    row.insertCell(3).innerText = booking.car;
    row.insertCell(4).innerText = booking.booking_date;
    row.insertCell(5).innerText = booking.status;
    const actionCell = row.insertCell(6);
    const select = document.createElement('select');
    ['новое', 'подтверждено', 'отклонено'].forEach(status => {
        const option = document.createElement('option');
        option.value = status;
        option.text = status;
        if (status === booking.status) {
            option.selected = true;
        }
        select.appendChild(option);
    });
    actionCell.appendChild(select);
});
