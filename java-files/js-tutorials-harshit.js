//******ternary operator */
// let age = 3;
// let drink= age>=5? "cofee": "milk";
// console.log(drink);
//***************nested if else ***********//
// *************lets play a game
// let winingNumber=19;
// let userGuess=+prompt("Guess a number"); //this is we are using to get number from the user and remember this takes number in string form BUTT we want to compare numbers so we want to convert it into number so we know how to do that? yess by putting + before prompt now a box will appear on browser window which asks a number
// if(userGuess===winingNumber){
//     console.log("your guess is right");
// }else{
//     if(userGuess<winingNumber){
//         console.log("too low");
//     }else{
//     console.log("too high");
//          }
// }
//***********if elseif elseif else******************//
// let temperature=33;
// if(temperature<0){
//     console.log("it is extreamly cold outside");
// }else if(temperature<16)
// {
//     console.log("it is cold outside");
// }else if(temperature<25)
// {
//     console.log("wheather is ok");
// }else if(temperature<35)
// {
//     console.log("it lets go for swim");
// }else if(temperature<45)
// {
//     console.log("turn on AC");
// }else{ 
//     console.log("too hot");
// }
    
// console.log("GOOD BYE");
//*****************arrays*******************************************//
// let mixed=[2,1,3.9,"milk","rehman",null,undefined]
// console.log(mixed);
// console.log(mixed[4]);

// mixed[4]="banana";
// console.log(mixed);
// //to print what is now at index 4  from array use this
// console.log(mixed[4]);
//***********************************objects***********************//
//objects are referance type
//objects store key value pair
//objects dont have index
//it is also called object literal
//keys are also called properties for example below name or age are keys or properties 
           //*==============objcts formation=============================//
// const person={name:"Rehman" , age:27};
// console.log(typeof person);
// console.log(person);
// **************dot and bracket notation for targeting elements in objects
// to target element inside object use dot as 
// console.log(person.name);
//element can also be targeted as 
// console.log(person["name"]);
//we can add array inside the object as and can be written in this style as well
// const person={
//     name:"rehman",
//     age:27,
//     hobbies:["sleeping","reading","eating"]
// }; 
// console.log(person);
//*************adding new key value pairs*******************//
//you can add new key value pair inside the object by dot as
// person.gender="male";
// console.log(person);
//this can be done by bracket notation as 
// person["gender"]="male";
// console.log(person);
// now male is added in the person object 
//***************how to iterate objects******************//
// const person={
//     name:"rehman",
//     age:27,
//     "person hobbies":["sleeping","reading","eating"]
// }; 
//***********************using for in loop
// for(let k in person){
//     console.log(person[k]);
// };
//to get complete key value pair using template string as 
// for(let k in person){
//     console.log(`${k}:${person[k]}`);
// };
//tis can be done without template string as
// for(let k in person){
//     console.log(k,":",person[k]);
// };
//*****************************using object.keys
// console.log(Object.keys(person));
//this gives u array of keys only
//****************using for of loop
// for(let k of Object.keys(person)){
//     console.log(person[k]);
// };
//***************************computed properties **************************//
//lets we have
// const key1="objkey1";
// const key2="objkey2";

// const value1="myvalue1";
// const value2="myvalue2";
//and we want to make object using these values
//if we do this 
// const obj={
//     key1: value1,
//     key2: value2
// }
// console.log(obj);
//not exactly what we want we want value of key1 and key2 inside obj 
//for this put [] around key1 and key2 inside obj this is what we called computed property
// const obj={
//     [key1]: value1,
//     [key2]: value2
// }
// console.log(obj);
// now the output is correct
//another way of doing the same is 
// const obj={};
// obj[key1]=value1;
// obj[key2]=value2;
// console.log(obj);
//*====================spread operator[...] in array and object=========================//
//*********remember we used in array
// const array1=[1,2,3];
// const array2=[23,45,89];
// const newArray=[...array1]; //clone of array1 using spread operator means three dots...
// console.log(newArray);
// we want first elements of array1 and then array2 in newArray then
// const newArray=[...array1,...array2];
// console.log(newArray);
//another thing which can be done is 
//if u write "abc" and apply spread operator then a,b,c will spread  see
// const array=[..."abc"];
// console.log(array);
//**************************spread operator in objects
// const obj1={
//     key1:"value1",
//     key2:"value2"
// }
// const obj2={
//     key3:"value3",
//     key4:"value4"
// }
// const newObject={...obj1}; //clone of obj1 using spread operator
// console.log(newObject);
//to spread obj1 and obj2 in new object 
// const newObject={...obj1,...obj2};
// console.log(newObject);
//if u spread a key in object it will become keyvalue pair with its letters see
//o,1,2,3 will be keys and a,b,c,d will be values
// const object={..."abcd"};
// console.log(object);
//where we used this? in problem solving such as string is very big like "abjdkdjdkddkd" u can find the position of any of its element by spreading it in array
//if u spread array inside object it will be similar as above see
// const object1={...["malik","rehman","student"]};
// console.log(object1); 
//**********************object destructuring********************//
//we can keys of object as variables and obtain their values
// const band={
//     bandName:  "junnoon",
//     famousSong:"Azadi",
//     year:1997,
//     anotherFamousSong:"nothing",
// }
// let {bandName,famousSong}=band;
// console.log(bandName,famousSong);
//year will not printed because we formed only two variables 
//you can change name of variables as
// let {bandName:var1,famousSong:var2}=band;
//now u cannot access by band name u have to use var1
// console.log(var1,var2);
//now to print remaining property of band we can use restProp
// let {bandName,famousSong,...restProp}=band;
// console.log(restProp);
//this gives remaining portion of object band as a new object
//****************************objects inside array*******************//
//very useful in real world applications 