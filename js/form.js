const inputAction = (fieldname)=>{
    const label = document.getElementById(fieldname);
    const inputfield = element = document.getElementsByClassName(fieldname)[0];
    inputfield.classList.add("outlinenone");
    
    label.classList.add("active","highlight");
    if(document.getElementsByClassName(fieldname)[0].value=='')
    {
        label.classList.remove("active","highlight");
        inputfield.classList.remove("outlinenone");
    }
}
const isNumberKey = (event)=>{
    const priceVal = document.getElementById("price").value;
    if(priceVal.length>10)
    return false;    
    const charCode = (event.which) ? event.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
       return false;

    return true;
}
