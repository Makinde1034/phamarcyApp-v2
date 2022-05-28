<template>
  <div
    class="p-4 z-50 ease-in duration-150 rounded-lg bg-white w-11/12 lg:w-1/3 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    :class="
      isFrequencyOpen ? 'scale-100' : ['opacity-0', 'invisible', 'scale-95']
    "
  >
    <p class="text-3xl text-drugText mb-2">
      {{ timesToBeTaken }}
      {{ Number(timesToBeTaken) > 1 ? 'times' : 'time' }}/{{ _often }}
    </p>
    <p class="text-grayText mb-4">Daily</p>
    <p class="text-base text-drugText font-medium mb-4">Number</p>
    <div class="grid lg:grid-cols-3 gap-x-5 gap-y-8 mb-4">
      <div class="flex items-center">
        <input v-model="times" value="1" class="h-6 w-8 mr-2" type="radio" />
        <label for="">1 time</label>
      </div>
      <div class="flex items-center">
        <input v-model="times" value="2" class="h-6 w-8 mr-2" type="radio" />
        <label for="">2 times</label>
      </div>
      <div class="flex items-center">
        <input
          v-model="times"
          value="3"
          class="h-6 w-8 border-grayText mr-2"
          type="radio"
        />
        <label for="">3 times</label>
      </div>
    </div>
    <p class="text-base text-drugText font-medium mb-4">Often</p>
    <div class="grid lg:grid-cols-3 gap-x-5 gap-y-8 mb-4">
      <div class="flex items-center">
        <input
          value="1 day"
          v-model="often"
          class="h-6 w-8 mr-2"
          type="radio"
        />
        <label for="">1 day</label>
      </div>
      <div class="flex items-center">
        <input
          value="2 days"
          v-model="often"
          class="h-6 w-8 mr-2"
          type="radio"
        />
        <label for="">2 days</label>
      </div>
      <div class="flex items-center">
        <input
          value="3 days"
          v-model="often"
          class="h-6 w-8 border-grayText mr-2"
          type="radio"
        />
        <label for="">3 days</label>
      </div>
      <div class="flex items-center">
        <input
          value="1 week"
          v-model="often"
          class="h-6 w-8 border-grayText mr-2"
          type="radio"
        />
        <label for="">3 Week</label>
      </div>
      <div class="flex items-center">
        <input
          value="1 month"
          v-model="often"
          class="h-6 w-8 border-grayText mr-2"
          type="radio"
        />
        <label for="">1 Month</label>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      times: '1',
      often: '',
    }
  },
  computed: {
    ...mapState({
      isFrequencyOpen: (state) => state.toggle.isFrequencyOpen,
      timesToBeTaken: (state) => state.prescription.prescribtionDetails.times,
      _often: (state) => state.prescription.prescribtionDetails.often,
    }),
  },
  methods: {
    ...mapActions('prescription', ['setTimes', 'setOften']),
  },
  watch: {
    times(newTime, oldTime) {
      this.setTimes(newTime)
    },
    often(newTime, oldTime) {
      this.setOften(newTime)
    },
  },
}
</script>

<style>
* {
  font-family: 'Lexend', sans-serif;
}
</style>
