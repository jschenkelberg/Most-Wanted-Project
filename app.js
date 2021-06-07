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
function searchByEyeColor(dataSet) {
    let eyeColorInput = document.forms['nameForm']['eyeColor'].value;
    if (eyeColorInput != "") {
        let filteredPeople = dataSet.filter(function(person) {
            if (person.eyeColor == eyeColorInput) {
                return true;
            }
            return false;
        });
        // Rather than console logging, you need to append the filteredPeople to a table.
        if (filteredPeople.length > 0) {
            console.log(filteredPeople);
            return filteredPeople;
        } else {
            console.log('Sorry, looks like there is no one with that name.');
        }
    }
}
function searchByName(dataSet) {
    // let filteredPeople = people;
    // Grabbing the values from our nameForm form and inputs.
    let firstNameInput = document.forms['nameForm']['fname'].value;
    let lastNameInput = document.forms['nameForm']['lname'].value;

    if(firstNameInput == '' && lastNameInput == ''){
        return dataSet;
    }
    // "people" is coming from the data.js file. We have access to it within this JavaScript file.

    let filteredPeople = dataSet.filter(function(person) {
        if (person.firstName === firstNameInput || person.lastName === lastNameInput)
         {
            return true;
        }
        return false;
    });
    // Rather than console logging, you need to append the filteredPeople to a table.
    if (filteredPeople.length > 0) {
        return filteredPeople;
    } else {
        alert('Sorry, looks like there is no one with that name.');
    }
}

function filterByForm(){
    let filteredPeopleResult = searchByName(people);
    filteredPeopleResult = searchByEyeColor(filteredPeopleResult);

    buildTable(filteredPeopleResult);
}

function buildTable(filteredPeople){
    filteredPeople.map(function(el){
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
