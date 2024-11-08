function validateForm() {
    const messageDiv = document.getElementById ('message');
    messageDiv.innerHTML = '';
  
  
      const firstName = document.getElementById('firstName').value.trim();
      const lastName = document.getElementById('lastName').value.trim();
      const email = document.getElementById('email').value.trim();
   
      // Name Validation
      const namePattern = /^[a-zA-Z]+$/;
      if (!firstName || !namePattern.test(firstName)) {
        messageDiv.innerHTML += '<p style="color: red;"> Please enter a valid first name (letters only).</p>';
        return;
      }
      if (!lastName || !namePattern.test(lastName)) {
        messageDiv.innerHTML += '<p style="color: red;"> Please enter a valid last name (letters only).</p>';
        return;
      }
   
      // Email Validation
      const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
      if (!email || !emailPattern.test(email)) {
        messageDiv.innerHTML += '<p style="color: red;"> Please enter a valid email address.</p>';
        return;
      }
  
       //Questions Validation
      const q2 = document.querySelector('input[name="q2"]:checked');
      if (!q2) {
        messageDiv.innerHTML += '<p style="color: red;"> Question 2 is required. </p>';
        return;
      }
  
  
      const q4 = document.getElementById("q4");
      if (q4.value === "") {
        messageDiv.innerHTML += '<p style="color: red;"> Please select an option for Question 4. </p>';
        return;
      }
  
  
      const q5 = document.querySelector('input[name="q5"]:checked');
      if (!q5) {
        messageDiv.innerHTML += '<p style="color: red;"> Question 5 is required. </p>';
        return;
      }

      const q6 = document.getElementById('q6').value.trim();
      if (!q6) {
        messageDiv.innerHTML += '<p style="color: red;"> Question 6 is required. </p>';
        return;
      }
  
  
      //  Success Message
        messageDiv.innerHTML = '<p style="color: limegreen;"> Your answers have been submitted successfully! </p>';
  
  
    }
  

