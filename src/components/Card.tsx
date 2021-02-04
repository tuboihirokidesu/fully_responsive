import styled from "styled-components";
import CardItem from "./CardItem";

const Cards = styled.div`
  padding: 4rem;
  background: #fff;
`;
const CardsHeader = styled.h1`
  text-align: center;
`;
const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1120px;
  width: 90%;
  margin: 0 auto;
`;
const CardsWrap = styled.div`
  position: relative;
  margin: 50px 0 45px;
`;
const CardsItems = styled.ul`
  margin-bottom: 24px;

  @media only screen and (max-width: 1024px) {
    display: flex;
  }
`;

const Card = () => {
  return (
    <Cards>
      <CardsHeader>Cards!!</CardsHeader>
      <CardsContainer>
        <CardsWrap>
          <CardsItems>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </CardsItems>
          <CardsItems>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </CardsItems>
        </CardsWrap>
      </CardsContainer>
    </Cards>
  );
};

export default Card;
