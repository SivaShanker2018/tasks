const createButton =() =>{
    const btn = document.createElement("BUTTON");
    btn.innerHTML = "Click the button";
    btn.name = Math.random().toString(36).substring(7);
    btn.classList.add("dynamic-button");
    document.body.appendChild(btn);
    btn.addEventListener('click', (e)=>{
        console.log("Name - '" +e.target.name+"'",", Index- '"+ Array.prototype.indexOf.call(document.querySelectorAll(".dynamic-button"), btn)+"'");
    });
}
for (let i=0; i < 5; i++) {
createButton();
}