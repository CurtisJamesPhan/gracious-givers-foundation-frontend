"use strict";
const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

module.exports = {
  //   async create(ctx) {
  //     //We can access the logged in user under ctx
  //     //We have access to request and response
  //     //const { id } = ctx.state.user; //Grabing the user id
  //     //Remember we want to automatically attach the user who created this post it and remeber that anytime we reference an id of an object it will automatically fetch/populate that user to that field
  //     //Accessing the form values/input names ctx.requst.body so you can destructure this and get the individual field values
  //     const { title, content } = ctx.request.body;
  //     const { id } = ctx.state.user;
  //     //Build up object and pass it to create Service
  //     const post = {
  //       title: title,
  //       content: content
  //     };
  //     console.log("title", title);
  //     let entity;
  //     if (ctx.is("multipart")) {
  //       //This is for file uploads
  //       const { data, files } = parseMultipartData(ctx);
  //       entity = await strapi.services.post.create(data, { files });
  //     } else {
  //       entity = await strapi.services.post.create(post);
  //     }
  //     return sanitizeEntity(entity, { model: strapi.models.post });
  //   }
};
