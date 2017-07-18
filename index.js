var ACCOUNT='tallinn_photo_stream';
var Client = require('instagram-private-api').V1;
var device = new Client.Device(ACCOUNT);
var storage = new Client.CookieMemoryStorage();

// And go for login
Client.Session.create(device, storage, ACCOUNT, process.env.PASSWORD)
  .then(function(session) {
     return [session];
   })
  .spread(function(session) {
    Client.Upload.photo(session, './webcam.jpg')
      .then(function(upload) {
        console.log(upload.params.uploadId);
        return Client.Media.configurePhoto(session, upload.params.uploadId, '#tallinn');
      })
      .then(function(medium) {
        // we configure medium, it is now visible with caption
        console.log(medium.params);
      });
  });
