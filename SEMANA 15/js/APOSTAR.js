function apostar(){
    //generar numero aleatorio con metodo matematico ramdom
    var a=Math.round(Math.random()*10);//generar numero ramdom
    document.getElementById("resultado").value=a;
    //Asignar numero ingresado al azar
    var b=document.getElementById("apostado").value;
    //validar acierto
    if (a==b){
        document.getElementById("salida").value="Ganó"
    }else{
        document.getElementById("salida").value="Perdió"
    }
}
function cancel(){
    document.getElementById("apostado").value="";
    document.getElementById("resultado").value="";
    document.getElementById("salida").value="";
}