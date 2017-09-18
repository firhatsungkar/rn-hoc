import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { 
    Container,
    Header,
    Content,
    Item,
    Icon,
    Input,
    Button,
    Text
} from 'native-base'

import UserList from '../../components/userList'
import LoaderHOC from '../../hoc/loaderHOC'

export class Contact extends Component {
    
    static propTypes = {
        data: PropTypes.array,
    }

    constructor(props) {
        super(props)
        console.log('constructor props', props)
        this.state = {
            user: props.data,
            filtered: ''
        }
    }

    handleSearchInputChange = (filtered) => {

        this.setState({filtered})

    }

    render() {
        const { user, filtered } = this.state
        console.log('render user', user)      
        return (
            <Container>
                <Header searchBar rounded>
                <Item>
                    <Icon name="ios-search" />
                    <Input placeholder="Search name ..." onChangeText={(text)=> this.handleSearchInputChange(text)}/>
                    <Icon name="ios-people" />
                </Item>
                <Button transparent>
                    <Text>Search</Text>
                </Button>
                </Header>
                <UserList data={ user } filtered={ filtered }/>
            </Container>
        )
    }
}

export default LoaderHOC('data')(Contact)