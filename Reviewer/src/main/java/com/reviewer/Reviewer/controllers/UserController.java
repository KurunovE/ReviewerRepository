package com.reviewer.Reviewer.controllers;


import com.reviewer.Reviewer.models.User.User;
import com.reviewer.Reviewer.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/v1/profile")
@AllArgsConstructor
public class UserController {

    private UserService userService;

    @GetMapping("/{id}")
    public String findUserById(@PathVariable("id") long id, Model model) {
        model.addAttribute("user", userService.findUserById(id));
        return "Reviewer-profile";
    }

}
