package com.dev.conectarecycle.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev.conectarecycle.model.Usuario;

public interface IUsuario extends JpaRepository<Usuario, Integer>{

}
