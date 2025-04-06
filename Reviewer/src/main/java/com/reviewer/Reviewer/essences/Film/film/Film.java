package com.reviewer.Reviewer.essences.Film.film;

import com.reviewer.Reviewer.essences.Film.comment.Comment;
import com.reviewer.Reviewer.essences.Film.genre.Genre;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;


@Data
@NoArgsConstructor
public class Film {
    private final List<Comment> comments = new ArrayList<>();
    final List<Genre> genres = new ArrayList<>();
    String filmLink;
    private long filmId;
    private String filmTitle;
    private double descRating;
    private String descImage;
    private String text;

    public Film(final String filmLink,
                final String filmTitle,
                final double descRating,
                final String descImage,
                final String text) {
        this.filmLink = filmLink;
        this.filmTitle = filmTitle;
        this.descRating = descRating;
        this.descImage = descImage;
        this.text = text;
    }

    // COMMENT

    public void addComment(final Comment comment) {
        comments.add(comment);
        comment.setFilm(this);
    }

    public void removeComment(final Comment comment) {
        comments.remove(comment);
        comment.setFilm(null);
    }

    // GENRE

//    public void addGenre(final Genre genre) {
//
//    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Film film = (Film) o;
        return filmId == film.filmId && filmTitle.equals(film.filmTitle);
    }

    @Override
    public int hashCode() {
        return Objects.hash(filmId, filmTitle);
    }

    @Override
    public String toString() {
        return "Film{" +
                "filmId=" + filmId +
                ", title='" + filmTitle + "\'" +
                ", descRating=" + descRating +
                ", descImage='" + descImage + "\'" +
                ", text='" + text + "\'" +
                '}';
    }
}