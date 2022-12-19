package com.dev.conectarecycle.model;

import org.hibernate.validator.constraints.br.CPF;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "usuario")
public class Usuario {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_usuario")
	private Integer id_usuario;
	
	@CPF(message = "Insira um CPF válido")
	@NotBlank(message = "O CPF é Obrigatório")
	@Column(name = "cpf", length=14, nullable = false)
	private String cpf;
	
	@NotBlank(message = "O nome é Obrigatório")
	@Size(min = 3, message = "O nome deve ter no mínimo 3 caracteres")
	@Column(name = "nome_usu", length=100, nullable = false)
	private String nome_usu;
	
	@NotBlank(message = "A data de nascimento é Obrigatória!")
	@Column(name = "data_nascimento", columnDefinition="DATE", nullable = false)
	private String data_nascimento;
	
	@Email(message = "Insira um email válido!")
	@NotBlank(message = "O email é Obrigatório!")
	@Column(name = "email", length = 256, nullable = false)
	private String email;
	
	@NotBlank(message = "O telefone para contato é Obrigatório!")
	@Column(name = "telefone1", length =13, nullable = false)
	private String telefone1;
	
	@Column(name = "telefone2", length=13)
	private String telefone2;
	
	@Column(name = "logradouro", length=50)
	private String logradouro;
	
	@Column(name = "numero", length=5)
	private int numero;
	
	@Column(name = "bairro", length=50)
	private String bairro;
	
	@Column(name = "cidade", length=50)
	private String cidade;
	
	@Column(name = "estado", length=13)
	private String estado;
	
	@Column(name = "cep", length=8)
	private String cep;
	
	@Column(name = "pontuacao")
	private int pontuacao;
	
	@NotBlank(message = "A Senha é Obrigatória!")
	@Column(name = "senha", length=100, nullable=false)
	private String senha;
	
	
	public int getId_usuario() {
		return id_usuario;
	}
	public void setId_usuario(int id_usuario) {
		this.id_usuario = id_usuario;
	}
	public String getCpf() {
		return cpf;
	}
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	public String getNome_usu() {
		return nome_usu;
	}
	public void setNome_usu(String nome_usu) {
		this.nome_usu = nome_usu;
	}
	public String getData_nascimento() {
		return data_nascimento;
	}
	public void setData_nascimento(String data_nascimento) {
		this.data_nascimento = data_nascimento;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getTelefone1() {
		return telefone1;
	}
	public void setTelefone1(String telefone1) {
		this.telefone1 = telefone1;
	}
	public String getTelefone2() {
		return telefone2;
	}
	public void setTelefone2(String telefone2) {
		this.telefone2 = telefone2;
	}
	public String getLogradouro() {
		return logradouro;
	}
	public void setLogradouro(String logradouro) {
		this.logradouro = logradouro;
	}
	public int getNumero() {
		return numero;
	}
	public void setNumero(int numero) {
		this.numero = numero;
	}
	public String getBairro() {
		return bairro;
	}
	public void setBairro(String bairro) {
		this.bairro = bairro;
	}
	public String getCidade() {
		return cidade;
	}
	public void setCidade(String cidade) {
		this.cidade = cidade;
	}
	public String getEstado() {
		return estado;
	}
	public void setEstado(String estado) {
		this.estado = estado;
	}
	public String getCep() {
		return cep;
	}
	public void setCep(String cep) {
		this.cep = cep;
	}
	public int getPontuacao() {
		return pontuacao;
	}
	public void setPontuacao(int pontuacao) {
		this.pontuacao = pontuacao;
	}
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}
}
