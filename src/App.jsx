import React, { useState } from 'react';
import Home from './pages/Home';
import Luck from './pages/Luck';
import Viewed from './pages/Viewed';

function App() {
    const [page, setPage] = useState('home');
    const [viewedItems, setViewedItems] = useState([]);

    const addToViewed = (item) => {
        setViewedItems((prev) => {
            if (prev.find((i) => i.name === item.name)) return prev;
            return [...prev, item];
        });
    };

    const removeFromViewed = (nameToRemove) => {
        setViewedItems((prev) => prev.filter((item) => item.name !== nameToRemove));
    };

    return (
        <div>
            <nav className="navbar">
                <button
                    className={page === 'home' ? 'active-btn' : ''}
                    onClick={() => setPage('home')}
                >
                    Головна
                </button>
                <button
                    className={page === 'luck' ? 'active-btn' : ''}
                    onClick={() => setPage('luck')}
                >
                    Вдача
                </button>
                <button
                    className={page === 'viewed' ? 'active-btn' : ''}
                    onClick={() => setPage('viewed')}
                >
                    Переглянуті ({viewedItems.length})
                </button>
            </nav>

            <main>
                {page === 'home' && <Home />}
                {page === 'luck' && <Luck addToViewed={addToViewed} />}
                {page === 'viewed' && (
                    <Viewed items={viewedItems} onRemove={removeFromViewed} />
                )}
            </main>

            <footer style={{ textAlign: 'center', padding: '40px 20px', color: '#aaa', fontSize: '14px' }}>
                <p>&copy; 2025 Портал Гороскопів. Усі права захищено.</p>
                <p>Виконавець: Воробйов Кирило, група ІА-32</p>
            </footer>
        </div>
    );
}

export default App;