document.addEventListener("DOMContentLoaded", main);
function main() {
    const burger = new Burger();
    burger.init();

    const slick = new Slick();
    slick.init();

    const services = new Services();
    services.init();
}

function Burger() {
    let burgerDom = document.querySelector(".burger");
    let mobileNavDom = document.querySelector(".mobileNav__wrapper");
    burgerDom.addEventListener("click", () => {
        burgerDom.classList.toggle("active");
        mobileNavDom.classList.toggle("hidden");
    });

}

Burger.prototype.init = function() {

};
 
function Slick() {
    
}

Slick.prototype.init = function() {
    if ($(window).width() <= 990) {
        $('.slick').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        });
    } 
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

    $('.slick-next').click(() => {
        switch(this.currentActiveLink) {
            case this.brandStrategyLink:
                this.switchActive(this.markStrategyLink);
                break;
            case this.markStrategyLink:
                this.switchActive(this.markAnalysisLink);
                break;
            case this.markAnalysisLink:
                this.switchActive(this.markTzLink);
                break;
            case this.markTzLink:
                this.switchActive(this.creativeStrategyLink);
                break;
            case this.creativeStrategyLink:
                this.switchActive(this.brandStrategyLink);
                break;
        }
    });

    $('.slick-prev').click(() => {
        switch(this.currentActiveLink) {
            case this.brandStrategyLink:
                this.switchActive(this.creativeStrategyLink);
                break;
            case this.markStrategyLink:
                this.switchActive(this.brandStrategyLink);
                break;
            case this.markAnalysisLink:
                this.switchActive(this.markStrategyLink);
                break;
            case this.markTzLink:
                this.switchActive(this.markAnalysisLink);
                break;
            case this.creativeStrategyLink:
                this.switchActive(this.markTzLink);
                break;
        }
    });
};

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