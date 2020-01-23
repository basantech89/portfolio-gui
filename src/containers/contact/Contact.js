import React from "react";
import "./Contact.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import styled from 'styled-components';

const Anchor = styled.a`
    color: ${({ theme }) => theme.text}
`;

export default function Contact() {
    return (
        <div className="main contact-margin-top" id="contact">
            <div className="contact-div-main">
                <div className="contact-header">
                    <h1 className="heading contact-title">{contactInfo.title}</h1>
                    <p className="subTitle contact-subtitle">{contactInfo.subtitle}</p>

                    <div className="contact-text-div">
                        <Anchor className="contact-detail" href={"tel:" + contactInfo.number}>{contactInfo.number}</Anchor>
                        <br/><br/>
                        <Anchor className="contact-detail-email"
                           href={"mailto:" + contactInfo.email_address}>{contactInfo.email_address}</Anchor>
                        <br/><br/>
                        <SocialMedia/>
                    </div>
                </div>
            </div>
        </div>
    );
}
