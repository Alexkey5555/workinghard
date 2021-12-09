let divFullDate = document.querySelector('.fulldate');
let divShortDate = document.querySelector('.shortdate');
let shortDate;
let fullDate;
let display = function () {
    let now = new Date();
    let day = now.getDate();
    let year = now.getFullYear();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let messageHour = '';
    function days() {
        let week = now.getDay();
        const weeks = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
        return weeks[week - 1];
    }
    function month() {
        let month = now.getMonth();
        const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря',];
        return months[month];
    }
    if (hour == 1 || hour == 21) {
        messageHour = 'час';
    }
    else if (hour >= 2 && hour <= 4 || hour >= 22 && hour <= 24) {
        messageHour = 'часа';
    }
    else if (hour >= 5 && hour <= 20) {
        messageHour = 'часов';
    }
    shortDate = now.toLocaleDateString() + ' - ' + now.toLocaleTimeString();
    fullDate = 'Сегодня ' + days() + ', ' + day + ' ' + month() + ' ' + year + ' года, ' + hour + ' ' + messageHour + ' ' + minute + ' минут ' + second + ' секунды';
}
let update = function () {
    now = new Date();
    display()
    divFullDate.innerHTML = fullDate;
    divShortDate.innerHTML = shortDate;
}
setInterval(update, 1000);







