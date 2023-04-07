function AreaOfCircle(Radius :number) :number
{
    var Area : number = 0
    var Pi : number =3.14
    Area = Pi*(Radius*Radius)

    return Area

}

var Radius :number = 5
var result :number =0

result = AreaOfCircle(Radius)

console.log("Area of circle is"+result)