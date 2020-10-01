Feature: See all subreddits title

  @user1
  Scenario: As anonymous user I see all subreddits when I press All subreddits
    When I press the "MANTENERSE ANÓNIMO" button    
    And I press "Todos los subreddits"
    And I wait for 5 seconds 
    Then I see "subreddits"

