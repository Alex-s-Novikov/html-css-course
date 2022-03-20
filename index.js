const objectA = {
    a: 10,
    b: true,
    c: "abc",
    e: {
        name: "Alex",
        age: 35
    }
}

const objectB = objectA

console.log(objectB)

objectB.d = 'Alex'
console.log(objectA.e.name)


const city = "New York"
const popular = true

const myCity = {
    city,
    popular,
    country: "USA"
}

const newCity = { city, popular }

newCity.city = "Las Vegas"

console.log(newCity)
console.log(myCity)
myCity.population = 8804190

console.log(myCity)

delete myCity.country

console.log(myCity)


function myFn (a, b){
    let c
    a = a + 1
    c = a + b
    return c
} 

const d = myFn (10, 3)

console.log(d)