'use strict';

/**
 *
 * @param name The name of Logging
 * @param args The arguments to stringify
 */
function consoleLog(name, args) {
  const current = new Date(Date.now()).toISOString();
  if (args) {
    console.info(`>> time: ${current}, name: ${name}, data: ${stringify(args)}`);
  } else {
    console.info(`>> time: ${current}, name: ${name}`);
  }
}

function stringify(args) {
  let cache = [];
  return JSON.stringify(args, (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (cache.includes(value)) {
        return;
      }
      cache.push(value);
    }
    return value;
  });
}

module.exports = {
  consoleLog
};