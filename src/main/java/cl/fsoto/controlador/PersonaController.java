package cl.fsoto.controlador;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import cl.fsoto.modelo.repositorios.PersonaRepository;

@Controller
public class PersonaController {
	@Autowired
	private PersonaRepository personaRepository;
	
	/**
	 * Metodo que agrega todas las personas de la bd al index
	 * @param model
	 * @return página index
	 */
	@GetMapping("/")
    public String index(Model model) {
		model.addAttribute("personas", personaRepository.findAll());
	    return "index";
    }
}
