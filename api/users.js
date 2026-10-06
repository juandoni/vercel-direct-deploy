module.exports = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    // Simulación de fuga de información si no se valida el token
    const users = [
        { id: 1, username: 'admin', role: 'superadmin', hash: '$2b$12$LJ3m4ys3Lk0TSw' },
        { id: 2, username: 'jdoni', role: 'sysadmin', hash: '$2b$12$XyZ987654321abc' }
    ];
    res.status(200).json({ success: true, data: users });
};
