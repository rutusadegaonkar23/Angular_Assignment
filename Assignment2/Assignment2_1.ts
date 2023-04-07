function Maximum(Arr:number[]):number
{
    var Temp : number=0
    var Max :number = Arr[0]
    for(Temp=0;Temp<Arr.length;Temp++)
    {
        if(Arr[Temp] > Max)
        {
           Max=Arr[Temp] 
        }
    }
    return Max
}

var Arr :number[] =[23,89,6,29,56,45,77,32]

var Result : number =0
Result = Maximum(Arr)
console.log("Largest number is "+ Result)