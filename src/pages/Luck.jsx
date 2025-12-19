import React, { useState } from 'react';

const zodiacs = [
    { name: 'Овен', date: '21.03 - 19.04', text: 'Сьогодні вдалий день для нових починань.' },
    { name: 'Телець', date: '20.04 - 20.05', text: 'Зверніть увагу на фінанси.' },
    { name: 'Близнюки', date: '21.05 - 20.06', text: 'День спілкування та нових ідей.' },
    { name: 'Рак', date: '21.06 - 22.07', text: 'Прислухайтеся до інтуїції.' },
    { name: 'Лев', date: '23.07 - 22.08', text: 'Ви сьогодні в центрі уваги.' },
    { name: 'Діва', date: '23.08 - 22.09', text: 'Час навести лад у справах.' },
    { name: 'Терези', date: '23.09 - 22.10', text: 'Гармонія у стосунках — головна тема.' },
    { name: 'Скорпіон', date: '23.10 - 21.11', text: 'Ваша енергія на піку.' },
    { name: 'Стрілець', date: '22.11 - 21.12', text: 'Подорожі принесуть задоволення.' },
    { name: 'Козеріг', date: '22.12 - 19.01', text: 'Стабільність — ваше гасло.' },
    { name: 'Водолій', date: '20.01 - 18.02', text: 'Час для креативних ідей.' },
    { name: 'Риби', date: '19.02 - 20.03', text: 'Сьогодні важливо відпочити.' }
];

const ITEMS_PER_PAGE = 4;

const Luck = ({ addToViewed }) => {
    const [activeIdx, setActiveIdx] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(zodiacs.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentItems = zodiacs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handleCardClick = (index, item) => {
        if (activeIdx !== index) {
            addToViewed(item);
        }
        setActiveIdx(activeIdx === index ? null : index);
    };

    const handlePageChange = (newPage) => {
        setActiveIdx(null);
        setCurrentPage(newPage);
    };

    return (
        <div className="container">
            <h2 style={{ marginBottom: '30px' }}>Оберіть свій знак</h2>

            <div className="zodiac-grid">
                {currentItems.map((item, index) => (
                    <div
                        key={item.name}
                        className={`zodiac-card ${activeIdx === index ? 'active' : ''}`}
                        onClick={() => handleCardClick(index, item)}
                    >
                        <div className="zodiac-card-inner">
                            <div className="zodiac-front">
                                <strong>{item.name}</strong>
                                <small>{item.date}</small>
                            </div>
                            <div className="zodiac-back">
                                <div className="horoscope-text">{item.text}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="pagination">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i + 1}
                        className={currentPage === i + 1 ? 'active-page' : ''}
                        onClick={() => handlePageChange(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Luck;