const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bc-applications');

const applicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: [true, 'Email address is required'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, '{VALUE} is not a valid email address']
  },
  graduationYear: {
    type: Number,
    required: [true, 'Graduation year is required'],
    min: [2022, '{VALUE} is not a valid graduation year'],
  },
  gpa: {
    type: Number,
    required: [true, 'GPA is required'],
    min: [0, 'GPA must be greater than zero, got {VALUE}'],
    max: [4.3, 'GPA cannot be greater than 4.3, got {VALUE}']
  },
  local: Boolean,
  discoverySource: String,
  resume: String,
  blankResume: {
    type: String,
    required: [true, 'Blank resume is required'],
  }
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = {
  Application: Application
}