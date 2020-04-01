package stepDef;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

import static io.restassured.RestAssured.given;

import java.util.Map;

import org.json.simple.JSONObject;


public class StepDef {
	RequestSpecification request = RestAssured.given();
	Response res;
	JSONObject requestParams = new JSONObject();
	
	
	@Given("the baseURI for the API is {string}")
	public void the_baseURI_for_the_API_is(String string) {
		RestAssured.baseURI = string;
		
	}

	@Given("the get endPoint is {string}")
	public void the_get_endPoint_is(String string) {
		res=given().when().get(string);
	}
	@When("the post endPoint is {string}")
	public void the_post_endPoint_is(String string) {
		res=request.post(string);
	}

	@When("the user sends get request to {string} that is {int}")
	public void the_user_sends_get_request_to_that_is(String string, Integer int1) {
		given().param(string, int1);
	}
	private Object parse(String value) {
		try {
			return Integer.parseInt(value);
		} catch (NumberFormatException e) {
			return value;
		}
	}
	@When("the user sends the data:")
	public void the_user_sends_the_data(Map<String,String> dataTable) {

			JSONObject json = new JSONObject();
		    for(Map.Entry<String, String> entry:dataTable.entrySet())
		    {
		    	json.put(entry.getKey(),parse(entry.getValue()));
		    }
		    request.header("Content-Type","application/json");
		    request.body(json.toString());
			
		}

	@Then("the status code appears to be {int}")
	public void the_status_code_appears_to_be(Integer int1) {
		res.then().assertThat().statusCode(int1);
	}
	@Then("Show the response")
	public void show_the_response() {
		System.out.println(res.body().asString());
	 }
	
}
