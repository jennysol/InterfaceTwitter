import React from 'react';

 import { 
    Container,
    Retweeted,
    RocketseatIcon,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon,
 } from './styles';

const Tweet: React.FC = () => {
  return (
      <Container>
          <Retweeted>
              <RocketseatIcon />
              Você retweetou
          </Retweeted>

          <Body>
            <Avatar />

            <Content>
                <Header>
                    <strong>Photos</strong>
                    <span>@soliverpic</span>
                    <Dot />
                    <time>20 de jul</time>
                </Header>

                <Description>Nature</Description>

                <ImageContent />

                <Icons>
                    <Status>
                      <CommentIcon />
                        18
                    </Status>
                    <Status>
                        <RetweetIcon />
                        18
                    </Status>
                    <Status>
                        <LikeIcon />
                        999
                    </Status>
                </Icons>
            </Content>
          </Body>
      </Container>
  );
}

export default Tweet;