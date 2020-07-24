<template>
  <div class="left-side">
    <div v-if="!isLoading" class="left-side__content">
      <FilterInput @change="setFilterValue($event)"/>
      <transition-group name="list">
        <Person
          v-for="person in persons"
          :key="person.id"
          :person="person"/>
      </transition-group>
    </div>
    <div class="left-side__content" v-else>
      Загрузка...
    </div>
  </div>
</template>

<script>
import FilterInput from '@/components/FilterInput.vue'
import Person from '@/components/Person.vue'
export default {
  name: 'LeftSideContent',
  data() {
    return {
      showInput: false,
      filterValue: ''
    }
  },
  computed: {
    filtredPersons() {
      return this.$store.getters.getFilterPersons(this.filterValue)
    },
    isLoading () {
      return this.$store.state.isLoading
    },
    persons() {
      return this.filterValue ? this.filtredPersons : this.$store.state.persons 
    }
  },
  methods: {
    setFilterValue(value) {
      this.filterValue = value
    },
  },
  components: {
    FilterInput,
    Person
  },
}
</script>

<style lang="scss" scoped>
  .left-side__content {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    background: #E0F1F2;
    height: 100%;
    padding: 20px;
    min-width: 600px;
  }
</style>
