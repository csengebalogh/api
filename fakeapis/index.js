const projects = require('./oportfolio/projects.json');
const users = require('./oportfolio/users.json');


module.exports = () => ({
  portfolio: {
    projects: projects,
    users: users
  }
});