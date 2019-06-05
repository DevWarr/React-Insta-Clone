import React from 'react';



const withAuthenticate = RenderedComponent => 
    class extends React.Component {
        render() {
            return <RenderedComponent />
        }
    }


export default withAuthenticate;