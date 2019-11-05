const eTeacherResolver = require('./eTeacherResolver');
const {
    EmailAdressResolver,
    URLResolver
} = require('graphql-scalars');

module.exports = {
    EmailAdress: EmailAdressResolver,
    URL: URLResolver,
    Query:{
        ...eTeacherResolver.Query
    },
    Mutations:{
        ...eTeacherResolver.Mutation
    }
};