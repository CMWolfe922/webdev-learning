alert("The JavaScript script loaded successfully")

function btnClicked() {
    console.log("Button Clicked by User. Activate program!")
    alert("Username submitted successfully!")
}

let btn = document.querySelector(".form1-submit");
btn.addEventListener("click", btnClicked);
