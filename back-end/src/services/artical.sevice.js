const articalModel = require('../models/artical.model');

const updateArticalInfo = (body) => {
  const results = articalModel.updateArticalInfo(body);
  return results;
}

module.exports = {
  updateArticalInfo,
}
