/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // 1. Calcula o custo base (40 por dia)
  let total = days * 40;

  // 2. Aplica os descontos baseados na quantidade de dias
  if (days >= 7) {
    total -= 50; // Desconto de 50 para 7 ou mais dias
  } else if (days >= 3) {
    total -= 20; // Desconto de 20 para 3 ou mais dias
  }

  // 3. Retorna o valor final
  return total;
}

module.exports = calculateRentalCost;
