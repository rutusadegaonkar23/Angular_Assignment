function Summation(Arr:number[]):number
{
    var i:number =0
    var Res :number =Arr[0]
    var Sum:number=0
    for(i=1;i<Arr.length;i++)
    {
       Sum = Arr[i]+Res
       Res = Sum
    }
    return Res
}

var Arr: number[] = [23,6,7,4,5,7]

var Sum:number = 0
Sum = Summation(Arr)

console.log("Summation of numbers "+ Sum)