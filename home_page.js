function Login_In(){
    User = document.getElementById("input").value;
    localStorage.setItem("User_name",User);
    window.location = "kwitter_page.html";
}