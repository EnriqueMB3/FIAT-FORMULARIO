import React from 'react';
import { Car } from './components/car/Car';
import { CardForm } from './components/cotizador/CardForm';
import { Title } from './components/title/Title';
import {Navbar} from './components/ui/Navbar';
export const FiatScreen = () => {
    return (
        <div className="__background">
            <Navbar/>
            <Title/>
            <Car/>
            <CardForm/>
        </div>
    )
}
