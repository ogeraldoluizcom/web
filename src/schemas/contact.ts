import { z } from 'zod'
import sanitizeHtml from 'sanitize-html'

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: 'Nome é obrigatório'
    })
    .max(100, {
      message: 'Nome deve ter no máximo 100 caracteres'
    })
    .transform((value) => sanitizeHtml(value)),
  subject: z
    .string()
    .min(1, {
      message: 'Assunto é obrigatório'
    })
    .max(100, {
      message: 'Assunto deve ter no máximo 100 caracteres'
    })
    .transform((value) => sanitizeHtml(value)),
  email: z.string().email({
    message: 'Informe um e-mail válido'
  }),
  body: z
    .string()
    .min(1, {
      message: 'Mensagem é obrigatória'
    })
    .max(1000, {
      message: 'Mensagem deve ter no máximo 1000 caracteres'
    })
    .transform((value) => sanitizeHtml(value))
})
