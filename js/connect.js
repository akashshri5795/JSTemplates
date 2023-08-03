var points="";
var x;
var y;
document.querySelectorAll("circle")?.forEach(el => {
el.addEventListener("click", function (ev) {
    const circle = ev.target;
    x= circle.attributes[0].value;
    y=circle.attributes[1].value;
    console.log(x,y);
    points+=x+","+y+" ";
    console.log(points);
    // alert("some description (using JS)");
    let m=document.getElementById("pol").attributes;
    m[0].nodeValue=points;
    console.log(m[0].nodeValue);
    if(points.length==126)
    {
        document.getElementById("pol").style.fill="green";   
    }
})    
})




