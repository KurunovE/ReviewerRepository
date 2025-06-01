package com.reviewer.Reviewer.DTO.modelsDTO;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class FilmDTO {
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
}
