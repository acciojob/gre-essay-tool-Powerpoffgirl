//your code here
let evaluatedText = document.getElementById('evaluatedText');
let wordCount = document.getElementById('wordCount');
let button = document.getElementById('button');

function countWords(){
    console.log(evaluatedText.value);
    const arr = evaluatedText.value.split(" ");
    console.log(arr);
    console.log(arr.length);
    wordCount.innerText = arr.length;
}


