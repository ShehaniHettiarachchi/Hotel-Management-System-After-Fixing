import React from 'react'
import {Input}from 'antd';

const{ Search }=Input;

function SearchFeature(){

    
    return(
        <div>
            <Search
            value
            onChange
            placeholder="Search"
            />
        </div>
    )
}