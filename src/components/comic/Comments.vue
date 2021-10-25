<template>
  <div class="comic-comments__container">
    <div class="comic-comments__counter mb-3 has-text-weight-semibold">
      {{ counter }} comentarios
    </div>
    <div class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img class="is-rounded" src="../../assets/images/logo-comments.jpg">
        </p>
      </figure>
      <div class="media-content comic-comments__form">
        <div class="control">
          <textarea class="textarea has-fixed-size" v-model="partialComment" rows="2" />
        </div>
        <div class="comic-comments__form-actions mt-2 is-flex is-justify-content-end">
          <button class="is-small button" @click="partialComment = ''">Cancelar</button>
          <button
            @click="saveComment"
            class="is-small button is-success ml-2"
          >Enviar</button>
        </div>
      </div>
    </div>
    <div class="comic-comments__box">
      <comment-item
        :key="idx"
        :id="commentId"
        class="comic-comments__item"
        v-for="(commentId, idx) in commentsId"
      />
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { mapActions, mapGetters, mapState } from 'vuex';

import generator from '@/mixins/randomId';
import CommentItem from './CommentsItem.vue';

import typesComic from '@/store/modules/comic/types';

export default {
  data() {
    return {
      partialComment: '',
      loadedComment: false,
    };
  },
  mixins: [generator],
  components: {
    CommentItem,
  },
  computed: {
    ...mapState(typesComic.nameModule, [
      'comics',
      'comicId',
    ]),
    ...mapGetters(typesComic.nameModule, {
      counter: typesComic.getters.GET_TOTAL_COMMENTS_USER,
      commentsId: typesComic.getters.GET_COMIC_COMMENTS_ID,
    }),
  },
  methods: {
    ...mapActions(typesComic.nameModule, {
      updateComic: typesComic.actions.UPDATE_COMIC_DATA,
    }),
    saveComment() {
      this.updateComic({
        ...this.comics,
        [this.comicId]: {
          ...this.comics[this.comicId],
          comments: {
            ...this.comics[this.comicId].comments,
            [this.generateRandomIdObject()]: {
              like: 0,
              dislike: 0,
              username: 'Usuario DEMO',
              text: this.partialComment,
              date: moment().format('DD/MM/YYYY HH:mm'),
            },
          },
        },
      });
      setTimeout(() => { this.partialComment = ''; }, 500);
    },
  },
};
</script>
