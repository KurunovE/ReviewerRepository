package com.reviewer.Reviewer.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/v1/profile")
public class UserController {
    @GetMapping("/{userId}")
    public String findUser(@PathVariable String userId, Model model) {
        model.addAttribute("user", userId);
        return "Reviewer-profile";
    }
}
