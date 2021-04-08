import { Container, Content, LogoContainer, LogoIcon, Logo, OptionsContainer, Icon, Avatar } from './styles';



function Header() {
  return (
    <Container>
      <Content>

        <LogoContainer>
          <LogoIcon src="images/logoIcon.svg"></LogoIcon>
          <Logo src="images/logo.svg"></Logo>
        </LogoContainer>

        <OptionsContainer>
          <Icon src="images/uploadIcon.svg"></Icon>
          <Avatar>
            <img src="https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/8a7686c7081061b6771ce7f3e6dee9cc~c5_100x100.jpeg"></img>
          </Avatar>
        </OptionsContainer>

      </Content>
    </Container>
  )
}

export default Header;
