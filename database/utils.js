const db = require('./index.js');

const getApplications = async () => {
  let applications = await db.Application.find().lean();
  return applications;
}

module.exports = {
  getApplications: getApplications
}