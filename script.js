


// let URL="https://saurav.tech/NewsAPI/top-headlines/category/health/in.json";
let URL=`https://gnews.io/api/v4/top-headlines?lang=en&country=in&category=general&max=10&apikey=${validKey.NewsKey}`;

// let weatherUrl="https://api.openweathermap.org/data/2.5/weather?q=lucknow&appid=f00c38e0279b7bc85480c3fe775d518c"

let weatherUrl=`https://api.weatherapi.com/v1/current.json?key=${validKey.WeatherKey}&q=lucknow,india`

// weather
let temp=document.querySelector("#weatherMsg");
let type=document.querySelector("#weather-type");
let city=document.querySelector("#city");

let weather=async()=>
{  console.log("getting weather ");
    
    let res=await fetch(weatherUrl);
    let data=await res.json();
    console.log("got");
    temp.innerHTML=`${data.location.name}, ${data.location.country}`;
    type.innerHTML=`${data.current.condition.text}`;
    setInterval(()=>
    {
    setTimeout(() => {
        // temp.innerHTML=`${data.name}`;
        temp.innerHTML=`${data.location.name}, ${data.location.country}`;
        // city.innerHTML=`${data.name}`;
    }, 1000);
    setTimeout(() => {
        // temp.innerText=`Temperature: ${data.main.temp} °C`;
        temp.innerText=`Temperature: ${data.current.temp_c} °C`;
        

        // type.innerHTML=`${data.weather[0].main}`;
        type.innerHTML=`${data.current.condition.text}`;
        
    }, 3000);
    setTimeout(() => {
        temp.innerHTML=`Feeling like: ${data.current.feelslike_c} °C`;
        // temp.innerHTML=`Feeling like: ${data.main.feels_like } °C`;

        // feels.innerHTML=`Feeling like: ${data.main.feels_like }°C`;
    }, 5000);
    setTimeout(() => {
        temp.innerHTML=`Humidity: ${data.current.humidity}%`;
     
    }, 7000);
    setTimeout(() => {
        temp.innerHTML=`Wind: ${data.current.wind_kph} km/hrs`;
       
    }, 9000);
    
    
},9000)
    

}
weather();

let cardImg=document.querySelector(".card-img");
const row=document.querySelector(".row");


const newCard= (i)=>
    {
        let div=document.createElement("div");
        div.className=`col-lg-4 col-md-6 col-sm-12 mainContainer container${i}`;
       let card=document.createElement("div");
       card.className="card del";
        let image=document.createElement("img");
        image.className=`card-img card-img-top del img${i} `;
        image.src="https://th.bing.com/th/id/R.177c2aa34a39821464a08f108e577d3f?rik=E6on3EJVDGOmSg&riu=http%3a%2f%2fi.huffpost.com%2fgen%2f4707746%2fimages%2fo-BREAKING-NEWS-facebook.jpg&ehk=aOZD%2b3ct2JGBC7gowQvtiafkD2%2fQugxJAKZDR7bzdJw%3d&risl=&pid=ImgRaw&r=0";
        image.alt="Image";
        let cardBody=document.createElement("div");
        cardBody.className="card-body del";
        let cardTitle=document.createElement("h5");
        cardTitle.className=`card-title del title${i}`;
        let cardText=document.createElement("p");
        cardText.className=`card-text del text${i}`;
        let author=document.createElement("h6");
        author.className=`card-title del author${i}`;
        let linkPage=document.createElement("a");
        linkPage.className=`btn btn-dark del link${i}`;
        linkPage.innerText="Read Full News";
        
    
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(author);
        cardBody.appendChild(linkPage);
        card.appendChild(image);
        card.appendChild(cardBody);
        div.appendChild(card);
    
        row.appendChild(div);
    }
    
    
// Now inseting API and inputing information
let loading=document.querySelector(".loading");


let n=0;

let fetching=async()=>
{
    loading.style.display="block";
    row.style.display="none";
    console.log("getting data");
    let res=await fetch(URL);
   
    let data=await res.json();
    console.log(data.articles);
    console.log(URL);
    row.style.display="flex";
    loading.style.display="none";
    return data;
}

let inseting=async(a,n)=>
{
   
   try{
    let data=await fetching();

    for(let i=n;i<a;i++)
    {
        
        let image=document.querySelector(`.img${i}`);
        image.src=data.articles[i].image;

        let title=document.querySelector(`.title${i}`);
        // title.innerHTML=data.articles[i].title.substring(0,65)+"...";
        title.innerHTML=data.articles[i].title;

        let text=document.querySelector(`.text${i}`);
        // text.innerHTML=data.articles[i].description.substring(0,250)+".....";
        text.innerHTML=data.articles[i].description;

         let author=document.querySelector(`.author${i}`);
        author.innerHTML=`From : ${data.articles[i].source.name}`;

        let btnLink=document.querySelector(`.link${i}`);
        btnLink.href=data.articles[i].url;
       
    }
   }
   catch(err)
   {
    console.log("hello err");
    console.log(err);
    alert("Option Choosen by you is currently not available at this moment");
    LangMsg.innerHTML="English";
    Language="en";
   }
}
for(let i=n;i<10;i++)
{
    newCard(i);
}
inseting(10,0);
n=10;


let All=document.querySelector(".all");
let Sports=document.querySelector(".Sports");
let tech=document.querySelector(".technology");
let ent=document.querySelector(".entertainment");
let lifeStyle=document.querySelector(".general");

let science=document.querySelector(".science");
let health=document.querySelector(".health");
let World=document.querySelector(".world");
let nation=document.querySelector(".nation");
let business=document.querySelector(".business");

// changing categories 
All.addEventListener("click",()=>
    {
        URL=`https://gnews.io/api/v4/top-headlines?lang=${Language}&country=${countryCode}&category=general&max=10&apikey=2889b25820388cdf89e5f1833c348891`;
       
            inseting(n,0);
    
    });
    Sports.addEventListener("click",()=>
    {
       URL=`https://gnews.io/api/v4/top-headlines?lang=${Language}&country=${countryCode}&category=sports&max=10&apikey=2889b25820388cdf89e5f1833c348891`;
       
            inseting(n,0);
    });
    
    tech.addEventListener("click",()=>
    {
       URL=`https://gnews.io/api/v4/top-headlines?lang=${Language}&country=${countryCode}&category=technology&max=10&apikey=2889b25820388cdf89e5f1833c348891`;
        
            inseting(n,0);
    });
    ent.addEventListener("click",()=>
    {
        URL=`https://gnews.io/api/v4/top-headlines?lang=${Language}&country=${countryCode}&category=entertainment&max=10&apikey=2889b25820388cdf89e5f1833c348891`;
       
            inseting(n,0);
    });
   

    science.addEventListener("click",()=>
        {
           URL=`https://gnews.io/api/v4/top-headlines?lang=${Language}&country=${countryCode}&category=science&max=10&apikey=2889b25820388cdf89e5f1833c348891`;
            
                inseting(n,0);
        });

    health.addEventListener("click",()=>
        {
           URL=`https://gnews.io/api/v4/top-headlines?lang=${Language}&country=${countryCode}&category=health&max=10&apikey=2889b25820388cdf89e5f1833c348891`;
            
                inseting(n,0);
        });

    World.addEventListener("click",()=>
        {
           URL=`https://gnews.io/api/v4/top-headlines?lang=${Language}&country=${countryCode}&category=world&max=10&apikey=2889b25820388cdf89e5f1833c348891`;
            
                inseting(n,0);
        });

    nation.addEventListener("click",()=>
        {
           URL=`https://gnews.io/api/v4/top-headlines?lang=${Language}&country=${countryCode}&category=nation&max=10&apikey=2889b25820388cdf89e5f1833c348891`;
            
                inseting(n,0);
        });

    business.addEventListener("click",()=>
        {
           URL=`https://gnews.io/api/v4/top-headlines?lang=${Language}&country=${countryCode}&category=business&max=10&apikey=2889b25820388cdf89e5f1833c348891`;
            
                inseting(n,0);
        });
    

//  Night-mode btn
let nightMode=document.querySelector(".night-mode");
let navChange=document.querySelector("#change");
let i=1;
nightMode.addEventListener("click",()=>
{
   
if(i%2!==0)
{
    document.body.style.backgroundColor = "#001d32"; 
    i++;
}
else
if(i%2===0)
{
    document.body.style.backgroundColor = "white";
    i++;
}
});


// Next btn
// let btnNext=document.querySelector(".Next");

// btnNext.addEventListener("click",async()=>
// {
//     let a=n+10;
//     let data=await fetching();
//     for(let i=n;i<a;i++)
//     {
//         if(i<data.totalResults)  //use data.totalArticles
//         {
//             newCard(i);
            
//         }
//         else
//         {
//             btnNext.style.display="none";
//             break;
//         }
//     }
//     inseting(a,n);
//     n=a;
// })






// country

let list =document.querySelector(".country-menu");
for(let i in CountryCode)
{
    let li=document.createElement("li");
    let btn=document.createElement("button");
    btn.className="dropdown-item";
    btn.id="contID";
    btn.innerHTML=i;
    li.appendChild(btn);
    list.appendChild(li);
   
}

let sel=document.querySelectorAll("#contID");
let contMsg=document.querySelector(".country-msg");
var countryCode="in";

for(let j of sel)
{
    j.addEventListener("click",(event)=>
    {
        let country=event.target.innerHTML;
        console.log(country );
        console.log(CountryCode[event.target.innerHTML]);
        contMsg.innerHTML=`${country}`;
        countryCode=CountryCode[event.target.innerHTML];
        
        LangMsg.innerHTML="English";
        URL=URL.substring(0,43)+"en"+URL.substring(45,54)+countryCode+URL.substring(56);
        inseting(n,0);
    })
}


// Language

let langDrop =document.querySelector(".language-menu");
for(let i in LanguageList)
{
    let li=document.createElement("li");
    let btn=document.createElement("button");
    btn.className="dropdown-item";
    btn.id="LangID";
    btn.innerHTML=i;
    li.appendChild(btn);
    langDrop.appendChild(li);
    
}

let LangList=document.querySelectorAll("#LangID");
let LangMsg=document.querySelector(".Language-msg");
var Language="en";

for(let j of LangList)
{
    j.addEventListener("click",(event)=>
    {
        let Lang=event.target.innerHTML;
        console.log(Lang);
        
        console.log(LanguageList[event.target.innerHTML]);
        LangMsg.innerHTML=`${Lang}`;
        Language=LanguageList[event.target.innerHTML];
        URL=URL.substring(0,43)+Language+URL.substring(45);
        inseting(n,0);
    })
}




