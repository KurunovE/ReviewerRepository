package com.reviewer.Reviewer.controllers;


import com.reviewer.Reviewer.models.User.User;
import com.reviewer.Reviewer.services.UserService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/user")
@AllArgsConstructor
public class UserRestController {

    private UserService userService;

    @GetMapping
    public User findUser(HttpServletRequest request) {
        String id = request.getParameter("id");
        String email = request.getParameter("email");
        if (id != null) {
            return userService.findUserById(Long.parseLong(id));
        }
        if (email != null) {
            return userService.findUserByEmail(email);
        }
        return null;
    }

    @PostMapping("/save_user")
    public User saveUser(@RequestBody User user) {
        return userService.saveUser(user);
    }
}
