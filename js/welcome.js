let logoutBtn = document.getElementById("logoutBtn");
let barIcon = document.getElementById("barIcon");
let container = document.getElementById("container")







barIcon.addEventListener("click", function () {

    if (logoutBtn.style.display == "none" ) {
        container.style.cssText = "height:80px ;position: relative; align-items: baseline ";
        logoutBtn.style.cssText = "position: absolute; bottom: 0px; width:100%; right:5px ; display:inline-block ";
    }
    else  {
        container.style.cssText = "height:auto ; align-items: center ;position: relative";
        logoutBtn.style.cssText = "display:none; position: absolute; width:auto; top: 0px; right:0 ";
        

    }
})
logoutBtn.addEventListener("click", function () {
    localStorage.removeItem("currentUser");
    window.location.href = "signin.html"
})
if (localStorage.getItem("currentUser") != null) {
    document.getElementById("userName").innerHTML = "Welcome " + localStorage.getItem("currentUser")
}


