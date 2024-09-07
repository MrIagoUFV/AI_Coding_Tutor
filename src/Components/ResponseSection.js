import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
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
                <ReactMarkdown components={{
                  code: ({node, inline, className, children, ...props}) => {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                      <SyntaxHighlighter language={match[1]} PreTag="div" {...props}>
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    )
                  }
                }}>{responses[index] || 'Conteúdo não disponível.'}</ReactMarkdown>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ResponseSection;