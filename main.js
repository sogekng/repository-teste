function sobre(num){

    console.log(num)
    if(num == 1){
        document.getElementById("categoria").innerHTML = "Categoria: <b>Celulares</b>";
        window.location.href = "curso_detalhes.html";
    }else if(num == 2){
        window.location.href = "curso_detalhes.html";
        categoria.innerHTML = "Curso 2";
    }
}