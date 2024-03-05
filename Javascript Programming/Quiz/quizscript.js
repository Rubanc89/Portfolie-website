function calculateScore() {
    const quizForm = document.getElementById('quiz-form');
    const resultContainer = document.getElementById('result');
  
    const correctAnswers = ['paris', 'jupiter', '7'];
    let score = 0;
  
    for (let i = 1; i <= 3; i++) {
      const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
  
      if (selectedOption) {
        const userAnswer = selectedOption.value;
        if (userAnswer === correctAnswers[i - 1]) {
          score++;
        }
      }
    }
  
    const percentage = (score / 3) * 100;
    const feedback = `You scored ${score} out of 3 (${percentage}%)`;
  
    resultContainer.textContent = feedback;
  }
  