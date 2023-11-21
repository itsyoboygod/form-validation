const dbConfig = require('./connect')

async function insertUsers(username, email, pwd) {
    try {
        const insUser = await dbConfig.query(`INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${pwd}');`)
        return insUser;
    } catch (error) {
        console.error(error);
    }
}

function selectUsers() {
    return new Promise((resolve, reject) => {
        try {
            dbConfig.query('SELECT * FROM users', function (error, results, fields) {
                if (error) throw error;
                console.log(results)
                resolve(results)
            });
        } catch (error) {
            console.error(error);
            reject(error)
        }
    })
}

module.exports = {
    insertUsers,
    selectUsers
}