import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './ResponseSection.css';

const ResponseSection = ({ responses, topics, loading }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="response-section">
      {topics.map((topic, index) => (
        <div key={index} className="response-item">
          <h3 onClick={() => toggleExpand(index)}>
            {`${index}. ${topic}`}
            {loading[index] && <span className="loading-indicator"> (Carregando...)</span>}
          </h3>
          {expandedIndex === index && (
            <div className="response-content">
              {loading[index] ? (
                <p>Gerando conteúdo...</p>
              ) : (
                <ReactMarkdown>{responses[index] || 'Conteúdo não disponível.'}</ReactMarkdown>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ResponseSection;