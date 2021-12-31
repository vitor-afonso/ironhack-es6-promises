//jshint esversion:6


let nome = 'Kristina';

function editName(name) {

    return new Promise (function (resolve, reject) {

        console.log('Actual name - ',name);
        console.log( 'Editing name...' );

        // simulates the time this operation could take
        setTimeout(() => {
                        // the argument passed in reject will be used in catch as err
            if (!name) reject("name not found.");
                        // the argument passed in resolve will be used in then as val
            else resolve(name.length-1);  
        }, 3000); 
    });
}

editName(nome)

    //function that is called when resolve is called
    .then((val) => {
       // nome = 'VittoKm';
        console.log('Name altered to -',nome,'that has',val,'letters.');
    })
    //function that is called when reject is called
    .catch((err) => console.log('There was an error =>',err));


/***************************** PROMISE CHAINING ***************************/


    const pr5 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("A"), 2000);
      });
       
       
      pr5
        .then((value1) => {
          console.log("value1:", value1);
          return "B";
        })
        .then((value2) => {
          console.log("value2:", value2);
          return "C";
        })
        .then((value3) => {
          console.log("value3:", value3);
          return "D";
        })
        .then((value4) => {
          console.log("value4:", value4);
        });


        const p4 = Promise.all([]);
 
        console.log(p4);    