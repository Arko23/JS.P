1.
function calculateMoney(ticketSale){
    if(ticketSale>=0){
        let result = (ticketSale*120)-(500+(8*50));
        return result;
    }
    else
    {
        return "invalid number error505:pls give positive number ";
    }
}


2.
function checkName(name) {
    let isString = false;
    for (let i = 0; i < name.length; i++) {
      let charAschii = name.charCodeAt(i);
      if (
        (charAschii >= 65 && charAschii <= 90) ||
        (charAschii >= 97 && charAschii <= 122)
      ) {
        isString = true;
      } else {
        isString = false;
      }
    }
    if (isString === true){
    const last_char=['a', 'y', 'i', 'e', 'o', 'u', 'w'];
    const last_name_char=name[name.length-1].toLowerCase();
        for(let i=0;i<last_char.length;i++){
            if(last_name_char=== last_char[i])
            {
                return "Good Name";
            }
           
        }

        return "Bad Name";
    }
    else
    {
        return "Invalid"
    }
}


3.
function deleteInvalids(arr){
    if(!arr||typeof arr.length!=='number'||typeof arr !=='object'){
        return "Invalid Array : error505"
    }

    let numb=[];
    for(let i=0;i<arr.length;i++)
    {
        if(typeof arr[i]==='number' && !isNaN(arr[i])){
            numb.push(arr[i]);
        }
    }
    return numb;
}


4.
function password(obj) {
    if (Object.keys(obj).length === 3) {
      let nS = obj.siteN.charAt(0).toUpperCase();
      for (let i = 1; i < obj.siteN.length; i++) {
        nS += obj.siteN.charAt(i);
      }
      let newB = obj.birthYear;
      if (newB < 1000) {
       
        return "Invalid";
      }
  
      let newPassword = nS + "#" + obj.name + "@" + newB;   
      return newPassword;
    }
     else {
      
      return "Invalid";
    }
  }
 

  5.
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


