<template>
    <survey :survey="survey" />
</template>
<script>
import Vue from "vue";
import { Model } from "survey-vue";
import "survey-vue/defaultV2.min.css";
import "./index.css";
import { json } from "./json";

export default Vue.component("survey-component", {
  name: "survey-component",
  data() {
    const survey = new Model(json);
    survey.onComplete.add((sender, options) => {
        console.log(JSON.stringify(sender.data, null, 3));
    });
    return {
      survey: survey,
    };
  },
});
</script>