const getAll = async () => {
  const result = [
    { id: 1, title: 'Lorem Ipsum' },
    { id: 2, title: 'Lorem Ipsum' },
    { id: 3, title: 'Lorem Ipsum' },
    { id: 4, title: 'Lorem Ipsum' },
  ]
  return result
}

const create = async (data) => {
  console.log(data);
  return data;
}
module.exports = {
  getAll,
  create
}
