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
 
