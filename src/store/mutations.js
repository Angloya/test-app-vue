export default {
  updatePersons(state, _persons) {
    state.persons = _persons
  },
  changePersonSide(state, [_personId, _isPersonOnRightSide]) {
    let person = state.persons[_personId]
    person.isRightSide = !_isPersonOnRightSide
  },
  setLoading(state) {
    state.isLoading = !state.isLoading
  }
}