Feature: 03 Mixin use

  @feature: Login
  @story: Login via SAML
  Scenario: 01 User can login to system via SAML
    Given I login to Portal via saml-idp
    Then I expect to be on [Home] page

  @feature: Menu Bar Navigation
  @story: Menu Bar Navigation to Search/My Orders pages
  Scenario: 02 User checks page title
    When I click "My Account" - "My Orders" submenu item in [Menu Bar]
    Then I expect to be on "My Orders" page
    And I expect page title to be ''