import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  ////////////////////////
  // COMPANY API ROUTES //
  ////////////////////////

  /** Get all companies with name passed in as a filter if not an empty string */

  static async getAllCompanies(name) {
    const res = await this.request('companies', {name});
    return res.companies;
  }

  /** Get details on a company by handle. Use to get jobs for a specific company by calling company.jobs */

  static async getCompany(handle) {
    const res = await this.request(`companies/${handle}`);
    return res.company;
  }
  
  /////////////////////
  // JOBS API ROUTES //
  /////////////////////

  /** Get all jobs with title passed in as a filter if not an empty string */

  static async getAllJobs(title) {
    const res = await this.request('jobs', {title});
    return res.jobs;
  }

  /** Get details on a job by id */

  static async getJob(id) {
    const res = await this.request(`jobs/${id}`);
    return res.job;
  }

  /////////////////////
  // USER API ROUTES //
  /////////////////////

  /** Get user by username */

  static async getUser(username) {
    const res = await this.request(`users/${username}`)
    return res.user
  }

  /** Register */

  static async signup(data) {
    const res = await this.request('auth/register', data, "post")
    return res.token
  }
  
  /** Login */

  static async login(data) {
    const res = await this.request('auth/token', data, "post")
    return res.token
  }

  /** Update profile */

  static async update(data, username) {
    const res = await this.request(`users/${username}`, data, "patch")
    return res.user
  }

  /** Apply to job */

  static async applyToJob(username, jobId) {
    await this.request(`users/${username}/jobs/${jobId}`, {}, "post")
  }
}

export default JoblyApi