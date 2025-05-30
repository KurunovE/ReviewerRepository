package com.reviewer.Reviewer.repository;

import com.reviewer.Reviewer.models.Film.comment.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {

}
