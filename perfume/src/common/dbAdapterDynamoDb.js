const records = [
  { id: 1, title: 'Lorem Ipsum' },
  { id: 2, title: 'Lorem Ipsum' },
  { id: 3, title: 'Lorem Ipsum' },
  { id: 4, title: 'Lorem Ipsum' },
]

const getAll = async () => records

const create = async (data) => {
  console.log(data);
  return data;
}

const getById = async (id) => records.filter((record) => record.id === id)

const update = async (id, data) => {
  console.log(id, data)
  const result = {
    message: 'Updated',
    data
  }
  return result
}

const remove = async (id) => {
  console.log(id)
  const result = {
    message: 'Removed',
    ...id
  }
  return result
}

module.exports = {
  getAll,
  create,
  getById,
  update,
  remove
}
