const orderStatuses = Object.freeze({
  결제대기: 1,
  결제완료: 2,
  배송준비중: 3,
  배송중: 4,
  배송완료: 5,
  구매확정: 6,
  환불처리중: 7,
  환불완료: 8,
});

module.exports = { orderStatuses };
