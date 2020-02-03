/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//alert("aa");
console.log("helo client");
console.log(document, window);


//A promise
function myPromise() {
    return new Promise((resolve, reject) => {
        const randomnum = math.random();
          if (randomnum > .5){
              resolve("sucess");
          } else {
              reject("failure);");
          }  
        
        
    })};
myPromise()
    .then (res => {
        console.log(res)
        }
    )    
    .catch (err => {
        console.log(err)
        }
    )
    .finally (err => {
        console.log(err)
        }
    )   
//A promise

//asynchronous
/*
async function delayedAction() {
    var res;
    try {
      res = await myPromise()      
    } catch(err) {
        res = err;
    }
}
*/

//