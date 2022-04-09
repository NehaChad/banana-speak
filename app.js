var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");
var serverURL="https://api.funtranslations.com/translate/minion.json"

function errorHandler(error){
    console.log("error occured",error)
    alert("something wrong with server")
}
function getTranslation(text){
    return serverURL+"?"+"text="+text
}


function clickHandler(){
    //outputDiv.innerText="translated:"+ txtInput.value;
    var inputText=txtInput.value;
    fetch(getTranslation(inputText))
    .then(response=>response.json())
    .then(json=>{var translatedText=json.contents.translated;
    outputDiv.innerText=translatedText;
    })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click",clickHandler)