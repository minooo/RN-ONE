// 手机号检验
export const isMobile = mobile => {
  if (!mobile) {
    return false;
  }
  const m = mobile.replace(/ /g, "");
  return /^1[3|4|5|7|8]\d{9}$/.test(m) ? m : false;
};

// 身份证号检验
export const isIDNumber = id => {
  if (!id) {
    return false;
  }
  const m = id.replace(/ /g, "");
  return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(m) ? m : false;
};

// 中文姓名检验
export const isName = name => {
  if (!name) {
    return false;
  }
  const m = name.replace(/ /g, "");
  return /^[\u4e00-\u9fa5]{2,4}$/.test(m) ? m : false;
};

// 手机系统检验
export const isIOS = () => /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent);
export const isAndroid = () => /(Android)/i.test(navigator.userAgent);

// search 转为 obj
export const searchToObj = path => {
  const obj = {};
  path
    ? path
        .slice(path.indexOf("?"))
        .slice(1)
        .split("&")
        .forEach(x => {
          const [key, val] = x.split("=");
          if (val !== undefined) obj[key] = val;
        })
    : {};
  return obj;
};

// 获取 pathname 末尾的值
export const getPathnameLast = pathStr => {
  const arr = (pathStr || window.location.pathname).split("/");
  return arr.pop() || arr.pop();
};

// 对价格的去0处理
export const clipPrice = item => {
  const re = /^\d+.?\d*$/;
  const num = +item;
  const str = num.toFixed(2);

  if (!re.test(item)) {
    console.info(item, "传入的参数为非法数字，请检查！");
  }

  if (str.substr(-1) !== "0") {
    return str;
  } else if (str.substr(-2) === "00") {
    return num.toFixed(0);
  }
  return num.toFixed(1);
};

// 大额数字转万 / 亿
export const clipBigNum = item => {
  const num = +item;
  if (num >= 100000000) {
    const n1 = num / 100000000;
    const n2 = parseInt(n1, 10);
    const s2 = (parseInt(num / 10000000, 10) / 10).toFixed(1);
    if (n1 === n2 || +s2 === n2) {
      return `${n2}亿`;
    }
    return `${s2}亿`;
  }
  if (num >= 10000) {
    const n1 = num / 10000;
    const n2 = parseInt(n1, 10);
    const s2 = (parseInt(num / 1000, 10) / 10).toFixed(1);
    if (n1 === n2 || +s2 === n2) {
      return `${n2}万`;
    }
    return `${s2}万`;
  }
  return item;
};

// cookie 三连
export const setCookie = (key, value, expiredays = 29) => {
  const exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie = `${key}=${encodeURIComponent(
    value
  )};expires=${exdate.toUTCString()};path=/`;
};

export const getCookie = key => {
  const reg = new RegExp(`(^| )${key}=([^;]*)(;|$)`);
  const arr = document.cookie.match(reg);
  if (arr) return decodeURIComponent(arr[2]);
  return null;
};

export const delCookie = key => {
  const exdate = new Date();
  exdate.setTime(exdate.getTime() - 1);
  const value = getCookie(key);
  if (value)
    document.cookie = `${key}=${encodeURIComponent(
      value
    )};expires=${exdate.toUTCString()}`;
};
