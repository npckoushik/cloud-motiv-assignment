import React, { useState } from 'react';
import CondensedIncomeStatement from './CondensedIncomeStatement';
import AnalysisPanel from './AnalysisPanel';
import './App.css';

// Data extracted from the PDF for the Condensed Income Statement
const incomeStatementData = {
  header: ['Note', '2025', '2024', '6M 2025', '6M 2024', '12M 2024'],
  rows: [
    { label: 'Revenue', note: '1', values: ['13,130', '12,771', '26,451', '25,126', '55,482'] },
    { label: 'Profit before depreciation, amortisation and impairment losses, etc. (EBITDA)', note: '1', values: ['2,298', '2,144', '5,008', '3,734', '12,128'] },
    { label: 'Depreciation, amortisation and impairment losses, net', note: '', values: ['1,651', '1,481', '3,271', '2,999', '6,220'] },
    { label: 'Gain on sale of non-current assets, etc., net', note: '', values: ['25', '208', '80', '215', '222'], highlightable: true }, // Highlightable row
    { label: 'Share of profit in joint ventures and associated companies', note: '', values: ['173', '92', '281', '190', '369'] },
    { label: 'Profit before financial items (EBIT)', note: '1', values: ['845', '963', '2,098', '1,140', '6,499'] },
    { label: 'Financial items, net', note: '', values: ['-111', '13', '66', '164', '317'] },
    { label: 'Profit before tax', note: '', values: ['734', '976', '2,164', '1,304', '6,816'] },
    { label: 'Tax', note: '', values: ['95', '143', '318', '263', '584'] },
    { label: 'Profit for the period', note: '', values: ['639', '833', '1,846', '1,041', '6,232'] },
  ],
};

function App() {
  // State to control the highlighting of the target row
  const [highlightRow, setHighlightRow] = useState(false);

  // Function to be passed to the AnalysisPanel to trigger the highlight
  const handleHighlight = (shouldHighlight) => {
    setHighlightRow(shouldHighlight);
  };

  return (
    <div className="app-container">
      <div className="pdf-view">
        <h2 className="section-heading">Financials</h2>
        <div className="financial-tables-container">
          <div className="income-statement-column">
            <h3 className="sub-heading">Condensed income statement</h3>
            <CondensedIncomeStatement 
              data={incomeStatementData} 
              highlight={highlightRow} 
            />
          </div>
          <div className="comprehensive-income-column">
             <h3 className="sub-heading">Condensed statement of comprehensive in</h3>
             {/* Placeholder for the second table to match the layout */}
             <div className="placeholder-table">
               <p>Profit for the period...</p>
               {/* ... other rows ... */}
             </div>
          </div>
        </div>
      </div>
      <AnalysisPanel onHighlight={handleHighlight} />
    </div>
  );
}

export default App;