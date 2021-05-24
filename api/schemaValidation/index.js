const yup = require("yup");

const authSchema = yup.object({
  username: yup
    .string()
    .trim()
    .min(5, "username must be at least 5 chars")
    .max(40, "username is too long")
    .required("username is required"),
  password: yup.string().trim().required("password is required"),
});
const loginSchema = yup.object({
  username: yup.string().trim().required("username is required"),
  password: yup.string().trim().required("password is required"),
});

const eventSchema = yup.object({
  event_name: yup.string(),
  event_date: yup.string(),
  event_time: yup.string(),
  event_location: yup.string(),
});

const itemSchema = yup.object({
  item_name: yup.string(),
});

module.exports = { authSchema, eventSchema, loginSchema, itemSchema };
