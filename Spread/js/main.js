const getEle=(classname)=>document.getElementsByClassName(classname);
let string=getEle("heading")[0].textContent;
let arrString=[...string];
const renderHTML=(data)=>{
    let content="";
    data.forEach((word) => {
        content+=`<span>${word}</span>`;
    });
    
    getEle("heading")[0].innerHTML=content;
    
}
renderHTML(arrString);
