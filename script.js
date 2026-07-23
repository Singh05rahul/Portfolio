/* =====================================================
   LOADER
===================================================== */

window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    setTimeout(()=>{

        loader.style.opacity="0";

        loader.style.visibility="hidden";

    },2500);

});



/* =====================================================
   CUSTOM CURSOR
===================================================== */

const cursor=document.querySelector(".cursor");


document.addEventListener("mousemove",(e)=>{

    cursor.style.left=e.clientX+"px";

    cursor.style.top=e.clientY+"px";

});



const links=document.querySelectorAll("a,button");


links.forEach(item=>{


    item.addEventListener("mouseenter",()=>{

        cursor.style.width="45px";

        cursor.style.height="45px";

    });



    item.addEventListener("mouseleave",()=>{

        cursor.style.width="22px";

        cursor.style.height="22px";

    });


});



/* =====================================================
   TYPING EFFECT
===================================================== */


const words=[

"Frontend Developer",

"Web Designer",

"JavaScript Developer",

"Creative Coder"

];


let wordIndex=0;

let charIndex=0;

let deleting=false;


const typing=document.getElementById("typing");



function typeEffect(){


    let currentWord=words[wordIndex];


    if(!deleting){


        typing.textContent=
        currentWord.substring(0,charIndex++);



        if(charIndex>currentWord.length){

            deleting=true;

            setTimeout(typeEffect,1000);

            return;

        }


    }

    else{


        typing.textContent=
        currentWord.substring(0,charIndex--);



        if(charIndex<0){

            deleting=false;

            wordIndex++;

            if(wordIndex>=words.length){

                wordIndex=0;

            }

        }


    }


    setTimeout(typeEffect,deleting?60:120);


}


typeEffect();




/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */


const header=document.querySelector("header");


window.addEventListener("scroll",()=>{


    if(window.scrollY>50){


        header.style.background=
        "rgba(5,8,22,.85)";


    }

    else{


        header.style.background=
        "rgba(5,8,22,.35)";


    }


});




/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */


const revealElements=document.querySelectorAll(

"section,.skill-card,.service-card,.project-card,.certificate-card,.experience-card"

);



const reveal=()=>{


revealElements.forEach(element=>{


let windowHeight=
window.innerHeight;


let elementTop=
element.getBoundingClientRect().top;



if(elementTop < windowHeight-100){


element.classList.add("show");


}



});


};



window.addEventListener("scroll",reveal);


reveal();




/* =====================================================
   BACK TO TOP BUTTON
===================================================== */


const topBtn=document.getElementById("topBtn");



window.addEventListener("scroll",()=>{


if(window.scrollY>500){


topBtn.style.display="flex";


}

else{


topBtn.style.display="none";


}


});



topBtn.addEventListener("click",()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});





/* =====================================================
   PARTICLE BACKGROUND
===================================================== */


const particles=document.getElementById("particles");


for(let i=0;i<80;i++){


let particle=document.createElement("span");


particle.style.position="absolute";

particle.style.width="3px";

particle.style.height="3px";

particle.style.background="#00F5FF";

particle.style.borderRadius="50%";

particle.style.left=Math.random()*100+"%";

particle.style.top=Math.random()*100+"%";


particle.style.animation=
`moveParticle ${5+Math.random()*10}s linear infinite`;



particles.appendChild(particle);


}






/* =====================================================
   ACTIVE MENU
===================================================== */


const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");



window.addEventListener("scroll",()=>{


let current="";


sections.forEach(section=>{


let sectionTop=section.offsetTop-200;


if(scrollY>=sectionTop){

current=section.getAttribute("id");

}


});



navLinks.forEach(link=>{


link.style.color="white";


if(link.getAttribute("href")==="#"+current){


link.style.color="#00F5FF";


}


});


});


/* ======================================
   MOBILE MENU
====================================== */


const menuBtn=document.querySelector(".menu-btn");

const navMenu=document.querySelector("nav ul");



menuBtn.addEventListener("click",()=>{


    navMenu.classList.toggle("active");


    menuBtn.innerHTML=
    navMenu.classList.contains("active")

    ?

    '<i class="fa-solid fa-xmark"></i>'

    :

    '<i class="fa-solid fa-bars"></i>';

});



document.querySelectorAll("nav ul li a")
.forEach(link=>{


link.addEventListener("click",()=>{


    navMenu.classList.remove("active");


    menuBtn.innerHTML=
    '<i class="fa-solid fa-bars"></i>';


});


});