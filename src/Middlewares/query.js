'use strict';

import url from 'url';
import qs from 'querystring';

module.exports = (req, res, next) => {
  req.query = qs.parse(url.parse(req.url).query);
  next();
};