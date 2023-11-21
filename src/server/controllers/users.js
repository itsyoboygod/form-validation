const dbOperations = require('../dboperations')

module.exports = {
    async insertUsers(req, res) {
        const { username, email, pwd } = req.body
        return res.json(JSON.stringify(dbOperations.insertUsers(username, email, pwd)))
    },
    async selectUsers(req, res) {
        return res.json( await dbOperations.selectUsers())
    }
}