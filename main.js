
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
  document.getElementById('nav').style.backgroundColor = 'rgb(249, 205, 72)';
  
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
  document.getElementById('nav').style.backgroundColor = '#2e3033';
}


function on(){
  var button1 = document.getElementById('container-button1');
  var button2 = document.getElementById('container-button2');
  var button3 = document.getElementById('container-button3');
  var button4 = document.getElementById('container-button4');
  var button5 = document.getElementById('container-button5');
  var button6 = document.getElementById('container-button6');
  var button7 = document.getElementById('container-button7');
  button1.style.transition = 'all 0.5s';
  button2.style.transition = 'all 0.5s';
  button3.style.transition = 'all 0.5s';
  button4.style.transition = 'all 0.5s';
  button5.style.transition = 'all 0.5s';
  button6.style.transition = 'all 0.5s';
  button7.style.transition = 'all 0.5s';
  button1.style.opacity = '1';
  button2.style.opacity = '1';
  button3.style.opacity = '1';
  button4.style.opacity = '1';
  button5.style.opacity = '1';
  button6.style.opacity = '1';
  button7.style.opacity = '1';
  
}

function off(){
  var button1 = document.getElementById('container-button1');
  var button2 = document.getElementById('container-button2');
  var button3 = document.getElementById('container-button3');
  var button4 = document.getElementById('container-button4');
  var button5 = document.getElementById('container-button5');
  var button6 = document.getElementById('container-button6');
  var button7 = document.getElementById('container-button7');
  button1.style.transition = 'all 0.5s';
  button2.style.transition = 'all 0.5s';
  button3.style.transition = 'all 0.5s';
  button4.style.transition = 'all 0.5s';
  button5.style.transition = 'all 0.5s';
  button6.style.transition = 'all 0.5s';
  button7.style.transition = 'all 0.5s';
  button1.style.opacity = '0';
  button2.style.opacity = '0';
  button3.style.opacity = '0';
  button4.style.opacity = '0';
  button5.style.opacity = '0';
  button6.style.opacity = '0';
  button7.style.opacity = '0';
}