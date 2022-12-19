package com.dev.conectarecycle;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

//(exclude = {SecurityAutoConfiguration.class}) codigo usado para não precisar fazer autenticação 

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class ConectarecycleApplication {

	public static void main(String[] args) {
		SpringApplication.run(ConectarecycleApplication.class, args);
	}

}
