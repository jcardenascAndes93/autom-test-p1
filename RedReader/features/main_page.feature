Feature: See main page title

  @user1
  Scenario: As anonymous user I see main page subreddits when I press Main Page
    When I press the "MANTENERSE ANÓNIMO" button    
    And I press "Página principal"
    And I wait for 5 seconds 
    Then I see "principal"

