"use strict";

import Building from "./class.building.js";

/**
 * Create a NobleBuilding class. It's basically the same as a regular building
 * with one exception: Only nobles allowed.
 */

export default class NobleBuilding extends Building {

    constructor(name, capacity) {
        super(name, capacity);
    }

    addResident(citizen) {

        // Hier dürfen nur Adelige mit Rang 1 wohnen.
        if (citizen.rank !== 1) {
            return false;
        }

        return super.addResident(citizen);
    }

}