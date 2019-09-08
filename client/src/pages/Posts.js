import React from 'react';
import PostPostIt from '../components/Layout/PostPostIt';
import PostModal from '../components/Posts/PostModal';
import API from '../utils/API';
import { Transform } from 'stream';

const postsData = [
  {
    _id: '5d72ac328bd033130a84c2a9',
    category: 'yard',
    urgent: false,
    help_needed: true,
    offering: false,
    cost_per_hour: 0,
    cost_per_service: 15,
    trade: false,
    post_title: 'Looking for HS Student to help with Lawn',
    post_details: 'Small Lawn on Tremont Lane in need of bi-weekly mowing',
    __v: 0
  },
  {
    _id: '5d72adfa3c6a481394e50c7c',
    category: 'kids',
    urgent: true,
    help_needed: true,
    offering: false,
    cost_per_hour: 10,
    cost_per_service: 0,
    trade: false,
    post_title: 'Baby Sitter needed for Tuesday Night!',
    post_details:
      'This is an urgent request for someone to help with babysitting 2 children (and one dog) for approx 3 hours on Tuesday night.  Appreciate the help if you can...!!!',
    __v: 0
  },
  {
    _id: '5d72aef77f2f1d13d96e50d1',
    category: 'pets',
    urgent: false,
    help_needed: false,
    offering: true,
    cost_per_hour: 0,
    cost_per_service: 18,
    trade: false,
    post_title: 'Dog Sitting',
    post_details:
      'I would like to help look after your pets while you are on summer vacation.  The rate of $18 per day includes walking them 3-4 times per day, and some chores around your house taking 30 minutes per day (e.g. bring in newspapers, feed the fish and cat etc. while I spend time with Fido.  My contact  info is Ricky at (704) 555-7654',
    __v: 0
  },
  {
    _id: '5d72b0e37f2f1d13d96e50d2',
    category: 'car pooling',
    urgent: false,
    help_needed: false,
    offering: true,
    cost_per_hour: 0,
    cost_per_service: 5,
    trade: false,
    post_title: 'Car Pooling Group',
    post_details:
      "Car Pooling Group from Matthews Reserve Apartments to Uptown.  We take turns daily.  Right now there are 5 of us but we'd like to get a small group of up to 10.  Everyone contributes $3 per ride toward collective gas costs or a social hour that we hold monthly.",
    __v: 0
  }
];

class Posts extends React.Component {
  state = {
    results: []
  };

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    API.findAll('posts')
      .then(res => this.setState({ results: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className='posted-board'>
        <div className='post-banner'>
          <h3>Help Wanted </h3>
          <h3>&amp;</h3>
          <h3>Services Offered</h3>
        </div>
        {/*passing getPosts to the add button so it can refresh*/}
        <PostModal PostModal={this.props.AddPost} />
        {/* <AddPost
          refreshPosts={this.getPosts}
        /> */}
        {!this.state.results.length ? (
          <h1>No Posts to Display</h1>
        ) : (
          postsData.map(post => {
            return (
              <PostPostIt
                key={post._id}
                post_title={post.post_title}
                post_details={post.post_details}
                category={post.category}
                urgent={post.urgent}
                help_needed={post.help_needed}
                offering={post.offering}
                cost_per_hour={post.cost_per_hour}
                cost_per_service={post.cost_per_service}
                trade={post.trade}
              />
            );
          })
        )}
      </div>
    );
  }
}

export default Posts;
