"use strict";

import Citizen from "./class.citizen.js";
import NobleCitizen from "./class.nobleCitizen.js";
import Building from "./class.building.js";
import NobleBuilding from "./class.nobleBuilding.js";

export default class Village {

    constructor(name) {
        this.name = name;
        this.buildings = [];
        this.citizens = [];
    }

    addBuilding(name, capacity, noblesOnly = false) {

        if (noblesOnly) {
            this.buildings.push(
                new NobleBuilding(name, capacity)
            );
        }
        else {
            this.buildings.push(
                new Building(name, capacity)
            );
        }

    }

    addCitizen(name, noble = false) {

        let citizen;

        if (noble) {
            citizen = new NobleCitizen(name);
        }
        else {
            citizen = new Citizen(name);
        }

        this.citizens.push(citizen);

        for (const building of this.buildings) {

            if (building.addResident(citizen)) {
                return;
            }

        }

    }

    shelterTheWorthy() {

        for (const citizen of this.citizens) {

            if (citizen.home === null) {

                for (const building of this.buildings) {

                    if (building.addResident(citizen)) {
                        break;
                    }

                }

            }

        }

    }

    printCitizenDirectory() {

        console.log("=== Citizen Directory ===");

        for (const citizen of this.citizens) {

            let homeName = "Street";

            if (citizen.home !== null) {
                homeName = citizen.home.name;
            }

            console.log(
                citizen.toString() + " - Home: " + homeName
            );

        }

    }

}