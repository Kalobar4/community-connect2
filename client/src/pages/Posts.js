import React from 'react';
import PostPostIt from '../components/PostIt_Post/PostPostIt';
import PostModal from '../components/Posts/PostModal';
import API from '../utils/API';
import Navigation from '../components/Navigation/Navigation';
import border from '../components/Landing/corkborder.png';

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
    const woodBorder = 'url(' + border + ')';
    return (
      <div className='container'>
        <Navigation />
        <div
          style={{
            border: '29px solid transparent',
            backgroundImage:
              "url('https://images.freeimages.com/images/large-previews/c3a/corkboard-1580988.jpg')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            borderImageSource: woodBorder,
            borderImageSlice: '29 29',
            borderImageWidth: '29px 29px',
            height: '100vh'
          }}
          className='posted-board'
        >
          <h2 style={{ color: 'white', padding: '5px' }}>Help Wanted </h2>

          {/*passing getPosts to the add button so it can refresh*/}
          <PostModal PostModal={this.props.AddPost} getPosts={this.getPosts} />
          {/* <AddPost
          refreshPosts={this.getPosts}
        /> */}
          {!this.state.results.length ? (
            <h1>No Posts to Display</h1>
          ) : (
            this.state.results.map(post => {
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
                  _id={post._id}
                />
              );
            })
          )}
        </div>
      </div>
    );
  }
}

export default Posts;
