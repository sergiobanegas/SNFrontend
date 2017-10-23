import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {withRouter} from 'react-router-dom';
import {getDashBoardPosts} from '../../actions/posts/posts';
import { Card, Image, Button } from 'semantic-ui-react';

export default class DashBoardComponent extends Component {
  render () {
    const { error, posts } = this.props;
    return (
      <div className="ui one center aligned page grid">
        <div className="twelve wide column left aligned">
        {posts.map(post => <Card key={post._id} fluid>
           <Card.Content>
           <Card.Header>
             {post.title}
           </Card.Header>
           <Card.Meta>
          {post.author.name}
          <div className="right floated">
            <img className="ui avatar image" src={post.author.avatar}/>
        </div>
        </Card.Meta>
           <Card.Description>
          {post.content}
        </Card.Description>
      </Card.Content>
           <div className="extra content">
           <span className="right floated time">{moment(post.createdAt).fromNow()}</span>
           <a onClick="" href="#">View comments ({post.comments.length})</a>
            </div>
        </Card>)}
      </div>
      </div>
    );
  }

}
