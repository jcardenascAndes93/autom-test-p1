Feature: Newness

  @user1
  Scenario: As anonymous user I see what's new in the current version of the app
    When I press the "MANTENERSE ANÓNIMO" button
    And I press the menu key
    And I press "Preferencias"
    And I press "Acerca de"
    And I press "Novedades"
    Then I see "1.9.10"
  
