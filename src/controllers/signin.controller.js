app.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    const SignUp = require('./signup.controller'); // Importar la clase SignUp
 
    // Buscar el usuario en la lista
    const user = user.find(user => user.email === email);
 
    if (!user || !(await bcrypt.compare(password, user.password))) {
       return res.status(401).json({ error: 'Credenciales incorrectas' });
    }
 
    // Generar un token JWT
    const token = jwt.sign({ username }, 'secreto', { expiresIn: '1h' });
 
    res.json({ message: 'Inicio exitoso', token });
 });