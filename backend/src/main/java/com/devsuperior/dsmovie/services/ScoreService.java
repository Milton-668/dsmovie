package com.devsuperior.dsmovie.services;

import com.devsuperior.dsmovie.dto.MovieDto;
import com.devsuperior.dsmovie.dto.ScoreDto;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.entities.Score;
import com.devsuperior.dsmovie.entities.User;
import com.devsuperior.dsmovie.repositories.MovieRepository;
import com.devsuperior.dsmovie.repositories.ScoreRepository;
import com.devsuperior.dsmovie.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ScoreService {

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ScoreRepository scoreRepository;

    @Transactional
    public MovieDto saveScore(ScoreDto scoreDto) {

        User user = userRepository.findByEmail(scoreDto.getEmail());

        if (user == null) {
            user = new User();
            user.setEmail(scoreDto.getEmail());
            user = userRepository.saveAndFlush(user);
        }

        Movie movie = movieRepository.findById(scoreDto.getMovieId()).get();

        Score score = new Score();

        score.setMovie(movie);
        score.setUser(user);
        score.setValue(scoreDto.getScore());

        score = scoreRepository.saveAndFlush(score);

        double sum = 0.0;

        for (Score s : movie.getScores()) {
            sum = sum + s.getValue();
        }

        int size = movie.getScores().size();
        double avg = sum / size;

        movie.setScore(avg);
        movie.setCount(size);

        movie = movieRepository.save(movie);

        return new MovieDto(movie);
    }
}
