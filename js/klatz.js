document.addEventListener("DOMContentLoaded", main);
function main() {
    lazyload();

    const popup = new Popup();
    popup.init();

    const form = new Form(popup);
    form.init();

    const burger = new Burger();
    burger.init();

    const services = new Services();
    services.init();

    if ($(window).width() <= 990) {
        const fullscreenImage = new FullscreenImage();
        fullscreenImage.init();
    }
}

function Form(popup) {
  this.popup = popup;
}


Form.prototype.init = function() {
  let form = document.getElementById("form");
  let formEntity = this;
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    fetch("https://draper.tmweb.ru/send.php", {
      method: "post",
      //make sure to serialize your JSON body
      body: formData
    })
    .then( (response) => { 
        formEntity.popup.wrapper.classList.remove("hidden");
    });
  });
}

function Popup() {
  this.wrapper = document.querySelector(".popupForm__wrapper");
  this.button = document.querySelector(".popupForm>button");
}

Popup.prototype.init = function() {
  this.button.addEventListener("click", () => {
    this.wrapper.classList.add("hidden");
  });
  this.wrapper.addEventListener("click", (e) => {
    if(e.target == this.wrapper)
      this.wrapper.classList.add("hidden");
  });
}

function Burger() {

}

Burger.prototype.init = function() {
    let burgerDom = document.querySelector(".burger");
    let mobileNavDom = document.querySelector(".mobileNav__wrapper");
    burgerDom.addEventListener("click", () => {
        burgerDom.classList.toggle("active");
        mobileNavDom.classList.toggle("hidden");
    });
};

function FullscreenImage() {

};

FullscreenImage.prototype.init = function() {
    $(".fullscreen__parent").click(function(){	// Событие клика на маленькое изображение
        var img = $(this.querySelector(".fullscreen"));	// Получаем изображение, на которое кликнули
        var src = img.attr('src'); // Достаем из этого изображения путь до картинки
        $("body").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
            "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
            "<img src='"+src+"' class='popup_img' />"+ // Само увеличенное фото
            "</div>");
        $(".popup").fadeIn(200); // Медленно выводим изображение
        $(".popup_bg").click(function(){	// Событие клика на затемненный фон	   
            $(".popup").fadeOut(200);	// Медленно убираем всплывающее окн	
            setTimeout(function() {	// Выставляем таймер
                $(".popup").remove(); // Удаляем разметку всплывающего окна
            }, 200);
        });
  });
    $(".fullscreen").click(function(){	// Событие клика на маленькое изображение
        var img = $(this);	// Получаем изображение, на которое кликнули
        var src = img.attr('src'); // Достаем из этого изображения путь до картинки
        $("body").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
            "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
            "<img src='"+src+"' class='popup_img' />"+ // Само увеличенное фото
            "</div>");
        $(".popup").fadeIn(200); // Медленно выводим изображение
        $(".popup_bg").click(function(){	// Событие клика на затемненный фон	   
            $(".popup").fadeOut(200);	// Медленно убираем всплывающее окн	
            setTimeout(function() {	// Выставляем таймер
                $(".popup").remove(); // Удаляем разметку всплывающего окна
            }, 200);
        });
  });
}

function Services() {
}

Services.prototype.init = function() {
    this.slick();
};

Services.prototype.slick = function() {
    $('#persons__slick').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
    });
    $('#inside__slick').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
    });
    
    $('#persons__slick').on('afterChange', (event, slick, currentSlide, nextSlide) => {
        console.log(currentSlide);
        switch(currentSlide) {
            case 0:
                document.querySelector(".persons>.title").innerHTML = `
                    <h2>Персоны.</h2>
                    <p>пример одного из сегмента</p>
                `
                break;
            case 1:
                document.querySelector(".persons>.title").innerHTML = `
                    <h2>5 вопросов Шеррингтона.</h2>
                `
                break;
            case 2:
                document.querySelector(".persons>.title").innerHTML = `
                    <h2>Матрица потребностей-решений</h2>
                `
                break;
        }
    });
    
    $('#inside__slick').on('afterChange', (event, slick, currentSlide, nextSlide) => {
        console.log(currentSlide);
        switch(currentSlide) {
            case 0:
                document.querySelector(".dynamicText").innerHTML = `
                    <p class="active">
                        Во-первых, достаточно высокий процент аудитории имеют в семье более одной пасты. Думали, данный сегмент меньше
                    </p>
                `
                break;
            case 1:
                document.querySelector(".dynamicText").innerHTML = `
                    <p class="active">
                        Во-вторых, есть ощутимая часть аудитории (каждый четвертый респондент), которые обращают внимание на вкус пасты
                    </p>
                `
                break;
        }
    });
}