class Battery {
    constructor(energy) {
        this.energy = energy;
    }
    getEnergy() {
        return this.energy;
    }
    setEnergy(energy) {
        this.energy = energy;
    }
}
class FlashLamp {
    constructor(battery) {
        this.battery = battery;
    }
    // getBattery() {
    //     return this.battery;
    // }
    setBattery(battery) {
        this.battery = battery;
    }
    getBatteryInfo() {
        return this.battery.getEnergy();
    }
    getLight() {
        if (this.status) {
            alert("Lighting")
        } else {
            alert("Not lighting")
        }
    }
    getTurnOn() {
        this.status = true;
    }
    getTurnOff() {
        this.status = false;
    }
}
let battery = new Battery();
battery.setEnergy(10);
let flashLamp = new FlashLamp();
flashLamp.setBattery(battery);
document.write("Battery info: " + flashLamp.getBatteryInfo() + "<br>");
flashLamp.getLight();
document.write("Turn on <br>");
flashLamp.getTurnOn()
flashLamp.getLight()
document.write("Battery info: " + flashLamp.getBatteryInfo() + "<br>");
document.write("Turn off <br>");
flashLamp.getTurnOff();
flashLamp.getLight()
