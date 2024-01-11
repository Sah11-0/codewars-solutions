function checkAlive (health) {
    if (health <= 0) {
      return false;
    } else {
      return true;
    }
  }

  //or

  function checkAlive (health) {
    return health > 0 ? true : false;
  }

  //or

  function checkAlive(health) {
    return health > 0;
  }

  //or

  const checkAlive = (health) => health > 0;
