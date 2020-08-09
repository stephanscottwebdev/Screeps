// Military creeps still in testing
var melee = require('role.Military');
var ranged = require('role.Military');
var hybrid = require('role.Military');
var healer = require('role.Military');

// General creeps
var roleHarvester = require('role.Harvester');
var roleUpgrader = require('role.Upgrader');
var roleBuilder = require('role.Builder');
var roleRepairer = require('role.Repairer');

module.exports.loop = function() {

    //Gives roles from assigned modules to creeps.
    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        if (creep.memory.role == 'Harvester') {
            roleHarvester.run(creep);
        }
        if (creep.memory.role == 'Upgrader') {
            roleUpgrader.run(creep);
        }
        if (creep.memory.role == 'Builder') {
            roleBuilder.run(creep);
        }
        if (creep.memory.role == 'Repairer') {
            roleRepairer.run(creep);
        }
        // if (creep.memory.role == 'Ranged') {
        //     ranged.run(creep);
        // }
        // if (creep.memory.role == 'Healer') {
        //     healer.run(creep);
        // }
        // if (creep.memory.role == 'Melee') {
        //     melee.run(creep);
        // }
        // if (creep.memory.role == 'Hybrid') {
        //     hybrid.run(creep);
        // }
    }
    // Deletes memory of dead creeps.
    for (var i in Memory.creeps) {
        if (!Game.creeps[i]) {
            delete Memory.creeps[i];
        }
    }

    //Find structure towers and attack hostile creeps.
    var towers = Game.rooms.W1N4.find(FIND_STRUCTURES, {
        filter: (s) => s.structureType == STRUCTURE_TOWER
    });
    for (let tower of towers) {
        var target = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if (target != undefined) {
            tower.attack(target);
        }
    }

    var tower = Game.getObjectById('TOWER_ID');
    if(tower) {
        var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax
        });
        if(closestDamagedStructure) {
            tower.repair(closestDamagedStructure);
        }
        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
        }
    }

    // Respawns dead creeps by name(id) then assigns roles form the modules.
    if (!Game.creeps["Harvester1"]) {
        Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, CARRY, MOVE], 'Harvester1');
    }
    if (Game.creeps["Harvester1"]) {
        Game.creeps['Harvester1'].memory.role = 'Harvester';
    }
    if (!Game.creeps["Harvester2"]) {
        Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, CARRY, MOVE], 'Harvester2');
    }
    if (Game.creeps["Harvester2"]) {
        Game.creeps['Harvester2'].memory.role = 'Harvester';
    }
    if (!Game.creeps["Harvester3"]) {
        Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, CARRY, MOVE], 'Harvester3');
    }
    if (Game.creeps["Harvester3"]) {
        Game.creeps['Harvester3'].memory.role = 'Harvester';
    }
    if (!Game.creeps["Upgrader1"]) {
        Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, CARRY, MOVE], 'Upgrader1');
    }
    if (Game.creeps["Upgrader1"]) {
        Game.creeps['Upgrader1'].memory.role = 'Upgrader';
    }
    if (!Game.creeps["Upgrader2"]) {
        Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, CARRY, MOVE], 'Upgrader2');
    }
    if (Game.creeps["Upgrader2"]) {
        Game.creeps['Upgrader2'].memory.role = 'Upgrader';
    }
    if (!Game.creeps["Upgrader3"]) {
        Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, CARRY, MOVE], 'Upgrader3');
    }
    if (Game.creeps["Upgrader3"]) {
        Game.creeps['Upgrader3'].memory.role = 'Upgrader';
    }
    if (!Game.creeps["Builder1"]) {
        Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, CARRY, MOVE], 'Builder1');
    }
    if (Game.creeps["Builder1"]) {
        Game.creeps['Builder1'].memory.role = 'Builder';
    }
    if (!Game.creeps["Builder2"]) {
        Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, CARRY, MOVE], 'Builder2');
    }
    if (Game.creeps["Builder2"]) {
        Game.creeps['Builder2'].memory.role = 'Builder';
    }
    if (!Game.creeps["Repair1"]) {
        Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, CARRY, MOVE], 'Repair1');
    }
    if (Game.creeps["Repair1"]) {
        Game.creeps['Repair1'].memory.role = 'Repairer';
    }
    if (!Game.creeps["Repair2"]) {
        Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, CARRY, MOVE], 'Repair2');
    }
    if (Game.creeps["Repair2"]) {
        Game.creeps['Repair2'].memory.role = 'Repairer';
    }if (!Game.creeps["Repair3"]) {
        Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, CARRY, MOVE], 'Repair3');
    }
    if (Game.creeps["Repair3"]) {
        Game.creeps['Repair3'].memory.role = 'Repairer';
    }
    // Defensive creeps.
    // if (!Game.creeps["Melee1"]) {
    //     Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, CARRY, MOVE], 'Melee1');
    // }
    // if (Game.creeps["Melee1"]) {
    //     Game.creeps['Melee1'].memory.role = 'Melee';
    // }
    // if (!Game.creeps["Ranged1"]) {
    //     Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, CARRY, MOVE], 'Ranged1');
    // }
    // if (Game.creeps["Ranged1"]) {
    //     Game.creeps['Ranged1'].memory.role = 'Ranged';
    // }
    // if (!Game.creeps["Healer1"]) {
    //     Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, CARRY, MOVE], 'Healer1');
    // }
    // if (Game.creeps["Healer1"]) {
    //     Game.creeps['Healer1'].memory.role = 'Healer';
    // }
    // if (!Game.creeps["Hybrid1"]) {
    //     Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, CARRY, MOVE], 'Hybrid1');
    // }
    // if (Game.creeps["Hybrid1"]) {
    //     Game.creeps['Hybrid1'].memory.role = 'Hybrid';
    // }
    
}





