const { generarJWT } = require('../helpers/jwt');

const index = (req, res) => {
    res.render('botonLogin.ejs');
};

const almacenarToken = async (req, res) => {
    const { chocoCookie } = req.body;
    const token = await generarJWT(chocoCookie);
    res.cookie('cookedToken', token, {
        httpOnly: true,
        maxAge: 60000
    });
    res.render('loged.ejs');
};

module.exports = {
    index,
    almacenarToken
};