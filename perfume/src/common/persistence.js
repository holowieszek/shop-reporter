const getAll = async (dbAdapter) => dbAdapter.getAll()

const create = async (dbAdapter, data) => dbAdapter.create(data)

module.exports = {
  getAll,
  create
}
