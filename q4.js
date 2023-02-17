let year=prompt("Enter Year");
let check=(year)=>
{
    if(year%400==0)
    {
        if(year%4==0)
        {
            alert("Leap Year");
        }
        else
        {
            alert("Not a leap year");
        }
    }
    else if(year%100==0)
    {
        alert("Not A Leap Year");
    }
    else{
        alert("Not A Leap Year");
    }
}

if(year.length==4)
{
    year=Number.parseInt(year);
    check(year);

}
else{
    alert("Enter Valid Year");
}