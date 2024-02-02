app.get('/api/me', authenticate, (req, res) => {
    res.json({ user: req.user });
 });