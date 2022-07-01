nombres = [];
function submit(){
    var ver_alumno =[];
  for (var j  =1;j  <= 4; j++) {
  var nombre_alumno =document.getElementById("nombre_alumno_"+j).value;
  nombres.push(nombre_alumno);    
  }
var longitud_nombres = nombres.length;
for (var k = 0; k < longitud_nombres; k++) {
ver_alumno.push("<h4>nombre - "+nombres[k]+"</h4>");
}
document.getElementById("mostrar_nombre_con_comas").innerHTML=ver_alumno; 
}