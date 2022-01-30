document.addEventListener("DOMContentLoaded", main);
function main() {
    const burger = new Burger();
    burger.init();

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