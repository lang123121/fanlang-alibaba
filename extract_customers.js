(() => {
  const rows = Array.from(document.querySelectorAll('tr.next-table-row'));
  return rows.map(row => {
    const text = row.innerText;
    const company = row.querySelector('a.customer-name')?.innerText || '—';
    const industryMatch = text.match(/行业(.*?)\n/);
    const yearsMatch = text.match(/会员年限(\d+)年/);
    const planMatch = text.match(/近一年方案金额￥([\d.]+)/);
    const gmvMatch = text.match(/近3个月信保GMV([\d.]+)/);
    const p4pMatch = text.match(/P4P余额￥([\d.]+)/);
    const convMatch = text.match(/商机转化率\s*([\d.]+%)/);
    const statusMatch = text.match(/实地认证\s*-\s*(.*?)\s/);
    
    // Highlights
    const inqMatch = text.match(/询盘\s*(\d+)个/);
    const clickMatch = text.match(/点击\s*(\d+)个/);
    const expMatch = text.match(/曝光\s*(\d+)个/);

    return {
      company,
      industry: industryMatch ? industryMatch[1].trim() : '—',
      years: yearsMatch ? parseInt(yearsMatch[1]) : 0,
      metric1_val: planMatch ? planMatch[1] : '—',
      metric1_key: "近一年方案金额",
      metric2_val: gmvMatch ? gmvMatch[1] : '—',
      metric2_key: "近3个月信保GMV",
      metric3_val: p4pMatch ? p4pMatch[1] : '—',
      metric3_key: "P4P余额",
      badge: statusMatch ? statusMatch[1].trim() : '—',
      highlight: `询盘${inqMatch ? inqMatch[1] : 0} 点击${clickMatch ? clickMatch[1] : 0} 曝光${expMatch ? expMatch[1] : 0} 转化${convMatch ? convMatch[1] : '0.00%'}`,
      conv: convMatch ? convMatch[1] : '0.00%'
    };
  });
})()