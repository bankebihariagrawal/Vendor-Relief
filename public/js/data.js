const state = document.querySelector('#checkState')
const form = document.querySelector('form');
let cases = document.querySelector('#cases');
let death = document.querySelector('#deathes');
let recovered = document.querySelector('#recovered');

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

    })
    .catch(err => console.log(err) );
data().then(data=>{
    recovered.innerHTML = data.total_values.active;
})
    

const datastate = document.querySelector('#dataState');
const state1 = document.querySelector('#sts1');
const city = document.querySelector('#state');
const nameState = document.querySelector('#nameState');
const casesState = document.querySelector('#casesState');
const nameStateDeath = document.querySelector('#nameStateDeath');
const casedeathes = document.querySelector('#casedeathes');
const notice = document.querySelector('.notice');
// const nameCity = document.querySelector('#nameCity');
// const caseCity = document.querySelector('#caseCity');
state.addEventListener('click' , (e) =>{
    e.preventDefault();
    datastate.classList.remove('d-none');
data().then(data=> {
    const value1 = state1.value; 
    nameState.innerHTML = `Total Cases <br> (${state1.value})`;
    nameStateDeath.innerHTML = `Total Deaths <br> (${state1.value})`;
    if(state1.value == "Andaman & Nicobar")
    {
        casesState.innerHTML = data.state_wise["Andaman and Nicobar Islands"].active;
        casedeathes.innerHTML = data.state_wise["Andaman and Nicobar Islands"].deaths;   
    }
    else if(state1.value == "Jammu & Kashmir"){
        casesState.innerHTML = data.state_wise["Jammu and Kashmir"].active;
        casedeathes.innerHTML = data.state_wise["Jammu and Kashmir"].deaths; 
    }
    else{
    casesState.innerHTML = data.state_wise[`${state1.value}`].active;
    casedeathes.innerHTML = data.state_wise[`${state1.value}`].deaths;
    }       
    notice.innerHTML ="Last Update on "  + data.total_values.lastupdatedtime
    
})
.catch(err => console.log(err) )
});


