<template>
  <div class="comic-home container">
    <div class="columns">
      <div class="column is-two-thirds">
        <comic-preview />
        <hr class="comic-divider--horizontal"/>
        <comic-comments />
      </div>
      <div class="column">
        <comic-list-review />
      </div>
    </div>
  </div>
</template>

<script>
import ComicPreview from '@/components/comic/Preview.vue';
import ComicComments from '@/components/comic/Comments.vue';
import ComicListReview from '@/components/comic/ListReview.vue';

export default {
  name: 'Home',
  components: {
    ComicPreview,
    ComicComments,
    ComicListReview,
  },
};
</script>
