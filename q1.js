//Imagine you are writing a "to do" list application. Create a class named task which has the following features: owner of the task, task description, a variable which represents whether the task is completed or not and created date (set at runtime based on when the Task object is created). Make sure your constructor is such that it can receive two values only (and use default parameters for the other two).

class Task {
    constructor(owner, description){
        this.owner = owner;
        this.description = description;
        this.completed = true;
        this.date = `${new Date().getFullYear()} - ${new Date().getMonth()+1} - ${new Date().getDate()}`;
    }
    
};
const todo = new Task("Jeremy", "Go to work");
console.log(todo);
