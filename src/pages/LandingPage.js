import React from 'react';
import Section1 from '../components/Section1/Section1';
import Section10 from '../components/Section10/Section10';
import Section2 from '../components/Section2/Section2';
import Section3 from '../components/Section3/Section3';
import Section4 from '../components/Section4/Section4';
import Section5 from '../components/Section5/Section5';
import Section6 from '../components/Section6/Section6';
import Section7 from '../components/Section7/Section7';
import Section8 from '../components/Section8/Section8';
import Section9 from '../components/Section9/Section9';


import './LandingPage.css';


export default function LandingPage() {
    return (
        <div>
            <div className="section1">
                <Section1 />
            </div>
            <div className="section2">
                <Section2/>
            </div>
            <div className="section3">
                <Section3 />
            </div>
            <div className="section4">
                <Section4 />
            </div>
            <div className="section5">
                <Section5 />
            </div>
            <div className="section6">
                <Section6 />
            </div>
            <div className="section7">
                <Section7/>
            </div>
            <div className="section8">
                <Section8/>
            </div>
            <div className="section9">
                <Section9/>
            </div>
            <div className="section10">
                <Section10/>
            </div>
        </div>
    )
}
