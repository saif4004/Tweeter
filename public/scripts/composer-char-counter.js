
$(document).ready(function() {

  let counter = document.querySelector("output");
  let textArea = document.querySelector("#tweet-text");
  let textCounter = counter.innerText;
  
  textArea.addEventListener("input", event => {
    let textLength = textArea.value.length;
    let currentTextLength = textCounter - textLength;
    if (currentTextLength < 0) {
      counter.style.color = "#FF0000"; 
    } else 
    {
      counter.style.color = "#808080";
    }

    if(event.inputType === "insertText" || event.inputType === "insertFromPaste") {
      counter.innerText = currentTextLength;
    }
    if (event.inputType === "deleteContentBackward" || event.inputType === "deleteContentForward") {
      counter.innerText = currentTextLength;
    }
  });
});