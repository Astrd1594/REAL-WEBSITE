function save(){
    localStorage.setItem("text", document.getElementById("textinput").value);
}
function text(){
    document.getElementById("textinput").innerHTML = localStorage.getItem("text");
}