function ChkPrime(Prime : number):boolean
{
    var No1: number = Prime/2
    var Temp:number = 0
    if(Prime==0 ||Prime==1)
    {
        return false
    }
    
    for(Temp=2;Temp<=No1;Temp++)
    {
        if(Prime % Temp==0)      
        {
            
         return false 
        }
        
    }   
    return true
    
}

var result:Boolean 
var Prime:number=11
result = ChkPrime(Prime)

if(result==true)
{
    console.log("It is a prime number")
}
else
{
    console.log("It is not a prime number")
}