const express = require('express');

const app = express();
const port = 3010;

const animals = ['hoa', 'hao', 'me', 'quiero', 'pegar', 'un', 'tiro'];

app.get('/ejemplo', (req, res) => {
  return res.send('Chao');
});
app.get('/animals', (req, res) => {
  return res.json({
    ok: true,
    animals,
  });
});

app.get('/animals/:animal', (req, res) => {
  const animalName = req.params.animal;
  const foundAnimal = animals.find((animal) => animal.toLowerCase() === animalName.toLowerCase());
  if (!foundAnimal) {
    return res.json({
      message: 'No se enconrto el aninmal',
    });
  }
  return res.json({
    animal: foundAnimal,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
