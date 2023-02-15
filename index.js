const axios = require('axios');
const nf = require ('node-fetch')


const randomNumber = Math.floor(Math.random() * 2023)
const year = process.argv[2] || randomNumber.toString() 


/* axios.get( `http://numbersapi.com/${year}/year?json` )
    .then( ( res ) => {
        console.log( res.data.text )
    })
    .catch( ( err ) => {
        console.log( err )
    })



let getData = nf(`http://numbersapi.com/${year}/year?json`)
    .then( res => {
        return res.json()
    } )
    .then( data => {
        console.log("----------\n", data.text , "\n------------")
    })
console.log(getData) */

const argv = process.argv[2]
let type = ''

if( argv.indexOf( "--year" ) === 0 ) {
    console.log( "year" );
    type = "year"
} else if ( argv.indexOf( "--math" ) === 0 ) {
    type = "math"
    console.log("math")
} else if ( argv.indexOf( "--trivia" ) === 0 ) {
    type = "trivia"
    console.log("jest trivia")
}


const equalSign = argv.search( '=' )
const number = argv.slice( equalSign + 1) || randomNumber;
console.log( number )
if( number === "" || isNaN( Number( number ) ) ) {
    throw new Error( "To nie jest liczba  " )
    
} else {
    axios.get( `http://numbersapi.com/${number}/${type}?json` )
    .then( ( res ) => {
        if(res.status == 200 ){
            console.log( res.data.text )
        }
        
    })
    .catch( ( err ) => {
        console.log( err )
    })
}


