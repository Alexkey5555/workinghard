// let num = 266219;
// let i = 0;
// let result = 1;
// num = num.toString().split('');
// while (i < num.length) {
//     result *= +num[i];
//     i++;
// }
// console.log(result);
// result **= 3;
// console.log(String(result).slice(0, 2));
let lang;
weeks();
function weeks(lang) {
    lang = prompt('Введите локализацию', 'ru или en');
    // if
    if (lang == 'ru') {
        console.log('Пн, Вт, Ср, Чт, Пт, Сб, Нд');
    }
    else if (lang == 'en') {
        console.log('Sun, Mon, Tues, Wed, Thurs, Fri, Sat');
    } else if (lang == null) {
        return;
    }
    else {
        console.log('Введите правильное значение');
        weeks();
    }
    //switch
    switch (true) {
        case lang == 'ru':
            console.log('Пн, Вт, Ср, Чт, Пт, Сб, Нд');
            break;
        case lang == 'en':
            console.log('Sun, Mon, Tues, Wed, Thurs, Fri, Sat');
            break;
        case lang == null:
            return;
        case lang !== 'ru' && lang !== 'en':
            console.log('Введите правильное значение');
            weeks();
    }
    //object
    let week = {
        ru: 'Пн, Вт, Ср, Чт, Пт, Сб, Нд',
        en: 'Sun, Mon, Tues, Wed, Thurs, Fri, Sat'
    };
    console.log(week[lang]);

}
let namePerson = prompt('Введите ваше имя');
let whoIs = (namePerson == 'Артем') ? console.log('Директор') :
    (namePerson == 'Александр') ? console.log('Преподаватель') :
        console.log('Студент');