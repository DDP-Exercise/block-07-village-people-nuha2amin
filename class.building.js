"use strict";

/**
 * Create a Building class. Each Building should have
 * - a name
 * - a capacity
 * - an array of its residents
 *
 * Each Building should provide methods to
 * - addResident(citizen)
 * - removeResident(citizen)
 * - listAllResidents()
 */

export default class Building {

    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
        this.residents = [];
    }

    addResident(citizen) {

        // يوجد مكان فارغ
        if (this.residents.length < this.capacity) {
            this.residents.push(citizen);
            citizen.home = this;
            return true;
        }

        // لا يوجد مكان، ابحث عن شخص أقل رتبة
        for (const resident of this.residents) {

            if (resident.rank > citizen.rank) {

                this.removeResident(resident);

                this.residents.push(citizen);
                citizen.home = this;

                return true;
            }
        }

        return false;
    }

    removeResident(citizen) {

        let newResidents = [];

        for (const resident of this.residents) {

            if (resident !== citizen) {
                newResidents.push(resident);
            }
        }

        this.residents = newResidents;

        citizen.home = null;
    }

    listAllResidents() {

        let list = "";

        for (const resident of this.residents) {
            list += resident.toString() + "\n";
        }

        return list;
    }

}