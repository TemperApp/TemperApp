import React, { useEffect } from 'react';
import { IonSlides, IonSlide } from '@ionic/react';
import { useTranslation } from 'react-i18next';

import * as d3 from 'd3';

import Card from '../Card';

import { Temperament } from '../../model/Temperament/Temperament';

type SheetGraphProps = {
  temperament: Temperament;
};

const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

const SheetGraph: React.FC<SheetGraphProps> = ({ temperament }) => {
  const { t } = useTranslation('temper');

  useEffect(() => {
    // DUMMY DATA
    const labelFontSize = 16;
    const labelFontColor = 'black';
    const pointSize = 5;
    const pointColor = 'steelblue';
    const pathColor = 'rgba(0, 0, 0, 0.296)';
    const pathWidth = 3;

    // ICI TU PEUX CHANGER LA VALEUR DES POINTS
    // rajoute '//' pour commenter une ligne, et change le label par la valeur de ton choix si plusieurs notes : 'A / B / Bb' par exemple
    const data = [
      { label: 'C', x: '-1/6', y: '' },
      { label: 'G D', x: '-1/6', y: '5/11' },
      { label: 'A', x: '-1/12', y: '7/11' },
      { label: 'E', x: '-1/12', y: '9/11' },
      { label: 'H F# C#', x: 'Pure', y: '11/11' },
      { label: 'G#', x: '+1/12', y: '9/11' },
      { label: 'Eb', x: '+1/12', y: '7/11' },
      { label: 'Bb', x: '+1/6', y: '5/11' },
      { label: 'F', x: 'Pure', y: '3/11' },
    ];

    // set the dimensions and margins of the graph
    const margin = { top: 10, right: 0, bottom: 20, left: 10 },
      width = 300 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    // // append the svg object to the body of the page
    if (document.querySelector('#my_dataviz>svg')) {
      return;
    }
    const svg = d3
      .select('#my_dataviz')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    //Read the data
    var x = d3
      .scalePoint()
      .domain(['-1/4', '-1/6', '-1/8', '-1/12', 'Pure', '+1/12', '+1/6', ''])
      .range([0, width]);
    svg
      .append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x));

    // Add Y axis
    var y = d3
      .scalePoint()
      .domain(['', '1/11', '3/11', '5/11', '7/11', '9/11', '11/11', '13/11'])
      .range([height, 0]);

    svg.append('g')
      .attr('transform', `translate(${x('Pure')})`)
      .call(d3.axisLeft(y));

    // paths
    svg
      .append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', pathColor)
      .attr('stroke-width', pathWidth)
      .attr('d', d3.line().x((d) => x(d.x)).y((d) => y(d.y)));

    // Add dots
    svg
      .append('g')
      .selectAll('dot')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', (d) => x(d.x) as any)
      .attr('cy', (d) => y(d.y) as any)
      .attr('r', pointSize)
      .style('fill', pointColor);

    // labels
    svg
    .append('g')
    .selectAll('dot')
    .data(data)
    .enter()
    .append('text')
    .attr('x', (d) => x(d.x) as any + 10)
    .attr('y', (d) => y(d.y) as any - 10)
    .text((d) => d.label)
    .style('fill', labelFontColor)
    .style('font-size', labelFontSize);
  }, [temperament]);

  return (
    <>
      <IonSlides pager={true} options={slideOpts} className="px-5 max-w-lg">
        <IonSlide className="px-1">
          <Card
            title={t('fifthCommas')}
            classNameContent="pb-16"
            className="pb-4"
          >
            <div className="max-w-lg max-h-lg">
              <div id="my_dataviz" />
            </div>
          </Card>
        </IonSlide>
      </IonSlides>
    </>
  );
};

export default SheetGraph;
