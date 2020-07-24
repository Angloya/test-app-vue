<template>
  <div class="right-side">
    <div class="right-side__content">
      <FilterInput @change="setFilterValue($event)"/>
      <transition-group name="list">
        <Person
          v-for="person in persons"
          :key="person.id"
          :person="person"/>
      </transition-group>
    </div>
  </div>
</template>

<script>
import FilterInput from '@/components/FilterInput.vue'
import Person from '@/components/Person.vue'
export default {
  name: 'RightSideContent',
  data() {
    return {
      showInput: false,
      filterValue: ''
    }
  },
  computed: {
    filtredPersons() {
      return this.$store.getters.getFilterRightSidePersons(this.filterValue)
    },
    persons() {
      return this.filterValue ? this.filtredPersons : this.$store.getters.getRightSidePersons()
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
  .right-side__content {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    background: #DCFFCC;
    height: 100%;
    padding: 20px;
    min-width: 600px;
  }
  .right-side__title {
    text-align: center;
  }
</style>
