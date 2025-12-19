import React from 'react';

const Viewed = ({ items, onRemove }) => {
    if (items.length === 0) {
        return (
            <div className="container">
                <h2>Ви ще не переглядали жодного гороскопу.</h2>
            </div>
        );
    }

    return (
        <div className="container">
            <h2>Історія переглядів</h2>
            <div className="zodiac-grid">
                {items.map((item) => (
                    <div key={item.name} className="zodiac-card viewed-card">
                        <div className="zodiac-front" style={{ cursor: 'default' }}>
                            <strong>{item.name}</strong>
                            <p style={{ fontSize: '12px', padding: '0 10px' }}>{item.text}</p>

                            <button
                                className="delete-btn"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onRemove(item.name);
                                }}
                            >
                                Видалити
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Viewed;