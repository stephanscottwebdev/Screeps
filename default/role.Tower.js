// /*
//  * Module code goes here. Use 'module.exports' to export things:
//  * module.exports.thing = 'a thing';
//  *
//  * You can import it from another modules like this:
//  * var mod = require('role.Tower');
//  * mod.thing == 'a thing'; // true
//  */

// // module.exports = {

// // };
// // function defendRoom(roomName) {
// //     var hostiles = Game.rooms[roomName].find(FIND_HOSTILE_CREEPS);
// //     if(hostiles.length > 0) {
// //         var username = hostiles[0].owner.username;
// //         Game.notify(`User ${username} spotted in room ${roomName}`);
// //         var towers = Game.rooms[roomName].find(
// //             FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_TOWER}});
// //         towers.forEach(tower => tower.attack(hostiles[0]));
// //     }
// // }









// "use strict";
// module.exports.updateTower = function(tower, actions) {
//     //TODO: Use actions

//     var hostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
//     if(hostile) {
//         tower.attack(hostile);
//         return;
//     }
    
//     var creep = tower.pos.findClosestByRange(FIND_MY_CREEPS, { filter: (x) => {
//         return x.hits < x.hitsMax;
//     }});
//     if(creep) {
//         tower.heal(creep);
//         return;
//     }

//     var structure = tower.pos.findClosestByRange(FIND_MY_STRUCTURES, { filter: (x) => {
//         return x.structureType !== STRUCTURE_RAMPART && x.hits < x.hitsMax;
//     }});
//     if(structure) {
//         tower.repair(structure);
//         return;
//     }

//     var road = tower.pos.findClosestByRange(FIND_STRUCTURES, { filter: (x) => {
//         return x.structureType == STRUCTURE_ROAD && x.hits < x.hitsMax;
//     }});
//     if(road) {
//         tower.repair(road);
//         return;
//     }
    
//     var structure = tower.pos.findClosestByRange(FIND_STRUCTURES, { filter: (x) => {
//         return ((x.structureType === STRUCTURE_RAMPART && x.my) ||
//                 x.structureType === STRUCTURE_WALL) && 
//                 //x.hits < x.hitsMax &&
//                 x.hits < 25000;
//     }});
//     if(structure) {
//         tower.repair(structure);
//         return;
//     }
// }