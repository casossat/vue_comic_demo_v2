<template>
  <div class="comic-preview__container">
    <div class="comic-preview__layout p-5">
      <div
        class="
            mb-5
            is-flex
            is-align-items-center
            comic-preview__header
            is-justify-content-space-between
          "
        >
          <div class="is-flex is-align-items-center">
            <div class="title is-6 mb-0">{{ comic.title }}</div>
            <div class="comic-preview__rater ml-2">
              <font-awesome-icon
                :key="i"
                :rate="i"
                icon="star"
                v-for="i in 5"
                @click="updateComicRank(i)"
                class="comic-preview__rater"
                :class="{
                  'comic-preview__rater--selected':
                    i <= hoverable
                    || (hoverable === 0 && i <= comicRate)
                }"
                @mouseover="hoverable = i"
                @mouseleave="hoverable = 0"
              />
            </div>
          </div>
        <button class="button is-small is-primary" @click="fetchNewDataComic()">
          <font-awesome-icon icon="chevron-right" />
        </button>
      </div>
      <div class="comic-preview__img-container">
        <img :src="comic.img" :alt="comic.alt">
      </div>
    </div>
    <div class="comic-preview__information mt-2">
      <div class="comic-preview__date-publish has-text-grey-light has-text-weight-semibold">
        Publicado el {{ datePublish }}
      </div>
      <div class="comic-preview__transcription is-size-7" v-if="comic.transcript">
        <span class="has-text-weight-bold">Transcripción: </span>
        <span class="is-italic">{{ comic.transcript }}</span>
      </div>
      <div class="comic-preview__link my-2">
        <div class="control has-icons-left has-icons-right">
          <input type="text" class="input is-small" :value="comic.img" readonly>
          <span class="icon is-small is-left">
            <font-awesome-icon icon="link" />
          </span>
          <span class="icon is-small is-right">
            <font-awesome-icon icon="copy" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';

import generator from '@/mixins/randomId';
import typesComic from '@/store/modules/comic/types';

export default {
  data() {
    return {
      hoverable: 0,
    };
  },
  mixins: [generator],
  methods: {
    ...mapActions(typesComic.nameModule, {
      updateComic: typesComic.actions.UPDATE_COMIC_DATA,
      selectRandomId: typesComic.actions.UPDATE_COMIC_ID,
      fetchComicById: typesComic.actions.FETCH_COMIC_BY_ID,
    }),
    fetchNewDataComic() {
      const newId = this.generateRandomId();
      this.selectRandomId(newId);
      this.fetchComicById();
    },
    updateComicRank(idx) {
      this.updateComic({
        ...this.comics,
        [this.comicId]: {
          ...this.comics[this.comicId],
          rate: idx,
        },
      });
    },
  },
  computed: {
    ...mapState(typesComic.nameModule, [
      'comics',
      'comicId',
    ]),
    ...mapGetters(typesComic.nameModule, {
      comicRate: typesComic.getters.GET_COMIC_RATE,
      comic: typesComic.getters.GET_ACTUAL_DATA_COMIC,
      datePublish: typesComic.getters.GET_DATE_PUBLISH,
    }),
  },
  created() {
    this.fetchNewDataComic();
  },
};
</script>
