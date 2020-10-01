Feature: Subreedits suscritos label

  @user1
  Scenario: As anonymous user I see Subscribed Subreddits label    
    When I press the "MANTENERSE ANÓNIMO" button
    Then I see "Subreddits suscritos"  
  
