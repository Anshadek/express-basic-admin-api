const todoService = require('../services/todo.service');
const response = require('../helpers/response');

// Get all todos
exports.getAllTodos = async (req, res) => {
  try {
    const todos = await todoService.getAll();
    response.success(res, todos);
  } catch (error) {
    response.error(res, error.message);
  }
};

// Get single todo by ID
exports.getTodoById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const todo = await todoService.getById(id);
    if (!todo) {
      return response.error(res, 'Todo not found', 404);
    }
    response.success(res, todo);
  } catch (error) {
    response.error(res, error.message);
  }
};

// Create new todo
exports.createTodo = async (req, res) => {
  try {
    const todo = await todoService.create(req.body);
    response.success(res, todo, 201);
  } catch (error) {
    response.error(res, error.message);
  }
};

// Update todo by ID
exports.updateTodo = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const updated = await todoService.update(id, req.body);
    if (!updated) {
      return response.error(res, 'Todo not found', 404);
    }
    response.success(res, updated);
  } catch (error) {
    response.error(res, error.message);
  }
};

// Delete todo by ID
exports.deleteTodo = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const deleted = await todoService.delete(id);
    if (!deleted) {
      return response.error(res, 'Todo not found', 404);
    }
    response.success(res, deleted);
  } catch (error) {
    response.error(res, error.message);
  }
};
