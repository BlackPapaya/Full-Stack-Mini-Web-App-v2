document.getElementById("downloadBtn").addEventListener("click", function() {       //Wait till User clicks on the Download Button
    const textValue = document.getElementById("text").value;           //saving the text as a constant var                           

    const blob = new Blob([textValue], {type: "text/plain;charset=utf-8"}); //create a blob to create space for a file (normal browser cant download files)

    const url = URL.createObjectURL(blob);    //generating an URL Link to point to the memory

    const a = document.createElement("a");  
    a.href = url;           
    a.download = "main-text.txt";

    //invisible download link and give it a name

    document.body.appendChild(a);   //hang the link to the invisible HTML structure
    a.click();                      //force it to click
    document.body.removeChild(a);   //after the click deletes it so no waste of space

    URL.revokeObjectURL(url);       //free the RAM space again
})