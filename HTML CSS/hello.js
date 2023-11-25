var friendsName = "12233333";
console.log(friendsName)


var strtype = '12344646';
console.log(strtype);
var numtype = '012345555';
console.log(typeof numtype)

var Booltype = false;
console.log( Booltype)


var Rocohna = "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. DELENITI AMET DOLORE AT SINT FUGIT SUNT FUGA REPUDIANDAE, DOLOREMQUE QUIDEM QU"
console.log(Rocohna.toLowerCase())


var myFd = "Anwar Sayed Tipu Rakib Parvej"
console.log(myFd.indexOf("p"))


var  num1 = "55.44645634"
var num2 = 99;

num1 = parseFloat(num1);

var mot = num1+num2;

console.log(mot)

var num4 = 40;
var num3 = 30;

num4 = "" + num4;

var total =  num3 + num4;
console.log(total)

var num1 = 50;
var num2 = 50;


var total = num1 + num2;

console.log(total)

//****** */
var num1 = -10;

var sum = Math.abs(num1);
console.log(sum);

var totalMembers = 15;

var voter = 5.9999;
var sum = Math.round(voter);
console.log(sum)
var a = 10;
var b = 20;
if( a < b){
    console.log("it is correct")
}
var totalMembers = 20;
var voter = 0.9999;
var sum = Math.floor(voter);
console.log(sum);
var totalMembers = 20;
var voter = 5;
var sum = Math.ceil(voter);
console.log(sum);

var lotary = Math.random() * 100; 
console.log(lotary);
var x = 10;
var y = 10;
if( x > y){
    console.log("x boro");
}
else if( x < y){
    console.log(" y boro");
}
else{
    console.log("They are both of same")
}
var sum = 70;
switch(sum){
     case 10:
    console.log("it is correct");
    break;
    case 70:
        console.log("I am different kind of a boy");
        break;
    case 60:
        console.log("Dubai is the outstanding country");
        break;
    case 50:
        console.log("burjh khalifa is the biggest building in the world");
        break;
    case 80:
        console.log('bangladseh is a very small country in the world');
        break;  
}

 ///*********/

var myDate = new Date();
console.log(myDate.toTimeString());
console.log(myDate.toLocaleDateString());
console.log(myDate.getMonth());
console.log(myDate.toLocaleTimeString);
console.log(myDate.toDateString);

////****Array *****/


var fdName = ["Eshan","Anwar","Tutul"];
console.log(fdName[0]);
fdName[1] = 20;
console.log(fdName);

var fdName = ["Eshan","Anwar","Tutul"];
fdName.push("Parvej");
fdName.pop()
console.log(fdName);

var fdName = ["Eshan","Anwar","Tutul"];
//fdName.shift();
fdName.unshift("Rakib");
console.log(fdName);

//slice//

var fdName = ["Eshan","tutul","Anwar","parvej","Ramib","Rakib"]
console.log(fdName.slice(1,3));
var fdName = ["Eshan","tutul","Anwar","parvej","Ramib","Rakib"]
fdName.splice(2,3,"Anwar tahjid")
console.log(fdName);

//array sort methods//

const fruits = ["Banana", "Apple", "Mango","Orange","jack fruits"]
fruits.sort();
fruits.reverse();
console.log(fruits);

var points = [23526,337272,3766,72767,37783,857857,9388,98388,235635,76676,65656,255,36556,58877,7747674,7447,47,];
points.sort(function(a, b){return a- b});
console.log(points)
