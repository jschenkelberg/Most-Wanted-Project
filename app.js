'use strict';

function searchByDob() {
    let dobInput = document.forms['nameForm']['dob'].value;
    let filteredPeople = people.filter(function(person) {
        if (person.dob === dobInput) {
            return true;
        }
        return false;
    });
    // Rather than console logging, you need to append the filteredPeople to a table.
    if (filteredPeople.length > 0) {
        console.log(filteredPeople);
    } else {
        console.log('Sorry, looks like there is no one with that name.');
    }
}
function searchByEyeColor() {
    let eyeColorInput = document.forms['nameForm']['eyeColor'].value;
    if (eyeColorInput != "") {
        let filteredPeople = people.filter(function(person) {
            if (person.eyeColor == eyeColorInput) {
                return true;
            }
            return false;
        });
        // Rather than console logging, you need to append the filteredPeople to a table.
        if (filteredPeople.length > 0) {
            console.log(filteredPeople);
        } else {
            console.log('Sorry, looks like there is no one with that name.');
        }
    }
}
function searchByName() {
    // let filteredPeople = people;
    // Grabbing the values from our nameForm form and inputs.
    let firstNameInput = document.forms['nameForm']['fname'].value;
    let lastNameInput = document.forms['nameForm']['lname'].value;
    // "people" is coming from the data.js file. We have access to it within this JavaScript file.

    let filteredPeople = people.filter(function(person) {
        if (person.firstName === firstNameInput && person.lastName === lastNameInput)
         {
            return true;
        }
        return false;
    });
    // Rather than console logging, you need to append the filteredPeople to a table.
    if (filteredPeople.length > 0) {
        buildTable();
    } else {
        alert('Sorry, looks like there is no one with that name.');
    }
}
function buildTable(){
    let firstNameInput = document.forms['nameForm']['fname'].value;
    let lastNameInput = document.forms['nameForm']['lname'].value;
    let genderInput = document.forms ['nameForm']['gender'].value;
    let dobInput = document.forms ['nameForm']['dob'].value;
    let eyeColorInput = document.forms ['nameForm']['eyeColor'].value;
    people.map(function(el){
       if(el.firstName === firstNameInput || el.lastName === lastNameInput || el.dob === dobInput || el.gender === genderInput || el.eyeColor === eyeColorInput)
        {
            document.getElementById("table").innerHTML += `<table>
            <thead>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>D.O.B.</th>
              <th>Height</th>
              <th>Weight</th>
              <th>Eye Color</th>
              <th>Occupation</th>
              <th>Parents</th>
              <th>Current Spouse</th>
            </thead>
            <tr>
            <td id=${el.id} style="color:red">${el.id}</td>
            <td>${el.firstName}</td>
            <td>${el.lastName}</td>
            <td>${el.gender}</td>
            <td>${el.dob}</td>
            <td>${el.height}</td>
            <td>${el.weight}</td>
            <td>${el.eyeColor}</td>
            <td>${el.occupation}</td>
            <td>${el.parents}</td>
            <td>${el.currentSpouse}</td><br>
            </tr>
            </table>`
        }
    })   
}

//     people.map(function(el){
//     document.getElementById("people").innerHTML += `<tr>
//     <td id=${el.id} style="color:red">${el.id}</td>
//     <td>${el.firstName}</td>
//     <td>${el.lastName}</td>
//     <td>${el.gender}</td>
//     <td>${el.dob}</td>
//     <td>${el.height}</td>
//     <td>${el.weight}</td>
//     <td>${el.eyeColor}</td>
//     <td>${el.occupation}</td>
//     <td>${el.parents}</td>
//     <td>${el.currentSpouse}</td>
//     <td><button onclick="deletePerson()">Delete</button></td>
//     </tr>`
// })
// }


// function masterSearch() {



// function searchByEyeColor(eyeColor, people) {
//     let filteredPeople = people.filter(function(el) {
//         if (el.eyeColor == eyeColor) {
//             return true;
//         } else {
//             return false;
//         }
//     })
//     return filteredPeople;
// }



// function searchByName(firstName,lastName,people) {
//     filteredPeople = people.filter(function(person) {
//         if (person.firstName === firstNameInput && person.lastName === lastNameInput) {
//             return true;
//         }
//         return false;
//     })
//     return filteredPeople;    
// }
