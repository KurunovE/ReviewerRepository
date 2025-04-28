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
    private long filmId;
    private final List<Comment> comments = new ArrayList<>();
    final List<Genre> genres = new ArrayList<>();
    String filmLink; // ссылка
    private String filmTitle; // заголовок
    private double descRating; // рейтинг
    private List<String> descImages; // картинки
    private String shortDescription; // малое описание
    private String longDescription; // полная анотация
    private String filmMaker; // режисёр
    private List<String> artists; // актёры
    private String productionCountry; // страна производства
    private float time; // время
    private String originalTitle; // оригинальное название

    public Film(final String filmLink,
                final String originalTitle,
                final float time,
                final String productionCountry,
                final List<String> artists,
                final String filmMaker,
                final String longDescription,
                final String shortDescription,
                final List<String> descImages,
                final String filmTitle,
                final double descRating) {
        this.filmLink = filmLink;
        this.originalTitle = originalTitle;
        this.time = time;
        this.productionCountry = productionCountry;
        this.artists = artists;
        this.filmMaker = filmMaker;
        this.longDescription = longDescription;
        this.shortDescription = shortDescription;
        this.descImages = descImages;
        this.filmTitle = filmTitle;
        this.descRating = descRating;
    }

    public boolean equals(final Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        final Film film = (Film) o;
        return filmId == film.filmId &&
                filmLink.equals(film.filmLink) &&
                filmTitle.equals(film.filmTitle) &&
                originalTitle.equals(film.originalTitle) &&
                descRating == film.descRating &&
                time == film.time &&
                productionCountry.equals(film.productionCountry) &&
                filmMaker.equals(film.filmMaker);
    }

    public int hashCode() {
        return Objects.hash(
                filmId,
                comments,
                genres,
                filmLink,
                filmTitle,
                descRating,
                descImages,
                shortDescription,
                longDescription,
                filmMaker,
                artists,
                productionCountry,
                time,
                originalTitle
        );
    }

    public String toString() {
        return "Film{filmTitle=" + filmTitle +
                ", originalTitle=" + originalTitle +
                ", filmLink=" + filmLink +
                ", descRating=" + descRating +
                ", shortDescription=" + shortDescription +
                ", longDescription=" + longDescription +
                ", filmMaker=" + filmMaker +
                ", productionCountry=" + productionCountry +
                ", time=" + time +
                '}';
    }
}