import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(post) {
      var params = {
        title: this.get('title'),
        body: this.get('body'),
        category: this.get('category'),
        image: this.get('image'),
        name: this.get('name'),
        date: this.get('date')
      };
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);
    }
  }
});
