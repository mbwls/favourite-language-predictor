import React, { useState, useEffect } from 'react';
import '../styles/LanguageFinder.css';
import _ from 'lodash';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const LanguageFinder = () => {
    // BEGIN HOOKS
    const [username, setUsername] = useState('');
    const [searchKey, setSearchKey] = useState(username);
    const [favLang, setFavLang] = useState('?');

    useEffect(() => {
        if (searchKey !== '')
            fetch(`https://api.github.com/users/${searchKey}/repos`)
                .then((resp) => {
                    if (resp.status !== 200) {
                        console.log(resp);
                        return;
                    };

                    resp.json().then((data) => {
                        setFavLang(_.head(_(_.map(data, 'language'))
                            .countBy()
                            .entries()
                            .maxBy(_.last)));
                    })
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
                <h3>{`Favourite language: ${favLang}`}</h3>
            </div>
        </React.Fragment>
    )
}

export default LanguageFinder;