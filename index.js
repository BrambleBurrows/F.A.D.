// Create input
const input = document.createElement('input');
input.type = 'text'; 
input.id = 'User Search';
input.placeholder = 'Enter username here';

//Attach input element to document
const container = document.getElementById('container');
container.appendChild(input);


document.getElementById('search').addEventListener("click", function() {
    //Get result and paste 
    var a = document.getElementById('input').value;
    document.getElementById('result').innerHTML = "hello, world";
    document.getElementsByTagName('body')[0].appendChild('result');
});

