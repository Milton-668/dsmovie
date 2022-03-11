package com.devsuperior.dsmovie.services;

import com.devsuperior.dsmovie.dto.MovieDto;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;

    @Transactional(readOnly = true)
    public Page<MovieDto> findAll(Pageable pageable) {
        Page<Movie> result = movieRepository.findAll(pageable);
        Page<MovieDto> resultPage = result.map(MovieDto::new);
        return resultPage;
    }
    @Transactional(readOnly = true)
    public MovieDto findById(Long id){
        Movie result = movieRepository.findById(id).get();
        MovieDto dto = new MovieDto(result);
        return dto;
    }
}
