package com.reviewer.Reviewer.services;

import com.reviewer.Reviewer.models.Film.film.Film;

import java.util.List;

public interface FilmService {
    List<Film> findAllFilms();
    Film findFilmByFilmName(String filmName);
}
