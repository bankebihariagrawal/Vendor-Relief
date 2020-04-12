const button = document.querySelector('.button1');

button.addEventListener('click' , e=> {
    e.preventDefault();
    // alert('hello')
    scrollTo(0,0);
})