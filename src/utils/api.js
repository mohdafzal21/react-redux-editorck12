import axios from 'axios';


const key = 'trnsl.1.1.20181024T125312Z.82c6f38515521574.e638460ccfbb8ef3c0db6a293f5827913d00b571';
// let fromLang = 'en';

let toLang = 'hi';
let text = 'hello';



let url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${key}&lang=${toLang}&text=${text}`;
// url += `&lang${toLang}`;
// // url += `&source=${fromLang}`;
// url += '&text=' + encodeURI(text);


 export  function askSusi () {
  axios(url, { 
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  })
  .then(res => console.log("translated response is:",res.data.text[0]))
  
  .catch(error => {
    console.log("There was an error with the translation request: ", error);
  });
  

 }



