const authMiddleware = require('./authMiddleware');

const users = require('./userRoutes');

function routes(app) {
    app.use('/users', users);

    app.get('/', authMiddleware.auth, (req, res) => {
        res.send('Hello World!')
    })

}

module.exports = routes;