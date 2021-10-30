import React from 'react';
import { Facet } from '@ant-design/charts';
import data1926 from "./data/data1926.json"; 
import data1939 from "./data/data1939.json"; 
import data1959 from "./data/data1959.json"; 
import data1970 from "./data/data1970.json"; 
import data1979 from "./data/data1979.json"; 
import data1989 from "./data/data1989.json"; 
import data2002 from "./data/data2002.json"; 
import data2010 from "./data/data2010.json"; 
import data2014 from "./data/data2014.json"; 
import data2019 from "./data/data2019.json"; 
import './index.css';

const GraphOutput = (data) => {
  var config = {
    type: 'mirror',        
    data: data,
    fields: ['gender'],
    transpose: true,
    padding: [32, 36, 28, 36],
    meta: {
      age: {
        sync: true,
        tickCount: 11,
      },
      total_percentage: {
        sync: true,
        formatter: function formatter(v) {
          return v;
        },
      },
      gender: { sync: true },
    },
    axes: {},
    eachView: function eachView(view, f) {
      return {
        padding: [0, 48, 0, 0],
        type: 'column',
        options: {
          data: f.data,
          xField: 'age',
          yField: 'date',
          seriesField: 'gender',
          color: ['#1890ff', '#f04864'],
        },
      };
    },
  };
  return <Facet className="div" {...config} />;
};

const App = () => {
 return (
   <>
    <b>Автор: Максимова Татьяна</b>
    <p>Возрастно-половая пирамида по переписи населения 1926 года:</p>
    {GraphOutput(data1926)}
    <p>Источник данных: <a href="http://www.demoscope.ru/weekly/pril.php">Демоскоп Weekly</a></p>
    <p>Возрастно-половая пирамида по переписи населения 1939 года:</p>
    {GraphOutput(data1939)}
    <p>Источник данных: <a href="http://www.demoscope.ru/weekly/pril.php">Демоскоп Weekly</a></p>
    <p>Возрастно-половая пирамида по переписи населения 1959 года:</p>
    {GraphOutput(data1959)}
    <p>Источник данных: <a href="http://www.demoscope.ru/weekly/pril.php">Демоскоп Weekly</a></p>
    <p>Возрастно-половая пирамида по переписи населения 1970 года:</p>
    {GraphOutput(data1970)}
    <p>Источник данных: <a href="http://www.demoscope.ru/weekly/pril.php">Демоскоп Weekly</a></p>
    <p>Возрастно-половая пирамида по переписи населения 1979 года:</p>
    {GraphOutput(data1979)}
    <p>Источник данных: <a href="http://www.demoscope.ru/weekly/pril.php">Демоскоп Weekly</a></p>
    <p>Возрастно-половая пирамида по переписи населения 1989 года:</p>
    {GraphOutput(data1989)}
    <p>Источник данных: <a href="http://www.demoscope.ru/weekly/pril.php">Демоскоп Weekly</a></p>
    <p>Возрастно-половая пирамида по переписи населения 2002 года:</p>
    {GraphOutput(data2002)}
    <p>Источник данных: <a href="http://www.demoscope.ru/weekly/pril.php">Демоскоп Weekly</a></p>
    <p>Возрастно-половая пирамида по переписи населения 2010 года:</p>
    {GraphOutput(data2010)}
    <p>Источник данных: <a href="http://www.demoscope.ru/weekly/pril.php">Демоскоп Weekly</a></p>
    <p>Возрастно-половая пирамида по данным Росстата на 1 января 2014 года:</p>
    {GraphOutput(data2014)}
    <p>Источник данных: <a href="https://rosstat.gov.ru/compendium/document/13284#">Численность населения Российской Федерации по полу и возрасту (материал Росстата)</a></p>
    <p>Возрастно-половая пирамида по данным Росстата на 1 января 2019 года:</p>
    {GraphOutput(data2019)}
    <p>Источник данных: <a href="https://rosstat.gov.ru/compendium/document/13284#">Численность населения Российской Федерации по полу и возрасту (материал Росстата)</a></p>
   </>
 )
};


export default App;
