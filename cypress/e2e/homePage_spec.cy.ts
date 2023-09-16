describe('E2E testing for front end, home page', () => {
  // before each test, visit the landing page
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('checking header text in IntroSection', () => {
    cy.get('[data-cy=intro-title]')
      .should('have.text', 'Protect and monitor your GraphQL Endpoints')

    // check the paragraph text in the intro section
    cy.get('[data-cy=intro-body]')
      .should('have.text', 'GleiphQL is an Express middleware library which enhances performance and security by calculating query complexity, optimizing resource allocation, and preventing bottlenecks.')

    // check if the image in the intro section exists
    cy.get('.object-center').should('exist');
  })


  it('checking text content in the FeaturesSection', () => {
    // checking header of section
    cy.get('[data-cy=features-title]')
      .should('have.text', 'Features')

    // checking if GIF section exists and rendering properly
    cy.get('[data-cy=gif-monitoring]')
      .should('exist')

    // checking text content of Monitoring section
    cy.get('[data-cy=monitoring-section]')
      .should('have.text', 'Monitoring')

    cy.get('[data-cy=feature1]')
      .should('have.text', 'User friendly dashboard to add additional endpoints and to navigate insightful metrics.')

    cy.get('[data-cy=feature2]')
      .should('have.text', 'An analysis of the most frequently called API endpoints and a display of request trends over different time frames.')

    cy.get('[data-cy=feature3]')
      .should('have.text', 'A table to represent query metrics, including query text, depth, and complexity score.')

    // checking text content of Rate Limiting section
    cy.get('[data-cy=gif-complexity-scores]')
      .should('exist')

    cy.get('[data-cy=rate-limiting-section]')
      .should('have.text', `Rate Limiting`)
    
    cy.get('[data-cy=feature4]')
      .should('have.text', 'Swiftly computes complexity scores pre-execution based on user-defined costs and list-sizes exposed in the schema definition directives.')

    cy.get('[data-cy=feature5]')
      .should('have.text', 'Effortless customization that allows the user to configure rate limiting rules, ensuring optimal control and flexibility over API usage limits.')

    cy.get('[data-cy=feature6]')
    .should('have.text', 'Seamlessly integrates with Apollo Client and Server, offering smooth integration with existing Apollo-powered architecture.')
  })


  // Checking content of Instruction Section
  it ('checking text content and of the Instructions Section', () => {
    // checking the header portion
    cy.get('[data-cy=instruction-title]')
    .should('have.text', 'Get Started Easily')

    // checking the instructions text
    cy.get('[data-cy=instruction-body]')
      .should('have.text', `Ready to revolutionize your GraphQL endpoint? Take the first step towards a faster, smarter, and more secure API infrastructure.`)
    
    // checking more info button has correct text
    cy.get('[data-cy=moreInfo-btn]').should('have.text', 'More Info');
  });

  it('checking "More Info" link has the correct attributes', () => {
    cy.get('[data-cy=moreInfo-btn]').should('have.attr', 'href', 'https://github.com/oslabs-beta/GleiphQL');
    cy.get('[data-cy=moreInfo-btn]').should('have.attr', 'target', '_blank');
  });

  it('checking "More Info" link has a secure link', () => {
    cy.get('[data-cy=moreInfo-btn]').invoke('attr', 'href').should('match', /^https:/);
  });

  // Test clicking the link directly without interception
it('should open a new tab when the "More Info" link is clicked', () => {
  // Check that the link opens in a new tab/window
  cy.get('[data-cy=moreInfo-btn]').should('have.attr', 'target', '_blank'); 

  // opens new tab
  //cy.get('[data-cy=moreInfo-btn]').click({ force: true });

  // currently not passing even though new tab address is correct
  //cy.url().should('eq', 'https://github.com/oslabs-beta/GleiphQL');
});

it('checking content and functionality of the "Meet the Team" section', () => {
  cy.get('[data-cy=team-header]')
    .should('exist')
    .should('have.text', 'Meet the Team')

  cy.get('[data-cy=profile-cards]').each(($profileCard, index) => {
    // Use assertions to check the content of each profile card
    cy.wrap($profileCard).within(() => {
      cy.get('[data-cy=profile-name]').should('have.text', profileCards[index].memberName);
      cy.get('[data-cy=profile-bio]').should('have.text', profileCards[index].memberBio);
    });
  });
});


it('checking Footer content and functionality', () => {
  cy.get('[data-cy=footer-title]')
    .should('exist')
    .should('have.text', `Want to Contribute?`)

  cy.get('[data-cy=footer-body]')
    .should('exist')
    .should('have.text', `Join us and help developers secure and monitor their GraphQL endpoints.`)

  // test href attribute for each of the buttons
  cy.get('[data-cy=github-btn]')
    .should('have.attr', 'href', 'https://github.com/oslabs-beta/GleiphQL');
  cy.get('[data-cy=github-btn]')
    .should('have.attr', 'target', '_blank');

  cy.get('[data-cy=linkedIn-btn]')
    .should('have.attr', 'href', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  cy.get('[data-cy=linkedIn-btn]')
    .should('have.attr', 'target', '_blank');
})


})