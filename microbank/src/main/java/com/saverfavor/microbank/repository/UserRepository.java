package com.saverfavor.microbank.repository;

import com.saverfavor.microbank.entity.UserRegistration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserRegistration, Integer> {
}
