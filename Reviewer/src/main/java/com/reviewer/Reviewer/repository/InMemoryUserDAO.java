package com.reviewer.Reviewer.repository;

import com.reviewer.Reviewer.models.User.User;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public class InMemoryUserDAO {

    private final List<User> USERS = List.of(
            User.builder()
                    .id(0)
                    .username("admin")
                    .email("admin@example.com")
                    .password("admin")
                    .birthday(LocalDate.of(1990, 1, 1))
                    .build()
    );

    public User findUserById(final long id) {
        return USERS.stream()
                .filter(element -> element.getId() == id)
                .findFirst()
                .orElse(null);
    }

    public User saveUser(final User user) {
        if (user != null) {
            USERS.add(user);
        }
        return findUserById(user.getId());
    }

    public User updateUsername(final long id, final String newUsername) {
        var user = findUserById(id);
        if (user != null && newUsername != null) {
            user.setUsername(newUsername);
        }
        return user;
    }

    public User updateEmail(final long id, final String newEmail) {
        var user = findUserById(id);
        if (user != null && newEmail != null) {
            user.setEmail(newEmail);
        }
        return user;
    }

    public User updatePassword(final long id, final String newPassword) {
        var user = findUserById(id);
        if (user != null && newPassword != null) {
            user.setPassword(newPassword);
        }
        return user;
    }

    public User updateBirthday(final long id, final LocalDate newBirthday) {
        var user = findUserById(id);
        if (user != null && newBirthday != null) {
            user.setBirthday(newBirthday);
        }
        return user;
    }

    public User createUser(final String username, final String email,
                           final String password, final LocalDate birthday) {
        var user = User.builder()
                .id(createUserId())
                .username(username)
                .email(email)
                .password(password)
                .birthday(birthday)
                .build();
        return saveUser(user);
    }

    private long createUserId() {
        long id = 0;
        while (findUserById(id) != null) {
            id++;
        }
        return id;
    }
}
