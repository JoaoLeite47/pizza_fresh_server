import { UnprocessableEntityException } from '@nestjs/common';

export function handleError(error: Error): undefined {
  const errorLines = error.message?.split('\n');
  const lastErrorLines = errorLines[errorLines.length - 1]?.trim(); //pego a mensagem de err da ultima linha

  if (!lastErrorLines) {
    console.error(error);
  }
  throw new UnprocessableEntityException(
    lastErrorLines || 'Algum erro ocorreu na operação!',
  );
} //throw para erros de tipos na criação de um novo objeto
