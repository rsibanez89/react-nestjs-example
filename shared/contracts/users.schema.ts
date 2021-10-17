import * as Joi from "joi";

export const UserSchema = Joi.object({
  id: Joi.number(),
  firstName: Joi.string().alphanum().min(3).max(30).required(),
  lastName: Joi.string().alphanum().min(3).max(30).required(),
  username: Joi.string().alphanum().min(3).max(30).required(),
  age: Joi.number(),
  email: Joi.string().email().required()
});
