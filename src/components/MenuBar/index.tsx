import React from 'react';

import Button from '../Button';
import { 
    Container,
    Topside,
    MenuButton,
    HomeIcon,
    BellIcon,
    EmailIcon,
    FavoriteIcon,
    ProfileIcon,
    Botside,
    Avatar,
    ProfileData,
    ExitIcon,
} from './styles';

const MenuBar: React.FC = () => {
    return (
        <Container>
            <Topside>
                
                <MenuButton>
                    <HomeIcon />
                    <span>Página incial</span>
                </MenuButton>

                <MenuButton>
                    <BellIcon />
                    <span>Notificações</span>
                </MenuButton>

                <MenuButton>
                    <EmailIcon />
                    <span>Mensagens</span>
                </MenuButton>

                <MenuButton>
                    <FavoriteIcon/>
                    <span>Favoritados</span>
                </MenuButton>

                <MenuButton>
                    <ProfileIcon className="active"/>
                    <span>Perfil</span>
                </MenuButton>

                <Button>
                    <span>Tweetar</span>
                </Button>
                <Botside>
                    <Avatar />

                    <ProfileData>
                    <strong>Jennifer Soliver</strong>
                    <span>@solivve</span>
                    </ProfileData>

                    <ExitIcon />
                </Botside>
            </Topside>
        </Container>
    );
 };
 
export default MenuBar;