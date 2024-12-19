package com.mysoftltds.mysoftltd.repository;

import com.mysoftltds.mysoftltd.entity.Registration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegistrationRepository extends JpaRepository<Registration, Integer> {
}
