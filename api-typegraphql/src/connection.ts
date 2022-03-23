import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost', {
  dbName: 'test',
  user: 'admin',
  pass: 'pass'
});
