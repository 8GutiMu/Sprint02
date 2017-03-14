function Queue(){
  var nombre=[];

  this.enqueue = function(elemento){
    nombre.push(elemento);
  };

  this.dequeue = function(){
    return nombre.shift();
  }

  this.print = function(){
    console.log(nombre.toString());
  };

}

var nombre = new Queue();
var apellido =  new Queue();

for (var i =0 ; i<5; i++){
  nombre.enqueue(prompt("Dame nombre: "));
  apellido.enqueue(prompt("Dame apellido: "));
};



nombre.print();
apellido.print();


var nombres = new Queue();
for (var i =0 ; i<5; i++){
 nombres.enqueue(nombre.dequeue()+" "+apellido.dequeue());
}

nombres.print();
