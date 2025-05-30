package com.reviewer.Reviewer.services;

import com.reviewer.Reviewer.models.Film.comment.Comment;

import java.util.List;

public interface CommentService {
    List<Comment> findAllComments();
    Comment saveComment(Comment comment);
}
