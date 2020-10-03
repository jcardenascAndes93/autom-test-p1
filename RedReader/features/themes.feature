Feature: Themes

  @user1
  Scenario: As anonymous user I see different themes when I touch themes menu
    When I press the "MANTENERSE ANÓNIMO" button
    And I press the menu key
    And I press "Temas"
    Then I see "Verde"
  
