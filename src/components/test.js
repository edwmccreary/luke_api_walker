var str = "https://swapi.dev/api/planets/1/2/3/";
//str = str.slice(0,str.length-1).split('/');
//str = str.split('/',6).pop();
str = str.split('/').reverse().splice(1).shift();
// strArr = str.split('/');
// strArr.pop();
// str = strArr.pop();
console.log(str);