'use strict';

import { HTTP_STATUS_CODES } from '../Utils/constant';

/**
* Send a response Text
*/
module.exports = (req, res, next) => {
  res.send = (data) => {
    res.statusCode = res.statusCode || HTTP_STATUS_CODES.OK;
    res.end(data);
  };
  next();
};
