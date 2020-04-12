import React from 'react';
import WaveProgress from './WaveProgress';
import './FinancialProduct.css';
import axios from "../../common/common";


class FinancialProduct extends  React.Component{

  constructor(props){
    super(props);
    this.state = { data : [] };
  }

  componentDidMount(){
    // fetch('/api/v1/getProList').then(res => {
    //   if(res.ok){
    //     res.json().then(data => {
    //       this.setState({
    //         data
    //       })
    //     })
    //   }
    // });
    axios.get('/api/v1/getProList').then(res => {
        if(res.status){
            this.setState({
              data:res.data
            })
        }
    });
  }

  render() {
    return (
      <div className="page-block">
        <div className="tableHeader col-lg-3">
                    <span className="hisTitle">往期</span>理财重点产品
        </div>
        <div className="col-lg-4">
                  <input type="text" className="form-control input1" placeholder="快速查询重点产品"/>
                  <a herf="###" className="glyphicon glyphicon-search a1">|</a>
        </div>
        <div className="col-lg-1 c1">
                    <div className="onoffswitch d1">
                        <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch"/>
                        <label className="onoffswitch-label" htmlFor="myonoffswitch">
                            <span className="onoffswitch-inner"></span>
                            <span className="onoffswitch-switch"></span>
                        </label>
                    </div>
        </div>

        <div className="col-lg-4 text-right d2">
                    <a href="###" className="gab-hr page0">维护　|</a>　<a href="###">导出</a>　<span className="gab-hr"> |</span>　<a href="###" className="pro-his-page pro-his">往期重点产品</a>
        </div>
        {
          this.state.data.map(item => {
            return <Product key={ item.key} data={ item } />
          })
        }
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
                                    <WaveProgress r={50} percentage={ product.percent }/>
                                </div>
                                <div className="fa fa-times pull-right delete-icons"></div>
                            </div>  
                        </div> 
      </div>          
    )
  }
}
export default FinancialProduct;
