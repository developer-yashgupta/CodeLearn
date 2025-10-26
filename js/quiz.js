// Quiz Data
const quizData = {
    html: {
        title: "HTML Quiz",
        icon: "🏗️",
        timeLimit: 600, // 10 minutes in seconds
        questions: [
            {
                question: "What does HTML stand for?",
                options: [
                    "HyperText Markup Language",
                    "High Tech Modern Language",
                    "Home Tool Markup Language",
                    "Hyperlink and Text Markup Language"
                ],
                correct: 0
            },
            {
                question: "Which HTML tag is used for the largest heading?",
                options: ["<h6>", "<h1>", "<heading>", "<header>"],
                correct: 1
            },
            {
                question: "What is the correct HTML element for inserting a line break?",
                options: ["<break>", "<lb>", "<br>", "<newline>"],
                correct: 2
            },
            {
                question: "Which attribute specifies the URL of the page the link goes to?",
                options: ["src", "href", "link", "url"],
                correct: 1
            },
            {
                question: "What is the correct HTML for creating a hyperlink?",
                options: [
                    "<a url='http://example.com'>Example</a>",
                    "<a href='http://example.com'>Example</a>",
                    "<a>http://example.com</a>",
                    "<link>http://example.com</link>"
                ],
                correct: 1
            },
            {
                question: "Which HTML element defines the title of a document?",
                options: ["<meta>", "<title>", "<head>", "<header>"],
                correct: 1
            },
            {
                question: "What is the correct HTML for making a text input field?",
                options: [
                    "<input type='text'>",
                    "<textfield>",
                    "<input type='textfield'>",
                    "<textinput type='text'>"
                ],
                correct: 0
            },
            {
                question: "Which HTML attribute is used to define inline styles?",
                options: ["class", "style", "styles", "font"],
                correct: 1
            },
            {
                question: "What is the correct HTML for making a checkbox?",
                options: [
                    "<input type='check'>",
                    "<input type='checkbox'>",
                    "<checkbox>",
                    "<check>"
                ],
                correct: 1
            },
            {
                question: "Which HTML element is used to specify a footer for a document?",
                options: ["<bottom>", "<section>", "<footer>", "<foot>"],
                correct: 2
            }
        ]
    },
    css: {
        title: "CSS Quiz",
        icon: "🎨",
        timeLimit: 720, // 12 minutes in seconds
        questions: [
            {
                question: "What does CSS stand for?",
                options: [
                    "Creative Style Sheets",
                    "Cascading Style Sheets",
                    "Computer Style Sheets",
                    "Colorful Style Sheets"
                ],
                correct: 1
            },
            {
                question: "Which property is used to change the background color?",
                options: ["color", "bgcolor", "background-color", "background"],
                correct: 2
            },
            {
                question: "How do you select an element with id 'demo'?",
                options: [".demo", "#demo", "demo", "*demo"],
                correct: 1
            },
            {
                question: "Which property is used to change the text color?",
                options: ["text-color", "color", "font-color", "text"],
                correct: 1
            },
            {
                question: "How do you make text bold in CSS?",
                options: [
                    "font-weight: bold;",
                    "text-style: bold;",
                    "font: bold;",
                    "text-weight: bold;"
                ],
                correct: 0
            },
            {
                question: "Which CSS property controls the text size?",
                options: ["text-size", "font-style", "text-style", "font-size"],
                correct: 3
            },
            {
                question: "What is the correct CSS syntax for making all <p> elements bold?",
                options: [
                    "p {text-size: bold;}",
                    "p {font-weight: bold;}",
                    "<p style='font-size: bold;'>",
                    "p {text-style: bold;}"
                ],
                correct: 1
            },
            {
                question: "How do you display hyperlinks without an underline?",
                options: [
                    "a {text-decoration: none;}",
                    "a {underline: none;}",
                    "a {decoration: no-underline;}",
                    "a {text-decoration: no-underline;}"
                ],
                correct: 0
            },
            {
                question: "Which property is used to change the left margin of an element?",
                options: ["margin-left", "padding-left", "indent", "left-margin"],
                correct: 0
            },
            {
                question: "What is the default value of the position property?",
                options: ["relative", "fixed", "absolute", "static"],
                correct: 3
            }
        ]
    },
    js: {
        title: "JavaScript Quiz",
        icon: "⚡",
        timeLimit: 900, // 15 minutes in seconds
        questions: [
            {
                question: "What is the correct way to write a JavaScript array?",
                options: [
                    "var colors = 'red', 'green', 'blue'",
                    "var colors = (1:'red', 2:'green', 3:'blue')",
                    "var colors = ['red', 'green', 'blue']",
                    "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"
                ],
                correct: 2
            },
            {
                question: "How do you write 'Hello World' in an alert box?",
                options: [
                    "alertBox('Hello World');",
                    "msg('Hello World');",
                    "alert('Hello World');",
                    "msgBox('Hello World');"
                ],
                correct: 2
            },
            {
                question: "How do you create a function in JavaScript?",
                options: [
                    "function = myFunction() {}",
                    "function myFunction() {}",
                    "create myFunction() {}",
                    "function:myFunction() {}"
                ],
                correct: 1
            },
            {
                question: "How do you call a function named 'myFunction'?",
                options: [
                    "call function myFunction()",
                    "call myFunction()",
                    "myFunction()",
                    "Call.myFunction()"
                ],
                correct: 2
            },
            {
                question: "How can you add a comment in JavaScript?",
                options: [
                    "<!-- This is a comment -->",
                    "// This is a comment",
                    "' This is a comment",
                    "* This is a comment *"
                ],
                correct: 1
            },
            {
                question: "What is the correct way to write a JavaScript object?",
                options: [
                    "var person = {firstName:'John', lastName:'Doe'};",
                    "var person = {firstName = 'John', lastName = 'Doe'};",
                    "var person = (firstName:'John', lastName:'Doe');",
                    "var person = (firstName = 'John', lastName = 'Doe');"
                ],
                correct: 0
            },
            {
                question: "Which event occurs when the user clicks on an HTML element?",
                options: ["onchange", "onclick", "onmouseclick", "onmouseover"],
                correct: 1
            },
            {
                question: "How do you declare a JavaScript variable?",
                options: [
                    "variable carName;",
                    "var carName;",
                    "v carName;",
                    "declare carName;"
                ],
                correct: 1
            },
            {
                question: "Which operator is used to assign a value to a variable?",
                options: ["*", "=", "x", "-"],
                correct: 1
            },
            {
                question: "What will the following code return: Boolean(10 > 9)",
                options: ["true", "false", "NaN", "undefined"],
                correct: 0
            }
        ]
    }
};

// Quiz Manager Class
class QuizManager {
    constructor() {
        this.currentQuiz = null;
        this.currentQuestion = 0;
        this.userAnswers = [];
        this.score = 0;
        this.timeRemaining = 0;
        this.timer = null;
        this.startTime = null;
        
        this.initializeElements();
        this.bindEvents();
        this.loadBestScores();
    }

    initializeElements() {
        // Selection elements
        this.quizSelection = document.getElementById('quiz-selection');
        this.quizCards = document.querySelectorAll('.quiz-card');
        
        // Quiz elements
        this.quizContainer = document.getElementById('quiz-container');
        this.quizTitle = document.getElementById('quiz-title');
        this.questionCounter = document.getElementById('question-counter');
        this.progressBar = document.getElementById('quiz-progress-bar');
        this.timerDisplay = document.getElementById('timer');
        this.questionText = document.getElementById('question-text');
        this.questionOptions = document.getElementById('question-options');
        this.prevBtn = document.getElementById('prev-question');
        this.nextBtn = document.getElementById('next-question');
        this.submitBtn = document.getElementById('submit-quiz');
        
        // Results elements
        this.resultsSection = document.getElementById('quiz-results');
        this.resultsIcon = document.getElementById('results-icon');
        this.resultsTitle = document.getElementById('results-title');
        this.finalScore = document.getElementById('final-score');
        this.scoreFraction = document.getElementById('score-fraction');
        this.correctAnswers = document.getElementById('correct-answers');
        this.timeTaken = document.getElementById('time-taken');
        this.previousBest = document.getElementById('previous-best');
        this.resultsMessage = document.getElementById('results-message');
        this.retakeBtn = document.getElementById('retake-quiz');
        this.backToSelectionBtn = document.getElementById('back-to-selection');
    }

    bindEvents() {
        // Quiz selection
        this.quizCards.forEach(card => {
            const startBtn = card.querySelector('.quiz-start-btn');
            startBtn.addEventListener('click', () => {
                const quizType = card.dataset.quiz;
                this.startQuiz(quizType);
            });
        });

        // Navigation
        this.prevBtn.addEventListener('click', () => this.previousQuestion());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.submitBtn.addEventListener('click', () => this.submitQuiz());

        // Results actions
        this.retakeBtn.addEventListener('click', () => this.retakeQuiz());
        this.backToSelectionBtn.addEventListener('click', () => this.showQuizSelection());
    }

    loadBestScores() {
        Object.keys(quizData).forEach(quizType => {
            const score = window.progressTracker.getQuizScore(quizType);
            const scoreElement = document.getElementById(`${quizType}-best-score`);
            if (scoreElement) {
                scoreElement.textContent = score + '%';
            }
        });
    }

    startQuiz(quizType) {
        this.currentQuiz = quizData[quizType];
        this.currentQuestion = 0;
        this.userAnswers = new Array(this.currentQuiz.questions.length).fill(null);
        this.score = 0;
        this.timeRemaining = this.currentQuiz.timeLimit;
        this.startTime = Date.now();

        // Hide selection, show quiz
        this.quizSelection.style.display = 'none';
        this.quizContainer.style.display = 'block';
        this.resultsSection.style.display = 'none';

        // Set quiz title
        this.quizTitle.textContent = this.currentQuiz.title;

        // Load first question
        this.loadQuestion();
        this.updateProgress();
        this.startTimer();
    }

    loadQuestion() {
        const question = this.currentQuiz.questions[this.currentQuestion];
        
        this.questionText.textContent = question.question;
        this.questionOptions.innerHTML = '';

        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.innerHTML = `
                <input type="radio" id="option-${index}" name="answer" value="${index}">
                <label for="option-${index}">${option}</label>
            `;
            
            // Check if this option was previously selected
            if (this.userAnswers[this.currentQuestion] === index) {
                optionElement.querySelector('input').checked = true;
            }

            optionElement.addEventListener('click', () => {
                const radio = optionElement.querySelector('input');
                radio.checked = true;
                this.selectAnswer(index);
            });

            this.questionOptions.appendChild(optionElement);
        });

        this.updateNavigationButtons();
    }

    selectAnswer(answerIndex) {
        this.userAnswers[this.currentQuestion] = answerIndex;
        
        // Remove previous selection styling
        document.querySelectorAll('.option').forEach(opt => {
            opt.classList.remove('selected');
        });
        
        // Add selection styling
        document.querySelectorAll('.option')[answerIndex].classList.add('selected');
    }

    updateProgress() {
        const progress = ((this.currentQuestion + 1) / this.currentQuiz.questions.length) * 100;
        this.progressBar.style.width = progress + '%';
        this.questionCounter.textContent = `${this.currentQuestion + 1} of ${this.currentQuiz.questions.length}`;
    }

    updateNavigationButtons() {
        this.prevBtn.disabled = this.currentQuestion === 0;
        
        if (this.currentQuestion === this.currentQuiz.questions.length - 1) {
            this.nextBtn.style.display = 'none';
            this.submitBtn.style.display = 'inline-block';
        } else {
            this.nextBtn.style.display = 'inline-block';
            this.submitBtn.style.display = 'none';
        }
    }

    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.loadQuestion();
            this.updateProgress();
        }
    }

    nextQuestion() {
        if (this.currentQuestion < this.currentQuiz.questions.length - 1) {
            this.currentQuestion++;
            this.loadQuestion();
            this.updateProgress();
        }
    }

    startTimer() {
        this.updateTimerDisplay();
        
        this.timer = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();
            
            if (this.timeRemaining <= 0) {
                this.submitQuiz();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        const minutes = Math.floor(this.timeRemaining / 60);
        const seconds = this.timeRemaining % 60;
        this.timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        // Change color when time is running low
        if (this.timeRemaining <= 60) {
            this.timerDisplay.style.color = 'var(--error-color)';
        } else if (this.timeRemaining <= 300) {
            this.timerDisplay.style.color = 'var(--warning-color)';
        }
    }

    submitQuiz() {
        clearInterval(this.timer);
        
        // Calculate score
        this.score = 0;
        this.userAnswers.forEach((answer, index) => {
            if (answer === this.currentQuiz.questions[index].correct) {
                this.score++;
            }
        });

        const percentage = Math.round((this.score / this.currentQuiz.questions.length) * 100);
        const timeTaken = Math.floor((Date.now() - this.startTime) / 1000);
        
        // Save score if it's better than previous
        const quizType = Object.keys(quizData).find(key => quizData[key] === this.currentQuiz);
        const previousBest = window.progressTracker.getQuizScore(quizType);
        
        if (percentage > previousBest) {
            window.progressTracker.saveQuizScore(quizType, percentage);
            this.loadBestScores(); // Update displayed scores
        }

        this.showResults(percentage, timeTaken, previousBest);
    }

    showResults(percentage, timeTaken, previousBest) {
        // Hide quiz, show results
        this.quizContainer.style.display = 'none';
        this.resultsSection.style.display = 'block';

        // Set results data
        this.finalScore.textContent = percentage + '%';
        this.scoreFraction.textContent = `${this.score}/${this.currentQuiz.questions.length}`;
        this.correctAnswers.textContent = this.score;
        this.previousBest.textContent = previousBest + '%';

        // Format time taken
        const minutes = Math.floor(timeTaken / 60);
        const seconds = timeTaken % 60;
        this.timeTaken.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

        // Set results message and icon based on score
        let message, icon;
        if (percentage >= 90) {
            message = "Outstanding! You're a true expert! 🌟";
            icon = "🏆";
        } else if (percentage >= 80) {
            message = "Excellent work! You have a solid understanding! 🎉";
            icon = "🎉";
        } else if (percentage >= 70) {
            message = "Good job! Keep practicing to improve further! 👍";
            icon = "👍";
        } else if (percentage >= 60) {
            message = "Not bad! Review the topics and try again! 📚";
            icon = "📚";
        } else {
            message = "Keep learning! Practice makes perfect! 💪";
            icon = "💪";
        }

        this.resultsIcon.textContent = icon;
        this.resultsMessage.innerHTML = `<p>${message}</p>`;

        // Show improvement message if score improved
        if (percentage > previousBest && previousBest > 0) {
            this.resultsMessage.innerHTML += `<p class="improvement">🎯 You improved by ${percentage - previousBest}% from your previous best!</p>`;
        }

        // Scroll to results
        this.resultsSection.scrollIntoView({ behavior: 'smooth' });
    }

    retakeQuiz() {
        const quizType = Object.keys(quizData).find(key => quizData[key] === this.currentQuiz);
        this.startQuiz(quizType);
    }

    showQuizSelection() {
        this.quizSelection.style.display = 'block';
        this.quizContainer.style.display = 'none';
        this.resultsSection.style.display = 'none';
        
        // Reset timer display
        this.timerDisplay.style.color = '';
        
        // Scroll to selection
        this.quizSelection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize quiz when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new QuizManager();
});