package com.reviewer.Reviewer.controllers;

import com.reviewer.Reviewer.models.Film.comment.Comment;
import com.reviewer.Reviewer.services.CommentService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/comments")
@AllArgsConstructor
public class CommentRestController {

    private final CommentService commentService;

    @GetMapping
    private List<Comment> findAllComments() {
        return commentService.findAllComments();
    }

    @PostMapping("/save_comment")
    public Comment saveComment(@RequestBody Comment comment) {
        return commentService.saveComment(comment);
    }
}
