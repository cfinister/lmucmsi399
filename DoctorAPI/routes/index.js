const express = require('express');
const faker = require('faker');

const router = express.Router();
//
// router.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
// });

function makeFakeDoctor() {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    licensed: faker.date.past(),
    address: faker.address.city(),
  }
}

function makeFakePatient() {
  return {
    name: faker.name.findName(),
    phone: faker.phone.phoneNumber(),
    birthday: faker.date.past(),
    insurance: faker.company.companyName(),
    address: faker.address.city(),
  }
}

const allDoctors = Array(20).fill(0).map(makeFakeDoctor);
const allPatients = Array(20).fill(0).map(makeFakePatient);

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.get('/doctornames', (req, res) => {
  const name = req.query.name;
  console.log(allDoctors);
  res.header('Access-Control-Allow-Origin', '*');
  res.json({ data: allDoctors });
});

module.exports = router;
