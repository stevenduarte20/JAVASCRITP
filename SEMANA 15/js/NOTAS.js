function limpiar(){
    document.getElementById("Nota1").value="";//Borrar contenido
    document.getElementById("Nota2").value="";//Borrar contenido
    document.getElementById("Nota3").value="";//Borrar contenido
    document.getElementById("Definitiva").value="";//Borrar contenido
}
function promedio(){
    var n1=document.getElementById("Nota1").value;//Asignar nota1 a n1
    var n2=document.getElementById("Nota2").value;//Asignar nota2 a n2
    var n3=document.getElementById("Nota2").value;//Asignar nota3 a n3
    var Definitiva=(parseFloat(n1)+parseFloat(n2)+parseFloat(n3))/3;
    document.getElementById("Definitiva").value=Definitiva.toFixed(2);
}