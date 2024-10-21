sum ('11111','01011',2)
diff ('11111','01011',2)
div ('01011','01011',2)
multi ('11111','01011',2)

sum('5',15,10)
diff ('15','5',10)
div ('10','2',10)
multi (4,8,10)

sum('ff','15',16)
diff ('ff','05',16)
div ('dd','01',16)
multi ('ff','88',16)



function sum(n1: number | string, n2: number | string,system:number) {
    console.log(n1,' + ',n2,' = ',(parseInt(n1+'',system) + parseInt(n2+'',system)).toString(system))
}

function diff(n1: number | string, n2: number | string,system:number) {
    console.log(n1,' - ',n2,' = ',(parseInt(n1+'',system) - parseInt(n2+'',system)).toString(system))
}

function div(n1: number | string, n2: number | string,system:number) {
    console.log(n1,' / ',n2,' = ',(parseInt(n1+'',system) / parseInt(n2+'',system)).toString(system))
}

function multi(n1: number | string, n2: number | string,system:number) {
    console.log(n1,' * ',n2,' = ',(parseInt(n1+'',system) * parseInt(n2+'',system)).toString(system))
}

