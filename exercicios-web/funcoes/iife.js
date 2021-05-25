//IIFE -> Immediately Invoked Function Expression


//uma função executada desta forma faz com que seus elementos fujam do escopo global
(function(){
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()