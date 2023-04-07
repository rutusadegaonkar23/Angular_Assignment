function Maximum(No1 : number,No2 : number,No3 : number) : number 
{
    var Temp : number = 0
    Temp = No1>No2?No1:No2

    var Largest :number =0
    Largest = Temp>No3?Temp:No3

    return Largest
    
}

var No1 : number = 23
var No2 : number = 89
var No3 : number = 6

var ret : number =0

ret = Maximum(No1,No2,No3)

console.log("Largest number is"+ret)


