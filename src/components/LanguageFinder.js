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
                                // filter out repos with no valid language and determine most frequent language
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
    const handleChange = (event) => {
        setUsername(event.target.value);
        // 'clear' output when search field is empty
        if (event.target.value === '') {
            setFavLang('');
            setValid(true);
        }
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') setSearchKey(event.target.value);
    }

    const handleClick = (event) => {
        setSearchKey(username);
    }
    // END EVENT HANDLERS

    return (
        <div>
            <div>
                <TextField
                    error={!valid}
                    className='username-input'
                    label='GitHub Username'
                    margin='normal'
                    variant='outlined'
                    value={username}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    data-test='username-input'
                />
            </div>

            <div>
                <Button
                    className='search-button'
                    onClick={handleClick}
                    data-test='search-button'>
                    SEARCH
                </Button>

                <LanguageDisplay
                    language={favLang}
                    valid={valid}
                    data-test='language-display'
                />
            </div>
        </div>
    )
}

export default LanguageFinder;