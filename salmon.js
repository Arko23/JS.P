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

//  let result=checkName("Salman");
//  console.log(result);