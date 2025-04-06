document.addEventListener('DOMContentLoaded', function() {
  // --- Form Validation ---
  const form = document.querySelector('.guest-profile-form');
  const fullNameInput = document.getElementById('full-name');
  const dobInput = document.getElementById('dob');
  const genderInputs = document.querySelectorAll('input[name="gender"]');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const relationshipStatusInput = document.getElementById('relationship-status');
  const addressInput = document.getElementById('address');
  const lgaInput = document.getElementById('lga');
  const citySelect = document.getElementById('city');
  const stateSelect = document.getElementById('state');
  const countrySelect = document.getElementById('country');

  form.addEventListener('submit', function(event) {
    let isValid = true;

    // Helper function to display error messages
    function displayError(inputElement, message) {
      const errorDiv = inputElement.nextElementSibling;
      if (!errorDiv || !errorDiv.classList.contains('error-message')) {
        const newErrorDiv = document.createElement('div');
        newErrorDiv.className = 'error-message';
        inputElement.parentNode.insertBefore(newErrorDiv, inputElement.nextSibling);
        newErrorDiv.textContent = message;
      } else {
        errorDiv.textContent = message;
      }
      isValid = false;
    }

    // Helper function to clear error messages
    function clearError(inputElement) {
      const errorDiv = inputElement.nextElementSibling;
      if (errorDiv && errorDiv.classList.contains('error-message')) {
        errorDiv.textContent = '';
      }
    }

    // Validate Full Name
    clearError(fullNameInput);
    if (fullNameInput.value.trim() === '') {
      displayError(fullNameInput, 'Full name is required.');
    }

    // Validate DOB
    clearError(dobInput);
    if (dobInput.value === '') {
      displayError(dobInput, 'Date of birth is required.');
    }

    // Validate Gender
    clearError(document.querySelector('fieldset.form-field legend')); // Target the legend for gender error
    let genderSelected = false;
    genderInputs.forEach(input => {
      if (input.checked) {
        genderSelected = true;
      }
    });
    if (!genderSelected) {
      displayError(document.querySelector('fieldset.form-field legend'), 'Please select your gender.');
    }

    // Validate Email
    clearError(emailInput);
    if (emailInput.value.trim() === '') {
      displayError(emailInput, 'Email is required.');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
      displayError(emailInput, 'Invalid email format.');
    }

    // Validate Phone
    clearError(phoneInput);
    if (phoneInput.value.trim() === '') {
      displayError(phoneInput, 'Phone number is required.');
    } else if (!/^\d+$/.test(phoneInput.value)) {
      displayError(phoneInput, 'Invalid phone number format (numbers only).');
    } else if (phoneInput.value.length < 10 || phoneInput.value.length > 15) {
      displayError(phoneInput, 'Phone number must be between 10 and 15 digits.');
    }

    // Validate Relationship Status
    clearError(relationshipStatusInput);
    if (relationshipStatusInput.value.trim() === '') {
      displayError(relationshipStatusInput, 'Relationship status is required.');
    }

    // Validate Address
    clearError(addressInput);
    if (addressInput.value.trim() === '') {
      displayError(addressInput, 'Address is required.');
    }

    // Validate LGA
    clearError(lgaInput);
    if (lgaInput.value.trim() === '') {
      displayError(lgaInput, 'LGA is required.');
    }

    // Validate City
    // clearError(citySelect);
    // if (citySelect.value === '') {
    //   displayError(citySelect, 'Please select a city.');
    // }

    // Validate State
    clearError(stateSelect);
    if (stateSelect.value === '') {
      displayError(stateSelect, 'Please select a state/province.');
    }

    // Validate Country
    clearError(countrySelect);
    if (countrySelect.value === '') {
      displayError(countrySelect, 'Please select a country/region.');
    }

    if (!isValid) {
      event.preventDefault();
    }
  });

  // --- Populate Dropdowns ---
  const cities = ["Lagos", "Abuja", "Kano", "Port Harcourt", "Ibadan", "Benin City", "Enugu", "Jos", "Ilorin", "Calabar", "Kaduna", "Onitsha", "Owerri", "Maiduguri", "Abeokuta"];
  const states = ["Lagos State", "Federal Capital Territory", "Kano State", "Rivers State", "Oyo State", "Edo State", "Enugu State", "Plateau State", "Kwara State", "Cross River State", "Kaduna State", "Anambra State", "Imo State", "Borno State", "Ogun State"];
  const countries = ["Nigeria", "Ghana", "United Kingdom", "United States", "Canada", "South Africa", "Kenya", "Germany", "France", "Australia", "India", "China", "Japan", "Brazil", "Mexico"];

  function populateDropdown(selectElement, options) {
    options.forEach(optionText => {
      const option = document.createElement('option');
      option.value = optionText.toLowerCase().replace(/ /g, '-'); // Create a basic value
      option.textContent = optionText;
      selectElement.appendChild(option);
    });
  }

  populateDropdown(citySelect, cities);
  populateDropdown(stateSelect, states);
  populateDropdown(countrySelect, countries);

    // --- Get Center Name from URL Parameter ---
    const urlParams = new URLSearchParams(window.location.search);
    const centerName = urlParams.get('center'); // Assuming the QR code will pass 'center' as the parameter
  
    const centerNameInput = document.getElementById('center-name');
  
    if (centerName && centerNameInput) {
      centerNameInput.value = centerName;
    }
});