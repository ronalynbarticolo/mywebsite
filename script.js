const marquee = document.querySelector('.marque');
function animateMarquee() {
    const marqueeWidth = marquee.offsetWidth;
    
    const textWidth =marquee.firstElementChild.offsetWidth;
    
    const duration =(textWidth + marqueeWidth) / 20;
    marquee.computedStyleMap.animationDuration = duration + 's'
    marquee.computedStyleMap.animationDuration = infinite;
    
    marquee.classList.add('marquee-animate');
    
    animateMarquee();
    }
    
    const form = document.getElementById('contact-form');
    form.addEventListener('submit',function (e) {
              e.PreventDefault();
})

        const name = document.querySelector('input [name="name"]').value
        const  email = document.querySelector('input [name="email"]').value
        const message = document.querySelector('textarea[name="message"]').value
{
    forms.reset();
};