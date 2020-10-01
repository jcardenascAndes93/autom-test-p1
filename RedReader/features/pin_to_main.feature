Feature: Pin category to home

  @user1
  Scenario: As anonymous user I select a subreddit category and pin it to home
    When I press the "MANTENERSE ANÓNIMO" button    
    And I long press "art"
    And I press "Fijar al menú principal"
    And I wait for 2 seconds
    Then I see "/r/art"

