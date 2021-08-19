<template>
  <section class="resume-entry">
    <div class="header-row">
      <h4 class="resume-title header-row-item">{{ entry.main_title }}</h4>
      <span v-if="entry.main_title">,&nbsp;</span>
      <i class="resume-subtitle header-row-item">{{ entry.sub_title }}</i>
      <span v-if="entry.sub_title">,&nbsp;</span>
      <p class="resume-location header-row-item">{{ entry.location_title }}</p>
      <span v-if="entry.location_title">,&nbsp;</span>
      <p class="resume-sublocation header-row-item">{{ entry.sublocation_title }}</p>
      <span v-if="entry.sublocation_title">,&nbsp;</span>
    </div>
    <p class="resume-entry-body">{{ entry.entry }}</p>
  </section>
</template>

<script>
export default {
  props: {
    entry: Object
  }
};
</script>

<style lang="scss">
.header-row {
  // display: flex;
  font-size: 1.2em;
  margin-bottom: 0.3em;
}

.header-row-item {
  display: inline;
}

.resume-entry-body {
  margin: 0;
  margin-bottom: 0.3em;
}
</style>
