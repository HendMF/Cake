window.onscroll = () => {
    if( window.scrollY > 50){
        document.querySelector('.scroll-up').classList.add('active');
    } else{
        document.querySelector('.scroll-up').classList.remove('active');

    }
}
function loader(){
    document.querySelector('.loader').classList.add('loaded');
}
