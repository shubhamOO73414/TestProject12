Feature: performing login into facebook

  Background:
    Given I'm in login page

  Scenario Outline: Login with default user
    When login with default user <username>
    Then enter password <password>
    Then hit enter
    Then verify error message <msg>
    Examples:
     |username|password|msg|
    |shubham3414|sd@41254|Forgotten password?|

#  Scenario Outline: Login with default user
#    When login with default user <username>
#    Then enter password <password>
#    Then hit enter
#    Then verify error message <msg>
#    Examples:
#      |username|password|msg|
#      |8604821452|sd@41254|Happy New Year|