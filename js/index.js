// Your code goes here

// EVENT 1 - CLICK

const pageH1 = document.querySelector(".logo-heading");

function h1changer() {
    pageH1.style.fontSize = "7rem";
    pageH1.style.color = "orange";
    pageH1.style.fontWeight = "bold";
    pageH1.style.textDecoration = "underline";

}

pageH1.addEventListener('click', h1changer);


// EVENT 2 - MOUSEENTER


Array.from(document.links).forEach(link =>{
    link.addEventListener("mouseenter", function(event){
        event.target.style.color = "red";
        event.target.style.textDecoration = "underline";
        event.target.style.fontFamily = "monospace";
    })
})


// EVENT 3 - MOUSEOVER

const mainImg = document.querySelector("img");

mainImg.addEventListener('mouseover', function(e){
    e.target.style.border = "5px dashed orange";
})

// EVENT 4 - KEYDOWN

function escKey(event) {
    if (event.key === 'Escape') {
        mainImg.style.display = "none";
    }
}
document.addEventListener('keydown', escKey);

// EVENT 5 - KEYPRESS

let spaceImg = document.createElement("img");

spaceImg.src = "https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/keyboard_key_s.png";

const introSec = document.querySelector(".intro");


function sKey(event) {
    if (event.key === "s") {
        introSec.appendChild(spaceImg);
    }
}
document.addEventListener('keypress', sKey);

// EVENT 6 - KEYUP

function kKey(event) {
    if (event.key === "k") {
        document.body.style.display = "none";
    }
}
document.addEventListener('keyup', kKey);

// EVENT 7 - SCROLL

document.addEventListener('scroll', function(){
    document.body.style.color = "orange";
});


// EVENT 8 - DBLCLICK


const mapImg = document.getElementById("mapimg");

mapImg.addEventListener('dblclick', function(){
    mapImg.style.transform = "scale(2)";
});

// EVENT 9 - MOUSEOUT


const h2s = document.querySelectorAll("h2");

Array.from(h2s).forEach(h2 =>{
    h2.addEventListener("mouseout", function(event){
        event.target.style.color = "red";
        event.target.style.textDecoration = "underline";
        event.target.style.fontFamily = "monospace";
    })
})

// EVENT 10 - COPY

document.addEventListener('copy', () => {
    alert('COPIED TO CLIPBOARD!')
});

// NAV BAR STOP LINKS

Array.from(document.links).forEach(a => {
    a.addEventListener('click', function(e) {
        e.preventDefault();
    })
})
