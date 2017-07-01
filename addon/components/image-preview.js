import Component from 'ember-component';
import layout from '../templates/components/image-preview';
import observer from 'ember-metal/observer';

export default Component.extend({
  layout,
  previewOpen: false,
  maxSize: false,

  onOpen: observer('previewOpen', function() {
    if (this.get('previewOpen')) {
      this.set('maxSize', false);
    }
  }),

  actions: {
    closeDialog() {
      this.setProperties({ previewOpen: false });
    },

    onImageDblClick() {
      this.toggleProperty('maxSize');
    },
  },
});
