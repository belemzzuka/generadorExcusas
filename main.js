var columnaA = [
    "En cuanto arreglemos el goteo de recursos",
    "En cuanto completemos las pruebas",
    "En cuanto hayamos optimizado el codigo",
    "Apenas nos arregle el bug",
    "Cuando se solvente el problema de instalación",
    "Cuando avergiuemos por qué se cae el proceso"
];

var columnaB = [
    "del interfaz XML",
    "del sistema de colas",
    "del buffer de entrada",
    "del gestor de peticiones",
    "de las clases de abstracción",
    "del recolector de basura"
];

var columnaC = [
    "del director LDAP",
    "de la máquina virtual JAVA",
    "del proxy inverso",
    "del gestor del cluster",
    "del broker de objetos distribuido",
    "de la capa de presentación"
];

var numeroColumnaA = Math.floor(Math.random()*columnaA.length);
console.log(numeroColumnaA);
var numeroColumnaB = Math.floor(Math.random()*columnaB.length);
console.log(numeroColumnaB);
var numeroColumnaC = Math.floor(Math.random()*columnaC.length);
console.log(numeroColumnaC);

var frase = columnaA[numeroColumnaA] + " " + columnaB[numeroColumnaB] + " " + columnaC[numeroColumnaC];

document.write(frase);