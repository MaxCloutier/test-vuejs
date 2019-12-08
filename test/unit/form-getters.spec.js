import getters from '../../src/store/form/getters';

test('"companyName" should return companyName from the state', () => {
  const state = {
    companyName: 'Company Name',
    companySpend: '5555',
    companySpendAbility: '555-5555',
    companySpendAbilityMin: '555',
    companySpendAbilityMax: '5555',
    additionalNotes: 'Some Notes',
  };

  expect(getters.companyName(state)).toBe(state.companyName);
});

test('"companySpend" should return companySpend from the state', () => {
  const state = {
    companyName: 'Company Name',
    companySpend: '5555',
    companySpendAbility: '555-5555',
    companySpendAbilityMin: '555',
    companySpendAbilityMax: '5555',
    additionalNotes: 'Some Notes',
  };

  expect(getters.companySpend(state)).toBe(state.companySpend);
});

test('"companySpendAbility" should return companySpendAbility from the state', () => {
  const state = {
    companyName: 'Company Name',
    companySpend: '5555',
    companySpendAbility: '555-5555',
    companySpendAbilityMin: '555',
    companySpendAbilityMax: '5555',
    additionalNotes: 'Some Notes',
  };

  expect(getters.companySpendAbility(state)).toBe(state.companySpendAbility);
});

test('"companySpendAbilityMin" should return companySpendAbilityMin from the state', () => {
  const state = {
    companyName: 'Company Name',
    companySpend: '5555',
    companySpendAbility: '555-5555',
    companySpendAbilityMin: '555',
    companySpendAbilityMax: '5555',
    additionalNotes: 'Some Notes',
  };

  expect(getters.companySpendAbilityMin(state)).toBe(state.companySpendAbilityMin);
});

test('"companySpendAbilityMax" should return companySpendAbilityMax from the state', () => {
  const state = {
    companyName: 'Company Name',
    companySpend: '5555',
    companySpendAbility: '555-5555',
    companySpendAbilityMin: '555',
    companySpendAbilityMax: '5555',
    additionalNotes: 'Some Notes',
  };

  expect(getters.companySpendAbilityMax(state)).toBe(state.companySpendAbilityMax);
});

test('"additionalNotes" should return additionalNotes from the state', () => {
  const state = {
    companyName: 'Company Name',
    companySpend: '5555',
    companySpendAbility: '555-5555',
    companySpendAbilityMin: '555',
    companySpendAbilityMax: '5555',
    additionalNotes: 'Some Notes',
  };

  expect(getters.additionalNotes(state)).toBe(state.additionalNotes);
});
