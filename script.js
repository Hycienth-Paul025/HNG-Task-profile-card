"use strict";

document.addEventListener("DOMContentLoaded", () => {
  function updateTime() {
            const timeElement = document.getElementById('current-time-ms');
            if (timeElement) {

              const currentTimeMs = Date.now();
                timeElement.textContent = currentTimeMs;
            }
        }

         updateTime();

        // setInterval(updateTime, 1000); 



    const form = document.getElementById('contact-form');
        const successMessage = document.getElementById('success-message');
        
        const fields = [
            { id: 'contact-name', errorId: 'test-contact-error-name', required: true, validation: (val) => val.trim() !== '', message: 'Full Name is required.' },
            { id: 'contact-email', errorId: 'test-contact-error-email', required: true, validation: (val) => /^\S+@\S+\.\S+$/.test(val), message: 'A valid email (name@example.com) is required.' },
            { id: 'contact-subject', errorId: 'test-contact-error-subject', required: true, validation: (val) => val.trim() !== '', message: 'Subject is required.' },
            { id: 'contact-message', errorId: 'test-contact-error-message', required: true, validation: (val) => val.trim().length >= 10, message: 'Message must be at least 10 characters long.' }
        ];

        function validateField(fieldConfig) {
            const input = document.getElementById(fieldConfig.id);
            const errorElement = document.querySelector(`[data-testid="${fieldConfig.errorId}"]`);
            const value = input.value;
            let isValid = true;

            if (!fieldConfig.validation(value)) {
                isValid = false;
                errorElement.textContent = fieldConfig.message;
                errorElement.style.display = 'block';
                input.setAttribute('aria-invalid', 'true');
            } else {
                errorElement.style.display = 'none';
                input.removeAttribute('aria-invalid');
            }
            return isValid;
        }

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            let formIsValid = true;
            let firstInvalidField = null;

            // Run validation for all fields
            fields.forEach(fieldConfig => {
                const isValid = validateField(fieldConfig);
                if (!isValid) {
                    formIsValid = false;
                    if (!firstInvalidField) {
                        firstInvalidField = document.getElementById(fieldConfig.id);
                    }
                }
            });

            if (formIsValid) {
                // SUCCESS: Hide form, show confirmation
                form.style.display = 'none';
                successMessage.style.display = 'block';
                // In a real app, you would send data to a server here.
                console.log("Form submitted successfully!");
            } else {
                // Focus on the first invalid field for better UX/A11y
                if (firstInvalidField) {
                    firstInvalidField.focus();
                }
            }
        });
        
        // Enhance UX/A11y: Validate on blur
        fields.forEach(fieldConfig => {
            document.getElementById(fieldConfig.id).addEventListener('blur', () => {
                validateField(fieldConfig);
            });
        });
});
