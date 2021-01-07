const App = {
  data() {
    return {
      activeIndex: 0,
      isFinished: false,
      steps: [
        {
          classes: ['active'],
          title: 'Основы',
          text: 'В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем вся базу фреймворка.'
        },
        {
          classes: [],
          title: 'Компоненты',
          text: 'Один из самых важных блоков в курсе, где вы узнаете все о компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 различных UI компонентов как в реальной разработке. Блок расскажет про абсолютно все составляющие, которые есть в компонентах: взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.'
        },
        {
          classes: [],
          title: 'Роутер',
          text: 'В данном блоке вы узнаете все о том, как работает мультиязычность во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.'
        },
        {
          classes: [],
          title: 'Vuex',
          text: 'В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.'
        },
        {
          classes: [],
          title: 'Composition',
          text: 'Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться данными синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.'
        },
      ]
    }
  },
  methods: {
    prev() {
      this.activeIndex--
    },
    reset() {
      this.activeIndex = 0,
      this.isFinished = false
    },
    nextOrFinish() {
      if (this.activeIndex == 4) {
        this.isFinished = true
      }
      else {
        this.activeIndex++
      }
    },
    setActive(idx) {
      if (!this.isFinished)
        this.activeIndex = idx
    },
    setClassActive(idx) {
      return this.activeIndex === idx ? 'active' : ''
    },
    setClassDone(idx) {
      return this.activeIndex > idx ? 'done' : ''
    }
  },
  computed: {
    currentActiveStepText() {
      return this.steps[this.activeIndex].text
    },
    isBackBtnDisabled() {
      return !this.activeIndex
    },
    isFinalStep() {
      return this.activeIndex === 4 ? 'Закончить' : 'Вперед'
    }
  }
}

Vue.createApp(App).mount('#app')