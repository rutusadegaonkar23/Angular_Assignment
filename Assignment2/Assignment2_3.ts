function SecondMax(Arr :number[]):number
{
    var i:number = 0
    var j:number = 0
    var temp:number = 0
    for(i=0;i<Arr.length;i++)
    {
        for(j=i+1;j<Arr.length;j++)
        {
            if(Arr[i]>Arr[j])
                {
                    temp=Arr[i]
                    Arr[i]=Arr[j]
                    Arr[j]=temp
                }
        }
    }
    return(Arr[Arr.length-2])
}

var Arr : number[] =[23,89,6,29,56,45,77,32]

var Result:number = 0
Result = SecondMax(Arr)
console.log("Second largest number is "+Result)