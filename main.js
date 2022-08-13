
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

//document.addEventListener('scroll', (e) => {
//  lastKnownScrollPosition = window.scrollY;
//
//  console.log(lastKnownScrollPosition)
//
//  if (!ticking) {
//    window.requestAnimationFrame(() => {
//      doSomething(lastKnownScrollPosition);
//      ticking = false;
//
//      if(lastKnownScrollPosition < 1){
//        document.getElementById('color-header').style.backgroundColor = 'transparent';
//      }else if (lastKnownScrollPosition > 1){
//        document.getElementById('color-header').style.backgroundColor = '#2e3033';
//      }
//    });
//
//    ticking = true;
//  }
//});

function mudarContentSobre(){
  document.getElementById('content-1').style.backgroundColor = 'rgb(249, 205, 72)';
  document.getElementById('content-2').style.backgroundColor = '#2e3033';
  document.getElementById('sobre').style.width = '100%';
  document.getElementById('contato').style.width = '0%';
  document.getElementById('contato-content').style.opacity = '0';
  document.getElementById('contato-content').style.display = 'none';
  document.getElementById('footer').style.backgroundColor = '#2e3033';
  document.getElementById('footer').style.color = 'rgba(255, 255, 255, .9)';                    
  
}

function mudarContentContato(){
  document.getElementById('contato-content').style.opacity = '1';
  document.getElementById('contato-content').style.display = 'flex';
  document.getElementById('sobre').style.width = '0%';
  document.getElementById('contato').style.width = '100%';
  document.getElementById('footer').style.backgroundColor = 'rgb(249, 205, 72)';
  document.getElementById('footer').style.color = '#2e3033';
}
