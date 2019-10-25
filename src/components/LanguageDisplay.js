import React from 'react';

const LanguageDisplay = (props) => {
    return (
        props.language === 'NO REPOS' ? <h3>User has no valid respositories!</h3> :
            (!props.valid ? <h3>Invalid username!</h3> :
                (props.language && props.language !== '' ? <h3>{`Favourite language: ${props.language}`}</h3> : null)
            )
    )
}

export default LanguageDisplay
