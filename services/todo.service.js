const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAll = () => {
  return prisma.todo.findMany();
};

exports.getById = (id) => {
  return prisma.todo.findUnique({ where: { id } });
};

exports.create = (data) => {
  return prisma.todo.create({ data });
};

exports.update = (id, data) => {
  return prisma.todo.update({
    where: { id },
    data,
  }).catch(() => null); // If not found
};

exports.delete = (id) => {
  return prisma.todo.delete({
    where: { id },
  }).catch(() => null); // If not found
};
