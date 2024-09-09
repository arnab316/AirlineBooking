const { AirplaneService } = require("../services");
// const {createAirplane} = require('../services/airplane-service');
const { StatusCodes } = require("http-status-codes");

async function createAirplanes(req, res) {
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    return res.status(StatusCodes.CREATED).json({
      success: true,
      meassage: "Successfully created an Airplane",
      data: airplane,
      error: {},
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      meassage: "Something went wrong while creating an Airplane",
      data: {},
      error: error.message || error,
    });
  }
}

const getAllAirplanes = async (req, res) => {
   try {
    const allAirplanes = await AirplaneService.getAllAirplanes()
     res.json({
      success: true,
      meassage: "Successfully retrieved all Airplanes",
      data: allAirplanes,
      error: {},
    });
   } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      meassage: "Something went wrong while retrive an Airplane",
      data: {},
      error: error.message || error,
    });
   }

}

module.exports = {
  createAirplanes,
  getAllAirplanes
};
