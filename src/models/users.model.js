// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const users = new mongooseClient.Schema({
    
    username: { type: String, unique: true },
    email: {type: String, unique: true, lowercase: true},
    password: { type: String },
    avatar: { type: String }
  
  
  }, {
    timestamps: true
  });

  return mongooseClient.model('users', users);
};
