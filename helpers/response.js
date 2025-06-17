// helpers/response.js
exports.success = (res, data, code = 200) => {
    res.status(code).json({ status: 'success', data });
  };
  
  exports.error = (res, message, code = 500) => {
    res.status(code).json({ status: 'error', message });
  };
  