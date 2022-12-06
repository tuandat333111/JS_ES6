const calAverage=(...numbers)=>{
    let total=numbers.reduce((total,number)=>total+=number,0);
    let n=numbers.length;
    let average=total/n;
    return average;
}
const getEle=(id)=>document.getElementById(id);
getEle("btnKhoi1").addEventListener("click",()=>{
    let toan=getEle("inpToan").value*1;
    let ly=getEle("inpLy").value*1;
    let hoa=getEle("inpHoa").value*1;
    let result=calAverage(toan,ly,hoa);
    getEle("tbKhoi1").innerHTML=result;
})

getEle("btnKhoi2").addEventListener("click",()=>{
    let van=getEle("inpVan").value*1;
    let su=getEle("inpSu").value*1;
    let dia=getEle("inpDia").value*1;
    let tienganh=getEle("inpEnglish").value*1;
    let result=calAverage(van,su,dia,tienganh);
    getEle("tbKhoi2").innerHTML=result;
})