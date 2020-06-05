const inputAction = (fieldname)=>{
    const label = document.getElementById(fieldname);
    const inputfield = document.getElementsByClassName(fieldname)[0];
    inputfield.classList.add("outlinenone");
    
    label.classList.add("active","highlight");
    if(inputfield.value==='')
    {
        label.classList.remove("active","highlight");
        inputfield.classList.remove("outlinenone");
    }
}
