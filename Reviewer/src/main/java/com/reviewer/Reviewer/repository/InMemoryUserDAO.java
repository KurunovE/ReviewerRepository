package com.reviewer.Reviewer.repository;

import com.reviewer.Reviewer.models.User.User;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public class InMemoryUserDAO {

    private final List<User> USERS = List.of(
            User.builder()
                    .id(1)
                    .username("admin")
                    .email("admin@example.com")
                    .password("admin")
                    .birthday(LocalDate.of(1990, 1, 1))
                    .build(),

            User.builder()
                    .id(2)
                    .username("admin2")
                    .email("admin2@example.com")
                    .password("admin2")
                    .birthday(LocalDate.of(1990, 1, 2))
                    .build()
    );

    public User findUserById(long id) {
        return USERS.stream()
                .filter(element -> element.getId() == id)
                .findFirst()
                .orElse(null);
    }

    public User saveUser(User user) {
        if (user != null) {
            USERS.add(user);
        }
        return findUserById(user.getId());
    }

    public User updateUsername(long id, String newUsername) {
        var user = findUserById(id);
        if (user != null && newUsername != null) {
            user.setUsername(newUsername);
        }
        return user;
    }

    public User updateEmail(long id, String newEmail) {
        var user = findUserById(id);
        if (user != null && newEmail != null) {
            user.setEmail(newEmail);
        }
        return user;
    }

    public User updatePassword(long id, String newPassword) {
        var user = findUserById(id);
        if (user != null && newPassword != null) {
            user.setPassword(newPassword);
        }
        return user;
    }

    public User updateBirthday(long id, LocalDate newBirthday) {
        var user = findUserById(id);
        if (user != null && newBirthday != null) {
            user.setBirthday(newBirthday);
        }
        return user;
    }
}
