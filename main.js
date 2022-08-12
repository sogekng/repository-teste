
function sobre(num){

  if(num == 1){
    window.location.href = "./cursos/curso_coletivo.html";
  }
  else if(num == 2){
    window.location.href = "./cursos/curso_emergencial.html";
  }
  else if(num == 3){
    window.location.href = "./cursos/curso_escolar.html";
  }
  else if(num == 4){
    window.location.href = "./cursos/curso_indivisivel.html";
  }
  else if(num == 5){
    window.location.href = "./cursos/curso_mopp.html";
  }
  else if(num == 6){
    window.location.href = "./cursos/curso_rt.html";
  }
  else if(num == 7){
    window.location.href = "./cursos/curso_tac.html";
  }
}


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
        document.getElementById('color-header').style.backgroundColor = 'transparent';
      }else if (lastKnownScrollPosition > 1){
        document.getElementById('color-header').style.backgroundColor = 'rgb(16 14 23)';
      }
    });

    ticking = true;
  }
});