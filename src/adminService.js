/* eslint-disable no-async-promise-executor */
import axios from "axios";
// import fs from "fs";

const url = "api/data/";

class AdminServices {
  //Get page data
  static getData(page) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`${url}${page}`);
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  static async postData(page, new_data) {
    await axios.post(`${url}${page}`, new_data, {
      headers: {
        "content-type": "multipart/form-data"
      }
    });
    return await this.getData(page);
  }

  static async postDataNoRes(page, new_data) {
    await axios.post(`${url}${page}`, new_data, {
      headers: {
        "content-type": "multipart/form-data"
      }
    });
  }

  static async deleteData(page, id) {
    await axios.delete(`${url}${page}/${id}`);
    return await this.getData(page);
  }

  static async postUser(page, new_data) {
    await axios.post(`${url}${page}`, new_data);
    return await this.getData(page);
  }
}

export default AdminServices;
