const { returnResponse } = require('../common/returnResponse');

const invoke = async () => {
  const result = {
    function: 'getAllPerfume',
  };

  return returnResponse(result);
};

exports.invoke = invoke;
