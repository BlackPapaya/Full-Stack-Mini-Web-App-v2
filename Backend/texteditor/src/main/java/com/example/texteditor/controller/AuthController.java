package com.example.texteditor.controller;

import com.example.texteditor.model.User;
import com.example.texteditor.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class AuthController {

    private final UserRepository userRepository;

    public AuthController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Bean
    CommandLineRunner initiDatabase(UserRepository repository) {
        return args -> {
            if (repository.findByUsername("mimi") == null) {
                repository.save(new User("mimi", "nami"));
                System.out.println("Standard-User 'mimi' was created in Database SQlite");
            }
        };
    }

    //LOGIN ENDPOINT

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User loginRequest) {
        User user = userRepository.findByUsername(loginRequest.getUsername());
        if (user !=null && user.getPassword().equals(loginRequest.getPassword())) {
            return ResponseEntity.ok("Login success");
        } else {
            return ResponseEntity.status(401).body("Wrong Username or Password");
        }
    }

    }


