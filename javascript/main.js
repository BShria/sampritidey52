
    
//preloader animation
/*window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        preloader.classList.add('preload-finish');
    }, 2000);
})*/



//to highlight the link when on the coresponding section    
function myFunction2(ele, links)
{
    var offTop = [];
    var i
    for( i = 0; i < links.length; i++)
    {
        var hash = links[i].hash;
        offTop[i] = document.querySelector(hash).offsetTop - 200;
    }


                console.log(offTop);

    if (ele.scrollTop >= offTop[2])
    {
        var links = document.querySelectorAll(".navbar .link");
        for(var i = 0; i < links.length; i++){
                if(links[i].hash == "#mywork")
                {
                    links[i].classList.add("active");
                }
                else
                {
                    links[i].classList.remove("active");
                }
        }
    }
        
    else if (ele.scrollTop >= offTop[1])
    {
        var links = document.querySelectorAll(".navbar .link");
        for(var i = 0; i < links.length; i++){
                if(links[i].hash == "#profile")
                {
                    links[i].classList.add("active");
                }
                else
                {
                    links[i].classList.remove("active");
                }
        }
    }

    else if (ele.scrollTop >= offTop[0])
    {
        var links = document.querySelectorAll(".navbar .link");
        for(var i = 0; i < links.length; i++){
                if(links[i].hash == "#home")
                {
                    links[i].classList.add("active");
                }
                else
                {
                    links[i].classList.remove("active");
                }
        }
    }
}


var links = document.querySelectorAll(".navbar .link");
var x = document.querySelector(".container1");
x.addEventListener('scroll',function(){
myFunction2(this, links);
});




//smooth scrol
$("#navbar1 .link").on('click', function(event){

        if(this.hash !== '')
            event.preventDefault();

            var hash = this.hash;
            console.log($(hash).offset().top);
            
            var s = $(".container1").scrollTop();
            s +=  $(hash).offset().top;
            console.log(s);


        $(".container1").animate(
        { scrollTop: s },
        600
        );
    }
);
