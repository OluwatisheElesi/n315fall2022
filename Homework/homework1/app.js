function openIndex(id) {
  document.querySelectorAll('.key').forEach(elt => elt.classList.remove('active'));
  document.querySelector('#'+id).classList.add('active');
}

const forms = document.querySelector(".forms"),
    pwShowHide = document.querySelectorAll(".eye-icon"),
    links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
  eyeIcon.addEventListener("click", () => {
      let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
      
      pwFields.forEach(password => {
          if(password.type === "password"){
              password.type = "text";
              eyeIcon.classList.replace("bx-hide", "bx-show");
              return;
          }
          password.type = "password";
          eyeIcon.classList.replace("bx-show", "bx-hide");
      })
      
  })
})      

links.forEach(link => {
<<<<<<< Updated upstream
    link.addEventListener("click", e => {
       e.preventDefault(); //preventing form submit
       forms.classList.toggle("show-signup");
    })
})
let synthApp ={

synth: new Tone.Synth().toDestination(),
// this is the array that your are accessing 
notes: ["C4"],
currentNote: 0,

playSound: function() {
    console.log(this);
    this.synth.triggerAttackRelease(this.notes[this.currentNote], "8n");
    this.currentNote ;
// we invoke play sound and wait and play half a second
    // setTimeout(this.playSound.bind(this), 400);
}
} 


// let openIndex = synthApp;

// let synthApp ={
//     synth: new Tone.Synth().toDestination(),
//     // this is the array that your are accessing 
//     notes: ["C4"],
//     currentNote: 0,
    
//     playSound: function() {
//         console.log(this);
//         this.synth.triggerAttackRelease(this.notes[this.currentNote], "8n");
//         this.currentNote ;
//     // we invoke play sound and wait and play half a second
//         // setTimeout(this.playSound.bind(this), 400);
    
//     } }
=======
  link.addEventListener("click", e => {
     e.preventDefault(); //preventing form submit
     forms.classList.toggle("show-signup");
  })
})
>>>>>>> Stashed changes
