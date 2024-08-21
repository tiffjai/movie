import React from 'react';
import PageWrapper from '../../components/PageWrapper';

const AboutPage = () => (
  <PageWrapper>
    <div style={{ paddingTop: '60px' }}> {/* Adjust the padding as needed */}
      <h1>About This Project</h1>
      <p>
        This project was built to explore and demonstrate how to interact with The Movie Database (TMDb) API. 
        While working on this project, we encountered several challenges, particularly around handling the API data 
        and implementing the voting functionality.
      </p>
      <h2>Challenges with API Data</h2>
      <p>
        One of the initial challenges was working with the <code>data.results</code> array returned by the TMDb API. 
        Understanding the structure of the API response and correctly mapping the data to display movie information 
        was essential. This required careful handling of the data to ensure that the correct information was being 
        presented on the frontend.
      </p>
      <h2>Voting Functionality and Guest Session ID</h2>
      <p>
        Another significant challenge was implementing the voting functionality, which requires a guest session ID 
        for each user. Initially, we encountered an issue where the guest session ID creation logic led to an 
        infinite loop. This was because the guest session ID was being generated every time the component re-rendered, 
        leading to multiple unnecessary API calls and a frustrating user experience.
      </p>
      <p>
        To fix this issue, we modified the logic to create a guest session ID only when a user attempts to vote for 
        the first time. We stored the session ID in <code>localStorage</code> to ensure that it is reused for 
        subsequent votes until it expires. This approach prevented the infinite loop and reduced the number of API 
        calls, making the application more efficient and user-friendly.
      </p>
      <p>
        These challenges helped us better understand the intricacies of working with external APIs and managing 
        state in a React application, and they ultimately led to a more robust and reliable voting system.
      </p>
    </div>
  </PageWrapper>
);

export default AboutPage;
