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


const option = document.querySelector('#country');
data().then(data => {
    
    cases.innerHTML = data.total_values.confirmed;
    death.innerHTML = data.total_values.deaths;
    recovered.innerHTML = data.total_values.recovered;
const dada = JSON.stringify(data.state_wise);
const dada1 = Object.values(data.state_wise)

dada1.forEach(element => {
  

    html = `<div class="box11">
    <p  class="state234"  id="country11">${element.state}</p>
    <p class="state235" id="infections1">${element.confirmed}<br>Infections</p>
   <p class="state236"  id="deaths1">${element.deaths}<br>Deaths</p>
   <p class="state237" id="recoveries1">${element.recovered}<br>Recoveries</p> 
<hr style="background-color: red;" class="hr">
 </div>`
 option.innerHTML +=html;
});
})




    const dataWorld = async() => {
        const response = await fetch('https://corona.lmao.ninja/all');
        const data = await response.json();
        return data;
    }
    dataWorld().then(data=> {
 const tick = () => {
        const before = new Date(data.updated);
        const now = new Date;
        const diff = now.getTime() - before.getTime();
        const  mins = Math.round(diff/1000/60);
        console.log(mins);
        document.querySelector('#updated').innerHTML = mins;
        console.log(mins);
    };
    tick();
    setInterval(tick , 60000);      
      
    })
    .catch(err => console.log(err) );
//search    
    const search = document.querySelector('.search input');
    search.addEventListener('keyup' , () => {
        const term = search.value.trim().toLowerCase();
        filterto(term);
        console.log(option);
    
    })
    
    
    const filterto = (term) => {
        const array = Array.from(option.children)
    array.filter((text) => !text.textContent.toLowerCase().includes(term))
    array.forEach((text) => text.classList.add('filtered'));
    Array.from(option.children)
    .filter((text) => text.textContent.toLowerCase().includes(term))
    .forEach((text) => text.classList.remove('filtered'));
    
    }
    
    
