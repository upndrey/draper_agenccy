(function() {

    // get's all video wrapper divs
    var youtube = document.querySelectorAll(".youtube");
    console.log(youtube);
    for (var i = 0; i < youtube.length; i++) {
        
        /* 
        gets the video id we mentioned in the data-embed attribute
        to generate image thumbnail urls, youtube has several
        resolutions.
        - mqdefault 320 x 180
        - hqdefault 480 x 360
        - sddefault - 640 x 480
        - maxresdefault - 1920 x 1080
        */
        var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/hqdefault.jpg";
        
        /*
        creates new image and sets the source attribute to the thumbnail
        url we generated above and sets it to load the image on page load
        */
        var image = new Image();
        image.src = source;
        image.addEventListener("load", function() {
        youtube[i].appendChild(image);
        }(i));
        
        /*
        below is where the magic happens, we attach click listeners to the 
        video embed divs and when clicked we create a new iframe and sets
        it inside the video wrapper div and only then will the js files
        associated with the embedded video be loaded
        */
        
        youtube[i].addEventListener("click", function() {
            var iframe = document.createElement("iframe");
            console.log(1);
            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("allowfullscreen", "");
            if(this.dataset.index) 
            iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1&list=" + this.dataset.list + "&index=" + this.dataset.index);
            else
                iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1&list=" + this.dataset.list);
            
            this.innerHTML = "";
            this.appendChild(iframe);
        });
    };
    
})();
    