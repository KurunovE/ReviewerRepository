package com.reviewer.Reviewer.models.Film.comment;

import com.reviewer.Reviewer.models.Film.film.Film;
import com.reviewer.Reviewer.models.User.User;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Objects;

@Data
@NoArgsConstructor
public class Comment {
    private Film film;
    private User user;
    private String text;

    public Comment(Film film, String text, User user) {
        this.film = film;
        this.text = text;
        this.user = user;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Comment comment = (Comment) o;
        return film.equals(comment.film) &&
                user.equals(comment.user) &&
                text.equals(comment.text);
    }

    @Override
    public int hashCode() {
        return Objects.hash(text);
    }

    @Override
    public String toString() {
        return "Comment{" +
                "author=" + user.getUsername() +
                ", commentText=" + text +
                ", film=" + film.getFilmTitle() +
                '}';
    }
}
