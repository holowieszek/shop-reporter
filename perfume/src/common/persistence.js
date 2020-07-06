const getAll = async (dbAdapter) => dbAdapter.getAll()

const create = async (dbAdapter, data) => dbAdapter.create(data)

const getById = async (dbAdapter, id) => dbAdapter.getById(id)

const update = async (dbAdapter, id, data) => dbAdapter.update(id, data)

const remove = async (dbAdapter, id) => dbAdapter.remove(id)

module.exports = {
  getAll,
  create,
  getById,
  update,
  remove
}
