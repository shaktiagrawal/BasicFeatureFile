Feature: Test ReqRes APIs

  Scenario: Get the list of users
    Given the baseURI for the API is "https://reqres.in/"
    And the get endPoint is "api/users"
    When the user sends get request to "page" that is 2
    Then the status code appears to be 200
    And Show the response
    
   Scenario: Post a request to create a user
   	Given: the baseURI for the API is "https://reqres.in/"
    When the user sends the data:
    	|	name	|	Shakti |
    	|	job		|		QE	 |
    And the post endPoint is "api/users"
    Then the status code appears to be 201
    And Show the response