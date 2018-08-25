Feature: 01 Menu Bar

@feature: Login
  @story: Login via SAML
  Scenario: 01 User can login to system via SAML
    Given I login to Portal
    Then I expect to be on [Home] page

@feature: Menu Bar
  @story: View Menu Bar
  Scenario: 02 User can see Menu Bar on Home page
    Then I expect [Menu Bar] is displayed

@feature: Menu Bar
  @story: View Menu Bar
  Scenario: 03 User can see Logo in Menu Bar
    Then I expect [Logo] is present in [Menu Bar]

@feature: Menu Bar
  @story: My Account
  Scenario: 04 User can see [My Account] menu
    Then I expect "My Account" menu item is present in [Menu Bar]

@feature: Menu Bar
  @story: My Account
  Scenario: 05 User checks 1 column items of [My Account] sub-menu
    When I click "My Account" menu item in [Menu Bar]
    Then I expect "My Account" menu contains following submenu items in strict order for "1" column
      | Value      |
      | Home       |
      | Search     |
      | My Orders  |
      | My Profile |
      | Sign Out   |

@feature: Menu Bar
  @story: My Account
  Scenario: 06 User checks 2 column items of [My Account] sub-menu
    Then I expect "My Account" menu contains following submenu items in strict order for "2" column
      | Value                 |
      | Manage UI             |
      | Manage Attributes     |
      | Manage Campaign Types |
      | Manage Asset Types    |
      | Manage Roles          |
      | Manage Users          |
      | Manage SSO            |