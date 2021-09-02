//Promesse: en cours /honnore/rejet


// function chargerScript(script) {
//     return new Promise((resolve, reject) => {
//
//         let element =document.createElement('script');
//         element.src=script;
//         document.body.append(element);
//         //honore : resolve
//         element.onload=()=>{
//             resolve("le script "+script+" a bien ete charge");
//         }
//         //rejet: reject
//         element.onerror=()=>{
//             reject(new Error("une erreur est intervenue"));
//         }
//
//     })
// }
//
// let promesse=chargerScript('script.js');
// promesse.then(
//     function (result) {
//         console.log(result)
//     },
//     function (err) {
//         console.log(err)
//     }
// )

//async await : sont utiliser au niveau des promise

async function direBonjour() {
    const promesse=new Promise((resolve, reject)=>{
        setTimeout(()=>resolve('Promesse tenue '),10000);
    })
    let resultat= await promesse;
    console.log(resultat)
}

direBonjour();
