//Aún dentro del contexto del programa Gradebook, cree una clase llamada Asignación que encapsule los siguientes datos: una identificación del estudiante, un enlace de URL a la presentación de la tarea, un tipo de tarea (tarea, trabajo de clase, etc.) y una calificación.
class Student {
    consrtructor(firstName, lastName, id){
        this.firstName = firstName;
        this.last = lastName;
        this.id = id;
    }
}

class Assigment {
    constructor(studentId, URL, type, grade){
        this.studentId = studentId;
        this.URL = URL;
        this.type = type;
        this.grade = grade;
    }
}