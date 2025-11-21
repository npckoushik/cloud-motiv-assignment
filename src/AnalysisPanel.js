import React from 'react';

const AnalysisPanel = ({ onHighlight }) => {

  // Function to simulate the click event on the specific text block
  const handleClickHighlight = () => {
    // Toggles the highlight state on click
    onHighlight(true); 
    
    // In a real application, you might want the highlight to persist or auto-dim. 
    // For this case study, we simulate a temporary highlight for 2 seconds.
    setTimeout(() => {
      onHighlight(false);
    }, 2000);
  };

  return (
    <div className="analysis-panel">
      <div className="analysis-content">
        {/* The first part of the analysis content */}
        <div className="analysis-text">
          <p className="analysis-point">EBITDA increase (USD 2.3 bn vs USD 2.1 bn prior attributed to operational improvements; no men extraordinary or one-off items. [1]</p>
          <p className="analysis-point page-ref">Page 5 - Review Q2 2025</p>
          <p className="analysis-point">EBITDA rise driven by higher revenue and cost co all segments; no extraordinary gains or losses ind Page 15 - Condensed Income Statement</p>
        </div>
        
        {/* The target block with click handler, simulating the [3] interaction */}
        <div className="target-note-block" onClick={handleClickHighlight}>
          <p className="analysis-point highlight-trigger">
            Gain on sale of non-current assets USD 25 m (vs prior year) reported separately below EBITDA;
            <span className="highlight-id">[3]</span> the part of EBITDA.
          </p>
        </div>

        {/* Supporting evidence */}
        <p className="supporting-evidence">Supporting Evidence</p>
        <div className="evidence-block">
          <p>[1] A.P. Moller - Maersk Q2 2025 Interim Report (7 Aug 2025) - Page 3 -</p>
          <p className="maersk-quote">"Maersk's results continued to improve year-on EBITDA of USD 2.3 bn (USD 2.1 bn)... driven by other revenue nowth in Ocean margin improve"</p>
        </div>
      </div>
      <div className="chat-data-section">
        <p>Ask about your chat data...</p>
      </div>
    </div>
  );
};

export default AnalysisPanel;