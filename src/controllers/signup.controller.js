const express = require('express');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());

const users = [];

app.post('/signup', async (req, res) => {
   const { nombre, apellido, email, password, fechaCumpleanios } = req.body;

   // Verificar si el usuario ya existe
   if (users.find(correo => user.correo === correo)) {
      return res.status(409).json({ error: 'Usuario ya registrado' });
   }

   // Validar longitud de contraseña
   if (password.length < 12) {
      return res.status(400).json({ error: 'La contraseña debe tener al menos 12 caracteres' });
   }

   // Validar al menos 1 carácter en mayúscula y 1 número en la contraseña
   if (!/[A-Z]/.test(password) || !/\d/.test(password)) {
      return res.status(400).json({ error: 'La contraseña debe contener al menos 1 carácter en mayúscula y 1 número' });
   }

   // Validar que la contraseña no sea igual al nombre o apellidos
   if (password.toLowerCase() === firstName.toLowerCase() || password.toLowerCase() === lastName.toLowerCase()) {
      return res.status(400).json({ error: 'La contraseña no debe ser igual al nombre o apellidos' });
   }

   // Validar estructura del correo electrónico y unicidad
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Correo electrónico no tiene una estructura válida' });
   }

   // Verificar si el correo electrónico ya está registrado
   if (users.find(user => user.email === email)) {
      return res.status(409).json({ error: 'Correo electrónico ya registrado' });
   }

   // Cifrar la contraseña antes de almacenarla
   const hashedPassword = await bcrypt.hash(password, 10);

   // Almacenar el usuario en la lista
   users.push({ correo, password: hashedPassword });

   res.status(201).json({ message: 'Usuario registrado exitosamente' });
});

app.listen(3000, () => {
   console.log('Servidor escuchando en el puerto 3000');
});