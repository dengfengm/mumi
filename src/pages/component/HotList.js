import React from 'react';
import Ranking from './Ranking';
import './HotList.css';


class HotList extends React.Component{
  constructor(props){
    super(props)
    const tabs =[
      {name:'全部',index:0,isshow:true},
      {name:'存款',index:1,isshow:true},
      {name:'公募',index:2,isshow:true},
      {name:'保险',index:3,isshow:true}
    ]
    this.state={
      tab:0,
      tabs
    }
  }
  changeTabe=(idx)=>{
    console.log(idx);
    this.setState({
      tab:idx
    });
  }
  render(){
    const {tabs,tab} =this.state;
    return(
      <div className="container">
        <ul className="nav nav-tabs" style={{"paddingLeft":"15px"}}>
          {RenderTabs(tabs,tab,this.changeTabe)}
        </ul>
        {showMain(tab)}
      </div>
    )
  }
}

function RenderTabs(tabs,tab,changeTabs){
  return tabs.map((item, idx) => {
    if(!item.isshow){
      return null;
    }
    return(
        <li 
        key={item.index} 
        className ={ tab === idx ? 'active' :'' }
        onMouseEnter={()=>{changeTabs(idx)}}
        >
        <a>{item.name}</a>
        </li>
    )
  })
}

function showMain(idx){
  switch (idx) {
    case 0:
      return <Ranking></Ranking>
      break;
    case 1:
      return <Ranking></Ranking>
      break;
    case 2:
      return <Ranking></Ranking>
      break;
    default:
      return <Ranking></Ranking>
      break;
  }
}

export default HotList;
