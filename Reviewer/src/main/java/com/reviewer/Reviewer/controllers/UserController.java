package com.reviewer.Reviewer.controllers;


import com.reviewer.Reviewer.models.User.User;
import com.reviewer.Reviewer.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/user")
@AllArgsConstructor
public class UserController {

    private UserService userService;


    @GetMapping("/{id}")
    public User findUserById(@PathVariable("id") long id) {
        return userService.findUserById(id);
    }

    @PostMapping("/save_user")
    public User saveUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

}
