// Your code here
// const dorger = document.getElementById("dodger")
// document.addEventListener("keydown", function(e){
//     if(e.key ==="ArrowLeft"){
//         const newleft =dorger.style.left.replace("px", "");
//         const leftint =parseInt(newleft);
//         console.log(leftint)
//             if(leftint >=0){
//                 dorger.style.left = `${leftint-1}px`

//             }
//             else{
//                 alert("game over")
//             }
       

//     }else if(e.key ==="ArrowRight"){
//         const newleft =dorger.style.left.replace("px", "");
//         const leftint =parseInt(newleft);
//         if(leftint <=360){
//             dorger.style.left = `${leftint+1}px`

//         }

//     }else{
//         alert("Click the right key")
//     }
//      }
    
//  )



// const dodger = document.getElementById("dodger");
function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
   
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    

  });


  const dodger = document.getElementById("dodger");
function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
    }
   
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
    

  });
  