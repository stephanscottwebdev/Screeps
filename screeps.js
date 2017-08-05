
//Main

var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');

module.exports.loop = function () {
//Shows the amount of energy that the room has available.
    /*for(var name in Game.rooms) {
        console.log('Room "'+name+'" has '+Game.rooms[name].energyAvailable+' energy');
    }
    */
//Gives roles from assigned modules to creeps.
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'repairer') {
            roleRepairer.run(creep);
        }
    }
// Deletes memory of dead creeps.
     for(var i in Memory.creeps) {
        if(!Game.creeps[i]) {
            delete Memory.creeps[i];
        }
    }
// Respawns dead creeps by name(id) then assigns roles form the modules.
    if(!Game.creeps["Harvester1"]) {
        Game.spawns['Spawn1'].createCreep( [WORK, WORK, CARRY, CARRY, MOVE], 'Harvester1' );
    }
    
    if(Game.creeps["Harvester1"]) {
        Game.creeps['Harvester1'].memory.role = 'harvester';
    }
    
    if(!Game.creeps["Harvester2"]) {
        Game.spawns['Spawn1'].createCreep( [WORK, WORK, CARRY, CARRY, MOVE], 'Harvester2' );
    }
    
    if(Game.creeps["Harvester2"]) {
        Game.creeps['Harvester2'].memory.role = 'harvester';
    }

    if(!Game.creeps["HarvesterBig"]) {
        Game.spawns['Spawn1'].createCreep( [WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE], 'HarvesterBig' );
    }
    
    if(Game.creeps["HarvesterBig"]) {
        Game.creeps['HarvesterBig'].memory.role = 'harvester';
    }
    
    if(!Game.creeps["Harvester3"]) {
        Game.spawns['Spawn1'].createCreep( [WORK, WORK, CARRY, CARRY, MOVE], 'Harvester3' );
    }
    
    if(Game.creeps["Harvester3"]) {
        Game.creeps['Harvester3'].memory.role = 'harvester';
    }
    
    if(!Game.creeps["Upgrader1"]) {
        Game.spawns['Spawn1'].createCreep( [WORK, CARRY, CARRY, MOVE, MOVE], 'Upgrader1' );
    }
    
    if(Game.creeps["Upgrader1"]) {
        Game.creeps['Upgrader1'].memory.role = 'upgrader';
    }
    
    if(!Game.creeps["Upgrader2"]) {
        Game.spawns['Spawn1'].createCreep( [WORK, WORK, CARRY, CARRY, MOVE], 'Upgrader2' );
    }
    
    if(Game.creeps["Upgrader2"]) {
        Game.creeps['Upgrader2'].memory.role = 'upgrader';
    }
    
    if(!Game.creeps["Upgrader3"]) {
        Game.spawns['Spawn1'].createCreep( [WORK, WORK, CARRY, CARRY, MOVE], 'Upgrader3' );
    }
    
    if(Game.creeps["Upgrader3"]) {
        Game.creeps['Upgrader3'].memory.role = 'upgrader';
    }
    
    if(!Game.creeps["UpgraderBig"]) {
        Game.spawns['Spawn1'].createCreep( [WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE], 'UpgraderBig' );
    }
    
    if(Game.creeps["UpgraderBig"]) {
        Game.creeps['UpgraderBig'].memory.role = 'upgrader';
    }
    
    if(!Game.creeps["UpgraderBig2"]) {
        Game.spawns['Spawn1'].createCreep( [WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE], 'UpgraderBig2' );
    }
    
    if(Game.creeps["UpgraderBig2"]) {
        Game.creeps['UpgraderBig2'].memory.role = 'upgrader';
    }
    
    if(!Game.creeps["UpgraderBig3"]) {
        Game.spawns['Spawn1'].createCreep( [WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE], 'UpgraderBig3' );
    }
    
    if(Game.creeps["UpgraderBig3"]) {
        Game.creeps['UpgraderBig3'].memory.role = 'upgrader';
    }
    
    if(!Game.creeps["Builder1"]) {
        Game.spawns['Spawn1'].createCreep( [WORK, CARRY, CARRY, MOVE], 'Builder1' );
    }
    
    if(Game.creeps["Builder1"]) {
        Game.creeps['Builder1'].memory.role = 'builder';
    }
    
    if(!Game.creeps["Builder2"]) {
        Game.spawns['Spawn1'].createCreep( [WORK, CARRY, CARRY, MOVE], 'Builder2' );
    }
    
    if(Game.creeps["Builder2"]) {
        Game.creeps['Builder2'].memory.role = 'builder';
    }
    
    if(!Game.creeps["Builder3"]) {
        Game.spawns['Spawn1'].createCreep( [WORK, CARRY, CARRY, MOVE], 'Builder3' );
    }
    
    if(Game.creeps["Builder3"]) {
        Game.creeps['Builder3'].memory.role = 'builder';
    }
    
    if(!Game.creeps["Repair1"]) {
        Game.spawns['Spawn1'].createCreep( [WORK, CARRY, CARRY, MOVE, MOVE], 'Repair1' );
    }
    
    if(Game.creeps["Repair1"]) {
        Game.creeps['Repair1'].memory.role = 'repairer';
    }
    
    if(!Game.creeps["Repair2"]) {
        Game.spawns['Spawn1'].createCreep( [WORK, CARRY, CARRY, MOVE, MOVE], 'Repair2' );
    }
    
    if(Game.creeps["Repair2"]) {
        Game.creeps['Repair2'].memory.role = 'repairer';
    }
    
    if(!Game.creeps["Repair3"]) {
        Game.spawns['Spawn1'].createCreep( [WORK, CARRY, CARRY, MOVE], 'Repair3' );
    }
    
    if(Game.creeps["Repair3"]) {
        Game.creeps['Repair3'].memory.role = 'repairer';
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////

var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
	    if(creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES_ACTIVE);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
        else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN || structure.structureType == STRUCTURE_TOWER || structure.structureType == STRUCTURE_CONTAINER) &&
                            structure.energy < structure.energyCapacity;
                    }
            });
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
	}
};

module.exports = roleHarvester;

//////////////////////////////////////////////////////////////////////////////////////////////

var roleUpgrader = {

    run: function(creep) {

        if (creep.memory.upgrading && creep.carry.energy == 0) {
            creep.memory.upgrading = false;
            creep.say('?? harvest');
        }
        if (!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
            creep.memory.upgrading = true;
            creep.say('?? upgrade');
        }

        if (creep.memory.upgrading) {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#7FDBFF'}});
            }
        }
        else {
            var containers = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_CONTAINER) && (structure.store[RESOURCE_ENERGY] > 0);
                }
            });
            var source = creep.pos.findClosestByPath(containers);
            if (creep.withdraw(source, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }
            /*var sources = creep.room.find(FIND_SOURCES_ACTIVE); OLD CODE
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            */
            }
        }
    };


module.exports = roleUpgrader;

////////////////////////////////////////////////////////////////////////////////////////////////

var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {

	    if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
            creep.say('?? harvest');
	    }
	    if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.building = true;
	        creep.say('?? build');
	    }

	    if(creep.memory.building) {
	        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(targets.length) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
	    }
	    else {
	        var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
	    }

	}
};

module.exports = roleBuilder;

////////////////////////////////////////////////////////////////////////////////////////////////

var roleRepairer = {
  
    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.memory.repairing && creep.carry.energy == 0) {
            creep.memory.repairing = false;
        }
        if(!creep.memory.repairing && creep.carry.energy == creep.carryCapacity) {
            creep.memory.repairing = true;
        }

        if(creep.memory.repairing) {
            var targets = creep.room.find(FIND_STRUCTURES, {
             filter: object => object.hits < (object.hitsMax/4)
            });

            targets.sort((a,b) => a.hits - b.hits);

            if(targets.length > 0) {
                if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(targets[0]);
    }
}
        } else {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
    }
};
module.exports = roleRepairer;

//////////////////////////////////////////////////////////////////////////////////////////////////////

var roleTower = {

    defendMyRoom: function(myRoomName) {
    
        var hostiles = Game.rooms[myRoomName].find(FIND_HOSTILE_CREEPS);
        var towers = Game.rooms[myRoomName].find(FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_TOWER}});

// If there are hostiles - attack them.
        if (hostiles.length > 0) {
            var username = hostiles[0].owner.username;
            Game.notify(`User ${username} spotted in room ${myRoomName}`);
            towers.forEach(tower => tower.attack(hostiles[0]));
            creep.say('🛡️ defend this house!');

        }

// If there are no hostiles..
        if (hostiles.length === 0) {
            
            // First heal any damaged creeps.
            for (let name in Game.creeps) {
                // get the creep object
                var creep = Game.creeps[name];
                if (creep.hits < creep.hitsMax) {
                    towers.forEach(tower => tower.heal(creep));
                    creep.say('💉️ healing creeps');
                }
            }
        
           for (var i in towers){
                //...repair buildings until half of the tower energy is gone.
                if (towers.energy > ((towers.energyCapacity / 10)* 9)){

                    // Find the closest damaged Structure.
                    var closestDamagedStructure = towers.pos.findClosestByRange(FIND_STRUCTURES, {filter: (s) => s.hits < s.hitsMax && s.structureType != STRUCTURE_WALL && s.structureType != STRUCTURE_RAMPART});
    	            if(closestDamagedStructure) {
    	 	            towers.repair(closestDamagedStructure);
    	 	            creep.say('🛠️ repairing buildings');
                    }
                }
            }
            
        }
    }
}

module.exports = roleTower;

//////////////////////////////////////////////////////////////////////////////////////////////

var roleMiner = {

    run: function(creep) {
        
	    const target = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
	    
        if (target) {
                if (creep.harvest(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
            }
        }
        
        for (const RESOURCE_ENERGY in creep.carry) {
            creep.transfer(STRUCTURE_CONTAINER, RESOURCE_ENERGY);
        }
    }
};

module.exports = roleMiner;