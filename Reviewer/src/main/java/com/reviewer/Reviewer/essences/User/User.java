package com.reviewer.Reviewer.essences.User;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;


@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class User {

    private long id;
    private String username;
    private String email;
    private String password;

    public User(final long id, final String username, final String email, final String password) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
    }


}
