import React, { Component } from 'react'

const quotesURL="https://breakingbadapi.com/api/quotes"

export default class QuotesApp extends Component {

    state = {
        quotes: []
    }

    componentDidMount() {
        fetch(quotesURL)
            .then(response => response.json())
            .then(quotes => this.setState({quotes}))
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
