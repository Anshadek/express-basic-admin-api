// middleware/todo.validation.js
// middleware/todo.validation.js
const { body, validationResult } = require('express-validator');

exports.validateTodo = [
  body('title')
    .notEmpty()
    .withMessage('Title is required')
    .isLength({ min: 3 })
    .withMessage('Title must be at least 3 characters long'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        status: 'error',
        errors: errors.array(),
      });
    }
    next();
  },
];
