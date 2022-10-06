import { Routes, Route } from 'react-router-dom';
import { IndexPage } from './pages/indexFile/index';
import { OtherPage } from './pages/otherPage/index';

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="/:id" element={<OtherPage />} />
            </Routes>
        </div>
    );
};

export default App;
