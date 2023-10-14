import axios from 'axios';

const baseURL = 'https://api.github.com'; // URL base da API do GitHub

// Função para buscar o perfil de um usuário no GitHub
export const getProfile = async (username) => {
  try {
    const response = await axios.get(`${baseURL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Função para buscar as issues de um repositório no GitHub
export const getIssues = async (owner, repo) => {
  try {
    const response = await axios.get(`${baseURL}/repos/${owner}/${repo}/issues`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Função para buscar uma issue específica no GitHub
export const getIssue = async (owner, repo, issueNumber) => {
  try {
    const response = await axios.get(`${baseURL}/repos/${owner}/${repo}/issues/${issueNumber}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};