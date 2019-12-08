export default {
  updateForm(state, fieldObj) {
    const { value, name } = fieldObj;

    state[name] = value;
  }
}
