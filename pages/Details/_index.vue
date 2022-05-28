<template>
  <transition name="detail">
    <div class="pb-10 flex flex-col z-40 items-center justify-center">
      <div
        class="max-w-screen-2xl"
        v-for="(item, index) in allDrugs"
        :key="index"
      >
        <div v-if="item.id === Number(id)">
          <div
            :class="item.background"
            class="h-96 w-full flex justify-center items-center"
          >
            <img :src="item.image" alt="" />
          </div>
          <div class="flex flex-col items-center justify-center">
            <div class="xl:w-1/2 px-4 w-full">
              <h3
                style="font-family: 'Lexend', sans-serif"
                class="font-semibold mt-6 mb-2 text-lg"
              >
                {{ item.name }}
              </h3>
              <p
                style="font-family: 'Lexend', sans-serif"
                class="text-neutral-300"
              >
                {{ item.about }}
              </p>
            </div>
            <div class="xl:w-1/2 px-4 w-full">
              <div class="mt-6 flex justify-between">
                <p
                  @click="openDosageSettings"
                  class="text-drugText cursor-pointer font-semibold"
                  style="font-family: 'Lexend', sans-serif"
                >
                  Dosage
                </p>
                <p
                  class="text-searchBoxBorder cursor-pointer font-semibold"
                  style="font-family: 'Lexend', sans-serif"
                  @click="openDosageSettings"
                >
                  {{ dosage }}{{ drugQua }}
                </p>
              </div>
              <div class="mt-6 flex justify-between">
                <p
                  @click="openFrequencySettings"
                  class="text-drugText cursor-pointer font-semibold"
                  style="font-family: 'Lexend', sans-serif"
                >
                  Frequency
                </p>
                <p
                  @click="openFrequencySettings"
                  class="text-searchBoxBorder cursor-pointer font-semibold"
                  style="font-family: 'Lexend', sans-serif"
                >
                  {{ timesToBeTaken }}
                  {{ Number(timesToBeTaken) > 1 ? 'times' : 'time' }}/{{
                    _often
                  }}
                </p>
              </div>
              <div class="mt-6 flex justify-between">
                <p
                  @click="openDurationSettings"
                  style="font-family: 'Lexend', sans-serif"
                  class="text-drugText cursor-pointer font-semibold"
                >
                  Duration
                </p>
                <p
                  @click="openDurationSettings"
                  style="font-family: 'Lexend', sans-serif"
                  class="text-searchBoxBorder cursor-pointer font-semibold"
                >
                  {{ duration }}
                </p>
              </div>
              <div class="mt-6 flex justify-between">
                <p
                  class="text-drugText  cursor-pointer font-semibold"
                  style="font-family: 'Lexend', sans-serif"
                  @click="openNoteSettings"
                >
                  Note
                </p>
                <p
                  @click="openNoteSettings"
                  class="text-searchBoxBorder cursor-pointer font-semibold"
                  style="font-family: 'Lexend', sans-serif"
                >
                  Enter note{{ note }}
                </p>
              </div>
              <div class="mt-8 flex justify-center">
                <button
                  class="h-12 rounded-lg flex justify-center items-center font-semibold w-72 bg-searchBoxBorder text-white"
                  data-modal-toggle="defaultModal"
                  @click="prescribe"
                >
                  <img class="h-4 mr-2" src="../../static/plus.png" alt="" />
                  <p>PRESCRIBE</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalBackDrop />
      <Dosage />
      <Frequency />
      <Duration />
      <Note />
      <Toast />
    </div>
  </transition>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  transition: 'detail',
  data() {
    return {
      id: this.$route.params.index,

      // test : this.$route.params.name
    }
  },
  head() {
    return {
      title: this.getTitle.name,
      meta: [
        {
          hid: this.getTitle,
          name: this.getTitle,
          content: this.getTitle.description,
        },
      ],
    }
  },
  computed: {
    ...mapState({
      allDrugs: (state) => state.allDrugs,
      dosage: (state) => state.prescription.prescribtionDetails.dosage,
      drugQua: (state) => state.prescription.prescribtionDetails.quantity,
      timesToBeTaken: (state) => state.prescription.prescribtionDetails.times,
      _often: (state) => state.prescription.prescribtionDetails.often,
      duration: (state) => state.duration.duration,
      note: (state) => state.note.note,
    }),

    getTitle() {
      const item = this.allDrugs.find((i) => i.id === Number(this.id))
      return {
        name: item.name,
        description: item.about,
      }
    },
  },
  methods: {
    ...mapActions('toggle', [
      'toggleModalBackDrop',
      'toggleDosage',
      'toggleFrequency',
      'toggleDuration',
      'toggleNote',
      'toggleToast',
    ]),
    openDosageSettings() {
      this.toggleModalBackDrop(true)
      this.toggleDosage(true)
    },
    openFrequencySettings() {
      this.toggleFrequency(true)
      this.toggleModalBackDrop(true)
    },
    openDurationSettings() {
      this.toggleDuration(true)
      this.toggleModalBackDrop(true)
    },
    openNoteSettings() {
      this.toggleNote(true)
      this.toggleModalBackDrop(true)
    },
    prescribe() {
      this.toggleToast({
        status: true,
        msg: `Successfully prescribed ${this.getTitle.name}`,
      })
      setTimeout(() => {
        this.toggleToast({ status: false, msg: '' })
      }, 3000)
    },
  },
  mounted() {
    console.log(this.getTitle)
  },
}
</script>

<style>
.datail-enter-active {
  transition: all 0.3s ease;
  opacity: 1;
  /* transform: translateY(0px); */
}

.detail-enter {
  opacity: 0;
  /* transform: translateY(50px); */
}

.detail-leave-active {
  opacity: 0;
  /* transform: translateY(50px); */
  transition: all 0.3s ease;
}

.detail-leave {
  opacity: 1;
  /* transform: translateY(50px); */
}
</style>
