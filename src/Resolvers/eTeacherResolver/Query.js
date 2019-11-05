const {
    getAlleTeachers,
    getOneeTeacher
} = require('../../Services/eTeacherService');

const geteTeachers = async() => {
    const eTeachers = await getAlleTeachers();
    return eTeachers;
};

const getSingleeTeacher = async (_, params) => {
    const eTeacher = await getOneeTeacher(params.id);
    if(!eTeacher) throw new Error('eTeacher not exist');
    return eTeacher;
}

module.exports = {
   geteTeachers,
   getSingleeTeacher
};