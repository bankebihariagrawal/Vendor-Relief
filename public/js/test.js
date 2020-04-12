const option = document.querySelector('#country');
const state = document.querySelector('#checkState')
const form = document.querySelector('form');
const datastate = document.querySelector('#dataState');
const state1 = document.querySelector('#sts1');
const city = document.querySelector('#state');
const nameState = document.querySelector('#nameState');
const casesState = document.querySelector('#casesState');
const nameStateDeath = document.querySelector('#nameStateDeath');
const casedeathes = document.querySelector('#casedeathes');
const notice = document.querySelector('.notice');
let cases = document.querySelector('#cases');
let death = document.querySelector('#deathes');
let recovered = document.querySelector('#recovered');
let recovered1 = document.querySelector('#recovered1');
const confirmed = document.querySelector('#confirmedcase')
const confirmed1 = document.querySelector('#confirmedcase1')

const data = async() => {
    const response = await fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api_india", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
            "x-rapidapi-key": "316e4ffe72msh04a5d48b9ad4790p11741ajsn61e43e583539"
        }
    });
    const data = await response.json();
    return data;
}

    const dataWorld = async() => {
        const response = await fetch('https://corona.lmao.ninja/all');
        const data = await response.json();
        return data;
    }
    dataWorld().then(data=> {
        cases.innerHTML = data.cases;
        death.innerHTML = data.deaths;
     recovered.innerHTML = data.recovered;
     recovered1.innerHTML = data.critical;
const tick = () => {
    const before =   new Date(data.updated);
    const now = new Date;
    const diff = now.getTime() - before.getTime();
    const  mins = Math.round(diff/1000/60);
    console.log(mins);
    document.querySelector('#updated').innerHTML = mins;
};
tick();
setInterval(tick , 60000);      


})
    .catch(err => console.log(err) );
data().then(data=>{
})
const country1 = document.querySelector('#country11')
const infection1 = document.querySelector('#infections1')
const deaths1 = document.querySelector('#deaths1')
const recoveries1 = document.querySelector('#recoveries1')
const critical1 = document.querySelector('#critical1')

window.onload = function() {
const data2 = async() => {
    const response = await fetch("https://covid-193.p.rapidapi.com/statistics", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
            "x-rapidapi-key": "316e4ffe72msh04a5d48b9ad4790p11741ajsn61e43e583539"
        }
    });
    const data = await response.json();
    return data
}

var array1 = [];

data2().then(data => {
console.log(data);
    data.response.forEach(element => {
        array1.push(element.country);
        html = `<div class="box11" >
        
 <p style="font-size:20px ; margin-left: 40px; margin-top: -30px;" id="country11">${element.country}</p>
 <p style="font-size:15px ; margin-left: 280px; margin-top: -50px;  color: #AC77F9;"id="infections1">${element.cases.total}<br>Infections</p>
<p style="font-size:15px ; margin-left: 450px; margin-top: -60.5px; color: #FF416C;" id="deaths1">${element.deaths.total} <br>Deaths</p>
<p style="font-size:15px ; margin-left: 650px; margin-top: -60.5px;  color: #61CE81;" id="recoveries1">${element.cases.recovered}<br>Recoveries</p> 
<p style="font-size:15px ; margin-left: 850px; margin-top: -60.5px; color: #FFC928;" id="critical1">${element.cases.critical}<br>Critical</p> 
</div><hr style="background: red;">
`


        option.innerHTML +=  html;

    });
})
};

/* <img src="./png/${element.country + ".png"}"  width="30px" height="30px" style="margin-top: 20px;"> */
        
//searcher
const search = document.querySelector('.search input');
search.addEventListener('keyup' , () => {
    const term = search.value.trim().toLowerCase();
    filterto(term);

})


const filterto = (term) => {
    const array = Array.from(option.children)
array.filter((text) => !text.textContent.toLowerCase().includes(term))
array.forEach((text) => text.classList.add('filtered'));
Array.from(option.children)
.filter((text) => text.textContent.toLowerCase().includes(term))
.forEach((text) => text.classList.remove('filtered'));

}
