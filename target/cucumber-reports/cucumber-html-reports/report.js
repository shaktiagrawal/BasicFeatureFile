$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/feature/a.feature");
formatter.feature({
  "name": "Test ReqRes APIs",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Get the list of users",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the baseURI for the API is \"https://reqres.in/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef.StepDef.the_baseURI_for_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the get endPoint is \"api/users\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDef.StepDef.the_get_endPoint_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user sends get request to \"page\" that is 2",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef.StepDef.the_user_sends_get_request_to_that_is(java.lang.String,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code appears to be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.StepDef.the_status_code_appears_to_be(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Show the response",
  "keyword": "And "
});
formatter.match({
  "location": "stepDef.StepDef.show_the_response()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Post a request to create a user",
  "description": "   \tGiven: the baseURI for the API is \"https://reqres.in/\"",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user sends the data:",
  "rows": [
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "stepDef.StepDef.the_user_sends_the_data(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the post endPoint is \"api/users\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDef.StepDef.the_post_endPoint_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code appears to be 201",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.StepDef.the_status_code_appears_to_be(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Show the response",
  "keyword": "And "
});
formatter.match({
  "location": "stepDef.StepDef.show_the_response()"
});
formatter.result({
  "status": "passed"
});
});