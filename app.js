AOS.init();

// BG IMG SLIDER 
const sliderImage = [ "img1.png", "img2.png", "img3.png", "img4.png", "img5.png", "img6.png" ];

let slider = document.querySelector('.background-image');
let sliderGridItems = [...document.querySelectorAll('.grid-item')];

let currentImage = 0;

setInterval(() => {
    changesliderImage();
}, 5000);

const changesliderImage = () => {
    sliderGridItems.map((gridItems, index) => {
        setTimeout(() => {
            
            gridItems.classList.remove('hide');

            setTimeout(() => {
                
                if (index == sliderGridItems.length - 1) {
                    if (currentImage >= sliderImage.length - 1) {
                        currentImage = 0;
                    }else{
                        currentImage++;
                    }

                    slider.src = `images/${sliderImage[currentImage]}`;

                    sliderGridItems.map((item, i) =>{
                        setTimeout(() => {
                            item.classList.add('hide');
                        }, i * 100);
                    })
                }

            }, 100);

        }, index * 100);
    })
}


// NAVBAR 

const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (scrollY >= 188){
        navbar.classList.add('bg')
    } else{
        navbar.classList.remove('bg')
    }
})