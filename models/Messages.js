const connection = require('./connection');

const saveMessage = async ({ chatMessage, nickname, timestamp }) => (
  connection().then((db) => db.collection('messages')
    .insertOne({ chatMessage, nickname, timestamp }))
);

const getAll = async () => {
  const allMessages = await connection().then((db) => db.collection('messages')
    .find().toArray());

  return allMessages;
};

module.exports = {
  saveMessage,
  getAll,
};
