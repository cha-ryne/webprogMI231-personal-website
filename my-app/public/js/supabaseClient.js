async function saveSurveyResponse(surveyData) {
  try {
      const { data, error } = await window.supabaseClient
          .from('survey_responses')
          .insert([{
              response_data: surveyData,
              submitted_at: new Date().toISOString()
          }]);

      if (error) {
          console.error('Supabase error:', error);
          throw error;
      }
      console.log('Data saved:', data);
      return { data, error: null };
  } catch (error) {
      console.error('Error saving survey response:', error);
      return { data: null, error };
  }
}