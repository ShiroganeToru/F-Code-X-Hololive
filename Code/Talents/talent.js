<<<<<<< HEAD
const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = ()=>{
        const target = counter.getAttribute('data-target')
        const c = +counter.innerText;

        const increment = target/500;
        
        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1);
        }
    };
    updateCounter();
=======
const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = ()=>{
        const target = counter.getAttribute('data-target')
        const c = +counter.innerText;

        const increment = target/500;
        
        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1);
        }
    };
    updateCounter();
>>>>>>> 0835141e9b0557a1b3920a7c9ed2e69f29811598
});