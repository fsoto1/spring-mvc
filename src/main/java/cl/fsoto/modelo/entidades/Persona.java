package cl.fsoto.modelo.entidades;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Persona {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String nombre;
	private String apellidos;
	private String telefono;
	@Temporal(TemporalType.TIMESTAMP)
	private Date ingresado;
	
	public Persona() {
		super();
	}
	
	public Persona(int id) {
		super();
		this.id = id;
	}
	
	public Persona(String nombre, String apellidos, String telefono, Date ingresado) {
		super();
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.telefono = telefono;
		this.ingresado = ingresado;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getApellidos() {
		return apellidos;
	}
	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}
	public String getTelefono() {
		return telefono;
	}
	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}
	public Date getIngresado() {
		return ingresado;
	}
	public void setIngresado(Date ingresado) {
		this.ingresado = ingresado;
	}
	
	@Override
	public String toString() {
		return "Persona [id=" + id + ", nombre=" + nombre + ", apellidos=" + apellidos + ", telefono=" + telefono
				+ ", ingresado=" + ingresado + "]";
	}
		
}
