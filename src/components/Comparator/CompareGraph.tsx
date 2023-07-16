// @ts-nocheck (no way to figure how to type the line 91)
import { IonSlide, IonSlides } from '@ionic/react';
import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SettingsContext from '../../store/settings-context';
import Toggler from "../inputs/Toggler";

import * as d3 from 'd3';

import Card from '../Card';

import { Temperament } from '../../model/Temperament/Temperament';
import {  convertFifthQualityToColor, convertThirdQualityToColor } from '../../utils/colorCircle';


type CompareGraphProps = {
  t1: Temperament,
  t2: Temperament,
  divId: string
};

const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

const CompareGraph: React.FC<CompareGraphProps> = ({ t1, t2, divId }) => {
  const { t } = useTranslation('temper');
  const settings = useContext(SettingsContext);
  const [isCpMode, setCpMode] = useState<boolean>(true);

  useEffect(() => {

    d3.select('#my_dataviz2')
    .attr("id", [divId])
    if (document.querySelector('#'+divId+'>svg')) {
      document.querySelector('#'+divId).innerHTML = '';
    }

      
      
      

          const dataAbis = t1.graph.data;
          const dataB = t2.graph.data;
          const Commagraph = isCpMode === true ? 12 : 11;
          const labelFontSize = 12;
          const labelFontColor = settings.darkTheme ? 'rgba(232, 109, 213, 1)' : 'black';
          const pointSize = 6;
          const pointColor = settings.darkTheme ? 'rgba(232, 109, 213, 0.5)' : 'temperapp';
          const pathColor = settings.darkTheme ? 'rgba(232, 109, 213, 0.4)' : 'rgba(0, 0, 0, 0.4)';
          const pathWidth = 2;
          const labelFontColor2 = settings.darkTheme ? 'rgba(255,255, 255, 1)' : 'rgba(46, 163, 155, 1)';
          const pointColor2 = settings.darkTheme ? 'rgba(255,255, 255, 1)' : 'rgba(46, 163, 155, 1)';
          const pathColor2 = settings.darkTheme ? 'rgba(255,255, 255, 1)' : 'rgba(46, 163, 155, 0.4)';
        
          // set the dimensions and margins of the graph
          const margin = { top: 20, right: 30, bottom: 60, left: 10 },
            width = 300 - margin.left - margin.right,
            height = 400 - margin.top - margin.bottom;
        
          // append the svg object to the body of the page

        

          const Commat1 = t1.graph.commabase === 'Cp' ? 12 : 11;
          const Commat2 = t2.graph.commabase === 'Cp' ? 12 : 11;
        
          const data1 = dataAbis.map(item => ({ ...item, x: item.x * (Commat1/Commagraph), y: item.y }));
          const data2 = dataB.map(item => ({ ...item, x: item.x * (Commat2/Commagraph), y: item.y })); 
        
          console.log(Commagraph)
          console.log(Commat1)
        
        
        
          const x1values =  data1.map(item => item.x ).filter((value, index, self) => self.indexOf(value) === index);
          const x2values =  data2.map(item => item.x).filter((value, index, self) => self.indexOf(value) === index);
        
          const y1values = data1.map(item => item.y).filter((value, index, self) => self.indexOf(value) === index);
          const y2values = data2.map(item => item.y).filter((value, index, self) => self.indexOf(value) === index);
        
        
          //concat x1+x2 / y1+y2 in one array and add 0
          const scaleX12 = [...x1values, ...x2values, 0];
          const scaleY12 = [...y1values, ...y2values, 0, 1];
        
        
          //eval values
        
          const xValues = scaleX12 ;
          const yValues = scaleY12.filter(num => {
            const fraction = num * 11;
            return Number.isInteger(fraction);
          });
        
          console.log(scaleX12, xValues)
          console.log(scaleY12, yValues)
        
        
          // create min and max values
        
          const minValueX = Math.min(...xValues)*1.1;
          const maxValueX = Math.max(...xValues)-(1/10)*minValueX;
          const minValueY = Math.min(...yValues)
          const maxValueY = Math.max(...yValues)
        
        
          const svg = d3
            .select('#'+divId)
              .append('svg')
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
              .append('g')
                .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
        
          /* axe X */
        
          const x = d3
            .scaleLinear()
            .domain([minValueX, maxValueX])
            .range([0, width])
        
          const xaxis = d3.axisBottom(x)
            .tickValues(xValues)
            .tickFormat( function (d) {
              if (d<0)
              {return '-1/' + new Intl.NumberFormat("en", {maximumFractionDigits: 1}).format(-1/d)}
              else if (d===0)
                {return "Pure"}
              else if (d>0)
                {return d.toFixed(2)}

              })
            .tickSizeOuter(0);
          svg
            .append('g')
              .attr('transform', 'translate(0,' + height + ')')
              .call(xaxis);
            
            
              // Add Y axis
          const y = d3
            .scaleLinear()
            .domain([minValueY, maxValueY])
            .range([height, 0])
            
            
          const yaxis = d3.axisRight(y)
          .tickValues(yValues)
          .tickFormat( function (d) {
            if (d===0)
              {return ""}
            else 
              {return 11*d + "/11"}
          
            })
            ;
          
          
          svg.append('g')
              .attr('transform', `translate(${x('0')})`)
              .call(yaxis);
          
          
          
          // paths
          svg
            .append('path')
            .datum(data1)
              .attr('fill', 'none')
              .attr('stroke', pathColor)
              .attr('stroke-width', pathWidth)
              .attr('d', d3.line().x((d) => x(d.x)).y((d) => y(d.y)));
          
          svg
            .append('path')
              .datum(data2)
              .attr('fill', 'none')
              .attr('stroke', pathColor2)
              .attr('stroke-width', pathWidth)
              .attr('d', d3.line().x((d) => x(d.x)).y((d) => y(d.y)));
          
          
            // Add dots
          svg
            .append('g')
            .selectAll('dot')
              .data(data1)
              .enter()
              .append('rect')
              .attr('x', (d) => (x(d.x) as any) - pointSize / 2)
              .attr('y', (d) => (y(d.y) as any) - pointSize / 2)
              .attr('width', pointSize)
              .attr('height', pointSize)
              .style('fill', pointColor);
          
          svg
            .append('g')
            .selectAll('dot')
            .data(data2)
            .enter()
            .append('rect')
            .attr('x', (d) => (x(d.x) as any) - pointSize / 2)
            .attr('y', (d) => (y(d.y) as any) - pointSize / 2)
            .attr('width', pointSize)
            .attr('height', pointSize)
            .style('fill', pointColor2);
          
          
      //   Crée les labels pour data1
          const labels1 = svg
            .append('g')
            .selectAll('dot')
            .data(data1)
            .enter()
            .append('text')
            .attr('x', (d) => (x(d.x) as any) + 10)
            .attr('y', (d) => (y(d.y) as any) - 10)
            .text((d) => d.label)
            .style('fill', labelFontColor)
            .style('font-size', labelFontSize)
            .style('font-weight', 'bold');
          
          // Crée les labels pour data2
          const labels2 = svg
            .append('g')
            .selectAll('dot')
            .data(data2)
            .enter()
            .append('text')
            .attr('x', (d) => (x(d.x) as any) + 10)
            .attr('y', (d) => (y(d.y) as any) - 10)
            .text((d) => d.label)
            .style('fill', labelFontColor2)
            .style('font-size', labelFontSize)
            .style('font-weight', 'bold');
          


        const yValuescolors = []
        for (var i = 0; i<= 11*maxValueY; i++) {yValuescolors.push(i)}

         const xValuescolors = []
        for (var j = Math.min(...xValues)*Commagraph*12 ; j <= Math.max(...xValues)*Commagraph*12; j++) {xValuescolors.push(j)}
        
        console.log(convertFifthQualityToColor(-1/4), convertFifthQualityToColor(-4))
        console.log(Math.min(...xValues), Math.max(...xValues))
        console.log(xValues)
        console.log(xValuescolors)
        console.log(yValuescolors) 
        

        console.log(y(0), y(1/11))

        svg.append('g')
            .selectAll('rect')
            .data(yValuescolors)
            .enter()
              .append('rect')
              .attr('y', function(d){return y(d/11);})
              .attr('width', 10)
              .attr('height', y(0)-y(1/11))
              .attr('x', width + margin.right - 10)
              .attr('fill', function(d){return convertThirdQualityToColor(d, settings.darkTheme);})
              .attr('fill-opacity', .2);

       /*  svg.append('g')
        .selectAll('rect')
        .data(xValuescolors)
        .enter()
              .append('rect')
              .attr('x', function(d){return x(d/Commagraph);})
              .attr('height', 10)
              .attr('width', x(1/Commagraph)-x(0))
              .attr('y', height + margin.bottom - 10)
              .attr('fill', function(d){return convertFifthQualityToColor(d, settings.darkTheme);})
              .attr('fill-opacity', .2); */

          
          
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
        
        
      //   Ajustement des positions des labels pour éviter les collisions avec les lignes pour data1
          labels1.each(function (label: any) {
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
        
      //   Ajustement des positions des labels pour éviter les collisions avec les lignes pour data2
          labels2.each(function (label: any) {
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
        
        
      //   Ajustement des positions des labels pour éviter les collisions avec les lignes et les labels de data1 pour data2
          labels2.each(function (label: any) {
          const currentLabel = d3.select(this);
          let collision = false;
          
          // Vérification des collisions avec les lignes et les labels de data1
            svg.selectAll('path').each(function () {
              const currentLine = d3.select(this);
                if (checkCollision(currentLabel, currentLine) || checkLabelCollision(currentLabel, labels1)) {
                collision = true;
                return false; // Sortir de la boucle each()
                }
            });
          
          // Ajustement de la position du label en cas de collision
            if (collision) {
            currentLabel.attr('x', +currentLabel.attr('x') - 10); // Ajustez la position en fonction de vos besoins
            }
          });
        
      //   Fonction pour détecter les collisions entre les labels et les labels
          function checkLabelCollision(label: any, otherLabels: any) {
            const labelBBox = label.node().getBBox();
          
            let collision = false;
          
            otherLabels.each(function (otherLabel: any) {
            const currentLabel = d3.select(this);
              if (label !== currentLabel) {
                const otherLabelBBox = currentLabel.node().getBBox();
                if (
                  labelBBox.x + labelBBox.width > otherLabelBBox.x &&
                  labelBBox.x < otherLabelBBox.x + otherLabelBBox.width &&
                  labelBBox.y + labelBBox.height > otherLabelBBox.y &&
                  labelBBox.y < otherLabelBBox.y + otherLabelBBox.height
                ) {
                  currentLabel.attr('y', +currentLabel.attr('y') - 20);
                  return false; // Sortir de la boucle each()
                }
               }
             
             
            });
          
            return collision;
          
          }
            // legend
            svg
              .append('text')
              .attr('x', width + margin.right) // Position horizontale du label (au milieu de l'axe X)
              .attr('y', height / 2) // Position verticale du label (juste en dessous de l'axe X)
              .attr('text-anchor', 'middle') // Alignement du texte au milieu
              .attr('transform', `rotate(-90, ${width + margin.right}, ${height / 2})`) //rotate
              .text(t('graphAxeYLabel'))
              .style('fill', labelFontColor);
            // Texte du label
        
            svg
              .append('text')
              .attr('x', width / 2) // Position horizontale du label (au milieu de l'axe X)
              .attr('y', height + margin.top + 35) // Position verticale du label (juste en dessous de l'axe X)
              .attr('text-anchor', 'middle') // Alignement du texte au milieu
              .text(t('graphAxeXLabel')) // Texte du label
              .style('fill', labelFontColor);
      

  }, [t1, t2, t, settings.darkTheme, isCpMode, divId]);

  // line 167  line 175 and  line 171
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
              <div id="my_dataviz2" />
            </div>
            <div className="absolute flex right-4">
              
              <Toggler
                typeContentText={true}
                contentLeft="Cs"
                contentRight="Cp"
                conditionLeft={!isCpMode}
                conditionRight={isCpMode}
                onClickLeft={() => setCpMode(false)}
                onClickRight={() => setCpMode(true)}
                
              />
            </div>
              
          </Card>
        </IonSlide>
      </IonSlides>
    </>
  );
};

export default CompareGraph;
