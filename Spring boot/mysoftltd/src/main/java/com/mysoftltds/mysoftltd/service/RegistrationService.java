package com.mysoftltds.mysoftltd.service;

import com.mysoftltds.mysoftltd.entity.Registration;
import com.mysoftltds.mysoftltd.repository.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegistrationService {

    @Autowired
    private RegistrationRepository registrationRepository;

    public List<Registration> getAllRegistrations() {
        return registrationRepository.findAll();
    }

    public Registration getRegistrationById(int id) {
        return registrationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Registration not found with ID: " + id));
    }

    public void saveRegistration(Registration registration) {
        registrationRepository.save(registration);
    }

    public void updateRegistration(int id, Registration updatedRegistration) {
        Registration existingRegistration = registrationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Registration not found with ID: " + id));

        existingRegistration.setName(updatedRegistration.getName());
        existingRegistration.setPresentAddress(updatedRegistration.getPresentAddress());
        existingRegistration.setPermanentAddress(updatedRegistration.getPermanentAddress());
        existingRegistration.setGender(updatedRegistration.getGender());
        existingRegistration.setAge(updatedRegistration.getAge());
        existingRegistration.setCellNo(updatedRegistration.getCellNo());

        registrationRepository.save(existingRegistration);
    }

    public boolean deleteRegistration(int id) {
        if (registrationRepository.existsById(id)) {
            registrationRepository.deleteById(id);
            return true;
        } else {
            throw new RuntimeException("Registration not found with ID: " + id);
        }
    }


}
