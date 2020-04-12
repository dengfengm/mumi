import React from 'react';
import './Comments.css';


class Comments extends  React.Component{

  constructor(props){
    super(props);
    this.state = { data : [] };
  }

  componentDidMount(){
    fetch('/api/v1/getCommentList').then(res => {
      if(res.ok){
        res.json().then(data => {
          this.setState({
            data
          })
        })
      }
    });
  }

  render() {
    return (
      <div className="page-block">
        <div className="tableHeader col-lg-3">
                    <span className="hisTitle"></span>经验分享区
        </div>
        <hr/>
        <ul id="commontList">
        {
          this.state.data.map(item => {
            return <Comment key={ item.id} data={ item } />
          })
        }
        </ul>
      </div>      
    )
  }
}

class Comment extends  React.Component{
  render() {
    const comment = this.props.data;
    return (
      <div>
        <li className="comment-line">
            <div>
                <div className="col-md-6 text-left">
                    <span className="cmt-user">{comment.user}</span>
                    <span className="cmt-ts">{comment.time}</span>
                </div>
                <div className="col-md-6 text-right">
                    <a href="###" className="reply">置顶</a>　
                    <a href="###" className="delete">删除</a>　
                     <a className="fa fa-thumbs-o-up" href="###" >{comment.count}</a>
                </div>
            </div>
            <div className="col-md-12 cmt-content">{comment.desc}</div>
            <div className="clearfix"></div>
            <hr/>
        </li>
      </div>          
    )
  }
}
export default Comments;
