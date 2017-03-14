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

var tamanio= parseInt(prompt("Cuantos nombres quieres meter?"));
console.log(tamanio);

var nombre = new Queue();
var apellido =  new Queue();

for (var i =0 ; i<tamanio; i++){
  nombre.enqueue(prompt("Dame nombre: "));
  apellido.enqueue(prompt("Dame apellido: "));
};



nombre.print();
apellido.print();


var nombres=[];
for (var i =0 ; i<tamanio; i++){
 nombres.push(nombre.dequeue()+" "+apellido.dequeue());
}

document.write("<br>El orden en que llegaron son: "+nombres);
document.write("<br>La primera persona sera:" + nombres[0]);
document.write("<br>La última persona sera: "+ nombres[nombres.length - 1]);
