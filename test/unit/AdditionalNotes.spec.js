import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import AdditionalNotes from '../../src/components/shared/AdditionalNotes.vue';

const localVue = createLocalVue();
localVue.use(Vuex);
let wrapper;

beforeEach(() => {
  wrapper = shallowMount(AdditionalNotes, {
    stubs: {
      portal: true
    }
  });
});

// TODO max.cloutier implement better test cases, cover the whole component and make sure it's regression proof

test('.label should exist', () => {
  expect(wrapper.find('.label').exists()).toBe(true);
});

test('should update hideNotesPopup to false', () => {
  wrapper.find('textarea').trigger('focus');
  expect(wrapper.vm.hideNotesPopup).toBe(false);
});

test('should show save button when hideNotesPopup is false', () => {
  const localThis = { hideNotesPopup: false }

  expect(AdditionalNotes.computed.isNotesPopupDisabled.call(localThis)).toBe(false);
});

test('should show save button when hideNotesPopup is true', () => {
  const localThis = { hideNotesPopup: true }

  expect(AdditionalNotes.computed.isNotesPopupDisabled.call(localThis)).toBe(true);
});
