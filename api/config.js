module.exports = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    // Simulación de respuesta 403 para rutas protegidas
    res.status(403).json({ 
        error: 'Forbidden', 
        message: 'Acceso denegado. Se requiere cabecera X-Admin-Token.' 
    });
};
