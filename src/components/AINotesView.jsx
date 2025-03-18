import React from 'react';

    function AINotesView({ user }) {
      return (
        <div>
          <h2>AI Notes View</h2>
          <p>Welcome, {user.email}! Access your AI-generated notes here.</p>
          <iframe
            src="https://streamlit-feedback-app-b1f9931b3bcf.herokuapp.com/"
            frameBorder="0"
            width="850"
            height="450"
          ></iframe>
        </div>
      );
    }

    export default AINotesView;
