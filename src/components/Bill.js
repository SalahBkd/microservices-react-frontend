import React from 'react';
import styled from 'styled-components';
import {format} from "date-fns";

// REACT FRONTEND
const Bill = ({ bill, loaded, error }) => {
    const billData = bill.data;
    let formattedDate = null;

    if(bill !== null && loaded) {
        const date = new Date(billData.billingDate);
        formattedDate = format(date, "MMMM do, yyyy H:mma");
    }

    return bill !== null && loaded ? (
        <StyledBill>
            <BillHero>
                <BillHeroTitle>
                    <h2>Facture: N° {billData.id}</h2>
                </BillHeroTitle>
                <BillHeroContent>
                    <p><span>Date de Facture:</span> {formattedDate}</p>
                    <p><span>Nom de Client:</span> {billData.customer.name}</p>
                    <h2>Produits: </h2>
                    <BillHeroProducts>
                        {billData.productItems.map(product => {
                            return (
                                <Product key={product.id}>
                                    <p><span>N° de Produit:</span> {product.id}</p>
                                    <p><span>Nom de Produit:</span> {product.product.name}</p>
                                    <p><span>Prix:</span> {product.price}</p>
                                    <p><span>Quantité:</span> {product.quantity}</p>
                                </Product>
                            );
                        })}
                    </BillHeroProducts>
                </BillHeroContent>
            </BillHero>
        </StyledBill>
    ) : (
        error ? (
            <div>{error}</div>
        ) : (
            <div>Loading...</div>
        )
    );

    // return (
    //     <div>No Bills !</div>
    // );
};

const StyledBill = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #F5F5F5;
`;

const BillHero = styled.div`
  background-color: rgb(254, 219, 65, 0.75);
  width: 80vw;
  height: 95vh;
  border-radius: 10px;
`;

const BillHeroTitle = styled.div`
  text-transform: uppercase;
  text-decoration: underline;
  text-align: center;
  margin-top: 8px;
`;

const BillHeroContent = styled.div`
  p {
    margin: 20px 20px;
    border: 1px solid gray;
    border-radius: 10px;
    padding: 10px;
    span {
      font-weight: bold;
    }
  }
  h2{
    margin: 20px 20px;
    padding: 10px;
    text-decoration: underline;
  }
`;

const BillHeroProducts = styled.div`
  display: flex;
  margin: 10px;
`;

const Product = styled.div`
  flex: 1;
  border: 1px solid gray;
  margin: 10px;
  p{
    border: none;
    padding: 4px 2px;

  }
`;

export default Bill;
