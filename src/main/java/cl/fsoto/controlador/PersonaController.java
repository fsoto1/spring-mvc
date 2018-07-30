package cl.fsoto.controlador;

import java.util.Date;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import cl.fsoto.modelo.entidades.Persona;
import cl.fsoto.modelo.repositorios.PersonaRepository;

@Controller
public class PersonaController {
	@Autowired
	private PersonaRepository personaRepository;
	
	/**
	 * Metodo que muestra todas las personas de la bd al index
	 * @param model
	 * @return página index
	 */
	@GetMapping("/")
    public String index(Model model) {
		model.addAttribute("personas", personaRepository.findAll());
	    return "index";
    }
	
	/**
	 * Metodo que agrega una nueva persona a la bd
	 * @param persona
	 * @return nueva persona
	 */
	@PostMapping("/")
    public  ResponseEntity<Persona> add(@Valid Persona persona) {
		persona.setIngresado(new Date());
		personaRepository.save(persona);
		return new ResponseEntity<Persona>(persona, HttpStatus.OK);
    }
	
	/**
	 * Metodo que elimina una persona de la bd
	 * @param persona
	 * @return nueva persona
	 */
	@DeleteMapping("/{id}")
    public  ResponseEntity<Persona> delete(@PathVariable(value = "id") int id) {
		personaRepository.deleteById(id);
		return new ResponseEntity<Persona>(HttpStatus.OK);
    }
}
