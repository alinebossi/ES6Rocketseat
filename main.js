
class List {

    constructor(){
        this.toDos = [];
    }

    add(data){
        this.toDos.push(data);
    }
}

class ToDoList extends List {
    constructor(){
       super();

       this.usuario = 'Aline';
    }

    mostraUsr(){
        console.log(this.usuario);
    }
}

const list = new ToDoList();

document.getElementById('novoToDo').onclick = function(){
    list.add('Novo Todo');
}

list.mostraUsr();
