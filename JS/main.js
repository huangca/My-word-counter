function getFrequency(){
    let text=document.getElementById("input").value
    let result=wordFrequency(text);
    const showResult=document.getElementById("result");
    showResult.innerHTML=''; //clear display area every time
    if(Object.keys(result).length===0) showResult.innerHTML+="no words";
    else{
    for ( let word in result ) {
        let line="<br/>"+word+': ' + result[word]+"<br/>" //double space will look more clearly 
        showResult.innerHTML+=line;
      }
    }

  }

  function wordFrequency (text) {
    text=text.toLowerCase(); //case insensitive
    text=text.replace(/[\.,-\/#!$"?<>%\^&\*;:{}=\-_`~()]/g, ''); //remove punctuation except ' . "Jack's" should be counted separately than "Jack"
    text=text.replace(/\n/g, ' '); // "\n" should be consider as space
    let result = {}; //use key-value pair something like hashmap store result
    let words = text.split(' '); //break down the string
   
    for(let i=0;i<words.length;i++){
      if(words[i].length>=1){
        if(result[words[i]]){
          result[words[i]]++; //if already have +1
        }else{
            result[words[i]]=1; // if no inital as 1
        }
      }
    }
    
    return result;

  };