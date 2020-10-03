Feature: Accounts

  @user1
  Scenario: As anonymous user I see current accounts when I touch accounts menu
    When I press the "MANTENERSE ANÓNIMO" button
    And I press the menu key
    And I press "Cuentas"
    Then I see "Cuentas de Reddit"
  
