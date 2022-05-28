<template>
  <div class="flex flex-col items-center justify-center">
    <div class="grid w-full lg:w-3/5 sm:w-full px-4 max-w-screen-xl gap-x-8 gap-y-8 grid-cols-1 lg:grid-cols-3 sm:grid-cols-3 ">
      <div
        @click="test(drug.id)"
        v-for="(drug, index) in searchResult"
        :key="index"
        :class="drug.background"
        class="px-4 py-10 rounded-2xl cursor-pointer"
      >
        <div class="flex justify-center mb-6" >
          <img :src="drug.image" class="h-24" alt="" />
        </div>
        <p style="font-family: 'Lexend', sans-serif;" class="text-drugText font-semibold mb-1" >{{drug.name}}</p>
        <p class="text-xs" >{{drug.dosage}}mg</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { drugs } from '../../db'

export default {
  data() {
    return {
      drugsData: drugs,
      col: ['row-span-3', 'bg-amartem'],
    }
  },
  computed: {
    ...mapState({
      counter: (state) => state.counter,
      searchResult: (state) => state.searchResult,
    }),
  },
  methods: {
    ...mapActions(['add']),
    test(id) {
      this.$router.push({path:`/details/${id}`})
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300&display=swap');
* {
  margin: 0;
  padding: 0;
}
</style>
