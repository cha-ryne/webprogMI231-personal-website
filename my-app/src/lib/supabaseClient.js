import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://xhsptturvttitkhfyvhh.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhoc3B0dHVydnR0aXRraGZ5dmhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5NzA3MTIsImV4cCI6MjA1MzU0NjcxMn0.8iJz3JyEYOzAswXfoAWwXu2T5Rver2H4xRM1-e5wzKU')

// Add function to handle survey submissions
export const saveSurveyResponse = async (surveyData) => {
  try {
    const { data, error } = await supabase
      .from('survey_responses')
      .insert([
        {
          response_data: surveyData,
          submitted_at: new Date().toISOString()
        }
      ])

    if (error) {
      console.error('Supabase error:', error)
      throw error
    }
    console.log('Data saved:', data)
    return { data, error: null }
  } catch (error) {
    console.error('Error saving survey response:', error)
    return { data: null, error }
  }
}