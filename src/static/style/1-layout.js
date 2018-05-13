// View 是创建UI时的最基础组件
// 我们的布局是基于它展开的
// 它支持flex布局，并且默认方向是垂直的，这点要注意

export default {
  // 关于flex容器内子元素之间的位置关系
  // 由于子元素排列默认从左到右排列，所以只针对以下 从右到左，从上到下，从下到上声明类
  row: { flexDirection: "row" },
  row_reverse: { flexDirection: "row-reverse" },
  column_reverse: { flexDirection: "column-reverse" },

  // 让子元素 换行, RN 没有反转换行
  wrap: { flexWrap: "wrap" },

  // 关于flex容器内所有子元素与主轴的位置关系
  // 默认，子元素都是左对齐
  // 居中对齐
  jc_center: { justifyContent: "center" },

  // 靠尾对齐
  jc_end: { justifyContent: "flex-end" },

  // 两端对齐
  jc_between: { justifyContent: "space-between" },

  // 间隔相等
  jc_around: { justifyContent: "space-around" },

  // 关于flex容器内所有子元素与交叉轴（即主轴的垂直居中线）
  // 默认，子元素与交叉轴的起点对齐
  // 与交叉轴的中心对齐
  ai_center: { alignItems: "center" },

  // 与交叉轴尾端对齐
  ai_end: { alignItems: "flex-end" },

  // 子元素占据容器高度
  ai_end: { alignItems: "stretch" },

  // 如果是多根轴线，比如子元素换行会出现至少两根轴线
  // 注意下列属性对单根轴线的子元素是无效的
  // 子元素对对应交叉轴的排列类如下
  // 默认对交叉轴起点对齐
  // 多行子元素对交叉轴中心对齐
  ac_center: { alignContent: "center" },

  // 多行子元素对交叉轴尾端对齐
  ac_end: { alignContent: "flex-end" },

  // 多行子元素相对交叉轴两端对齐
  ac_between: { alignContent: "space-between" },

  // 多行子元素相对交叉轴等间隔对齐
  ac_around: { alignContent: "space-around" },

  // 多行子元素占据整个交叉轴
  ac_stretch: { alignContent: "stretch" },

  // 占据剩余空间
  equal: { flex: 1 },
  equal2: { flex: 2 },
  equal3: { flex: 3 },

  // 分配剩余空间，但不缩小
  equal_auto: { flexGrow: 1, flexShrink: 0, flexBasis: "auto" },

  // 绝不缩小, 经过测试，只要给定宽度，元素就不会缩小了
  // equal_no: { flex: 0 }
};

// flex 参考指南。http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html
// 任何一个容器都可以指定 flex 布局
// .box-example { display: flex }
// 行内元素也可以使用 flex 布局
// .box-example { display: inline-flex; }

// 以下6个属性设置在容器上

// 1. flex-direction --> 子项目排列的方向
// row 默认，水平从左到右
// row-reverse 水平从右到左
// column 从上到下
// column-reverse 从下到上

// 2. flex-wrap 默认情况下，子项目都排在一条线上，而此属性解决的是，如果一条线排不下，子项目如何换行
// nowrap 默认，不换行
// wrap 换行，第一行在上方
// wrap-reverse 换行，第一行在下方

// 3. flex-flow 是 flex-direction 和 flex-wrap 的简写形式，默认值为 row nowrap

// 4. justify-content 定义了子项目在主轴上的对齐方式 水平方向
// flex-start 默认值，左对齐
// flex-end 右对齐
// center 居中
// space-between 两端对齐，子项目之间的间隔相等
// space-around 每个子项目两侧的间隔相等。所以，子项目之间的间隔比子项目与父容器边界的间隔大一倍

// 5. align-items 定义子项目在交叉轴上如何对齐。
// 可以理解每个子项目有一根私有轴线，和这些这项目的主轴线垂直交叉
// flex-start 交叉轴的起点对齐
// flex-end 交叉轴的终点对齐
// center 交叉轴的中点对齐
// baseline 子项目的第一行文字的基线对齐
// stretch 默认值，如果子项目未设置高度或设为auto,将占满整个容器的高度

// 6. align-content 定义了多根轴线的对齐方式，如果子项目只有一根轴线，则该属性无效。
// 多根轴线就是多行，每一行有一个轴线
// flex-start 与交叉轴的起点对齐。
// flex-end 与交叉轴的终点对齐
// center 与交叉轴的中点对齐
// space-between 与交叉轴两端对齐，轴线之间的间隔平均分布。
// space-around 每根轴线两侧的间隔都相等，所以轴线之间的间隔比轴线与边框的间隔大一倍
// stretch 默认值，轴线占满整个交叉轴

// 以下6个属性设置在子项目上。

// 1. order 定义子项目的排列顺序，数值越小，排位越靠前。默认值为0.

// 2. flex-grow 定义子项目放大比例，默认为0，即如果存在剩余空间，也不放大。
// 如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。
// 如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍

// 3. flex-shrink 定义了子项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
// 如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。
// 如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。

// 4. flex-basis 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。
// 浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
// 它可以设为跟width或height属性一样的值（比如350px, 100%），则项目将占据固定空间。

// 5. flex 该属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
// 该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto) 和 1 这样就可以等宽
// 建议优先使用这个 flex 属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

// align-self 允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性。
// 默认值为 auto，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch
// 该属性可能取6个值，除了 auto ,其他都与 align-items 属性完全一致。

// ------------------------------------------------------------
