document.getElementById('submit-btn').addEventListener('click', function() { 
   // Define the correct answers for each question using Objects
  const answers = {
      q1: 'a',
      q2: 'b',
      q3: 'b',
      q4: 'c',
      q5: 'a',
      q6: 'c',
      q7: 'b',
      q8: 'c'
    };
    
     // Initialize a variable to keep track of the user's score
    let score = 0;
    for (const question in answers) {
      const selectedOption = document.querySelector(`input[name=${question}]:checked`);
      if (selectedOption) {
        if (selectedOption.value === answers[question]) {
          score++;
          // Increase the score and add 'correct' class to the parent element
          selectedOption.parentElement.classList.add('correct');
        } else {
          // If the answer is incorrect, add 'wrong' class to the parent element
          selectedOption.parentElement.classList.add('wrong');
        }
      }
    }
  
    const resultElement = document.getElementById('quiz-result');
    resultElement.textContent = `You scored ${score} out of ${Object.keys(answers).length}.`;
  });

  document.getElementById('refresh-btn').addEventListener('click', function() {
    location.reload();
  });

 
