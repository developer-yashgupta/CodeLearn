// Course Management System
class CourseManager {
    constructor(courseType, lessons, totalLessons) {
        this.courseType = courseType;
        this.lessons = lessons;
        this.totalLessons = totalLessons;
        this.currentLesson = 1;
        
        this.initializeElements();
        this.bindEvents();
        this.loadLesson(1);
        this.updateProgress();
    }

    initializeElements() {
        this.lessonTitle = document.getElementById('lesson-title');
        this.lessonBody = document.getElementById('lesson-body');
        this.codeInput = document.getElementById('code-input');
        this.outputFrame = document.getElementById('output-frame');
        this.runCodeBtn = document.getElementById('run-code');
        this.prevBtn = document.getElementById('prev-lesson');
        this.nextBtn = document.getElementById('next-lesson');
        this.completeBtn = document.getElementById('complete-lesson');
        this.sidebarToggle = document.getElementById('sidebar-toggle');
        this.sidebar = document.querySelector('.course-sidebar');
    }

    bindEvents() {
        // Code execution
        if (this.runCodeBtn) {
            this.runCodeBtn.addEventListener('click', () => this.runCode());
        }
        
        // Navigation
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.previousLesson());
        }
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.nextLesson());
        }
        if (this.completeBtn) {
            this.completeBtn.addEventListener('click', () => this.completeLesson());
        }
        
        // Sidebar navigation
        document.querySelectorAll('.lesson-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const lessonNum = parseInt(e.currentTarget.dataset.lesson);
                if (lessonNum && this.lessons[lessonNum]) {
                    this.loadLesson(lessonNum);
                }
            });
        });

        // Mobile sidebar toggle
        if (this.sidebarToggle && this.sidebar) {
            this.sidebarToggle.addEventListener('click', () => {
                this.sidebar.classList.toggle('active');
            });
        }

        // Auto-run code on input (with debounce)
        if (this.codeInput) {
            let timeout;
            this.codeInput.addEventListener('input', () => {
                clearTimeout(timeout);
                timeout = setTimeout(() => this.runCode(), 1000);
            });
        }

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey || e.metaKey) {
                switch(e.key) {
                    case 'Enter':
                        e.preventDefault();
                        this.runCode();
                        break;
                    case 'ArrowLeft':
                        e.preventDefault();
                        this.previousLesson();
                        break;
                    case 'ArrowRight':
                        e.preventDefault();
                        this.nextLesson();
                        break;
                }
            }
        });
    }

    loadLesson(lessonNum) {
        if (!this.lessons[lessonNum]) {
            console.error('Lesson not found:', lessonNum);
            return;
        }

        this.currentLesson = lessonNum;
        const lesson = this.lessons[lessonNum];

        // Update content
        if (this.lessonTitle) {
            this.lessonTitle.textContent = lesson.title;
        }
        if (this.lessonBody) {
            this.lessonBody.innerHTML = lesson.content;
        }
        if (this.codeInput) {
            this.codeInput.value = lesson.code;
        }

        // Update lesson meta
        const duration = document.querySelector('.lesson-duration');
        const difficulty = document.querySelector('.lesson-difficulty');
        if (duration) duration.textContent = `⏱️ ${lesson.duration}`;
        if (difficulty) difficulty.textContent = `📚 ${lesson.difficulty}`;

        // Update sidebar
        this.updateSidebarActive(lessonNum);
        
        // Update navigation buttons
        this.updateNavigationButtons();
        
        // Update completion status
        this.updateCompleteButton();

        // Run code automatically
        setTimeout(() => this.runCode(), 200);

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    updateSidebarActive(lessonNum) {
        document.querySelectorAll('.lesson-item').forEach(item => {
            item.classList.remove('active');
            if (parseInt(item.dataset.lesson) === lessonNum) {
                item.classList.add('active');
            }
        });
    }

    updateNavigationButtons() {
        if (this.prevBtn) {
            this.prevBtn.disabled = this.currentLesson === 1;
        }
        if (this.nextBtn) {
            this.nextBtn.disabled = this.currentLesson === this.totalLessons;
        }
    }

    updateCompleteButton() {
        if (!this.completeBtn) return;
        
        const isCompleted = window.progressTracker.isLessonComplete(this.courseType, this.currentLesson);
        this.completeBtn.textContent = isCompleted ? 'Completed ✓' : 'Mark as Complete';
        this.completeBtn.classList.toggle('completed', isCompleted);
    }

    runCode() {
        if (!this.codeInput || !this.outputFrame) return;

        const code = this.codeInput.value;
        
        try {
            const doc = this.outputFrame.contentDocument || this.outputFrame.contentWindow.document;
            
            if (this.courseType === 'js') {
                // JavaScript course - capture console output
                const htmlContent = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body {
            font-family: 'Courier New', monospace;
            margin: 0;
            padding: 15px;
            background: #1e1e1e;
            color: #d4d4d4;
            font-size: 14px;
            line-height: 1.4;
        }
        .output-line {
            margin: 2px 0;
            white-space: pre-wrap;
            word-break: break-word;
        }
        .error {
            color: #f48771;
            background: rgba(244, 135, 113, 0.1);
            padding: 5px;
            border-left: 3px solid #f48771;
            margin: 5px 0;
        }
        .log {
            color: #d4d4d4;
        }
        .warn {
            color: #ffcc02;
        }
        .info {
            color: #75beff;
        }
    </style>
</head>
<body>
    <div id="output"></div>
    <script>
        (function() {
            const output = document.getElementById('output');
            output.innerHTML = '';
            
            // Capture console methods
            const originalConsole = {
                log: console.log,
                error: console.error,
                warn: console.warn,
                info: console.info
            };
            
            function addOutput(message, type = 'log') {
                const div = document.createElement('div');
                div.className = 'output-line ' + type;
                
                // Handle different types of values
                if (typeof message === 'object' && message !== null) {
                    try {
                        div.textContent = JSON.stringify(message, null, 2);
                    } catch (e) {
                        div.textContent = String(message);
                    }
                } else {
                    div.textContent = String(message);
                }
                
                output.appendChild(div);
            }
            
            // Override console methods
            console.log = function(...args) {
                args.forEach(arg => addOutput(arg, 'log'));
                originalConsole.log.apply(console, args);
            };
            
            console.error = function(...args) {
                args.forEach(arg => addOutput(arg, 'error'));
                originalConsole.error.apply(console, args);
            };
            
            console.warn = function(...args) {
                args.forEach(arg => addOutput(arg, 'warn'));
                originalConsole.warn.apply(console, args);
            };
            
            console.info = function(...args) {
                args.forEach(arg => addOutput(arg, 'info'));
                originalConsole.info.apply(console, args);
            };
            
            // Handle errors
            window.onerror = function(message, source, lineno, colno, error) {
                addOutput('Error: ' + message + ' (Line: ' + lineno + ')', 'error');
                return true;
            };
            
            // Execute user code
            try {
                ${code}
            } catch (error) {
                addOutput('Error: ' + error.message, 'error');
            }
        })();
    </script>
</body>
</html>`;

                doc.open();
                doc.write(htmlContent);
                doc.close();
            } else {
                // HTML/CSS courses - render directly
                doc.open();
                doc.write(code);
                doc.close();
            }
        } catch (error) {
            console.error('Error running code:', error);
            try {
                const doc = this.outputFrame.contentDocument || this.outputFrame.contentWindow.document;
                doc.open();
                doc.write(`<div style="color: red; padding: 20px; font-family: Arial;">
                    <h3>Error:</h3>
                    <p>${error.message}</p>
                </div>`);
                doc.close();
            } catch (e) {
                console.error('Failed to display error:', e);
            }
        }
    }

    previousLesson() {
        if (this.currentLesson > 1) {
            this.loadLesson(this.currentLesson - 1);
        }
    }

    nextLesson() {
        if (this.currentLesson < this.totalLessons) {
            this.loadLesson(this.currentLesson + 1);
        }
    }

    completeLesson() {
        const isCompleted = window.progressTracker.isLessonComplete(this.courseType, this.currentLesson);
        
        if (!isCompleted) {
            window.progressTracker.markLessonComplete(this.courseType, this.currentLesson);
            this.updateCompleteButton();
            this.updateProgress();
            this.updateSidebarStatus();
            
            if (window.showNotification) {
                window.showNotification(`Lesson ${this.currentLesson} completed! 🎉`, 'success');
            }
            
            // Auto-advance to next lesson after a delay
            if (this.currentLesson < this.totalLessons) {
                setTimeout(() => {
                    if (confirm('Great job! Would you like to continue to the next lesson?')) {
                        this.nextLesson();
                    }
                }, 1500);
            } else {
                // Course completed
                setTimeout(() => {
                    if (window.showNotification) {
                        window.showNotification(`Congratulations! You completed the ${this.courseType.toUpperCase()} course! 🏆`, 'success');
                    }
                }, 1500);
            }
        }
    }

    updateProgress() {
        const completed = window.progressTracker.progress[this.courseType].completed.length;
        const percentage = Math.round((completed / this.totalLessons) * 100);

        // Update sidebar progress
        const completedSpan = document.getElementById('completed-lessons');
        const totalSpan = document.getElementById('total-lessons');
        const progressBar = document.getElementById('sidebar-progress');

        if (completedSpan) completedSpan.textContent = completed;
        if (totalSpan) totalSpan.textContent = this.totalLessons;
        if (progressBar) progressBar.style.width = percentage + '%';
    }

    updateSidebarStatus() {
        document.querySelectorAll('.lesson-item').forEach(item => {
            const lessonNum = parseInt(item.dataset.lesson);
            const statusSpan = item.querySelector('.lesson-status');
            const isCompleted = window.progressTracker.isLessonComplete(this.courseType, lessonNum);
            
            if (statusSpan) {
                statusSpan.textContent = isCompleted ? '✓' : '';
                item.classList.toggle('completed', isCompleted);
            }
        });
    }
}

// Initialize course function
function initializeCourse(courseType, lessons, totalLessons) {
    // Ensure progressTracker exists
    if (!window.progressTracker) {
        console.error('Progress tracker not found');
        return;
    }
    
    // Set total lessons in progress tracker
    window.progressTracker.setCourseTotalLessons(courseType, totalLessons);
    
    // Create course manager
    const courseManager = new CourseManager(courseType, lessons, totalLessons);
    
    // Update initial sidebar status
    courseManager.updateSidebarStatus();
    
    // Make it globally accessible for debugging
    window.courseManager = courseManager;
}

// Code formatting and syntax highlighting (basic)
function formatCode(code) {
    // Basic HTML formatting
    return code
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/(&lt;\/?[^&]*&gt;)/g, '<span class="html-tag">$1</span>')
        .replace(/(=")([^"]*)(")/g, '=$1<span class="html-attr">$2</span>$3');
}

// Resize code editor
function initializeCodeEditor() {
    const codeInput = document.getElementById('code-input');
    if (!codeInput) return;

    // Auto-resize textarea
    function autoResize() {
        codeInput.style.height = 'auto';
        codeInput.style.height = Math.max(400, codeInput.scrollHeight) + 'px';
        
        // Update line numbers height to match
        const lineNumbers = codeInput.parentNode.querySelector('.line-numbers');
        if (lineNumbers) {
            lineNumbers.style.height = codeInput.style.height;
        }
    }

    codeInput.addEventListener('input', autoResize);
    autoResize(); // Initial resize

    // Add line numbers
    addLineNumbers();
    
    // Initial auto-resize after line numbers are added
    setTimeout(autoResize, 100);
}

function addLineNumbers() {
    const codeInput = document.getElementById('code-input');
    if (!codeInput) return;

    // Check if line numbers already exist
    if (codeInput.parentNode.querySelector('.line-numbers')) return;

    const lineNumbers = document.createElement('div');
    lineNumbers.className = 'line-numbers';
    
    function updateLineNumbers() {
        const lines = codeInput.value.split('\n');
        const lineCount = lines.length;
        
        // Create line numbers with proper formatting
        let numbersHTML = '';
        for (let i = 1; i <= lineCount; i++) {
            numbersHTML += i + '\n';
        }
        
        lineNumbers.textContent = numbersHTML.trim();
    }

    // Update line numbers on input
    codeInput.addEventListener('input', updateLineNumbers);
    
    // Sync scroll position
    codeInput.addEventListener('scroll', () => {
        lineNumbers.scrollTop = codeInput.scrollTop;
    });

    // Initial update
    updateLineNumbers();
    
    // Insert line numbers before textarea
    codeInput.parentNode.insertBefore(lineNumbers, codeInput);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeCodeEditor();
});

// Export for global use
window.initializeCourse = initializeCourse;