'use strict'

function conditionCheck(character) {
    if (character.health > 50) {
        return "healthy"
    }
    else if (character.health < 15) {
        return "critical"
    }
    else {
        return "wounded"
    };
};

console.log(conditionCheck({name: 'Маг', health: 90}));
console.log(conditionCheck({name: 'Воин', health: 12}));
console.log(conditionCheck({name: 'Вор', health: 45}));
