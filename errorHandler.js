function errorHandler(res, headers) {
  res.writeHead(404, headers);
  res.write(JSON.stringify({
    'status': 'failed',
    'message': '欄位填寫錯誤, 或路徑錯誤'
  }));
  res.end();
}

module.exports = errorHandler;