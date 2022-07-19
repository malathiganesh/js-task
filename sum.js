var m=10;
var sum=0;
for (var i = 0; i <= m; i++)
   {
    if (i % 3 == 0 || i % 5==0) 
    { 
        sum+=i;
        console.log(sum);
   }
}
