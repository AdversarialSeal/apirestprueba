// Endpoint SignUp
app.post('/api/signup', async (req, res) => {
    const { username, password, firstName, lastName, email } = req.body;
 
    try {
       const result = await signUpInstance.signUpUser(username, password, firstName, lastName, email);
       res.status(201).json(result);
    } catch (error) {
       res.status(400).json({ error: error.message });
    }
 });