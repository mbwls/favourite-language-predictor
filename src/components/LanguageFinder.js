import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import '../styles/LanguageFinder.css';

import LanguageDisplay from '../components/LanguageDisplay';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const LanguageFinder = () => {
    // BEGIN HOOKS
    const [username, setUsername] = useState('');
    const [searchKey, setSearchKey] = useState(username);
    const [favLang, setFavLang] = useState('');
    const [valid, setValid] = useState(true);

    useEffect(() => {
        if (searchKey !== '')
            fetch(`https://api.github.com/users/${searchKey}/repos`)
                .then((resp) => {
                    switch (resp.status) {
                        case 200:
                            resp.json().then((data) => {
                                let fv = _.head(_(_.map(_.filter(data, (o) => o.language !== null), 'language'))
                                    .countBy()
                                    .entries()
                                    .maxBy(_.last));

                                setFavLang((fv ? fv : 'NO REPOS'));
                                setValid((fv ? true : false));
                            });
                            break;

                        default:
                            setFavLang('');
                            setValid(false);
                            return;
                    }
                })
                .catch((err) => {
                    console.log('FETCH ERROR', err)
                })
    }, [searchKey]);
    // END HOOKS

    // BEGIN EVENT HANDLERS
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') setSearchKey(event.target.value);
    }

    const handleClick = (event) => {
        setSearchKey(username);
    }
    // END EVENT HANDLERS

    return (
        <React.Fragment>
            <div>
                <TextField
                    error={!valid}
                    className='username-input'
                    label='GitHub Username'
                    margin='normal'
                    variant='outlined'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
            </div>

            <div>
                <Button
                    className='search-button'
                    onClick={handleClick}>
                    SEARCH
                </Button>

                <LanguageDisplay
                    language={favLang}
                    valid={valid}
                />
            </div>
        </React.Fragment>
    )
}

export default LanguageFinder;