<template>
  <div
    style="box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px"
    :class="isToastActive ? 'translate-x-0 opacity-1' : ['opacity-0  translate-x-11']"
    class="fixed  ease-in duration-150 top-2 p-4 rounded-lg left-2 bg-white"
  >
    {{ msg }}
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState({
      isToastActive: (state) => state.toggle.toast.isToastOpen,
      msg: (state) => state.toggle.toast.msg,
    }),
  },
}
</script>

<style></style>
