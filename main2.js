// const juan1 = {
//     name: "JuanDC",
//     username: "juandc",
//     points: 100,
//     socialMedia: {
//         tweeter: "fjuandc",
//         instagram: "fjuandc",
//         facebook: undefined,
//     },
//     approvedCourses:[
//         "Curso Definitivo en HTML y CSS",
//         "Curso Practico de HTML",
//     ],

//     learningPaths: [
//         {
//             name: "Escuela de desarrollo web",
//             courses: [
//                 "Curso Definitivo en HTML y CSS",
//                 "Curso Practico de HTML",
//                 "Curso de Responsive Design",
//                 "Curso de Sistemas de desenp",
//             ],
//         },

//         {
//             name: "Escuela de videojuegos",
//             courses: [
//                 "Curso Introduccion a la Produccion de  Vgs",
//                 "Curso de Unreal Engine",
//                 "Curso de Unity 3D",
//             ],
//         },
//     ],
// };

// const miguelito1 = {
//     name: "Miguelito",
//     username: "miguelitofeliz",
//     points: 1000,
//     socialMedia: {
//         tweeter: "miguelitofeliz",
//         instagram: "miguelito_feliz",
//         facebook: undefined,
//     },
//     approvedCourses:[
//         "Curso DataBusiness",
//         "Curso Data Viz",
//     ],

//     learningPaths: [
//         {
//             name: "Escuela de desarrollo web",
//             courses: [
//                 "Curso Definitivo en HTML y CSS",
//                 "Curso Practico de HTML",
//                 "Curso de Responsive Design",
//             ],
//         },

//         {
//             name: "Escuela de Data Science",
//             courses: [
//                 "Curso DataBusiness",
//                 "Curso Data Viz",
//                 "Curso Tableau"
//             ],
//         },
//     ],

// }

class Student {
    constructor({
        name,
        email,
        username,
        tweeter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            tweeter,
            instagram,
            facebook,
        };
        this.approvedCourses = [] = approvedCourses;
        this.learningPaths = [] = learningPaths;
    }
}
class Course {
    constructor({
        name, 
        clases = [],
        }) {
        this.name = name;
        this.clases = clases;
    }
}

const cursoProgBasica = new Course({
    name: "Curso gratis de programacion basica"
    
});


class LearningPath {
    constructor({
        name, 
        courses,
        }) {
        this.name = name;
        this.courses = courses;
    }
}

const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
        "Curso Definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS",
    ]
});
const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
        "Curso Data Business",
        "Curso Dataviz",
    ]
});
const escuelaVgs = new LearningPath({
    name: "Escuela de Video Juegos",
    courses: [
        "Curso de Unity",
        "Curso de Unreal",
    ]
});

const juan2 = new Student({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    tweeter: "fjuandc",
    learningPaths: [
        escuelaVgs,
        escuelaData,
    ]
});

const miguelito2 = new Student({
    name: "Miguelito",
    username: "miguelitofeliz",
    email: "miguelito@juanito.com",
    tweeter: "miguelito_feliz",
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ]
});

