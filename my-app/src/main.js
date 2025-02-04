import Vue from "vue";
import SurveyComponent from "./components/SurveyComponent";

new Vue({
    el: "#app",
    template: '<div id="surveyElement" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; min-height: 100%; height:100%"> <survey-component /></div>',
    component: {
        "survey-component": SurveyComponent
    }
});