const jwt = require('jsonwebtoken');

const generarJWT = (uid, name) => {

    return new Promise((resolve, reject) => {

        const payload = { uid, name };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '1m' },
            (error, token) => {
                if (error) {
                    console.log(error);
                    reject('NO GENERADO');
                };
                resolve(token);
            });
    });
};

module.exports = {
    generarJWT
};