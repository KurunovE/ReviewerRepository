package com.reviewer.Reviewer.services.impl;

import com.reviewer.Reviewer.models.Film.comment.Comment;
import com.reviewer.Reviewer.repository.CommentRepository;
import com.reviewer.Reviewer.services.CommentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CommentServiceImpl implements CommentService {
    private final CommentRepository commentRepository;

    @Override
    public List<Comment> findAllComments() {
        return commentRepository.findAll();
    }

    @Override
    public Comment saveComment(Comment comment) {
        return commentRepository.save(comment);
    }
}
