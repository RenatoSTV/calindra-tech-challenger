let nav = document.querySelector('nav')

function showLinks (){
    if (nav.classList.contains('active')) {
        nav.classList.remove('active');
      } else {
        nav.classList.add('active');
      }
}