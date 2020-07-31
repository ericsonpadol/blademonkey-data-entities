const mongoose = require('mongoose');
const config = require('config');

const logger = require('./logger');

const host = config.get('mongodb.uri');

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(host, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    logger.info(connection);
  } catch (error) {
    logger.error(error);

    // exit process on db failure
    process.exit(1);
  }
};

module.exports = {
  connectDB,
};
