// 10/28/20
// button 1
document.getElementById('btn1').addEventListener('click', button1);

function button1() {
    document.getElementById('headerOne').style.color = "blue";
    let text = document.createElement("p");
    let node = document.createTextNode("-WAHOO!");
    text.appendChild(node);
    let emptyDiv = document.getElementById("praticeText");
    emptyDiv.appendChild(text);
    document.getElementById('text1').innerHTML = "-In this function, the JavaScript changes the color of the header of the objective, and it also adds a paragraph to a empty div element."
}

// button 2
document.getElementById('btn2').addEventListener('click', button2);

function button2() {
    let elementRemove = document.getElementById('testRemove');
    elementRemove.remove();

    let newElement = document.createElement('p');
    let newNode = document.createTextNode("-ADDING SOME TEXT");
    newElement.appendChild(newNode);
    let textBody = document.getElementById('addText');
    textBody.appendChild(newElement);

    document.getElementById('text2').innerHTML = "-In this function, the JavaScript is adding some text to the paragraph and using innerHTML, and is also removing the header element text/node."
}

// button 3
document.getElementById('btn3').addEventListener('click', button3);

function button3() {
    document.getElementById('screenSize').innerHTML = "-Your screen width and height is: " + screen.width + "x" + screen.height;

    let myElement = document.getElementById('addButton');
    let newButton = document.createElement('BUTTON');
    let buttonText = document.createTextNode('Click Here To Change Tabs');
    newButton.setAttribute("id", "newButton");

    newButton.appendChild(buttonText);
    myElement.appendChild(newButton);

    document.getElementById('newButton').addEventListener('click', secondFunction);

    function secondFunction() {
        window.open('http://catalog.jccc.edu/degreecertificates/webtechnologies/web-development-digital-media-aas.html');
    }


    document.getElementById('text3').innerHTML = "-In this function, the JavaScript BOM gets the users screen size and displays it on the webpage, it also created a new button and on click will open it to the jccc web development degree."
}

// button 4

const userPassword = document.getElementById('password');
const form = document.getElementById('validateForm');
const errorElement = document.getElementById('errors');
const text4 = document.getElementById('text4');

form.addEventListener('submit', (e) => {
    let messages = []

    if (userPassword.value === "" || password.value == null) {
        messages.push('You cant leave this blank')
    }

    if (password.value.length <= 8) {
        messages.push('Your password needs to be longer than 8 characters');
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(" | ")
    }


    text4.innerText = "In this function, the JavaScript validates the form to make sure the password is 8 or more letters long, it also makes sure the user has typed something."

})



// button 5

document.getElementById('btn5').addEventListener('click', btn5);

function btn5() {
    let updateTime = document.getElementById('currentTime');
    let currentTime = new Date();
    let timeTest = (currentTime.toLocaleTimeString());
    updateTime.innerHTML = '-The current time is ' + timeTest;

    let number1 = 1.5;
    let number2 = 1;
    let bothNumbers = Math.round(number1, number2);
    document.getElementById('mathTest').innerHTML = "-Using math.round with the numbers 1.5 and 1 we get the number: " + bothNumbers;

    document.getElementById('text5').innerHTML = "-In this function, the Javascript gets the users current time and displays it to the screen, it also shows the math.round object when using numbers"
}


// button 6

document.getElementById('btn6').addEventListener('click', btn6);

function btn6() {

    let fruits = [
        "apple", "pair", "Lemon"
    ];

    let moreFruits = [
        "Watermelon", " Cherry", "Berry"
    ];

    let numbersArray = [
        1, 4, 2, 3
    ];

    let combineFruits = fruits.concat(moreFruits);

    let numberSort = numbersArray.sort();

    document.getElementById('arrayExample2').innerHTML = numberSort;

    document.getElementById('arrayExample').innerHTML = combineFruits.join(", ");

    document.getElementById('text6').innerHTML = "-In this function, the JavaScript joins the two different fruit arrays together, and it also sorts the array with the numbers"

}


document.getElementById('btn7').addEventListener('click', btn7);
let errorText = document.getElementById('errorText');
let text7 = document.getElementById('text7');

function btn7() {

    try {
        let myfunction = {};
        myfunction();
    }
    catch (err) {
        errorText.textContent = '*This is a test to show that there is an error in the function*';
    }

    text7.textContent = "-In this function, the JavaScript has created a function that throws an error on puropouse to show how you can use try and catch to code error handling code."
}

// button 8

document.getElementById('btn8').addEventListener('click', btn8);

function btn8() {
    let example1 = ";,/?:@&=+$";
    var example2 = "-_.!~*'()";

    document.getElementById('example1').textContent = encodeURIComponent(example1);
    document.getElementById('example2').textContent = encodeURIComponent(example2);

    document.getElementById('text8').textContent = "-In this function, the JavaScript created a few strings to show how the encodeURIComponent escapes all characters except  A-Z a-z 0-9 - _ . ! ~ * ' ( ). It also uses text content as innerHTML is bad pratice and you should be using .textContent or InnerText "
}

