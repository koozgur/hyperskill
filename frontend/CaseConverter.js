//event functionalities

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

let upperButton = document.getElementById("upper-case");
upperButton.addEventListener("click",function(){
    let incomingText = document.querySelector("textarea").value;
    document.querySelector('textarea').value = incomingText.toUpperCase();
});

let lowerButton = document.getElementById("lower-case");
lowerButton.addEventListener("click",function(){
    let incomingText = document.querySelector("textarea").value;
    document.querySelector('textarea').value = incomingText.toLowerCase();
});

let properButton = document.getElementById("proper-case");
properButton.addEventListener("click",function(){
    let incomingText = document.querySelector("textarea").value.split(" ");
    for(let a = 0; a < incomingText.length; a ++){
        incomingText[a] = incomingText[a].charAt(0).toUpperCase()+incomingText[a].substring(1).toLowerCase();
    }
    document.querySelector('textarea').value = incomingText.join(" ");
});

let sentenceButton = document.getElementById("sentence-case");
sentenceButton.addEventListener("click",function(){
    let incomingText = document.querySelector("textarea").value.split(". ");
    for(let a = 0; a < incomingText.length; a++){
          incomingText[a] = incomingText[a].charAt(0).toUpperCase()+incomingText[a].substring(1).toLowerCase();
    }
    document.querySelector('textarea').value = incomingText.join(". ");
});

let saveButton = document.getElementById("save-text-file");
saveButton.addEventListener("click",function(){
    let incomingText = document.querySelector("textarea").value;
    download("text.txt",incomingText);
});
