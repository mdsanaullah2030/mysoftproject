package com.saverfavor.microbank.service;

import com.saverfavor.microbank.entity.UserRegistration;
import com.saverfavor.microbank.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<UserRegistration> getAllUserRegistrations() {
        return userRepository.findAll();
    }

    public UserRegistration getUserRegistrationById(int id) {
        return userRepository.findById(id).orElseThrow(
                () -> new RuntimeException("Registration not found with ID: " + id)
        );
    }

    public void saveRegistration(UserRegistration userRegistration) {
        userRepository.save(userRegistration);
    }
}
