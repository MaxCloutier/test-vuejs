import mutations from '../../src/store/form/mutations';

test('"updateForm" update given field', () => {
  const state = {
    companyName: ''
  };

  mutations.updateForm(state, { name: 'companyName', value: 'test' });
  expect(state.companyName).toBe('test');
});
