ymaps.ready(init);

function init(){
    // Создаем карту
    var myMap = new ymaps.Map("map", {
        center: [53.8996, 30.3322], // Координаты Могилева
        zoom: 12 // Масштаб карты
    });

    // Добавляем метку на карту
    var myPlacemark = new ymaps.Placemark([53.8996, 30.3322], {
        hintContent: 'Могилев, Беларусь',
        balloonContent: 'Могилев, Беларусь'
    });

    myMap.geoObjects.add(myPlacemark);
}
