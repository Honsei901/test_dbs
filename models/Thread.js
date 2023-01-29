const mongoose = require('mongoose');

const ThreadSchema = new mongoose.Schema({
  awbNo: {
    type: String,
    required: true,
  },
  exchangeCd: {
    type: String,
    required: true,
  },
  impCode: {
    type: String,
    required: true,
  },
  impCodeS: {
    type: String,
    required: true,
  },
  discMark: {
    type: String,
    required: true,
  },
  impTel: {
    type: String,
    required: true,
  },
  impZip: {
    type: String,
    required: true,
  },
  impName: {
    type: String,
    required: true,
  },
  impAddr01: {
    type: String,
    required: true,
  },
  itemCode: {
    type: String,
    required: true,
  },
  countCd: {
    type: String,
    required: true,
  },
  countPr: {
    type: String,
    required: true,
  },
  quant1: {
    type: String,
    required: true,
  },
  quant1Cd: {
    type: String,
    required: true,
  },
  originCountry: {
    type: String,
    required: true,
  },
  origName: {
    type: String,
    required: true,
  },
  origAd01: {
    type: String,
    required: true,
  },
  accountNum: {
    type: String,
    required: true,
  },
  ips1: {
    type: String,
    required: true,
  },
  ips2: {
    type: String,
    required: true,
  },
  ips3: {
    type: String,
    required: true,
  },
  ips4: {
    type: String,
    required: true,
  },
  valuation: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Thread', ThreadSchema);
