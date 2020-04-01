package runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = {"src/test/java/feature/"},
		glue = {"stepDef"},
		plugin={"pretty","html:target/cucumber-reports/cucumber-html-reports","json:target/cucumber-reports/cucumber-json-reports.xml"}

		)
public class Runner {

}
