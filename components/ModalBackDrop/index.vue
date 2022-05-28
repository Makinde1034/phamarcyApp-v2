<template>
  <div
    class="w-full ease-in duration-150 z-40 h-full inset-0 bg-black bg-opacity-50 fixed top-0 left-0"
    :class="isModalBackDropOpen ? '' : ['opacity-0', 'invisible']"
    @click="closeModals"
  ></div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState({
      isModalBackDropOpen: (state) => state.toggle.isModalBackDropOpen,
    }),
  },
  methods: {
    ...mapActions('toggle', ['toggleModalBackDrop']),
    closeModals() {
      this.toggleModalBackDrop(false)
    },
  },

  mounted() {
    console.log(this.isModalBackDropOpen)
  },
}
</script>

<style></style>
