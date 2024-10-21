interface Car {
    number: string;
    speed: number;
    name: string;
    engine: Engine;
    spareWheel?: boolean;
    isDrive: boolean
    drive: () => void
    pushAccelerator: (percent: number) => void
}

interface Engine {
    power:number,
    rpm: number;
    isStarted: boolean;
    startEngine: () => void

}

const car: Car = {
    number: 'AA 911 B 43',
    speed: 0,
    name: 'LADA',
    isDrive:false,
    engine: {
        power:70,
        rpm: 0,
        isStarted: false,
        startEngine: function () {
            this.rpm = 700,
                this.isStarted = true
        },
    },

    pushAccelerator: function (percent: number) {
        this.engine.rpm = percent/100 * 700
    },

    drive:function () {
        this.isDrive = this.engine.isStarted && this.engine.rpm > 700;
        this.speed =  this.isDrive ? this.engine.power * this.engine.rpm / 1000 : 0
    },

}

car.drive()
console.log('включили передачу')
console.log('скорость: ', car.speed)
console.log('----------------------------------')
car.engine.startEngine()
console.log('завели двигатель')
car.drive()
console.log('включили передачу')
console.log('скорость: ', car.speed)
console.log('----------------------------------')
car.engine.startEngine()
console.log('завели двигатель')
car.pushAccelerator(50)
console.log('нажали на педаль')
car.drive()
console.log('включили передачу')
console.log('скорость: ', car.speed)

