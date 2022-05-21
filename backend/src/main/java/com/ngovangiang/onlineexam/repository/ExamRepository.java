package com.ngovangiang.onlineexam.repository;

import com.ngovangiang.onlineexam.entity.Exam;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.QueryHints;
import org.springframework.data.repository.query.Param;

import javax.persistence.QueryHint;
import java.util.List;
import java.util.Optional;

public interface ExamRepository extends JpaRepository<Exam, Integer> {

    Optional<Exam> findByName(String name);

    List<Exam> findByNameContainsAllIgnoreCase(String partOfName);

//    @Query("select e, tmp, t, q from " +
//            "Exam e join e.topics tmp join tmp.topic t join t.questions q " +
//            "where e.id = :examId")
//    Optional<Exam> findByIdWithRelatedData(@Param("examId") Integer examId);
}
