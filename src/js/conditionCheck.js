function conditionCheck(character) {
  if (character.health >= 15 && character.health <= 50) {
    return 'wounded';
  } if (character.health > 50) {
    return 'healthy';
  } if (character.health < 15) {
    return 'critical';
  } return false;
}

module.exports = {
  conditionCheck,
};
