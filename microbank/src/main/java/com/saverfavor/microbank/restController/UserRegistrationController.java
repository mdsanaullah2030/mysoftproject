package com.saverfavor.microbank.restController;

import com.saverfavor.microbank.entity.UserRegistration;
import com.saverfavor.microbank.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/microbank")
public class UserRegistrationController {

    @Autowired
    private UserService userService;

    @GetMapping("/get")
    public List<UserRegistration> getAllUsers() {
        return userService.getAllUserRegistrations();
    }

    @PostMapping("/save")
    public void saveRegistration(@RequestBody UserRegistration userRegistration) {
        userService.saveRegistration(userRegistration);
    }
}
