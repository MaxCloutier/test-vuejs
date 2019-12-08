<template>
  <portal to="popup" :disabled="isNotesPopupDisabled">
    <div v-if="!isNotesPopupDisabled" class="popup-overlay"></div>
    <div v-bind:class="{ 'popup-wrapper': !isNotesPopupDisabled }">
      <button
        type="button"
        class="close-notes-btn"
        @click="closePopup"
        v-if="!isNotesPopupDisabled">
        ×
      </button>
      <div class="input-wrapper">
        <label>
          <span class="label">Notes</span>
            <textarea
              v-model="value"
              name="additionalNotes"
              placeholder="e.g. Good Tech Company"
              @focus="focusNotesEvent">
            </textarea>
        </label>
      </div>
      <button
        type="button"
        class="save-notes-btn"
        @click="onNotesSave"
        v-if="!isNotesPopupDisabled">
        Save
      </button>
    </div>
  </portal>
</template>

<script>
/*
  TODO max.cloutier Would make a popup component instead of using this one and having buttons and lot of conditions in the template
  and use slot to pass the textarea to the popup component
*/

export default {
  name: 'AdditionalNotes',
  computed: {
    isNotesPopupDisabled() {
      return this.hideNotesPopup;
    }
  },
  data: () => ({
    value: '',
    hideNotesPopup: true
  }),
  methods: {
    closePopup() {
      this.hideNotesPopup = true;
    },
    onNotesSave() {
      this.hideNotesPopup = true;
      this.$store.commit('updateForm', { name: 'additionalNotes', value: this.value });
    },
    focusNotesEvent() {
      this.hideNotesPopup = false;
      // TODO max.cloutier If I had more time I'd look into focusing the input in the popup after opening
    }
  }
};
</script>

<style scoped>
  @import '../../styles/inputs';
  @import '../../styles/variables';

  .popup-overlay {
    background: #000;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.2;
  }

  .popup-wrapper {
    background: #fff;
    border-radius: $borderRadius;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
    padding: 30px;
    left: 50%;
    position: fixed;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 50%;

    .close-notes-btn {
      background: none;
      border: none;
      color: $bgGray;
      cursor: pointer;
      font-size: 24px;
      font-weight: 600;
      line-height: 0;
      padding: 17px 10px;
      position: absolute;
      right: 20px;
      top: 15px;
      transition: color $transitionTime;

      &:hover {
        color: $inputLabelGray;
      }
    }

    .save-notes-btn {
      background: $lightBlue;
      border: 0;
      border-radius: $borderRadius;
      color: #fff;
      cursor: pointer;
      float: right;
      font-size: 12px;
      font-weight: 500;
      margin-top: 30px;
      padding: 10px 30px;
      transition: background $transitionTime;

      &:hover {
        background: $darkBlue;
      }
    }

    .input-wrapper {
      margin-top: 0;
    }

    /deep/ .label {
      margin-bottom: 25px;
    }
  }
</style>
