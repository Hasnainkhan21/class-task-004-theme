function changeTheme() {
   var currentBgColor = document.body.style.backgroundColor;
   var x = document.getElementById("btn");
    if (currentBgColor === "black") {
        document.body.style.backgroundColor = "white";
        x.innerText = "Dark";
        x.style.color = "white"
        x.style.backgroundColor = "black"
    } else {
        document.body.style.backgroundColor = "black";
         x.innerText = "Light"
          x.style.color = "black"
          x.style.backgroundColor = "white"
}
}