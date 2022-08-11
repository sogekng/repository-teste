

function openForm(){
  var form = document.getElementById('content-form');

  form.style.display = 'flex';
}

function closeForm(){
  var form = document.getElementById('content-form');

  form.style.transition = 'all 0.5s';
  form.style.display = 'none';
}

let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
  // Do something with the scroll position
}

document.addEventListener('scroll', (e) => {
  lastKnownScrollPosition = window.scrollY;

  console.log(lastKnownScrollPosition)

  if (!ticking) {
    window.requestAnimationFrame(() => {
      doSomething(lastKnownScrollPosition);
      ticking = false;

      if(lastKnownScrollPosition < 1){
        document.getElementById('color-header').style.opacity = 0;
        document.getElementById("menu").style.backgroundColor = "black";
      }else{
        document.getElementById('color-header').style.opacity = 1;
        document.getElementById("menu").style.backgroundColor = "black";
      }
    });

    ticking = true;
  }
});