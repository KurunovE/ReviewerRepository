package com.reviewer.Reviewer.essences.User;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.Objects;


@Data
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class User {

    private long id;
    private String username;
    private String email;
    private String password;
    private LocalDate birthday;

    public User(final String username,
                final String email,
                final String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public User(final String username,
                final String email,
                final String password,
                final LocalDate birthday) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.birthday = birthday;
    }

    public int getAge() {
        return (int) ChronoUnit.YEARS.between(birthday, LocalDate.now());
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return id == user.id && username.equals(user.username)
                && email.equals(user.email) && password.equals(user.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, username, email, password, birthday);
    }

    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", birthday='" + birthday + '\'' +
                ", age='" + getAge() + '\'' +
                '}';
    }
}
