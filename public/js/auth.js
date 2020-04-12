
window.onload = function () {
        render() ;
        auth1();
 
}  
    function auth1(){
    firebase.auth().onAuthStateChanged(user => {
        
        if(user) {
            // document.querySelector('#number1').innerHTML = user.phoneNumber;
            document.querySelector('#number2').innerHTML = user.phoneNumber;     
            document.querySelector('.datining').classList.remove('d-none');
            document.querySelector('.capthca').classList.add('d-none');  
                  document.querySelector('.dating').classList.add('d-none');
                  document.querySelector('#myData').classList.add('d-none');
        }
    
        else{
            document.querySelector('.datining').classList.add('d-none');
            document.querySelector('.capthca').classList.remove('d-none');  
                  document.querySelector('.dating').classList.add('d-none');
                  document.querySelector('#myData').classList.add('d-none');
}
    });
}
 function render() {
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
      recaptchaVerifier.render();
  }

  function phoneAuth() {
      //get the number   
      html = ` <div class="form-group verify1">
      <input type='text'  id='verificationCode' placeholder="Verification code..."> 
      </div>
      <div class="form-group">
    <button type='button' class="btn red darken-2 z-depth-0 verifybtn "  onclick='codeverify();'>Verify code</button>
   </div> `;
   document.querySelector('.verified').innerHTML = html; 
          
      var number= "+91" + document.getElementById('phone-number').value;
      //phone number authentication function of firebase
      //it takes two parameter first one is number,,,second one is recaptcha
      firebase.auth().signInWithPhoneNumber(number,window.recaptchaVerifier).then(function (confirmationResult) {
          //s is in lowercase
          console.log(number);
          window.confirmationResult=confirmationResult;
          coderesult=confirmationResult;
          console.log(coderesult);
          alert("Message sent");
      }).catch(function (error) {
          alert(error.message);
      });
  }
  function codeverify() {
      var code=document.getElementById('verificationCode').value;
      coderesult.confirm(code).then(function (result) {
           
           var user=result.user;
           console.log(user.phoneNumber);
            if(document.querySelector('.formuser').q1.value == "New user"){
                // html = `<a href="./signup.html">Add Your Detail Here</a>`;

                document.querySelector('.capthca').classList.add('d-none');
                //  document.querySelector('#number1').innerHTML = user.phoneNumber;
                 document.querySelector('#number2').innerHTML = user.phoneNumber;     
                 document.querySelector('.datining').classList.remove('d-none');
              
                 const now = {
                  ["Phone Number"]: user.phoneNumber,
                        State: "",
                        City:  "",
                        Address:"",  
                        ["Shop Name"]: "",
                        ["Shop Category"]:"",
                              ["Opening Time"] :"",
                        ["Closing Time"] : "",
                    
              };
            db.collection('Vendor').doc(user.phoneNumber).set(now).then(() => {
                console.log('added');
            }).catch(err => {
                console.log(err);
            });
        
          }
          else if(document.querySelector('.formuser').q1.value == "Existing user"){
            // db.collection('Vendor').get().then((snapshot) => {
                // alert("Data retrieve");
                // snapshot.forEach(doc=>{
                    // console.log(doc.data());
                    // if(doc.data()["phone Number"] == ("+91" + document.getElementById('phone-number').value)){
                        document.querySelector('.capthca').classList.add('d-none');
                        // document.querySelector('#number1').innerHTML = user.phoneNumber; 
                        document.querySelector('#number2').innerHTML = user.phoneNumber; 
                        document.querySelector('.datining').classList.remove('d-none');
                     
                    // }
                    
                // }
            // )
            // })        
           
    
        }

        alert("Successfully registered");
          console.log(user);
      }).catch(function (error) {
          alert(error.message);
      });
  }

const mydata = document.querySelector('.mydating');
const number2 = document.querySelector('#number2');
mydata.addEventListener('click' , e=> {
    e.preventDefault();
// console.log(number1);    
    document.querySelector('.datining').classList.add('d-none');
    document.querySelector('.capthca').classList.add('d-none');  
//    document.querySelector('.signing').classList.add('d-none');
          document.querySelector('.dating').classList.remove('d-none');
          document.querySelector('#myData').classList.remove('d-none');
        
    // console.log(number1.innerHTML);      
db.collection("Vendor").doc(number2.innerHTML).get().then((snapshot) => {
    // console.log(snapshot.data().State);
    
    html = `
    <h3>Phone Number</h3> <h3 class="text-muted number">${snapshot.data()["Phone Number"]}</h3><br>
     <h3>State</h3> <h3 class="text-muted state">${snapshot.data().State}</h3><br>
    <h3>City</h3> <h3 class="text-muted city">${snapshot.data().City}</h3><br>
    <h3>Shop Category</h3> <h3 class="text-muted category">${snapshot.data()["Shop Category"]}</h3><br>
    <h3>Opening Time</h3> <h3 class="text-muted opening">${snapshot.data()["Opening Time"]}</h3><br>
    <h3>Closing Time</h3> <h3 class="text-muted closing">${snapshot.data()["Closing Time"]}</h3><br>
    <h3>Shop Name</h3> <h3 class="text-muted name">${snapshot.data()["Shop Name"]}</h3><br>
    <h3>Shop Address</h3> <h3 class="text-muted address">${snapshot.data().Address}</h3><br>
    `;
document.querySelector('#myData').innerHTML = html;
console.log(document.querySelector('#myData').innerHTML);
})
});

document.querySelector('.back').addEventListener('click' , e => {
    e.preventDefault();
    document.querySelector('.datining').classList.remove('d-none');
    document.querySelector('.capthca').classList.add('d-none');  
//    document.querySelector('.signing').classList.add('d-none');
          document.querySelector('.dating').classList.add('d-none');
          document.querySelector('#myData').classList.add('d-none');
          
})

const update = document.querySelector('.update1');
update.addEventListener('click' , e=>{
    const state = document.querySelector('#sts1');
    const city = document.querySelector('#state1');
    const address = document.querySelector('#address1');
    const shopname = document.querySelector('#shop1');
    const category = document.querySelector('#category1');
    const opentime = document.querySelector('.opentime1');
    const am = document.querySelector('#am1');
    const closetime = document.querySelector('.closetime1');
    const pm = document.querySelector('#pm1');
    const number = document.querySelector('#number2')
    e.preventDefault();
    const stat = {
        State: state.value,
        City:  city.value,
        Address:address.value,  
        ["Shop Name"]: shopname.value,
        ["Shop Category"]:category.value,
        ["Phone Number"]:number.innerHTML,
        ["Opening Time"] :opentime.value+" "+am.value,
        ["Closing Time"] : closetime.value+" "+pm.value,
    };
    console.log(number.innerHTML); 
    console.log(am.value , pm.value);
db.collection('Vendor').doc(number.innerHTML).set(stat).then(()=>{
    alert("Updated");
   
}).catch(err=>{
    console.log(err);
})
});

const signout =   document.querySelector('.signout');
signout.addEventListener('click' , e=>{
    e.preventDefault();
    document.querySelector('#number2').innerHTML = "";
    firebase.auth().signOut().then(() => {
        auth1();
    })
})

