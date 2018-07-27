package cl.fsoto.modelo.repositorios;

import org.springframework.data.repository.CrudRepository;

import cl.fsoto.modelo.entidades.Persona;


public interface PersonaRepository extends CrudRepository<Persona, Integer>{

}
