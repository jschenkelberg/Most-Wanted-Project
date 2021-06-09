'use strict';

function searchByFirstName(dataSet) {
    //let filteredPeople = people;
    // Grabbing the values from our nameForm form and inputs.
    let firstNameInput = document.forms['nameForm']['fname'].value;

    if (firstNameInput == '' ) {
        return dataSet;
    }
    // "people" is coming from the data.js file. We have access to it within this JavaScript file.

    let filteredPeople = people.filter(function(person) {
        if (person.firstName == firstNameInput) {
            return true;
        }
        return false;
    });
    // Rather than console logging, you need to append the filteredPeople to a table.
    if (filteredPeople.length > 0) {
        return filteredPeople;
    } else {
        alert('Sorry, No Match!!');
    }
}
function searchByLastName(dataSet) {
    //let filteredPeople = people;
    // Grabbing the values from our nameForm form and inputs.
    let lastNameInput = document.forms['nameForm']['lname'].value;

    if (lastNameInput == '') {
        return dataSet;
    }
    // "people" is coming from the data.js file. We have access to it within this JavaScript file.

    let filteredPeople = dataSet.filter(function(person) {
        if (person.lastName == lastNameInput) {
            return true;
        }
        return false;
    });
    // Rather than console logging, you need to append the filteredPeople to a table.
    if (filteredPeople.length > 0) {
        return filteredPeople;
    } else {
        alert('Sorry, No Match!!');
    }
}
function searchByGender(dataSet) {
    // let filteredPeople = people;
    // Grabbing the values from our nameForm form and inputs.
    let genderInput = document.forms['nameForm']['gender'].value;
    if (genderInput == '') {
        return dataSet;
    }
    // "people" is coming from the data.js file. We have access to it within this JavaScript file.

    let filteredPeople = dataSet.filter(function(person) {
        if (person.gender === genderInput) {
            return true;
        }
        return false;
    });
    // Rather than console logging, you need to append the filteredPeople to a table.
    if (filteredPeople.length > 0) {
        return filteredPeople;
    } else {
        alert('Sorry, No Match!!');
    }
}
function searchByDob(dataSet) {
        let dobInput = document.forms['nameForm']['dob'].value;
        if (dobInput == '') {
            return dataSet;
        }
        let filteredPeople = people.filter(function(person) {
            if (person.dob === dobInput) {
                return true;
            }
            return false;
        });
        // Rather than console logging, you need to append the filteredPeople to a table.
        if (filteredPeople.length > 0) {
            return filteredPeople;
        } else {
            alert('Sorry, No Match!!');
        }
}
function searchByHeight(dataSet) {
    let heightInput = document.forms['nameForm']['height'].value;
    if (heightInput == '') {
        return dataSet;
    }
        let filteredPeople = people.filter(function(person) {
            if (person.height == heightInput) {
                return true;
            }
            return false;
        });
        // Rather than console logging, you need to append the filteredPeople to a table.

        if (filteredPeople.length > 0) {
            return filteredPeople;
            
        } else {
            alert('Sorry, No Match!!');
        }
}
function searchByWeight(dataSet) {
    let weightInput = document.forms['nameForm']['weight'].value;
    if (weightInput == '') {
        return dataSet;
    }
        let filteredPeople = people.filter(function(person) {
            if (person.weight == weightInput) {
                return true;
            }
            return false;
        });
        // Rather than console logging, you need to append the filteredPeople to a table.

        if (filteredPeople.length > 0) {
            return filteredPeople;
            
        } else {
            alert('Sorry, No Match!!');
        }
}
function searchByEyeColor(dataSet) {
    let eyeColorInput = document.forms['nameForm']['eyeColor'].value;
    if (eyeColorInput == '') {
        return dataSet;
    }
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
            alert('Sorry, No Match!!');
        }
}
function searchByOccupation(dataSet) {
    let occupationInput = document.forms['nameForm']['occupation'].value;
    if (occupationInput == '') {
        return dataSet;
    }
        let filteredPeople = dataSet.filter(function(person) {
            if (person.occupation == occupationInput) {
                return true;
            }
            return false;
        });
        // Rather than console logging, you need to append the filteredPeople to a table.

        if (filteredPeople.length > 0) {
            return filteredPeople;
            
        } else {
            alert('Sorry, No Match!!');
        }
}
function searchByParents(dataSet) {
    let parentsInput = document.forms['nameForm']['parents'].value;
    if (parentsInput == '') {
        return dataSet;
    }
        let filteredPeople = dataSet.filter(function(person) {
            if (person.parents == parentsInput) {
                return true;
            }
            return false;
        });
        // Rather than console logging, you need to append the filteredPeople to a table.

        if (filteredPeople.length > 0) {
            return filteredPeople;
            
        } else {
            alert('Sorry, No Match!!');
        }
}
function searchByCurrentSpouse(dataSet) {
    let currentSpouseInput = document.forms['nameForm']['currentSpouse'].value;
    if (currentSpouseInput == '') {
        return dataSet;
    }
        let filteredPeople = dataSet.filter(function(person) {
            if (person.currentSpouse == currentSpouseInput) {
                return true;
            }
            return false;
        });
        // Rather than console logging, you need to append the filteredPeople to a table.

        if (filteredPeople.length > 0) {
            return filteredPeople;
            
        } else {
            alert('Sorry, No Match!!');
        }
}
function findDescendants(dataSet){
   for(let i = 0; i <dataSet.length;i++){
       dataSet[i].descendants = findIndvidualDescendants(dataSet[i])
   }
   return dataSet;
}
function findIndvidualDescendants(person, descendants = []){

    people.map(function(el){
        if(el.parents[0] == person.id || el.parents[1] == person.id){
          descendants.push(el)
          return findIndvidualDescendants(el, descendants)
        }                     
    })
    return descendants
}
function filterByForm() {
    let filteredPeopleResult = searchByFirstName(people);
    filteredPeopleResult = searchByLastName (filteredPeopleResult);
    filteredPeopleResult = searchByGender(filteredPeopleResult);
    filteredPeopleResult = searchByDob(filteredPeopleResult);
    filteredPeopleResult = searchByHeight(filteredPeopleResult);
    filteredPeopleResult = searchByWeight(filteredPeopleResult);
    filteredPeopleResult = searchByEyeColor(filteredPeopleResult);
    filteredPeopleResult = searchByOccupation(filteredPeopleResult);
    filteredPeopleResult = searchByParents(filteredPeopleResult);
    filteredPeopleResult = searchByCurrentSpouse(filteredPeopleResult);
    filteredPeopleResult = findDescendants(filteredPeopleResult);
    buildTable(filteredPeopleResult);
    buildDescendantTable(filteredPeopleResult);
    //console.log(results)
    {
        return filteredPeopleResult;
    }
}
function buildDescendantTable (filteredPeopleResult){
    if (filteredPeopleResult.descendants > [4])
    filteredPeopleResult.map(function(el){
        document.getElementById("descendantTable").innerHTML +=
            `<tr>
                <td>${el.descendants[0].firstName}</td>
                <td>${el.descendants[0].lastName}</td>
                <td>${el.descendants[1].firstName}</td>
                <td>${el.descendants[1].lastName}</td>
                <td>${el.descendants[2].firstName}</td>
                <td>${el.descendants[2].lastName}</td>
                <td>${el.descendants[3].firstName}</td>
                <td>${el.descendants[3].lastName}</td>
                <td>${el.descendants[4].firstName}</td>
                <td>${el.descendants[4].lastName}</td>
            </tr>`
    })
    if (filteredPeopleResult.descendants > [3])
    filteredPeopleResult.map(function(el){
        document.getElementById("descendentTable").innerHTML +=
            `<tr>
                <td>${el.descendants[0].firstName}</td>
                <td>${el.descendants[0].lastName}</td>
                <td>${el.descendants[1].firstName}</td>
                <td>${el.descendants[1].lastName}</td>
                <td>${el.descendants[2].firstName}</td>
                <td>${el.descendants[2].lastName}</td>
                <td>${el.descendants[3].firstName}</td>
                <td>${el.descendants[3].lastName}</td>
            </tr>`
    })
    if (filteredPeopleResult.descendants > [2])
    filteredPeopleResult.map(function(el){
        document.getElementById("descendentTable").innerHTML +=
            `<tr>
                <td>${el.descendants[0].firstName}</td>
                <td>${el.descendants[0].lastName}</td>
                <td>${el.descendants[1].firstName}</td>
                <td>${el.descendants[1].lastName}</td>
                <td>${el.descendants[2].firstName}</td>
                <td>${el.descendants[2].lastName}</td>
            </tr>`
    })
    if (filteredPeopleResult.descendants > [1])
    filteredPeopleResult.map(function(el){
        document.getElementById("descendentTable").innerHTML +=
            `<tr>
                <td>${el.descendants[0].firstName}</td>
                <td>${el.descendants[0].lastName}</td>
                <td>${el.descendants[1].firstName}</td>
                <td>${el.descendants[1].lastName}</td>
            </tr>`
    })
    if (filteredPeopleResult.descendants > [0])
    filteredPeopleResult.map(function(el){
        document.getElementById("descendentTable").innerHTML +=
            `<tr>
                <td>${el.descendants[0].firstName}</td>
                <td>${el.descendants[0].lastName}</td>
            </tr>`
    })
}
    
// let result = "hello world".toLowerCase() === "HeLLo wOrlD".toLowerCase();
// console.log(result)

function buildTable(filteredPeople) {
    filteredPeople.map(function(el) {
        document.getElementById("data").innerHTML += `
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
                <td>${el.currentSpouse}</td>
                <td>${getNamesFromArray(el.descendants)}</td>`
            
        })
    }

function getNamesFromArray(arrayOfPeople){
    let result = ""
    arrayOfPeople.map(function(el){
        result += `${el.firstName} ${el.lastName}\n`
    })
    return result;
}

    // el.descendants.map(function(el) {
    //             document.getElementById("data").innerHTML += 
    //         `       
    //         <tr>
    //             <td>${el.firstName}</td>
    //             <td>${el.lastName}</td>
               
    //         <br>
    //         </tr>`
    // })


// function fullTable() {
//     people.map(function(el) {
//         document.getElementById("fullTable").innerHTML += `<table>
//             <thead>
//               <th>ID</th>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Gender</th>
//               <th>D.O.B.</th>
//               <th>Height</th>
//               <th>Weight</th>
//               <th>Eye Color</th>
//               <th>Occupation</th>
//               <th>Parents</th>
//               <th>Current Spouse</th>
//             </thead>
//             <tr>
//             <td id=${el.id} style="color:red">${el.id}</td>
//             <td>${el.firstName}</td>
//             <td>${el.lastName}</td>
//             <td>${el.gender}</td>
//             <td>${el.dob}</td>
//             <td>${el.height}</td>
//             <td>${el.weight}</td>
//             <td>${el.eyeColor}</td>
//             <td>${el.occupation}</td>
//             <td>${el.parents}</td>
//             <td>${el.currentSpouse}</td><br>
//             </tr>
//             </table>`
//     })
// }
// function filterForDescendents (dataSet){
   
//     if (dataSet.id === people.parents)

//     {
//         document.getElementById("table2").innerHTML += `<table>
//             <thead>
//               <th>ID</th>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Gender</th>
//               <th>D.O.B.</th>
//               <th>Height</th>
//               <th>Weight</th>
//               <th>Eye Color</th>
//               <th>Occupation</th>
//               <th>Parents</th>
//               <th>Current Spouse</th>
//             </thead>
//             <tr>
//             <td id=${el.id} style="color:red">${el.id}</td>
//             <td>${el.firstName}</td>
//             <td>${el.lastName}</td>
//             <td>${el.gender}</td>
//             <td>${el.dob}</td>
//             <td>${el.height}</td>
//             <td>${el.weight}</td>
//             <td>${el.eyeColor}</td>
//             <td>${el.occupation}</td>
//             <td>${el.parents}</td>
//             <td>${el.currentSpouse}</td><br>
//             </tr>
//             </table>`


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
// 
