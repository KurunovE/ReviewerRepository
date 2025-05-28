package com.reviewer.Reviewer.services.impl;

import com.reviewer.Reviewer.models.User.User;
import com.reviewer.Reviewer.repository.UserRepository;
import com.reviewer.Reviewer.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
@AllArgsConstructor
@Primary
public class UserServicesImpl implements UserService {
    private final UserRepository userRepository;

    @Override
    public User findUserById(long id) {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public User findUserByEmail(String email) {
        return userRepository.findUserByEmail(email);
    }

    @Override
    public User updateUsername(long id, String newUsername) {
        return null;
    }

    @Override
    public User updateEmail(long id, String newEmail) {
        return null;
    }

    @Override
    public User updatePassword(long id, String newPassword) {
        return null;
    }

    @Override
    public User updateBirthday(long id, LocalDate newBirthday) {
        return null;
    }

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }
}
