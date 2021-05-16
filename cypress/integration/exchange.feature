Feature: Main page

    I want to check success exchange 

    Scenario: Check success exchange from BTC to ETH (english page)
    Given I open "/" url
    Then I see "Crypto Exchange" in title
    When I click exchange button
    Then I see "Please enter the details of your exchange"
    When I fill my recipient wallet
    And I click Next button
    Then I see "Please confirm the details of your exchange"
    When I click Confirm button
    Then I see "Please send the funds you would like to exchange"