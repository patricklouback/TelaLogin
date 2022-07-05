import React from 'react';

export default function GerarToken() {
    
    var token = Math.random();

    token = Math.floor(token * 900000000000000000000000000000000000000000000000000000000000);

    return token;
}