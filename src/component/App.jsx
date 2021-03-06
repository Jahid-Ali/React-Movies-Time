import React from 'react';

import { Cards } from './card';
import dataArr from './data';


// let newdata = dataArr.map((value) => {
//     return (
//         <Cards
//         imgsrc={value.imgsrc}
//         title={value.title}
//         sname={value.sname}
//         link={value.link}
//         />);
//     });

function App() {
    return <>
        <h1 className="heading_style">Best series and Movies</h1>


        {dataArr.map((value) => {              //use map function
            return (
                <Cards
                    key ={value.id}         // Each child in a list should have a unique "key" prop.
                    imgsrc={value.imgsrc}
                    title={value.title}
                    sname={value.sname}
                    link={value.link}
                />);
        })}

        {/* {newdata}     <-----use this    agar map(value) ke data ko dusre variable me store kroge to ye use */}


        {/* when you dont use map method */}
        {/* <Cards
            imgsrc={dataArr[0].imgsrc}
            title={dataArr[0].title}
            sname={dataArr[0].sname}
            link={dataArr[0].link}
        /> */}

        {/* <Cards
            imgsrc={dataArr[1].imgsrc}
            title={dataArr[1].title}
            sname={dataArr[1].sname}
            link={dataArr[1].link}
        />

        <Cards
            imgsrc={dataArr[2].imgsrc}
            title={dataArr[2].title}
            sname={dataArr[2].sname}
            link={dataArr[2].link}
        />

        <Cards
            imgsrc={dataArr[3].imgsrc}
            title={dataArr[3].title}
            sname={dataArr[3].sname}
            link={dataArr[3].link}
        />

        <Cards
            imgsrc={dataArr[4].imgsrc}
            title={dataArr[4].title}
            sname={dataArr[4].sname}
            link={dataArr[4].link}
        />

        <Cards
            imgsrc={dataArr[5].imgsrc}
            title={dataArr[5].title}
            sname={dataArr[5].sname}
            link={dataArr[5].link}
        />

        <Cards
            imgsrc={dataArr[6].imgsrc}
            title={dataArr[6].title}
            sname={dataArr[6].sname}
            link={dataArr[6].link}
        />

        <Cards
            imgsrc={dataArr[7].imgsrc}
            title={dataArr[7].title}
            sname={dataArr[7].sname}
            link={dataArr[7].link}
        />

        <Cards
            imgsrc={dataArr[8].imgsrc}
            title={dataArr[8].title}
            sname={dataArr[8].sname}
            link={dataArr[8].link}
        />

        <Cards
            imgsrc={dataArr[9].imgsrc}
            title={dataArr[9].title}
            sname={dataArr[9].sname}
            link={dataArr[9].link}
        />

        <Cards
            imgsrc={dataArr[10].imgsrc}
            title={dataArr[10].title}
            sname={dataArr[10].sname}
            link={dataArr[10].link}
        /> */}
    </>;
}

export default App;