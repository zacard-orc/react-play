var request = require('request');

var headers = {
  'x-api-version': '3.0.91',
  'x-zse-93': '101_3_2.0',
  'accept-language': 'zh-CN,zh;q=0.9',
  'x-zse-96': '2.0_a_OyHUHqUBxY2_2qTqFBe6U8b_Yf2LS01XOqSeU8HwNp',
  'x-ab-pb':
    'CqQBBARCBJsLiQLXAgcEhAIqA08BjQGmATIEzwtSC0cAwAIKBA8L9At0AaED1ws/AKADGwBAAbcD7AoqBOALnwK5AggEKgKiA+QKQwAOBMICtADKAvgDRQRWDIwC9ANqAcwCjgMLBGkBVwO0CtgC4QMBC2AL3AvzA/YCTwNyAwcMUAOJDLULwQIyA+gDCQQ7Am0CbAMzBDQMfQLHAqsDJQQ0BDcM6gMSUgADAgQAAQABAAAAAAsBAAEAAQAAAAAAAAABAAEAAAEVAAAAABUAAQEAAAABAAAAAAEAAAAAAAAAAAAAAAABAQAAAwEAAAAAAAAAAAEAAAAAAQs=',
  'x-ab-param':
    'tp_zrec=1;pf_adjust=1;zr_expslotpaid=1;tp_contents=2;top_test_4_liguangyi=1;tp_dingyue_video=0;qap_question_visitor= 0;tp_topic_style=0;zr_slotpaidexp=1;qap_question_author=0;pf_noti_entry_num=2;se_ffzx_jushen1=0',
  cookie:
    '_zap=399d303c-e8ba-475b-b178-3323ddb38248; _xsrf=Ws8GcQeD6P9NeZCxMK8zkC06LU3XwVbr; d_c0="AFAfREdXhBOPTkZEtVy9bB6nHIb6J-F1zKk=|1628078764"; __snaker__id=WWrfZ0UVFQOR2zEu; _9755xjdesxxd_=32; YD00517437729195%3AWM_NI=gIGapcqENJ1sWRNNjo3so9qVMDqjN6RC4yNmttMGTpwFARA1u4Fh76DdgutJ7sHlSlhILXk%2FhipBggpI%2F5znUEIHENlFiRsnyLJ1xmSdJ4hLATccsDoTOvrsdV%2F7%2FKMUSnQ%3D; YD00517437729195%3AWM_NIKE=9ca17ae2e6ffcda170e2e6ee91d741babcfea7ef70f1b08fb2c15f979e9ebbf472a99788a7ce3cb6bda9b6ce2af0fea7c3b92aa5978982f369b39b82abb479958e82afe965f1ada1daf45e8f9cbf8bcd3e929dfc9acd67b8ac83a8d77cb59a8fb3c43bb7ec8a89b63e88bca996f742f5ad888dd268ac9784b9ea25acb7c0a3e66db497e1d6f966979b87a9c846b09aa7b3f266bb9486d2fb6791bc86d5eb48838cad84f250ad8c8197f179a88ae1d8ae418f8b9d8fd437e2a3; YD00517437729195%3AWM_TID=dfOQOxVxW3ZBAABQRQY7zkZDEakuIkQL; gdxidpyhxdE=qcJbNM9v7snEZiBRd%2FVvmkayXcY9IT1jLklytBZHoKL2cQPdq%5CBSahnjOJk%5CU7%2FYrpunHAwmZ7L%5C6%2BNxfoInRsNHggZZ%2FAjDQ%5Cmz68%5CimN2budZO1lJQSoUrmavtwpkqM%2BfhGNDOkt2DtojrmMUIKSlvA7gd%2FBqCxvPmGSt8kJ0APw8B%3A1628082186992; Hm_lvt_98beee57fd2ef70ccdd5ca52b9740c49=1628078764,1628081817; SESSIONID=8Gipqx5LeFAodaOVRfwyXkNW4TPHyucRz4vggWiHMyc; JOID=VlgWB0uZlsFJd56aepnGGG88yR5updKvPQLirDH41IMhF_vRL8emzyh3mZ55Wnf8lanNeF-IPw5yAoPo8S6RYZ8=; osd=VVsdA0ialcpNdJ2ZcZ3FG2w3zR1tptmrPgHhpzX714AqE_jSLMyizCt0kpp6WXT3karOe1SMPA1xCYfr8i2aZZw=; Hm_lpvt_98beee57fd2ef70ccdd5ca52b9740c49=1628255431; KLBRSID=c450def82e5863a200934bb67541d696|1636767090|1636764945',
  accept: '*/*',
  authority: 'www.zhihu.com',
  'user-agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.164 Safari/537.36',
  'x-requested-with': 'fetch',
  'x-app-za': 'OS=Web',
};

var options = {
  url:
    'https://www.zhihu.com/api/v4/search_v3?t=general&q=astaxin%E8%99%BE%E9%9D%92%E7%B4%A0&correction=1&offset=0&limit=20&lc_idx=0&show_all_topics=0&search_hash_id=5441d98de9eedc9ba597b4dfcd815c4e&vertical_info=0%2C1%2C0%2C0%2C0%2C0%2C0%2C0%2C1%2C1',
  headers: headers,
};

function callback(error, response, body) {
  console.log(body);

  // if (!error && response.statusCode === 200) {
  //   console.log(body);
  // }
}

request(options, callback);
