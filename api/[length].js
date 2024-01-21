const { send } = require('micro');
const { promisify } = require('util');
const { randomBytes } = require('crypto');

const randomBytesAsync = promisify(randomBytes);

module.exports = async (req, res) => {
  const length = parseInt(req.query && req.query.length);
  if (!length) {
    res.statusCode = 301;
    res.setHeader('Location', `/32`);
    res.end();
    return;
  }

  const randomString = (await randomBytesAsync(Math.ceil(length/2)))
    .toString('hex')
    .slice(0,length);
  send(res, 200, randomString);
}

{
      "icons": [
        { "src": "/favicon.ico", "type": "image/x-icon", "sizes": "16x16 32x32" },
        { "src": "/icon-192.png", "type": "image/png", "sizes": "192x192" },
        { "src": "/icon-512.png", "type": "image/png", "sizes": "512x512" },
        { "src": "/icon-192-maskable.png", "type": "image/png", "sizes": "192x192", "purpose": "maskable" },
        { "src": "/icon-512-maskable.png", "type": "image/png", "sizes": "512x512", "purpose": "maskable" }
      ]
    }
