const calAverage=(...numbers)=>{
    let sum=0;
    let average=0;
    numbers.forEach((number)=>{
        sum+=number;
    })
    
    average=sum/numbers.length;
    console.log(sum,numbers.length,average);
    return average;
}
document.getElementById("btnKhoi1").addEventListener("click",()=>{
    let toan1=document.getElementById("inpToan").value*1;
    let ly1=document.getElementById("inpLy").value*1;
    let hoa1=document.getElementById("inpHoa").value*1;
    let result=calAverage(toan1,ly1,hoa1);
    document.getElementById("tbKhoi1").innerHTML=result;
})

document.getElementById("btnKhoi2").addEventListener("click",()=>{
    let van=document.getElementById("inpVan").value*1;
    let su=document.getElementById("inpSu").value*1;
    let dia=document.getElementById("inpDia").value*1;
    let tienganh=document.getElementById("inpEnglish").value*1;
    let result=calAverage(van,su,dia,tienganh);
    document.getElementById("tbKhoi2").innerHTML=result;
})