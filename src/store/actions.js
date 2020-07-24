import { Persons } from './../utils/persons'

export default {
  getPersons({commit}) {
    commit('setLoading')
    let timeout = setTimeout(() => {
      let persons = Persons
      commit('updatePersons', persons)
      commit('setLoading')
      clearTimeout(timeout)
    }, 3000)
  },
  changePersonSide ({commit, state}, _person) {
    const personId = state.persons.findIndex(person => person.id === _person.id)
    commit('changePersonSide', [personId, _person.isRightSide])
  }
}