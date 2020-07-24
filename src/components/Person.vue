<template>
  <div class="person">
    <div
      @click="onPersonClick"
      class="person__name">
      {{person.name}}
    </div>
    <div
      @click="changeSide"
      class="person__button">
      {{buttonLabel}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'person',
  props: {
    person: {
      type: Object,
      default: () => {} 
    }
  },
  computed: {
    buttonLabel () {
        return this.person.isRightSide ? '-' : '+'
      }
    },
    methods: {
      changeSide () {
        this.$store.dispatch('changePersonSide', this.person)
      },
      onPersonClick () {
        this.$router.push({name: 'PersonView', params: {personId: this.person.id}})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .person {
    background: #fff;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    margin: 10px;
  }
  .person__button, 
  .person__name {
    padding: 0 5px;
    cursor: pointer;
  }
</style>