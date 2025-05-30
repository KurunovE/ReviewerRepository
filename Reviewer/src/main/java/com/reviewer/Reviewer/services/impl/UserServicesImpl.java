package com.reviewer.Reviewer.services.impl;

import com.reviewer.Reviewer.models.User.User;
import com.reviewer.Reviewer.repository.UserRepository;
import com.reviewer.Reviewer.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
@Primary
public class UserServicesImpl implements UserService {
    private final UserRepository userRepository;

    @Override
    public User findUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public User findUserByEmail(String email) {
        return userRepository.findUserByEmail(email);
    }

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }
}
