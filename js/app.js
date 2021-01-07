'use strict';

var username = prompt('What\'s your name?');
greeting();
var score = 0;
//1
var question1 = prompt('Am I a girl?');
correctyes(question1);
//2
var question2 = prompt('Did I study computer science?');
correctno(question2);
//3
var question3 = prompt('Was I born in the 90\'s?');
correctyes(question3);
//4
var question4 = prompt('Do you like my work?');
correctyes(question4);
//5
var question5 = prompt('Do I hate TV?');
correctno(question5);
//6
q6('How old am I?', 4);
//7
var BFfood = ['sandwiches', 'pancakes', 'eggs', 'yogurt bowls', 'cereal'];
q7('What is my favorite breakfast? ', 7)
alert('My favorite breakfast food are ' + BFfood);
//results
alert('Congratulations ' + username + '! You got ' + score + ' out of 7. Good Job!');
alert('Thank you for visiting my webpage ' + username + '!');
// functions declaration
function correctyes(q) {
    switch (q.toLowerCase()) {
        case 'yes':
        case 'y':
            alert('That is correct! Good for you.');
            score++;
            break;
        case 'no':
        case 'n':
            alert('Wrong!! Better luck next time.');
            break;
        default:
            alert('It is a yes/no question!');
            break;
    }
}

function correctno(q) {
    if (q.toLowerCase() === 'no' || q.toUpperCase() === 'N') {
        alert('That is correct! Good for you.');
        score++;
    } else {
        alert('Wrong!! Better luck next time.');
    }
}

function greeting() {
    var today = new Date();
    var t = today.getHours();
    var greeting;

    if (t > 18) {
        greeting = 'Good Evening, ';
    } else if (t > 12) {
        greeting = 'Good Afternoon, ';
    } else if (t > 6) {
        greeting = 'Good Morning, ';
    } else {
        greeting = 'Welcome, ';
    }

    return document.write('<h2>' + greeting + username + '!' + '</h2>');
}

function q6(msg, num) {
    var question6;
    for (var i = 1; i <= num; i++) {
        question6 = prompt(msg);
        if (Number(question6) === 25) {
            alert('That is correct!');
            score++;
            break;
        } else if (Number(question6) < 25) {
            alert('Too low!');
        } else if (Number(question6) > 25) {
            alert('Too high!');
        } else {
            alert('Please insert a number!');
        }
    }
}
function q7(msg, num) {
    var correct = false;
    var question7;
    while (num >= 1 && !correct) {

        question7 = prompt(msg + num + ' attempts left!');
        for (var index = 0; index < BFfood.length; index++) {
            if (question7.toLowerCase() === BFfood[index]) {
                alert('Correct! ' + question7 + ' is one of my favorite breakfasts!');
                score++;
                correct = !correct;
                break;
            }
        }
        num--;
    }
}