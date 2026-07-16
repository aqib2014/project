// ================================
// MetroTour Explorer - script.js
// ================================

// Navbar shadow on scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";
    } else {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.08)";
    }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});

// Fade animation on cards
const cards = document.querySelectorAll(".card, .feature-box");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{threshold:0.2});

cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition="0.6s ease";

    observer.observe(card);

});

// Search Button
const searchBtn=document.querySelector(".search-box button");

if(searchBtn){

searchBtn.addEventListener("click",()=>{

alert("Metro route search will be available in the next version.");

});

}

console.log("MetroTour Explorer Loaded Successfully.");