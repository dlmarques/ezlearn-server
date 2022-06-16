const Joi = require("joi");

// Register Validation
const registerValidation = data => {
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    username: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
  });
  return schema.validate(data);
};

const dataValidation = data => {
  const schema = Joi.object({
    id: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    role: Joi.string().required(),
  });
  return schema.validate(data);
};

const taskValidation = data => {
  const schema = Joi.object({
    id: Joi.string().required(),
    task: Joi.string().required(),
  });
  return schema.validate(data);
}

//Login Validation
const loginValidation = data => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
  });
  return schema.validate(data);
};



module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.dataValidation = dataValidation;
module.exports.taskValidation = taskValidation;
