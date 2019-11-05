const {createeTeacher} = require('../../Services/eTeacherService');
const authenticate = require('../../utils/authenticate');
const createNeweTeacher = async(_, params) => {
    const eTeacher = await createeTeacher(params.data);
    return eTeacher;
};

const updateOneeTeacher = async (_, {id, data}) => {
    const eTeacher = await updateOneeTeacher(id, data);
    if (!eTeacher) throw new Error('eTeacher not exist');
    return eTeacher;
};

const deleteOneeTeacher = async (_,{id}) => {
    const eTeacher = await deleteOneeTeacher(id);
    if (!eTeacher) throw new Error('eTeacher not exist');
    return eTeacher;
};

const login = async (_, params) => {
    const token = await authenticate(params).catch(e => {throw e;});
    return {token: token, message: 'Login Succesful'};
};

module.exports = {
    createNeweTeacher,
    updateOneeTeacher,
    deleteOneeTeacher,
    login
};