Feature: Unpin category from home

  @user1
  Scenario: As anonymous user I select a subreddit category and unpin it from home
    When I press the "MANTENERSE ANÓNIMO" button    
    And I press "art"
    And I wait
    And I press the menu key
    And I press "Fijar al menú principal"
    And I wait
    And I go back
    And I wait
    And I long press "/r/art"
    Then I press "Quitar del menú principal"

