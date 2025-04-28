package com.reviewer.Reviewer.essences.Film.genre;

import com.reviewer.Reviewer.essences.Film.film.Film;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Objects;

@NoArgsConstructor
@Setter
@Getter
public class FilmGenre {
    private long id;
    private Genre genre;
    private Film film;

    public FilmGenre(Genre genre, Film film) {
        this.genre = genre;
        this.film = film;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        FilmGenre filmGenre = (FilmGenre) o;
        return id == filmGenre.id
                && genre.equals(filmGenre.genre)
                && film.equals(filmGenre.film);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, genre, film);
    }

    @Override
    public String toString() {
        return "FilmGenre{" +
                "id=" + id +
                ", genre=" + genre +
                ", film=" + film +
                '}';
    }
}
