'use strict';

function search(){
    let filteredPeople = people;
    // Grabbing the values from our nameForm form and inputs.
    let firstNameInput = document.forms['nameForm']['fname'].value;
    let lastNameInput = document.forms['nameForm']['lname'].value;
    let dobInput = document.forms ['nameForm']['dob'].value;
    let eyeColorInput = document.forms ['nameForm']['eyeColor'].value;
    

    if(eyeColorInput != ""){
        filteredPeople = serachByEyeColor(eyeColorInput, filteredPeople)
    }
    


    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
  
    
    // Rather than console logging, you need to append the filteredPeople to a table.
    if(filteredPeople.length > 0){
        console.log(filteredPeople);
    }else{
        console.log('Sorry, looks like there is no one with that name.');
    }
}

function serachByEyeColor(eyeColor, people){
    let filteredPeople = people.filter(function(el){
        if(el.eyeColor == eyeColor){
            return true;
        }
        else{
            return false;
        }
    })
    return filteredPeople;
}
function searchByName(){
    filteredPeople = people.filter(function (person) {
        if(person.firstName === firstNameInput && person.lastName === lastNameInput){
            return true;
        }
        return false;
    });
}