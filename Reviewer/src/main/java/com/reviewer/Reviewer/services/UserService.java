package com.reviewer.Reviewer.services;

import com.reviewer.Reviewer.models.User.User;

public interface UserService {
    User findUserById(Long id);
    User findUserByEmail(String email);
    User saveUser(User user);
}
