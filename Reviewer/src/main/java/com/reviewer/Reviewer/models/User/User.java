package com.reviewer.Reviewer.models.User;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;


@Data
@Entity
@Table(name = "Users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonIgnore
    private Long id;
    @Column(unique = true)
    private String username;
    private String email;
    private String password;
    private LocalDate birthday;
    @Transient
    private int age;
}
