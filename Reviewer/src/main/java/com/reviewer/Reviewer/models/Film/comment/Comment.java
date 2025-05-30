package com.reviewer.Reviewer.models.Film.comment;

import jakarta.persistence.*;
import lombok.Data;


@Data
@Entity
@Table(name = "Comments")
public class Comment {
    @Id
    @GeneratedValue
    private Long id;
    private String username;
    private String date;
    private String text;
}
