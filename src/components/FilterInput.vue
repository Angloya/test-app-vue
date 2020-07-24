<template>
  <div class="filter-input">
    <div class="filter-input__body">
      <input
        type="text"
        :value="value"
        @input="onInputChange($event)"
        placeholder="Введите имя"
        class="title__text" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterInput',
  data() {
    return {
      value: '',
      delay: 300,
      timeout: null
    }
  },
  methods: {
    onInputChange(e) {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.$emit('change', e.target.value)
      }, this.delay)
    }
  }
}
</script>

<style lang="scss" scoped>
  .filter-input__body {
    background: #fff;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);
    border-radius: 5px;
    padding: 10px;
    width: 500px;
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>