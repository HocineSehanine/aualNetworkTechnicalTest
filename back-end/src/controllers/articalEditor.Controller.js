const articalSevice = require('../services/artical.sevice');
const articalModel = require('../models/artical.model');

let getArticalInfo = (req, res) => {
  const { query } = req;
  const articalInfo =  articalModel.getArticalInfo;
  try {
    if (articalInfo && query.id === '123') {
      return res.status(200).json(articalInfo);
    }
    return res.status(404).json({ message: 'articale  does not exist' });
  } catch ({ message }) {
    return res.status(404).json({ message });
  }
}

const updateArticalInfo = (req, res) => {
  const { body, query } = req;
  try {
    if (query.id === '123') {
      const updatedArtical = articalSevice.updateArticalInfo(body);
      return res.status(201).json(updatedArtical);
    }
    return res.status(404).json({ message: 'articale  does not exist' });
  } catch ({ message }) {
    return res.status(404).json({ message });
  }
}

module.exports = {
    getArticalInfo,
    updateArticalInfo,
  }
