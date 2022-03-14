
/*Aqui é criado a variável de ambinete para acessar o backend, onde que caso não seja acessado 
essa dada url abaixo é acessado uma URL localmente.*/
export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8080";