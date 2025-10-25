// --- Mobile Navigation Toggle ---
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // --- Smooth Scroll & Close Mobile Menu on Link Click ---
        document.querySelectorAll('.nav-links a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Adjust for sticky header
                        behavior: 'smooth'
                    });
                }
                
                // Close mobile menu after clicking a link
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            });
        });

        // --- Mission Text Typing Animation ---
        function initMissionAnimation() {
            const missionLine = document.querySelector('.mission-line');
            if (!missionLine) return;

            const missionTexts = [
                '🏆 Winners don\'t wait — they build.',
                '⚙️ Code. Create. Compete. Conquer.',
                '🔧 Break problems, build solutions.',
                '💪 Your team. Your vision. Your victory.'
            ];

            let currentTextIndex = 0;
            let currentCharIndex = 0;
            let isDeleting = false;

            function typeMission() {
                const currentText = missionTexts[currentTextIndex];

                if (!isDeleting) {
                    // Typing
                    missionLine.textContent = currentText.substring(0, currentCharIndex + 1);
                    currentCharIndex++;

                    if (currentCharIndex === currentText.length) {
                        // Finished typing, pause before deleting
                        setTimeout(() => {
                            isDeleting = true;
                            setTimeout(typeMission, 500);
                        }, 2000); // Display for 2 seconds
                        return;
                    }
                } else {
                    // Deleting
                    missionLine.textContent = currentText.substring(0, currentCharIndex - 1);
                    currentCharIndex--;

                    if (currentCharIndex === 0) {
                        // Finished deleting, move to next text
                        isDeleting = false;
                        currentTextIndex = (currentTextIndex + 1) % missionTexts.length;
                        setTimeout(typeMission, 500); // Pause before typing next
                        return;
                    }
                }

                // Continue animation
                const speed = isDeleting ? 5 : 30;
                setTimeout(typeMission, speed);
            }

            // Start the animation
            setTimeout(typeMission, 500);
        }

        // Initialize mission animation when DOM is loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initMissionAnimation);
        } else {
            initMissionAnimation();
        }