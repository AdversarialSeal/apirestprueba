app.post('/api/signin', (req, res) => {
    const { email, password } = req.body;
 
    // Buscar el usuario por correo electrónico en la base de datos
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
       if (err) {
          console.error('Error al buscar el usuario en la base de datos:', err);
          return res.status(500).json({ error: 'Error interno del servidor' });
       }
 
       const user = results[0];
 
       if (!user || !(bcrypt.compareSync(password, user.password))) {
          return res.status(401).json({ error: 'Credenciales incorrectas' });
       }
 
       // Generar un token JWT
       const token = jwt.sign({ username: user.username, email: user.email }, 'secreto', { expiresIn: '1h' });
 
       // Devolver la información del usuario junto con el token
       res.json({ user, token });
    });
 });

