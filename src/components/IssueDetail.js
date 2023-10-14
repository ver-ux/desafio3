import React, { useState, useEffect } from 'react';
import { getIssue } from '../api/githubAPI'; 
import './IssueDetail.css';
import { useParams } from 'react-router-dom';

function IssueDetail() {
  const [issue, setIssue] = useState(null);
  const [loading, setLoading] = useState(true);

  // Obtenha o número da issue da URL usando useParams do React Router
  const { issueNumber } = useParams();

  useEffect(() => {
    async function fetchIssueData() {
      try {
        const owner = 'nome_do_dono'; // Substitua pelo nome do proprietário do repositório
        const repo = 'nome_do_repositorio'; // Substitua pelo nome do repositório
        const issueData = await getIssue(owner, repo, issueNumber);
        setIssue(issueData);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar a issue:', error);
        setLoading(false);
      }
    }

    fetchIssueData();
  }, [issueNumber]);

  return (
    <div>
      <h1>Detalhes da Issue</h1>
      {loading ? (
        <p>Carregando...</p>
      ) : issue ? (
        <div>
          <h2>{issue.title}</h2>
          <p>{issue.body}</p>
          {/* Adicione outras informações da issue, como data de criação, labels, etc., conforme necessário */}
        </div>
      ) : (
        <p>Não foi possível buscar a issue.</p>
      )}
    </div>
  );
}

export default IssueDetail;