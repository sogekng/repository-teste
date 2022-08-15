
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


function openForm(id){
  var form = document.getElementById(id);

  form.style.display = 'flex';
}

function closeForm(id){
  var form = document.getElementById(id);

  form.style.transition = 'all 0.5s';
  form.style.display = 'none';
}

function mudarContentSobre(){
  document.getElementById('sobre-content').style.display = 'flex';
  document.getElementById('sobre-content1').style.display = 'flex';
  document.getElementById('sobre-content2').style.display = 'flex';
  document.getElementById('content-1').style.backgroundColor = 'rgb(249, 205, 72)';
  document.getElementById('content-2').style.backgroundColor = '#2e3033';
  document.getElementById('sobre').style.display = 'flex';
  document.getElementById('contato').style.display = 'none';
  document.getElementById('contato-content').style.display = 'none';
  document.getElementById('footer').style.backgroundColor = '#2e3033';
  document.getElementById('footer').style.color = 'rgba(255, 255, 255, .9)';
  
}

function mudarContentContato(){
  document.getElementById('sobre-content').style.display = 'none';
  document.getElementById('contato-content').style.display = 'flex';
  document.getElementById('contato').style.display = 'flex';
  document.getElementById('sobre').style.display = 'none';
  document.getElementById('sobre-content1').style.display = 'none';
  document.getElementById('sobre-content2').style.display = 'none';
  document.getElementById('footer').style.backgroundColor = 'rgb(249, 205, 72)';
  document.getElementById('footer').style.color = '#2e3033';
}


function on(){
  var button = document.getElementById('container-button');
  button.style.transition = 'all 0.5s';
  button.style.opacity = '1';
  
}

function off(){
  var button = document.getElementById('container-button');
  button.style.transition = 'all 0.5s';
  button.style.opacity = '0';
}