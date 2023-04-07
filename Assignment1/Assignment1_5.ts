function Fibonacci(No :number):void
{
  var No1:number=0
  var No2:number=1
  

  console.log(No1)
  console.log(No2)

  var No3:number=0
  var i : number = 0 
  for(i=2;i<No;i++)
  {
    No3=No1+No2
    console.log(No3)
    No1=No2
    No2=No3 
  }
}

var Res :number=10
Fibonacci(Res)
