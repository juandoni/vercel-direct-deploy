module.exports = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({ 
        status: 'operational', 
        environment: 'production', 
        server_time: new Date().toISOString() 
    });
};
