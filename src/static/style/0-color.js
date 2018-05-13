const colorList = {
  main: "#45c2c8",
  second: "#ffaa19",
  border: "#e5e5e5",
  smoke: "#f3f3f3",
  white: "#fff",
}
const result = {}

for (x in colorList) {
  result[`c_${x}`] = { color: colorList[x] }
  result[`bg_${x}`] = { backgroundColor: colorList[x] }
}

export default {
  ...result,
  c_000: { color: "#000" },
  c_666: { color: "#666" },
  c_999: { color: "#999" },
  border_bottom: { borderBottomColor: "#f5f5f5", borderBottomWidth: 1 },
  border_top: { borderTopColor: "#f5f5f5", borderTopWidth: 1 },
  border_main: { borderColor: "#45c2c8", borderWidth: 1 },
  border_second: { borderColor: "#ffaa19", borderWidth: 1 },
}
