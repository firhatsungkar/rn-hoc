import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    Content,
    List,
    ListItem,
    Left,
    Body,
    Right,
    Thumbnail,
    Text
} from 'native-base'

export class userList extends Component {
    
  static propTypes = {
      data: PropTypes.array,
      filtered: PropTypes.string,
  }

  render() {
    const filtered = this.props.filtered
    const users = this.props.data.filter((user) => `${user.name.first} ${user.name.last}`.includes(filtered));
    return (
    <Content>
        { users.length > 0 && users.map((user, index) => (
        <List key={index}>
            <ListItem avatar>
                <Left>
                    <Thumbnail source={{ uri: user.picture.thumbnail }} />
                </Left>
                <Body>
                    <Text>{ user.name.first + ' ' + user.name.last }</Text>
                    <Text note>{ user.phone }</Text>
                </Body>
                <Right>
                    <Text note>{ user.registered }</Text>
                </Right>
            </ListItem>
        </List>
        )) }
    </Content>
    )
  }
}

export default userList
