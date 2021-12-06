let d = new Date();
let n = d.getDay();
const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
week.forEach((element, index) => {
    let div = document.createElement('div');
    div.innerHTML = element;
    if (index == 6 || index == 5) {
        div.style.cssText = `font-style: italic; `;
    }
    if (index == n - 1) {
        div.style.cssText = `font-weight: bold; `;
    }
    document.body.append(div);
});





