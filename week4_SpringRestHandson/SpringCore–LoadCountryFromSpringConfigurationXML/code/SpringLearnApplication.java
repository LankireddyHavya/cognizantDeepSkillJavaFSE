package com.cognizant.spring_learn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class SpringLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args) {
        LOGGER.debug("START");

        // Start Spring Boot application context
        ApplicationContext context = SpringApplication.run(SpringLearnApplication.class, args);

        displayCountry();

        LOGGER.debug("END");
    }

    public static void displayCountry() {
        // Load the XML-based Spring context
        ApplicationContext xmlContext = new org.springframework.context.support.ClassPathXmlApplicationContext("country.xml");
        Country country = xmlContext.getBean("country", Country.class);
        LOGGER.debug("Country : {}", country.toString());
    }
}
