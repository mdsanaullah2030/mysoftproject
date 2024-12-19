package com.mysoftltds.mysoftltd.restController;

import com.mysoftltds.mysoftltd.entity.Registration;
import com.mysoftltds.mysoftltd.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/api/registrations")
public class RegistrationController {

    @Autowired
    private RegistrationService registrationService;

    @GetMapping
    public List<Registration> getAllRegistrations() {
        return registrationService.getAllRegistrations();
    }

    @GetMapping("/{id}")
    public Registration getRegistrationById(@PathVariable int id) {
        return registrationService.getRegistrationById(id);
    }

    @PostMapping("/save")
    public void saveRegistration(@RequestBody Registration registration) {
        registrationService.saveRegistration(registration);
    }

    @PutMapping("/update/{id}")
    public void updateRegistration(@PathVariable int id, @RequestBody Registration registration) {
        registrationService.updateRegistration(id, registration);
    }

    @DeleteMapping("/{id}")
    public void deleteRegistration(@PathVariable int id) {
        registrationService.deleteRegistration(id);
    }


}