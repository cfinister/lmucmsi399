const express = require('express');
const faker = require('faker');

const router = express.Router();

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
});

function makeFakeDoctor() {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    licensed: faker.date.past(),
    address: faker.address.city(),
  }
}

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.get('/doctornames', (req, res) => {
  res.json({ data: Array(20).fill(0).map(makeFakeDoctor) });
});

module.exports = router;
