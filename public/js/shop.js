
const State = document.querySelector('#sts');
const City = document.querySelector('#state1');
const get = document.querySelector('.get');
const form = document.querySelector('.mydataform');


class Dropdown {
    constructor(container){
      this.container = container;
      this.trigger = container.querySelector('.trigger');
      this.content = container.querySelector('.content');
    }
    init(){
      this.trigger.addEventListener('click', () => {
          console.log('hello1')
        this.trigger.classList.toggle('active');
        this.content.classList.toggle('active');
      });
    }
  }

 
 function myfunction(){
    console.log("hello");     
    const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
   const instance = new Dropdown(dropdown);
   instance.init();
  });
 }
const button1 = document.querySelector('.get');
const refresh = document.querySelector('.refresh');
refresh.addEventListener('click' , ()=> {
  location.reload();
})

button1.addEventListener('click', e => {
  e.preventDefault();
  db.collection('Vendor').get().then((snapshot) => {
    // alert("Data retrieve");
    snapshot.forEach(doc=>{
      
      let city = City.value.trim();
      // if(doc.data().State == State.value){
         if((doc.data().State == State.value.trim())  && (doc.data().City.trim() == city)){
          console.log(State.value);
          console.log(City.value);
          
          console.log(doc.data().State);
          console.log(doc.data().City); 
          
          html =  `<p>Double tap on Data for More Information</p>
  <div class="dropdown" style="margin-top: 10px;">
   <div class="trigger" onclick="myfunction()"><h4>${doc.data()["Shop Name"]}</h4>
   <div class="row">
     <div class="col-lg-4">
       <h5>Category:</h5><h6>${doc.data()["Shop Category"]}</h6>
   </div>
   <div class="col-lg-4">
   <h5>Opening time:</h5><h6>${doc.data()["Opening Time"]}</h6>
</div>
<div class="col-lg-4">
   <h5>Closing time:</h5><h6>${doc.data()["Closing Time"]}</h6>
</div>
   </div>
</div>
     <div class="content">
     <div class="row">
   <div class="col-lg-3">
     <h5 > Contact Number:</h5><h6>${doc.data()["Phone Number"]}</h6>
     </div>
     <div class="col-lg-3">
   <h5>State:</h5><h6>${doc.data()["State"]}</h6>
   </div>
   <div class="col-lg-3">
   <h5>City:</h5><h6>${doc.data().City}</h6>
   </div>
   <div class="col-lg-3">
   <h5>Address:</h5><h6>${doc.data().Address}</h6> 
   </div> 
</div>
   </div>
   </div><hr>`;
   document.querySelector('.shp').innerHTML +=  html;   
    }
} 
      
    )
});
});