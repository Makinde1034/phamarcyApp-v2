<template>
  <div
    style="overflow: auto"
    class="mt-16  w-full lg:w-full flex flex-row justify-center"
  >
    <div
      v-for="(item, index) in categories"
      class="mr-6 w-auto cursor-pointer"
      :key="index"
    >
      <div
        :class="color"
        tabindex="index"
        class="px-6 py-3 mb-6 rounded-lg "
        @click="filterDrugsByCategory(item)"
      >
        <p style="font-family: 'Lexend', sans-serif;" class="text-quickSearchText font-medium">{{ item }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { drugs } from '../../db'


export default {
  data() {
    return {
      categories: ['All', 'Pain killers', 'Vitamins', 'Anti-malaria','cold'],
      color: 'bg-greyish ',
      drugsData: drugs,
    }
  },

  methods: {
    ...mapActions(['quickFilter']),

    filterDrugsByCategory(string) {
      this.quickFilter(string)
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300&display=swap');
.test:focus {
  background-color: #1374fc;
}
</style>
