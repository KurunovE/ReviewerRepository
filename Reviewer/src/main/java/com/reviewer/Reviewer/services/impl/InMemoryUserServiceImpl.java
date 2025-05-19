package com.reviewer.Reviewer.services.impl;

import com.reviewer.Reviewer.models.User.User;
import com.reviewer.Reviewer.repository.InMemoryUserDAO;
import com.reviewer.Reviewer.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
@AllArgsConstructor
public class InMemoryUserServiceImpl implements UserService {

    private final InMemoryUserDAO repository;

    @Override
    public User findUserById(long id) {
        return repository.findUserById(id);
    }

    @Override
    public User saveUser(User user) {
        return repository.saveUser(user);
    }

    @Override
    public User updateUsername(long id, String newUsername) {
        return repository.updateUsername(id, newUsername);
    }

    @Override
    public User updateEmail(long id, String newEmail) {
        return repository.updateEmail(id, newEmail);
    }

    @Override
    public User updatePassword(long id, String newPassword) {
        return repository.updatePassword(id, newPassword);
    }

    @Override
    public User updateBirthday(long id, LocalDate newBirthday) {
        return repository.updateBirthday(id, newBirthday);
    }

    @Override
    public User createUser(String username, String email,
                           String password, LocalDate birthday) {
        return repository.createUser(username, email, password, birthday);
    }
}
