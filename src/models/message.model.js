const mongoose =  require('mongoose');
// message-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const message = new Schema({

    text: { type: String, required: true },    
    user_id: { type: mongoose.Schema.Types.ObjectId , required: true },
    user_username: { type: String },
    user_email: { type: String },
    user_avatar: { type: String },
    recipient: { type: String }

  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://github.com/Automattic/mongoose/issues/1251
  try {
    return mongooseClient.model('message');
  } catch (e) {
    return mongooseClient.model('message', message);
  }
};
