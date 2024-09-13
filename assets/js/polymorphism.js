/**
 * @class Device
 * Represents a general device.
 */

class Device{
    /**
     * Turns on the device. This method is meant to be overridden,
     * @abstract
     */

    turnOn(){
        throw new Error('Method turnOn() must be implemented');
    }
}

/**
 * @class Laptop
 * Represents a laptop device that inherits from Device
 */

class Laptop extends Device{
    /**
     * Overrides the turnOn method to turn on a laptop
     */

    turnOn(){
        console.log('Laptop is now powered on.')
    }
}

/**
 * @class Smartphone
 * Represents a smartphone device that inherits from Device,
 */

class Smartphone extends Device {
    /**
     * Overrides the turnOn method to turn on a smartphone.
     */

    turnOn(){
        console.log('Smartphone is now powered on.')
    }
}

/**
 * Turns on any device.
 * @param {Device} device - The device to turn on.
 */

function powerOnDevice(device){
    device.turnOn();
}

//Instantiate different devices
const myLaptop = new Laptop();
const mySmartphone = new Smartphone();

// Using polymorphism to call the same method on different devices.
powerOnDevice(myLaptop); //Output: Laptop is now powered on.
powerOnDevice(mySmartphone); // Output: Smartphone is now powered on.