console.log('------------- # 5')
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Вы согласны?",
    () => console.log("Вы согласились."),
    () => console.log("Вы отменили выполнение.")
  );

  console.log('------------- # 6')


  let str1 = 'my-short-string';
let str1Arr = str1.split('-');
str1Arr;

console.log('------------- # 7')


let arr12 =  ['JavaScript', 2015];
let arr12Str = arr12.join(' ');
arr12Str;
'JavaScript 2015'
  console.log('------------- # 8')

  let users = [
   {id: 1, name: "Vic", age: 21}, 
   {id: 2, name: "Petya", age: 30}, 
   {id: 3, name: "Jon", age: 5}
  ];
  let user = users.filter((item)=> item.age < 20);
  user;

  console.log('------------- # 9')

  let users2 = [
  {id: 1, name: "Vic", age: 21},  
  {id: 2, name: "Petya", age: 30}, 
  {id: 3, name: "Jon", age: 5}];
let names = users2.map(item => item.name);
names;


  console.log('------------- # 10')


  function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++){
    let range = arr[i];

    if ( range < a || range > b) {
    arr.splice(i, 1);
    i--;
    }
    }
    }
    let arr = [5,3,8,1];
    filterRangeInPlace(arr, 1, 4);
    arr;

    console.log('------------- # 11')

    function createArray(message, separator) {
      return message.split(separator);
      }

      console.log('------------- # 12')
      function slArray(arr, startIndex, endIndex) {
        return arr.slice([startIndex], [endIndex])
      }


  console.log('------------- # 13')
  function sumAll(...args) {
    let sumResult = 0;
    for(let arg of args){
    sumResult+= arg;}
    return sumResult;
    }

  