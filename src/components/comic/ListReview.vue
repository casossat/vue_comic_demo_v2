<template>
  <div class="comic-review__container">
    <div class="title is-6">Vistos anteriormente</div>
    <div class="comic-review__box" v-if="comicsIds.length">
      <review-item
        :id="comicId"
        :key="comicId"
        v-for="comicId in comicsIds"
        class="comic-review__item p-2"
      />
    </div>
    <div class="comivc-review__empty has-text-weight-light" v-else>
      No se ha visualizado ningún elemento recientemente
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import typesComic from '@/store/modules/comic/types';

import ReviewItem from './ReviewItem.vue';

export default {
  components: {
    ReviewItem,
  },
  computed: {
    ...mapGetters(typesComic.nameModule, {
      comicsIds: typesComic.getters.GET_COMICS_IDS,
    }),
  },
};
</script>
