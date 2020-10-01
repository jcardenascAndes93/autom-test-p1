Feature: Modify settings

  @user1
  Scenario: As anonymous user I modify one setting in the preferences menu
    When I press the "MANTENERSE ANÓNIMO" button
    And I press the menu key
    And I press "Preferencias"
    And I press "Apariencia"
    And I press "Rojo"
    And I wait for 1 seconds
    And I press "Noche"
    And I go back
    And I go back
    Then I see "Novedades"
  
