// var number1 = +prompt("عدد اول را وارد کنید")
// var number2 = +prompt("عدد دوم را وارد کنید")

// alert(number1 +  number2)//(دو عدد از کاربر بگیرید و عملیات های ضرب و جمع و تفریق وتقسیم را انجام دهید)تمرین اول سبز لرن

//////////////////////////////////////////////////////////////////////////////

// // (یک عدد از کاربر بگیرید و زوج یا فرد بودن آن را مشخص کنید)تمرین دوم
// var usernumber = +prompt("عدد اول را وارد کنید")
// if(usernumber% 2==0){
//     alert("این عدد زوج است")
// }
// else{
//     alert("این عدد فرد است")
// }



//تمرین سوم (سه عدد از کاربر بگیرید و میانگین آن را محاسبه کنید و نمایش بدهید )
// var usernumber1= +prompt("عدد اول را وارد کنید",0)
// var usernumber2= +prompt("عدد دوم را وارد کنید",0)
// var usernumber3= +prompt("عدد سوم را وارد کنید",0)
// var average=(usernumber1+ usernumber2+usernumber3)/3
// alert(average)

//////////////////////////////////////////////////////////////////////////////

//تمرین چهارم اجازه ورود با چک کردن سن 
// var userage= +prompt("سن خود را وارد کنید" ,0)
// if(userage >= 18){
//     alert("ورود به پنل")
// }
// else{
//     alert("شما مجاز به ورود نیستید")
// }

//تمرین پنجم به توان رساندن عدد اول به عدد دوم
// var firstnumber= +prompt("عدد اول را وارد کنید")
// var secondnumber= +prompt("عدد دوم را وارد کنید")
// var tavan=firstnumber**secondnumber
// alert(tavan)

//////////////////////////////////////////////////////////////////////////////


// تمرین ششم تاریخ تولد کاربر را دریافت کنید و سن او را محاسبه کنید
// var userbirthday= +prompt("تاریخ تولد خود را وارد کنید" ,1360)
// var Birthday= 1402-userbirthday
// if(isNaN(Birthday)){
//     alert("تاریخ وارد شده معتبر نیست")
    
// }
// else if(userbirthday> 1402){
//     alert("تاریخ وارد شده معتبر نیست")
// }
// else{
//     alert(Birthday)
// }


//////////////////////////////////////////////////////////////////////////////


//تمرین هفتم زمان را به دقیقه دریافت کنید و به ساعت تبدیل کنید
// var minute= +prompt("زمان را به دقیقه وارد کنید:",30)
// var hour= minute/60
// if(isNaN(minute)){
//     alert("مقدار وارد شده معتبر نیست!!")
// }
// else{
//     alert(hour)
// }

//////////////////////////////////////////////////////////////////////////////
//تمرین هشتم   سن و جنسیت کاربر را بگیرید و اگر کمتر از 18 بود و یا مونث بود خطا بدهد

// var userage = +prompt("سن خود را وارد کنید:",0)
// if(isNaN(userage)){
//     alert("مقدار وارد شده صحیح نمیباشد")
// }
// var gender = prompt("جنسیت خود را وارد کنید(زن یا مرد)",'')

//  if(!isNaN(gender)){
//     alert("مقدار وارد شده صحیح نیست:")
// }
// else if(gender ==="زن" || userage < 18){
//     alert("شما مجاز به استفاده نیستید")
// }
// else{
//     alert("خوش آمدید به سایت ما")
// }

//////////////////////////////////////////////////////////////////////////////

// var usersocer1= prompt("لطفا نمره خود را وارد کنید:",0)
// var usersocer2= +prompt("لطفا نمره خود را وارد کنید:",0)
// var usersocer3= +prompt("لطفا نمره خود را وارد کنید:",0)
// var usersocer4= +prompt("لطفا نمره خود را وارد کنید:",0)
//  var usermoadel= (usersocer1+usersocer2+usersocer3+usersocer4)/4
//  alert(usermoadel)

// switch(usersocer1){
//     case "20":
//     case "19":
//     case "18":
//         alert('A')
//         break
//     case "17":
//     case "16":
//     case "15":
//         alert('B')
//         break
//     case "14":
//     case "13":
//     case "12":
//         alert('C')
//         break
//         default:
//             alert('شما مشروط شده اید')
// }

//همین تمرین بالا فقط به وسیله if
// if(usersocer1 == 20 ||usersocer1==19){
//     alert("A")
// }
// else if(usersocer1 == 18 ||usersocer1 == 17){
//     alert("B")
// }
// else if(usersocer1 == 16 || usersocer1 == 15){
//     alert("C")
// }
// else{
//     alert("شما مشروط هستید")
// }

//////////////////////////////////////////////////////////////////////////////

//تمرین نهم زوج یا فرد بودن عدد ها را به وسیله یک function مشخص کنید


// function isEvenOrOdd(Number){
//  if (Number %2 === 0) {
//      alert(Number + "is Even")
//  }
//  else{
//      alert(Number + "is Odd")
 
//  }
// }
   
// isEvenOrOdd(10)
// isEvenOrOdd(15)
// isEvenOrOdd(12)
// isEvenOrOdd(15826095)
// isEvenOrOdd(18209850)
//////////////////////////////////////////////////////////////////////////////

// میانگین اعداد را به وسیله یک تابع بدست بیاورید

// function AverageCalculator(num1,num2,num3){
//     var sum = num1+ num2 + num3
//     var average = sum/3
//     alert(average)
//  }
  
//  AverageCalculator(20,34,87)
//  AverageCalculator(23750,34067,9635)
//  AverageCalculator(75394,07563,896587)
//  AverageCalculator(260733,53545,58475)
//  AverageCalculator(35634,36454,966487)
//  AverageCalculator(2977,375,8742)
//  AverageCalculator(8562,568234,7)
//////////////////////////////////////////////////////////////////////////////
//برای این که توابع به مشکل نخورند به ورودی های انها یک مقدار پیش فرض میدهیم
// function sum(num1 = 1 ,num2 = 2 ){
//     alert (num1+num2)
// }

// sum()

//////////////////////////////////////////////////////////////////////////////
//یک تابع بنویسید که دو عدد را از کاربر بگیرد و به توان و یا جهع برساد
// var number1 = +prompt("عدد اول را وارد کنید")
// var number2 = +prompt("عدد دوم را وارد کنید")
// function sunnumber(num1,num2){
//     return num1 ** num2
// }
// var final= sunnumber(number1,number2)
// alert(final)

////////////////////////////////////////////////////////////////////////////////

//یک تابع بنویسید که نام کاربری و پسورد از کاربر بگیرد اما 
//تعداد کارکتر های نام کاربری کمتر از سه و پسورد کمتر از هشت نباشد

// var userName = prompt("نام کاربری را وارد کنید:")
// var password = prompt("پسورد را وارد کنید:")

// if(userName.length < 3 || password.length < 8){
//     alert("رمز عبور یا نام کاربری اشتباه است")
// }
// else {
//     alert("خوش امدید")
// }

////////////////////////////////////////////////////////////////////////////////

//از کاربر نام او را دریافت کنید و به او اجازه بدهید در صورتی که نام 
//او ALIباشد وبه حروف کوچک و بزرگ حساس نباشد
// var userName = prompt("نام خود را وارد کنید")

// if(userName.toLowerCase() == "ali"){
//     alert("خوش آمدید")
// }
// else{
//     alert("مجاز به ورود نیستید")
// }

////////////////////////////////////////////////////////////////////////////////

//متدهای STRING ها

// var text="I Love You"
// text[0]  //این متد هر عددی را که بنویسیم از صفر شروع میکند میشمارد و وقتی به عدد مورد نظر رسید اون حرفی که در اون خانه عدد هست رو برمیگردونه
// text.charAt(3)// این متد هم مثل متد بالا هست فقط اون مقداری که برمیگردونه string هست
// text.charCodeAt(4)//این هم مثل بالا است ولی مقداری که بر میگردونه عدد اون کارکتر در صفحه کلید هست
// text.concat("hosain") //این متد اون کارکتری که گرفته است را می چسباند به مقدار اولیه text
// text.trim() //این متد فاصله اول و آخر ورودی را حذف میکند
// text.toLowerCase()// این متد تمام حروفی که کاربر وارد کرده است را به حروف کوچک تبدیل میکند
// text.toUpperCase()//این متد تمام حروفی که کاربر وارد میکند را بزرگ میکند
// text.search("Love") //این متد اون حروفی که بهش میدیم رو میبرد و جستجو میکند
// text.indexOf() //مثل متد بالا(search) هست 
// text.includes() //این هم مثل متد بالا هست ولی به ما true , false برمیگرداند
// text.slice(3,8) //این متد میان و دو عدد را میگیرد عدد اول شروع کننده و عدد دوم هم پایان جستجو
// text.substring(3,8)// مثل متد بالا هست
// text.substr(3,8)//این متد هم دو عدد میگیرد اولی برای شروع و دومی هم تعداد کارکتر هایی که باید پیدا شود

////////////////////////////////////////////////////////////////////////////////

//متد های که در ریاضی استفاده میشود
// Math.PI//این عدد پی را نشان میدهد
// Math.pow//این عدد را به توان میرساند
// Math.sqrt//این متد جزر عدد را بدست می آورد
// Math.abs//این متد عدد را اگر منفی باشد مثبت میکند
// Math.min//این متد کوچک ترین عدد یک لیست را نشان میدهد
// Math.max//این متد بزرگترین عدد یک لیست را نشان میدهد
// Math.random()*10//این متد یک عدد رندوم بین 0 تا 1 درست میکند که میتوان با ضرب آن را بالا تر هم برد

////////////////////////////////////////////////////////////////////////////////


// یک پروژه بنویسید که کد کپچای پنج رقمی تولید کند
// var firstrandom = Math.random() *100000
// var secondCapcha = Math.floor(firstrandom)
// alert(secondCapcha)

////////////////////////////////////////////////////////////////////////////////

//حلقه for
// for(var i = 0; i < 100; i += 2){
//     console.log(i)
// }

////////////////////////////////////////////////////////////////////////////////

//قیمت پنج محصول را از کاربر بگیرید و مجموع کل را به او نشان بدهید

// var productPrice = 0
// for(var i=0;i<5;i++){
//     productPrice=productPrice+Number(prompt("قیمت محصول را وارد کنید:"))

// }
// alert("مجموع کل: " + productPrice)

////////////////////////////////////////////////////////////////////////////////

//پنج عدد از کاربر دریافت کنید و میانگین آن را بدست بیاورید

//  var miangin=0
//  for(var i = 0; i < 5; i++ ){
//  miangin=miangin+Number(prompt("نمرات" + (i+1) +"را وارد کنید"))
//  }
//  var moadel = miangin/5
//  alert("معدل شما: " + moadel) 

////////////////////////////////////////////////////////////////////////////////
//یک عدد چند رقمی از کاربر دریافت کنید و مجموع ارقام را به او نشان دهید
// var userNumber = +prompt("عدد خود را وارد کنید:" ,0)
// var sum = 0
// for(var i = 0 ; (userNumber / 10) != 0; i++){
//     sum = sum + (userNumber % 10)
//     userNumber = Math.floor(userNumber / 10)
// }
// console.log("مجموع اعداد شما: " , sum)

////////////////////////////////////////////////////////////////////////////////

//یک عدد چند رقمی از کاربر دریافت کنید و تعداد ارقام را به او نشان دهید

// var userNumber = +prompt("عدد خود را وارد کنید:" , 0)
// var conter=0;
//  if(userNumber == String ){
//      alert("مقدار وارد شده صحیح نیست؟")
//      }
//  else if(userNumber == 0){
//     conter = 1;
//  }
//  else{
    
//     for (var i = 0; (userNumber / 10) !=0; i++){
//         conter++;
//         userNumber = Math.floor(userNumber/10);
//     }
//     alert(conter)
//  }
////////////////////////////////////////////////////////////////////////////////

//تمرین های for را به وسیله whileبزنید

// var userNumber=null
// var i=0
// var sum=0
// while(i<3){
//     userNumber=+prompt("نمرات را وارد کنید:")
//     sum +=userNumber
//     i++
// }
// alert("معدل شما: " + sum/3)
// var i = 0
// while(i<100){
//   console.log(i)
//     i+= 2
// }

////////////////////////////////////////////////////////////////////////////////

// var userNumber = +prompt("عدد خود را وارد کنید:" ,0)
//  var sum = 0
//  var i = 0
//  while(userNumber / 10 !=0){
//     sum += userNumber%10
//     userNumber = Math.floor(userNumber/10)
//     i++
// }
// console.log("مجموع اعداد شما: " + sum + "\n" + 
// "conter Digit: " + i)
////////////////////////////////////////////////////////////////////////////////

//یک پروژه بنویسید که دو عدد را از کاربر بگیرد و اعداد زوج بین آنها را نشان بدهد

// var userFirstNumber= +prompt("عدد اول را وارد کنید: " ,0)
// var userSecondNumber= +prompt("عدد دوم را وارد کنید: " ,0)
// if(userFirstNumber %2 === 0){

//     while(userFirstNumber < userSecondNumber){
//         userFirstNumber += 2
//         console.log(userFirstNumber)
//     }
// }
// else {
//     userFirstNumber++;
//     while(userFirstNumber < userSecondNumber){
//         userFirstNumber += 2
//         console.log(userFirstNumber)
//     }

// }

////////////////////////////////////////////////////////////////////////////////

//به مقدار دلخواه تعدادی عدد از کاربر دریافت کنید  و میانگین آنها را بدست آورید

// var userNumber=0;
// var conter=0;
// var sum=0;
// while( userNumber != -1){
// sum +=userNumber;
// userNumber = +prompt("اعداد خودراوارد کنید: \n \nبرای پایان عدد -1راواردکنید")
// if(userNumber != -1){
//     conter++
// }
// }
// console.log(sum/conter)
 
///////////////////////////////////// FOR///////////////////////////////////////////
// var userFirstNumber= +prompt("عدد اول را وارد کنید");
// var userSecondNumber= +prompt("عدد دوم را وارد کنید");
// var power=1;

//  for(var i=0; i<userSecondNumber; i++){
//  power *= userFirstNumber

//  }
//  console.log(power)

///////////////////////////////////// WHILE///////////////////////////////////////////
// var userFirstNumber= +prompt("عدد اول را وارد کنید");
// var userSecondNumber= +prompt("عدد دوم را وارد کنید");
// var power=1;
// var i=0;
// while(i<userSecondNumber){
//     power *=userFirstNumber
//     i++;
// }
//  console.log(power)
 ///////////////////////////////////// DO WHILE///////////////////////////////////////////
//  var userFirstNumber= +prompt("عدد اول را وارد کنید");
// var userSecondNumber= +prompt("عدد دوم را وارد کنید");
// var power=1;
// var i=0;
// do {
    
//     power*=userFirstNumber
//     i++
// } while (i<userSecondNumber);
//  console.log(power)

///////////////////////////push/pop////////////////////////////////////////////////////

// var scores = [12,35,63,85,91,45]
// scores.push(43,76,58,45)

// console.log(scores)

// scores.pop()

// console.log(scores)
////////////////////////////shift/unshift///////////////////////////////////////////////////
// var scores = [12,35,63,85,91,45]

// scores.shift()

// console.log(scores)

// scores.unshift(35)

// console.log(scores)

////////////////////////////////////////////////////////////////////////////////

//تعدادی عدد از کاربر دریافت کنید و داخل یک آرایه ذخیره کنید و میانگین آن را بدست بیاورید

// var userNumber = 0;

// var userNumbers = [];

// var sum =0;
// while(userNumber != -1){
//     userNumber = +prompt("اعداد خود را وارد کنید:")
//     if(userNumber != -1){
//         userNumbers.push(userNumber)
//     }
// }

// for(var i =0;i<userNumbers.length ;i++) {
//  sum += userNumbers[i]
// }
 
// console.log(sum/userNumbers.length)
//////////////////////////object//////////////////////////////////////////////////////
 
//var users = {name: 'hosain',age:22,family:"rezaee"};

//داخل یک object میتوان یک objectدیگر تعریف کرد
//var users ={teacher:{name:'hosain',family:'rezaee'}}
//داخل یک آرایه هم میشود یک objectتعریف کرد
//var users=[{name:'hamed',age:22,family:'rezaee'}]
///////////////////////////////////////////////////////////////////////////////
//یک سامانه ثبت نام بنویسید که یک آرایه داشته باشد 
//داخل آرایه سه کاربر که به صورت دیفالت باشد
//از کاربران نام ونام خانوادگی وسن و ایمیل را دریافت کنید
//بعد از ثبت نام به آرایه ما کاربر جدید اضافه شود
//و شرط هایی برای ثبت نام مثل سن باید حتما عدد باشد نام و نام خانوادگی حتما بیشتر از سه وبیشتر از 15 حرف نباشد
// var users=[
//     {id:1,name:"ali",family:"rezaee",age:22,Email:"ali@gmail.com"},

//     {id:2,name:"reza",family:"javadi",age:18,Email:"javadi@gmail.com"},
    
//     {id:3,name:"sajad",family:"khanzadeh",age:30,Email:"sajad@gmail.com"}

// ]
// var userName = prompt("نام خود را وارد کنید:",'حسین')

// var userFamily = prompt("نام خانوادگی خود را وارد کنید:",'رضایی')

// var userAge = prompt("سن خود را وارد کنید:",30)

// var userEmail = prompt("ایمیل خود را وارد کنید:")

// if(userName.length<3 || userName.length>10){

//     alert("نام خود را درست وارد کنید")

// }else if(userFamily.length<3 || userFamily.length>15){

//     alert("نام خانوادگی خود را درست وارد کنید")

// }else if(isNaN(userAge)||userAge< 18){

//     alert("سن شما درست وارد نشده است")

// }else{
//  var newuser={
//     id:4,
//     name:userName,
//     family:userFamily,
//     age:userAge,
//     Email:userEmail
//  }
//  users.push(newuser)
//  console.log(users)
// }
 /////////////////////////////////////forEach///////////////////////////////////////////

 //forEach میاد و داخل آرایه های ما به تعداد مقادیری که اون آرایه داره اون عملی که ما میخواهیم رو انجام میدهد

//  var users=[18,34,87,90,46,86,39];
//  users.forEach(function(name)
//  {
//   console.log(name *2)
//  })

// var users=[
//          {id:1,name:"ali",family:"rezaee",age:22,Email:"ali@gmail.com"},
    
//          {id:2,name:"reza",family:"javadi",age:18,Email:"javadi@gmail.com"},
        
//          {id:3,name:"sajad",family:"khanzadeh",age:30,Email:"sajad@gmail.com"}
    
//      ]
//      users.forEach(function(user){
//         console.log("name: " + user.name + 'family: ' + user.family)
//      })

///////////////////////////////////include/////////////////////////////////////////////

// var userName= prompt('enter your name:')

// var users= ['ali','reza', 'javad','hasan','hamed']

// var isLogin = users.includes(userName)

// if(isLogin === true){
//     console.log('به پنل خود خوش آمدید')
// }else{
//     console.log('ابتدا باید ثبت نام بکنید')
// }
//console.log(users.includes('hosain'))
//////////////////////////////////////some//////////////////////////////////////////

//تفاوت some با foreach در این است که اگر از foreach چیزی را بخواهیم اون تا آخرین گزینه در اون object آن عمل را انجام میدهد 
//ولی some تا زمانی انجام میدهد که اون گزینه مورد نظر را پیدا کند وبعد از آن متوقف می شود

//  var users=[
//           {id:1,name:"ali",family:"rezaee",age:22,Email:"ali@gmail.com"},
    
//           {id:2,name:"reza",family:"javadi",age:18,Email:"javadi@gmail.com"},
        
//           {id:3,name:"sajad",family:"khanzadeh",age:30,Email:"sajad@gmail.com"}
    
//       ]

// var isInUser = users.some(function(user){
//   return user.name = 'sajad'
// })

// console.log(isInUser)

/////////////////////////////حل تمرین///////////////////////////////////////////////////

// var products= [
//     {id :1, name:' کالج' , price:20000,},
//     {id :2, name:'اسپرت', price:30000,},
//     {id :3, name:'مجلسی', price:46000,},
//     {id :4, name:'ورزشی', price:18000,},
//     {id :5, name:'بیرونی', price:50000,},
//     {id :6, name:'دمپایی', price:23000,},
// ]
 
// var customerproduct=[
//     {id :1, name:'مجلسی', price:44000},
//     {id :2, name:'ورزشی', price:16000}
// ];
// var userProduct=prompt('نام کالا را وارد کنید:')
// var result;
// var sum=0
// var isInshop= products.some(function(product){
//  if(product.name==userProduct){
//     result=product
//     return true;
//  }
// })
// if(isInshop==true){
//     var newProduct={
//         id:3,
//         name:result.name,
//         price:result.price
//     }
//     customerproduct.push(newProduct)
//     customerproduct.forEach(function(product){
//         sum +=product.price;
//     })
//     alert('مجموع کل حساب: ' +sum)
//     console.log('به سبد خرید اضافه شد:)')
// }
// else{console.log('کالا موجود نیست!')}

/////////////////////////////////every///////////////////////////////////////////////

//کار این متد این هست که داخل اون آرایه میگرده و اگر مقدار مورد نظر بود به ما trueیا falseبرمیگردونه
//  var users=[
//     {name:'hosain',family:'rezaee',age:20},
//     {name:'reza',family:'ghafary',age:40},
//     {name:'sajad',family:'soltany',age:19},
//     {name:'davood',family:'hoshyar',age:21},
//     {name:'daryosh',family:'rezazadeh',age:45},
//     {name:'fatemeh',family:'ghorbany',age:32},
//     {name:'soheyla',family:'teymory',age:19},
//  ];
//  var ejaze= users.every(function(sen){
//     return sen.age >18

//  })
//  if(ejaze==true){
//     alert('شما مجاز به استفاده هستید')
//  }else{
//     alert('سن شما برای استفاده مناسب نیست!')
//  }

//////////////////////////////splice//////////////////////////////////////////////////

//به وسیله این متد ما میتونی از آرایه خودمون index 
//رو حذف کنیم و یا اضافه کنیم به هر جای آرایه

// var numbers=[12,54,86,45,06,456,76,36,86,46,97]

// numbers.splice(5, 1, 00);

// console.log(numbers);

////////////////////////////////////////////////////////////////////////////////
 
//  var allproducts= [
//      {id :1, name:' کالج' , price:20000,},
//      {id :2, name:'اسپرت', price:30000,},
//      {id :3, name:'مجلسی', price:46000,},
//      {id :4, name:'ورزشی', price:18000,},
//      {id :5, name:'بیرونی', price:50000,},
//      {id :6, name:'دمپایی', price:23000,},
//  ]
 
//  var basket=[
//      {id :1, name:'مجلسی', price:44000},
//      {id :2, name:'ورزشی', price:16000}
//  ];
// var userdata=prompt('1.add product \n 2.delete product')
// if(userdata ==='1'){
//   var addproduct=prompt('نام کالا را وارد کنید: ')
//   var findproduct;
//   var isInshop=allproducts.some(function(product){
//     if(product.name== addproduct){
//       findproduct = product;
//       return true;
//     }
//   });
//     if(isInshop==true){
//       var newProduct = {
//         id:3,
//         name:findproduct.name,
//         price:findproduct.price
//       } 
//       basket.push(newProduct)
//       console.log(basket)
//       alert('کالای مورد نظر به سبد خرید اضافه شد:)')
//     }
//     else{
//       alert('کالای مورد نظر یافت نشد!')
//     }
// }
// else if(userdata=='2'){
//   var addproduct=prompt('نام کالا را وارد کنید: ')
//  var productIndex= basket.findIndex(function(product){
//     return product.name==addproduct;
//   })
//   basket.splice(productIndex,1)
//   console.log(basket)
//   alert('کالای مورد نظر از سبد خرید حذف شد:)ُ')
// }
// else{
//   alert('گزینه صحیح را وارد کنید!')
// }




// document.getElementById("myForm").addEventListener("submit", function(event) {
//    event.preventDefault(); // جلوگیری از ارسال فرم به صفحه دیگر
   
//    // دریافت مقادیر فیلدهای فرم
//    var name = document.getElementById("name").value;
//    var email = document.getElementById("email").value;
   
//    // انجام عملیات دلخواه با مقادیر دریافتی
//    console.log("نام: ", name);
//    console.log("ایمیل: ", email);
   
//    // می‌توانید اینجا اطلاعات را به سمت سرور ارسال کنید یا عملیات دیگری انجام دهید
   
//    // پاک کردن مقادیر فیلدهای فرم
//    document.getElementById("name").value = "";
//    document.getElementById("email").value = "";
//  });



/////////////////////////////map////////////////////////////////////////////////////

// var numbers=[10,38,97,56,83,36,47]
 
// var result = numbers.map(function(number){
//   return number **2
// })
// console.log(result)

////////////////////////////////////filter/////////////////////////////////

//  var numbers=[10,38,97,56,83,36,47]
//  var filternumber= numbers.filter (function(number){
//     return number>40
// })
// console.log(filternumber)


///////////////////////////////////////تمرین/////////////////////////////////////////

// var userproducts= [
//       {id :1, name:' کالج' , price:20000,},
//       {id :2, name:'اسپرت', price:300000,},
//       {id :3, name:'مجلسی', price:46000,},
//       {id :4, name:'ورزشی', price:180000,},
//       {id :5, name:'بیرونی', price:50000,},
//       {id :6, name:'دمپایی', price:23000,},
//   ];
  
//   var filterbasketuser= userproducts.filter(function(product){
//   return product.price < 100000
//   })
//  var postprice= filterbasketuser.length * 1000
//  var sum=0;
//  userproducts.forEach(function(product){
//     sum += product.price
//  })
//  var total =sum+ postprice
//   console.log(total)

///////////////////////////////////////////////////////////////////////////////////
 
//  var world=prompt('کلمه خود را وارد کنید')

//  var arrayword = world.split('');
//  var reversword= arrayword.reverse('')
//  var resultchare= reversword.join('');
//  if(world==resultchare){
//     alert('به یک صورت هستند')
//  }else{
//     alert('کلمات شبیه هم نیستند')
//  }

////////////////////////////////////////////////////////////////////////////////////

// var toList=[
//     {id:1, title:'eatfoot',isgoing:false},
//     {id:2, title:'workout',isgoing:false},
//     {id:3, title:'gotogym',isgoing:false},
// ]
// var userdata = prompt('1.اضافه کردن فعالیت جدید \n 2.حذف فعالیت \n 3.انجام فعالیت')
// if(userdata==='1'){
//    var givetodo= prompt('نوع فعالیت را وارد کنید:')
//    var resulttodo;
//    var searchtodo= toList.some(function(todo){
//     if(todo.title===givetodo){
//         todo===resulttodo;
//         return true
//     }
// })
//     if(searchtodo){
//         alert('این فعالیت قبلا ثبت شده است')
//     }
//     else{
//         var newtodo={
//             id:toList.length +1,
//             title:givetodo,
//             isgoing:false,
//         }
//         toList.push(newtodo)
//         console.log(toList)
//     }
// }
// else if(userdata==='2'){
//     var givetodo= prompt('نوع فعالیت را وارد کنید:')
//     var delettodo= toList.findIndex(function(todo){
//         return todo.title===givetodo
//     })
//     toList.splice(delettodo,1)
//     console.log(toList)
//     alert('این فعالیت حذف شد')
// }
// else if(userdata==='3'){
//     var givetodo = prompt('نوع فعالیت را وارد کنید:')
//         toList.forEach(function(todo){
//          if(todo.title === givetodo){

//            if(todo.isgoing===false){

//             todo.isgoing===true;
//             console.log(toList)
//            }
//           else{
//             alert('این فعالیت قبلا انجام شده است!')
//           }
//         }
//     })
    
// }
// else{alert('گزینه درست را وارد کنید؟')}

/////////////////////////////////////////////////////////////////////////////////////////////
 
// var taskArray={
//     Amir:['فروش','خرید','بازاریابی'],
//     javad:['تولید محتوا','استوری','پست'],
//     sajad:['آشپزی','دوخت','پادویی'],
//     reza:['خدمت','شراب',]
// }
// var addTask=prompt('اسم وظیفه را بنویسید:')
// var employName=prompt('اسم کارمند را بنویسید:')
 
// var employTask = taskArray[employName]
// employTask.push(addTask)
// console.log(employTask)

/////////////////////////////////////////////////////////////////////////////////////////////

// var cities={
//     tehran:['varamin','karaj','binalod'],
//     mashhad:['fariman','kashmar','sarakhs'],
//     shiraz:['farse','markazy','shiraz'],
//     hamedan:['ghom','boshehr','zayandeh'],
// }

// var usercity=prompt('enyer your city:')
// var cityProvince = cities[usercity]
// cityProvince.forEach(function(city) {
//     console.log(city)
    
// });

/////////////////////////////////////////////////////////////////////////////////////////////

// var allQuestion=[
//     {id:1, question:'2+2',answer:'4'},
//     {id:2, question:'2*3',answer:'8'},
//     {id:3, question:'2/2',answer:'1'},
//     {id:4, question:'2-2',answer:'0'},
//     {id:5, question:'2**2',answer:'144'},
//     {id:6, question:'12*2',answer:'24'},
//     {id:7, question:'12/2',answer:'6'},
//     {id:8, question:'12-2',answer:'10'},
// ]
// var score=0;
// var mainQuestion=''
// allQuestion.forEach(function(question){
//     mainQuestion=prompt(question.question + ' ? ')
//     if(question.answer===mainQuestion){
//         score++
//     }
// })
// alert('Your Score: ' + score)

/////////////////////////////////////////////////////////////////////////////////////////////

// var num1 = +prompt('enter your number 1 : ')
// var num2 = +prompt('enter your number 2 : ')
// var give = +prompt('گزینه مورد نظر را انتخاب کنید \n1.+\n2.-\n3.*\n4./\n5.** : ')
// if(give===1){sum(num1,num2)}
// else if(give===2){tafrigh(num1,num2)}
// else if(give===3){zarb(num1,num2)}
// else if(give===4){taghsim(num1,num2)}
// else if(give===5){tavan(num1,num2)}
// else {alert('گزینه صحیح را انتخاب کنید؟')}
// function sum(num1,num2){
//  alert(num1+num2)
// }
// function tafrigh(num1,num2){
//  alert(num1-num2)
// }
// function zarb(num1,num2){
//  alert(num1*num2)
// }
// function taghsim(num1,num2){
//  alert(num1/num2)
// }
// function tavan(num1,num2){
//  alert(num1**num2)
// }

////////////////////////////////find/////////////////////////////////////////////////////////////
// var users=[
//     {id:1,name:'reza',age:21},
//     {id:2,name:'hamed',age:28},
//     {id:3,name:'vahid',age:25},
//     {id:4,name:'javad',age:27},
//     {id:5,name:'hasan',age:32},
//     {id:6,name:'javid',age:35},
// ]
// var mainuserdata=users.find(function(user){
//     return user.name==='hasan'
// })
// console.log(mainuserdata)

/////////////////////////////////////////////////////////////////////////////////////////////

// var users=[
//     {id:1,name:'reza',password:'78tfaic'},
//     {id:2,name:'hamed',password:'98f7ywv'},
//     {id:3,name:'vahid',password:'9wr8tv2894'},
//     {id:4,name:'javad',password:'78rv92'},
//     {id:5,name:'hasan',password:'owuhv83f34'},
//     {id:6,name:'javid',password:'whr298f2'},
// ]
// var userName=prompt('نام کاربری را وارد کنید:')
// var findpass=users.find(function(pass){
//  return pass.name===userName
// })
// if(findpass){
//     console.log('your password:'+findpass.password)
// }else{
//     alert('چنین کاربری یافت نشد:')
// }
 

/////////////////////////////////////eval////////////////////////////////////////////////////////

/////////////////////////////////////IIFE//Anonymous//////////////////////////////////////////////////////

//توابع بی نام و نشان و یا Anonymous
//که داخل هیچ متغیری صدا زده نشده است
// users.filter(function(user){
//     return user.id=== 10
// })

//توابع خود خوان یا IIFE
//که با گذاشتن پرانتز در آخر اون تابع صدا زده میشود
// (function(){
//     alert('خوش آمدید:)')
// }())

/////////////////////////////////////setinterval////////////////////////////////////////////////////////
//  var minute = +prompt('تایم خود را وارد کنید(به دقیقه) : ')
//  var second = +prompt('تایم خود را وارد کنید(به ثانیه) : ')
// var timer=setInterval(function() {
//     if(second=== -1){
//         minute--
//         second = 59
//     }
//     if(minute === 0 && second === 0){
//         clearInterval(timer)
//     }
//     console.log('timer: ' + minute + ':' + second)
//     second--
// },1000);

////////////////////////////////settimeout/////////////////////////////////////////////////////////////////////////////
// setTimeout(function(num,num1){
//     alert(num**num1)

// },2000,20,10)
 

///////////////////////////////////////////Flag///////////////////////////////////////////////////////////////////////////

//همیشه flagها یا trueو یاfalseهستند

// var userName= prompt('نام خود را وارد کنید:')

// var loginflag=false;
// var users=['hamed','sajad','javad','reza','hasan']
// for(var i=0;i<users.length;i++){
//     if(users[i]=== userName){
//         loginflag = true
//     }
// }
// if(loginflag){
//     alert('لاگین شدید')
// }else{alert('شما ثبت نام نکردید')}
 

/////////////////////////////////////////////////سطح متوسط/////////////////////////////////////////////////////////////
//دسترسی وسیله domبه روش های مختلف 
// let h1elem = document.getElementById('name')
// let h2elem = document.getElementsByClassName('')
// //وقتی به وسیله (class) یک گزینه را انتخاب میکنیم تمام اون مواردی را می آورد که classدارند 
// //به همین دلیل بیشتر به صورت لیست هست و برای این که به توانیم به یک مورد خاص در این لیست خصیصه 
// //بدهیم در جایی که صدا میزنیم به این شکل غمل میکنیم
// console.log(h2elem[1])
// let h3elem = document.getElementsByTagName('')
// let h4elem = document.querySelector('')
// let h5elem = document.querySelectorAll('')
// console.log(h1elem)
// //دسترسی به attributeبه وسیله dom
// let h6elem= document.getElementById('')
// console.log(h6elem.getAttribute('class'))//برای دسترسی به attribute ها
// console.log(h2elem[2].setAttribute('id','about'))//برای اضافه کردن یک attribute
// // برای این که به وسیله dom تغییرات cssبدهیم به این روش استفاده میکنیم

// h1elem.style.color='red'//برای آیدی
// h2elem[2].style.fontSize='20px'//برای کلاس
// //نحوه دسترسی به المنت های htmlو تغییر آنها به وسیله جاوااسکریپت

// console.log(h2elem[2].innerHTML)
// console.log(h2elem[2].textContent)
// console.log(h2elem[2].innerText)
// //برای تغییر محتوا داخل آن از
// h2elem[1].innerHTML='درباره ما'
// //برای تغییر محتوای مقادیر inputها باید به این شکل باشد
// h1elem.value='سلام'
// let input=document.querySelectorAll('.hey')
// input.value='سلام'
// //حالا چگونه به وسیله جاوا اسکریپت یک تگ htmlبسازیم و مقدار داخل آن بگذاریم

// let userName=prompt('نام خود را وارد کنید: ')
// let newDiv= document.createElement('div')
// newDiv.innerHTML=userName
// //برای آیدی دادن و یا کلاس دادن هم به این شکل عمل میکنیم

// newDiv.setAttribute('id','wellcome')
// newDiv.style.color='white'
// input.append(newDiv) //برای اضافه کردن یک ایتم به یک آیتم دیگر از این روش استفاده میشود
// input.appendChild(newDiv)

// let newtable= document.querySelector('ul')

// let table= document.createElement('li')

// table.innerHTML = 'حسین'

// newtable.appendChild (table)

// console.log(newtable)
//برای این که یک اتفاق در صفحه بی افتد به این شکل عمل میکنیم
// let h1element=document.querySelector('h1')
// function changecolor(){
//     h1element.style.color = 'red'//یک فعل مینویسیم و بعد اون رو در یک تگ به وسیله یک متد مثلا کلیک صدا میزنیم

// }
///پروژه خاموش و روشن کردن لامپ
// let buldonoroff=false;
// let bold=document.getElementById('bold1')
// let butten= document.getElementById('btn')
// function turnOnorOff(){
//     if(buldonoroff){
//         bold.setAttribute('src','image/bulboff.gif')
//         butten.innerHTML='turn on'
//         buldonoroff=false

        
//     }else{
//         bold.setAttribute('src','image/bulbon.gif')
//         butten.innerHTML='turn off'
//         buldonoroff=true
//     }
// }
//پروژه فرم لاگین به وسیله مودال
// let userNameInput=document.querySelector('.username')
// let passwordInput=document.querySelector('.password')
// let modal= document.querySelector('.modal')
// function datatrueorfalse(){
//  let userNamevalue = userNameInput.value
//  let passwordvalue = passwordInput.value

//  if(userNamevalue.length<12||passwordvalue.length<8){
//     modal.style.backgroundColor='red'
//     modal.innerHTML='اطلاعات به درستی وارد نشده است'
//     modal.style.display='inline'
//  }else{
//     modal.style.display='inline'
//     modal.innerHTML='ثبت با موفقیت انجام شد'
//     modal.style.backgroundColor='green'
//  }
//   setTimeout(function(){
//     modal.style.display='none'
//     },3000)
// }

//پروژه فرم لاگین به وسیله onkeydown
// let passwordInput=document.querySelector('.password')
// let userNameInput= document.querySelector('.username')
// let userMessage=document.querySelector('.useralert')
// let passMessage=document.querySelector('.passalert')
// function press(){
//     let userNameValue=userNameInput.value
//     if(userNameValue.length<12){
//         userMessage.style.color='red'
//         userMessage.style.display='block'

//     }else{
//         userMessage.style.color='green'
//         userMessage.innerHTML='coerect username value'
//         setTimeout(function(){
//             userMessage.style.display='none'
//         },3000)
//     }
// }
// function press2(){
// let passwordvalue=passwordInput.value

// if(passwordvalue.length<8){
//     passMessage.style.color='red'
//     passMessage.style.display='block'

// }else{
//     passMessage.style.color='green'
//     passMessage.innerHTML='coerect username value'
//     setTimeout(function(){
//         passMessage.style.display='none'
//     },3000)
// }
// }
//پروژه فرم لاگین به وسیله onblur,onfocus
let $ = document
// let userNameInput = $.querySelector('.username')
// let passwordInput = $.querySelector('.password')
// let userNameMessage = $.querySelector('.useralert')
// let passwordMessage = $.querySelector('.passalert')
// function userNameValidation(){
//     let userNamevalue=userNameInput
//     if(!userNamevalue.length < 12){
//         userNameMessage.style.display = 'block'
//         userNameMessage.innerHTML='حداقل مقدار کارکتر ها باید 12 تا باشد'
//         userNameMessage.style.color='red'
//     }else{
//         userNameMessage.style.display = 'block'
//         userNameMessage.innerHTML='مقادیر درست وارد شد'
//         userNameMessage.style.color='green'
//     }
// }
// function passValidation(){
//     let passwordvalue=passwordInput
//     if(!passwordvalue.length < 8){
//         passwordMessage.style.display = 'block'
//         passwordMessage.innerHTML='حداقل مقدار کارکتر ها باید 8  تا باشد'
//         passwordMessage.style.color='red'
//     }else{
//         passwordMessage.style.display = 'block'
//         passwordMessage.innerHTML='مقادیر درست وارد شد'
//         passwordMessage.style.color='green'
//     } 
// }
///////////////////////////////////////////////////نحوه درست set eventبه کمک addlistener////////////////////////////////////////////////////
//نکته این که کلمه on از پشت eventها حذف میشود
// let h1elem= $.addEventListener('clcik',function(){
//     console.log('سلام')
// })
//حالت استاندارد هم این هست که فانکشن را جدا تعریف کنیم وداخل addlistener صدا بزنیم
// let h1elem= $.addEventListener('focus',clickevent)
// function clickevent(){
//     console.log('سلام')
//   }

//نکته: زمانی که فانکشن را داخل addeventlistener صدا زدیم نباید جلوی آن پرانتز بگذاریم چون با 
//refreshشدن صفحه به صورت اتوماتیک عمل میکند

//////////////////////////////////مفهوم classList///////////////////////////////////////////////////////////////////////////////////
// let h1elem=$.getElementById('user')
// h1elem.addEventListener('click',function(){
    // h1elem.classList.add('red')//این redاسم یک کلاس هست که به این اضافه میشود
    // h1elem.classList.remove('red')
    // h1elem.classList.toggle('red')//در این مورد اگر که گزینه ما کلاس redرا داشته باشد از آن حذف میکند و اگر نداشته باشد به آن اضافه میکند
//})
///////////////////////////////////////////تغییر رنگ پس زمینه هر 2ثانیه//////////////////////////////////////////////////////////////////////////
// let redvalue,greenvalue,bluevalue
// setInterval(function(){
//      redvalue=Math.floor(Math.random() * 255)
//      greenvalue=Math.floor(Math.random() * 255)
//      bluevalue=Math.floor(Math.random() * 255)
//     document.body.style.backgroundColor='rgb(' + redvalue + ',' + greenvalue + ',' + bluevalue + ')'
// },2000)
//////////////////////////////////////مینی پروژه فروش بلیط/////////////////////////////////////////
// let countryselect=$.querySelector('.Countreis')
// let cityselect=$.querySelector('.Cities')

// let cityandCountry={
//     Iran:['Mashhad','Esfahan','Shiraz','Ghom'],
//     Usa:['vashington','california','losangeles','new yourk'],
//     turkey:['Estanbul','Vane','Ezmir','Ankara'],
//     afghanistan:['Kabul','Ghandehar','Harat','badakhshan'],
//     Emarat:['Mashhad','Esfahan','Shiraz','Ghom']
// }
//  countryselect.addEventListener('change',function(){
//     if(countryselect==='SelectCountry'){
        
//         cityselect.innerHTML += '<option>SelectCountry</option>'
//         cityselect.innerHTML=''
//     }else{
//      let maincountry = countryselect.value
//      let maincity = cityandCountry[maincountry]
//      cityselect.innerHTML=''

//      maincity.forEach(function(city) {
//         cityselect.innerHTML += '<option>' + city + '</option>'
//      });
//  }

// })
//////////////////////////////////////مینی پروژه کنترل آب وهوا به 2 روش///////////////////////////////////////////////////////////////////

// let weatherCity={//روش اول
//     tehran:    {city:'Tehran',temp:12,weather:'sunny',humidity:23,windspeed:10},
//     mazandaran:{city:'Mazandaran',temp:5,weather:'rainy',humidity:20,windspeed:15},
//     shiraz:    {city:'Shiraz',temp:-3,weather:'windy',humidity:15,windspeed:23},
//     khozestan: {city:'Khozestan',temp:40,weather:'sunny',humidity:10,windspeed:40},
//     mashhad:   {city:'Mashhad',temp:0,weather:'windy',humidity:30,windspeed:9},
//     kerman:    {city:'Kerman',temp:10,weather:'snowy',humidity:45,windspeed:18},
// } 
// let weatherCity=[//روش دوم
//     {city:'Tehran',temp:12,weather:'sunny',humidity:23,windspeed:10},
// {city:'Mazandaran',temp:5,weather:'rainy',humidity:20,windspeed:15},
// {city:'Shiraz',temp:-3,weather:'windy',humidity:15,windspeed:23},
// {city:'Khozestan',temp:40,weather:'sunny',humidity:10,windspeed:40},
// {city:'Mashhad',temp:0,weather:'windy',humidity:30,windspeed:9},
// {city:'Kerman',temp:10,weather:'snowy',humidity:45,windspeed:18},
// ]
// let searchBtn=$.querySelector('.searchbtn')
//  let searchBar=$.querySelector('searchbar')
// searchBtn.addEventListener('click',function(){
// let searchBarValue=searchBar.Value
// //let dataCity=weatherCity[searchBarValue] //روش اول
// let dataCity = weatherCity.find(function(item){//روش دوم
//     return item.city===searchBarValue
// })
// if(dataCity){
// $.querySelector('.City').innerHTML = dataCity.city
// $.querySelector('.Temp').innerHTML = dataCity.temp + 'C'
// $.querySelector('.Weather').innerHTML = dataCity.humidity
// $.querySelector('.Windspeed').innerHTML = dataCity.windspeed + 'Km/h'
// }else{
//     alert('شهر مورد نظر را به درستی وارد کنید')
// }
// })
//////////////////////////////////////////////تفاوت append AND appendchild/////////////////////////////////////////////////////////
// let ulElem = $.querySelector('ul')
// function addNewui(){
//     let newLITag=$.createElement('li')
//     newLITag.innerHTML='produc'
//     let secondLITag=$.createElement('li')
//     secondLITag.innerHTML='User'
     
//     ulElem.append(newLITag)
//     ulElem.appendChild(secondLITag)
    //تفاوت اول
    // ulElem.append('product')//به وسیله appendمیشود مقدار ارسال کرد ولی با 
    // ulElem.appendChild('product')//appendchidنمیشود و فقط باید یک Node HTMLباشد
    //تفاوت دوم
    // ulElem.append(newLITag,secondLITag)//به وسیله appendمیشود چندین مقدار را با هم ارسال کرد
    // ulElem.appendChild(secondLITag)//اما appendchidنمیتواند بیشتر از یک مقدار را ارسال کند
    //تفاوت سوم
    // ulElem.append(newLITag)//append به ما خروجی نمیدهد و undifind بر میگرداند
    // ulElem.appendChild(secondLITag)//اماappendchild به ما خروجی میدهد
// }

//////////////////////////////////////////پروژه تبدیل دما//////////////////////////////////////////////////////////

// const changebtn=$.querySelector('.change')
// const resetBtn=$.querySelector('.reset')
// const convertBtn=$.querySelector('.convert')
// const firstValue=$.querySelector('.C')
// const secondValue=$.querySelector('.F')
// const result=$.querySelector('.result')
// const converter=$.querySelector('.converter')
 
// function change(){
//     if(firstValue.innerHTML==='C'){
// firstValue.innerHTML='C'
// secondValue.innerHTML='F'
// converter.setAttribute('placeholder','F')
// $.title='sabzlearn/F to C'
//     }else{
//         firstValue.innerHTML='F'
// secondValue.innerHTML='C'
// converter.setAttribute('placeholder','C')
// $.title='sabzlearn/C to F'
//     }

// }
// function reset(){
//     converter.value = ''
//     result.innerHTML = ''
// }
// function convert(){
//     if(converter.value===''){
//         result.innerHTML='مقداری وارد نشده است'
//         result.style.color='#993300'
//     }
//     else if(isNaN(converter)){
//         result.innerHTML='مقداری وارد نشده است'
//         result.style.color='#993300'
//     }
//     else {
//         if(firstValue.innerHTML='C'){
//             let resultValue =  (converter.value * 1/8) +32
//             result.innerHTML===converter.value + 'C to ' + resultValue + 'F'
//             result.style.color='rgb(255,255.102)'
            
//         }else{
//             let resultValue = (converter.value - 32) * 5/9
//             result.innerHTML===converter.value + 'F to ' + resultValue.toFixed(2) + 'C'
//             result.style.color='rgb(255,255.102)'

//       }
//     }
// }
 
// changebtn.addEventListener('click',change)
// resetBtn.addEventListener('click',reset)
// convertBtn.addEventListener('click',convert)

//////////////////////////////////تفاوت بین property و attribute///////////////////////////////////////////////
//let h1elem= $.getElementById('userName')
//روش اول  h1elem.getAttribute('class')//این دو روش برای دسترسی بهattribute های یک  المنت  هست
//روش دوم h1elem.className
//اما زمانی که ما یک propertyبرای یک المنت خود setمیکنیم که جز attributeهای 
//اصلی اون نیست دیگر نمیتوانیم از روش دوم برای انتخاب آن استفاده کنیم
//در کل به وسیله getAttributeمیتوانیم به تمام اون attributeهایی که در اون المنت خود setکردیم دسترسی داشته باشیم
// h1elem.userType  //undifind
// h1elem.getAttribute('userType') //text
//ولی برای این که یک attribute را برای یک المنت خود set کنیم باید از روش دوم استفاده کنیم
// let user= $.getElementById('input')
// user.userType='admin'
// console.log(user.userType)//admin
// console.log(user.getAttribute('userType'))//null
/////////////////////////////hasattributeو removeAttribute/////////////////////////////////////////////////////////
//به وسیله hasAttribute ما چک میکنیم که آیا اون Attributeکه ما گفتیم را دارد با نه و به ما trueوfalse برمیگرداند
//let h1elem= $.getElementById('userName')
//h1elem.hasAttribute('href')//true or false
//به وسیله removeAttribute هم ما یک Attribute را حذف میکنیم و چیزی هم برنمی گرداند چون خروجی آن void است
//h1elem.removeAttribute('id')

//////////////////////////////////////////////////روش های set یک eventبرای المنت ها /////////////////////////////////////////////////////////////
//<h1 id="title" onclick="showclick"></h1> روش اول
//  let h1elem= $.getElementById('title')
//  h1elem.addEventListener('click',showclick)//روش دوم
//  h1elem.onclick=showclick//روش سوم
//  function showclick(){
//     console.log('hello')
//  }
//////////////////////////////////submit//////////////////////////////////
//به وسیله submit اطلاعات یک فرم را به سمت server ارسال میکنیم
//این عملیات به سرعت انجام میشود و submit صفحه را یک بار refresh میکند
//////////////////////////event /////////////////////////////////////////////////
// let btnclick=$.getElementById('btn')
// let user = $.getElementById('text')
// user.addEventListener('keydown',function(event){
//     console.log(event)
// })
// btnclick.addEventListener('click',function(event){
//     console.log(event)
// })

//////////////////////////preventDefault /////////////////////////////////////////////////

//برای این هست که مااز عملکرد یا رفتار طبیعی یک المنت جلوگیری کنیم
// let loginForm=$.getElementById('form')
// loginForm.addEventListener('submit',function(event){
//     event.preventDefault()
//     console.log(event)
// })
//////////////////////////////////پروژه key code/////////////////////////////////////////////////
 
// let keyCodeElem=$. getElementById('keyCode')
// let keyElem=$.     getElementById('key')
// let locationElem=$.getElementById('location')
// let whichElem=$.   getElementById('which')
// let CodeElem=$.    getElementById('Code')
// $.body.addEventListener('keydown',function(event){
//     event.preventDefault()
//     let keyCodeEvent=event.keyCode
//     let keyEvent=event.key
//     let locationEvent=event.location
//     let whichEvent=event.which
//     let CodeEvent=event.code
//     keyCodeElem.innerHTML=keyCodeEvent
//     keyElem.innerHTML=keyEvent
//     locationElem.innerHTML=locationEvent
//     whichElem.innerHTML=whichEvent
//     CodeElem.innerHTML=CodeEvent
// })

//////////////////////////////////////NodeNavigation////////////////////////////////////////////////////
//نحوه دسترسی به والد یک المنت به این صورت هست که 
// let head1=$.getElementById('head1')
// let head2=$.getElementById('head2')
// let head3=$.getElementById('head3')
// let head4=$.getElementById('head4')

// let listLi=$.getElementsByClassName('list-Li')
// let list = $.getElementById('List')
// // console.log(head1.parentNode)
// // console.log(head1.parentElement)
// //نحوه دسترسی به یک المنت قبل تر و بعد تر یک المنت(خواهر و برادر)

// console.log(head3.previousElementSibling.previousElementSibling)//برای این که دو تا قبل تر رو دسترسی داشته باشیم همین را دوبار تکرار میکنیم)
// console.log(head3.nextElementSibling)//برای دسترسی به یک المنت بعد از این)
// //برای این که در لیست ها هم بتوانیم به موارد قبل و بعد برویم کمی متفاوت است

// console.log(listLi[2].nextSibling)//این میرود و اولین چیزی که باشد را برمیگرداند و حتی اگر که یک کامنت باشد و یا اگر یک space
// console.log(listLi[2].previousSibling)
// console.log(listLi[2].previousElementSibling)
// console.log(listLi[2].nextElementSibling)

// //نحوه دسترسی به فرزندان یک المنت به این صورت هست که 
// console.log(list.childElementCount)//تعداد بچه های این المنت را برمیگرداند
// console.log(list.children[2])//یک لیست از بچه ها برمیگرداند که یک المنت هستند
// console.log(list.childNodes)//اما این گزینه میاد و Node ها رو هم برمیگردونه(مثل کامنت ها و space ها و....)
// console.log(list.hasChildNodes())//این به ما booleanبر میگردونه و میگه که آیا بچه ای دارد یا نه
// console.log(list.firstChild)//این دو گزینه اولین و آخرین چیزهای یک لیست رو می آورد (کامنت و space)
// console.log(list.lastChild)
// console.log(list.firstElementChild)//این دو گزینه هم اولین و آخرین المنت یک لیست را برمیگرداند
// console.log(list.lastElementChild.firstElementChild.style.color='red')

 // Functions for select elems with id & class
//  var $ = document;
/////////////////////////////////تمرین جلسه 42(پیدا کردن باگ پروژه)/////////////////////////////////////////////////////
//  function _id(id_name) {
//    return $.getElementById(id_name);
//  }

//  function _class(class_name) {
//    return $.getElementsByClassName(class_name);
//  }

//  // Select Elems
//  var togglePassword = _class("toggle-password");
//  var passwordField = _id("password-field");

//  // Fire click event on eye icon
//  togglePassword[0].addEventListener("click", function () {
//    if (passwordField.type == "text") {
//      passwordField.type = "password";
//      togglePassword[0].classList.remove("active");
//    } else {
//      passwordField[0].type = "text";
//      togglePassword.classList.add("active");
//    }
//  })
////////////////////////////////////نحوه حذف یک المنت در Dom///////////////////////////////////////////////////////////
// let h1elem = $.getElementById('title')
// let btn=$.getElementById('btn')
// let elemList = $.getElementsByClassName('listclass')
// btn.addEventListener('click',function(){
//  h1elem.remove()//برای المنت هایی که لیستی نیستند
//  elemList[0].remove()//برای حذف از لیست هم شماره آن را مینویسیم و تمام
// })
// //حالا برای این که اگر روی خود گزینه کلید شد حذف شود به این شکل

// let listItem=$.querySelectorAll('listItem')
// listItem.forEach(function(li){
//   li.addEventListener('click',function(event){
//     //event.target.remove()//
//     event.target.parentElement.remove()//برای زمانی که گزینه ما داخل یک المنت دیگر است
//   })
// })
/////////////////////////////////////////پروژه TODOسطح متوسط ///////////////////////////////////////////////////////////

// let inputtodo=$.querySelector('input')//input که اطلاعات رو میگیریم
// let notSubmitForm= $.querySelector('.add')//این فرم ما هست که اطلاعات input بالا را میفرستد
// let todoUIEiem=$.querySelector('.todos')//این اون ردیف ما هست
// notSubmitForm.addEventListener('submit',function(event){//این برای این هست که فرم پاک نشود
//   event.preventDefault()
// })
// //نکته با فشار دادن دکمه enterفرم ها refresh میشوند
// function newtodo(newTodoValue){//این function برای ما یک ردیف جدید که به او داده ایم میسازد و بعد میرود function بعدی
//   let newtoli=$.createElement('li')
//   let newTodoSpan=$.createElement('span')
//   let newtodotrash=$.createElement('i')
//   newtoli.classList('اسم کلاس ها رو بهش میدیم')
//   newtodotrash.className('اسم کلاس ها')
//   newtodotrash.addEventListener('click',function(event){//این تمام ردیف انتخاب شده را حذف میکند
//     event.target.parentElement.remove()
//   })
//   newTodoSpan.innerHTML=newTodoValue
//   newtoli.append(newTodoSpan,newtodotrash)
//   todoUIEiem.append(newtoli)
// }
// inputtodo.addEventListener('keydown',function(event){
//   let newTodoValue=event.target.value.trim();
//   if(event.keyCode ==='13'){
//     if(newTodoValue){
//       inputtodo.value=''
//       newtodo(newTodoValue)
//     }
//   }
// })
///////////////////////////////////////////////////راست کلیک یا oncontextmenu/////////////////////////////////////////////
//oncontextmenu چیست؟
//برای راست کلیک کردن استفاده میشود
//اگر این گزینه را برای body بنویسیم دیگر کسی نمتواند روی صفحه راست کلیک کند
//<body class="form" oncontextmenu="return false">
////////////////////////////////////////////////////copy cut paste///////////////////////////////////////////////////////
// let editHandler=$.getElementById('button')

// function copyHandler(event){
//   event.preventDefault()
//   console.log('copy')
// }

// function cutHandler(event){
//   event.preventDefault()
//   console.log('cut')
// }

// function pasteHandler(event){
//   event.preventDefault()
//   console.log('paste')
// }
// editHandler.addEventListener('copy',copyHandler)
// editHandler.addEventListener('cut',cutHandler)
// editHandler.addEventListener('paste',pasteHandler)
///////////////////////////////////////////پروژه نمایش منو راست کلید/////////////////////////////////////////////////////
//  const divOnContext=$.getElementById('contextmenu')//این ایدی اون منو راست کلیک ما هست
//  function contextHanler(event){
//    event.preventDefault()//به وسیله این زمانی که راست کلیک میکنیم منوی خود موتور جستجو کار غیر فعال میشود
//    if(divOnContext.style.display==='none'){
//      divOnContext.style.left = event.pageX +'px'
//      divOnContext.style.top = event.pageY +'px'
//      divOnContext.style.display='block'
//    }else{
//      divOnContext.style.left = event.pageX +'px'
//      divOnContext.style.top = event.pageY +'px'
//    }
//  }
//  function clickHanler(){
//    divOnContext.style.display==='none'
//  }
//  function pressHanler(event){
//    if(event.keycode===27){
//      divOnContext.style.display==='none'
//    }
//  }
//  $.body.addEventListener('contextmenu',contextHanler)
//  $.body.addEventListener('click',clickHanler)
//  $.body.addEventListener('keydown',pressHanler)
///////////////////////////////////////////////////////////onLoad////////////////////////////////////////////////////////////////
//onLoad زمانی اتفاق می افتد که صفحه اصلی کاملا بالا میاد یا همان LOAD میشود
//نکته در 99% مواقع onLoad برروی بادی گذاشته میشود
//<body onload="onloadHanler()">
//////////////////////////////////////////////////////DomContentLoad/////////////////////////////////////////////////////////
//شباهت بسیار زیادی به onLoad اما تفاوت هایی هم دارند
//DomContentLoad زمانی انجام میشود که محتوای DOMلود شده باشدومنتظرفایل های CSS و JS نمیمونه اون محتوایی که داخل BODY هست
//OnLoad زمانی رخ میدهد که تمام DOM ,CSS ,JS که به صفحه لینک شده اند لود بشوند 
/////////////////////////////////////////////////////////دو روش برای PRELOAD///////////////////////////////////////////////////////////////
// let loadElem = $.querySelector('.loader')
// window.addEventListener('load',function(){
//   loadElem.classList.add('hidden')//روش اول
//   loadElem.className += 'hidden'//روش دوم
// })
//////////////////////////////////////////////////////removeEventlistener////////////////////////////////////////////////////
// let boxmose=$.getElementById('box')
// let btnremove=$.getElementById('btn')
// function mousemoveHandler(){
//   console.log('سلام')
// }
// function removeHandler(){
//   boxmose.removeEventListener('mousemove',mousemoveHandler)//برای حذف یک رویداد اسم رویدادوfunctionرو میدیم و تمام
// }
// boxmose.addEventListener('mousemove',mousemoveHandler)
// btnremove.addEventListener('click',removeHandler)

//////////////////////////////////////////////////////onSelect////////////////////////////////////////////////////////////
//این گزینه زمانی اجرا میشود که یک متنی را انتخاب میکنیم
//نکته:این رویدادonSelectفقط روی (input,textarea)انجام میشود
//یک نکته در مورد function اگر ما یک functionداشته باشیم که یک ورودی داشته باشد باید در داخل اون جایی که صدا میزنیمش هم ورودی را بدهیم
//function showclick(event){
  //console.log(event)}
//<h1 id="title" onclick="showclick(event)"></h1> 
////////////////////////////////////////////پروژه maxLenght ///////////////////////////////////////////////////////////////
//maxlength="19"برای این inputباید maxLenghtرا تعریف کنیم
// const inputElem=$.querySelector('input')//این جا مقادیر وارد میشود
// const spanElem=$.querySelector('.length')//این تعداد مقادیری که میتوانیم وارد کنیم را مشخص میکند
// const lenghtElem=inputElem.getAttribute('maxLength')//
// inputElem.addEventListener('keyup',function(){
//  spanElem.innerHTML=lenghtElem-inputElem.value.length
// })
/////////////////////////////////////////////////////////////////ProjectModal///////////////////////////////////////////////
// const clickBtn=$.querySelector('button')
// const modalData=$.querySelector('.modal')
// const X=$.querySelector('.X')
// const sectionElem=$.querySelector('section')
// function showModal(){
//   modalData.style.display='block'
//   sectionElem.style.filter='blur(10px)'
//   clickBtn.blur()
// }
// function hideModal(){
//   modalData.style.display='none'
//   sectionElem.style.filter='blur(0px)'
  
// }
// function hideModalEsc(event){
//   if(event.keycode===27){
//     modalData.style.display='none'
//     sectionElem.style.filter='blur(0px)'

//   }
// }
// $.body.addEventListener('keyup',hideModalEsc)
// X.addEventListener('click',hideModal)
// clickBtn.addEventListener('click',showModal)
//////////////////////////////////////////////////////////ProjectNoteApp/////////////////////////////////////////////////////
// const inputElem=$.querySelector('#input')
// const btnAddElem=$.querySelector('#button')
// const btnDeletElem=$.querySelector('#btnDelete')
// const colorsBox=$.querySelectorAll('.colorBox')
// const addNote=$.querySelector('.NoteList')
// colorsBox.forEach(function(colorBox){
//   colorBox.addEventListener('click',function(event){
//     let mainColor = event.target.style.backgroundColor
//     inputElem.style.backgroundColor = mainColor
//   })
// })
// btnDeletElem.addEventListener('click',function(){
//   inputElem.value=''
//   inputElem.style.backgroundColor='#fff'
// })
// function newAddNote(){
//   let newDivElem=$.createElement('div')
//   newDivElem.className='اسم کلاس ها'
//   let mainBg=inputElem.style.backgroundColor
//   newDivElem.style.backgroundColor=mainBg
//   addNote.addEventListener('click',removeNote)
//   let newPElem=$.createElement('p')
//   newPElem.className='اسم کلاس ها'
//   newPElem.innerHTML=inputElem.value
//   newDivElem.append(newPElem)
//   addNote.append(newDivElem)
//   inputElem.value=''
//   inputElem.style.backgroundColor='#fff'
// }
// function removeNote(event){
//   event.target.parentElement.remove()
// }
// btnAddElem.addEventListener('click',newAddNote)
// inputElem.addEventListener('keydown',function(event){
//   if(event.keycode===13){
//     if(inputElem.value){
//       newAddNote()
//     }
//   }
// })
////////////////////////////////////////////onscroll///////////////////////////////////////////////////////////
// function scrollHandler(event){
//   console.log(document.documentElement.scrollTop,document.documentElement.scrollLeft)
// }
// document.addEventListener('scroll',scrollHandler)
////////////////////////////////////////////Project onScroll///////////////////////////////////////////////////////////
// let logoImage=$.querySelector('img')
// let mainNav=$.getElementById('nav')
// $.addEventListener('scroll',function scrollNav(){
//   if($.documentElement.scrollTop>0){
//     logoImage.style.height='64px'
//     mainNav.classList.add('text-white')
//     mainNav.classList.add('bg-black')
//   }else{
//     logoImage.style.height='84px'
//     mainNav.classList.remove('text-white')
//     mainNav.classList.remove('bg-black')
//   }
// })
/////////////////////////////////////////////////////ScrollTo,ScrollBy////////////////////////////////////////////////////////
// function scrollToHandler(){//به وسیله این ما میتونیم که به نقطه 100از لحاظ عمودی برویم(عدد اول به صورت افقی,عدد دوم به صورت عمودی)
//   window.scrollTo(0,100)
// }
// function scrollToHandler(){//به وسیله این ما به مقدار عدد وارد شده حرکت میکنیم (الان ما 100تا100به صورت عمودی حرکت میکنیم)
//   window.scrollBy(0,100)
// }
///////////////////////////////////////////////////////DATASET///////////////////////////////////////////////////////////////////
// function showData(event){//با این کد مقادیر زیر را بر میگرداند
//   console.log(event.target.dataset.id,event.target.dataset.name)
// }

// <button data-id="item" data-name="Ali"></button>
//////////////////////////////////////////////////PROPERTY MEDIA(AUDIO,VIDEO)/////////////////////////////////////////////////
// let mediaAudio=$.querySelector('audio')
// let timeElem=$.querySelector('#time')
// mediaAudio.play()
// mediaAudio.pause()
// mediaAudio.duration//زمان ویدیو یا صوت را به ثانیه نشان میدهد
// mediaAudio.playbackRate=2//سرعت پخش را براساس عدد مقابل افزایش میدهد
// mediaAudio.currentTime 
///////////////////////////////////////////////////////project musicPlayer////////////////////////////////////////////////////////
// let audioElem=$.querySelector('audio')
// let musicSrc=[
//   'media/moein.m4a',
//   'media/daryoosh.m4a',
//   'media/homeyra.m4a',
//   'media/shajarian.m4a'
// ]
// let audioIndex=0
// function previousMusic(){
//   audioIndex--
//   if(audioIndex<0){
//    audioIndex=3
//   }
//   audioElem.setAttribute('src',musicSrc[audioIndex])
//   playMusic()
// }
// function playMusic(){
//   audioElem.play()
// }
// function pauseMusic(){
// audioElem.pause()
// }
// function nextMusic(){
//  audioIndex++
//  if(audioIndex>musicSrc.length-1){
//   audioIndex=0
//  }
//  audioElem.setAttribute('src',musicSrc[audioIndex])
//  playMusic()
// }

// function MusicSpeed(){
//   audioElem.playbackRate=2
// }

// function timeMusicMinu(){
//  audioElem.currentTime -= 5
// }
// function timeMusicPlus(){
//  audioElem.currentTime += 5
// }

/////////////////////////////////////////////////دیباگ پروژه موزیک پلیر////////////////////////////////////////////////////
// const image = document.querySelector("#cover");
// const title = document.getElementById("title");
// const artist = document.getElementById("artist");
// const music = document.querySelector("audio");
// const currentTimeEl = document.getElementById("current-time");
// const durationEl = document.getElementById("duration");
// const progress = document.getElementById("progress");
// const progressContainer = document.getElementById("progress-container");
// const prevBtn = document.getElementById("prev");
// const playBtn = document.getElementById("play");
// const nextBtn = document.getElementById("next");
// const background = document.getElementById("background");

// // Music
// const songs = [
//   {
//     path:
//       "media/html.m4a",
//     displayName: "Html Padcast",
//     artist: "Ozbi",
//     cover:
//       "https://images.genius.com/ee202c6f724ffd4cf61bd01a205eeb47.1000x1000x1.jpg",
//   },
//   {
//     path: "media/kar.m4a",
//     displayName: "Developing",
//     artist: "Flora Cash",
//     cover: "images/peakpx.jpg",
//   },
//   {
//     path:
//       "media/bazar.m4a",
//     displayName: "Earn",
//     artist: "Linkin Park",
//     cover:
//       "https://images.genius.com/c5a58cdaab9f3199214f0e3c26abbd0e.1000x1000x1.jpg",
//   },
// ];

// // Check if Playing
// let isPlaying = false;

// // Play
// function playSong() {
//   isPlaying = true;
//   playBtn.classList.replace("fa-play", "fa-pause");
//   playBtn.setAttribute("title", "Pause");
//   music.play();
// }

// // Pause
// function pauseSong() {
//   isPlaying = false;
//   playBtn.classList.replace("fa-pause", "fa-play");
//   playBtn.setAttribute("title", "Play");
//   music.pause();
// }

// // Play or Pause Event Listener
// playBtn.addEventListener("click", function () {
//   if (isPlaying) {
//     pauseSong()
//   } else {
//     playSong()
//   }
// })

// // Update DOM
// function loadSong(song) {
//   console.log(song);
//   title.textContent = song.displayName;
//   artist.textContent = song.artist;
//   music.src = song.path;
//   changeCover(song.cover);
// }

// function changeCover(cover) {
//   image.classList.remove("active");
//   setTimeout(() => {
//     image.src = cover;
//     image.classList.add("active");
//   }, 100);
//   background.src = cover;
// }

// // Current Song
// let songIndex = 0;

// // Previous Song
// function prevSong() {
//   songIndex--;
//   if (songIndex < 0) {
//     songIndex = songs.length - 1;
//   }
//   loadSong(songs[songIndex]);
//   playSong();
// }

// // Next Song
// function nextSong() {
//   songIndex++;
//   if (songIndex > songs.length - 1) {
//     songIndex = 0;
//   }
//   loadSong(songs[songIndex]);
//   playSong();
// }

// // On Load - Select First Song
// loadSong(songs[songIndex]);

// // Update Progress Bar & Time
// function updateProgressBar(e) {
//   if (isPlaying) {
//     const duration = e.srcElement.duration;
//     const currentTime = e.srcElement.currentTime;
//     // Update progress bar width
//     const progressPercent = (currentTime / duration) * 100;
//     progress.style.width = progressPercent + "%";
//     // Calculate display for duration
//     const durationMinutes = Math.floor(duration / 60);
//     let durationSeconds = Math.floor(duration % 60);
//     if (durationSeconds < 10) {
//       durationSeconds = "0" + durationSeconds;
//     }
//     // Delay switching duration Element to avoid NaN
//     if (durationSeconds) {
//       durationEl.textContent = durationMinutes + ":" + durationSeconds;
//     }
//     // Calculate display for currentTime
//     const currentMinutes = Math.floor(currentTime / 60);
//     let currentSeconds = Math.floor(currentTime % 60);
//     if (currentSeconds < 10) {
//       currentSeconds = "0" + currentSeconds;
//     }
//     currentTimeEl.textContent = currentMinutes + ":" + currentSeconds;
//   }
// }

// // Set Progress Bar
// function setProgressBar(e) {
//   const width = this.clientWidth;
//   const clickX = e.offsetX;
//   const duration = music.duration;
//   music.currentTime = (clickX / width) * duration;
// }

// // Event Listeners
// prevBtn.addEventListener("click", prevSong);
// nextBtn.addEventListener("click", nextSong);
// music.addEventListener("ended", nextSong);
// music.addEventListener("timeupdate", updateProgressBar);
// progressContainer.addEventListener("click", setProgressBar);
///////////////////////////////////////////projectMusicList/////////////////////////////////////////////////////////////////////
// const Plays=$.querySelectorAll('.fa-play')
// const audios=$.querySelectorAll('.audio')
// let musics;
// Plays.forEach(function(play){
//   play.addEventListener('click',function(event){
//     musics = event.target.dataset.name
//     audios.forEach(function(audio){
//      if(audio.dataset.name===musics){
//       audio.currentTime=0
//       audio.play()
//      }else{
//       audio.pause()
//      }
//     })
//   })
// })
//////////////////////////////////////////////////async,defer//////////////////////////////////////////////////////////////
//این کلمات برای بالا آوردن کد های script هست و اگر بخواهیم که کد ها سریع تر و به صورت موازی بالا بیاد استفاده میکنیم

////////////////////////////////////////////////DRAG,DROP///////////////////////////////////////////////////////////////////////
//برای این که یک المنت ما بتواند (DRAG,DROP)بشود باید به انها این گزینه ها را فعال کنیم
// draggable="true"//برای DRAGشدن یا همان کشیده شدن
// ondragstart="dragHandler()"//برای این که به اون المنت با DRAGشدن یک کار را بگوییم از این attribute استفاده میکنیم که ورودی یک functionمیگیرد
// ondrop="dropHandler()"//برای DROPهم از این گزینه استفاده میشود
// ondragover="dragOverHandler(event)"//برای DROP کردن این گزینه باید غیر فعال شود به وسیله event.pereventDefault()
// function dragOverHandler(event){ //
//   event.pereventDefault()
// }

// function dragStartHandler(event){//داخل این functionگفتیم که بیا idاین المنت رو که به عنوان هدف هست داخل ElemIdوبه وسیله dataTransfer
//  event.dataTransfer.setData('ElemId',event.target.id)//این گزینه هست که قرار است dragبشود ,idرو گرفتیم و داخل datatransferبه عنوان ElemId setکردیم
// }
// function dropHandler(event){//این برای اون گزینه هست که قرار drop داخلش بشود
//   let targetId=event.dataTransfer.getData('ElemId')//در این جا اون idرو میگیریم و داخل یک المنت دیگه میگذاریم
//   let targetElem=$.getElementById(targetId)//در این جا میگیم که اون المنت که داخلش idگذاشتیم رو انتخاب کن 
//   event.target.append(targetElem)//و در این جا اضافه کن به
// }
// function dragOverHandler(event){ 
//      event.pereventDefault()
//    }

//برای drag,dropما کلا هفت تا eventدر اختیار داریم

//DRAGGED => onDragStart onDrag onDragEnd
//DROPPED => onDragEnter onDragOver onDragLeave onDrop
//////////////////////////////////////////////////////////LOCALSTORAGE/////////////////////////////////////////////////////////
//برای این هست که بتوانیم اطلاعات را ذخیره کنیم تا با refreshصفحه اطلاعات پاک نشود
// function inserName(){
//   localStorage.setItem('name','Ali')//برای ذخیره در localStorageباید به صورت key---Value باشد
// } 
// function getName(){
//   localStorage.getItem('name')
// }
// function deletName(){
//   localStorage.clear()
// }
//داخل LOCALSTORAGEهمه چی به صورت STRING ذخیره میشودو به صورت stringهم بر میگرداند
//برای این که اطلاعات را به همان شکلی که هستند مثلا (عددوآرایه وOBJECT)باید از Json.stringifyاستفاده کنیم
//localStorage.setItem('name',JSON.stringify(['amir','ali','reza','javad']))
//برای این که به همین شکل هم برگردونیم هم باید اول اون رو تبدیل کنیم
//JSON.parse(localStorage.getItem('name'))
//برای این که مقادیر را ویرایش کنیم باید اون key مورد نظر رو بگیم و اطلاعات جدید رو وارد کنیم
// localStorage.setItem('name','Ali')
// localStorage.setItem('name','hasan')
///////////////////////////////////////////// PROJECT DARK & LIGHT//////////////////////////////////////////////////////////
// const switchElem=$.querySelector('.switch')
// switchElem.addEventListener('click',function(){
//   $.body.className.toggle('dark')
//   if($.body.className.includes('dark')){
//     localStorage.setItem('theme','dark')
//   }else{
//     localStorage.setItem('theme','light')
//   }
// })
// window.onload(function(){
//   let localStorageElem = localStorage.getItem('theme')
//   if(localStorageElem === 'dark'){
//     $.body.classList.add('dark')
//   }
// })
///////////////////////////////////////////////////////////////Project ToDoList With localStorage///////////////////////////////////////////////////////////
// const inputElem = $.getElementById('inputelem')//این ها مقادیر ما هستند
// const btnAddToDo = $.getElementById('addBtn')
// const clearBtn = $.getElementById('btnClear')
// const todoListElem=$.getElementById('todoList')
// let todoArray = []//این لیست todoهای ما هست
// function addNewToDo(){//این میاد و یک objectاز todoما میسازه و به لسیت ما اضافه میکنه
//   let inputElemValue=inputElem.Value
//   let todos={
//     id:todoArray.length+1,
//     title:inputElemValue,
//     complet:false
//   }
//   inputElem.Value=''
//   todoArray.push(todos)
//   setlocalStorage(todoArray)
//   todoGenerator(todoArray)
//   inputElem.focus()
// }
// function setlocalStorage(todoList){//این function میاد و todoهای ما را داخل localStorageقرار میدهد
//   localStorage.setItem('todos',JSON.stringify(todoList))
// }
// function todoGenerator(todoList){//این function میاد و یک ساختاری به وسیله چند تا div,button,label میسازد و در یک قالب به ما نشان میدهد
//   todoList.forEach(function(todo){
//     todoListElem.innerHTML = ''
//     let newtodoLi,newcompletBtn,newDeleteBtn,newLabelElem
//     newtodoLi=$.createElement('li')
//     newtodoLi.className='اسم کلاسها'
//     newcompletBtn=$.createElement('button')
//     newcompletBtn.className=('اسم کلاسها')
//     newcompletBtn.innerHTML = 'Complete'
//     newDeleteBtn=$.createElement('button')
//     newDeleteBtn.className=('اسم کلاسها')
//     newDeleteBtn.innerHTML = 'Delete'
//     newDeleteBtn.setAttribute('onclick','removeTodo (' + todo.id + ')')
//     newLabelElem=$.createElement('label')
//     newLabelElem.innerHTML=todo.title
//     newtodoLi.append(newLabelElem,newcompletBtn,newDeleteBtn)
//     todoListElem.append(newtodoLi)
//   })
// }
// function removeTodo(todoId){//این functionابتدا میاد و اطلاعات رو از localstorageمیگیره بعد اون todoکه ما انتخاب کردیم رو میاره و بعد 
//   let LocalStoregeTodos = JSON.parse(localStorage.getItem('todos'))//حذف میکند و دوباره اطلاعات جدید را نشان میدهد
//   todoArray=LocalStoregeTodos
//   let mainTodo = todoArray.findeIndex(function (todo){
//    return todo.id === todoId 
//   })
//   todoArray.splice(mainTodo,1)
//   setlocalStorage(todoArray)
//   todoGenerator(todoArray)
// }
// function getLocalStorage(){//این function زمانی که صفحه loadمیشود اطلاعات رو از localstorageمیگیره و بعد نشان میدهد
//   let localStorageGet = JSON.parse(localStorage.getItem('todos'))
//   if(localStorageGet){
//     todoArray = localStorageGet
//   }else{
//     todoArray = []
//   }
//   todoGenerator(todoArray)
// }
// function clearTodos(){//این functionمیاد و تمام todoها رو حذف میکند
//   todoArray = []
//   todoGenerator(todoArray)
//   localStorage.removeItem('todos')
// }
// window.addEventListener('load',getLocalStorage)
// btnAddToDo.addEventListener('click',addNewToDo)
// clearBtn.addEventListener('click',clearTodos)
// inputElem.addEventListener('keydown',function(event){
//   if(event.code === 'Enter'){
//     addNewToDo()
//   }
// })
//////////////////////////////////////////////animation///////////////////////////////////////////////////////////////////////////
// let btnElem=$.querySelector('button')
// let divElem=$.querySelector('div')
// let pElem=$.querySelector('p')
// function setAnimation(){
//   divElem.style.animation = 'move 4s 3'
// }
// function animationstartHandler(){
//  divElem.style.backgroundColor = 'pink'
//  pElem.innerHTML='animationstart'
// }
// function animationRepeatHandler(){
//   divElem.style.backgroundColor = 'gray'
//   pElem.innerHTML='animationIteration'
  
// }
// function animationEndHandler(){
//   divElem.style.backgroundColor = 'white'
//   pElem.innerHTML='animationEnd'

// }
// btnElem.addEventListener('animationstart',animationstartHandler)
// btnElem.addEventListener('animationiteration',animationRepeatHandler)
// btnElem.addEventListener('animationend',animationEndHandler)
 /////////////////////////////////////////////////////////Project Brightness RangeSlider/////////////////////////////////////////////////
//  const inputRange=$.querySelector('input') //پروژه تغییر نور پس زمینه
//  const container=$.querySelector('.container')
//  inputRange.addEventListener('change',function(event){
//   container.style.filter = 'brightness('+event.target.value + '%)'
//  })
/////////////////////////////////////////////////////////////نحوه دسترسی به استایل های externalبه وسیله getCumputedStyle///////////////
// const boxElem=$.querySelector('.box')
// console.log(boxElem.style); //just for inline style
// let boxElemStyle= getComputedStyle(boxElem)
// console.log(boxElemStyle.backgroundColor)//روش استاندارد برای استایل های external روش اول
// let boxElemWidth=getComputedStyle(boxElem).getPropertyValue('width')//روش درستی است اما حجم کد ها را بالا میبرد روش دوم
// console.log(boxElemWidth)
////////////////////////////////////////////////////////////try catch///////////////////////////////////////////////////////////////
// let buttonElem=$.querySelector('button')
// let pElem=$.querySelector('p')
// let inputElem=$.querySelector('input')
// // try {
// //   console.log(x)
// // } catch (error) {
// //   pElem.innerHTML=error.name //error
// // }
// function checkValue(){
//   try {
//     if(inputElem.value.length>8){
//       throw 'too Hight'  //throw میاد و مقدار را پرتاب مبکند و یا همان ارسال میکند
//     }else{
//       throw 'too low'
//     }
//   } catch (error) {
//     pElem.innerHTML = error
//   }
//   finally {  //برای این که در اتمام function یک عملی را انجام بدهد
//     pElem.value =''
//   }
// }
  /////////////////////////////////////////////////cssText///////////////////////////////////////////////////////////////////
  //برای استایل دهی به اجزای صفحه هست اما به صورت کوتاه تر
  // let buttonElem=$.querySelector('button')
  // let h1Elem=$.querySelector('h1')
  // h1Elem.addEventListener('click',function(){
  //   h1Elem.style.backgroundColor = 'red'//این روش های دیگر است
  //   h1Elem.style.fontSize = '30px'
  //   h1Elem.style.color = 'black'
  //   h1Elem.style.cssText = 'color = red ; backgroundColor = black; fontSize = 30px'//این روش بهینه تر است
  // })
///////////////////////////////////////////////////project SliderImage/////////////////////////////////////////////////////////////
// let buttonNext=$.querySelector('.buttonnext')
// let buttonprev=$.querySelector('.buttonprev')
// let imageSlider=$.querySelector('img')
// let imgSrcArrey=['image/1010.png','image/1011.png','image/aust.png']
// let imgIndex=0
// function nextImg(){
//   imgIndex++
//   if(imgIndex>imgSrcArrey.length-1){
//    imgIndex=0
//   }
//   imageSlider.setAttribute('src',imgSrcArrey[imgIndex])
// }
// function prevImg(){
//   imgIndex--
//   if(imgIndex<0){
//    imgIndex = imgSrcArrey.length-1
//   }
//   imageSlider.setAttribute('src',imgSrcArrey[imgIndex])
// }
// setInterval (nextImg , 3000)
// buttonNext.addEventListener('click',nextImg)
// buttonprev.addEventListener('click',prevImg)
//////////////////////////////////Project BMI//////////////////////////////////////////////////////////////////////////////////
// const weightInput = $.querySelector('#weightInput')
// const heightInput = $.querySelector('#heightInput')
// const heightVal = $.querySelector('#heightVal')
// const weightVal = $.querySelector('#weighVal')
// const bmiResult = $.querySelector('#result')
// const categuryElem = $.querySelector('#categury')
// function bmiCalculater(){
//   weightInputValue=weightInput.value
//   heightInputValue=heightInput.value
//   heightVal.innerHTML=heightInputValue
//   weightVal.innerHTML=weightInputValue
//   let bmiValue=(weightInputValue/(Math.pow(heightInputValue/100 , 2))).toFixed(1)
//   bmiResult.innerHTML = bmiValue
//   if(bmiValue<18.5){
//     categuryElem.innerHTML='شما کمبود وزن دارید'
//     categuryElem.style.color='#ffc44d'
//   }else if(bmiValue>=18.5 && bmiValue <= 24.9){
//     categuryElem.innerHTML='شماوزن ایده آل دارید'
//     categuryElem.style.color='#0be881'
//   }else if(bmiValue>=25 && bmiValue<=29.9){
//     categuryElem.innerHTML='شما اضافه وزن دارید'
//     categuryElem.style.color='#ff884d'
//   }else{
//     categuryElem.innerHTML='شماچاق هستید'
//     categuryElem.style.color='#ff5e4d'
//   }
// }
// weightInput.addEventListener('input',bmiCalculater)
// heightInput.addEventListener('input',bmiCalculater)

////////////////////////////////////////////////////////////// Variable CSS/////////////////////////////////////////////////////////////////////
// let buttonChange=$.querySelector('button')//ما در این نوع پروژه ها سعی میکنیم که یک مقدار را در یک متغیر نگهداریم وبعد آن را تغییر دهیم
// function changeColor(){
//   $.documentElement.style.setProperty('--test-color','green')//به این وسیله ما مقدار را تغییر میدهیم
//   $.documentElement.style.getPropertyValue('--test-color')//به این وسیله ما مقدار را میگیریم
// }
// buttonChange.addEventListener('click',changeColor)

////////////////////////////////////////////////////////////شخصی سازی تم پس زمینه////////////////////////////////////////////////
// const colorsBtn=$.querySelectorAll('.btn')
// colorsBtn.forEach(function(colorBtn){
//   colorBtn.addEventListener('click',function(event){
//     let btnColor = event.target.dataset.color
//     $.documentElement.style.setProperty('--theme-color',btnColor)
//   })
// })
/////////////////////////////////////////////////////////Animation Keyboard///////////////////////////////////////////////////////////
//  const titleElem=$.querySelector('title')
// $.addEventListener('keyup',function(event){
//  let userEventKey=event.key.toUpperCase()//در این قسمت ما code دکمه ای که فشار داده شده است را میگیریم وبه حروف بزرگ تبدیل میکنیم
//  let mainKeyElem=$.getElementById(userEventKey)//در این قسمت ما اون آیدی رو میگیریم که بامحتوای اون کلیدی که فشار دادیم یکی است
//  mainKeyElem.classList.add('hit')//این جا انیمیشن رو بهش اضافه میکنیم
//  mainKeyElem.addEventListener('animationend',function(){//در این جا هم میگیم که دوباره انیمیشن رو ازش بگیره زمانی که انیمیشن تموم شد
//   mainKeyElem.classList.remove('hit')
//  })
// })
// function appendValueToDom(event){//داخل این function میگوییم که اگر کلیدی که فشار داده شده است Backspace است بیا و از داخل 
//  if(event.keycode==='Backspace'){//اون باکس ما آخرین گذینه را پاک کن و بعد RETURNکن تا خط بعدی اجرا نشود
//   titleElem.innerHTML = titleElem.innerHTML.slice(0,-1)
//   return
//  }
//  titleElem.innerHTML += event.key//بیا اون کدمه ای که فشرده شده است را به باکس بالا اضافه کن
// }

//////////////////////////////////////////////////ADD BOOK IN TABLE///////////////////////////////////////////////////////////////
//  const addButton = $.querySelector('#btn-add')
//  const titleElem = $.querySelector('#title')
//  const yearElem = $.querySelector('#year')
//  const authorElem = $.querySelector('#author')
//  const bookContainer = $.querySelector('#container')
//  let books=[]
//  addButton.addEventListener('click',function(event){//اینجا زمانی که کلیک می شود روی دکمه این عملیات ها انجام می شود
//   event.preventDefault()
//   let titleElemValue=titleElem.value
//   let yearElemValue=yearElem.value
//   let authorElemValue=authorElem.value
//   if(titleElemValue===''||yearElemValue===''||authorElemValue===''){
//    alert('تمام گزینه ها را تکمیل کنید')
//   }else{
//     let newBookObject={
//       id:books.length+1,
//       title:titleElemValue,
//       year:yearElemValue,
//       author:authorElemValue  
//     }
//     books.push(newBookObject)
//     setLocalStorage(books)
//   }
//  })
//  function setLocalStorage(allBooksArray){//در این قسمت میاد و اطلاعات رو به آرایه تبدیل می کند و داخل localStorageذخیره میکند
//   localStorage.setItem('books',JSON.stringify(allBooksArray))
//   makeEmpty()
//   bookGenerator(allBooksArray)
//  }
//  function makeEmpty(){//میاد و تمام input ها رو خالی میکند
//   titleElem.value=''
//   yearElem.value=''
//   authorElem.value=''
//  }
//  function bookGenerator(allBooksArray){//این میاد و یک ردیف به ازای هر کدوم از اطلاعات میسازد و آن ها را نمایش میدهد
//   bookContainer.innerHTML=''
//   allBooksArray.forEach(function(book){
//     newBookTrElem=$.createElement('tr')
//     let newBookTitltElem=$.createElement('th')
//     newBookTitltElem.innerHTML=book.title
//     let newBookYearElem=$.createElement('th')
//     newBookYearElem.innerHTML=book.year
//     let newBookAuthor=$.createElement('th')
//     newBookAuthor.innerHTML=book.author
//     newBookTrElem.append(newBookTitltElem,newBookYearElem,newBookAuthor)
//     bookContainer.append(newBookTrElem)
//   })
//  }
//  function getBookFromLocalStorage(){//این میاد و اطلاعات رو از localStorageمی گیرد و به function بالا میدهد
//   let books=JSON.parse(localStorage.getItem('books'))
//   bookGenerator(books)
//  }
//  window.addEventListener('load',getBookFromLocalStorage)//این برای زمانی که صفحه load میشود
///////////////////////////////////////////////////Project Time///////////////////////////////////////////////////////////////////////
// let huoreElem=$.querySelector('.houre')
// let minuteElem=$.querySelector('.minute')
// let secondesElem=$.querySelector('.secondes')
// setInterval(function(){
//   let timeValue = new Date()
//   let houreTime = timeValue.getHours() 
//   let minuteTime = timeValue.getMinutes() 
//   let secondeTime = timeValue.getSeconds()
//   if(houreValue<10){
//     houreValue = '0' + houreValue
//   }
//   if(minuteValue<10){
//     minuteValue = '0' + minuteValue
//   }
//   if(secondeValue<10){
//     secondeValue = '0' + secondeValue
//   }
//   huoreElem.innerHTML=houreTime
//   minuteElem.innerHTML=minuteTime
//   secondesElem.innerHTML=secondeTime
// },1000)
/////////////////////////////////////////////////////Project Text Generator//////////////////////////////////////////////////////////////
// const dummyText = [
//   'Powder cake croissant tootsie roll tart lollipop jelly beans. Cake lemon drops wafer muffin biscuit marshmallow brownie. Cotton candy jelly-o cotton candy gummies. Cake sesame snaps macaroon tootsie roll. Pie wafer topping tootsie roll apple pie marzipan sweet. Bonbon tootsie roll candy canes pastry brownie bear claw.',
//   'Tiramisu halvah pastry jujubes chocolate bar sugar plum gummies candy. Chocolate chupa chups icing dessert muffin jelly-o oat cake. Powder dessert powder tart tart. Pie powder lemon drops sweet tart icing cake tootsie roll biscuit. Jelly jelly-o sweet roll. Biscuit jelly beans chocolate cake pudding. Sesame snaps wafer apple pie lemon drops cupcake oat cake pie.',
//   'Gingerbread bonbon pudding biscuit sugar plum. Donut caramels cake danish lollipop. Chocolate bar jelly dessert candy canes. Sweet sesame snaps cookie. Croissant bear claw chocolate powder jelly beans ice cream. Bear claw brownie icing apple pie. Ice cream marshmallow tiramisu cotton candy brownie tiramisu jujubes. Croissant cheesecake tiramisu wafer powder pie macaroon.',
//   'Sugar plum gummies cupcake gingerbread sweet. Pastry topping cake candy canes marshmallow caramels chupa chups. Halvah dessert tiramisu brownie lemon drops tootsie roll carrot cake. Cake soufflé oat cake cotton candy. Lollipop cake sweet roll croissant danish. Cake dessert tootsie roll cake liquorice sugar plum biscuit macaroon pie. Bonbon cookie cotton candy bear claw wafer.',
//   'Chocolate sugar plum jelly-o sweet roll gummi bears oat cake powder pastry macaroon. Soufflé cheesecake apple pie jelly beans donut candy canes sweet macaroon. Gingerbread topping dessert bonbon sweet roll oat cake oat cake halvah. Cake chocolate cake chocolate sugar plum candy. Marshmallow brownie sweet dessert croissant chocolate fruitcake sweet donut. Cupcake muffin halvah.',
//   'Marshmallow candy canes marshmallow caramels chocolate cake liquorice jelly. Gummies caramels jelly beans chupa chups brownie bonbon. Jujubes jujubes sesame snaps powder. Macaroon sesame snaps muffin cake marzipan topping muffin powder pastry. Macaroon sesame snaps topping. Sweet apple pie jelly tart. Cookie apple pie sweet roll pastry. Cookie chocolate chocolate bar sweet gummies.',
//   'Powder candy fruitcake. Bear claw sweet roll cake lollipop. Apple pie chupa chups cookie soufflé dessert topping gummi bears. Dragée gummi bears candy canes powder chupa chups. Cotton candy dragée lollipop. Sweet roll muffin oat cake marshmallow macaroon sugar plum muffin. Tart chupa chups candy. Fruitcake jujubes halvah marshmallow bonbon marshmallow. Croissant powder cheesecake donut bonbon. Caramels macaroon donut.',
//   'Cupcake ice cream gummies dessert tiramisu. Cupcake pie cake apple pie jelly-o brownie oat cake soufflé. Candy canes chocolate cake candy canes jelly beans lollipop. Dragée candy canes jujubes pastry cheesecake. Candy canes apple pie powder. Caramels dessert caramels sweet roll danish jelly-o jelly-o powder liquorice. Biscuit pie sugar plum. Oat cake jelly-o marshmallow pastry dragée gummi bears topping. Bear claw ice cream lollipop danish candy jelly-o jelly-o.',
//   'Sweet roll tiramisu sugar plum halvah cupcake topping wafer tootsie roll. Caramels croissant chocolate cake cotton candy. Jelly chocolate cake macaroon brownie pastry gummies cheesecake. Gingerbread pie croissant sugar plum oat cake tart tootsie roll. Chupa chups cake wafer danish. Biscuit donut candy canes gummies candy topping marshmallow jujubes. Chocolate cake cupcake topping. Chupa chups soufflé candy canes pudding brownie gummi bears. Dessert cotton candy jelly oat cake sweet roll cookie macaroon sweet roll. Jelly-o icing halvah.',
// ];
// let amuntInputElem=$.querySelector('#amount')
// let buttonElem=$.querySelector('button')
// let resultElem=$.querySelector('#result')
// buttonElem.addEventListener('click',function(event){
//   event.preventDefault()
//   let amountValue=amuntInputElem.Value
//   let randomTextIndex=Math.floor(Math.random()*dummyText.length)
//   if(amountValue<0||amountValue>9||amountValue===''||isNaN(amountValue)){
//     resultElem.innerHTML=dummyText[randomTextIndex]
//   }else{
//     let sliceArray=dummyText.slice(0,amountValue)
//     let finalTextArray=sliceArray.map(function(item){
//       return '<p>'+ item +'</p>'
//     }).join('')
//     resultElem.innerHTML=finalTextArray
//   }
// })
/////////////////////////////////////////////////resize///////////////////////////////////////////////////////////////
// window.addEventListener('resize',function(){
//   console.log('Height: '+ window.innerHeight + 'Width: ' + window.innerWidth)//به وسیله این دو گزینه میتونیم به عرض و طول صفحه دسترسی داشته باشیم
//})
///////////////////////////////////////////////Project Pagination////////////////////////////////////////////////////////////////
// const listItems = [
//   { id: 1, name: 'Amin', family: 'Saeedi Rad' },
//   { id: 2, name: 'Amir', family: 'Zehtab' },
//   { id: 3, name: 'Qadir', family: 'Yolme' },
//   { id: 4, name: 'Babak', family: 'Mohammadi' },
//   { id: 5, name: 'Hasan', family: 'Ghahreman Zadeh' },

//   { id: 6, name: 'Amin', family: 'Saeedi Rad' },
//   { id: 7, name: 'Amir', family: 'Zehtab' },
//   { id: 8, name: 'Qadir', family: 'Yolme' },
//   { id: 9, name: 'Babak', family: 'Mohammadi' },
//   { id: 10, name: 'Hasan', family: 'Ghahreman Zadeh' },

//   { id: 11, name: 'Saeed', family: 'Ehsani' },
//   { id: 12, name: 'Siamak', family: 'Modiri' },
//   { id: 13, name: 'Mohsen', family: 'Ansari' },
//   { id: 14, name: 'Mehran', family: 'Ali Pour' },
//   { id: 15, name: 'Amir Hossein', family: 'Mahtabi' },

//   { id: 16, name: 'Hossein', family: 'Amino' },
//   { id: 17, name: 'Melika', family: 'Ehsani' },
//   { id: 18, name: 'Qadir', family: 'Yolme' },
//   { id: 19, name: 'Fatemeh', family: 'Alilou' },
//   { id: 20, name: 'Ehsan', family: 'Tayyebi' },

//   { id: 21, name: 'Zahra', family: 'Gholami' },
//   { id: 22, name: 'Matin', family: 'Sahebi' },
  
// ];
// let userListContainer = $.querySelector('#userList')
// let paginationContainer=$.querySelector('#pagination')
// let currentPage = 1
// let rowsCount = 5
// function displayUsersList(currentPage,rowsCount,allUserArray,UserContainer){
//   UserContainer.innerHTML = ''
//   let endIndex = currentPage * rowsCount
//   let startIndex = endIndex - rowsCount
//   let paginatedUser = allUserArray.slice(endIndex,startIndex)
//   paginatedUser.forEach(function(user){
//    let userElement = $.createElement('div')
//    userElement.classList.add('item')
//    userElement.innerHTML = user.name + ' ' + user.family
//    UserContainer.appendChild(userElement)
//   })
// }
// function setupPaging(allUserArray,pageContainer,rowsCount){
// pageContainer.innerHTML = ''
// let pageCount = Math.ceil(allUserArray.length/rowsCount)
// for(let i = 1 ; i < pageCount ; i++){
//  let btn=paginationButtonGenerate(i,allUserArray)
//  pageContainer.append(btn)
// }
// }
// function paginationButtonGenerate(page,allUserArray){
//   let button = $.createElement('button')
//   button.innerHTML=page
//   if(page===currentPage){
//     button.classList.add('active')
//   }
//   button.addEventListener('click',function(){
//     currentPage=page
//     displayUsersList(currentPage,rowsCount,allUserArray,UserContainer)
//     let prevbutton = $.querySelector('button.active')
//     prevbutton.classList.remove('active')
//     button.classList.add('active')
//   })
//   return button
// }
// displayUsersList(currentPage,rowsCount,listItems,UserContainer)
// setupPaging(listItems,paginationContainer,rowsCount)
//////////////////////////////////////////////////////InsertAdjacentHtml//////////////////////////////////////////////
//ما به وسیله این متد دیگر لازم نیست که همش از createElement ,.....استفاده کنیم و به وسیله این متد و attributeهاش مقدار کد ها کمتر می شود
// const boxElem = $.querySelector('.box')
// boxElem.insertAdjacentHTML('afterbegin','<li>Consebt</li>')//به وسیله این میاد وقتی که boxelemشروع میشود این li را به عنوان اولین elementمیگذارد
// boxElem.insertAdjacentHTML('beforeend','<li>Consebt</li>')//با این میاد و این elementرا در آخر این boxelemما اضافه میکند قبل از تمام شدن 
// boxElem.insertAdjacentHTML('beforebegin','<li>Consebt</li>')//به وسیله این میاد و قبل از این که boxelemما شروع بشودبه آن اضافه میکند
// boxElem.insertAdjacentHTML('afterend','<li>Consebt</li>')//به وسیله این میاد و بعد از این که boxelemما تمام شودبه آن اضافه میکند
////////////////////////////////////////////////////// Project Shop//////////////////////////////////////////////////////////////////
// let allProducts = [
//   { id: 1, title: 'Album 1', price: 12.93, img: 'Images/Album 1.png',count:1 },
//   { id: 2, title: 'Album 2', price: 21, img: 'Images/Album 2.png',count:1 },
//   { id: 3, title: 'Album 3', price: 33, img: 'Images/Album 3.png',count:1 },
//   { id: 4, title: 'Album 4', price: 41.98, img: 'Images/Album 4.png',count:1 },
//   { id: 5, title: 'Coffee', price: 98, img: 'Images/Cofee.png',count:1 },
//   { id: 6, title: 'Shirt', price: 65.33, img: 'Images/Shirt.png',count:1 },
// ]
// let userBasket = []
// let shopItemsContainer = $.querySelector('.shop-items')
// let bastekProductsContainer = $.querySelector('.cart-items')
// let removeAllProductBtn=$.querySelector('remove-all-item')
// let cartTotalPriceElem=$.querySelector('.cart-total-price')

//روش اول
// allProducts.forEach(function(product){//این function میاد و به ازای هر کالا یک چارچوبی درست میکنه و به ما نمایش میدهد کد خلاص این در پایین تر هست
// let productContainer = $.createElement('div')
// productContainer.classList.add('shop-item')
// let productTitleSpan = $.createElement('div')
// productTitleSpan.classList.add('shop-item-title')
// productTitleSpan.innerHTML = product.title
// let productImageElem = $.createElement('img')
// productImageElem.classList.add('shop-item-image')
// productImageElem.setAttribute('src',product.img)
// let productDetailsContainer = $.createElement('div')
// productDetailsContainer.classList.add('shop-item-details')
// let productPriceSpan = $.createElement('span')
// productPriceSpan.classList.add('shop-item-price')
// productPriceSpan.innerHTML = product.price
// let prodcutAddButton = $.createElement('button') 
// prodcutAddButton.innerHTML = 'ADD TO CART'
// prodcutAddButton.className = 'btn btn-primary shop-item-button'
// prodcutAddButton.addEventListener('click',function(){
//   addProductToBasketArray(product.id)
// })
// productDetailsContainer.append(productPriceSpan,prodcutAddButton)
// productContainer.append(productTitleSpan,productImageElem,productDetailsContainer)
// shopItemsContainer.append(productContainer)
// })
//   روش اول پایان
//  روش دوم
// allProducts.forEach(function (product) {//این کد ریفکتور شده ی کد بالا هست که مختصر تر هست ولی میتوان از این هم کمتر کرد در سطح پیشرفته
    
//   shopItemsContainer.insertAdjacentHTML('beforeend', '<div class="shop-item"><span class="shop-item-title">' + product.title + 
//   '</span><img class="shop-item-image" src="' + product.img + '"><div class="shop-item-details"><span class="shop-item-price">'
//    + product.price + '</span><button class="btn btn-primary shop-item-button" onclick="addProductToBasketArray(' + product.id + 
//    ')">ADD TO CART</button></div></div>')
// })
//    روش دوم پایان
//روش سوم
//  let productFragment = $.createDocumentFragment()
// allProducts.forEach(function(product){//این function میاد و به ازای هر کالا یک چارچوبی درست میکنه و به ما نمایش میدهد کد خلاص این در پایین تر هست
// let productContainer = $.createElement('div')
// productContainer.classList.add('shop-item')
// let productTitleSpan = $.createElement('div')
// productTitleSpan.classList.add('shop-item-title')
// productTitleSpan.innerHTML = product.title
// let productImageElem = $.createElement('img')
// productImageElem.classList.add('shop-item-image')
// productImageElem.setAttribute('src',product.img)
// let productDetailsContainer = $.createElement('div')
// productDetailsContainer.classList.add('shop-item-details')
// let productPriceSpan = $.createElement('span')
// productPriceSpan.classList.add('shop-item-price')
// productPriceSpan.innerHTML = product.price
// let prodcutAddButton = $.createElement('button') 
// prodcutAddButton.innerHTML = 'ADD TO CART'
// prodcutAddButton.className = 'btn btn-primary shop-item-button'
// prodcutAddButton.addEventListener('click',function(){
//   addProductToBasketArray(product.id)
// })
// productDetailsContainer.append(productPriceSpan,prodcutAddButton)
// productContainer.append(productTitleSpan,productImageElem,productDetailsContainer)
//     productFragment.append(productContainer)
// })
// shopItemsContainer.append(productFragment)
//روش سوم پایان
// function addProductToBasketArray(productId){//این function میاد و زمانی که روی دکمه addبزنیم یک کالا رو به سبد خرید اضافه میکند
// let mainProduct = allProducts.find(function(product){//این میاد به ازای هر ایدی که در ورودی با کلیک شدن روی اون فرستاده شده از داخل 
//  return product.id === productId        //ارایه میگرده و اون رو برمیگردونه
// })
// if(checkBasket){
//   product.count++
// }
// else{

//   userBasket.push(mainProduct)
//   basketProductsGenerator(userBasket)//این میاد و به ازای هر کالایی که به سبد خرید اضافه شده است یک ردیف میسازد
//   calcTotalPrice(userBasket)//این میاد و به ازای هر کالایی که اضافه شده قیمت ها رو جمع میکنه و به عنوان مبلغ کل نشون میده
// }
// }
// function basketProductsGenerator(userBasketArray){
// bastekProductsContainer.innerHTML = ''
// userBasketArray.forEach(function(product){
//   let basketProductContainer = $.createElement('div')
//   basketProductContainer.classList.add('cart-row')

//   let basketProductDetailsContainer = $.createElement('div')
//   basketProductDetailsContainer.className = 'cart-item cart-column'

//   let basketProductImg = $.createElement('img')
//   basketProductImg.setAttribute('src', product.img)
//   basketProductImg.setAttribute('width', "100")
//   basketProductImg.setAttribute('height', "100")
//   basketProductImg.classList.add('cart-item-image')

//   let basketProductTitleSpan = $.createElement('span')
//   basketProductTitleSpan.classList.add('cart-item-title')
//   basketProductTitleSpan.innerHTML = product.title

//   basketProductDetailsContainer.append(basketProductImg, basketProductTitleSpan)

//   let basketProductPriceSpan = $.createElement('span')
//   basketProductPriceSpan.className = 'cart-price cart-column'
//   basketProductPriceSpan.innerHTML = product.price

//   let basketProductInputsContainer = $.createElement('div')
//   basketProductInputsContainer.className = 'cart-quantity cart-column'

//   let basketProductInput = $.createElement('input')
//   basketProductInput.className = 'cart-quantity-input'
//   basketProductInput.value = product.count
//   basketProductInput.setAttribute('type', 'number')
//   basketProductInput.addEventListener('change',function(){
//     updateProductCount(product.id,basketProductInput.value)
//   })

//   let basketProductRemoveBtn = $.createElement('button')
//   basketProductRemoveBtn.className = 'btn btn-danger'
//   basketProductRemoveBtn.innerHTML = 'Remove'
//   basketProductRemoveBtn.addEventListener('click',function(){
//     removeProductFromBasket(product.id)
//   })

//   basketProductInputsContainer.append(basketProductInput, basketProductRemoveBtn)

//   basketProductContainer.append(basketProductDetailsContainer, basketProductPriceSpan, basketProductInputsContainer)

//   basketProductsContainer.append(basketProductContainer)
// })
// }
// function basketProductsGenerator(userBasketArray){//این خلاصه کد بالا هست ولی مقادیر htmlرو نداشتم که درستش کنم ولی بالاتر کاملتر یک کد هست
//   userBasketArray.forEach(function(product){
//     basketProductsContainer.insertAdjacentHTML('beforeend','<span class="cart-item cart-header cart-column">ITEM</span><span class="cart-price cart-header cart-column">PRICE</span><span class="cart-quantity cart-header cart-column">QUANTITY</span>')
//   })
// }
// function removeProductFromBasket(productId){//این میاد و ایدی کالاهایی که با کلیک روی اون ها به دست آورده اون رو حذف میکنه و دوباره سبد خرید رو با محتوای جدید نشون میده
//   userBasket = userBasket.filter(function(product){
//     return product.id!==productId
//   })
//   basketProductsGenerator(userBasket)
    // calcTotalPrice(userBasket)
// }
// removeAllProductBtn.addEventListener('click',function(){//این میاد و تمام سبد خرید رو پاک میکنه
//   userBasket=[]
//   basketProductsGenerator(userBasket)
    //  calcTotalPrice(userBasket)
// })
// function calcTotalPrice(userBasketArray){
//   let totalPriceValue=0
//   userBasketArray.forEach(function(product){
//     totalPriceValue += product.price * product.count
//   })
//    cartTotalPriceElem.innerHTML = totalPriceValue
// }
// function updateProductCount(productId,newCount){
//  userBasket.forEach(function(product){
//   if(product.id === productId){
//     product.count = newCount
//   }
//   calcTotalPrice(userBasket)
//  })
// }
// let checkBasket=userBasket.some(function(productId){
//   if(productId===product.id){
//     return true
//   }
// })
////////////////////////////////////////////////////////////Delete//////////////////////////////////////////////////

// let user={id:1,name:'Ali',family:'khodabandeh',age:23}
// console.log(user)
// delete user.age                //سعی کنید که از deleteبرای objectها استفاده کنید
// console.log(user)
// let number = [12,54,76,94,23,56,23,90]
// delete number[3]               //اگر از deleteبرای آرایه استفاده کنید به مشکل میخورید
// console.log(number[3])
/////////////////////////////////////////////////////////FRAGMENT FOR DOMMANIPULATION/////////////////////////////////
// const userlist = $.querySelector('#users')
//  let number = ['ali','sara','mohammad','hasan','jafar','sajad','reza']
//  let newUserLi = null
//  userlist.forEach(function(user){//(روش اول)به جای استفاده از این روش می آییم و از این روش دوم استفاده میکنیم
//   newUserLi = $.createElement('li')   در این روش ما به ازای هر یک نفر در لیست خودمان باید یک بار مرورگر با jsارتباط بگیرد
//   newUserLi.innerHTML = user
//   userlist.appendChild(newUserLi)
//  })


//روش دوم یا همان fragment
//  const userlist = $.querySelector('#users')
//  let number = ['ali','sara','mohammad','hasan','jafar','sajad','reza']//در این روش شما یک بار تمام اطلاعات را دریافت میکنید و داخل 
//  let newUserLi = null                                                  //fragment ذخیره میکنید و حالا تمام اطلاعات را یک بار به مروگر میدهید
//  let userFragment = $.createDocumentFragment()
//  userlist.forEach(function(user){
//   newUserLi = $.createElement('li')
//   newUserLi.innerHTML = user
//   userFragment.appendChild(newUserLi)
//  })
//  userlist.append(userFragment)
////////////////////////////////////////////////////////انواع console ///////////////////////////////////////////////
// let num1 = 2
// let num2 = 3
// console.log(num1 + num2)
// console.error('Data is not defined')
// console.info('Api response status is 404')
// console.warn('Api response status is 404')
// console.assert(num1 + num2 < 10, 'BIG')
// let user = {
//     id: 1,
//     username: 'Amin',
//     password: '12345',
//     age: 21
// }
// let products = [
//     { id: 1, name: 'LapTop', price: 12000000 },
//     { id: 2, name: 'Phone', price: 7000000 },
//     { id: 3, name: 'SSD Hard', price: 2000000 },
//     { id: 4, name: 'Cool Pad', price: 500000 },
// ]
// console.table(products)
// console.time('For loop')
// for (let i = 0 ; i < 1000000 ; i++) {
//     // Codes
// }
// console.timeEnd('For loop')
// console.log('قبل از گروه - ابتدا');
// console.group('first logs')
// console.log('First log in gp');
// console.log('Second log in gp');
// console.log('Third log in gp');
// console.groupEnd('first logs')
// console.log('بعد از گروه - انتها');
// console.log('%cApi reponse status in 200', "color: red;");

/////////////////////////////////BOM//////////////////////////////////////////////////////////////////////////////
// DOM=Document Object Model   
// BOM=Browser Object Model  
// window.document
// window.innerWidth  عرض صفحه اون قسمت سفید رنگ رو نشون میده
// window.outerHeight این میاد و عرض کل صفحه ای که قابل مشاهده هست از جمله scroll,incpect
// window.innerHeight  طول صفحه اون قسمت سفید رنگ رو نشون مید
// window.outerHeight این میاد و طول کل صفحه ای که قابل مشاهده هست 
// window.screenTop به وسیله این ما میتوانیم که بفهمیم که browserکاربر در چه مختصاتی نسبت به مانیتور از بالا قرار دارد
// window.screenLeft  به وسیله این ما میتوانیم که بفهمیم که browserکاربر در چه مختصاتی نسبت به مانیتور از چپ قرار دارد
// let divElem = $.querySelector('div')
// console.log(divElem.clientHeight)
// console.log(divElem.clientWidth)
//تفاوت تمام این گزینه ها فقط در این هست که یک مورد paddingرو هم حساب میکنه 
// یک مورد دیگر padding , margin را حساب میکند 
//و یک مورد هم فقط اون مقداری که به وسیله اون المنت اشغال شده رو حساب میکنه
///////////////////////////////////////////project scroll bar/////////////////////////////////////////////////////////////////
// let customScroll = $.querySelector('#scroll')
// window.addEventListener('scroll',function(){
//   let scrollTop = window.scrollY
//   let documentHeight = $.body.clientHeight
//   let windowHeight = window.innerHeight
//   let scrollPercent = scrollTop / (documentHeight - windowHeight)
//   let scrollPercentRound = Math.round(scrollPercent *100)
//   customScroll.style.width=scrollPercentRound + '%'
// })
//////////////////////////////////////////////history تاریخچه مرورگر کاربر///////////////////////////////////////
//ما به وسیله این موارد میتونیم بگیم که کاربر بین صفحات در زمان هایی که در حالت گوشی وجود دارد و یا این که 
//دکمه های برگشت ندارند بین صفحات جابه جا بشوند
// history.back()//این گزینه شما رو به یک صفحه قبل میبرد
// history.forward()//به وسیله این گزینه شما میتوانید به صفحاتی که بازکردید و به عقب آمده اید و حالا میخواهید دوباره به صفحات جلو برویدمثل گزینه next
// history.length//این تعداد صفحاتی که بعد از آمدن به این صفحه باز کردید را نشان میدهد
// history.go(-2)//به وسیله این شما میتوانید تعداد صفحاتت که باز کردید و حالا با دادن اعداد به آن صفحه بروید فقط برای 
// history.go(2)//رفتن به صفحات قبل باید ازمنفی استفاده کنید
// history.go(0)//به این وسیله ما می توانیم که صفحه را refresh کنیم
//////////////////////////////////////////location///////////////////////////////////////////////////////////////
//ما برای این که بفهمیم که کاربر ما در چه صفحه ای هست و این که چه چیزی نیاز دارد و یا این که چه چیزی برای او بیاویم از location استفاده میکنیم
// location.protocol //https
// location.hostname // www.digikala.com
// location.pathname //ایم موقعیت کاربر که در چه صفحه ای از سایت هست رو برمی گردونهwww.sabzlearn.ir/(lesson/4-25211/)
// location.search //برای این هست که بفهمیم برای کاربر چه اطلاعاتی را برای ما ارسال کرده است و ما اطلاعات مشابه به همان را برای کاربر بفرستیم که با علامت ؟ هست(?id=2)
// location.hash // که این هم برای ارسال # هست 
// location.href //ما میتونیم به تمام متنی که در url barما هست دسترسی داشته باشیم
// location.href = location.href //با این روش صفحه ما refresh می شود 
// location.href = 'https://www.sabzlearn.ir'//به این وسیله ما میتوانیم که کاربر را redirectکنیم به صفحه مورد نظر مثال 
// بعد از ثبت نام در سایت اون رو میفرستیم به صفحه کاربری خودش یا صفحه اصلی سایت
// location.reload() این هم روش دیگری برای refresh کردن صفحه است
// location.assign()
// location.replace()
/////////////////////////////////////////////////////project locations///////////////////////////////////////////////////
// let userInfo = document.querySelector('h1')

// let users = [
//     {id: 1, name: 'Amin', age: 21},
//     {id: 2, name: 'Amir', age: 23},
//     {id: 3, name: 'Ali', age: 24},
//     {id: 4, name: 'Hasan', age: 19},
//     {id: 5, name: 'Babak', age: 29},
//     {id: 6, name: 'Reza', age: 32},
// ]

// let locationSearch = location.search//در این جا اون قسمت urlکه برای سرج هست رو میگیریم

// // Bad Way
// // location.search.slice(1).split('=')[1]

// // Good Way
// let locationSearchParams = new URLSearchParams(locationSearch)//این جا اون قسمت سرچ رو داخل این متد سازنده میگذاریم
// let userIDParam = locationSearchParams.get('id')//در این جا هم میگیم که valueیا مفدار idرو به ما بدهد

// let mainUser = users.find(function (user) {//در این جا گفتیم که داخل آرایه بگرد و اون کاربری که آیدی یکسان داره رو برگردن
//     return user.id == userIDParam
// })

// if (mainUser) {//این جا شرط گذاشتیم که اگر کاربری با چنین idنبود به ما پیغامی نشون بده
//     userInfo.innerHTML = 'Name: ' + mainUser.name + ' | Age: ' + mainUser.age
// } else {
//     userInfo.innerHTML = 'User Is Not Defined :('
// }

// console.log(mainUser);
////////////////////////////////////////////////////Project Shopping Shoes/////////////////////////////////////////////////
 
// let productsShoes = [
//   { id: 1, title: 'Sport Shoe', price: 53, img: 'images/1.png' ,Description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atnobis, ipsum quas excepturi sed minus modi officia corrupti, veniamrem tempora, tenetur dicta nesciunt neque! Voluptate consequunturincidunt molestias? (Boots)'},
//   { id: 2, title: 'Women Shoe', price: 81, img: 'images/2.png' ,Description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atnobis, ipsum quas excepturi sed minus modi officia corrupti, veniamrem tempora, tenetur dicta nesciunt neque! Voluptate consequunturincidunt molestias? (Boots)' },
//   { id: 3, title: 'Boots', price: 34, img: 'images/3.png' ,Description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atnobis, ipsum quas excepturi sed minus modi officia corrupti, veniamrem tempora, tenetur dicta nesciunt neque! Voluptate consequunturincidunt molestias? (Boots)' },
//   { id: 4, title: 'child Shoes', price: 34, img: 'images/4.png' ,Description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atnobis, ipsum quas excepturi sed minus modi officia corrupti, veniamrem tempora, tenetur dicta nesciunt neque! Voluptate consequunturincidunt molestias? (Boots)'}
// ]
// let containerShop = $.querySelector('#container')
// productsShoes.forEach(function(product){//به وسیله این ما میتونیم که یک قالب برای هر کدوم از کفش هامون بسازیم و به انتهای اون container اصلی اضافه کنیم و اطلاعات هر کفش رو بزاریم
//   containerShop.InsertAdjacentHtml('beforeend',('<div class="product-card"><h1>' 
//   + product.title + '</h1><p>Lorem ipsum, or lipsum as it is sometimes known</p><div class="product-pic" style="background-image: url(' 
//   + product.img + ');"></div><div class="product-info"><div class="product-price">$' + product.price + 
//   '</div><a href="product.html?id=' + product.id + '" class="product-button">See More</a></div></div>'))//البته که زمانی که روی این ها کلیک میشود یک آیدی به یک صفحه دیگر ارسال میشود در (قسمت تگaدقت کنید)
// })
// //این ادامه پروژه هست اما این کد ها در صفحه مقصد یا گیرنده هست
// let backPage = $.querySelector('#back')
// let shoeTitle = $.querySelector('h1')
// let shoeDesc = $.querySelector('p')
// let shoeImage = $.querySelector('img')
// let locationParams = URLSearchParams(location.search)//در این قسمت اون idکه فرستادیم هست و اون رو میگیریم
// let mainProductId = locationParams.get('id')//به این وسیله آیدی رو میگیریم وذخیره میکنیم
// backPage.addEventListener('click',function(){
//   history.back()
// })
// let mainProductObject = productsShoes.find(function(product){//در این جا اون آیدی که ارسال شده با آیدی داخل لیست مقایسه می شوند
//   return product.id === Number(mainProductId)
// })
// if(mainProductObject){//این هم شرطی هست که اگر درست بود میاد اطلاعات رو در مکان های خودش میزاره و نشان میدهد 
//  shoeTitle.innerHTML = mainProductObject.title
//  shoeImage.innerHTML = mainProductObject.img
//  shoeDesc.innerHTML = mainProductObject.Description
// }else{//و زمانی هم که درست نبود به این صفحه انتقال داده میشود
// location.href = 'http://localhost/sabzlearn-js/247-coding-of-shoes-shop-project-2/source/'
// }
/////////////////////////////////////////online &&&offline//////////////////////////////////////////////////////////////
// let h1Elem = $.querySelector('h1')
// window.addEventListener('online',function(){//با این روش ها میتوانیم که بفهمیم کاربر onlineاست
//   h1Elem.innerHTML = 'OnLine'
//   h1Elem.className = 'online'
// })
// window.addEventListener('offline',function(){با این روش ها میتوانیم که بفهمیم کاربر offline است
//   h1Elem.innerHTML = 'Off Line'
//   h1Elem.className = 'offline'
// })
////////////////////////////////////////////////روش دسترسی به Dom Elemnt Nodes بدون انتخاب کردن//////////////////////////////////
//ما میتوانیم المنت هایی که در قسمت HTMLداریم را بدون این که در js فراخوانی کنیم استفاده کنیم اما اصولی نیست واحتمال خطا دارد
//مثال شما یک تگh1در HTML ساختید و به آن id = "title"را داده اید
//برای این که آن را در صفحه jsانتخاب کنید از کد let h1Elem = document.querySelector('#title'),روش های دیگر استفاده میکنیم 
//و بعد تغییرات را روی آن انجام میدهیم حالا بدون این که آن را صدا بزنیم هم میتوانیم تغییرات بدهیم 
//title.style.color = 'green'
//فقط با نوشتن متن آیدی زیرا زمانی که ما تگی را در صفحه  HTML میسازیم زبان ES(js)برای ما یکی از همان را در صفحه jsمیسازد 
//و ما فقط باید آن را صدا بزنیم ولی استاندارد نیست و پیشنهاد نمیشود چو ممکن است که ما آیدی را یک کلمه ای بنویسیم که قبلا در زبان 
//ES به عنوان کلمه کلیدی و اصلی ثبت شده باشدو به خطا بخورد
///////////////////////////////////////////////////ترفند های consol.log//////////////////////////////////////////////////////
// let h1Elem = document.querySelector('#menu') 
// h1Elem.addEventListener('click', function(){}) //به جای این از پایین استفاده میکنیم
// $('#menu').addEventListener('click', function(){}); //consoleجواب گو هست البته این در 
// let h2elem = document.querySelectorAll('.menu-item');//به جای این کد هم از کد زیر استفاده میکنیم
// $$('.menu-item')
//در consoleاگر خطی را در حالت آبی قرار دهیم به ما یک همچین چیزی نشان میدهد  0$ اگر استفاده کنیم همان  خط را به ما بر میگرداند
//ما برای آن که بتوانیم از خروجی نتیجه قبلی بتوانیم استفاده کنیم از $_ استفاده میکنیم
//5 + 3 = 8;
//$_ * 2 = 16;
//document.designMode = 'on' اگر این گزینه در این حالت باشد کاربر شما میتواند که تغییراتی را در ظاهر سایت بدهد البته برای خودش
//document.designMode = 'off'                                               
//document.body.contentEditable = true این هم کار کد بالایی رو انجام میدهد و برای تغییر ظاهری سایت هست
//document.body.contentEditable = false
//////////////////////////////////////////////////Project Search Box Google///////////////////////////////////////////////////////
// let suggestions = [
//   "Channel",
//   "CodingLab",
//   "CodingNepal",
//   "YouTube",
//   "YouTuber",
//   "YouTube Channel",
//   "Blogger",
//   "Bollywood",
//   "Vlogger",
//   "Vechiles",
//   "Facebook",
//   "Freelancer",
//   "Facebook Page",
//   "Designer",
//   "Developer",
//   "Web Designer",
//   "Web Developer",
//   "Login Form in HTML & CSS",
//   "How to learn HTML & CSS",
//   "How to learn JavaScript",
//   "How to become Freelancer",
//   "How to become Web Designer",
//   "How to start Gaming Channel",
//   "How to start YouTube Channel",
//   "What does HTML stands for?",
//   "What does CSS stands for?",
// ];
// let autoCompleteWrapper = $.querySelector('.search-input')
// let searchInpueElem = $.querySelector('input')
// let autoCompleteBox = $.querySelector('.autocom-box')
// searchInpueElem.addEventListener('keyup',function(){//در اینجا اگر کلمه ای تایپ بشود میاد و داخل اون آرایه ما میگرده و اون رو پیدا میکنه و در آخر هم به ما نشون میده
//   let searchValue = searchInpueElem.value
//   if(searchValue){
//     autoCompleteWrapper.classList.add('active')
//     let filteredwords = suggestions.filter(function(word){
//       return word.toLowerCase().includes(searchValue.toLowerCase());
//     })
//       suggestionsWordGenerator(filteredwords)
//   }else{
//     autoCompleteWrapper.classList.remove('active')
//   }
// })
// function suggestionsWordGenerator (wordArray){//اینجا کلماتی که داخل آرایه بودن رو داخل یک liمیذاره و به ما نشون میده
//   let listItemsArray =  wordArray.map(function(word){//و اگر هم که نبود چیزهایی که تایپ کردیم رو نشون میده
//      return '<li>' + word +'</li>'
//   })
//   let customListItem
//   if (!listItemsArray.length) {
//       customListItem = '<li>' + searchInpueElem.value + '</li>'
//   } else {
//       customListItem = listItemsArray.join('')
//   }

//   autoCompleteBox.innerHTML = customListItem
//   select()
// } 

// function select () {//این میاد بعد از این که کلمه مورد نظر رو انتخاب کردی و روش کلیک شد اون رو داخل باکس اصلی نشون میده و بقیه رو هم حذف میکند
//   let allListItems = autoCompleteBox.querySelectorAll('li')
//   allListItems.forEach(function (wordItem) {
//       wordItem.addEventListener('click', function (event) {
//           searchInpueElem.value = event.target.textContent
//           autoCompleteWrapper.classList.remove('active')
//       })
//   })

// }
//////////////////////////////////////////////تنظیمات addEventListener(once)(capture)////////////////////////////////////////////////////

// wordItem.addEventListener('click', function (){})//تا قبل از این ما فقط دو ورودی داشتیم برای این addEventListener
// //اما مورد سومی هم هست که برای کنترل بهتر addEventListener به کار میرود 
// wordItem.addEventListener('click', function (event){},{once:true});//به این وسیله فقط یک بار میشود عمل کلیک را انجام داد
// /////////////////////////////////////////////////bubbling & capturing//////////////////////////////////////////////
// //در قضیه bubbling شما زمانی که مثلا یک even رو برای یک element قرار دادید مثلا clickبه صورت bubbling هست یعنی اگر این تگ یا element
// // والدی داشته باشد برروی آن هم اعمال میشود 
// const divElem = $.querySelectorAll('div')

// divElem.forEach(function(div,index){//اگر که event.target نباشد الان click برای همه والد های اون گزینه که روش کلیک شده هم اعمال میشود
//   div.addEventListener('click', function(even){
//     even.stopPropagation();
//    console.log('Div:'+(index + 1));
//    even.target.style.backgroundColor = 'red'
//   },{capture: true})  //به وسیله این گزینه که یکی از optionهای addeventListener هست میگوییم که زمانی که روی یک گزینه یک عملیاتی که 
// })//set کردیم اتفاق افتاد بیا و از والد شروع کن و به سمت اون گزینه مورد نظر که روی آن اون عملیات انجام شده برو دقیقا برعکس bubbling
// //برروی این عمل ها معمولا bubbling به صورت default هست اگر خواستیم که از bubbling استفاده نشه از 
// // even.stopPropagation();استفاده میکنیم
// ////////////////////////////////////////////////////////////////////////تمرین برای capturing //////////////////////////////////// 
// const listItems = document.querySelectorAll('li')
// const inputElem = document.querySelector('input')
// const languagesContainer = document.querySelector('.list')

// // listItems.forEach(function (listItem) {  وقتی که از این روش استفاده بشه مورد های جدید که اضافه میشود را نمیتوان حذف کرد
// //     listItem.addEventListener('click', function (event) {
// //         console.log(event.target);
// //         event.target.remove()
// //     })
// // })

// languagesContainer.addEventListener('click', function (event) {//ما در این جا برای والد اون ها یک عملیات set میکنیم 

//     if (event.target.tagName === 'LI') {//حالا به این وسیله گزینه های جدید را هم میتوان حذف کرد
//         event.target.remove()
//     }
    
// })

// inputElem.addEventListener('keypress', function (event) {//در اینجا هم گفتیم که زمانی که enter انجام شد یک liبسازد و به لیست اضافه کند
//     if (event.keyCode === 13) {
//         let newLanguageLi = document.createElement('li')
//         newLanguageLi.innerHTML = event.target.value

//         languagesContainer.append(newLanguageLi)

//         console.log(listItems);

//         inputElem.value = ''
//     }
// })
//////////////////////////////////////////////////////////ProjectNoteApp with capturing/////////////////////////////////////////////////////
// const inputElem=$.querySelector('#input')
// const btnAddElem=$.querySelector('#button')
// const btnDeletElem=$.querySelector('#btnDelete')
// const colorsBox=$.querySelectorAll('.colorBox')
// const addNote=$.querySelector('.NoteList')
// addNote.addEventListener('click',function(event){
//   if(event.target.tagName === 'p'){//به وسیله این تیکه کد دیگر نیازی به کدهای بیشتر نیست و الان کدها ما performances بهتری دارد
//     event.target.parentElement.remove()
//   }
// })
// colorsBox.forEach(function(colorBox){
//   colorBox.addEventListener('click',function(event){
//     let mainColor = event.target.style.backgroundColor
//     inputElem.style.backgroundColor = mainColor
//   })
// })
// btnDeletElem.addEventListener('click',function(){
//   inputElem.value=''
//   inputElem.style.backgroundColor='#fff'
// })
// function newAddNote(){
//   let newDivElem=$.createElement('div')
//   newDivElem.className='اسم کلاس ها'
//   let mainBg=inputElem.style.backgroundColor
//   newDivElem.style.backgroundColor=mainBg
//   addNote.addEventListener('click',removeNote)
//   let newPElem=$.createElement('p')
//   newPElem.className='اسم کلاس ها'
//   newPElem.innerHTML=inputElem.value
//   newDivElem.append(newPElem)
//   addNote.append(newDivElem)
//   inputElem.value=''
//   inputElem.style.backgroundColor='#fff'
// }
// function removeNote(event){
//   event.target.parentElement.remove()
// }
// btnAddElem.addEventListener('click',newAddNote)
// inputElem.addEventListener('keydown',function(event){
//   if(event.keycode===13){
//     if(inputElem.value){
//       newAddNote()
//     }
//   }
// })
/////////////////////////////////////////////callback function /////////////////////////////////////////////////////////////
//تابعی که به عنوان ورودی ارسال میشه به یک تابع دیگر رو callback function می گویند
// const btn = $.querySelector('button')
// function clickHanler()
// {
//   console.log('clicked')
// }
// btn.addEventListener('click', clickHanler)//این میشود callback function
///////////////////////////////////////////sync & async//////////////////////////////////////////////////////////
//زمانی که کد های ما بصورت پشت سر هم و بدون تاخیر انجام میشود را sync میگویند 
//اما زمانی که به طور مثال داخل یک setTimeout گفتیم که بعد از 5ثانیه کاری رو انجام بده به این موارد می گویند async 
//اما در async نکته ای که هست زمانی که مرورگر میرسد به مثلا setTimeout پنج ثانیه صبر نمیکند بعد برود خط بعدی بلکه آن را اجرا میکند  میرود خط  های بعدی را اجرا 
//میکند و وقتی که جوابی از این function آمد حالا آن را اجرا میکند 
// console.log(1);
// console.log(2);
// console.log(3);
// setTimeout(function(){

//   console.log(4);
// },5000)
// console.log(5);

//در شرایطی ما میخواهیم که یک function بعد از یک اتفاقی انجام بشود برای این کار اون function رو به عنوان ورودی میفرستیم به function
// دیگر و در انجا تصمیم میگیریم که چگونه اجرا بشود
// function firstlog(){

//   console.log(1);
//   console.log(2);
//   console.log(3);
// }
// function middlelog(){

//   setTimeout(function(callback){
//     console.log(4);
//     callback()
//   },5000)
// }
//  function lastlog(){

//    console.log(5);
//  }

// firstlog()
// middlelog(lastlog)
//مثال
// let books = [
//   {id:1, title:'ferdowsi',price:120000},
//   {id:2, title:'sadi',price:340000},
//   {id:3, title:'hafez',price:900000},
//   {id:4, title:'molana',price:640000}
// ]
// function addbook(title,price,callback){

//   let newBook = [
//     id= books.length +1,
//     title = title,
//     price = price
//   ]
//   setTimeout(function(){
//     book.push(newBook)
//     callback()
//   },3000)
// }
// function logbooks(){
//   console.log(books)
// }
// addbook(kharazmi,280000,logbooks)

////////////////////////////////////////////////////////pure functions چیست؟//////////////////////////////////////////////////////
//pure function یعنی باید این سه شرط را داشته باشد
//1- باید side efect ایجاد نکند (یعنی باعث تغییر بر روی دیگر اعضا نشود)با variable های خارج از خودش کاری نداشته باشد
//2- در خروجی خودش از math.random , new data استفاده نکند که دائما در حال تغییر هستند
//3-به ازای هر ورودی یک خروجی ثابت به ما بدهد
//به هر تابعی که این سه شرط را داشته باشد میگویند تابع خالص یا (pure function)
// let testNumber =100
// console.log(testNumber)
// function pow (num1,num2){
//   return num1**num2
//   testNumber = 1000 //side Efect
//   return num1**num2
//   return Math.random() * num1 * num2 //new Data
// }
// console.log(pow(12 , 34))
// console.log(pow(12 , 34))
// console.log(pow(12 , 34))
// console.log(pow(12 , 34))
// console.log(testNumber)
////////////////////////////////////////////////////composition functions تودرتو/////////////////////////////////////////////////////////
// const todoInputElem = document.querySelector('.todo-input')
// const todolist = document.querySelector('.todolist')

// function trim (val) {
//     return val.trim()
// }

// function toLowerCase (val) {
//     return val.toLowerCase()
// }

// function insertToLi (todoVal) {
//     return '<li>' + todoVal + '</li>'
// }

// function addTodo (event) {
//     if (event.charCode === 13) {
//         todolist.insertAdjacentHTML('beforeend', insertToLi(toLowerCase(trim(todoInputElem.value))))//به نوشتن کد ها در یک خط و تو در تو بودن آنها میگویند compositions
//         todoInputElem.value = ''
//     }
// }

// todoInputElem.addEventListener('keypress', addTodo)
///////////////////////////////////////////////////////scope/////////////////////////////////////////////////////////
//یعنی محدوده دسترسی (یعنی همان public & private in C#)
//انواع scopeها را داریم  Global Scope & Local Scope & Block {}
//Global Scope تمام محدوده فایل js را شامل می شود یعنی زمانی که مه variable را در آن تعریف کنیم می توانیم در هر جا و در هر function از آن استفاده کنیم
//Local Scope یعنی محدوده یک function شما اگر که یک variable را در یک function تعریف کنی فقط در همان function هم می توانی استفاده کنی
//Block { } هم شامل if & for & while & swich می شود 

// let number = 34 // Global 

// function showNumber (){
//     let number = 10 //Local 
//     console.log(number)
// }

// console.log(number)

// if(Block){

// }
// for(Block)
////////////////////////////////////////////////////Higher Order function یا توابع بالا مرتبه ////////////////////////////////////////////
// function addNewBook (callBack){ //به function هایی که داخل آن ها یک function دیگر صدا زده می شود 
//     //codes
// }
// let numbers = [1,2,3,4,5,6,7,8]
//  numbers.map(function(){

//  })
//  function hofexp (){
//     return function (){
//         console.log('I am Inner function')
//     }
//  }
//  let hofInner = hofexp()
//  hofInner()
//////////////////////////////////////////////////Use Strict یا حالت سخت گیرانه///////////////////////////////////////////////////
//"Use Strict" ما برای این که خطاهایی که در ابتدای ساخت jsبوده را نکنیم باید این کلمه را در ابتدای شروع کد های خودمان بگذاریم تا 
//خطا ها را به ما نشان بدهد 
// num = 10
// NaN = 12
// function show(a,a){
//     //codes
// }
// let eval = 30
// undefined = 40
// let userName = 'amir'
// delete userName
//برای این که از use Strict در یک Local Scope (function) استفاده کنیم و حالت سختگیرانه در GlobalScope
 //عمل نکند در خط اول کلمه "Use Strict" را مینویسیم
//  function show (){
//     "use strict"
//     console.log('I am hosain')
//  }
//  show ()
////////////////////////////////////////////////Arrow function یا توابع یک خطی ////////////////////////////////////////////////
// function sum (num1 , num2){
//  let AddNumber = num1 + num2;
//  return AddNumber
// }
// console.log(sum (10,20));

// const sum = (num1,num2) => {//َArrow function بالا 
// let AddNumber = num1 + num2;
//   return AddNumber
// }
// console.log(sum (10,20))
// const pow = (num1, num2) => {
//     return  num1 ** num2;
// }

// const pow = (num1, num2) => num1 ** num2;//َArrow function بالا 


//   const logged = (val) => console.log(val);
//   const logged = val => console.log(val);//َArrow function بالا 

// const sum = (id,name,age) => {
//    return { id:id, name: name, age:age}
//  } 

//  const sum = (id,name,age) => ({ id:id, name: name, age:age})//َArrow function بالا 
 
// let numbers = [11,25,32,40,53,65,71,43,98]
// numbers.forEach(function(number){
//     console.log(number);
// })

// numbers.forEach(number => console.log(number))//Arrow function بالا 
//انواع Arrow Function
// let mapDatas = numbers.map(number => number*2)

// const btn = $.querySelector('button')

// btn.addEventListener('click', (event) => console.log(event))

/////////////////////////////////////////////////////Spread Syntax (...)/////////////////////////////////////////////////////////////////
// Spread Syntax

// let numbers = [1, 3, 2, 5, 4, 34]

// console.log(numbers[0], numbers[1], numbers[2], numbers[3]);

// numbers.forEach(number => console.log(number))

// let copyNumbers = numbers

// copyNumbers.push(90)

// console.log('number:', numbers);
// console.log('Copy number:', copyNumbers);

// console.log(...numbers)

// let copyNumbers = [...numbers]

// copyNumbers.push(90)

// console.log('number:', numbers);
// console.log('Copy number:', copyNumbers);

// let nums1 = [1, 2, 3, 4]
// let nums2 = [5, 6, 7, 8]

// let allNumbers = [...nums1, 100, ...nums2]

// console.log(allNumbers);
let nums1 = [1, 2, 3, 4]
function sum (a,b,c){
    console.log('a:' + a);
    console.log('b:' + b);
    console.log('c:' + c);
    return a + b + c;
}
console.log(sum(1,4,7));
console.log(sum(...nums1));
let user = {id:1,name:'ali',age  :20};
let newUser = {...user}
newUser.age = 30
console.log(user);
console.log(newUser);































// let userData=[
//     {userName:'ali',userPassword:'123456789'},
//     {userName:'hosain',userPassword:'53476438'},
//     {userName:'reza',userPassword:'45376798368'},
//     {userName:'javad',userPassword:'287476898hc'},
//     {userName:'sajad',userPassword:'573878767687'},
// ]
// let userName=$.querySelector('.User')
// let userPassword=$.querySelector('.Password')
// const sendBtn=$.querySelector('.BTN')
// sendBtn.addEventListener('click',send)
// function send(){
//     let userNamevalue=userName.value
//     let userPasswordvalue=userPassword.value
//     userData.forEach(function(user){
        
//         if(userNamevalue===user.userName && userPasswordvalue===user.userPassword){
//            alert('خوش آمدید')
//         }else{
//         alert('شما ثبت نام نکردید')
//         }
//     })

    
// }




























































