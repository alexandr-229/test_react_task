import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { LinkBtn } from '../LinkBtn/index';

export const NavigateBlock = () => {
    const [activeLinks, setActiveLinks] = useState([1, 2, 3, 4, 5]);
    const pageId = useParams().id;
    const navigate = useNavigate();

    useEffect(() => {
        const firstSituation = [1, 2, 3, 4, 5];
        const secondSituation = [6, 7, 8, 9, 10];
        const thirdSituation = [11, 12];
        if (pageId) {
            if (firstSituation.includes(+pageId)) {
                return;
            } else if (secondSituation.includes(+pageId)) {
                setActiveLinks([6, 7, 8, 9, 10]);
                return;
            } else if (thirdSituation.includes(+pageId)) {
                setActiveLinks([11, 12]);
            } else {
                navigate('/');
            }
        }
    }, []);

    return (
        <div className="navigateBlock">
            <div>
                {activeLinks[0] !== 1 ? (
                    <>
                        <Link to="/1">
                            <button
                                onClick={() => setActiveLinks([1, 2, 3, 4, 5])}
                                className="otherBtn"
                            >
                                1--
                            </button>
                        </Link>
                        {activeLinks[0] === 6 ? (
                            <Link to="/5">
                                <button
                                    className="otherBtn"
                                    onClick={() =>
                                        setActiveLinks([1, 2, 3, 4, 5])
                                    }
                                >
                                    {'<<'}
                                </button>
                            </Link>
                        ) : (
                            <Link to="/10">
                                <button
                                    className="otherBtn"
                                    onClick={() =>
                                        setActiveLinks([6, 7, 8, 9, 10])
                                    }
                                >
                                    {'<<'}
                                </button>
                            </Link>
                        )}
                    </>
                ) : null}
                {activeLinks.map((i) => {
                    return <LinkBtn to={`/${i}`} key={i} btn={i} />;
                })}
                {activeLinks[0] !== 11 ? (
                    <>
                        {activeLinks[0] === 1 ? (
                            <Link to="/6">
                                <button
                                    className="otherBtn"
                                    onClick={() =>
                                        setActiveLinks([6, 7, 8, 9, 10])
                                    }
                                >
                                    {'>>'}
                                </button>
                            </Link>
                        ) : (
                            <Link to="/11">
                                <button
                                    className="otherBtn"
                                    onClick={() => setActiveLinks([11, 12])}
                                >
                                    {'>>'}
                                </button>
                            </Link>
                        )}
                        <Link to="/12">
                            <button
                                className="otherBtn"
                                onClick={() => setActiveLinks([11, 12])}
                            >
                                --12
                            </button>
                        </Link>
                    </>
                ) : null}
            </div>
        </div>
    );
};
