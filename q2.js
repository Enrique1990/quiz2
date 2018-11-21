//Agregue un método a su clase de Tarea que alterna el estado de la variable "completado". Si la tarea ya está completa, este método debe establecer el valor de "completado" en falso, y viceversa.done(){
        //switch the value of the boolean property fromm true to false to true
        class Task {
            constructor(owner, description){
                this.owner = owner;
                this.description = description;
                this.completed = true;
                this.date = `${new Date().getFullYear()} - ${new Date().getMonth()+1} - ${new Date().getDate()}`;
            }
            
        };
         function done() {  
            // var completed = "yes";
        if(completed = true){
            return true;
        }else {
            return false;
        }
    }
    
