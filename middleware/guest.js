import Vue from 'vue';

export default function({ store, redirect }) {
  if (store.getters['isAuthenticated']) {
    return redirect('/');
  }
}