package com.reviewer.Reviewer.essences.Film.comment;

import com.reviewer.Reviewer.essences.Film.film.Film;
import com.reviewer.Reviewer.essences.User.User;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Objects;

@Data
@NoArgsConstructor
public class Comment {
    private long commentId;
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
        return commentId == comment.commentId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(commentId);
    }

    @Override
    public String toString() {
        return "Comment{" +
                "commentId=" + commentId +
                ", film=" + film.getFilmId() + ", " + film.getFilmTitle() +
                ", author=" + user.getId() + ", " + user.getEmail() +
                ", text='" + text + '\'' +
                '}';
    }
}
