var roleMiner = {

run: function(creep) {
	    if(creep.carry.energy < creep.carryCapacity) {
            const target = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
            if(target) {
                if(creep.harvest(target) == ERR_NOT_IN_RANGE) {
                   creep.moveTo(target);
    }
}
        }
        else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (
                        structure.structureType == STRUCTURE_TOWER ||
                        structure.structureType == STRUCTURE_SPAWN 
                    )}
            });
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
    }
};

module.exports = roleMiner;