import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import TextField from '@material-ui/core/TextField';

const NameInput = props => {
    // BEGIN HOOKS
    const [username, setUsername] = useState('');
    const [searchKey, setSearchKey] = useState(username);

    useEffect(() => {
        if (searchKey !== '') {
            fetch(`https://api.github.com/users/${searchKey}/repos`)
                .then((resp) => {
                    if (resp.status !== 200) return;

                    resp.json().then((data) => {
                        let favLanguage = _.head(_(_.map(data, 'language'))
                            .countBy()
                            .entries()
                            .maxBy(_.last));
                        console.log('your fav language', favLanguage);
                    })
                })
                .catch((err) => {
                    console.log('FETCH ERROR', err)
                })
        }
    }, [searchKey]);
    // END HOOKS

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') setSearchKey(event.target.value);
    }

    return (
        <TextField
            id='username'
            label='Github Username'
            margin='normal'
            variant='outlined'
            value={username}
            onChange={e => setUsername(e.target.value)}
            onKeyPress={handleKeyPress}
        />
    )
}

export default NameInput;