var roleHarvester = require('role.Harvester');
var roleUpgrader = require('role.Upgrader');
var roleBuilder = require('role.Builder');
var roleRepairer = require('role.Repairer');
module.exports.loop = function () {

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
    }
    // Deletes memory of dead creeps.
    for (var i in Memory.creeps) {
        if (!Game.creeps[i]) {
            delete Memory.creeps[i];
        }
    }

    var minNumHarvesters = 3;
    var minNumUpgraders = 2;
    var minNumBuilders = 1;
    var minNumRepairers = 1;
    var numHarvesters = _.sum(Game.creep, (c) => creep.memory.role == roleHarvester);
    var numUpgraders = _.sum(Game.creeps, (c) => creep.memory.role == roleUpgrader);
    var numBuilders = _.sum(Game.creeps, (c) => creep.memory.role == roleBuilder);
    var numRepairers = _.sum(Game.creeps, (c) => creep.memory.role == roleBuilder);
    /*
        if (!Game.creeps["Upgrader1"]) {
            Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, CARRY, MOVE], 'Upgrader1');
        }
        if (Game.creeps["Upgrader1"]) {
            Game.creeps['Upgrader1'].memory.role = 'Upgrader';
        }
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
     */
    if (numHarvesters < minNumHarvesters) {
        Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, CARRY, MOVE], 'Harvester');
    } else if (numUpgraders < minNumUpgraders) {
        Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, CARRY, MOVE], 'Upgrader');
    } else if (numRepairers < minNumRepairers) {
        Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, CARRY, MOVE, MOVE], 'Repairer');
    } else if (numBuilders < minNumBuilders) {
        Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, CARRY, MOVE], 'Builder');
    }
}
