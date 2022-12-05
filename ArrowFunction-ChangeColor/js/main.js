const colorList=["pallet","viridian","pewter","cerulean","vermillion","lavender",
"celadon","saffron","fuschia","cinnabar"];
console.log(colorList);
const renderHTML=(data)=>{
    let content=""
    data.forEach((color)=>{
        content+=`<button class="color-button ${color}" onclick="changeColor('${color}')"></button>`
    });
    document.getElementById("colorContainer").innerHTML=content;
}
renderHTML(colorList);

const changeColor=(color)=>{
    document.getElementById("house").classList="house";
    document.getElementById("house").classList.add(`${color}`);
}
window.changeColor=changeColor;

