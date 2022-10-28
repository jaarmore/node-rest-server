

const usuariosGet = (req, res) => {
    const query = req.query;
    res.json({
        msg: 'get API - Controller',
        query
    });
};

const usuariosPost = (req, res) => {
    // const data = req.body;
    const { nombre, edad } = req.body
    res.json({
        msg: 'post API - Controller',
        nombre,
        edad
    });
};

const usuariosPut = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'put API - Controller',
        id
    });
};

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'patch API - Controller'
    });
};

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API - Controller'
    });
};


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
};