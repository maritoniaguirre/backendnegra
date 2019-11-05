const bcrypt = require ('bcrypt');
const {geteTeacherByEmail} = require('../Services/eTeacherService');
const createToken = require('./createToken');

const authenticate = ({email, contrasena}) => {
    return new Promise((resolve,reject) => {
        geteTeacherByEmail(email).then( user => {
            if(!user) reject(new Error('eTeacher not Exist'));
            bcrypt.compare(contrasena, user.contrasena, (err,isValid) => {
                if(err) reject(new Error('Error to compare'));
                isValid ? resolve(createToken(user)) 
                    : reject(new Error('Incorrect Password'));
            });
        });
    });
};

module.exports = authenticate;