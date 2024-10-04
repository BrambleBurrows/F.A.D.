//Take search box input and display in header
function search() {
    const result = document.getElementById('result');
    const username = document.getElementById('username').value;
    result.innerHTML = username;   
}

//Send serach box input to console 
function debug() {
    const debug = result.textContent;
    console.log(debug);
}