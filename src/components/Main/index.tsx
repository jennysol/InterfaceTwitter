import React from 'react';

import ProfilePage from '../ProfilePage';

import { 
    Container, 
    Header,
    BackIcon,
    ProfileInfo,
    BottomMenu, 
    HomeIcon, 
    BellIcon, 
    SearchIcon,
    EmailIcon 
    } from './styles';

const Main: React.FC = () => {
  return (
      <Container>
        <Header>
            <button>
                <BackIcon />
            </button>

            <ProfileInfo>
                <strong>Soliver</strong>
                <span>20 Tweets</span>
            </ProfileInfo>
        </Header>

        <ProfilePage />

        <BottomMenu>
            <HomeIcon className="active" />
            <SearchIcon />
            <BellIcon />
            <EmailIcon />
        </BottomMenu>
      </Container>
  );
}

export default Main;