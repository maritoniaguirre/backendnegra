const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const eTeacherSchema = new Schema({
    correo:{
        type:String,
        required:true
    },
    contrasena:{
        type:String,
        required:true
    },
    nombre:{
        type:String,
        required:true
    },
    apellidos:{
        type:String,
        required:true
    },
    gradomaximo:{
        type:Date,
        required:true
    },
    areas:{
        type:String,
        required:true
    },
    experiencia:{
        type:String,
        required:true
    },
    acercaDe:{
        type:String,
    },
    celular:{
        type:Number,
        required:true
    },
    direccion:{
        type:String,
        required:true
    },
    experiencia:{
        type:String,
        required:true
    },
    ciudad:{
        type:String,
        required:true
    },
    zona:{
        type:String,
        required:true
    },
    cp:{
        type:Number,
        required:true
    },
    profile_pic:{
        type:String
    },
    is_active:{
        type:Boolean,
        default:true
    }
},{
        timestamps:true
    });

AuthorSchema.pre('save',function(next){
    const eTeacher = this;
    const SALT_FACTOR = 10;
    if(!eTeacher.isModified('contrasena')) { return next();}
    bcrypt.genSalt(SALT_FACTOR, function (err, salt){
        if(err) return next(err);
        bcrypt.hash(eTeacher.contrasena, salt, function(error, hash){
            if(error) return next(err);
            eTeacher.contrasena = hash;
            next();
        });
    });
});

module.exports = mongoose.model('author', eTeacherSchema);