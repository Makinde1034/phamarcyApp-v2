<template>
  <div
    class="p-4 z-50 ease-in duration-150 rounded-lg bg-white w-11/12 lg:w-1/3 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    :class="isDosageOpen ? 'scale-100' : ['opacity-0', 'invisible', 'scale-95']"
  >
    <h3 class="text-3xl text-drugText mb-2">{{ drugDosage }}{{ drugQua }}</h3>
    <div>
      <p class="mb-2 text-drugText font-semibold">Dosage</p>
      <input
        class="w-full mb-4 rounded-lg cursor-pointer appearance-none bg-amoxil focus:outline-none focus:ring-0 focus:shadow-none"
        type="range"
        v-model="dosage"
        min="100"
        max="900"
        @input="changeDosage()"
        oninput="this.nextElementSibling.value = this.value"
      />
      <p class="mb-2 text-drugText font-semibold">Units</p>
      <div class="grid lg:grid-cols-4 gap-x-5 gap-y-8 ">
        <div class="flex items-center">
          <input
            v-model="quantity"
            value="Kg"
            class="h-6 w-8 mr-2 border-grayText"
            type="radio"
          />
          <label class="" for="kg">Kg</label>
        </div>
        <div class="flex items-center">
          <input
            v-model="quantity"
            value="G"
            class="h-6 w-8 mr-2 cursor-pointer"
            type="radio"
          />
          <label class="" for="G">G</label>
        </div>
        <div class="flex items-center">
          <input
            v-model="quantity"
            value="Mcg"
            class="h-6 w-8 mr-2 cursor-pointer"
            type="radio"
          />
          <label class="" for="Mcg">Mcg</label>
        </div>
        <div class="flex items-center">
          <input
            v-model="quantity"
            value="M"
            class="h-6 w-8 mr-2 cursor-pointer"
            type="radio"
          />
          <label class="" for="M">M</label>
        </div>
        <div>
          <input
            v-model="quantity"
            value="Li"
            class="h-6 w-8 mr-2 cursor-pointer"
            type="radio"
          />
          <label class="" for="Li">Li</label>
        </div>
        <div class="flex items-center">
          <input
            v-model="quantity"
            value="Mol"
            class="h-6 w-8 mr-2 cursor-pointer"
            type="radio"
          />
          <label class="" for="Mol">Mol</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      quantity: '',
      dosage: '',
    }
  },
  computed: {
    ...mapState({
      isDosageOpen: (state) => state.toggle.isDosageOpen,
      drugDosage: (state) => state.prescription.prescribtionDetails.dosage,
      drugQua: (state) => state.prescription.prescribtionDetails.quantity,
    }),
  },
  methods: {
    ...mapActions('prescription', ['setDosage', 'setQuantity']),
    changeDosage() {
      this.setDosage(this.dosage)
    },
  },
  watch: {
    quantity(newQuantity, oldQuauntity) {
      console.log(newQuantity)
      this.setQuantity(newQuantity)
    },
  },
}
</script>

<style>
* {
  font-family: 'Lexend', sans-serif;
}
</style>
