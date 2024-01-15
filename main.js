var registerForm = document.querySelector(".registerForm");
var users= [];
registerForm.onsubmit = function (e) {
    e.preventDefault();
    var elements = e.target.elements;

    var user = {
        name: elements['name'].value,
        email: elements['email'].value,
        password: elements['pass'].value,
    };
    users.push(user); 
    console.log(users);
    printData();
}
function printData(){
    var data="";
    for (var i=0;i<users.length;i++){
        data+= `
        <tr>
        <td>${users[i].name}</td>
        <td>${users[i].email}</td>
        <td>${users[i].password}</td>
        </tr>`;
    }
    document.querySelector(".userData").innerHTML=data;
}
