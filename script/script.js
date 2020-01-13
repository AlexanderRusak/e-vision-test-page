let countries = {
    europe: ["Австрия", "Андорра", "Беларусь", "Бельгия", "Болгария", "Босния и Герцеговина", "Ватикан",
        "Великобритания",
        "Венгрия",
        "Германия",
        "Греция",
        "Дания",
        "Ирландия",
        "Исландия",
        "Испания",
        "Косово",
        "Латвия",
        "Литва",
        "Лихтенштейн",
        "Люксембург",
        "Сев.Македония",
        "Мальта",
        "Молдова",
        "Монако",
        "Нидерланды",
        "Норвегия",
        "Польша",
        "Португалия",
        "Россия",
        "Румыния",
        "Сан-Марино",
        "Сербия",
        "Словакия",
        "Словения",
        "Украина",
        "Финляндия",
        "Франция",
        "Хорватия",
        "Черногория",
        "Чехия",
        "Швейцария",
        "Швеция",
        "Эстония",
    ],
    asia: ["Казахстан", "ОАЭ",],
    africa: ["Египет", "Тунис", "ЮАР",],
}
let $sliders = $(".carousel-inner").children();
for (let i = 0; i < $sliders.length; i++) {
    $sliders.eq(i).attr("id", i + 1);
    $(".current-slider-count").eq(i).text((i + 1) + " / " + $sliders.length);

}

var addCountries = (countries_array, tagTargetName) => {
    countries_array.map((country) => {
        $(`#${tagTargetName}`).append(`<option>${country}</option`);
    })
}
addCountries(countries.europe, "europe");
addCountries(countries.asia, "asia");
addCountries(countries.africa, "africa");
