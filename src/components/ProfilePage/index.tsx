import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Jennifer Soliver</h1>
        <h2>@solivve</h2>

        <ul>
          <li>
            <LocationIcon />
            Brasília, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 11 de março de 2002
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>10</strong>
          </span>
          <span>
            <strong>10 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;