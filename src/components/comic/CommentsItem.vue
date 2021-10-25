<template>
  <div class="comic-comments__item">
    <div class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img class="is-rounded" src="../../assets/images/logo-comments.jpg">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <div class="comic-comments__item-information">
            <span class="item-information__username has-text-weight-bold mr-1">
              {{ comments[id].username }}
            </span>
            <span class="item-information__date-publish has-text-weight-light">
              {{ comments[id].date }}
            </span>
          </div>
          <div class="comic-comments__item-content">
            {{ comments[id].text }}
          </div>
          <div class="comic-comments__item-rank">
            <span class="icon-text mr-2">
              <span class="icon" @click="rankComment({ like: comments[id].like + 1 })">
                <font-awesome-icon icon="thumbs-up" />
              </span>
              <span>{{ comments[id].like }}</span>
            </span>
            <span class="icon-text">
              <span class="icon" @click="rankComment({ dislike: comments[id].dislike + 1 })">
                <font-awesome-icon icon="thumbs-down" />
              </span>
              <span>{{ comments[id].dislike }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

import typesComic from '@/store/modules/comic/types';

export default {
  props: {
    id: { type: String, required: true },
  },
  computed: {
    ...mapState(typesComic.nameModule, [
      'comics',
      'comicId',
    ]),
    ...mapGetters(typesComic.nameModule, {
      comments: typesComic.getters.GET_COMIC_COMMENTS,
    }),
  },
  methods: {
    ...mapActions(typesComic.nameModule, {
      updateComic: typesComic.actions.UPDATE_COMIC_DATA,
    }),
    rankComment(likes) {
      this.updateComic({
        ...this.comics,
        [this.comicId]: {
          ...this.comics[this.comicId],
          comments: {
            ...this.comics[this.comicId].comments,
            [this.id]: {
              ...this.comics[this.comicId].comments[this.id],
              ...likes,
            },
          },
        },
      });
    },
  },
};
</script>
