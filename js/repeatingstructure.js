
/*for(let i=10; i>0; i--){
    if(i === 5){
        continue; //break
    }
    console.log(i)
}*/


let i = 235892765827365;
while(i>10){
    console.log(i)
    i /= 35;
}


let name = 'Maria'
let names = ['Joao', 'Paulo', 'Pedro']

for(let name of names){
    console.log(name)
}



let person = {
    name: 'John',
    age: 30,
    weight: 88.6
}
for(let property in person){
    console.log(property)
}