package com.devsuperior.dsmovie.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ScoreDto {

    private Long movieId;
    private String email;
    private Double score;


}
