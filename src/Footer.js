import React from 'react';
import {
    Footer, FooterLinkList, FooterSection,
    FooterDropDownSection, Grid, Cell, Icon
    } from 'react-mdl';

export default class FooterInterlogex extends React.Component {
  render(){
    return (
        <Footer size="mega">
          <FooterSection type="middle">
            <FooterDropDownSection title="">
              <h1 className="mdl-mega-footer--heading mdl-mega-footer__heading" id="title">Telefones <Icon name="expand_more" id="arrow"/></h1>
              <FooterLinkList className="footer_list">
              <Grid>
                <Cell col={12}><label className="label"><Icon name="phone" /></label> (61) 3554-5467</Cell>
                <Cell col={12}><label className="label"><Icon name="smartphone" /></label> (61) 99552-3590</Cell>
              </Grid>
              </FooterLinkList>
            </FooterDropDownSection>
            <FooterDropDownSection title="">
              <h1 className="mdl-mega-footer--heading mdl-mega-footer__heading" id="title">E-mails <Icon name="expand_more" id="arrow"/></h1>
              <FooterLinkList className="footer_list">
                <Grid>
                  <Cell col={12}><Icon name="email" /> interlogex@interlogex.com.br</Cell>
                </Grid> 
              </FooterLinkList>
            </FooterDropDownSection>
            <FooterDropDownSection title="">
              <h1 className="mdl-mega-footer--heading mdl-mega-footer__heading" id="title">Endereço <Icon name="expand_more" id="arrow"/></h1>
              <FooterLinkList className="footer_list">
                <Grid>
                  <Icon name="home" />SHVP Rua 10 Chácara 177 Casa 08 Condomínio Alphaville - Vicent Pires - DF
                </Grid>
              </FooterLinkList>
            </FooterDropDownSection>
          </FooterSection>
          <FooterSection type="bottom">
            <center className="company_name">InterLogEx © Internacional Logistica Express - Todos os direitos reservados</center>
          </FooterSection>
        </Footer>
    );
  }
}
