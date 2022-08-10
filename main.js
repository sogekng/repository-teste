

function sobre(num){

    console.log(num)
    if(num == 1){
        window.location.href = "./cursos/curso_coletivo.html";
        console.log(num)
    }else if(num == 2){
        window.location.href = "./cursos/curso_escolar.html";
        console.log(num)
    }else if(num == 3){
        window.location.href = "./cursos/curso_mopp.html";
        console.log(num)
    }else if(num == 4){
        window.location.href = "./cursos/curso_indivisivel.html";
        console.log(num)
    }else if(num == 5){
        window.location.href = "./cursos/curso_emergencial.html";
        console.log(num)
    }else if(num == 6){
        window.location.href = "./cursos/curso_rt.html";
        console.log(num)
    }else if(num == 7){
        window.location.href = "./cursos/curso_tac.html";
        console.log(num)
    }
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
        document.getElementById('header').style.opacity = 0;
        document.getElementById("content-header").style.display = "none";
      }else{
        document.getElementById('header').style.opacity = 1;
        document.getElementById("content-header").style.display = "flex";
      }
    });

    ticking = true;
  }
});