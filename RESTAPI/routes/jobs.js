const route = require('express').Router();
const jobs = require('../controllers/jobController.js');


/*----- GET ALL JOBS ------*/
route.get("/", jobs.getJobs);

/*----- GET SINGLE JOB ------*/
route.get("/:id", jobs.getJob);


module.exports = route;