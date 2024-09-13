/**
 * @class Appliance
 * Represents an abstract appliance.
 * This class hides the complexity of internal appliance workings and exposes essential methods
 */

class Appliance {
    /**
     * Turns on the appliance. This method abstracts the internal workings.
     * @abstract
     */

    turnOn(){
        throw new Error ('Method turnOn() must be implemented');
    }

    /**
     * Turns off the appliance. This methof abstracts the internal workings.
     * @abstract
     */

    turnOff(){
        throw new Error('Method turnOff() must be implemented');
    }
}

/**
 * @class WashingMachine
 * Represents a specific appliance: a washing machine.
 * The internal logic of operating a washing machine is abstracted behind simple methods.
 */

class WashingMachine extends Appliance{
    /**
     * Turns on the washing machine.
     */

    turnOn(){
        console.log('Washing machine is now running');
    }

    /**
     * Turns off the washing machine.
     */

    turnOff(){
        console.log('Washing machine has been turned off.');
    }

}

/**
 * @class Microwave
 * Represents a specific appliance: a microwave.
 *  The internal logic of operating a microwave is abstracted behind simple methods.
 */

class Microwave extends Appliance{
    /**
     * Turns on the microwave.
     */

    turnOn(){
        console.log('Microwave is now heating');
    }

    /**
     * Turns off the microwave.
     */

    turnOff(){
        console.log('Microwave has been turned off.');
    }

}

/**
 * Uses an appliance to turn it on and off, demonstrating abstraction.
 * @param {Appliance} appliance - The appliance to interact with.
 */

function operateAppliance(appliance){
    appliance.turnOn();
    //Simulate some operation
    appliance.turnOff();
}

const myWashingMachine = new WashingMachine();
const myMicrowave = new Microwave();

// Using abstraction to operate appliances without knowing internal details
operateAppliance(myWashingMachine); //Output: Washing machine is now running. Washing machine..
operateAppliance(myMicrowave); 