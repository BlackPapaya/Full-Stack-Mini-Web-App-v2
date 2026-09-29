
//LOGIN LOGIC

document.getElementById("loginBtn").addEventListener("click", async function() {

    const userVal = document.getElementById("usernameInput").value;
    const passVal = document.getElementById("passwordInput").value;

    try {
        const response = await fetch("http://localhost:8080/api/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username: userVal, password: passVal})
        });

        if (response.ok) {

            document.getElementById("loginSection").style.display = "none";
            document.getElementById("editorSection").style.display = "block";
        } else {
            document.getElementById("errorMsg").innerText = "wrong username or password";
        }
    } catch (error) {
        console.error("Connection Error", error);
        document.getElementById("errorMsg").innerText = "Server unreachable";
    }


});





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