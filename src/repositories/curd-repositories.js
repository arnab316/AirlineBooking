class CurdRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      console.log("something went wrong in curd : Create");
      throw error;
    }
  }

  async destroy(data) {
    try {
      const response = await this.model.destroy({
        where: {
          id: data,
        },
      });
      return response;
    } catch (error) {
      console.log("something went wrong in curd : destroy");
      throw error;
    }
  }
  async get(data) {
    try {
      const response = await this.model.findByPk(data);
      return response;
    } catch (error) {
      console.log("something went wrong in curd : get");
      throw error;
    }
  }
  async getAll(data) {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      console.log("something went wrong in curd : getAll");
      throw error;
    }
  }
  async update(id, data) {
    try {
      const response = await this.model.update(data, {
        where: {
          id: id,
        },
      });
      return response;
    } catch (error) {
      console.log("something went wrong in curd : Update");
      throw error;
    }
  }
}

module.exports = CurdRepository;
