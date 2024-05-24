export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const valor = mathFunction();
      queue.push(valor);
  } catch (err) {
    queue.push(err.toString());
  }
  queue.push('Guardrail was processed')
  return queue;
} 
