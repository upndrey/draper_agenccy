document.addEventListener("DOMContentLoaded", main);
function main() {
    const burger = new Burger();
    burger.init();

    const services = new Services();
    services.init();

    const fullscreenImage = new FullscreenImage();
    fullscreenImage.init();
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

FullscreenImage.init = function() {
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
    
    $('#inside__slick').on('afterChange', (event, slick, currentSlide, nextSlide) => {
        console.log(currentSlide);
        switch(currentSlide) {
            case 0:
                document.querySelector(".dynamicText").innerHTML = `
                    <p class="active">
                        Во-первых, достаточно высокий процент аудитории имеют в семье более одной пасты. Думали, данный сегмент меньше
                    </p>
                    <p>
                        Во-вторых, есть ощутимая часть аудитории (каждый четвертый респондент), которые обращают внимание на вкус пасты
                    </p>
                `
                break;
            case 1:
                document.querySelector(".dynamicText").innerHTML = `
                    <p class="active">
                        2Во-первых, достаточно высокий процент аудитории имеют в семье более одной пасты. Думали, данный сегмент меньше
                    </p>
                    <p>
                        Во-вторых, есть ощутимая часть аудитории (каждый четвертый респондент), которые обращают внимание на вкус пасты
                    </p>
                `
                break;
            case 2:
                document.querySelector(".dynamicText").innerHTML = `
                    <p class="active">
                        3Во-первых, достаточно высокий процент аудитории имеют в семье более одной пасты. Думали, данный сегмент меньше
                    </p>
                    <p>
                        Во-вторых, есть ощутимая часть аудитории (каждый четвертый респондент), которые обращают внимание на вкус пасты
                    </p>
                `
                break;
            case 3:
                document.querySelector(".dynamicText").innerHTML = `
                    <p class="active">
                        4Во-первых, достаточно высокий процент аудитории имеют в семье более одной пасты. Думали, данный сегмент меньше
                    </p>
                    <p>
                        Во-вторых, есть ощутимая часть аудитории (каждый четвертый респондент), которые обращают внимание на вкус пасты
                    </p>
                `
                break;
            case 4:
                document.querySelector(".dynamicText").innerHTML = `
                    <p class="active">
                        5Во-первых, достаточно высокий процент аудитории имеют в семье более одной пасты. Думали, данный сегмент меньше
                    </p>
                    <p>
                        Во-вторых, есть ощутимая часть аудитории (каждый четвертый респондент), которые обращают внимание на вкус пасты
                    </p>
                `
                break;
        }
    });
}