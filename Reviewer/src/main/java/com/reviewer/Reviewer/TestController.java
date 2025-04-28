package com.reviewer.Reviewer;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class TestController {

    @GetMapping("/home")
    public String home() {
        return "Reviewer-main";
    }

    @GetMapping("/profile")
    public String profile(@RequestParam(defaultValue = "Гость") String username, Model model) {
        model.addAttribute("username", username);
        return "reviewer-profile";
    }
}
