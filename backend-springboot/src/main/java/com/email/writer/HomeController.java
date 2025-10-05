package com.email.writer;  // same package as your main application

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/api")
    public String home() {
        return "Email Reply Generator API is running!";
    }
}
