let form = document.getElementById("invitation-form");
let name = document.getElementById("name");
let surname = document.getElementById("surname");
let DoB = document.getElementById("dob");
let cellphone = document.getElementById("tel_number");
let email = document.getElementById("email");
let food = document.getElementsByClassName("food");
let partner = document.getElementsByClassName("reserve");
var checkedValues = [];

function mySubmit(event) {
    event.preventDefault();
    let form = document.getElementById("invitation-form");
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let DoB = document.getElementById("dob").value;
    let cellphone = document.getElementById("tel_number").value;
    let email = document.getElementById("email").value;
    // let food = document.getElementsByClassName("food").value;
    let partner = document.getElementsByClassName("reserve").value;
    let food = test(event); 

    if(name === "" || surname === "" || DoB === "" || cellphone === "" || email === "" || food === "" || partner === ""){
        document.getElementById("error").innerHTML=`
        <img id="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Alert-Stop-Warning-Error_icon.svg/1024px-Alert-Stop-Warning-Error_icon.svg.png" >
        <h2 style="color:red;">Fill all the fields</h2>
        `
    }
    else{
       myDisplay()

    }
}

function myDisplay(){
    //document.getElementById("success").innerHTML = `<h2 style="text-align:center; color: green;">Successful</h2>`
    document.getElementById("output").innerHTML = `<ul>
    <li>Name: ${name.value}</li><br>
    <li>Surname: ${surname.value}</li><br>
    <li>DoB: ${dob.value}</li><br>
    <li>Cellphone_Number: ${cellphone.value}</li><br>
    <li>Email: ${email.value}</li><br>
    <li>Your_Meal: ${food.value}</li>
    <li>Partner: ${partner.value}</li>
    </ul>
    `
}

function show(){
var yesDisplay = document.querySelector(".reserve");
    if(yesDisplay.style.display === "none"){
        yesDisplay.style.display = "block";
    }
    else {
        yesDisplay.style.display = "block";
    }
}

function hide(){
var noDisplay = document.querySelector(".reserve");
    if(noDisplay.style.display === "block"){
        noDisplay.style.display = "none";
    }
    else {
        noDisplay.style.display = "none";
    }
}

function checkBoxes(event) {
    var value = event.target.value
    var index = checkedValues.indexOf(value)
    if(event.target.checked === false && index > -1){
        checkedValues.splice(index, 1);
    }
    else {
        checkedValues.push(value)
        return checkedValues;
    }
}


function handleRadioBtn(){
    const radioBtn = document.querySelectorAll('input[name = "attending"]');
    let selectedButton;
    for(const radioButton of radioBtn){
        if(radioButton.checked){
            selectedButton = radioButton.value;
            break
        }
    }
    return selectedButton;
}