# API
- visibilityHeight：滚动距离为多高的时候显示图标//默认盒子的高度除以内容的高度为6时展示(number)
- rate：向上滚动的速度(number)默认为3
- clickfun：点击返回顶部后的回调函数（function）
<!-- - target: 滚动的Dom元素   默认为BackTop下的第一个子元素，理论上必须 -->
- target: 滚动的Dom元素的className   默认为BackTop下的第一个子元素，理论上必须
- wrpCls: 自定义className
- icon: 自动定义返回顶部图标

## 新需求
- 图标可拖拽
- 可以自定义图标大小
- 无图标模式下自定义回到顶部事件