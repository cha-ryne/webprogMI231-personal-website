const survey = new Survey.Model(json);
survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
});
survey.render(document.getElementById("surveyElement"));

document.addEventListener('DOMContentLoaded', function() {
    const surveyElement = document.getElementById("surveyElement");
    if (!surveyElement) {
        console.error("Survey element not found!");
        return;
    }

    const survey = new Survey.Model(json);
    
    survey.onComplete.add(async (sender, options) => {
        try {
            const result = await saveSurveyResponse(sender.data);
            if (result.error) {
                console.error('Failed to save survey:', result.error);
            } else {
                console.log('Survey saved successfully');
            }
        } catch (error) {
            console.error('Error in survey completion:', error);
        }
    });

    survey.render(surveyElement);
});