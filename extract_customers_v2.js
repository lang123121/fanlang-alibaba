(() => {
  const items = Array.from(document.querySelectorAll('.in-service-untouched-customer-list-item'));
  return items.map(item => {
    const company = item.querySelector('.in-service-untouched-customer-profile-head-titleNew-name a')?.innerText || '—';
    
    const getVal = (label) => {
      const spans = Array.from(item.querySelectorAll('.in-service-untouched-customer-profile-body-left div span'));
      const index = spans.findIndex(s => s.innerText === label);
      return index !== -1 && spans[index + 1] ? spans[index + 1].innerText : '—';
    };

    const industry = getVal('行业');
    const yearsText = getVal('会员年限');
    const years = parseInt(yearsText) || 0;
    const planVal = getVal('近一年方案金额');
    const p4pVal = getVal('P4P余额');
    const gmvVal = getVal('近3个月信保GMV');
    
    const convItem = Array.from(item.querySelectorAll('.flex-row-item')).find(i => i.querySelector('.flex-row-item-title')?.innerText === '商机转化率');
    const conv = convItem ? convItem.querySelector('.flex-row-item-num')?.innerText : '0.00%';

    const badge = item.querySelector('.avStatus-value')?.innerText || '—';
    
    const inq = Array.from(item.querySelectorAll('.flex-row-item')).find(i => i.querySelector('.flex-row-item-title')?.innerText === '询盘')?.querySelector('.flex-row-item-num')?.innerText || '0个';
    const click = Array.from(item.querySelectorAll('.flex-row-item')).find(i => i.querySelector('.flex-row-item-title')?.innerText === '点击')?.querySelector('.flex-row-item-num')?.innerText || '0个';
    const exp = Array.from(item.querySelectorAll('.flex-row-item')).find(i => i.querySelector('.flex-row-item-title')?.innerText === '曝光')?.querySelector('.flex-row-item-num')?.innerText || '0个';

    return {
      company,
      industry,
      years,
      metric1_val: planVal.replace('￥', ''),
      metric1_key: "近一年方案金额",
      metric2_val: gmvVal,
      metric2_key: "近3个月信保GMV",
      metric3_val: p4pVal.replace('￥', ''),
      metric3_key: "P4P余额",
      badge,
      highlight: `询盘${inq} 点击${click} 曝光${exp} 转化${conv}`,
      conv
    };
  });
})()