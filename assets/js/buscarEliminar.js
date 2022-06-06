const form_add = document.querySelector("#form_add")
const form_mult = document.querySelector("#form_mult")
const search = document.querySelector("#search")
form_add.addEventListener("submit", addPerson)
form_mult.addEventListener("submit", addNumber)
search.addEventListener("click", showPeople)


const persons = []
const numbers = []
const ages = []
const listMultips = []


function addPerson(e){
    e.preventDefault()
    const data = new FormData(this)
    const name = data.get('name')
    const age = data.get('age')

    const person = name + "-" + age
    persons.push(person)
    const ul = document.createElement("ul");
    const p = persons[persons.length-1]
    const li = document.createElement("li");
    li.innerText = p
    ul.appendChild(li)

    document.getElementById("list_persons").appendChild(ul);
};

function showPeople(){
    let sum = 0;
    console.log('hola')

    persons.forEach( person=> {
        ages.push(getAge(person))
    });

    let m = Math.max(...ages);
    let i=0;

    while(i < numbers.length){
        sum = 0
        while(sum <= m){
            sum = sum + numbers[i];
            listMultips.push(sum);
        }
        i++
    }

    const foundList = []

    for(let i = 0; i<ages.length; i++){

        for(let j = 0; j<listMultips.length; j++){

            if(ages[i] == listMultips[j]){
                foundList.push(getName(persons[i]));
            }
        }

    }
    document.getElementById("show_people").innerHTML = "Encontrados: " + foundList;
}

function addNumber(e){
    e.preventDefault()
    const data = new FormData(this)
    const n1 = Number(data.get('n1'))
    numbers.push(n1)

    const ul = document.createElement("ul");
    const li = document.createElement("li");

    li.innerText = n1
    ul.appendChild(li)

    document.getElementById("list_numbers").appendChild(ul);
}

function getAge(person) { 
    return person.split('-')[1];
}

function getName(person) { 
    return person.split('-')[0];
}