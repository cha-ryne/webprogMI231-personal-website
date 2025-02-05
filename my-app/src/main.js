import { createApp } from 'vue'
import { Model } from 'survey-core'
import { Survey } from 'survey-vue3-ui'
import { json } from './components/json'

const survey = new Model(json)
const app = createApp({
  data() {
    return {
      survey: survey
    }
  },
  components: {
    Survey
  },
  template: '<Survey :model="survey" />'
})

app.mount('#app')