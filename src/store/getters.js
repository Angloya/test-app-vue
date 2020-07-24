export default {
  getFilterPersons: state => value => {
    return state.persons.filter(person => person.name.toLowerCase().includes(value.toLowerCase()))
  },
  getRightSidePersons: state => () => {
    return state.persons && state.persons.filter(person => person.isRightSide)
  },
  getFilterRightSidePersons: state => value => {
    let rightSidePersons = state.persons.filter(person => person.isRightSide)
    return rightSidePersons.filter(person => person.name.toLowerCase().includes(value.toLowerCase()))
  },
  getPerson: state => value => {
    return state.persons.find(person => person.id === value)
  }
}