const colorList=["pallet","viridian","pewter","cerulean","vermillion","lavender",
"celadon","saffron","fuschia","cinnabar"];

const renderHTML=(data)=>{
    let content="";
    data.forEach((color,index)=>{
        console.log(index);
        content+= 0 == index?`<button class="color-button ${color} active" onclick="changeColor('${color}','${index}')"></button>`:
        `<button class="color-button ${color}" onclick="changeColor('${color}','${index}')"></button>`;
    });
    document.getElementById("colorContainer").innerHTML=content;
    
    
}
renderHTML(colorList);
const changeColor=(color,index)=>{
    document.getElementById("house").classList="house";
    document.getElementById("house").classList.add(`${color}`);   

    let current=document.getElementsByClassName("active");
    current[0].className=current[0].className.replace("active","");       
    document.getElementsByClassName("color-button")[index].classList.add("active");
    
}
window.changeColor=changeColor;


