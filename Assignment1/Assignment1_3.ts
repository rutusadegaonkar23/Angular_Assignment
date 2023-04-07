function DisplayFactors(Factors : number): void
{
  var Temp :number = 0
  var result : number = 0
  var result1 : number = 0
  for(Temp =1 ;Temp<Factors;Temp++)
  {
   if(Factors%Temp==0)
    {
    console.log("Factors of number "+Temp)
    }
   
  }
}

var Factors : number = 20



DisplayFactors(Factors)