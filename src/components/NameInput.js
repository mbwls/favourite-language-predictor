import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const NameInput = props => {
    // BEGIN HOOKS
    const [username, setUsername] = useState('');
    const [searchKey, setSearchKey] = useState(username);
    const [favLang, setFavLang] = useState('');

    useEffect(() => {
        if (searchKey !== '')
            fetch(`https://api.github.com/users/${searchKey}/repos`)
                .then((resp) => {
                    if (resp.status !== 200) {
                        console.log(resp);
                        return;
                    };

                    resp.json().then((data) => {
                        console.log('errrr', data.message)
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
            <TextField
                id='username'
                label='Github Username'
                margin='normal'
                variant='outlined'
                value={username}
                onChange={e => setUsername(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <Button
                style={{'backgroundColor':'#e0e0e0'}}
                onClick={handleClick}>
                    SEARCH
            </Button>
            <h3>{`Your favourite language is ${favLang}`}</h3>
        </React.Fragment>
    )
}

export default NameInput;