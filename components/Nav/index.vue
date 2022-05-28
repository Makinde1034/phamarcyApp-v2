<template>
  <!-- <div class=""> -->
  <div class="flex justify-center relative">
    <input
      placeholder="Search Product"
      class="lg:w-6/12 h-12 rounded-lg pl-8 mr-6 sm:w-full outline-0"
      style="background: #f4f6f8; outline: none; border: none"
      type="text"
      v-model="search"
      @input="searchDrug($event)"
    />
    <div
      style="background: #e7f1ff"
      class="h-12 flex-col px-5 cursor-pointer flex justify-center align-center rounded-xl hover:opacity-40 ease-in duration-300"
      v-if="!isSearchActive===true"
    >
      <img class="h-6" src="../../static/menu.png" alt="" />
    </div>
    <div v-else class="h-12 px-5 flex justify-center items-center">
      <p @click="cancelSearch" class="text-quickSearchText font-semibold cursor-pointer">Cancel</p>
    </div>
    <div
      style="border: 1px solid #1374fc"
      class="lg:w-6/12 w-full bg-white absolute top-14 lg:mr-24 rounded-lg p-4 shadow-slate-400"
      v-if="isSearchActive === true"
    >
      <p class="text-quickSearchText font-semibold text-sm mb-4">Top result</p>
      <div v-if="topSearch.length > 0" >
        <div v-for="(item, index) in topSearch" :key="index">
          <div class="flex cursor-pointer mb-6" @click="searchDrugName(item.name)" >
            <div
              :class="item.background"
              class="py-2 px-4 mr-4 flex justify-center rounded-lg"
            >
              <img class="h-6" :src="item.image" alt="" />
            </div>

            <div>
              <p class="text-quickSearchText font-semibold text-sm mb-2">
                {{ item.name }}
              </p>
              <p class="text-xs">{{ item.dosage }}mg</p>
            </div>
          </div>
        </div>
      </div>
      <div v-else >No result found for "{{search}}"</div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      search: '',
    } 
  },
  computed: {
    ...mapState({
      topSearch: (state) => state.autoSearchResults,
      isSearchActive: (state) => state.isSearchActive,
    }),
  },
  methods: {
    ...mapActions(['setSearchActive', 'quickFilter', 'autoFill','searchByName']),
    searchDrug() {
      if (this.search.length < 2) {
        this.setSearchActive(false)
        return
      }
      this.setSearchActive(true)
      this.autoFill(this.search)
    },
    searchDrugName(drug){
      this.searchByName(drug)
      this.setSearchActive(false)
    },
    cancelSearch(){
      this.setSearchActive(false)
    },

  },
}
</script>

<style>
* {
  /* border: 1px solid red; */
}
</style>
