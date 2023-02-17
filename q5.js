let shape=prompt("Enter Shape");
shape=shape.toLowerCase();
let triangle=()=>
{
    var b=prompt("Enter Height")
    b=Number.parseFloat(b);
    var h=prompt("Enter Base")
    h=Number.parseFloat(h);
    return 0.5*b*h
}
let rectangle=()=>
{
    var l=prompt("Enter Length")
    l=Number.parseFloat(l);
    var b=prompt("Enter Breadth")
    b=Number.parseFloat(b);
    return l*b
}
let square=()=>
{
    var s=prompt("Enter Side")
    s=Number.parseFloat(b);
    return s*s;
}
let circle=()=>
{
    var r=prompt("Enter Radius")
    r=Number.parseFloat(r);
    
    return 3.14*r*r;
}
if(shape=="triangle")
{
    alert("The Area Of Triangle is: "+triangle());
}
else if(shape=="square")
{
    alert("The Area Of Square is: "+square());
}
else if(shape=="rectangle")
{
    alert("The Area Of Rectangle is: "+rectangle());
}
else if(shape=="circle")
{
    alert("The Area Of circle is: "+circle());
}
else
{
    alert("Enter Valid Shape Name");
}