const CurdRepository = require("./curd-repositories");

const { Airplane } = require("../models");

class AirplaneRepository extends CurdRepository {
  constructor() {
    super(Airplane);
  }
}

module.exports = AirplaneRepository;
