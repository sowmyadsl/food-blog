import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    imageShow: function(){
      this.set('isImageShowing', true);
    },
    imageHide: function(){
      this.set('isImageShowing', false);
    },
    delete(post){
      if(confirm('Are you sure want to delete this post?')){
        this.sendAction('destroyPost', post);
      }
    }
  }
});
