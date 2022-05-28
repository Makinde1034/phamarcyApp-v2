<template>
  <div
    class="w-11/12 lg:w-2/3 xl:w-1/3 z-50 fixed top-1/2 rounded-lg left-1/2 bg-white p-4 transform -translate-x-1/2 -translate-y-1/2"
    :class="isNoteOpen ? 'scale-100' : ['opacity-0', 'invisible', 'scale-95']"
  >
    <p class="text-3xl text-drugText mb-2">Notes</p>
    <p class="mb-2 text-grayText">Enter a prescription note</p>

    <textarea
      class="border-grayText w-full outline-0 outline-none p-2 rounded-lg h-32 border-2 flex flex-col justify-start"
      name=""
      id=""
      cols="30"
      rows="10"
      v-model="note"
    ></textarea>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      note: '',
    }
  },
  methods: {
    ...mapActions('note', ['setNote']),
  },
  computed: {
    ...mapState({
      isNoteOpen: (state) => state.toggle.isNoteOpen,
    }),
  },
  watch: {
    note(newNote, oldNote) {
        this.setNote(newNote);
    },
  },
}
</script>

<style></style>
