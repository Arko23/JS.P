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

// let first=calculateMoney(-120);
// console.log(first);
