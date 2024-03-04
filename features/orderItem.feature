@OrderItem
Feature: Order item

  Scenario: Order Item
    Given the user is at the main page
    When the user is orders item
    And the user navigate to the shopping cart
    Then shopping cart contains order part
    When the user deletes the order

