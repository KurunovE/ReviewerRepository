package com.reviewer.Reviewer.models.Film.film;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.util.List;
import java.util.Objects;


@Data
@Builder
@AllArgsConstructor
public class Film {
    private String genres;
    private String filmLink; // ссылка
    private String filmTitle; // заголовок
    private String descRating; // рейтинг
    private List<String> descImages; // картинки
    private String shortDescription; // малое описание
    private String longDescription; // полная анотация
    private String filmMaker; // режисёр
    private List<String> artists; // актёры
    private String time; // время
    private String country;
    private String releaseDate;

    public Film(final String filmLink,
                final String genres,
                final String time,
                final List<String> artists,
                final String filmMaker,
                final String longDescription,
                final String shortDescription,
                final List<String> descImages,
                final String filmTitle,
                final String descRating,
                final String country,
                final String releaseDate) {
        this.filmLink = filmLink;
        this.genres = genres;
        this.time = time;
        this.artists = artists;
        this.filmMaker = filmMaker;
        this.longDescription = longDescription;
        this.shortDescription = shortDescription;
        this.descImages = descImages;
        this.filmTitle = filmTitle;
        this.descRating = descRating;
        this.country = country;
        this.releaseDate = releaseDate;
    }

    @Override
    public boolean equals(final Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        final Film film = (Film) o;
        return filmLink.equals(film.filmLink) &&
                filmTitle.equals(film.filmTitle) &&
                descRating.equals(film.descRating) &&
                time.equals(film.time) &&
                filmMaker.equals(film.filmMaker) &&
                genres.equals(film.genres) &&
                country.equals(film.country) &&
                releaseDate.equals(film.releaseDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(
                genres,
                filmLink,
                filmTitle,
                descRating,
                descImages,
                shortDescription,
                longDescription,
                filmMaker,
                artists,
                time,
                country,
                releaseDate
        );
    }

    @Override
    public String toString() {
        return "Film{filmTitle=" + filmTitle +
                ", filmLink=" + filmLink +
                ", genres=" + genres +
                ", descRating=" + descRating +
                ", shortDescription=" + shortDescription +
                ", longDescription=" + longDescription +
                ", filmMaker=" + filmMaker +
                ", time=" + time +
                '}';
    }
}
