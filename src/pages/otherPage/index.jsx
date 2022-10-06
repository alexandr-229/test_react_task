import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { NavigateBlock } from '../../components/NavigateBlock';
import { getData } from '../../api';

export const OtherPage = () => {
    const [person, setPerson] = useState({
        avatar: '',
        email: '',
        first_name: '',
        last_name: '',
    });
    const pageId = useParams().id;

    useEffect(() => {
        const firstSituation = [1, 2, 3, 4, 5, 6];
        if (firstSituation.includes(+pageId)) {
            getData(1).then((res) => {
                setPerson(res.data[+pageId - 1]);
            });
        } else {
            getData(2).then((res) => {
                setPerson(res.data[+pageId - 7]);
            });
        }
    }, [pageId]);

    return (
        <div>
            <h1>Pagination (Page {pageId})</h1>
            <NavigateBlock />
            <p>
                Return to the <Link to="/">index page</Link>.
            </p>
            <p>Redux has state for page {pageId}.</p>

            <div className="card">
                <div className="card-img-wrap">
                    <img className="img" src={person.avatar} />
                </div>
                <div className="card-content-wrap">
                    <span className="card-title">
                        {person.first_name} {person.last_name}
                    </span>
                    <p className="card-content-email">{person.email}</p>
                </div>
            </div>
        </div>
    );
};
