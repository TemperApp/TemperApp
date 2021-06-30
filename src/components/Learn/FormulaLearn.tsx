import React from 'react';
import 'katex/dist/katex.min.css';
// @ts-ignore
import { InlineMath, BlockMath } from 'react-katex';
import "../../pages/Learn.css"

type mathsProps = {
  mathsFormula : string, 
}

const FormulaLearn: React.FC<mathsProps> = ({mathsFormula}) => {

  return(
    <div className="LatexLearn">
      <BlockMath math={mathsFormula}/>
    </div>
    );

  }

export default FormulaLearn;



/* EXEMPLES
<BlockMath math={'\\begin{Bmatrix} \\mathcal{D}_{S/R} \\end{Bmatrix}_A = \\begin{Bmatrix} \\begin{aligned} \\overrightarrow{R_{\\mathcal{D}, \\, S/R}} & = m \\cdot \\overrightarrow{\\Gamma_{G \\in S/R}} \\\\ \\overrightarrow{\\delta_{A, \\, S/R}} & = \\left( \\frac{d\\overrightarrow{\\sigma_{A, \\, S/R}}}{dt} \\right)_R + m \\cdot \\overrightarrow{V_{A \\in S/R}} \\wedge \\overrightarrow{V_{G \\in S/R}} \\end{aligned} \\end{Bmatrix}_A'}/>
<BlockMath math={'\\begin{aligned} P_{1 \\rightarrow S, \\, S/R} & = \\begin{Bmatrix} \\mathcal{T}_{1 \\rightarrow S} \\end{Bmatrix}_A \\otimes \\begin{Bmatrix} \\mathcal{V}_{S/R} \\end{Bmatrix}_A \\\\ & = \\overrightarrow{R_{1 \\rightarrow S}} \\cdot \\overrightarrow{V_{A \\in S/R}} + \\overrightarrow{M_{A, \\, 1 \\rightarrow E}} \\cdot \\overrightarrow{\\Omega_{S/R}} \\end{aligned}'} />
<BlockMath math={'T_{S/R} = \\frac{1}{2} \\cdot \\begin{Bmatrix} \\mathcal{C}_{S/R} \\end{Bmatrix}_A \\otimes \\begin{Bmatrix} \\mathcal{V}_{S/R} \\end{Bmatrix}_A'} />
*/