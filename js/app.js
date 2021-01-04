'use strict'

var username=prompt('What\'s your name?');

greeting();

var question1=prompt('Am I a girl?');
correctyes(question1);
var question2=prompt('Did I study computer science?');
correctno(question2);
var question3=prompt('Was I born in the 90\'s?');
correctyes(question3);
var question4=prompt('Do you like my work?');
correctyes(question4);
var question5=prompt('Do I hate TV?');
correctno(question5);

alert('Thank you for visiting my webpage '+username+'!');


// functions declaration
function greeting(){
        var today= new Date();
        var t = today.getHours();
        var greeting;
        
        if (t > 18){
            greeting='Good Evening, ';
        } else if (t > 12){
            greeting='Good Afternoon, ';
        } else if (t > 6){
            greeting='Good Morning, ';
        } else {
            greeting='Welcome, ';
        }
    
    return document.write('<h2>'+greeting+username+'!'+'</h2>');
}

function correctyes(q){
    if(q.toLowerCase() === 'yes' || q.toUpperCase()=== 'Y'){
//        console.log('Correct!');
        alert('That is correct! Good for you.');
    } else {
//        console.log('Wrong!');
        alert('Wrong!! Better luck next time.');
    }
}

function correctno(q){
    if(q.toLowerCase() === 'no' || q.toUpperCase()=== 'N'){
//        console.log('Correct!');
        alert('That is correct! Good for you.');
    } else {
//        console.log('Wrong!');
        alert('Wrong!! Better luck next time.');
    }
}