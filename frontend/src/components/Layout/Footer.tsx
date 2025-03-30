import styled from "styled-components";
import { PhoneOutlined, MessageOutlined } from "@ant-design/icons";

const FooterContainer = styled.footer`
  background: #0d0d0d;
  padding: 40px 80px 80px 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1024px) {
    padding: 40px;
  }

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

const Divider = styled.div<{
  margin?: string;
  color?: string;
  thickness?: string;
}>`
  width: 100%;
  height: ${(props) => props.thickness || "2px"};
  background-color: ${(props) => props.color || "#333"};
  margin: ${(props) => props.margin || "16px 0"};
  opacity: 0.6;
`;

const FooterContent = styled.div`
  display: flex;
  color: white;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 1024px) {
    gap: 32px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
  }

  .footer-bottom-section {
    display: flex;
    gap: 24px;
    color: white;
    font-size: 16px;
    min-width: unset;
    margin-bottom: 0;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 16px;
      align-items: center;
    }
  }
`;

const Section = styled.div`
  flex: 1;
  min-width: 250px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    min-width: 100%;
    margin-bottom: 0;
  }
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const List = styled.div`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 24px;

  .list-item {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;

    .list-item {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 12px;
    }
  }
`;

const ListItem = styled.div`
  margin-bottom: 8px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #ffffff;
  font-size: 14px;
  margin-bottom: 12px;

  .anticon {
    font-size: 16px;
  }
`;

const SubscribeContainer = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  border-radius: 4px;
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Button = styled.button`
  background: linear-gradient(45deg, #ff00ff, #ff0080);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FooterBottom = styled.div<{
  width?: string;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  width: ${(props) => props.width || "100%"};

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Section>
          <Title>NAVIGATION</Title>
          <List>
            <div className="list-item">
              <ListItem>Home</ListItem>
              <ListItem>About us</ListItem>
              <ListItem>Our teams</ListItem>
            </div>
            <div className="list-item">
              <ListItem>Whitepaper</ListItem>
              <ListItem>Marketplace</ListItem>
              <ListItem>Roadmap</ListItem>
            </div>
            <div className="list-item">
              <ListItem>FAQs</ListItem>
              <ListItem>News</ListItem>
              <ListItem>Community</ListItem>
            </div>
          </List>
        </Section>
        <Section>
          <Title>CONTACT US</Title>
          <ContactInfo>
            <PhoneOutlined /> 01234568910
          </ContactInfo>
          <ContactInfo>
            <MessageOutlined /> tymex-talent@tyme.com
          </ContactInfo>
        </Section>
        <Section>
          <Title>SUBSCRIBE TO RECEIVE OUR LATEST UPDATE</Title>
          <SubscribeContainer>
            <Input type="email" placeholder="Your email address" />
            <Button>Subscribe</Button>
          </SubscribeContainer>
        </Section>
      </FooterContent>
      <Divider margin="24px 0" color="#333" thickness="1px" />
      <FooterContent style={{ justifyContent: "space-between" }}>
        <FooterBottom width="unset">
          ©2023 Tyme - Edit. All Rights reserved.
        </FooterBottom>
        <FooterBottom className="align-self-end" width="unset">
          <Section className="footer-bottom-section">
            <ListItem>Security</ListItem>
            <ListItem>Legal</ListItem>
            <ListItem>Privacy</ListItem>
          </Section>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
