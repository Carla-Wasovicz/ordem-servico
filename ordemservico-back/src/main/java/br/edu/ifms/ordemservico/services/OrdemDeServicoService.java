package br.edu.ifms.ordemservico.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import br.edu.ifms.ordemservico.dto.OrdemDeServicoDTO;
import br.edu.ifms.ordemservico.entities.OrdemDeServico;
import br.edu.ifms.ordemservico.repositories.OrdemDeServicoRepository;
import br.edu.ifms.ordemservico.services.exceptions.DataBaseException;
import br.edu.ifms.ordemservico.services.exceptions.ResourceNotFoundException;

@Service
public class OrdemDeServicoService {
	@Autowired
	private OrdemDeServicoRepository repository;
	
	@Transactional(readOnly = true)
	public List<OrdemDeServicoDTO> findAll(){
		List<OrdemDeServico> list = repository.findAll();
		return list.stream().map(ordem -> new OrdemDeServicoDTO(ordem))
				.collect(Collectors.toList());
	}
	
	@Transactional(readOnly = true)
	public OrdemDeServicoDTO findById(Long id){
		Optional<OrdemDeServico> obj = repository.findById(id);
		OrdemDeServico ordemDeServico = obj.orElseThrow(( )-> new ResourceNotFoundException("O id não foi localizado."));
		return new OrdemDeServicoDTO(ordemDeServico);
	}
	
	@Transactional
	public OrdemDeServicoDTO insert(OrdemDeServicoDTO dto) {
		OrdemDeServico ordemDeServico = new OrdemDeServico();
		copyDtoToEntity(dto, ordemDeServico);
		ordemDeServico = repository.save(ordemDeServico);
		return new OrdemDeServicoDTO(ordemDeServico);
	}
	
	@Transactional
	public OrdemDeServicoDTO update(Long id,OrdemDeServicoDTO dto) {
		try {
			OrdemDeServico ordemDeServico = repository.getById(id);
			copyDtoToEntity(dto, ordemDeServico);
			ordemDeServico = repository.save(ordemDeServico);
			return new OrdemDeServicoDTO(ordemDeServico);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("O id não foi localizado.");
		}		
	}
	
	public void delete(Long id) {
		try {
			repository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Não foi possivel excluir, o id da ordem de serviço não foi localizado.");
		} catch (DataIntegrityViolationException e) {
			throw new DataBaseException("Não foi possivel excluir ordem de serviço, pois a mesma está em berto");
		}
	}
	
	private void copyDtoToEntity(OrdemDeServicoDTO dto, OrdemDeServico ordemDeServico) {
		ordemDeServico.setEquipamento(dto.getEquipamento());
		ordemDeServico.setPatrimonio(dto.getPatrimonio());
		ordemDeServico.setSetor(dto.getSetor());
		ordemDeServico.setDescricaoProblema(dto.getDescricaoProblema());
		ordemDeServico.setDataCadastro(dto.getDataCadastro());
		ordemDeServico.setStatus(dto.getStatus());
		ordemDeServico.setPrioridade(dto.getPrioridade());
		ordemDeServico.setDescricaoSolucao(dto.getDescricaoSolucao());
		ordemDeServico.setServidor(dto.getServidor());
	}
}


