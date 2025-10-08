package com.email.writer;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

@RestController
@RequestMapping("/api/email")
@CrossOrigin(origins = "*") // allow frontend to call it — you can restrict later
public class HomeController {

    @PostMapping("/generate")
    public ResponseEntity<String> generateEmail(@RequestBody String prompt) {
        // TODO: Replace this mock logic with your real AI integration
        String reply = "AI-generated reply for: " + prompt;
        return new ResponseEntity<>(reply, HttpStatus.OK);
    }
}
