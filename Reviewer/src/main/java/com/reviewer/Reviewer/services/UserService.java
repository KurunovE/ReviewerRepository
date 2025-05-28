package com.reviewer.Reviewer.services;

import com.reviewer.Reviewer.models.User.User;

import java.time.LocalDate;

public interface UserService {
    User findUserById(long id);
    User findUserByEmail(String email);
    User updateUsername(long id, String newUsername);
    User updateEmail(long id, String newEmail);
    User updatePassword(long id, String newPassword);
    User updateBirthday(long id, LocalDate newBirthday);
    User saveUser(User user);
}
