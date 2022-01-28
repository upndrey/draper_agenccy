document.addEventListener("DOMContentLoaded", main);
function main() {
    
    // burger
    let burgerDom = document.querySelector(".burger");
    let mobileNavDom = document.querySelector(".mobileNav__wrapper");
    burgerDom.addEventListener("click", () => {
        burgerDom.classList.toggle("active");
        mobileNavDom.classList.toggle("hidden");
    });

    const services = new Services();
    services.init();
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