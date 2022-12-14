console.log("Hola");

const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS",
    ],
    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    }
};
// //Hacer que Natalia apruebe otro curso
// natalia.cursosAprobados.push("Curso de Responsive Design");
// natalia.cursosAprobados.push("Curso POOS");

//Esto es crear un prototype
function Student (name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function (nuevoCurso){
    //     this.cursosAprobados.push(nuevoCurso);
    // }

}

Student.prototype.aprobarCurso = function (nuevoCurso) {
 this.cursosAprobados.push(nuevoCurso);   
}

// Student.prototype.removerCurso = function(nuevoCurso){
//     this.cursosAprobados.pop(nuevoCurso);
// }

const juanita = new Student(
    "Juanita Alejandra",
    15,
    [
        "Curso de Introduccion a la Produccon de videojuegos",
        "Curso de Creacion de Videojuegos"
    ],
);

// Prototipos con la sintaxis de Clases
class Student2 {
    constructor ({
        name,
        age,
        email,
        cursosAprobados = [],
        }){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
        this.email = email;
    }

    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    }
}

const miguelito = new Student2({
    name: "Miguel",
    age: 28,
    cursosAprobados: 
    [
        "Curso Analisis de Negocios para Ciencia de datos",
        "Principios de visualizacion de datos para business intelligence",
    ],
    email: "miguelito@gmail.com",
}
);