import React from 'react';

    function ExamChecker({ user }) {
      return (
        <div>
          <h2>Exam Checker</h2>
          <p>Welcome, {user.email}! Upload your exam answer sheet for AI evaluation.</p>
          <iframe
            src="https://streamlit-feedback-app-b1f9931b3bcf.herokuapp.com/"
            frameBorder="0"
            width="850"
            height="450"
          ></iframe>
        </div>
      );
    }

    export default ExamChecker;
