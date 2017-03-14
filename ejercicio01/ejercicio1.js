function Stack(){
  var nombre=[];

  this.push = function(elemento){
    nombre.push(elemento);
  };

  this.pop = function(){
    return nombre.pop();
  };

  this.peek = function(){
    return nombre[nombre.length-1];
  };

  this.print = function(){
    console.log(nombre.toString());
  };

  this.size = function(){
    return nombre.length;
  };

}

var nombre = new Stack();
var apellido =  new Stack();

for (var i =0 ; i<5; i++){
  nombre.push(prompt("Dame nombre: "));
  apellido.push(prompt("Dame apellido: "));
};

var tamanio = nombre.size();

nombre.print();
apellido.print();
console.log(tamanio);

var nombres = new Stack();
for (var i =0 ; i<tamanio; i++){
 nombres.push(nombre.pop()+" "+apellido.pop());
}

nombres.print();
