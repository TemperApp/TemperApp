// @ts-nocheck (no way to figure how to type the line 91)
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
    console.log(temperament);
    if (!temperament.graph) {
      return null;
    }
    const { data, scaleX, scaleY } = temperament.graph;
    const labelFontSize = 10;
    const labelFontColor = 'black';
    const pointSize = 6;
    const pointColor = 'black';
    const pathColor = 'rgba(0, 0, 0, 0.5)';
    const pathWidth = 2;

    // set the dimensions and margins of the graph
    const margin = { top: 20, right: 30, bottom: 60, left: 10 },
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

// Read the data
const x = d3.scalePoint().domain(scaleX).range([0, width]);
const xAxis = svg.append('g').attr('transform', 'translate(0,' + height + ')');

xAxis.call(d3.axisBottom(x).tickValues(x.domain().filter((d, i) => ![0, 2, 4, 6, 8, 10].includes(i))));
   
    // Add Y axis
    const y = d3.scalePoint().domain(scaleY).range([height, 0]);

    svg
      .append('g')
      .attr('transform', `translate(${x('Pure')})`)
      .call(d3.axisLeft(y));

    // paths
    svg
      .append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', pathColor)
      .attr('stroke-width', pathWidth)
      .attr(
        'd',
        d3
          .line()
          .x((d) => x(d.x))
          .y((d) => y(d.y))
      );

    // Add dots
    svg
      .append('g')
      .selectAll('dot')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d) => (x(d.x) as any) - pointSize / 2)
      .attr('y', (d) => (y(d.y) as any) - pointSize / 2)
      .attr('width', pointSize)
      .attr('height', pointSize)
      .style('fill', pointColor);

    // labels
    const labels = svg
      .append('g')
      .selectAll('dot')
      .data(data)
      .enter()
      .append('text')
      .attr('x', (d) => (x(d.x) as any) + 10)
      .attr('y', (d) => (y(d.y) as any) - 10)
      .text((d) => d.label)
      .style('fill', labelFontColor)
      .style('font-size', labelFontSize);

    // Fonction pour détecter les collisions entre les labels et les lignes
    function checkCollision(label: any, path: any) {
      const labelBBox = label.node().getBBox();
      const lineBBox = path.node().getBBox();

      return (
        labelBBox.x + labelBBox.width > lineBBox.x &&
        labelBBox.x < lineBBox.x + lineBBox.width &&
        labelBBox.y + labelBBox.height > lineBBox.y &&
        labelBBox.y < lineBBox.y + lineBBox.height
      );
    }

    // Ajustement des positions des labels pour éviter les collisions avec les lignes
    labels.each(function (label: any) {
      const currentLabel = d3.select(this);
      let collision = false;

      // Vérification des collisions avec les lignes
      svg.selectAll('path').each(function () {
        const currentLine = d3.select(this);
        if (checkCollision(currentLabel, currentLine)) {
          collision = true;
          return false; // Sortir de la boucle each()
        }
      });

      // Ajustement de la position du label en cas de collision
      if (collision) {
        currentLabel.attr('x', +currentLabel.attr('x') - 20); // Ajustez la position en fonction de vos besoins
      }
    });

    // legend
    svg
      .append('text')
      .attr('x', width  + margin.right) // Position horizontale du label (au milieu de l'axe X)
      .attr('y', height /2 ) // Position verticale du label (juste en dessous de l'axe X)
      .attr('text-anchor', 'middle') // Alignement du texte au milieu
.attr('transform', `rotate(-90, ${width + margin.right}, ${height / 2})`) //rotate
      .text(('Tierces ->')); // Texte du label
    
    svg
      .append('text')
      .attr('x', width / 2) // Position horizontale du label (au milieu de l'axe X)
      .attr('y', height + margin.top + 35) // Position verticale du label (juste en dessous de l'axe X)
      .attr('text-anchor', 'middle') // Alignement du texte au milieu
      .text(t('<- Quintes')); // Texte du label
  }, 
            [temperament, t]);
  
  

  return (
    <>
      <IonSlides pager={true} options={slideOpts} className="px-5 max-w-lg">
        <IonSlide className="px-1">
          <Card
            title={t('graphTitle')}
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
