const { eTeachers } = require('../Models');

const createeTeacher = (data) => eTeachers.create(data);

const getOneeTeacher = (id) => eTeachers.findById({_id: id, is_active:true}).populate('posts');
const getAlleTeachers = () => eTeachers.find({is_active:true}).populate('posts');
const geteTeacherByEmail = (email) => eTeachers.findOne({email, is_active: true});
const updateeTeacher = (id, data) => eTeachers.findByIdAndUpdate(id,{...data},{new:true});
const deleteeTeacher = (id) => eTeachers.findByIdAndUpdate({_id:id, is_active:true},{is_active:false})

module.exports = {
    createeTeacher,
    updateeTeacher,
    deleteeTeacher,
    getAlleTeachers,
    getOneeTeacher,
    geteTeacherByEmail
};