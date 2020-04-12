import React from 'react';
import './Ranking.css';


class Ranking extends  React.Component{

  constructor(props){
    super(props);
    this.state = { data : [] };
  }

  componentDidMount(){
    
  }

  render() {
    return (
      <div className="box-shadow1">
          <h4 className="tableHeader" style={{"marginTop": "15px"}}>存款排名</h4>
                        <div className="rank-top-box"><div className="rank-list-box">
                            <div className="rank-head">
                                <h4><a href="###">大额存单<br/>存款余额</a></h4>
                            </div>
                            <ul className="head-block-list">
                                <li className="head-block-list-item"><span className="head-list-rank rank-1">1</span> <a href="###">大额存单结构性存款<small>202302</small></a></li>
                                <li className="head-block-list-item"><span className="head-list-rank rank-2">2</span> <a href="###">大额存单结构性存款<small>202302</small></a></li>
                                <li className="head-block-list-item"><span className="head-list-rank rank-3">3</span> <a href="###">大额存单结构性存款<small>202302</small></a></li>
                                <li className="text-center head-list-opts"><a href="hotProductSetEdit.html">设</a><a href="detailHotPro.html">多</a></li>
                            </ul>
                        </div><div className="rank-list-box">
                            <div className="rank-head">
                                <h4><a href="###">稳赢结构性存款<br/>销售额</a></h4>
                            </div>
                            <ul className="head-block-list">
                                <li className="head-block-list-item"><span className="head-list-rank rank-1">1</span> <a href="###">稳赢结构性存款037<small>202302</small></a></li>
                                <li className="head-block-list-item"><span className="head-list-rank rank-2">2</span> <a href="###">稳赢结构性存款045<small>202302</small></a></li>
                                <li className="head-block-list-item"><span className="head-list-rank rank-3">3</span> <a href="###">稳赢结构性存款019<small>202302</small></a></li>
                                <li className="text-center head-list-opts"><a href="hotProductSetEdit.html">设</a><a href="detailHotPro.html">多</a></li>
                            </ul>
                        </div><div className="rank-list-box">
                            <div className="rank-head">
                                <h4><a href="###">聚赢结构性存款<br/>销售额</a></h4>
                            </div>
                            <ul className="head-block-list">
                                <li className="head-block-list-item"><span className="head-list-rank rank-1">1</span> <a href="###">聚赢结构性存款17号<small>202302</small></a></li>
                                <li className="head-block-list-item"><span className="head-list-rank rank-2">2</span> <a href="###">聚赢结构性存款2号<small>202302</small></a></li>
                                <li className="head-block-list-item"><span className="head-list-rank rank-3">3</span> <a href="###">聚赢结构性存款10号<small>202302</small></a></li>
                                <li className="text-center head-list-opts"><a href="hotProductSetEdit.html">设</a><a href="detailHotPro.html">多</a></li>
                            </ul>
                        </div><div className="rank-list-box">
                            <div className="rank-head">
                                <h4><a href="###">安心存<br/>存款余额</a></h4>
                            </div>
                            <ul className="head-block-list">
                                <li className="head-block-list-item"><span className="head-list-rank rank-1">1</span> <a href="###">安心存1号存款产品<small>202302</small></a></li>
                                <li className="head-block-list-item"><span className="head-list-rank rank-2">2</span> <a href="###">安心存2号存款产品<small>202302</small></a></li>
                                <li className="head-block-list-item"><span className="head-list-rank rank-3">3</span> <a href="###"></a></li>
                                <li className="text-center head-list-opts"><a href="hotProductSetEdit.html">设</a><a href="detailHotPro.html">多</a></li>
                            </ul>
                        </div><div className="rank-list-box">
                            <div className="rank-head">
                                <h4><a className="###">钱生钱<br/>存款余额</a></h4>
                            </div>
                            <ul className="head-block-list">
                                <li className="head-block-list-item"><span className="head-list-rank rank-1">1</span> <a href="###">钱生钱B(人民币)<small>R1501043</small></a></li>
                                <li className="head-block-list-item"><span className="head-list-rank rank-2">2</span> <a href="###"></a></li>
                                <li className="head-block-list-item"><span className="head-list-rank rank-3">3</span> <a href="###"></a></li>
                                <li className="text-center head-list-opts"><a href="hotProductSetEdit.html">设</a><a href="detailHotPro.html">多</a></li>
                            </ul>
                        </div>
                      </div>
        {/* {
          this.state.data.map(item => {
            return <Product key={ item.id} data={ item } />
          })
        } */}
      </div>      
    )
  }
}

class Product extends  React.Component{
  render() {
    const product = this.props.data;
    return (
      <div className="FinancialProduct">
        <div className="pro-basic">
          <div className="pro-name-box">
            <span className="pro-name">{ product.fundName }</span><br /><small className="pro-code">{ product.fundCode }</small>
            <span className="pro-tag-o">{ product.fundType }</span> <span className="pro-tag">三级</span> <span className="pro-tag">白</span>
          </div>
          <div className="pro-files">
                                <div className="file-count"><span className="fa fa-file-text-o"></span> 5</div>
                                <div className="pro-files-list">
                                    <div className="pro-files-list-box">
                                        <div className="pro-file"><a href="###">工银瑞信高端制造行业产品说明书.pdf</a></div>
                                        <div className="pro-file"><a href="###">高端制造行业最新研究报告.pdf</a></div>
                                        <div className="pro-file"><a href="###">工银瑞信高端制造行业推荐优势.pdf</a></div>
                                        <div className="pro-file"><a href="###">高端制造行业最新研究报告.pdf</a></div>
                                        <div className="pro-file"><a href="###">工银瑞信高端制造行业推荐优势.pdf</a></div>
                                    </div>
                                </div>
          </div>
        </div>
        <div className="pro-values">
                          <div className="pro-large-values">
                                <div className="pro-large-values1">
                                    <div className="pro-large-values2">
                                        <div className="value-item">
                                            <div className="value-item-num font-red"><span>{ product.returnRate }</span><small>%</small></div>
                                            <div className="value-item-label">比较基准/最新净值</div>
                                        </div>
                                        <div className="value-item">
                                            <div className="value-item-num"><span>{ product.days }</span><small>天</small></div>
                                            <div className="value-item-label">期限</div>
                                        </div>
                                        <div className="value-item">
                                            <div className="value-item-num"><span>{ product.startAmt }</span><small>万人民币</small></div>
                                            <div className="value-item-label">购买起点</div>
                                        </div>
                                    </div>
                                    <div className="pro-ext-value">
                                        <div className="pro-desc">认购期：2019-08-20~2019-09-10 | 到期日：2019-12-31</div>
                                        <div className="pro-desc">{ product.desc }</div>
                                    </div>
                                </div>
                                <div className="value-item1">
                                    
                                </div>
                                <div className="fa fa-times pull-right delete-icons"></div>
                            </div>  
                        </div> 
      </div>          
    )
  }
}

export default Ranking;
