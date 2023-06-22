export default function runProm(ipaddr: string) {
  const ip = ipaddr.split(".");
  console.log(ip);
  let count = 0;
  let res = false;
  for (const a of ip) {
    if (!Number.isNaN(parseInt(a))) {
      if (parseInt(a) > 255 || parseInt(a) < 0) {
        return false;
      } else {
        count++;
      }
    } else {
      return false;
    }
  }
  if (count == 4) {
    res = true;
  }
  console.log(res);
}
