import './styles/app.css';
import Vue from 'vue/dist/vue.js';
import { debounce } from 'lodash';
// https://forum-archive.vuejs.org/topic/4399/vue-2-0-vue-warn-failed-to-mount-component-template-or-render-function-not-defined-found-in-root-instance/2

const apiUrl = 'http://www.omdbapi.com/?t='
window.onload = () => {
  const app = new Vue({
    el: '#movie-app',
    data: {
      input: 'star wars',
      movie: null
    },
    methods: {
      fetchData: debounce((e) => {
        const movieTitle = e.target.value.split(' ').join('+');;
        const xhr = new XMLHttpRequest();
        const self = this;
        xhr.open('GET', `${apiUrl}${movieTitle}&r=json`);
        xhr.onload = () => {
          self.movie = JSON.parse(xhr.responseText);
          console.warn(self.movie);
        }
        xhr.send()
      }, 500)
    }
  });
};
