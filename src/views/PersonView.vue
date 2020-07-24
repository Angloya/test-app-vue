<template>
  <div class="person-item__view">
    <div
      v-if="person"
      class="person-item__content">
      <div
        class="content__back-button"
        @click="redirectToHome">
        Вернуться на главную страницу
      </div>
      <div class="content__name">
        {{person.name}}
      </div>
      <div class="content__info">
        <div> Адрес: {{person.adress}} </div>
        <div> Номер телефона: {{person.phone}} </div>
      </div>
    </div>
    <div v-else>
      О данном человеке пока нет данных
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonView',
  computed: {
    person () {
      let personId = this.$route.params.personId
      return this.$store.getters.getPerson(personId)
    }
  },
  methods: {
    redirectToHome () {
      this.$router.push({name: 'LeftSideContent'})
    }
  }
}
</script>

<style lang="scss" scoped>
  .person-item__view {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    background: #E0F1F2;
    min-height: 100%;
    padding: 20px;
    min-width: 600px;
  }
  .content__back-button {
    padding: 10px;
    border: 1px solid black;
    background: #fff;
    width: 50%;
    cursor: pointer;
  }
  .content__name {
    font-size: 20px;
    padding: 10px 0;
  }
  .person-item__content {
    padding: 20px;
    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
  }
</style>