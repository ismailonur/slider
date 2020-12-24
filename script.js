var models = [
    {
        name: 'BMW',
        image: 'img/bmw.jpg',
        link: 'https://www.kodlib.com'
    },
    {
        name: 'Mazda',
        image: 'img/mazda.jpg',
        link: 'https://www.kodlib.com'
    },
    {
        name: 'Volvo',
        image: 'img/volvo.jpg',
        link: 'https://www.kodlib.com'
    },
    {
        name: 'Skoda',
        image: 'img/skoda.jpg',
        link: 'https://www.kodlib.com'
    },
    {
        name: 'Honda',
        image: 'img/honda.jpg',
        link: 'https://www.kodlib.com'
    },
];

var index = 0;
var slaytCount = models.length;
var interval;

var settings = {
    duration: '1000',
    random: true
}

init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click', function () {
    index--;
    showSlide(index);
})

document.querySelector('.fa-arrow-circle-right').addEventListener('click', function () {
    index++;
    showSlide(index);
})

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter', function(){
        clearInterval(interval);
    })
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave', function(){
        init(settings);
    })
})

function init(settings) {

    var prev;
    interval = setInterval(function () {
        if (settings.random) {
            do {
                index = Math.floor(Math.random() * slaytCount);
            } while (index == prev)
            prev = index;
        }
        else {
            if(slaytCount == index+1){
                index=-1;
            }
            showSlide(index);
            index++;
        }
        showSlide(index);

    }, settings.duration)
}

function showSlide(i) {
    index = i;

    if (i < 0) {
        index = slaytCount - 1;
    }
    if (i >= slaytCount) {
        index = 0;
    }

    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-img-top').setAttribute('src', models[index].image);
    document.querySelector('.card-link').setAttribute('href', models[index].link);
}

