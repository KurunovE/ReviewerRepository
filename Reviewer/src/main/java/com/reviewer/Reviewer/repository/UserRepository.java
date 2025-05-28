package com.reviewer.Reviewer.repository;

import com.reviewer.Reviewer.models.User.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User, Long> {
    User findUserByEmail(String email);
}
