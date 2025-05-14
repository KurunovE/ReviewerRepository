package com.reviewer.Reviewer.controllers;

import com.reviewer.Reviewer.services.FilmService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/film")
@AllArgsConstructor
public class FilmController {

    private final FilmService filmService;

    @GetMapping
    public String findAllFilms(Model model) {
        model.addAttribute("films", filmService.findAllFilms());
        return "Reviewer-main";
    }

    @GetMapping("/{name}")
    public String film(@PathVariable("name") String name, Model model) {
        model.addAttribute("film", filmService.findFilmByFilmName(name));
        return "Reviewer-film-page";
    }
}
