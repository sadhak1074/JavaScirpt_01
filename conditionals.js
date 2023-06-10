let a = prompt("Whats your age ? ");

if (a < 18)
{
    alert("You are not eligible to vote");
}

else if(a > 10 && a<18)
{
    alert("You'll be eligible to vote after 8 yrs");
}

else
{
    alert("You are eligible to vote");
}