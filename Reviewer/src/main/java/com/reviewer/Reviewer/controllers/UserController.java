package com.reviewer.Reviewer.controllers;

import com.reviewer.Reviewer.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/profile")
@AllArgsConstructor
public class UserController {

    private UserService userService;

    @GetMapping
    public String findUser(@RequestParam("id") Long id, Model model) {
        model.addAttribute("user", userService.findUserById(id));
        return "Reviewer-profile";
    }
}
