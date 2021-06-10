'use strict';

function searchByFirstName(dataSet) {
    //let filteredPeople = people;
    // Grabbing the values from our nameForm form and inputs.
    let firstNameInput = document.forms['nameForm']['fname'].value;

    if (firstNameInput == '') {
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

function findDescendants(dataSet) {
    for (let i = 0; i < dataSet.length; i++) {
        dataSet[i].descendants = findIndvidualDescendants(dataSet[i])
    }
    return dataSet;
}

function findIndvidualDescendants(person, descendants = []) {

    people.map(function(el) {
        if (el.parents[0] == person.id || el.parents[1] == person.id) {
            descendants.push(el)
            return findIndvidualDescendants(el, descendants)
        }
    })
    return descendants
}

function findParent(dataSet) {
    for (let i = 0; i < dataSet.length; i++) {
        dataSet[i].parents = findIndvidualParents(dataSet[i]);
    }
    return dataSet;
}

function findIndvidualParents(person, parents = []) {

    people.map(function(el) {
        if (el.id == person.parents[0] || el.id == person.parents[1]) {
            parents.push(el)
            return findIndvidualParents(el, parents);
        }
    })
    return parents;

}

function findCurrentSpouse(dataSet) {
    for (let i = 0; i < dataSet.length; i++) {
        dataSet[i].currentSpouse = findIndvidualSpouse(dataSet[i]);
    }
    return dataSet;
}

function findIndvidualSpouse(person, currentSpouse = []) {

    people.map(function(el) {
        if (el.id == person.currentSpouse) {
            currentSpouse.push(el)
            return findIndvidualParents(el, currentSpouse);
        }
    })
    return currentSpouse;

}

// function findSiblings(dataSet) {

//     for (let i = 0; i < dataSet.length; i++) {
//         dataSet[i].siblings = findIndvidualSiblings(dataSet[i]);
//     }
//     return dataSet;
// }

// function findIndvidualSiblings(personWithSiblings, siblings = []) {

//     people.map(function(potentialSiblings) {
//         if (potentialSiblings.parents === personWithSiblings) {
//             siblings.push(siblings)
//             return findIndvidualSiblings(potentialSiblings, siblings);
//         }
//     })
//     return personWithSiblings;
// }

function filterByForm() {
    let filteredPeopleResult = searchByFirstName(people);
    filteredPeopleResult = searchByLastName(filteredPeopleResult);
    filteredPeopleResult = searchByGender(filteredPeopleResult);
    filteredPeopleResult = searchByDob(filteredPeopleResult);
    filteredPeopleResult = searchByHeight(filteredPeopleResult);
    filteredPeopleResult = searchByWeight(filteredPeopleResult);
    filteredPeopleResult = searchByEyeColor(filteredPeopleResult);
    filteredPeopleResult = searchByOccupation(filteredPeopleResult);
    // filteredPeopleResult = searchByParents(filteredPeopleResult);
    // filteredPeopleResult = searchByCurrentSpouse(filteredPeopleResult);
    filteredPeopleResult = findDescendants(filteredPeopleResult);
    filteredPeopleResult = findParent(filteredPeopleResult);
    filteredPeopleResult = findCurrentSpouse(filteredPeopleResult);
    //filteredPeopleResult = findSiblings(filteredPeopleResult);
    buildTable(filteredPeopleResult);
    buildDescendantTable(filteredPeopleResult);
    //console.log(results)
    {
        return filteredPeopleResult;
    }
}

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
                <td>${getParentsFromArray(el.parents)}</td>
                <td>${getSpouseNameFromArray(el.currentSpouse)}</td>
                <td>${getNamesFromArray(el.descendants)}</td>`
            
    });
}

function getNamesFromArray(arrayOfPeople) {
    let result = ""
    arrayOfPeople.map(function(el) {
        result += `(${el.firstName} ${el.lastName})  `
    })
    return result;
}

function getParentsFromArray(arrayOfPeople) {
    let result = ""
    arrayOfPeople.map(function(el) {
        result += `(${el.firstName} ${el.lastName})  `
    })
    return result;
}
function getSpouseNameFromArray(arrayOfPeople) {
    let result = ""
    arrayOfPeople.map(function(el) {
        result += `(${el.firstName} ${el.lastName})  `
    })
    return result;
}
// function getSiblingsFromArray(arrayOfPeople) {
//     let result = ""
//     arrayOfPeople.map(function(el) {
//         result += `${el.firstName} ${el.lastName}\n`
//     })
//     return result;
// }