<template>
  <div class="media" @click="updateIdSelected(id)">
    <figure class="media-left">
      <p class="image is-96x96 comic-review__img-container">
        <img :src="comics[id].data.img" :alt="comics[id].data.alt">
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <div class="comic-review__item-title has-text-weight-bold">
          {{ comics[id].data.title }}
        </div>
        <div class="comic-review__item-rated">
          <font-awesome-icon
            :key="i"
            icon="star"
            v-for="i in 5"
            class="comic-review__item-rated"
            :class="{
              'comic-review__item-rated--selected': i <= comics[id].rate
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import typesComic from '@/store/modules/comic/types';

export default {
  props: {
    id: { type: String, required: true },
  },
  computed: {
    ...mapState(typesComic.nameModule, ['comics']),
  },
  methods: {
    ...mapActions(typesComic.nameModule, {
      updateIdSelected: typesComic.actions.UPDATE_COMIC_ID,
      updateComicView: typesComic.actions.FETCH_COMIC_BY_ID,
    }),
  },
};
</script>
