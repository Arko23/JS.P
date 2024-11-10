function monthlySavings(arr,livingCost)
{
   if(typeof arr!=='object'|| typeof livingCost!=='number')
   {
       return "Invalid";
   }
   let tincome=0;
   for(let i=0;i<arr.length;i++)
   {
       if(arr[i]>=3000)
       {
           tincome+=arr[i]*0.8;
       }
       else
       {
           tincome+=arr[i];
       }
   }
   let savings=tincome-livingCost;
   if(savings>=0)
   {
       return savings;
   }
   else
   {
       return "earn more";
   }
}

//  let arr= [ 900 , 2700 , 3400];
//  let livingCost=10000;
//  let result=monthlySavings(arr,livingCost);
//  console.log(result);