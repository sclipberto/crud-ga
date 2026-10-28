const mongoose = require('mongoose');
// const mongoURI = 'mongodb+srv://crudapp:crudapp@cluster0.iydyt0r.mongodb.net/?retryWrites=true&w=majority';
const host = process.env.MONGODB_HOST;
const user=process.env.MONGODB_USER;
const pass=process.env.MONGODB_PASS;
const mongoURI = `mongodb://${user}:${pass}@${host}:27017/crud?authSource=admin`;
console.log(mongoURI);

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
