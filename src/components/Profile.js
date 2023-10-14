import React, { useState, useEffect } from 'react';
import { getProfile } from '../api/githubAPI';
import './Profile.css';

function Profile() {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Substitua 'seu_nome_de_usuário' pelo nome de usuário do GitHub que deseja exibir
  const githubUsername = 'ver-ux';

  useEffect(() => {
    async function fetchProfileData() {
      try {
        const profile = await getProfile(githubUsername);
        setProfileData(profile);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar o perfil:', error);
        setLoading(false);
      }
    }

    fetchProfileData();
  }, [githubUsername]);

  return (
    <div>
      <h1>Meu Perfil do GitHub</h1>
      {loading ? (
        <p>Carregando...</p>
      ) : profileData ? (
        <div>
          <img src={profileData.avatar_url} alt="Avatar" width="100" />
          <p>Nome: {profileData.name}</p>
          <p>Seguidores: {profileData.followers}</p>
          {/* Adicione outras informações do perfil aqui, conforme necessário */}
        </div>
      ) : (
        <p>Não foi possível buscar o perfil.</p>
      )}
    </div>
  );
}

export default Profile;