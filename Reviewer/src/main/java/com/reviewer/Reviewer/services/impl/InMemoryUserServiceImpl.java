package com.reviewer.Reviewer.services.impl;

import com.reviewer.Reviewer.models.User.User;
import com.reviewer.Reviewer.repository.InMemoryUserDAO;
import com.reviewer.Reviewer.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class InMemoryUserServiceImpl implements UserService {

    private final InMemoryUserDAO repository;

    @Override
    public User findUserById(Long id) {
        return repository.findUserById(id);
    }

    @Override
    public User findUserByEmail(String email) {
        return repository.findUserByEmail(email);
    }

    @Override
    public User saveUser(User user) {
        return repository.saveUser(user);
    }
}
