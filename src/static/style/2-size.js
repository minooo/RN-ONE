const size = {};

// 公用的间距样式
// 通用的padding margin值 从5 到 30 步进为5
for (let i = 5; i <= 30; i += 5) {
  size[`ptb${i}`] = { paddingVertical: i };
  size[`pt${i}`] = { paddingTop: i };
  size[`pb${i}`] = { paddingBottom: i };

  size[`plr${i}`] = { paddingHorizontal: i };
  size[`pl${i}`] = { paddingLeft: i };
  size[`pr${i}`] = { paddingRight: i };

  size[`mt${i}`] = { marginTop: i };
  size[`mb${i}`] = { marginBottom: i };
  size[`ml${i}`] = { marginLeft: i };
  size[`mr${i}`] = { marginRight: i };
}

// 字体大小
// 从 10 到 30，步进为2
for (let i = 10; i <= 22; i += 2) {
  size[`font${i}`] = { fontSize: i }
}

// 宽高
// 从 20 到 120，步进为2
for (let i = 20; i <= 120; i += 2) {
  size[`h${i}`] = { height: i }
  size[`w${i}`] = { width: i }
}

export default {
  ...size,
  r10: { borderRadius: 10 },
  r30: { borderRadius: 30 },
  circle: { borderRadius: 1000 },
}
