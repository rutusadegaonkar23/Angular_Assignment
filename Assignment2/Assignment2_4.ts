function ChkArmstrong(Arm :number):void
{
    var n : number = 0
    var sum : number = 0
    var result : number = Arm

    while(Arm>0)
   {
        n = Arm%10
        sum+= n*n*n
        result = Math.round(result/10)
        
   
    } 
    console.log(sum)
    console.log(Arm)
     
    if(sum==Arm)
{
    console.log("Armstrong number")
}
else
{
    console.log("Not Armstrong number ")
}


}

var No : number = 153
ChkArmstrong(No)


