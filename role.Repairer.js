var roleRepairer = {
    /** @param {Creep} creep **/
    run: function(creep) {

        if (creep.memory.repairing && creep.carry.energy == 0) {
            creep.memory.repairing = false;
            creep.say('🔄 Harvest');
        } else if (!creep.memory.repairing && creep.carry.energy < creep.carryCapacity) {
            creep.memory.repairing = false;
            creep.say('🔄 Harvest');
        } else if (!creep.memory.repairing && creep.carry.energy == creep.carryCapacity) {
            creep.memory.repairing = true;
            creep.say('🚧 Repair');
        }

        if (creep.memory.repairing) {
            const targets = creep.room.find(FIND_STRUCTURES, {
                filter: object => object.hits < object.hitsMax
            });

            targets.sort((a, b) => a.hits - b.hits);

            if (targets.length > 0) {
                if (creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }
        } else {
            var sources = creep.room.find(FIND_SOURCES_ACTIVE);
            if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {
                    visualizePathStyle: {
                        stroke: '#ffaa00'
                    }
                });
                
            }
        }
    }
}

module.exports = roleRepairer;