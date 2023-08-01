
////////////////////////////  1-bo'lim    ////////////////////////////////


// console.log(12);                   //number
// console.log("Hello string");        //string
// console.log(12==12);              //boolean
// console.log("Hello"-2)             //ikkita bir-biriga qarama-qarshi bo'lgan malumot turlari ustida matematik amal bajarganda NaN chiqadi.
// console.log(1/0);                 // infinity cheksizlik

//----------------------------------------------------------------

// let num=12;      //let operatorida qayta qiymat kiritish mumkun.
// num=10;
// console.log(num);

// const num=12;    //const operatorida yangi qiymat kiritib bo'lmaydi.
// num=13;
// console.log(num);

// var num=12;      //var operatorida ham let kabi qayta qiymat kiritish mumkun.
// num=13;
// console.log(num);

// let age          //qiymati mavjud bo'lmagan o'zgaruvchini chaqirganda 'undefined' chiqadi.
// console.log(age)

//----------------------------------------------------------------

// let text="JavaScript";
// console.log("Bu "+text+" dasturlash tili");
// console.log(`Bu ${text} dasturlash tili`);

//----------------------------------------------------------------

// let a=10, b=5;
// let z=22, y=5;
// console.log(a+b);  //15
// console.log(a-b);  //5
// console.log(a*b);  //50
// console.log(a/b);  //2

// console.log(z%y);  //2
// console.log(++a);  // 11
// console.log(a++);  // 10
// console.log(a);    //11
// console.log(b=a);  //10
// console.log(a+=b)   //15
// console.log(a)     //15
// console.log(a-=b)   //5

//----------------------------------------------------------------

// let a=20,b="20";
// let z=10,y=5;
// console.log(a==b);    //true
// console.log(a===b);   //false
// console.log(z!=y);   //true
// console.log(z<y);    //false
// console.log(z>y);    //true

//--------------------------------------------------------

// let yosh=14;
// if(yosh>14){
//     alert("Siz bu saytga kirishingiz mumkun.");
// }
// else if(yosh==14){
//     alert("Siz bu saytga kirishingiz mumkun.");
// }
// else{
//     alert("Siz yoshingiz kichkinaligi sababli bu saytga kirolmaysiz");
// }

//----------------------------------------------------------

// let text=document.querySelector("#text");

// let yosh=prompt("Yoshingizni kiriting: ");
// if(yosh>=16){
//     text.innerHTML="Siz pasport olish huquqiga egasiz."
// }else{
//     text.innerHTML="Siz hozircha pasport ololmaysiz."
// }

//--------------------------------------------------------

// let text=document.querySelector("#text");
// let bal=prompt("Balingizni kiriting: ");

// if(bal>=86){
//     text.innerHTML="Baho: 5"
// }else if(bal>=72){
//     text.innerHTML="Baho: 4"
// }else if(bal>=56){
//     text.innerHTML="Baho: 3"
// }else{
//     text.innerHTML="Baho: 2"
// }

//----------------------------------------------------------------

// let text=document.querySelector("#text");
// let baho=prompt("Bahongizni kiriting: ");

// if(baho==5 || baho==4){
//     text.innerHTML="Imtixondan o'tdingiz !!!"
// }else if(baho==3 || baho==2 || baho==1){
//     text.innerHTML="Imtixondan o'tolmadingiz !!!"
// }else{
//     text.innerHTML="Bunaqa baho yo'q !!!"
// }

//----------------------------------------------------------------

// let a=false;        // ! emas degani
// console.log(!a);

//----------------------------------------------------------------

// const text=document.getElementById("text"); //1-usul
// console.log(text);

// const text=document.querySelector("#text");  //2-usul
// console.log(text);
// text.innerHTML="Bu ma'lumot javaScriptda yozilgan."

//----------------------------------------------------------------

// const text=document.getElementsByClassName("text2");  //1-usul
// console.log(text);

// const text=document.querySelector(".text2");  2-usul
// console.log(text);

//-----------------------------------------------------------------

// let color=prompt("Siz svetaforning qaysi rangini ko'ryapsiz?");

// if(color=="qizil") { alert("To'xtashingiz kerak!") }
// else if(color=="yashil") { alert("Yurishingiz mumkun!") }
// else if(color=="sariq") { alert("Biroz kuting!") }
// else{ alert("Bunaqa svetafor rangi yo'q!") }

//----------------------------------------------------------------

// let color=prompt("Siz svetaforning qaysi rangini ko'ryapsiz?")
// switch(color){
//     case "qizil":
//     alert("To'xtang");
//     break;
//     case "yashil":
//     alert("Yurishingiz mumkun");
//     break;
//     case "sariq":
//     alert("Biroz kuting")
//     break;
//     default:
//     alert("Svetaforda bunaqa rang yo'q")
// }



// let kun=prompt("Bugun haftaning nechanchi kuni?");
// switch(kun){
//     case "1":
//     alert("Bugun dushanba");
//     break;
//     case "2":
//     alert("Bugun seshanba");
//     break;
//     case "3":
//     alert("Bugun chorshanba");
//     break;
//     case "4":
//     alert("Bugun payshanba");
//     break;
//     case "5":
//     alert("Bugun juma");
//     break;
//     case "6":
//     alert("Bugun shanba");
//     break;
//     case "7":
//     alert("Bugun yakshanba");
//     break;
//     default:
//     alert("Bunaqa hafta kuni yo'q");
// }

// --------FUNCTION DECLORATION-------------------------------------

// let names=prompt("Ismingizni kiriting: ");
// let age=prompt("Yoshingizni kiriting: ");
// let job=prompt("Kasbingizni kiriting: ");

// greet(names,age,job);
// function greet(ism,yosh,kasb) {
//     alert(`Mening ismim ${ism}. Men ${yosh} yoshdaman. Va mening kasbim ${kasb}`);
//     }

//------------FUNCTION EXPRESSION------------------------------------------

// let number=prompt("Sonni kiriting: ");

// const kvadrad=function(kvd){
//     alert(kvd*kvd);
// }
// kvadrad(number)

//-------------Arrow function-----------------------------------------------

// const greet=()=>{
//     return "Hello programmers"
// }
// alert(greet());

// const greet=()=>{
//     alert("Hello programmers")
// }
// greet();

//------------ function EXPRESSION-----------------------------------------

// const message=function(msg){
//     alert(msg)
// }
// message("You passed the exam.");

//---------------function decloration-------------------------------------------

// function message(msg){
//     alert(msg)
// }
// message("You passed the exam.");

//------------------Arrow function-----------------------------------------------

// const message=msg=>alert(msg);
// message("You passed the exam.");

//----------------------------------------------------------------------------

// function katta_kichik(raqam1,raqam2){
//     if(raqam1>=raqam2){
//         alert(`${raqam1} katta`);
//     }else{
//         alert(`${raqam2} katta`);
//     }
// }
// katta_kichik(8,9);

//----------------------------------------------------------------------------

// const juft_toq=function(son){
// if(son%2===0){
//     alert("bu juft son");
// }
// if(son%2===1){
//     alert("bu toq son");
// }
// }
// juft_toq(22);

//---------------------------------------------------------------

// const juf_toq = () => {
//     if (son % 2 === 0) {
//     alert("bu juft son");
//     }
//     if (son % 2 === 1) {
//     alert("bu toq son");
//     }
// };


////////////////////////////2-bolim   ////////////////////////////


// let phone="iPhone";
// let phones=["iPhone","Samsung","Honor"];             //1-usul   massiv
// let phones2=["Nokia","Inoi","Novey"];
// console.log(phones);
// const phones=new Array("iPhone","Samsung","Honor");   //2-usul
// console.log(phones);
// phones[0]="Xiaomi";
// phones.push("RedMI");                                    //Massiv oxiridan yangi element qo'shadi
// phones.unshift("RedMI");                                 //Massiv boshidan yangi element qo'shamiz
// phones.pop();                                            //Massiv oxiridagi elementni olib tashlaydi
// phones.shift();                                           //Massiv boshidagi elementni olib tashlaydi
// console.log(phones.length);                            //Massiv ichidagi elementlar sonini chiqaradi
// const array=phones.toString();                         //Massivni ichidagi elementlarini stringga o'girib beradi
// const array=phones.concat(phones2);                    //Ikkita massivni elementlarini yangi bir massivga qo'shib beradi
// const array=phones.slice();                            //Eski massivdagi elementlarni yangi massivga nusxalab beradi
// const array=phones.reverse();                          //Massiv elementlarini teskari holatda joylashtirib beradi
// const array=phones.join("  ");                        //Massiv elementlar orasiga kiritilgan qiymatni qo'shib beradi
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.sort());                             //Massiv elementlarini alifbe bo'yicha joylashtiradi

// const users=["Nodir","Shohruh","Muzaffar","Shohruh","Xurshid","Nodir","Shohruh"];
// const array=users.filter((item)=>{
//     return item==="Nodir";
// });
// console.log(array);

//------------------------------- String methods---------------------------------

// let text="Hello String Methods. ";
//1 console.log(text.length);                         // matn ichidagi satr va belgilar sonini chiqaradi
//2 let str=text.slice(6,12);                         // kirilgan tartib raqamiga qarab matn ichidagi satrni kesib beradi
//3 let str=text.replace("Hello","Bye");             //kiritilgan yangi qiymatni eski qiymat o'rniga beriladi
//4 let str=text.concat("How are you?");            //berilgan matnga yangi satrlar qo'shadi
//5 let str=text.toUpperCase();                      //matn ichidagi satrlarni katta holatga keltiradi
//6 let str=text.toLowerCase();                     //matndagi barcha satrlarni kichik holatga keltiradi
//7 let str=text.split("");                         //matnni massiv elementlariga bo'lib beradi
//8 let str=text.repeat(3);                         //kiritilgan qiymat asosida ma'lumotlarni takrorlab chiqaradi
//9 let str=text.includes("e");                      //matnda kiritgan satrimiz bor yoki yo'qligini aniqlab beradi
//10 let str=text.startsWith("H");                  //matn qanday satr bilan boshlanganini bildiradi
//11 let str=text.endsWith(" ");                    //matn qanday satr bilan tugaganini tekshiradi
//12 let str=text.indexOf("i");                    // matn satlarini qaysi tartib raqamda turganini aniqlaydi
//13 let string=text.charAt(9);                     //matn tartib raqamiga qarab satrni aniqlaydi
// console.log(string);

//----------------------------------------------------------------

// let isName="Shohruh";
// let array=["MERC",2012,'3000$'];
// let object={
//     name:"Muzaffar",
//     age:12,
//     job:"Programmer",
//     hobbies:["playing football","computer games","listen to music"],
//     family:{dad:"Jhon",mum:"Ann",bro:"Tom"},
//     sayHello:()=>{
//         alert("Assalomu aleykum");
//     },
//     aboutFamily:function (){
//     alert(`My name is ${this.name}. My dad's name is ${this.family.dad}. My mum's name is ${this.family.mum}. My bro's name is ${this.family.bro}`);
//     }
// };

// console.log(isName);
// console.log(array[2]);
// console.log(object.job);          //Objectni ichidagi elementlarni chiqarishni 1-usuli.
// console.log(object["age"]);       //2-usul
// console.log(object.hobbies[0]);   //Object ichida massiv ishlatish
// console.log(object.family.dad);   //Object ichida object ishlatish
// object.sayHello();               //Objectda metodlar

//----------------------------------------------------------------

// object.aboutFamily();
// let cars=new Object();           //Object yaratishning 2-usuli
// cars.model="BMW";
// cars.year="2016";
// cars.cost="20000$";
// cars.color=["white","dark","yellow"];
// console.log(cars);

//---------------function decloration------------------------------------------------

// const isModel=document.querySelector("#model");
// const isYear=document.querySelector("#year");
// const isCost=document.querySelector("#cost");

// function Car(model,year,cost){
//     this.model=model;
//     this.year=year;
//     this.cost=cost;
// }
// const BMW=new Car("BMW X6",2022,"20k$");
// const Tesla=new Car("Tesla",2022,"40k$");
// console.log(BMW);
// isModel.innerHTML=BMW.model;
// isYear.innerHTML=BMW.year;
// isCost.innerHTML=BMW.cost;

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.matematik funksiyalar>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//-----------------------pow ==> darajaga ko'tarib beradi----------------------

// const text=document.querySelector("#model")
// let x=prompt("Sonni kiriting: ");
// text.innerHTML=Math.pow(x,3);

//-------------------------abs ==> sonning modulini chiqaradi--------------------

// const text=document.querySelector("#model")
// let x=prompt("Sonni kiriting: ");
// text.innerHTML=Math.abs(x);

//-----------------------round ==> sonlarni yaxlitlaydi----------------------------

// const text=document.querySelector("#model")
// let x=prompt("Sonni kiriting: ");
// text.innerHTML=Math.round(x);

//------------------------floor ==> Pastga qarab yaxlitlaydi-------------------

// const text=document.querySelector("#model")
// let x=prompt("Sonni kiriting: ");
// text.innerHTML=Math.floor(x);

//--------------------ceil ==> Tepaga qarab yaxlitlaydi---------------------

// const text=document.querySelector("#model")
// let x=prompt("Sonni kiriting: ");
// text.innerHTML=Math.ceil(x);

//---------------------random ==> taxminiy sonlar ketma-ketligini beradi-------

// const text=document.querySelector("#model")
// text.innerHTML=Math.round(Math.random()*100);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> For loop >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const text="It's For Loop"
// for(let i=0;i<=100;i++){
//     console.log(text)
// }

// ---------------------------------Dom events------------------------------------------------

// 1. onclick                 //biror-bir elementga bosgandagi holat
// 2. mouseenter              //sichqonchani biror bir element ustiga olib borilgandagi holat
// 3. mouseleave                //sichqonchani biror elementdan olib qochilgandagi holat
// 4. dblclick                 //sichqonchani ikki marta bosgandagi holati

// const text=document.querySelector("#text");
// const container=document.querySelector(".container");
// const btn=document.querySelector(".btn");
// const btn2=document.querySelector(".btn2");
// const body=document.body;
//Class managment
//1. classList.add("") >>> elementning classlar ro'yhatiga yangi class nomini qo'shadi
//2. classList.remove("") >>> elementning classlar ro'yhatidan ma'lum bir classni olib tashlaydi
//3. classList.toggle("") >>> ma'lum bir class element classlar ro'yhatidan bo'lsa olib tashlaydi, bo'lmasa qo'shadi

// container.classList.add("box");
// container.classList.remove("box");

// btn.addEventListener("click",()=>{
//     body.style.backgroundColor="black";
// })
// btn2.addEventListener("click",()=>{
//     body.style.backgroundColor="white";
// })

//--------------------------------1-usul---------------------------------------------

// text.addEventListener("click",()=>{
//     text.innerHTML="Close";
// })

// ---------------------------------2-usul----------------------------------------------

// const handle=function(){
//     text.innerHTML="Close";
// }
// box.addEventListener("mouseenter",()=>{
//     text.innerHTML="Close";
// });

// box.addEventListener("mouseleave",()=>{
//     text.innerHTML="Open";
// });
