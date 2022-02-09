document.addEventListener("DOMContentLoaded", main);
function main() {
    const popup = new Popup();
    popup.init();

    const form = new Form(popup);
    form.init();


    const nav = new Nav();
    nav.init();

    const burger = new Burger();
    burger.init();

    const services = new Services();
    services.init();

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

function Nav() {

};

Nav.prototype.init = function() {
    
  let currentActiveLink = ".servicesLink";
  $(".servicesLink").click(function(e) {
    e.preventDefault();
    if(currentActiveLink && currentActiveLink !== ".servicesLink")
      document.querySelectorAll(currentActiveLink).forEach((elem) => {
        elem.classList.remove("active");
      });
    currentActiveLink = ".servicesLink";
    $(".servicesLink").addClass("active");
    $(".mobileNav__wrapper").addClass("hidden");
    $(".nav .nav__right .burger").removeClass("active");

    $([document.documentElement, document.body]).animate({
      scrollTop: $("#services").offset().top
    }, 2000);
  });

  $(".casesLink").click(function(e) {
    e.preventDefault();
    if(currentActiveLink && currentActiveLink !== ".casesLink")
      document.querySelectorAll(currentActiveLink).forEach((elem) => {
        elem.classList.remove("active");
      });
    currentActiveLink = ".casesLink";
    $(".casesLink").addClass("active");
    $(".mobileNav__wrapper").addClass("hidden");
    $(".nav .nav__right .burger").removeClass("active");

    $([document.documentElement, document.body]).animate({
      scrollTop: $("#cases").offset().top - 100
    }, 2000);
  });

  $(".teamLink").click(function(e) {
    e.preventDefault();
    if(currentActiveLink && currentActiveLink !== ".teamLink")
      document.querySelectorAll(currentActiveLink).forEach((elem) => {
        elem.classList.remove("active");
      });
    currentActiveLink = ".teamLink";
    $(".teamLink").addClass("active");
    $(".mobileNav__wrapper").addClass("hidden");
    $(".nav .nav__right .burger").removeClass("active");

    $([document.documentElement, document.body]).animate({
      scrollTop: $("#team").offset().top - 100
    }, 2000);
  });

  $(".contactsLink").click(function(e) {
    e.preventDefault();
    if(currentActiveLink && currentActiveLink !== ".contactsLink")
      document.querySelectorAll(currentActiveLink).forEach((elem) => {
        elem.classList.remove("active");
      });
    currentActiveLink = ".contactsLink";
    $(".contactsLink").addClass("active");
    $(".mobileNav__wrapper").addClass("hidden");
    $(".nav .nav__right .burger").removeClass("active");

    $([document.documentElement, document.body]).animate({
      scrollTop: $("#contacts").offset().top
    }, 2000);
  });
}

function Services() {
    this.brandStrategyLink = document.getElementById("brandStrategyLink");
    this.markStrategyLink = document.getElementById("markStrategyLink");
    this.markAnalysisLink = document.getElementById("markAnalysisLink");
    this.markTzLink = document.getElementById("markTzLink");
    this.creativeStrategyLink = document.getElementById("creativeStrategyLink");
    this.brandStrategy = document.getElementById("brandStrategy");
    this.markStrategy = document.getElementById("markStrategy");
    this.markAnalysis = document.getElementById("markAnalysis");
    this.markTz = document.getElementById("markTz");
    this.creativeStrategy = document.getElementById("creativeStrategy");
    
    this.currentActiveLink = this.brandStrategyLink;
    this.currentActive = this.brandStrategy;
}

Services.prototype.init = function() {
    this.slick();
    this.brandStrategyLink.addEventListener(
        "click", 
        this.switchActive.bind(this, this.brandStrategyLink)
    ); 
    this.markStrategyLink.addEventListener(
        "click", 
        this.switchActive.bind(this, this.markStrategyLink)
    ); 
    this.markAnalysisLink.addEventListener(
        "click", 
        this.switchActive.bind(this, this.markAnalysisLink)
    ); 
    this.markTzLink.addEventListener(
        "click", 
        this.switchActive.bind(this, this.markTzLink)
    ); 
    this.creativeStrategyLink.addEventListener(
        "click", 
        this.switchActive.bind(this, this.creativeStrategyLink)
    ); 
};

Services.prototype.slick = function() {
    if ($(window).width() <= 990) {
        $('.slick').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        });
        let prevSlide = 0;
        $('.slick').on('afterChange', (event, slick, currentSlide, nextSlide) => {
            console.log(prevSlide, currentSlide);
            if(prevSlide != currentSlide) {
              $('.slick__elem ul>li>.title').each(function (elem) {
                
                this.classList.remove("rotated");
                if(this.nextElementSibling)
                  this.nextElementSibling.classList.add("hidden");    
              });
            }
            prevSlide = currentSlide;
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
        $('.slick__elem ul>li>.title').click((e) => {
          console.log(e.target.nextElementSibling);
          e.target.classList.toggle("rotated");
          if(e.target.nextElementSibling)
            e.target.nextElementSibling.classList.toggle("hidden"); 
        });
    } 
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