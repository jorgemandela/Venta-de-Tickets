function resume () {
  const quantityTickets = document.getElementById('quantity').value
  const categoryDiscount = document.getElementById('category').value
  const spanTotal = document.getElementById('total')

  const amountFixed = 200

  calculateAmount(quantityTickets, categoryDiscount, amountFixed, spanTotal)
}

function calculateAmount (quantityTickets, categoryDiscount, amountFixed, spanTotal) {
  const costTickets = amountFixed * quantityTickets
  const discount = categoryDiscount * costTickets / 100
  const amountTotal = costTickets - discount

  spanTotal.innerHTML = amountTotal

  return amountTotal
}

