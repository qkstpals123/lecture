/**
 * RIKU & SEMIN D-Day Tracker
 * Core logic for date calculation and celebrations.
 */

document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('meeting-date');
    const confirmBtn = document.getElementById('confirm-btn');
    const resultContainer = document.getElementById('result-container');
    const ddayValue = document.getElementById('dday-value');
    const ddayMessage = document.getElementById('dday-message');

    // Set default date to today
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;

    confirmBtn.addEventListener('click', () => {
        const selectedDate = dateInput.value;
        
        if (!selectedDate) {
            alert('Please select a sweet date! 🍮');
            return;
        }

        const targetDate = new Date(selectedDate);
        const currentDate = new Date();
        
        // Reset time parts for accurate day calculation
        targetDate.setHours(0, 0, 0, 0);
        currentDate.setHours(0, 0, 0, 0);

        const diffTime = targetDate - currentDate;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        displayResult(diffDays);
        triggerCelebration();
    });

    /**
     * Updates the UI with the calculated D-Day
     * @param {number} days 
     */
    function displayResult(days) {
        resultContainer.classList.remove('hidden');
        
        let prefix = 'D';
        let value = days;
        let message = '';

        if (days === 0) {
            value = '-Day';
            message = "Yay! It's today! Have a sweet time! 🍩";
        } else if (days > 0) {
            value = `-${days}`;
            message = `Only ${days} days left until the sweetness! 🍰`;
        } else {
            value = `+${Math.abs(days)}`;
            message = `${Math.abs(days)} days since your last meeting! 🍮`;
        }

        ddayValue.textContent = `${prefix}${value}`;
        ddayMessage.textContent = message;

        // Smooth scroll to result
        resultContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    /**
     * Triggers a confetti animation using canvas-confetti
     */
    function triggerCelebration() {
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        const interval = setInterval(function() {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            
            // Confetti colors matching our pastel theme
            const colors = ['#f4d0e1', '#fff9c4', '#e1f5fe', '#ffccbc'];

            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
                colors: colors
            });
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
                colors: colors
            });
        }, 250);
    }
});
