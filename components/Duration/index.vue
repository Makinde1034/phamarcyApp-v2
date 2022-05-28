<template>
  <div
    class="p-4 z-50 ease-in duration-150 rounded-lg bg-white w-11/12 lg:w-1/3 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    :class="
      isDurationModalOpen ? 'scale-100' : ['opacity-0', 'invisible', 'scale-95']
    "
  >
    <h3 class="text-3xl text-drugText mb-2"></h3>
    <div>
      <p class="text-3xl text-drugText mb-2">{{ _duration }}</p>
      <p class="mb-2 text-grayText font-semibold">Month</p>
      <p class="text-drugText mb-2 font-semibold">Duration</p>
      <input
        class="w-full mb-4 rounded-lg cursor-pointer appearance-none bg-amoxil focus:outline-none focus:ring-0 focus:shadow-none"
        type="range"
        min="1"
        max="90"
        v-model="duration"
      />
      <div class="flex items-center justify-between">
        <p class="text-grayText">{{_duration}}</p>
        <p class="text-grayText">3 Month</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState,mapActions } from 'vuex'
export default {
  data() {
    return {
      duration: '',
    }
  },
  computed: {
    ...mapState({
      isDurationModalOpen: (state) => state.toggle.isDurationOpen,
      _duration: (state) => state.duration.duration,
    }),
  },
  methods:{
      ...mapActions('duration',['setDuration'])
      
  },
  watch: {
    duration(newDuration, oldDuration) {
        console.log(newDuration)
        if(Number(newDuration) > 30){
            this.setDuration(`${Math.floor((Number(newDuration)/30))} ${Math.floor((Number(newDuration)/30)) > 1 ? 'months' : 'month'}`)
        }else{
            this.setDuration(`${newDuration} ${newDuration > 1 ? 'days' : 'day'}`)
        }
    },
  },
}
</script>

<style></style>
