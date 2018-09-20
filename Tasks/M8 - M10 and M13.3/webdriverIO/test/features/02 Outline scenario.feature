Feature: 02 Outline scenario

  @feature: Login
  @story: Login via SAML
  Scenario: 01 User can login to system via SAML
    Given I login to Portal via "saml-idp"
    Then I expect to be on [Home] page

  @feature: Menu Bar Navigation
  @story: Menu Bar Navigation to Search/My Orders pages
  Scenario Outline: 02 User can navigate to pages
    When I click "My Account" - "<selectMenu>" submenu item in [Menu Bar]
    Then I expect to be on "<expPage>" page

    Examples:
      | selectMenu | expPage   |
      | Search     | Search    |
      | My Orders  | My Orders |