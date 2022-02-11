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

    if ($(window).width() <= 1260) {
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
        fetch("https://draper.agency/send.php", {
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
    //this.slick();
};

Services.prototype.slick = function() {
        $('.slick').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        });
        $('.slick').on('afterChange', (event, slick, currentSlide, nextSlide) => {
            console.log(currentSlide);
            switch(currentSlide) {
                case 0:
                    this.switchActive(this.brandStrategyLink);
                    break;
                case 1:
                    this.switchActive(this.markStrategyLink);
                    break;
                case 2:
                    this.switchActive(this.markAnalysisLink);
                    break;
                case 3:
                    this.switchActive(this.markTzLink);
                    break;
                case 4:
                    this.switchActive(this.creativeStrategyLink);
                    break;
            }
        });
}

Services.prototype.switchActive = function(currentLink) {
    if(currentLink != this.currentActiveLink) {
        this.currentActiveLink.classList.remove("active");
        this.currentActive.classList.remove("active");
    }
    else 
        return;
    
    switch(currentLink) {
        case this.brandStrategyLink: 
            this.currentActiveLink = this.brandStrategyLink;
            this.currentActive = this.brandStrategy;
            break;
        case this.markStrategyLink: 
            this.currentActiveLink = this.markStrategyLink;
            this.currentActive =this. markStrategy;
            break;
        case this.markAnalysisLink: 
            this.currentActiveLink = this.markAnalysisLink;
            this.currentActive = this.markAnalysis;
            break;
        case this.markTzLink: 
            this.currentActiveLink = this.markTzLink;
            this.currentActive = this.markTz;
            break;
        case this.creativeStrategyLink: 
            this.currentActiveLink = this.creativeStrategyLink;
            this.currentActive = this.creativeStrategy;
            break;
    }

    
    this.currentActiveLink.classList.add("active");
    this.currentActive.classList.add("active");
}