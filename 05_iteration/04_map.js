// map 

const map1 = new Map()
const str1 = new String('satish prasad')

map1.set('IN', "India")
map1.set('USA', "United States of America")
map1.set('Fr', "France")
map1.set('IN', "India")

// for of loop in map ----------------------------> iterable

for (const [key,value] of map1) {
    console.log(`${key} :- ${value}`)
}

// for in loop in map ----------------------------> not iterable

for (const i in map1) {                       
    // console.log(`${i} :- ${map1[i]}`)
}