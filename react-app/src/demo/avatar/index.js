import React, { Component } from 'react';
import Avatar from '../../components/avatar';
import './index.css'
import userAvatar from './famous.png'; // 这里只加载了文件夹中的静态资源，如果是从服务器取数据，此步自动忽略

const datas = [
  {
    url: '',
    name: 'Crystal Angel',
    type: '1',
  },
  {
    url: '',
    name: 'K',
  },
  {
    url: '',
    name: 'k',
    gender: '1',
  },
  {
    url: userAvatar,
    name: 'Crystal Angel',
    style: {width: 60, height: 60}
  }
]
class AvatarDemo extends Component {
  render() {
    return (
      <div className='avatar'>
        <div className='container'>
          {datas.map((item,index)=>{
            return (
              <Avatar url={item.url} name={item.name} type={item.type} gender={item.gender} style={item.style} key={index} />
            )
          })}
        </div>
      </div>
    )
  }
}

export default AvatarDemo