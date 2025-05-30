package com.reviewer.Reviewer.repository;

import com.reviewer.Reviewer.models.User.User;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Repository
public class InMemoryUserDAO {

    private final List<User> USERS = new ArrayList<>();

    public User findUserById(final long id) {
        return USERS.stream()
                .filter(element -> element.getId() == id)
                .findFirst()
                .orElse(null);
    }

    public User findUserByEmail(final String email) {
        return USERS.stream()
                .filter(element -> element.getEmail().equals(email))
                .findFirst()
                .orElse(null);
    }

    public User saveUser(final User user) {
        if (user != null) {
            USERS.add(user);
        }
        return findUserById(user.getId());
    }
}
