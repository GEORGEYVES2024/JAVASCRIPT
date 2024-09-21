console.log("ola do js") // exemplos na aula 2
console.warn("mensagem de atenção")
console.error("mensagem de erro")
console.table(
    {
        firstName: "George" ,
        lastName: "Yves"
    }



);


for (let count = 10; count > 0; count = count -1) {
    console.log(count);
}

let awake = false;
let walking = true;

if (awake && walking) {
    console.log('Apenas uma pessoa caminhando ...');
} else if (!awake && walking) {
    console.log('CUIDADO! Alerta de sonâmbulo!');
} else if (!awake && !walking) {
    console.log('Apenas uma pessoa dormindo ...');
} else {
    console.log('Apenas uma pessoa descansando ...');
}

let firstMesaage = 'ECHO 1 2 3';
let secondMessage = firstMessage;
firstMesaage = 'hello, world';
console.log(secondMessage);



let myVar = 4;
myVar = console.log("hello, world");


function concat(str1, str2) {
    return str1 + str2;
}

concat('Welcome', 'again');


let a = 3;
let b = 4;

function magic(c) {
c = c + 3;
b = 2;

}

magic(a);

console.log(`a: ${a}, b: ${b}`);





/*
comentario de bloco

*/


