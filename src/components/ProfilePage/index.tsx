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
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
          <Avatar/>
          </Banner>  

          <ProfileData>
            <EditButton outlined>Editar Perfil</EditButton>

            <h1>Jennifer Soliver</h1>
            <h2>@solivver</h2>

            <p>
                Suavidade
            </p>

            <ul>
                <li>
                    <LocationIcon />
                    Brasília, Brasil
                </li>
                <li>
                    <CakeIcon/>
                    Nascido(a) em 11 de março de 2002
                </li>
            </ul>

            <Followage>
                <span>
                    seguindo <strong>5</strong>
                </span>
                <span>
                 <strong>15 </strong> seguidores
                </span>
            </Followage>
          </ProfileData>

          <Feed />
    </Container>
  );
}

export default ProfilePage;